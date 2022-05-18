const form2b = document.getElementById('form2b');
const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const container = document.querySelector('.container');
const loveLanguages = document.getElementById('loveLanguages');


const formRows = document.querySelectorAll('.form-row');
let arrformRows = Array.from(formRows);
arrformRows.pop();

arrformRows.forEach(item => {
    let elmtSmall = document.createElement("SMALL");
    elmtSmall.className = "message";
    elmtSmall.innerText = "XXXX";
    item.appendChild(elmtSmall);

});


function checkFullname(){
    if (fullName.value === ''){
        errorMessage(fullName, "This field is required.");
    } else {
        successMessage(fullName);
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


// function errorMessage(elmt, message){
//     const formRow = elmt.parentElement;

//     if (formRow.classList.contains('success')) { 
//         formRou.classList.remove('success');
//         formRow.classList.add('error');
//     } else {
//         formRow.classList.add('error');
//     }
//     formRow.querySelector('.message').textContent = message;
// }
    
function validateEmail(email){
    var mailformat = /^\w+([\.-]?\w+) *@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mailformat.test(String(email).toLowerCase());
}

//     formRow.querySelector(email){}
//         alert ("success-classList=" + formControl.className); 
        
// }
function checkEmail(){
    if (email.value === ''){
        errorMessage(email, "This field is required.");
    } else if (!validateEmail(email.value)){
        errorMessage(email, "The email is invalid.");
    } else{
        successMessage(email);
}
}

fullName.addEventListener('blur',checkFullname, true );
email.addEventListener('blur', checkEmail, true);


const listChecks = document.querySelectorAll('.type-checkbox');
function checkAtleastOneChecked(){
    let arrlistChecks = Array.from(listChecks);
    let test= false;
    for(let i =0;i < arrlistChecks.length-1; i++){
        if(arrlistChecks[i].checked){
            test = true; 
            break;
        }
    }
    if (test){
        successMessage(this);
    }else{
        errorMessage(this, "This field is required.");
    }
}
loveLanguages.addEventListener('click', checkAtleastOneChecked, true);

form2b.addEventListener('submit', (evt)=>{
    let isvalid = true;
    arrformRows.forEach(item => {
        if (!item.classList.contains('success')) isvalid = false;

    });
    if (isvalid){
        container.classList.add('complete');
        alert("You have submitted successfully. Thank you.");
    } else {
        evt.preventDefault();
        alert("You must fill out the completely before submitting");
        container.classList.remove('complete');
    }
});


function getQueryString() {
    const params = new URL(window.location).searchParams;

    let fullName = params.get("fullname");
    let email = params.get("email");
    let languages = params.getAll("languages");

    let strResult ='';
    languages.forEach(item =>{strResult += item + ', '});
    strResult = strResult.substring(0, strResult.length - 2);

    document.getElementById("info").innerHTML = "Full name: <b>"+ fullName+"</b><br/>"
                                                + "Email: <b>"+ email +"</b><br/>"
                        + "You chosen language (s): <b>"+ strResult+"</b>";
    
}
