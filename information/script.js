questions = document.querySelectorAll(".question")
allP = document.querySelectorAll(".question p")

questions.forEach(function (question){
    const btn = question.querySelector("h3")
    btn.addEventListener("click", (e)=>{
        e.target.nextElementSibling.classList.toggle("hideText")
    })
})