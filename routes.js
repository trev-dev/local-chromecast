var fs = require('fs');
var vidparse = require('./parser.js');

module.exports = function(app) {

    app.get('/', function(req, res){
        fs.readdir(`${__dirname}/vids`, function(err, vids){
            
            if (err) {

                res.status(500).send(err);

            } else {

                vids = vids.map(function(vid){

                    return vidparse.getObj(vid);

                });

                res.render('home.pug', {pretty:true, vids: vids});

            }

        });

    });

    app.get('/vid/previous/:curr', function(req, res){

        fs.readdir(`${__dirname}/vids`, function(err, vids){
            
            if (err) {

                res.status(500).send(err);

            } else {

                var i = vids.indexOf(req.params.curr);

                i === 0 ? i = vids.length - 1 : i = i - 1;

                res.redirect(`/vid/${vids[i]}`);

            }

        });

    });

    app.get('/vid/next/:curr', function(req, res){

        fs.readdir(`${__dirname}/vids`, function(err, vids){
            
            if (err) {

                res.status(500).send(err);

            } else {

                var i = vids.indexOf(req.params.curr);

                i === vids.length - 1 ? i = 0 : i = i + 1;

                res.redirect(`/vid/${vids[i]}`);

            }

        });

    });

    app.get('/vid/:vid', function(req, res){

        var vid = vidparse.getObj(req.params.vid);

        res.render('video.pug', {vid: vid});

    });

}