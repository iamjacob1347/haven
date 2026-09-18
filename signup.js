(() => {
 const form=document.getElementById('signup-form');
 const alias=document.getElementById('signup-alias');
 const password=document.getElementById('signup-password');
 const toggle=document.getElementById('toggle-password');
 toggle.addEventListener('click',()=>{
  const show=password.type==='password';
  password.type=show?'text':'password';
  toggle.textContent=show?'Hide':'Show';
  toggle.setAttribute('aria-label',show?'Hide password':'Show password');
  toggle.setAttribute('aria-pressed',String(show));
 });
 alias.addEventListener('input',()=>alias.setCustomValidity(alias.value.trim().length<2?'Choose a community name with at least 2 characters.':''));
 form.addEventListener('submit',event=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  const name=alias.value.trim();
  // No account creation or credential storage in the design preview.
  openHome(name);
 });
 form.addEventListener('reset',()=>{
  alias.setCustomValidity('');password.type='password';toggle.textContent='Show';
  toggle.setAttribute('aria-label','Show password');toggle.setAttribute('aria-pressed','false');
 });
})();
