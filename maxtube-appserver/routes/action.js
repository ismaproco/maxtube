var express = require('express');
var router = express.Router();


var myN = 1;
/* GET heap action listing. */
router.get('/', function(req, res) {

    //message definition
    // change video id
    // {action:'change', properties: {id:''} }
    // pause current video
    // {action:'stop'}
    // start current video
    // {action:'start'}

    console.log( 'req.query.operation',req.query.operation )

    if( req.query.operation === "set")
    {
        console.log(1 + ' my ' +myN);
        myN = myN +1;
        res.json({num:myN});
        console.log(1 + ' my ' +myN);
    }
    else if (req.query.operation === "get") {
        console.log(2+ ' my ' +myN);
        myN = myN -1;
        res.json({num:myN});
    }

    res.end();
});

module.exports = router;
