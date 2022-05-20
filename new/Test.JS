const form2b = document.getElementById('form2b');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const main = document.querySelector('.main');


function checkFirstname(){
    if (firstname.value === ''){
        errorMessage(firstname, "This field is required.");
    } else {
        successMessage(firstname);
    }
}
function checkLastname(){
    if (lastname.value === ''){
        errorMessage(lastname, "This field is required.");
    } else {
        successMessage(lastname);
    }
}



function successMessage(elmt){
    const formRow = elmt.parentElement;
  
    if (formRow.classList.contains('error')){
      formRow.classList.remove('error');
      formRow.classList.add('success');
      }else{
      formRow.classList.add('success');
      }
}


function errorMessage(elmt, message) { 
    const formRow= elmt.parentElement;
    
    if (
        formRow.classList.contains('success')) { 
        formRow.classList.remove('success'); 
        formRow.classList.add('error');
    } else {
        formRow.classList.add('error'); 
    }
    formRow.querySelector('.message').textContent = message;
}

    
function validateEmail(email){
    var mailformat = /^\w+([\.-]?\w+) *@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mailformat.test(String(email).toLowerCase());
}


function checkEmail(){
    if (email.value === ''){
        errorMessage(email, "This field is required.");
    } else if (!validateEmail(email.value)){
        errorMessage(email, "The email is invalid.");
    } else{
        successMessage(email);
}
}

firstname.addEventListener('blur',checkFirstname, true );
lastname.addEventListener('blur',checkLastname, true );
email.addEventListener('blur', checkEmail, true);
form2b.addEventListener('submit', (evt) =>{
    evt.preventDefault();
});  


form2b.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    const formRows = document.querySelectorAll('.form-row');
    let arrformRows = Array.from(formRows); 
    arrformRows.pop();
    let isvalid = true;  
    arrformRows.forEach(item => {
      console.log(item.classList.contains('success'));
      if (!item.classList.contains('success')) isvalid = false;
  });
  //check
  if (isvalid){
    container.classList.add('complete');
    alert("You have submitted successfully. Thank you.");
    anmtBox.classList.add('show');
   } else {
    container.classList.remove('complete');
    anmtBox.classList.remove('show');
   }
});
  
function errorMessage(pElement, message){
    const formRow=pElement.parentElement.parentElement;
    if (formRow.classList.contains('success')){
        formRow.classList.remove('success');
        formRow.classList.add('error');
    }else{
        formRow.classList.add('error');
    }
   formRow.querySelector('.message').textContent = message;
}
  
  
function successMessage(pElement){
    const formRow = pElement.parentElement.parentElement;
    if (formRow.classList.contains('error')){
        formRow.classList.remove('error');
        formRow.classList.add('success');
    }else{
        formRow.classList.add('success');
    }
}


function getQueryString() {
    const params = new URL(window.location).searchParams;
    let firstname = params.get("firstname");
    let lastname = params.get("lastname");
    let email = params.get("email");
    document.getElementById("info").innerHTML = "Your name: <b>"+lastname+ firstname+"</b><br/>"
                                                + "Email: <b>"+ email +"</b><br/>"    
}
