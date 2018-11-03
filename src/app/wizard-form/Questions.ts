export interface Question {
    formId: string;  //Identifies the properties of the form
    questionId: string;  //  Need
    question: string;   //The text of the question
    type: textarea | text | password | select | radio | date;
    answerType: string | number | date | dropdown;  //...;
    answers: answerType[];  //an array of answerTypes
    //The compiler doesn't like this... 
    //Do I have to define it first?  The compiler didn't throw an error earlier...
    //
    controls : {
        validationControls: email | password| date | locked; //....other validators
        submitHandler : onSubmit(); //Where do I define this function? 
    };
    questionUpdatedOn: Date;
    answeredOn: Date;
};


export class ExampleQuestion {
    question_name : "What is your Name?";
    response_type : 'shortText';
};

//Need a userID? 