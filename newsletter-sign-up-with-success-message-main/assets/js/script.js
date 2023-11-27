function validarFormulario(){
    let emailInput = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(emailInput.value)){
        emailError.textContent='Valid email required';
    }else{
        emailError.textContent = '';
        return  true;
    }
}