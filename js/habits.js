// ─── HABITS MODULE ────────────────────────────────────────────────────

function openHabitModal(){document.getElementById('habit-overlay').classList.add('open')}
function closeHabitModal(){document.getElementById('habit-overlay').classList.remove('open');document.getElementById('hm-name').value=''}
function saveHabit(){const nm=document.getElementById('hm-name').value.trim();if(!nm){toast('Name required','err');return}
  S.habits.push({id:uid(),name:nm,freq:document.getElementById('hm-freq').value,days:{}});save();closeHabitModal();renderHabits();toast('Habit added!','ok');updateBadges()}
function deleteHabit(id){S.habits=S.habits.filter(h=>h.id!==id);save();renderHabits();toast('Habit removed','err')}
function toggleHDay(id,ds){const h=S.habits.find(h=>h.id===id);if(!h)return;h.days[ds]=!h.days[ds];save();renderHabits()}
function renderHabits(){
  const now=new Date(),t0=todayStr();const week=Array.from({length:7},(_,i)=>{const d=new Date(now);d.setDate(now.getDate()-6+i);return{str:d.toISOString().split('T')[0],lbl:['S','M','T','W','T','F','S'][d.getDay()],isToday:d.toISOString().split('T')[0]===t0}});
  document.getElementById('habit-list').innerHTML=S.habits.length===0?`<div class="empty-state"><div class="empty-ico"><i class="fa-solid fa-fire"></i></div><div class="empty-t">No habits yet</div><div class="empty-d">Start tracking positive habits.</div></div>`:S.habits.map(h=>{const s=habitStreak(h);return `<div class="habit-item"><div class="habit-info"><div class="habit-nm">${h.name}</div><div class="habit-freq-lbl"><i class="fa-solid fa-repeat" style="font-size:10px"></i>${h.freq}</div></div><div class="habit-streak"><i class="fa-solid fa-fire" style="font-size:12px"></i> ${s} day${s!==1?'s':''}</div><div class="habit-days">${week.map(d=>`<div class="hday${h.days[d.str]?' done':''}${d.isToday?' today':''}" onclick="toggleHDay('${h.id}','${d.str}')">${d.lbl}</div>`).join('')}</div><button class="ta-btn del" onclick="deleteHabit('${h.id}')"><i class="fa-solid fa-trash-can"></i></button></div>`}).join('');
  updateBadges();
}
