// ─── NOTES MODULE ────────────────────────────────────────────────────

function openNoteModal(id){
  S.editNote=id||null;
  if(id){const n=S.notes.find(n=>n.id===id);if(n){document.getElementById('nm-title').value=n.title;document.getElementById('nm-content').value=n.content}
    document.getElementById('note-modal-title').textContent='Edit Note';}
  else{document.getElementById('nm-title').value='';document.getElementById('nm-content').value='';document.getElementById('note-modal-title').textContent='New Note'}
  document.getElementById('note-overlay').classList.add('open');
}
function closeNoteModal(){document.getElementById('note-overlay').classList.remove('open')}
function saveNote(){
  const title=document.getElementById('nm-title').value.trim()||'Untitled';const content=document.getElementById('nm-content').value.trim();
  if(S.editNote){const n=S.notes.find(n=>n.id===S.editNote);if(n){n.title=title;n.content=content}
    toast('Note updated','info');}
  else{S.notes.unshift({id:uid(),title,content,created:Date.now()});toast('Note saved!','ok')}
  save();closeNoteModal();renderNotes();updateBadges();
}
function deleteNote(id,e){e.stopPropagation();S.notes=S.notes.filter(n=>n.id!==id);save();renderNotes();updateBadges();toast('Note deleted','err')}
function renderNotes(){
  document.getElementById('notes-grid').innerHTML=S.notes.length===0?`<div class="empty-state" style="grid-column:1/-1"><div class="empty-ico"><i class="fa-regular fa-note-sticky"></i></div><div class="empty-t">No notes</div><div class="empty-d">Capture ideas quickly.</div></div>`:S.notes.filter(n=>!S.search||n.title.toLowerCase().includes(S.search)||n.content.toLowerCase().includes(S.search)).map(n=>`<div class="note-card" onclick="openNoteModal('${n.id}')"><div class="note-head"><div class="note-title">${n.title}</div><button class="ta-btn del" onclick="deleteNote('${n.id}',event)"><i class="fa-solid fa-trash-can"></i></button></div><div class="note-body">${n.content}</div><div class="note-foot"><i class="fa-regular fa-clock"></i>${new Date(n.created).toLocaleDateString('en-US',{month:'short',day:'numeric'})}</div></div>`).join('');
}
