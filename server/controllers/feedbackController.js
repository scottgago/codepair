var User = require('../models/user');
var Users = require('../collections/users');
var knex = require('../db/config').knex;

module.exports = {
	postFeedback : function(req,res){
		console.log(req.body)
		aggregateScore = req.body.answers.responseItems.q1 +
			req.body.answers.responseItems.q2 +
			req.body.answers.responseItems.q3 +
			req.body.answers.responseItems.q4 +
			req.body.answers.responseItems.q5

		knex('users').select('aggregateScore').where('id', req.body.toID)
		.then(function(value){
		aggregateScore = value[0].aggregateScore + aggregateScore
		knex('users').where('id',req.body.toID)
		.update({aggregateScore: aggregateScore})
			.then(function(value){
				console.log('yeah')
			})	
		})

	}
}