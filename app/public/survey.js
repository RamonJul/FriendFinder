$(document).ready(function () {
    document.getElementById("close").addEventListener("click",function(){
        document.getElementById("best_match").style.display="none"
    })
    document.getElementById("submit").addEventListener("click", function () {
       
        var profile = {
            name: document.getElementById("name").value,
            photo: document.getElementById("img").value,
            score: []
        }
        var questions = document.getElementsByClassName("choices")
        for (let i = 0; i < questions.length; i++) {
            profile.score.push(parseInt(questions[i].value))
        }

        console.log(profile)


        $.post("/api/friends", profile).then(function (data) {
            document.getElementById("best_match").style.display="block"
            document.getElementById("best_match_name").innerHTML=data.name
            document.getElementById("best_match_pic").setAttribute("src",data.url)

        })
    })


    
})