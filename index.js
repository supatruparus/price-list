const form = document.querySelector('.form')
const form_button = document.querySelector('.backcall')
const showForm = function(){
  form.style.visibility = 'visible';
  console.log('click');
  
}
form_button.addEventListener('click', ()=>{
   showForm()})

document.body.onclick = function(event){
  // if (getComputedStyle(form).visibility === 'visible') {
  //   form.style.visibility = 'hidden';
  // }
  let bool = event.target === form_button
  console.log(bool)
  if(bool != true) form.style.visibility = 'hidden'
}