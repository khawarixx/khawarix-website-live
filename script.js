const leads=[
{name:'Aman Verma',course:'Full Stack Development',source:'WhatsApp',intent:91,tag:'HOT',state:'CALL TODAY',note:'Asked about fees + demo'},
{name:'Simran K.',course:'Java + Spring Boot',source:'Website',intent:76,tag:'WARM',state:'FOLLOW-UP DUE',note:'No reply in 26h'},
{name:'Rahul Singh',course:'Python + AI',source:'Instagram',intent:48,tag:'COLD',state:'RECOVERY',note:'Inactive after first reply'}
];
const faqData=[
['Is LeadRescue AI a normal CRM?','It uses CRM-like lead management as a foundation, but the product direction is more action-oriented: scoring, follow-up, recovery and next-best-action are designed to help a team decide what to do next.'],
['Does it replace counsellors?','No. The product is designed to remove repetitive tracking and prioritization work so counsellors can spend more time on serious conversations.'],
['Can you connect WhatsApp?','The MVP can use a mock workflow. For a production client deployment, the intended path is an official WhatsApp Business Platform integration with controlled credentials and webhook validation.'],
['Are results guaranteed?','No. The site intentionally avoids invented results or guarantees. A pilot is the right way to measure the actual improvement for an institute.']
];
function renderLeads(filter='ALL'){
  const list=document.querySelector('#lead-list');
  list.innerHTML=leads.filter(x=>filter==='ALL'||x.tag===filter).map(x=>`<div class="lead-row"><div class="lead-main"><div><strong>${x.name}</strong><small>${x.course} · ${x.source}</small></div><div class="intent">${x.intent}/100<small> intent</small></div></div><div class="lead-bottom"><span class="tag ${x.tag==='HOT'?'hot':''}">${x.tag}</span><span class="note">${x.note}</span><span class="state">${x.state}</span></div></div>`).join('');
}
renderLeads();
document.querySelectorAll('.filters button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderLeads(btn.dataset.filter)}));
const faq=document.querySelector('#faq');faq.innerHTML=faqData.map((x,i)=>`<div class="faq-item ${i===0?'open':''}"><button class="faq-q" type="button"><span>${x[0]}</span><span>⌄</span></button><div class="faq-a">${x[1]}</div></div>`).join('');
document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
