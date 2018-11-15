import {autobahn} from 'autobahn';

/*=============
**
**  Generic methods for retrieving data from any data store
**
=============*/



	/*===========
	Type is the 
	===========*/

export const retrieve = (userId, dataStore, ...props) => {

	var uID = userId;
	var store = dataStore;
	var searchAttributes = ...props;

	/*============
	//Open a channel to the app's microservice router
	============*/

	for (let attribute of searchAttributes){
		var connection = new autobahn.Connection({
			url: 'ws://127.0.0.1:9000',
			realm: dataStore
		});

		connection.onopen = function(session){
			//1) Topic subscription
			function onevent(args) {
				/*===========
				Handling data
				===========*/

				//Find out how data is structured within a realm

				//Find the user that matches the current ID
				//for said user...
					//retrieve user object

					//var userObject =  /* Retrieve it somehow! */

				//for each property of userObject
					//if any are required but are null, undefined, or null-y
						//pass, 

			}
		session.subscribe('com.myapp.hello', onevent);

		}
	}


	connection.open();
}


export const 