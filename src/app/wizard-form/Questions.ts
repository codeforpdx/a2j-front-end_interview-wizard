export type answerType = 'textarea' | 'text' | 'password' | 'select' | 'radio' | 'date';
export interface Question {
    formId: string;  //Identifies the properties of the form
    questionId: string;  //  Need
    question: string;   //The text of the question
    type: 'textarea' | 'text' | 'password' | 'select' | 'radio' | 'date';
    answerType: string[];  //...; <--Rex-Response-your answer type is a string array, meaning it holds multipe strings so it should be label answerTypes or maybe its just a string.

    answers: answerType[]  //an array of answerTypes
    //The compiler doesn't like this... 
    //Do I have to define it first?  The compiler didn't throw an error earlier...
    //
    // -Rex-Response-the key "answers" seems to imply an array of answers, if that's true then I suggest an string[] | number[] | date[] type decleration
    controls : {
        validationControls: 'email' | 'password' | 'date' | 'locked'; //....other validators <--Rex-Response-There is a Validator Class Type in Angular, it would be what we can store in here for a more dynamic approach though the validator would have to be stored or generated and attached.
        submitHandler : () => void; //Where do I define this function? <--Rex-Response-An interface is like a template for an Object,
                                                                          // when we instantiate an object later and declare that it uses an interface, we are just saying that we promise to use the properties we defined in the interface.
                                                                          // So we define a function when we make a new object.
    };
    questionUpdatedOn: Date, // <-- needs semi-colon
    answeredOn: Date, // <-- needs semi-colon
}; // <-- doesn not need semi-colon


export class ExampleQuestion {
    question_name = "What is your Name?"; // <--Single quotes
    response_type = 'shortText' // <-- needs semi-colon
}; // <-- doesn not need semi-colon

//Need a userID? 
