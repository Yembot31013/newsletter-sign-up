const form = document.querySelector(".form")
const success = document.querySelector(".success")

const submitBtn = document.querySelector(".form-btn")
const dismissBtn = document.querySelector(".success-btn")

const emailInput = document.querySelector("#email")
const emailText = document.querySelector(".email-text")

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if (emailInput.validity.valid){
        form.classList.toggle("active")
        success.classList.toggle("active")
        emailText.textContent = emailInput.value ? emailInput.value : "codewithyembot@gmail.com"
    }
})

emailInput.addEventListener('input', (e)=>{
    e.preventDefault()
    if (!emailInput.validity.valid){
        if (!submitBtn.classList.contains("disable")){
            submitBtn.classList.add("disable")
        }
    }else{
        submitBtn.classList.remove("disable")
    }
})

dismissBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    form.classList.toggle("active")
    success.classList.toggle("active")
})