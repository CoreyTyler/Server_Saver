const mysql = require('mysql');
var request = require('request');

let pool = mysql.createPool({
    connectionLimit: 100,
    host: '35.193.141.205',
    user: 'root',
    password: '12880758',
    database: 'serversaver',
    debug: false
  })

exports.seeIfConnected = (req, res) => res.send("connected");

exports.postTips = (req, res) => {
    const { time, date, tips } = req.query;
    const INSERT_TIPS_QUERY = `INSERT INTO tips (time, date, tips) VALUES('${time}', ${date}, ${tips})`
    pool.query(INSERT_TIPS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send("tip successfully added")
        }
    })
};

exports.getTips = (req, res) => {
    pool.query('SELECT * FROM tips', function(err, rows) {
        if(err){
            return res.json({
                'error': true,
                'message': "Error occured:" + err
            })
        } else {
            res.json({rows})
        }
    })
}

exports.tipsForTable = (req, res) => {
    pool.query('SELECT * FROM tips', function(err, rows) {
        if(err){
            return res.json({
                'error': true,
                'message': "Error occured:" + err
            })
        } else {
            // let parsedBody = JSON.parse(rows);
            // res.send({parsedBody})
            res.json({rows})
        }
    })
};

exports.getWeather = (req, res) => {
    request(
        "http://api.weatherstack.com/current?access_key=f7921c0e223e4359dc9260fe246e0a97&query=Austin&units=f",
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
                let parsedBody = JSON.parse(body);
                let temp = parsedBody["current"]["temperature"];
                let city = parsedBody["location"]["name"];
                let region = parsedBody["location"]["region"]
                res.send({temp, city, region});
            }
        }
    )
}

exports.deleteTip = (req, res) => {
    const id = req.params.id
    let sql = "DELETE FROM tips WHERE id=?"
    pool.query(sql, id, (err, result) => {
        if(err){
            console.log(err)
        } else {
            res.send(result)
        }
    }
    )
}