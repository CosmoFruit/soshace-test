
var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
const db = require('./db-config.js');

 
/* SET MODELS SCHEMES */
var categorySchema = new Schema(
	{ 
    name: { 
            type: String,
            required: true
          } 
  },
	{ versionKey: false }
);

var itemSchema = new Schema(
	{	
    name:       { 
                  type: String,
                  required: true
                },
 		category:     String,
    priceIn:   { 
                  type: Number,
                  default: 0
                },
    priceOut:  {   
                  type: Number,
                  default: 0
                },
	}, 
	{ versionKey: false }
);

var Category = mongoose.model("Category", categorySchema);
var Item = mongoose.model("Item", itemSchema);
 
/* DB CONNECTING */
var options = {};
options.server = { socketOptions: { keepAlive: 120 }};
options.replset = { socketOptions: { keepAlive: 120 }};
options.server = { poolSize: 10 };

mongoose.connect(db.url, options).then(() =>  console.log('DB connection successful...'))
 			 			                     .catch((err) => console.error(err));




/* API SECTION */
router.get('/', function(req, res, next) {
  res.send('Express REST API is running...');
});

/* GET ALL ITEM */
router.get('/item', function(req, res, next) {
	Item.find({}, function (err, data) {
    				if (err) return next(err);
    				res.json(data);
  	});
});

/* SAVE ITEM */
router.post('/item', function(req, res, next) {
   	console.log(req.body);
  	Item.create(req.body, function (err, data) {
    						if (err) return next(err);
    						res.json({ ok: "Item this name: '" + data.name + "' was successfully saved." });
  	});
});

/* UPDATE ITEM */
router.put('/item', function(req, res, next) {
   	console.log(req.body);
  	Item.findByIdAndUpdate(req.body._id, req.body, function (err, data) {
    						if (err) return next(err);
    						res.json({ ok: "Item this name: '" + data.name + "' was successfully updated." });
  	});
});

/* DELETE ITEM */
router.delete('/item', function(req, res, next) {
   	console.log(req.body);
  	Item.findByIdAndRemove(req.body._id, function (err, data) {
    						if (err) return next(err);
    						res.json({ ok: "Item this name: '" + data.name + "' was successfully removed." });
  	});
});

/* GET ALL CATEGORY */
router.get('/category', function(req, res, next) {
  Category.find({}, function (err, data) {
            if (err) return next(err);
            res.json(data);
    });
});

/* SAVE CATEGORY */
router.post('/category', function(req, res, next) {
    console.log(req.body);
    Category.create(req.body, function (err, data) {
                if (err) return next(err);
                res.json({ ok: "Category this name: '" + data.name + "' was successfully saved." });
    });
});

/* DELETE CATEGORY*/
router.delete('/category', function(req, res, next) {
    console.log(req.body);
    Category.findByIdAndRemove(req.body._id, function (err, data) {
                if (err) return next(err);
                res.json({ ok: "Category this name: '" + data.name + "' was successfully removed." });
    });
});


module.exports = router;