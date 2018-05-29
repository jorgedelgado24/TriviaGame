$(document).ready(function () {

    //these are the options that the user can choose from
    var categoryOptions = ["sports-button", "hollywood-button", "general-culture-button", "disney-button"];

    //defining the questions and answers for each index in buttonOtpions
    var questions = [
        ["Who was the shortest player ever to play in the NBA?", "What male tennis player has won the most Grand Slam titles?", "How many holes are there in a full round of golf?", "What city hosted the 2012 Summer Olympics?", "What year was the first Super Bowl played?", "In what year was the first modern Olympic Games held?", "What is the highest score possible in 10 pin bowling?", "What NFL Quarterback has been in the most Super Bowls?", "In Tennis, the first to score after deuce is said to have what? (Usually shortened to 2 letters)", "The Heisman Trophy is presented in which sport?"],
        ["What is Captain Jack Sparrow's key catch-phrase in all the Pirates of the Caribbean films?", "In what year was the first Harry Potter movie released?", "In the movie The Wizard of Oz, what did the Scarecrow want from the wizard?", "In what year was the original Jurassic Park film released?", "Who does the voice over for Dory from Finding Nemo and Finding Dory?", "What was the name of the monkey in the Disney movie Aladdin?", "Who was the male lead in the 1996 summer blockbuster Independence Day?", "In the Superman movies what newspaper does Clark Kent Work for?", "In 'The Lord Of The Rings', what's the name of the Elf that takes part in The Fellowship Of The Ring?", "In the movie Mean Girls, where is Caty originally from?"],
        ["The world’s fastest growing plant is a species of what?", "In the classic board game Monopoly, how much does it cost to buy a railroad?", "He created Car Pool Karaoke.", "This team won the FIFA World Cup in 2014", "He was called The King of Pop.", "In the Ice Age movies, what is the name of the woolly mammoth?", "Who is the oldest of the Kardashian sisters?", "What is Paul McCartney’s middle name?", "Who was the first actor to portray James Bond on screen?", "Who was the first Disney princess?"],
        ["In Peter Pan, Captain Hook had a hook on which one of his hands?", "Which Disney princess wears pants rather than a dress?", "In the Lion King, where does Mufasa and his family live?", "In Beauty and the Beast, how many eggs does Gaston eat for breakfast?", "During the battle with Aladdin, what type of animal does Jafar transform himself into?", "What was the name of the whale in Pinocchio?", "During the ballroom scene of Beauty & the Beast, what color is Belle’s Gown?", "In Alice in Wonderland, what is the name of Alice’s kitten?", "Which Disney movie was the first to be nominated for an Oscar?", "Which Disney princess makes a surprise appearance in the Hunchback of Notre Dame?"]
    ];

    var possibleAnswers = [
        [["Greg Grant", "Muggsy Bogues", "Mel Hirsch", "Earl Boykins"], ["Novak Djokovic", "Rafael Nadal", "Pete Sampras", "Roger Federer"], ["18", "9", "27", "36"], ["London", "Tokyo", "Rio de Janeiro", "Beijing"], ["1968", "1967", "1969", "1970"], ["1904", "1892", "1900", "1896"], ["120", "300", "500", "250"], ["Tom Brady", "Peyton Manning", "Joe Montana", "Terry Bradshaw"], ["Ace (ac)", "Lead (ld)", "More Points (mp)", "Advantage (ad)"], ["soccer", "basketball", "baseball", "football"]],
        [["Avast Ye", "All Hand Hoy!", "Ahoy, Matey", "Savvy?"], ["2003", "2000", "2002", "2001"], ["Brain", "Heart", "Money", "Happiness"], ["1996", "1993", "1994", "1995"], ["Uma Turman", "Tina Fey", "Jennifer Aniston", "Ellen Degeneres"], ["Tick", "Abu", "Tin", "Arty"], ["Jason Statham", "Bruce Willis", "Brad Pitt", "Will Smith"], ["Daily Planet", "Today's News", "Daily Digest", "The Post"], ["Galadriel", "Legolas", "Frodo", "Gandalf"], ["America", "Europe", "Asia", "Africa"]],
        [["Sequoia", "Hemp", "Algae", "Bamboo"], ["250", "200", "400", "300"], ["Jerry Seinfeld", "Jimmy Fallon", "Jimmy Kimmel", "James Corden"], ["Germany", "Spain", "Brazil", "Italy"], ["Johnny Cash", "Elvis Presley", "Michael Jackson", "Bruno Mars"], ["Sid", "Manny", "Diego", "Shira"], ["Kourtney", "Kim", "Khloe", "Kendall"], ["Alexander", "John", "James", "Paul"], ["Barry Nelson", "Roger Moore", "Sean Connery", "Timothy Dalton"], ["Belle", "Snow White", "Persephone", "Cinderella"]],
        [["Both hands", "His left", "His right", "No hook"], ["Jasmine", "Pocahontas", "Mulan", "Tiana"], ["Highest Rock", "Pride Rock", "Lions Rock", "Pack Rock"], ["1 Dozen", "2 Dozen", "4 Dozen", "5 Dozen"], ["A Cobra", "An Eagle", "A Lion", "A Bear"], ["Monstar", "Monstro", "Moby Dick", "Mongo"], ["Bronze", "Blue", "White", "Gold"], ["Dinah", "Tinah", "Rinah", "Minah"], ["Cinderella", "The Lion King", "Beauty & Beast", "Fantasia"], ["Rapunzel", "Snow White", "Cinderella", "Belle"]],
    ];

    var answers = [
        ["Muggsy Bogues", "Roger Federer", "18", "London", "1967", "1896", "300", "Tom Brady", "Advantage (ad)", "football"],
        ["Savvy?", "2001", "Brain", "1993", "Ellen Degeneres", "Abu", "Will Smith", "Daily Planet", "Legolas", "Africa"],
        ["Bamboo", "200", "James Corden", "Germany", "Michael Jackson", "Manny", "Kourtney", "Paul", "Barry Nelson", "Persephone"],
        ["His left", "Jasmine", "Pride Rock", "5 Dozen", "A Cobra", "Monstro", "Gold", "Dinah", "Beauty & Beast", "Belle"]
    ];


    //When clicking the buttons do the following
    $("#buttons").on("click", "button", function () {

        //hide the instructions and categories
        $("#instructions").hide();
        $("#buttons").hide();
        $("#time").show();

        var done = $("<button>").text("Done!");
        done.addClass("col-3 col-lg-3 d-inline btn btn-primary");
        done.attr("id","done-button")

        $("#done").append(done);

        var time = 90;
        var intervalId = setInterval(decrement, 1000);

        function decrement() {

            time--;

            $("#time").text("Time remaining: " + time + " seconds");

            if (time === 0) {
                $(".questions").remove();
                $("#done-button").remove();
                $("#time").hide();


                var finalMessage = $("<div>");
                finalMessage.addClass("row col-12 col-lg-12 final-message");

                var timesUp = $("<p>").text("Time's up!");
                timesUp.addClass("row col-12 col-lg-12");
                timesUp.attr("id", "times-up")

                var finalCorrect = $("<p>").text("Correct Answers: " + correctAnswers);
                finalCorrect.addClass("row col-12 col-lg-12");

                var finalIncorrect = $("<p>").text("Incorrect Answers: " + incorrectAnswers);
                finalIncorrect.addClass("row col-12 col-lg-12");

                var finalUnanswered = $("<p>").text("Unanswered questions: " + unansweredquestions);
                finalUnanswered.addClass("row col-12 col-lg-12");

                var percentage = $("<p>").text("You got " + ((correctAnswers / questions[indexCategorySelected].length) * 100) + "% correct answers.");
                finalUnanswered.addClass("row col-12 col-lg-12");

                var retry = $("<button>").text("Try Again");
                retry.addClass("row col-12 col-lg-12 btn btn-primary");
                retry.attr("id", "retry");

                finalMessage.append(timesUp);
                finalMessage.append(finalCorrect);
                finalMessage.append(finalIncorrect);
                finalMessage.append(finalUnanswered);
                finalMessage.append(percentage);
                finalMessage.append(retry);

                $("#trivia").html(finalMessage);
            }
        }
        //get the category selected and see its index in categoryOptions
        var categorySelected = $(this).attr("id");
        console.log(categorySelected);
        var indexCategorySelected = categoryOptions.indexOf(categorySelected);
        console.log(indexCategorySelected);

        var correctAnswers = 0;
        var incorrectAnswers = 0;
        var unansweredquestions = questions[indexCategorySelected].length;

        //get the questions and answers for the categorySelected and create divs and buttons to modify the DOM
        for (i = 0; i < questions[indexCategorySelected].length; i++) {
            var newDiv = $("<div>");
            newDiv.addClass("row col-12 col-lg-12 questions");
            newDiv.attr("id", "question" + (i + 1));

            var question = $("<p>").text(questions[indexCategorySelected][i]);
            question.addClass("row col-12 col-lg-12");
            console.log(question);

            var optionsDiv = $("<div>");
            optionsDiv.addClass("row col-12 col-lg-12 text-center options");
            optionsDiv.attr("id", "options-question-" + (i + 1));

            var option1 = $("<button>").text(possibleAnswers[indexCategorySelected][i][0]);
            option1.addClass("col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12 d-inline btn btn-outline-primary");
            option1.attr("id", (i + 1));
            var option2 = $("<button>").text(possibleAnswers[indexCategorySelected][i][1]);
            option2.addClass("col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12 d-inline btn btn-outline-primary");
            option2.attr("id", (i + 1));
            var option3 = $("<button>").text(possibleAnswers[indexCategorySelected][i][2]);
            option3.addClass("col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12 d-inline btn btn-outline-primary");
            option3.attr("id", (i + 1));
            var option4 = $("<button>").text(possibleAnswers[indexCategorySelected][i][3]);
            option4.addClass("col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12 d-inline btn btn-outline-primary");
            option4.attr("id", (i + 1));

            optionsDiv.append(option1);
            optionsDiv.append(option2);
            optionsDiv.append(option3);
            optionsDiv.append(option4);

            newDiv.append(question);
            newDiv.append(optionsDiv);

            $("#trivia").append(newDiv);


        }

        $("#trivia").on("click", "button", function () {


            var chosenAnswer = $(this).text();
            console.log(chosenAnswer)
            var questionAnswered = $(this).attr("id");
            console.log(questionAnswered);
            var correctAnswer = answers[indexCategorySelected][questionAnswered - 1];
            console.log(correctAnswer);

            var isItCorrect;

            $("#options-question-" + questionAnswered).remove();

            if (chosenAnswer == correctAnswer) {
                isItCorrect = "Correct!";
                correctAnswers++;
                console.log(correctAnswers);
                unansweredquestions--;
                console.log(unansweredquestions);
            } else {
                isItCorrect = "Wrong!";
                incorrectAnswers++;
                console.log(incorrectAnswers);
                unansweredquestions--;
                console.log(unansweredquestions);
            };

            var isItCorrectMessage = $("<p>").text(isItCorrect);
            isItCorrectMessage.addClass("row col-12 col-lg-12");
            isItCorrectMessage.attr("id", "message-is-it-correct");
            console.log(isItCorrectMessage);

            var userAnswer = $("<p>").text("Your Answer: " + chosenAnswer);
            userAnswer.addClass("row col-12 col-lg-12");
            userAnswer.attr("id", "message");
            console.log(userAnswer);

            var correct = $("<p>").text("Correct Answer: " + correctAnswer);
            correct.addClass("row col-12 col-lg-12");
            correct.attr("id", "message");
            console.log(correct);

            $("#question" + questionAnswered).append(isItCorrectMessage);
            $("#question" + questionAnswered).append(userAnswer);
            $("#question" + questionAnswered).append(correct);


        });

        $("#done").on("click", "button", function () {

            $(".questions").remove();
            $("#done-button").remove();
            $("#time").hide();
            clearInterval(intervalId);

            var finalMessage = $("<div>");
            finalMessage.addClass("row col-12 col-lg-12 final-message");

            var finalCorrect = $("<p>").text("Correct Answers: " + correctAnswers);
            finalCorrect.addClass("row col-12 col-lg-12");

            var finalIncorrect = $("<p>").text("Incorrect Answers: " + incorrectAnswers);
            finalIncorrect.addClass("row col-12 col-lg-12");

            var finalUnanswered = $("<p>").text("Unanswered questions: " + unansweredquestions);
            finalUnanswered.addClass("row col-12 col-lg-12");

            var percentage = $("<p>").text("You got " + ((correctAnswers / questions[indexCategorySelected].length) * 100) + "% correct answers.");
            finalUnanswered.addClass("row col-12 col-lg-12");

            var retry = $("<button>").text("Try Again");
            retry.addClass("row col-12 col-lg-12 btn btn-primary");
            retry.attr("id", "retry");


            finalMessage.append(finalCorrect);
            finalMessage.append(finalIncorrect);
            finalMessage.append(finalUnanswered);
            finalMessage.append(percentage);
            finalMessage.append(retry);

            $("#trivia").html(finalMessage);


        });

        $("#trivia").on("click", "#retry", function () {

            $(".final-message").remove();
            $("#instructions").show();
            $("#buttons").show();



        });
    });

});