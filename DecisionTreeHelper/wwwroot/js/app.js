﻿var app = angular.module('quizApp', []);
app.directive('quiz', function (quizFactory) {
    return {
        restrict: 'AE',
        scope: {},
        templateUrl: 'template.html',
        link: function (scope, elem, attrs) {
            scope.start = function () {

                // reset all values and fetch first question object.
                scope.id = 0;
                scope.choices = "";
                scope.tree = "";
                scope.question = [];
                scope.results = [];
                scope.quizOver = false;
                scope.inProgress = true;
                scope.questionNo = 1;
                scope.Error = "";
                scope.saveStatus = "";
                scope.decisiontree = [];
                scope.getQuestionById("root", "Question1");
            };
            scope.reset = function () {

                // reset all values
                scope.quizOver = false;
                scope.inProgress = false;
                scope.choices = "";
                scope.tree = "";
                scope.Error = "";
                scope.results = [];
                scope.question = [];
                scope.decisiontree = [];
                scope.saveStatus = "";
                questionNo = 1;
            };
            scope.display = function () {
                scope.decisiontree = [];

                $.ajax({
                    url: '/Home/GetDecisionTree',
                    success: function (response) {
                        scope.results = response;
                        if (scope.results[0].error) {
                            scope.Error = scope.results[0].error;
                        }
                        else {
                            scope.Error = "";
                            for (var i = 0; i < scope.results.length; i++) {
                                var question = scope.results[i];
                                scope.object = {
                                    'id': (question.answer) ? "Question : " + (i + 1) : "",
                                    'question': question.question,
                                    'answer': question.answer
                                };

                                scope.decisiontree.push(scope.object);
                            }
                        }
                    },
                    async: false
                });
            };

            scope.getQuestionById = function (parentid, val) {
                var q = quizFactory.getQuestionById(parentid, val);
                if (q.options) {

                    // Reset all radio buttons
                    for (var i = 0; i < q.options.length; i++) {
                        if (q.options[i].selectedRadio) {
                            q.options[i].selectedRadio = "";
                        }
                    }

                    // create new object of newly fetched question details
                    scope.object = {
                        'parentQuestionId': q.parentQuestionId,
                        'questionId': q.questionId,
                        'question': q.question,
                        'options': q.options
                    };

                    scope.question.push(scope.object);
                } else {

                    // Display final outcome
                    scope.quizOver = true;
                    scope.inProgress = false;
                    scope.choices += "\n" + "Final Answer: " + q.question;

                    // Save decision tree in result.txt file
                    scope.result = { 'Question': q.question };
                    scope.results.push(scope.result);
                    var results = angular.toJson(scope.results);

                    $.ajax({
                        url: '/Home/SubmitResult',
                        data: { result: results },
                        contentType: 'application/json; charset=utf-8',
                        success: function (response) {
                            scope.saveStatus += "Thank you for your time.";
                        },
                        async: false
                    });
                }
            };
            scope.checkAnswer = function (radioBtn, event) {
                var question = radioBtn.option1;
                var val = radioBtn.option.name;
                var radioBtnName = event.target.name;

                $("input[name=" + radioBtnName + "]").attr("disabled", true);
                // check answer of the question and call next question based on current answer
                var options = question.options;
                var ans = "";
                for (var i = 0; i < options.length; i++) {
                    if (options[i].selectedRadio) {
                        ans = options[i].selectedRadio;
                    }
                }

                // push changes to resault results object array for saving in results.txt file
                if (ans) {
                    scope.result = { 'Question': question.question, 'Answer': ans };
                    scope.results.push(scope.result);
                }

                // display questions along with choices
                scope.choices += "\n" + scope.questionNo + ". Question: " + question.question + "\n";
                scope.choices += "Answer: " + ans + "\n";
                scope.questionNo++;

                // get next question by questionId
                scope.getQuestionById(question.questionId, val);
            };
        }
    }
});

app.factory('quizFactory', function () {
    var questions = [{
        parentQuestionId: "root",
        questionId: "Question1",
        question: "Are you looking for Job change?",
        options: [{
            name: "Yes",
            selected: false
        }, {
            name: "No",
            selected: false
        }]
    }, {
        parentQuestionId: "Question1Yes",
        questionId: "Question2",
            question: "Are you looking for .NET Developer position?",
        options: [{
            name: "Yes",
            selected: false
        }, {
            name: "No",
            selected: false
        }]
    },
    {
        parentQuestionId: "Question1No",
        questionId: "Question3",
        question: "Thank you, Please get in touch with us in future in case you decide to switch."
    },
    {
        parentQuestionId: "Question2Yes",
        questionId: "Question4",
        question: "Are you open for relocation?",
        options: [{
            name: "Yes",
            selected: false
        }, {
            name: "No",
            selected: false
        }]
    },
    {
        parentQuestionId: "Question2No",
        questionId: "Question5",
        question: "Are you looking for Full Stack Developer position?",
        options: [{
            name: "Yes",
            selected: false
        }, {
            name: "No",
            selected: false
        }]
    },
    {
        parentQuestionId: "Question4Yes",
        questionId: "Question6",
        question: "We do have open positions across the world. Please apply for applicable position by visiting our site and we will get back to you."
    },
    {
        parentQuestionId: "Question4No",
        questionId: "Question7",
        question: "Please do let us know in future if you are open for relocation?"
    },
    {
        parentQuestionId: "Question5Yes",
        questionId: "Question8",
        question: "Great!!! Please share your CV and we will get back to you."
    },
    {
        parentQuestionId: "Question5No",
        questionId: "Question9",
        question: "Sorry, We only have above open positions."
    }];

    return {
        getQuestion: function (id) {
            if (id < questions.length) {
                return questions[id];
            } else {
                return false;
            }
        },
        updateQuestion: function (id, ans) {
            questions[id].answers = ans;
        },
        getQuestionById: function (question, val) {
            if (question === "root") {
                parentid = question;
                var selectedQuestion = questions.filter(i => i.parentQuestionId === parentid)[0];
                return selectedQuestion;
            }
            parentid = question + val;
            return questions.filter(i => i.parentQuestionId === parentid)[0];
        },
        disableRadioButton : function (option) {
            var radiobuttons = document.getElementsByName(option.name);
            for (i = 0; i < radiobuttons.length; i++) {
                radiobuttons[i].disabled = true;
            }
        }
    };
});
