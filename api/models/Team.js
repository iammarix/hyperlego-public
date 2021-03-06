/**
 * Team.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	primaryKey: 'id',
	attributes: {
		//  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
		//  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
		//  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
		id: {
			type: 'number',
			required: true,
			unique: true,
			isInteger: true,
			min: 0
		},
		name: {
			type: 'string',
			required: true
		},
		division: {
			type: 'string',
			isIn: [ 'JQA', 'JA' ],
			required: true
		},
		color: {
			type: 'string'
		},
		city: {
			type: 'string',
			required: true
		},
		state: {
			type: 'string',
			required: true
		},
		contactName: {
			type: 'string',
			defaultsTo: ''
		},
		contactEmail: {
			type: 'string',
			defaultsTo: ''
		},
		here: {
			type: 'boolean',
			defaultsTo: false
		},
		arrived: {
			type: 'ref',
			columnType: 'datetime'
		},
		numKids: {
			type: 'number',
			isInteger: true,
			defaultsTo: 0,
			min: 0
		},
		teamPhoto: {
			type: 'string',
			defaultsTo: 'empty.jpg'
		},
		robotPhoto: {
			type: 'string',
			defaultsTo: 'empty.jpg'
		},

		//  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
		//  ║╣ ║║║╠╩╗║╣  ║║╚═╗
		//  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


		//  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
		//  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
		//  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
		school: {
			model: 'school'
		},
		scores: {
			collection: 'score',
			via: 'team'
		}
	},

};

