


export default class behaviorHash { 

	constructor(props){

	}

	/*===========
	Make the classes that access the data 
	private to not give away the shape of
	potentially sensitive data
	============*/
	public hideUntil(behavior, field){
		let observedBehavior = behavior;
		let observedField = field;

		//if()
	}



	/*==========
	Exposed method used to call the 
	==========*/

	public behaviors(behavior, field){

		switch(behavior){
			case 'hideUntil':
				return this.hideUntil;

		default: 
			return false;
		}
	}



}
