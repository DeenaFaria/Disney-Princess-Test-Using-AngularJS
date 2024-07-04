app.controller('QuizController', function($scope) {
    $scope.questions = [
        {
            id: 1,
            text: "What is your favorite color?",
            options: [
                { text: "Blue", value: ["Cinderella", "Elsa"] },
                { text: "Yellow", value: ["Belle"] },
                { text: "Green", value: ["Tiana"] },
                { text: "Purple", value: ["Rapunzel"] }
            ]
        },
        {
            id: 2,
            text: "What is your favorite hobby?",
            options: [
                { text: "Reading", value: ["Belle", "Rapunzel"] },
                { text: "Cooking", value: ["Tiana"] },
                { text: "Singing", value: ["Elsa", "Cinderella"] },
                { text: "Dancing", value: ["Cinderella"] }
            ]
        },
		{
            id: 3,
            text: "What kind of personality do you have?",
            options: [
                { text: "Introvert", value: ["Elsa","Cinderella"] },
                { text: "Extrovert", value: ["Rapunzel","Tiana"] },
                { text: "Ambivert", value: ["Belle"] },
                { text: "Not sure", value: ["You are not a princess, you're a queen!"] }
            ]
        },
		{
            id: 4,
            text: "What is your favorite food?",
            options: [
                { text: "Croissant", value: ["Belle"] },
                { text: "Pizza", value: ["Tiana"] },
                { text: "Ramen", value: ["Elsa"] },
                { text: "Tacos", value: ["Rapunzel"] }
            ]
        },
		{
            id: 5,
            text: "What is your height?",
            options: [
                { text: "5-5.3", value: ["Rapunzel"] },
                { text: "5.4-5.6", value: ["Tiana","Belle","Cinderella"] },
                { text: "5.7-5.10", value: ["Elsa"] },
                { text: "Taller than all other options", value: ["You are not a princess, you're a queen!"] }
            ]
        },
        // Add more questions here
    ];

    $scope.answers = {};
    $scope.currentQuestionIndex = 0;
    $scope.quizCompleted = false;
    $scope.result = '';

    $scope.nextQuestion = function() {
        if ($scope.currentQuestionIndex < $scope.questions.length - 1) {
            $scope.currentQuestionIndex++;
        }
    };

    $scope.prevQuestion = function() {
        if ($scope.currentQuestionIndex > 0) {
            $scope.currentQuestionIndex--;
        }
    };

    $scope.submitQuiz = function() {
        var princessCount = {};

        for (var key in $scope.answers) {
            var princesses = $scope.answers[key];
            princesses.forEach(function(princess) {
                if (princessCount[princess]) {
                    princessCount[princess]++;
                } else {
                    princessCount[princess] = 1;
                }
            });
        }

        var maxCount = 0;
        var tiedPrincesses = [];

        for (var princess in princessCount) {
            if (princessCount[princess] > maxCount) {
                maxCount = princessCount[princess];
                tiedPrincesses = [princess];
            } else if (princessCount[princess] === maxCount) {
                tiedPrincesses.push(princess);
            }
        }

        if (tiedPrincesses.length === 1) {
            $scope.result = tiedPrincesses[0];
        } else {
            $scope.result = tiedPrincesses[Math.floor(Math.random() * tiedPrincesses.length)];
        }

        $scope.quizCompleted = true;
    };
});
