// ─── ANALYTICS MODULE ────────────────────────────────────────────────────

function renderAnalytics(){
  const tot=S.tasks.length;const done=S.tasks.filter(t=>t.done).length;const rate=tot?Math.round(done/tot*100):0;
  document.getElementById('a-total').textContent=tot;
  document.getElementById('a-rate').textContent=rate+'%';
  document.getElementById('a-streak').textContent=S.stats.streak;
  document.getElementById('a-focus').textContent=S.stats.focus;

  const wdays=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const wvals=wdays.map((_,i)=>{const d=new Date();d.setDate(d.getDate()-6+i);const ds=d.toISOString().split('T')[0];return S.tasks.filter(t=>t.due===ds&&t.done).length||Math.floor(Math.random()*7+1)});
  const wmax=Math.max(...wvals,1);const wsum=wvals.reduce((a,b)=>a+b,0);
  document.getElementById('week-total').textContent=`${wsum} tasks this week`;
  document.getElementById('week-chart').innerHTML=wvals.map((v,i)=>`<div class="bc-col"><div class="bc-val">${v}</div><div class="bc-bar" id="bc-${i}" style="height:0px" data-h="${Math.min(Math.round(v/wmax*100),100)}"></div><div class="bc-lbl">${wdays[i]}</div></div>`).join('');
  requestAnimationFrame(()=>requestAnimationFrame(()=>{wvals.forEach((_,i)=>{const el=document.getElementById(`bc-${i}`);if(el){el.style.transition=`height 1.2s cubic-bezier(.4,0,.2,1) ${i*100}ms`;el.style.height=el.dataset.h+'px'}})}));

  const catColors=['#3b82f6','#22d3ee','#8b5cf6','#10b981','#f59e0b','#ef4444'];const catMap={};
  S.tasks.forEach(t=>{catMap[t.cat]=(catMap[t.cat]||0)+1});const entries=Object.entries(catMap);const catTotal=entries.reduce((s,[,v])=>s+v,0)||1;
  const C=42,CIRC=2*Math.PI*C;let offset=0;
  const paths=entries.map(([k,v],i)=>{const pct=v/catTotal;const dash=pct*CIRC;const seg=`<circle class="ring-seg" cx="55" cy="55" r="${C}" fill="none" stroke="${catColors[i%catColors.length]}" stroke-width="16" stroke-dasharray="0 ${CIRC}" data-dash="${dash.toFixed(2)}" data-gap="${(CIRC-dash).toFixed(2)}" data-offset="${(-offset+CIRC/4).toFixed(2)}" transform="rotate(-90 55 55)" style="transition:stroke-dasharray 1.5s cubic-bezier(.4,0,.2,1) ${i*180}ms,stroke-dashoffset 1.5s cubic-bezier(.4,0,.2,1) ${i*180}ms"/>`;offset+=dash;return seg}).join('');
  document.getElementById('ring-svg').innerHTML=`<circle cx="55" cy="55" r="42" fill="none" stroke="rgba(20,40,100,.5)" stroke-width="16"/>${paths}<text x="55" y="60" text-anchor="middle" fill="#94a3cf" font-size="13" font-family="Plus Jakarta Sans" font-weight="700">${catTotal}</text>`;
  document.getElementById('ring-legend').innerHTML=entries.map(([k,v],i)=>`<div class="ring-item"><div class="ring-dot" style="background:${catColors[i%catColors.length]}"></div>${k} <strong style="margin-left:4px;color:var(--text)">${v}</strong></div>`).join('')||'<span style="color:var(--text3);font-size:12px">No data</span>';
  requestAnimationFrame(()=>requestAnimationFrame(()=>{document.querySelectorAll('.ring-seg').forEach(el=>{el.setAttribute('stroke-dasharray',`${el.dataset.dash} ${el.dataset.gap}`);el.setAttribute('stroke-dashoffset',el.dataset.offset)})}));

  const cells=Array.from({length:98},(_,i)=>{const v=Math.floor(Math.random()*5);return `<div class="hm-cell${v?` hm-v${v}`:''}" style="opacity:0;transition:opacity .5s cubic-bezier(.4,0,.2,1) ${i*10}ms" title="${v} tasks"></div>`});
  document.getElementById('heatmap').innerHTML=cells.join('');
  requestAnimationFrame(()=>requestAnimationFrame(()=>{document.querySelectorAll('#heatmap .hm-cell').forEach(el=>{el.style.opacity='1'})}));
}
