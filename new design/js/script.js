const fullname = document.getElementById('full_name')
const workdetails = document.getElementById('workdetails')
const subject = document.getElementById('subject')
const form = document.getElementById('form')
const error = document.getElementById('error')

form.addEventListener('submit', (e) => { 

    let messages = []

    if(subject.value === '' || subject.value == null){
            messages.push("subject field is required!!!!")
    }

    else if(workdetails.value === '' || workdetails.value == null){
        messages.push("workdetails field is required!!!!!!!!!!!!!")
    }

    else if(workdetails.value.length <= 50){
        messages.push("workdetails must be atleast 50 words!!!!")
    }

    else if(workdetails.value.length >= 100){
        messages.push("please enter work details less than 100 words!!!!")
    }
    

    if(messages.length > 0){
        e.preventDefault()
        error.innerHTML = messages.join(',')
    }
})