// Front-end validation only. Nothing is sent to any inbox.
const f=document.getElementById('f'),out=document.getElementById('out');
const s=new URLSearchParams(location.search).get('service');
if(s)[...f.service.options].forEach(o=>{if(o.value===s)o.selected=true;});
f.date.min=new Date().toISOString().split('T')[0];
const rules={name:v=>v.trim()?'':'Please enter your full name.',
 email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)?'':'Enter a valid email address.',
 subject:v=>v.trim()?'':'Please enter a subject.',
 service:v=>v?'':'Choose a service.',
 date:v=>!v?'Choose an event date.':(v<f.date.min?'Event date cannot be in the past.':''),
 message:v=>v.trim().length>=10?'':'Message must be at least 10 characters.'};
f.onsubmit=e=>{e.preventDefault();let bad=0;
 for(const k in rules){const m=rules[k](f[k].value);document.getElementById('e-'+k).textContent=m;f[k].setAttribute('aria-invalid',!!m);if(m)bad++;}
 out.className='msg '+(bad?'bad':'ok');
 out.textContent=bad?'Please fix the highlighted fields.':'Thank you! Your inquiry passed validation. Demo only: it was NOT delivered to any inbox.';
 if(!bad)f.reset();};
