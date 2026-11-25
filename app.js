// MED 101 - app.js | renders content from data.js; page chosen by body[data-page]
const $=(s)=>document.querySelector(s);
const src=k=>`<a href="${SRC[k][1]}" target="_blank" rel="noopener">${SRC[k][0]}</a>`;
const page=document.body.dataset.page;
$("#menu")?.addEventListener("click",e=>{const l=$("nav ul");const o=l.classList.toggle("open");e.currentTarget.setAttribute("aria-expanded",o)});
document.querySelectorAll("nav a").forEach(a=>{if(a.dataset.p===page)a.setAttribute("aria-current","page")});
const R={
learning(){
$("#topics").innerHTML=LEARN.map((x,i)=>`<article class="card" id="t${i}"><div class="meta">// topic ${String(i+1).padStart(2,"0")}</div><h3>${x.t}</h3>
<span class="tag">${x.k==="est"?"established science":"emerging"}</span><p>${x.b}</p>${x.u?`<p class="meta"><b>Still uncertain:</b> ${x.u}</p>`:""}<p class="meta"><b>Source:</b> ${src(x.s)}</p></article>`).join("");
$("#videos").innerHTML=VIDEOS.map(v=>`<div class="card vid"><h3>${v.t}</h3>${v.id?`<iframe loading="lazy" title="${v.t}" src="https://www.youtube-nocookie.com/embed/${v.id}" allow="encrypted-media;picture-in-picture" allowfullscreen></iframe>`:`<div class="ph">Opens on the TED-Ed site</div>`}<p class="meta">Video not loading? <a href="${v.u}" target="_blank" rel="noopener">Open it directly</a></p></div>`).join("");
$("#quizzes").innerHTML=QUIZ.map(z=>`<form class="card" data-q="${z.id}" novalidate><h3>${z.t}</h3>${z.q.map((q,i)=>`<fieldset><legend>${i+1}. ${q[0]}</legend>${q[1].map((o,j)=>`<label><input type="radio" name="${z.id}${i}" value="${j}"> ${o}</label>`).join("")}<div class="meta" id="${z.id}f${i}" aria-live="polite"></div></fieldset>`).join("")}
<button class="btn" type="submit">Check answers</button> <button class="btn" type="reset" style="background:var(--ink)">Reset</button><p class="res" id="${z.id}r" aria-live="polite"></p></form>`).join("");
document.querySelectorAll("form[data-q]").forEach(f=>{
f.addEventListener("submit",e=>{e.preventDefault();const z=QUIZ.find(x=>x.id===f.dataset.q);let s=0,done=0;
z.q.forEach((q,i)=>{const p=f.querySelector(`input[name="${z.id}${i}"]:checked`),fb=$(`#${z.id}f${i}`);
if(!p){fb.textContent="Not answered.";fb.className="meta bad";return}done++;
if(+p.value===q[2]){s++;fb.textContent="Correct. "+q[3];fb.className="meta ok"}else{fb.textContent="Not quite. Answer: "+q[1][q[2]]+". "+q[3];fb.className="meta bad"}});
const m=s===z.q.length?"Full marks.":s>=3?"Strong, review the missed one.":s>=2?"Getting there, re-read the topic.":"Go back to the topics above and try again.";
$(`#${z.id}r`).textContent=done<z.q.length?`Answer all ${z.q.length} questions for a full score (${s}/${z.q.length} so far).`:`Score: ${s}/${z.q.length}. ${m}`});
f.addEventListener("reset",()=>{f.querySelectorAll(".meta[id],.res").forEach(n=>n.textContent="")})})},
careers(){$("#careers").innerHTML=CAREERS.map((c,i)=>`<article class="card"><div class="meta">// career ${String(i+1).padStart(2,"0")}</div><h3>${c.t}</h3>
<p><b>What they do:</b> ${c.d}</p><p><b>School subjects:</b> ${c.s}</p><p><b>Qualifications:</b> ${c.e}</p><p><b>Pathways:</b> ${c.p}</p><p class="meta"><a href="${c.u}" target="_blank" rel="noopener">Official pathway info</a></p></article>`).join("")},
opportunities(){
const subs=[...new Set(OPPS.map(o=>o.sub))].sort(),fm=[...new Set(OPPS.map(o=>o.fmt))];
$("#sub").innerHTML+=subs.map(s=>`<option>${s}</option>`).join("");$("#loc").innerHTML+=fm.map(s=>`<option>${s}</option>`).join("");
const draw=()=>{const q=$("#q").value.trim().toLowerCase(),y=$("#yr").value,s=$("#sub").value,l=$("#loc").value;
const r=OPPS.filter(o=>(!q||(o.n+" "+o.d+" "+o.sub).toLowerCase().includes(q))&&(!y||o.yrs.includes(y))&&(!s||o.sub===s)&&(!l||o.fmt===l));
$("#count").textContent=`${r.length} of ${OPPS.length} opportunities`;
$("#list").innerHTML=r.length?r.map(o=>`<article class="card"><span class="tag ${o.sch?"sch":"hot"}">${o.sch?"accepts school students":"not for school students"}</span>${o.fmt==="Hyderabad"?'<span class="tag">Hyderabad</span>':""}<h3>${o.n}</h3><p>${o.d}</p>
<p class="meta"><b>Who:</b> ${o.who}<br><b>Years:</b> ${o.yrs.join(", ")}<br><b>Subject:</b> ${o.sub} &middot; <b>Where:</b> ${o.fmt}<br><b>Deadline/date:</b> ${o.when}<br><b>Checked:</b> ${o.chk?"18 Nov 2026":"not yet - confirm on organiser site"}</p><a class="btn" href="${o.u}" target="_blank" rel="noopener">Official page</a></article>`).join(""):`<div class="empty"><h3>No matches</h3><p>Try fewer filters or a broader word.</p><button class="btn" id="e">Clear filters</button></div>`;
$("#e")?.addEventListener("click",clr)};
const clr=()=>{$("#q").value="";["yr","sub","loc"].forEach(i=>$("#"+i).value="");draw()};
["q","yr","sub","loc"].forEach(i=>$("#"+i).addEventListener("input",draw));$("#clr").addEventListener("click",clr);draw()},
resources(){$("#src").innerHTML=Object.entries(SRC).map(([k,v])=>`<article class="card"><h3>${v[0]}</h3><p class="meta">Used in: ${LEARN.filter(x=>x.s===k).map(x=>x.t).join(", ")||"Career pages"}</p><a href="${v[1]}" target="_blank" rel="noopener">Visit original source</a></article>`).join("")}};
R[page]?.();
