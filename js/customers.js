// GET data/customers.json (fictional demo records) -> table
const st=document.getElementById('status'),tb=document.querySelector('tbody');
st.textContent='Loading records…';
fetch('data/customers.json').then(r=>{if(!r.ok)throw Error(r.status);return r.json();}).then(d=>{
 st.textContent=d.length?'':'No records found.';
 tb.innerHTML=d.map(c=>`<tr><td>${c.id}</td><td>${c.name}</td><td>${c.customerType}</td><td>${c.inquiryCategory}</td></tr>`).join('');})
 .catch(()=>st.textContent='Could not load customer data. Use a local server (XAMPP or "python -m http.server").');
