$(document).ready(function () {

    document.getElementById("submit").addEventListener("click", function () {
        var profile={
            name:document.getElementById("name").value,
            photo:document.getElementById("img").value,
            score:[]
        }
        var questions = document.getElementsByClassName("choices")
        for (let i = 0; i < questions.length ; i++) {
            profile.score.push(parseInt(questions[i].value))
        }

        console.log(profile)
          

        $.post("/api/friends",profile).then(function(data){

        })
    })
})