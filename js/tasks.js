// ─── TASKS MODULE ────────────────────────────────────────────────────

function updateStats(){
  const tot=S.tasks.length;const done=S.tasks.filter(t=>t.done).length;const pend=S.tasks.filter(t=>!t.done).length;
  const ov=S.tasks.filter(t=>!t.done&&isPast(t.due)).length;const rate=tot?Math.round(done/tot*100):0;
  const td_all=S.tasks.filter(t=>isToday(t.due)).length;const td_done=S.tasks.filter(t=>t.done&&isToday(t.due)).length;
  document.getElementById('s-total').textContent=tot;
  document.getElementById('s-pending').textContent=pend;
  document.getElementById('s-done').textContent=done;
  document.getElementById('s-rate').textContent=rate+'%';
  const ovEl=document.getElementById('s-ov-note');
  ovEl.innerHTML=ov>0?`<i class="fa-solid fa-triangle-exclamation"></i> ${ov} overdue`:`<i class="fa-solid fa-circle-info"></i> 0 overdue`;
  ovEl.className='stat-note'+(ov>0?' err':'');
  document.getElementById('s-prog-val').textContent=`${td_done} / ${td_all} tasks`;
  document.getElementById('prog-bar').style.width=(td_all?Math.round(td_done/td_all*100):0)+'%';
  document.getElementById('nb-pending').textContent=pend;
}

function toggleF(name){
  const key='f'+name;S[key]=!S[key];
  document.getElementById(`fb-${name.toLowerCase()}`).classList.toggle('on',S[key]);
  renderTasks();
}

function renderTasks(){
  const cat=document.getElementById('f-cat').value;const pri=document.getElementById('f-pri').value;const srt=document.getElementById('f-sort').value;
  let tasks=[...S.tasks];
  if(!S.cfg.showCompleted)tasks=tasks.filter(t=>!t.done);
  if(cat!=='all')tasks=tasks.filter(t=>t.cat===cat);
  if(pri!=='all')tasks=tasks.filter(t=>t.priority===pri);
  if(S.fToday)tasks=tasks.filter(t=>isToday(t.due));
  if(S.fOverdue)tasks=tasks.filter(t=>!t.done&&isPast(t.due));
  if(S.fStarred)tasks=tasks.filter(t=>t.starred);
  if(S.search)tasks=tasks.filter(t=>t.title.toLowerCase().includes(S.search)||(t.desc||'').toLowerCase().includes(S.search));
  if(srt==='priority')tasks.sort((a,b)=>priOrd(a.priority)-priOrd(b.priority));
  else if(srt==='due')tasks.sort((a,b)=>(a.due||'9999')>(b.due||'9999')?1:-1);
  else if(srt==='title')tasks.sort((a,b)=>a.title.localeCompare(b.title));
  else tasks.sort((a,b)=>b.created-a.created);

  const now=todayStr();const g={ov:[],td:[],up:[],sd:[],dn:[]};
  tasks.forEach(t=>{
    if(t.done){g.dn.push(t);return}
    if(!t.due){g.sd.push(t);return}
    if(t.due<now){g.ov.push(t);return}
    if(t.due===now){g.td.push(t);return}
    g.up.push(t);
  });

  let h='';
  const grp=(lbl,icon,arr)=>{if(!arr.length)return;h+=`<div class="sep-label"><i class="fa-solid fa-${icon}" style="font-size:10px"></i>${lbl}</div>`;arr.forEach(t=>{h+=taskHTML(t)})};
  grp('Overdue','triangle-exclamation',g.ov);
  grp('Today','calendar-day',g.td);
  grp('Upcoming','calendar-plus',g.up);
  grp('Someday','cloud',g.sd);
  grp('Completed','circle-check',g.dn);

  const list=document.getElementById('task-list');
  list.innerHTML=h||`<div class="empty-state"><div class="empty-ico"><i class="fa-solid fa-clipboard-list"></i></div><div class="empty-t">No tasks found</div><div class="empty-d">Add a new task or adjust your filters.</div><button class="btn-primary" onclick="openTaskModal()" style="margin:0 auto;display:inline-flex"><i class="fa-solid fa-plus"></i> Add Task</button></div>`;
}

function taskHTML(t){
  const ov=!t.done&&isPast(t.due);const td=isToday(t.due);
  return `<div class="task-card${t.done?' done':''}${ov?' ov':t.priority==='high'&&!ov?' hipri':''}"><div class="tc-chk${t.done?' chkd':''}" onclick="toggleDone('${t.id}')"></div><div class="tc-body"><div class="tc-title">${t.title}</div>${t.desc?`<div class="tc-desc">${t.desc}</div>`:''}
  <div class="tc-meta"><span class="tag tag-${t.priority==='high'?'hi':t.priority==='medium'?'med':'lo'}">${t.priority}</span><span class="tag tag-cat">${t.cat}</span>${t.due?`<span class="tc-due${ov?' ov':td?' td':''}"><i class="fa-regular fa-calendar" style="font-size:10px"></i>${ov?'Overdue':td?'Today':fmtDate(t.due)}${t.time?' · '+t.time:''}</span>`:''}${t.starred?`<span style="color:#f59e0b;font-size:12px"><i class="fa-solid fa-star"></i></span>`:''}</div></div><div class="tc-acts"><button class="ta-btn" onclick="toggleStar('${t.id}')"><i class="fa-${t.starred?'solid':'regular'} fa-star"></i></button><button class="ta-btn" onclick="focusOn('${t.id}')"><i class="fa-solid fa-crosshairs"></i></button><button class="ta-btn" onclick="editTask('${t.id}')"><i class="fa-solid fa-pen-to-square"></i></button><button class="ta-btn del" onclick="deleteTask('${t.id}')"><i class="fa-solid fa-trash-can"></i></button></div></div>`;
}

function toggleDone(id){const t=S.tasks.find(t=>t.id===id);if(!t)return;t.done=!t.done;t.status=t.done?'done':'todo';save();if(t.done)toast('Task completed!','ok');renderAll()}
function toggleStar(id){const t=S.tasks.find(t=>t.id===id);if(!t)return;t.starred=!t.starred;save();renderTasks()}
function deleteTask(id){if(!confirm('Delete this task?'))return;S.tasks=S.tasks.filter(t=>t.id!==id);save();toast('Task deleted','err');renderAll()}
function editTask(id){
  const t=S.tasks.find(t=>t.id===id);if(!t)return;S.editTask=id;
  document.getElementById('task-modal-title').textContent='Edit Task';
  document.getElementById('m-title').value=t.title;document.getElementById('m-desc').value=t.desc||'';
  document.getElementById('m-cat').value=t.cat;document.getElementById('m-priority').value=t.priority;
  document.getElementById('m-due').value=t.due||'';document.getElementById('m-time').value=t.time||'';
  document.getElementById('m-status').value=t.status||'todo';openTaskModal();
}
function focusOn(id){const t=S.tasks.find(t=>t.id===id);if(t)document.getElementById('f-task-name').textContent=t.title;openFocus()}

function openTaskModal(){document.getElementById('task-overlay').classList.add('open')}
function closeTaskModal(){
  document.getElementById('task-overlay').classList.remove('open');S.editTask=null;
  document.getElementById('task-modal-title').textContent='New Task';
  ['m-title','m-desc','m-due','m-time'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('m-status').value='todo';
}
function saveTask(){
  const title=document.getElementById('m-title').value.trim();if(!title){toast('Title is required','err');return}
  const prev=S.editTask?S.tasks.find(t=>t.id===S.editTask):null;
  const data={id:S.editTask||uid(),title,desc:document.getElementById('m-desc').value.trim(),cat:document.getElementById('m-cat').value,
    priority:document.getElementById('m-priority').value,due:document.getElementById('m-due').value,time:document.getElementById('m-time').value,
    status:document.getElementById('m-status').value,done:document.getElementById('m-status').value==='done',starred:prev?prev.starred:false,created:prev?prev.created:Date.now(),};
  if(S.editTask){const i=S.tasks.findIndex(t=>t.id===S.editTask);if(i>-1)S.tasks[i]=data;toast('Task updated','info')}
  else{S.tasks.unshift(data);toast('Task added!','ok')}
  save();closeTaskModal();renderAll();
}

let _drag=null;
function renderKanban(){
  const cols={todo:[],inprog:[],done:[]};
  S.tasks.forEach(t=>(cols[t.status]||cols.todo).push(t));
  [['todo','k-todo','kc-todo'],['inprog','k-ip','kc-ip'],['done','k-done','kc-done']].forEach(([key,el,cnt])=>{
    document.getElementById(el).innerHTML=cols[key].map(t=>`<div class="k-card" draggable="true" ondragstart="_drag='${t.id}'" ondragover="event.preventDefault()" ondrop="ddrop(event,'${key}')"><div class="k-card-title">${t.title}</div><div style="display:flex;gap:5px;flex-wrap:wrap"><span class="tag tag-${t.priority==='high'?'hi':t.priority==='medium'?'med':'lo'}">${t.priority}</span>${t.due?`<span class="tc-due"><i class="fa-regular fa-calendar" style="font-size:9px"></i>${fmtDate(t.due)}</span>`:''}</div></div>`).join('');
    document.getElementById(cnt).textContent=cols[key].length;
  });
}
function ddrop(e,col){e.preventDefault();if(!_drag)return;const t=S.tasks.find(t=>t.id===_drag);if(t){t.status=col;t.done=col==='done';save();renderKanban();renderAll()}
_drag=null;}

function calNav(d){S.calOff+=d;renderCal()}
function renderCal(){
  const now=new Date();const d=new Date(now.getFullYear(),now.getMonth()+S.calOff,1);const yr=d.getFullYear(),mo=d.getMonth();
  document.getElementById('cal-lbl').textContent=d.toLocaleDateString('en-US',{month:'long',year:'numeric'});
  document.getElementById('cal-head').innerHTML=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(dd=>`<div class="cal-hd">${dd}</div>`).join('');
  const start=new Date(yr,mo,1).getDay();const total=new Date(yr,mo+1,0).getDate();const today=todayStr();
  let cells='';
  for(let i=0;i<start;i++){const pd=new Date(yr,mo,-start+i+1).getDate();cells+=`<div class="cal-cell dim"><div class="cal-dn">${pd}</div></div>`}
  for(let dd=1;dd<=total;dd++){
    const ds=`${yr}-${String(mo+1).padStart(2,'0')}-${String(dd).padStart(2,'0')}`;const ts=S.tasks.filter(t=>t.due===ds);const isT=ds===today;
    cells+=`<div class="cal-cell${isT?' today':''}" onclick="toast('${ts.length} task(s) on ${ds}','info')"><div class="cal-dn">${dd}</div><div>${ts.slice(0,5).map(t=>`<span class="cal-dot" style="background:${t.priority==='high'?'#60a5fa':t.priority==='low'?'#34d399':'#fbbf24'}"></span>`).join('')}</div></div>`;
  }
  document.getElementById('cal-body').innerHTML=cells;
}
