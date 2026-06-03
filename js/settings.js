// ─── SETTINGS MODULE ────────────────────────────────────────────────────

function applyProfile(){
  const nm=localStorage.getItem('at4_name')||'AuraUser';const av=localStorage.getItem('at4_avatar')||'';
  document.getElementById('ua-init').textContent=nm.split(/\s+/).map(p=>p[0]).join('').toUpperCase().slice(0,2);
  document.getElementById('ua-name').textContent=nm;
  if(av){const img=document.createElement('img');img.src=av;document.getElementById('ua-av').innerHTML='';document.getElementById('ua-av').appendChild(img)}
}
function loadSettings(){
  const nm=localStorage.getItem('at4_name')||'AuraUser';document.getElementById('set-name').value=nm;
  document.getElementById('prof-av-init').textContent=nm.split(/\s+/).map(p=>p[0]).join('').toUpperCase().slice(0,2);
  const av=localStorage.getItem('at4_avatar');if(av){const img=document.createElement('img');img.src=av;document.getElementById('prof-av-big').innerHTML='';document.getElementById('prof-av-big').appendChild(img);document.getElementById('prof-av-big').appendChild(Object.assign(document.createElement('i'),{className:'fa-solid fa-camera prof-cam-ico'}))}
  document.getElementById('tog-completed').classList.toggle('on',S.cfg.showCompleted);
  document.getElementById('tog-autofocus').classList.toggle('on',S.cfg.autoFocus);
}
function updateName(){const nm=document.getElementById('set-name').value.trim()||'AuraUser';localStorage.setItem('at4_name',nm);applyProfile();updateBadges()}
function togSet(key,el){S.cfg[key]=!S.cfg[key];el.classList.toggle('on');save()}
function triggerPhotoUpload(){document.getElementById('photo-input').click()}
function handlePhotoUpload(input){if(!input.files[0])return;const r=new FileReader();r.onload=e=>{localStorage.setItem('at4_avatar',e.target.result);applyProfile();loadSettings();toast('Avatar updated','ok')};r.readAsDataURL(input.files[0])}
function exportAll(){const data={tasks:S.tasks,habits:S.habits,notes:S.notes,cfg:S.cfg,stats:S.stats};const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const a=Object.assign(document.createElement('a'),{href:URL.createObjectURL(blob),download:`auratask-${new Date().toISOString().split('T')[0]}.json'});a.click();toast('Data exported!','ok')}
function triggerImport(){document.getElementById('import-input').click()}
function handleImport(input){if(!input.files[0])return;const r=new FileReader();r.onload=e=>{try{const data=JSON.parse(e.target.result);if(data.tasks||data.habits||data.notes){if(data.tasks)S.tasks=data.tasks;if(data.habits)S.habits=data.habits;if(data.notes)S.notes=data.notes;save();renderAll();toast('Data imported!','ok')}else{toast('Invalid file format','err')}}catch(er){toast('Error reading file','err')}};r.readAsText(input.files[0])}
function clearAll(){if(!confirm('Delete ALL data? This cannot be undone!'))return;if(!confirm('Really sure? This will remove everything.'))return;S.tasks=[];S.habits=[];S.notes=[];save();renderAll();toast('All data cleared','err')}

// ─── STATE MANAGEMENT ────────────────────────────────────────────────────

const S={
  tasks:  JSON.parse(localStorage.getItem('at4_tasks') ||'[]'),
  habits: JSON.parse(localStorage.getItem('at4_habits')||'[]'),
  notes:  JSON.parse(localStorage.getItem('at4_notes') ||'[]'),
  cfg:    JSON.parse(localStorage.getItem('at4_cfg')   ||'{"showCompleted":true,"autoFocus":false}'),
  stats:  JSON.parse(localStorage.getItem('at4_stats') ||'{"focus":0,"streak":0}'),
  editTask:null,editNote:null,
  fToday:false,fOverdue:false,fStarred:false,
  search:'',calOff:0,view:'list',
  pom:{running:false,secs:25*60,phase:'work',session:1,iv:null},
};

function save(){
  localStorage.setItem('at4_tasks',JSON.stringify(S.tasks));
  localStorage.setItem('at4_habits',JSON.stringify(S.habits));
  localStorage.setItem('at4_notes',JSON.stringify(S.notes));
  localStorage.setItem('at4_cfg',JSON.stringify(S.cfg));
  localStorage.setItem('at4_stats',JSON.stringify(S.stats));
}

// ─── FOCUS/POMODORO ────────────────────────────────────────────────────

function openFocus(){document.getElementById('focus-screen').classList.add('open');if(!S.pom.running&&S.pom.secs===25*60)updateFocusDisplay()}
function closeFocus(){document.getElementById('focus-screen').classList.remove('open');if(S.pom.running){clearInterval(S.pom.iv);S.pom.running=false}}
function updateFocusDisplay(){const m=Math.floor(S.pom.secs/60),s=S.pom.secs%60;document.getElementById('f-timer').textContent=`${m}:${s.toString().padStart(2,'0')}`;document.getElementById('f-phase-lbl').textContent=S.pom.phase==='work'?'Work Session':'Break Time';document.getElementById('f-sessions').textContent=`Session ${S.pom.session} / 4`}
function togglePom(){
  if(S.pom.running){clearInterval(S.pom.iv);S.pom.running=false;document.getElementById('f-play').innerHTML='<i class="fa-solid fa-play"></i>';return}
  S.pom.running=true;document.getElementById('f-play').innerHTML='<i class="fa-solid fa-pause"></i>';
  S.pom.iv=setInterval(()=>{S.pom.secs--;if(S.pom.secs<0){clearInterval(S.pom.iv);S.pom.running=false;const isWork=S.pom.phase==='work';toast(isWork?'Work session complete! Take a break.':'Break over! Ready for another round?','ok');
    if(isWork){S.pom.phase='break';S.pom.secs=5*60}else{S.pom.session++;if(S.pom.session>4){S.pom.session=1;S.stats.focus++;save()}S.pom.phase='work';S.pom.secs=25*60}updateFocusDisplay();document.getElementById('f-play').innerHTML='<i class="fa-solid fa-play"></i>'}updateFocusDisplay()},1000);updateFocusDisplay()}
function resetPom(){S.pom.secs=S.pom.phase==='work'?25*60:5*60;updateFocusDisplay()}
function skipPom(){const isWork=S.pom.phase==='work';S.pom.phase=isWork?'break':'work';S.pom.secs=isWork?5*60:25*60;if(!isWork&&S.pom.session<4){S.pom.session++}else if(!isWork){S.pom.session=1;S.stats.focus++;save()}updateFocusDisplay()}

// ─── KEYBOARD & UTILITIES ────────────────────────────────────────────────────

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeFocus();['task-overlay','habit-overlay','note-overlay'].forEach(id=>document.getElementById(id).classList.remove('open'));closeSidebar()}
  if((e.ctrlKey||e.metaKey)&&e.key==='n'&&!e.shiftKey){e.preventDefault();openTaskModal()}
  if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();document.getElementById('g-search').focus()}
});

['task-overlay','habit-overlay','note-overlay'].forEach(id=>{document.getElementById(id).addEventListener('click',function(e){if(e.target===this)this.classList.remove('open')})});

function doSearch(q){S.search=q.toLowerCase();renderTasks();renderNotes();renderHabits()}
