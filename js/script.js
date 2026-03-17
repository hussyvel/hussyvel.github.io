/* ── MATRIX RAIN ────────────────────── */
const canvas=document.getElementById('matrix-canvas'), ctx=canvas.getContext('2d');
const resize=()=>{canvas.width=innerWidth;canvas.height=innerHeight};
resize(); addEventListener('resize',resize);
const chars='アイウエオサシスセソ01010110JAVA<>{}[];SQL_MVN'.split('');
let drops=[];
const initD=()=>{drops=Array(Math.floor(canvas.width/14)).fill(1)};
initD(); addEventListener('resize',initD);
setInterval(()=>{
  ctx.fillStyle='rgba(0,0,0,.055)'; ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.font='14px JetBrains Mono';
  drops.forEach((d,i)=>{
    const c=chars[Math.floor(Math.random()*chars.length)];
    ctx.fillStyle=d*14<60?'#ffffff':'#00ff41'; ctx.globalAlpha=Math.random()>.92?.9:.6;
    ctx.fillText(c,i*14,d*14); ctx.globalAlpha=1;
    if(d*14>canvas.height&&Math.random()>.975)drops[i]=0; drops[i]++;
  });
},38);

/* ── TYPEWRITER ─────────────────────── */
const phrases=['Java Backend Engineer','Spring Boot · PostgreSQL · Java','5+ Years · 3 Industries','Gov · Healthcare · Retail','Open to Remote Worldwide 🌎'];
let pi=0, ci=0, del=false;
const tel=document.getElementById('typewriter');
function type(){
  const p=phrases[pi]; tel.textContent=del?p.slice(0,ci-1):p.slice(0,ci+1);
  if(del)ci--;else ci++;
  let t=del?48:95;
  if(!del&&ci===p.length){t=2200;del=true;}
  else if(del&&ci===0){del=false;pi=(pi+1)%phrases.length;t=450;}
  setTimeout(type,t);
}
setTimeout(type,900);

/* ── TERMINAL ───────────────────────── */
const cmds = {
  whoami:[
    '<span style="color:var(--green)">→ Hussyvel R. Da Silva — Java Backend Engineer</span>',
    '<span style="color:var(--text);opacity:.8">Location  : São Luís, Maranhão, Brazil 🇧🇷 · GMT-3</span>',
    '<span style="color:var(--text);opacity:.8">Experience: 5+ years · 3 industries</span>',
    '<span style="color:var(--text);opacity:.8">Status    : <span style="color:var(--green)">● OPEN</span> · remote worldwide (US, EU, UK, Canada...)</span>',
    '<span style="color:var(--text);opacity:.8">English   : Written fluency · spoken in progress</span>',
    '<span style="color:var(--text);opacity:.8">Start     : Immediately available</span>',
  ],
  experience:[
    '<span style="color:var(--green-dim)">── Work History ──────────────────────────────────────</span>',
    '<span style="color:var(--cyan)">SEMA-MA</span>  <span style="color:var(--text);opacity:.8">· Java Engineer · Sep 2023 – Present · On-site</span>',
    '<span style="color:var(--text);opacity:.65">  Java, Spring Boot, PostgreSQL, JSF · Linux/Tomcat admin</span>',
    '<span style="color:var(--text);opacity:.65">  Systems: SIGLA (prod) + GUARÁ (greenfield in dev)</span>',
    '<span style="color:var(--text);opacity:.65">  6,000+ users · 5,700+ processes/year</span>',
    '',
    '<span style="color:var(--cyan)">Philips</span>   <span style="color:var(--text);opacity:.8">· Software Engineer · Jul 2021 – Nov 2022 · Remote 🌐</span>',
    '<span style="color:var(--text);opacity:.65">  Java (backend) · Angular/JS (frontend) · PL/SQL</span>',
    '<span style="color:var(--text);opacity:.65">  Fiscal & purchasing modules · international remote team</span>',
    '',
    '<span style="color:var(--cyan)">Grupo Mateus</span> <span style="color:var(--text);opacity:.8">· Junior C++ Engineer · Aug 2020 – Jun 2021</span>',
    '<span style="color:var(--text);opacity:.65">  C++ · Qt framework · SQL Server · GIT</span>',
    '<span style="color:var(--text);opacity:.65">  UI screens · business analysis · retail domain</span>',
    '<span style="color:var(--green-dim)">──────────────────────────────────────────────────────</span>',
  ],
  impact:[
    '<span style="color:var(--green-dim)">── Measurable Impact ─────────────────────────────────</span>',
    '<span style="color:var(--yellow)">6,000+</span>  <span style="color:var(--text);opacity:.8">government users served daily (SIGLA)</span>',
    '<span style="color:var(--yellow)">5,700+</span>  <span style="color:var(--text);opacity:.8">environmental processes managed per year</span>',
    '<span style="color:var(--yellow)">3</span>       <span style="color:var(--text);opacity:.8">industries: government · healthcare · retail</span>',
    '<span style="color:var(--yellow)">1</span>       <span style="color:var(--text);opacity:.8">international remote role (Philips Healthcare)</span>',
    '<span style="color:var(--yellow)">2</span>       <span style="color:var(--text);opacity:.8">production systems built from scratch (SIGLA, GUARÁ)</span>',
    '<span style="color:var(--green-dim)">──────────────────────────────────────────────────────</span>',
  ],
  stack:[
    '<span style="color:var(--green-dim)">[★★★★★] Java 8 / 11</span>',
    '<span style="color:var(--green-dim)">[★★★★☆] Spring Boot · REST APIs</span>',
    '<span style="color:var(--green-dim)">[★★★★☆] PostgreSQL · PL/pgSQL</span>',
    '<span style="color:var(--green-dim)">[★★★★☆] JSF / RichFaces · Facelets</span>',
    '<span style="color:var(--green-dim)">[★★★★☆] Maven · Git · GitLab</span>',
    '<span style="color:var(--green-dim)">[★★★☆☆] JPA / Hibernate</span>',
    '<span style="color:var(--green-dim)">[★★★☆☆] Angular / JavaScript</span>',
    '<span style="color:var(--green-dim)">[★★★☆☆] Python · pandas · psycopg2</span>',
    '<span style="color:var(--green-dim)">[★★☆☆☆] C++ · Qt framework</span>',
    '<span style="color:var(--green-dim)">[★★☆☆☆] Docker · Linux admin</span>',
  ],
  contact:[
    '<span style="color:var(--text);opacity:.8">→ GitHub  : github.com/hussyvel/</span>',
    '<span style="color:var(--text);opacity:.8">→ LinkedIn: linkedin.com/in/hussyvelribeiro/</span>',
    '<span style="color:var(--text);opacity:.8">→ Email   : hussyribeiro@hotmail.com</span>',
    '<span style="color:var(--green-dim)">Or use the contact form below ↓</span>',
  ],
  help:[
    '<span style="color:var(--text)">Available commands:</span>',
    '  <span style="color:var(--green)">whoami</span>     <span style="color:var(--text);opacity:.6">— personal info & availability</span>',
    '  <span style="color:var(--green)">experience</span> <span style="color:var(--text);opacity:.6">— full work history</span>',
    '  <span style="color:var(--green)">impact</span>     <span style="color:var(--text);opacity:.6">— measurable results</span>',
    '  <span style="color:var(--green)">stack</span>      <span style="color:var(--text);opacity:.6">— technical skills</span>',
    '  <span style="color:var(--green)">contact</span>    <span style="color:var(--text);opacity:.6">— how to reach me</span>',
    '  <span style="color:var(--green)">clear</span>      <span style="color:var(--text);opacity:.6">— clear terminal</span>',
  ],
};

const out=document.getElementById('terminal-output'), tin=document.getElementById('t-input');
const addLine=(html,delay=0)=>new Promise(r=>{
  setTimeout(()=>{ const d=document.createElement('div'); d.className='t-line'; d.innerHTML=html; out.appendChild(d); out.scrollTop=out.scrollHeight; r(); },delay);
});

function esc(s){ const d=document.createElement('div'); d.textContent=s; return d.innerHTML; }

let history=[], hIdx=-1;
tin.addEventListener('keydown', e=>{
  if(e.key==='ArrowUp'){ e.preventDefault(); if(hIdx<history.length-1){hIdx++;tin.value=history[history.length-1-hIdx];} }
  if(e.key==='ArrowDown'){ e.preventDefault(); if(hIdx>0){hIdx--;tin.value=history[history.length-1-hIdx];}else{hIdx=-1;tin.value='';} }
  if(e.key==='Tab'){ e.preventDefault(); const k=Object.keys(cmds).find(k=>k.startsWith(tin.value.toLowerCase())); if(k)tin.value=k; }
  if(e.key==='Enter'&&tin.value.trim()){ history.push(tin.value); hIdx=-1; runCmd(tin.value); tin.value=''; }
});

async function runCmd(raw){
  const cmd=raw.trim().toLowerCase(); if(!cmd)return;
  await addLine(`<span style="color:var(--green)">hussyvel<span style="color:var(--red)">@</span><span style="color:var(--cyan)">dev</span>:~$</span> <span style="color:var(--text)">${esc(raw)}</span>`);
  if(cmd==='clear'){ out.innerHTML='<div class="t-line t-comment"># Commands: whoami | experience | impact | stack | contact | clear | help</div>'; return; }
  const lines=cmds[cmd]||[`<span style="color:var(--red)">bash: ${esc(cmd)}: command not found — try 'help'</span>`];
  for(let i=0;i<lines.length;i++) await addLine(lines[i],i*70);
}

let autoRan=false;
new IntersectionObserver(([e])=>{
  if(e.isIntersecting&&!autoRan){ autoRan=true;
    setTimeout(()=>{ const str='whoami';let i=0;
      const iv=setInterval(()=>{ tin.value+=str[i++]; if(i>=str.length){clearInterval(iv);setTimeout(()=>{runCmd(tin.value);tin.value='';history.push('whoami');},600);} },80);
    },700);
  }
},{threshold:.35}).observe(document.getElementById('about'));

/* ── SKILLS ─────────────────────────── */
const skills=[
  {name:'Java',pct:92,meta:'Java 8 / 11 · 5+ years production'},
  {name:'Spring Boot',pct:82,meta:'REST APIs · backend services'},
  {name:'PostgreSQL',pct:84,meta:'Complex queries · PL/pgSQL · tuning'},
  {name:'JSF / RichFaces',pct:78,meta:'Facelets · EL expressions'},
  {name:'Maven · Git · GitLab',pct:82,meta:'Build · branching · MRs'},
  {name:'JPA / Hibernate',pct:70,meta:'ORM · entity mapping'},
  {name:'Angular / JavaScript',pct:62,meta:'Frontend · Philips experience'},
  {name:'Python',pct:58,meta:'Automation · pandas · psycopg2'},
  {name:'C++ / Qt',pct:55,meta:'Grupo Mateus · UI screens'},
  {name:'Docker · Linux',pct:52,meta:'Tomcat admin · containerization'},
];
const sgrid=document.getElementById('skills-grid');
skills.forEach((s,i)=>{
  const f=Math.round(s.pct/5),bar='█'.repeat(f)+'░'.repeat(20-f);
  const div=document.createElement('div');
  div.className='skill-item reveal'; div.style.transitionDelay=(i*.07)+'s';
  div.innerHTML=`<div class="skill-header"><span class="skill-name">${s.name}</span><span class="skill-pct">${s.pct}%</span></div><div class="skill-bar-bg"><div class="skill-bar-fill" data-pct="${s.pct}"></div></div><div class="skill-meta">[${bar}] ${s.meta}</div>`;
  sgrid.appendChild(div);
});

/* ── PROJECTS ───────────────────────── */
const projects=[
  {
    id:'a4f2d11', branch:'production', status:'LIVE', sc:'#00ff41',
    name:'SIGLA', short:'State Environmental Licensing System · SEMA-MA',
    impact:'6,000+ users · 5,700+ processes/year · statewide critical infrastructure',
    desc:'Mission-critical government platform managing the full environmental licensing workflow for Maranhão state. Used daily by civil servants and citizens across all 217 municipalities.',
    role:'5+ years of feature development, bug triage and production support. Responsible for the licensing process module, complex PostgreSQL queries for strategic reports, Linux/Tomcat server administration and log analysis.',
    tech:['Java 8','Spring Boot','JSF','PostgreSQL','Tomcat','Maven','GitLab','Linux'],
    lines:[
      '→ Full environmental process lifecycle management',
      '→ Complex PostgreSQL queries supporting strategic decisions',
      '→ Linux/Tomcat server config, admin and log analysis',
      '→ Report and technical permit generation engine',
      '→ 5+ years continuous development & production support',
    ],
    github:null, youtube:null,
  },
  {
    id:'c3f8b44', branch:'development', status:'IN DEV', sc:'#ffd700',
    name:'GUARÁ', short:'Next-Gen Environmental Licensing · SEMA-MA',
    impact:'Replacing SIGLA · faster · more flexible · modern architecture',
    desc:'Greenfield system being built from the ground up to replace SIGLA. Designed for speed, flexibility and a better user experience — handling the same 5,700+ annual processes with a modernized stack.',
    role:'Core developer from day one. Driving architectural decisions, defining the new data model and building the foundation for a more maintainable, scalable system.',
    tech:['Java','Spring Boot','PostgreSQL','REST API','Maven','GitLab'],
    lines:[
      '→ Greenfield architecture — designed for scalability',
      '→ Modern REST API replacing JSF monolith',
      '→ Faster workflow engine vs legacy SIGLA',
      '→ Improved UX for government end-users',
    ],
    github:null, youtube:null,
  },
  {
    id:'e9d1c37', branch:'main', status:'DELIVERED', sc:'#00e5ff',
    name:'Philips Fiscal Module', short:'Healthcare · Fiscal & Purchasing Backend · Remote',
    impact:'International remote team · healthcare domain · fiscal compliance',
    desc:'Worked remotely with an international team at Philips Healthcare on screen maintenance for the fiscal and purchasing modules. Java backend, Angular/JavaScript frontend, PL/SQL for database operations.',
    role:'Software Engineer (remote). Developed and maintained backend services in Java, built Angular frontend components and wrote PL/SQL procedures for fiscal and purchasing data operations.',
    tech:['Java','Angular','JavaScript','PL/SQL','GitHub'],
    lines:[
      '→ Backend services in Java for fiscal modules',
      '→ Angular/JS frontend — screen maintenance',
      '→ PL/SQL procedures for purchasing data',
      '→ International remote team collaboration',
    ],
    github:null, youtube:null,
  },
  {
    id:'d2a7e55', branch:'main', status:'PUBLIC', sc:'#ff0040',
    name:'YouTube Projects', short:'Study projects & coding demos',
    impact:'3 published videos · hands-on learning in public',
    desc:'Coding projects built as part of a structured self-study plan — covering Java, backend patterns and practical development, all documented on YouTube.',
    role:'Solo developer and content creator. Each video shows a real project being built from scratch.',
    tech:['Java','SQL','Backend','Problem Solving'],
    lines:[
      '→ Project #1: youtube.com/watch?v=DSRDkzZukyc',
      '→ Project #2: youtube.com/watch?v=RWwLuFzrNgs',
      '→ Project #3: youtube.com/watch?v=HDCePmkhKkc',
      '→ Ongoing — new content added as learning progresses',
    ],
    youtube:[
      'https://youtu.be/DSRDkzZukyc?si=hVo1yZ9_Z80NkMe1',
      'https://www.youtube.com/watch?v=RWwLuFzrNgs',
      'https://www.youtube.com/watch?v=HDCePmkhKkc',
    ],
    github:'https://github.com/hussyvel/',
  },
  {
    id:'b8e9c22', branch:'main', status:'STABLE', sc:'#00e5ff',
    name:'SQL → Excel Exporter', short:'PostgreSQL automation tool',
    impact:'Eliminated hours of manual data export work',
    desc:'Python tool to export PostgreSQL query results into professionally formatted Excel spreadsheets — frozen headers, alternating row colors, column auto-sizing.',
    role:'Sole developer. Designed and built the full pipeline from DB connection to formatted output.',
    tech:['Python','psycopg2','pandas','openpyxl'],
    lines:[
      '→ Direct PostgreSQL connection via psycopg2',
      '→ Frozen headers + alternating colored rows',
      '→ Auto-column sizing and formatting',
      '→ Batch query support',
    ],
    github:'https://github.com/hussyvel/', youtube:null,
  },
];

const pgrid=document.getElementById('projects-grid');
projects.forEach((p,i)=>{
  const statusColor = p.status==='LIVE'?'var(--green)':p.status==='IN DEV'?'var(--yellow)':'var(--cyan)';
  const card=document.createElement('div');
  card.className='project-card reveal'; card.style.transitionDelay=(i*.1)+'s';
  card.innerHTML=`
    <div class="proj-header">
      <div class="proj-id">${p.id} (${p.branch})</div>
      <div class="proj-status" style="color:${statusColor};border-color:${statusColor}22">${p.status}</div>
    </div>
    <div class="proj-name">${p.name}</div>
    <div class="proj-impact">⟡ <strong>${p.impact.split('·')[0].trim()}</strong>${p.impact.includes('·')?'  ·  '+p.impact.split('·').slice(1).join('·'):''}</div>
    <div class="proj-desc">${p.desc}</div>
    <div class="proj-tags">${p.tech.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    <div class="proj-links">
      <span style="font-size:.68rem;color:rgba(0,255,65,.4);letter-spacing:.1em;cursor:pointer" onclick="openModal(projects[${i}])">› read more _</span>
      ${p.youtube?`<a class="proj-link" href="${p.youtube[0]}" target="_blank">▶ watch ↗</a>`:''}
      ${p.github&&!p.youtube?`<a class="proj-link" href="${p.github}" target="_blank">github ↗</a>`:''}
    </div>`;
  card.addEventListener('click', ()=>openModal(p));
  card.addEventListener('mousemove', e=>{
    const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`translateY(-5px) rotateY(${x*7}deg) rotateX(${-y*7}deg)`;
  });
  card.addEventListener('mouseleave', ()=>{card.style.transform='';});
  pgrid.appendChild(card);
});

/* ── REVEAL ──────────────────────────── */
const revealObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));

/* ── MODAL ───────────────────────────── */
function openModal(p){
  const statusColor=p.status==='LIVE'?'var(--green)':p.status==='IN DEV'?'var(--yellow)':'var(--cyan)';
  document.getElementById('modal-title').textContent=p.name.toLowerCase().replace(/ /g,'_')+'.md';
  document.getElementById('modal-body').innerHTML=`
    <div style="color:var(--green-dim);font-size:.7rem;letter-spacing:.12em;margin-bottom:1.4rem">$ cat ${p.name.toLowerCase().replace(/ /g,'_')}.md</div>
    <div style="color:${statusColor};font-size:.65rem;letter-spacing:.18em;margin-bottom:.3rem">${p.status} · ${p.branch}</div>
    <div style="color:var(--green);font-size:1.2rem;font-weight:800;margin-bottom:.2rem">${p.name}</div>
    <div style="color:var(--text);opacity:.5;font-size:.78rem;margin-bottom:1.4rem">${p.short}</div>
    <div style="margin-bottom:1.2rem">${p.impact.split('·').map(m=>`<span class="modal-metric"><strong>${m.trim().split(' ')[0]}</strong> ${m.trim().split(' ').slice(1).join(' ')}</span>`).join('')}</div>
    <div style="color:var(--green-dim);margin-bottom:.6rem;letter-spacing:.1em;font-size:.75rem">## MY ROLE</div>
    <div style="color:var(--text);opacity:.82;font-size:.8rem;margin-bottom:1.4rem;line-height:1.75">${p.role}</div>
    <div style="color:var(--green-dim);margin-bottom:.8rem;letter-spacing:.1em;font-size:.75rem">## HIGHLIGHTS</div>
    ${p.lines.map(l=>`<div style="color:var(--text);opacity:.8;margin-bottom:.3rem;font-size:.8rem">${l}</div>`).join('')}
    <div style="color:var(--green-dim);margin-top:1.6rem;margin-bottom:.7rem;letter-spacing:.1em;font-size:.75rem">## STACK</div>
    <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.4rem">${p.tech.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    ${p.youtube
      ? `<div style="display:flex;flex-direction:column;gap:.5rem">${p.youtube.map((u,i)=>`<a href="${u}" target="_blank" style="color:var(--red);font-size:.75rem;text-decoration:none;letter-spacing:.1em;border-bottom:1px solid rgba(255,0,64,.25);padding-bottom:2px">▶ watch video ${i+1} ↗</a>`).join('')}</div>`
      : p.github
        ? `<a href="${p.github}" target="_blank" style="color:var(--cyan);font-size:.75rem;text-decoration:none;letter-spacing:.1em;border-bottom:1px solid rgba(0,229,255,.3);padding-bottom:2px">→ view on github ↗</a>`
        : '<div style="color:rgba(0,255,65,.25);font-size:.72rem">// Production system — code is proprietary</div>'
    }`;
  document.getElementById('modal-overlay').classList.add('active');
}
const overlay=document.getElementById('modal-overlay');
overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.classList.remove('active');});
document.getElementById('modal-close-btn').addEventListener('click',()=>overlay.classList.remove('active'));
document.addEventListener('keydown',e=>{if(e.key==='Escape')overlay.classList.remove('active');});

/* ── CONTACT ────────────────────────── */
function handleSubmit(){
  const n=document.getElementById('f-name').value.trim();
  const e=document.getElementById('f-email').value.trim();
  const m=document.getElementById('f-msg').value.trim();
  const s=document.getElementById('form-status');
  if(!n||!e||!m){s.style.color='var(--red)';s.textContent='› error: all fields required.';return;}
  s.style.color='var(--green-dim)';s.textContent='› connecting...';
  setTimeout(()=>{
    s.style.color='var(--green)';s.textContent='✓ message sent successfully!';
    ['f-name','f-email','f-msg'].forEach(id=>document.getElementById(id).value='');
  },1400);
}
