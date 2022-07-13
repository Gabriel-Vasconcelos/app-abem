let inputPassword = document.querySelector("#password");
// let eye = document.querySelector("#eye");

console.log("TESTE");

function eyeClick(){
    if(inputPassword.type == "password") {
        inputPassword.setAttribute('type', 'text');
    } else {
        inputPassword.setAttribute('type', 'password');
    }
}

// eye.addEventListener("click", ()=>{
    
//     if(inputPassword.getAttribute('type') == 'password') {
//         inputPassword.setAttribute('type', 'text');
//     } else {
//         inputPassword.setAttribute('type', 'password');
//     }

    
// });
// eye.addEventListener("click", ()=>{
    // if(inputPassword.getAttribute('type') == 'password') {
    //     inputPassword.setAttribute('type', 'text');
    // } else {
    //     inputPassword.setAttribute('type', 'password');
    // }
// });


