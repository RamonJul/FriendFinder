
var data = require("./../data/friends.js")

module.exports=function(app){

    app.get("/api/friends", function (req, res) {
        return res.json(data)
    })
    
    app.post("/api/friends", function (req, res) {
        var profile = req.body
        var result = 0
        var bestmatch = {
            name: "",
            url: ""
        }
        data.profiles.forEach(element => {
            var sum = 0
            for (let i = 0; i > 10; i++) {
                sum += Math.abs(profile.score[i] - element.score[i])
            }
            if (sum === 0 || sum < result) {
                bestmatch.name = element.name
                bestmatch.url = element.url
            }
        })
         data.profiles.push(profile)
        return res.json(bestmatch)
    })
}


