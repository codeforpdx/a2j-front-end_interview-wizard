import {Injectable} from '@angular/core';
import {autobahn} from 'autobahn';

/*=============
**
**  Generic methods for retrieving data from any data store
**
=============*/


/*==============
questions have unique ID but share group ID


===============*/

interface question_list {

}

@Injectable({
	providedIn: 'root'
})

export class Qusestion{

	constructor(public ...props){

		var connection = new autobahn.Connection({
			url: 'ws://127.0.0.1:9000',
			realm: dataStore
		});
	}

	//We'll either

	get_all() : {} {
		return;
	}

	/*====================
	Answers will populate based on user's already-completed questions
		delete this later: profile id = question id = answered? N -> Create list
		return this list 
	====================*/
	get_missing(){
		//session: ability to interact with router.  Contains methods.
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

		connection.open;
			
	}

	//Comes from user manager
	var uID = userId;


	var store = dataStore;
	var searchAttributes = ...props;

	/*============
	//Open a channel to the app's microservice router
	============*/




	connection.open();



	ngOnInit(){

	}

}