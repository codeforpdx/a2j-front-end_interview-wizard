interface Question {
    formId: string;
    questionId: string;
    question: string;
    type: textarea | text | password | select | radio | date;
    answerType: string | number | date | //...;
    answers: answerType[];  //an array of answerTypes
    controls : {
        validationControls: email | password| date | locked //....other validators
        submitHandler : onSubmit()
    };
    questionUpdatedOn: Date;
    answeredOn: Date
}