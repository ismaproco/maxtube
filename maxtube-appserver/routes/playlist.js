var express = require('express');
var router = express.Router();


var playlist = [];
/* GET heap action listing. */
router.get('/', function(req, res) {

    console.log( 'req.query.operation',req.query.operation )

    if( req.query.operation === "add")
    {
        var pos = 0;
        
        if( req.query.pos )
        {
            pos = parseInt( req.query.pos );
        }
        else
        {
            pos = playlist.length;
        }

        if( req.query.url )
        {
            playlist[pos] = {
                position:pos,
                url:req.query.url
            };  
        }
        
        res.json( playlist );
    }
    else if (req.query.operation === "get") {
        if( req.query.pos )
        {
            var pos = parseInt(req.query.pos);
            res.json( playlist[pos] );   
        }
        else
        {
            res.json( playlist );
        }
    }

    res.end();
});

module.exports = router;
