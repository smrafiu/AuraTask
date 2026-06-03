// ─── APP INITIALIZATION ────────────────────────────────────────────────────

function boot(){
  document.getElementById('tb-date').textContent=
    new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'});
  applyProfile();
  loadSettings();
  if(!S.tasks.length) seedData();
  renderAll();
}

function seedData(){
  const d0=new Date().toISOString().split('T')[0];
  const d1=new Date(Date.now()+86400000).toISOString().split('T')[0];
  const dm1=new Date(Date.now()-86400000).toISOString().split('T')[0];
  S.tasks=[
    {id:uid(),title:'Complete project proposal',desc:'Q3 budget & timeline',cat:'work',priority:'high',due:d0,time:'17:00',status:'inprog',done:false,starred:true,created:Date.now()-3600000},
    {id:uid(),title:'Morning workout',desc:'30 min cardio + weights',cat:'health',priority:'medium',due:d0,time:'07:00',status:'todo',done:false,starred:false,created:Date.now()-7200000},
    {id:uid(),title:'Read 20 pages',desc:'"Atomic Habits" chapter 4',cat:'learning',priority:'low',due:d0,time:'',status:'todo',done:false,starred:false,created:Date.now()-10000000},
    {id:uid(),title:'Review monthly budget',desc:'Check expenses spreadsheet',cat:'finance',priority:'medium',due:d1,time:'',status:'todo',done:false,starred:false,created:Date.now()-14000000},
    {id:uid(),title:'Team standup call',desc:'Daily dev sync',cat:'work',priority:'high',due:dm1,time:'10:00',status:'done',done:true,starred:false,created:Date.now()-86400000},
    {id:uid(),title:'Grocery shopping',desc:'Vegetables & essentials',cat:'personal',priority:'low',due:dm1,time:'',status:'todo',done:false,starred:false,created:Date.now()-172800000},
    {id:uid(),title:'Design new landing page',desc:'Figma mockup & color palette',cat:'work',priority:'medium',due:d1,time:'',status:'todo',done:false,starred:false,created:Date.now()-200000},
  ];
  S.habits=[
    {id:uid(),name:'Meditate 10 min',freq:'daily',days:{}},
    {id:uid(),name:'Drink 2L Water',freq:'daily',days:{}},
    {id:uid(),name:'No social media after 9pm',freq:'daily',days:{}},
  ];
  S.notes=[
    {id:uid(),title:'App Feature Ideas',content:'Focus mode, habit streaks, analytics dashboard, blue gradient theme',created:Date.now()},
    {id:uid(),title:'Meeting Notes',content:'Q3 roadmap: new features, improved onboarding, analytics v2, mobile optimization',created:Date.now()-3600000},
  ];
  save();
}

// ─── UTILITIES ────────────────────────────────────────────────────

function uid(){return 'x'+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}
function fmtDate(s){if(!s)return '';return new Date(s+'T00:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'})}
function todayStr(){return new Date().toISOString().split('T')[0]}
function isToday(s){return s===todayStr()}
function isPast(s){return s&&s<todayStr()}
function priOrd(p){return{high:0,medium:1,low:2}[p]||1}

function toast(msg,type='info'){
  const ic={ok:'fa-circle-check',err:'fa-circle-xmark',info:'fa-circle-info'};
  const cls={ok:'t-ok',err:'t-err',info:'t-info'};
  const el=document.createElement('div');
  el.className=`toast ${cls[type]||'t-info'}`;
  el.innerHTML=`<i class="fa-solid ${ic[type]||ic.info}"></i><span>${msg}</span>`;
  document.getElementById('toast-wrap').appendChild(el);
  setTimeout(()=>{el.style.animation='tOut .3s ease forwards';setTimeout(()=>el.remove(),300)},2800);
}

// ─── SIDEBAR & NAVIGATION ────────────────────────────────────────────────────

function toggleSidebar(){
  const sb=document.getElementById('sidebar');
  const ov=document.getElementById('sb-overlay');
  sb.classList.toggle('open');
  ov.classList.toggle('show');
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sb-overlay').classList.remove('show');
}

const pageNames={tasks:'Dashboard',analytics:'Analytics',habits:'Habit Tracker',notes:'Notes',settings:'Settings'};
function goPage(pg,el){
  document.querySelectorAll('.page-wrap').forEach(p=>p.classList.remove('active'));
  document.getElementById(`pg-${pg}`).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  if(el)el.classList.add('active');
  document.getElementById('tb-page').textContent=pageNames[pg]||pg;
  if(pg==='analytics')renderAnalytics();
  if(pg==='habits')renderHabits();
  if(pg==='notes')renderNotes();
  if(pg==='settings')loadSettings();
  closeSidebar();
}

function switchView(v,el){
  S.view=v;
  document.querySelectorAll('.view-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('view-list').style.display=v==='list'?'block':'none';
  document.getElementById('view-kanban').style.display=v==='kanban'?'block':'none';
  document.getElementById('view-calendar').style.display=v==='calendar'?'block':'none';
  document.getElementById('filter-bar').style.display=v==='calendar'?'none':'flex';
  if(v==='kanban')renderKanban();
  if(v==='calendar')renderCal();
}

function renderAll(){updateStats();renderTasks();updateBadges()}

function updateBadges(){
  document.getElementById('nb-notes').textContent=S.notes.length;
  const maxS=S.habits.reduce((m,h)=>Math.max(m,habitStreak(h)),0);
  document.getElementById('nb-habit').textContent=maxS>0?`${maxS}`:'—';
}

function habitStreak(h){
  let s=0;const d=new Date();
  for(let i=0;i<365;i++){const k=d.toISOString().split('T')[0];if(!h.days[k])break;s++;d.setDate(d.getDate()-1);}
  return s;
}
