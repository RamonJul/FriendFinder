
    document.getElementById("close").addEventListener("click", function () {
        document.getElementById("best_match").style.display = "none"
      })
      document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault();
    function valid(){
      var text=document.getElementsByClassName("info")
      var options=document.getElementsByClassName("choices")
      let valid=true
    
      for(let i=0;i<text.length;i++){
        text[i].style.border=""
        if(text[i].value===""){
          text[i].style.border=" 10px solid red"
          valid=false
        }
      }
    
      for(let i=0;i<options.length;i++){
        options[i].style.border=""
        if(options[i].value===""){
          options[i].style.border=" 10px solid red"
          valid=false
        }
      }
      return false;
    }
    if(valid()){
      var profile = {
          name: document.getElementById("name").value,
          photo: document.getElementById("img").value,
          score: [document.getElementById("q1").value,
          document.getElementById("q2").value,
          document.getElementById("q3").value,
          document.getElementById("q4").value,
          document.getElementById("q5").value,
          document.getElementById("q6").value,
          document.getElementById("q7").value,
          document.getElementById("q8").value,
          document.getElementById("q9").value,
          document.getElementById("q10").value]
        }
    
        // $.post("/api/friends", profile).then(function (data) {
        //   document.getElementById("best_match").style.display = "block"
        //   document.getElementById("best_match_name").innerHTML = data.name
        //   document.getElementById("best_match_pic").setAttribute("src", data.url)
    
        // })
    }
    
    
      })
    
