var QuestionView = Backbone.View.extend ({

  el: '#app',

  events: {
    'click .next-question': 'nextQuestion'
  },

  initialize: function() {
    $('#footer').empty();
    var that = this;
    this.myGame = new GameModel();
    this.myGameCollection = new GameCollection();
    this.myGameCollection.fetch();
    this.myGameCollection.add(this.myGame);
    this.myQuestionCollection = new QuestionCollection(); // we bind the collection to the view by instanciating it.
    this.myQuestionCollection.fetch({
      success: function(questions) {
            console.log("JSON file load was successful", questions);
            that.render();
        },
      error: function(){
         console.log('There was some error in loading and processing the JSON file');
      }
    });
  },

  templateQuestion: Handlebars.compile($('#template-question').html()),
  templateGameOver: Handlebars.compile($('#template-gameover').html()),

  nextQuestion: function(event) {
    var questions = this.myQuestionCollection.toJSON();
    var currentQuestion = this.myGame.get('question');

    // We look at what the player answered.
    var answer = event.currentTarget.value == 'true';
    // Below is the correct answer.
    var goodAnswer = questions[currentQuestion].actor.isPresent;

    // If the player answered correctly:
    if (answer == goodAnswer) {
      // Below we increment the score and the current question.
      var currentScore = this.myGame.get('score');
      this.myGame.set({score: currentScore + 1});
      this.myGame.set({question: currentQuestion + 1});
      this.myGame.save();
      console.log(this.myGame.get('question'));
      // And we render the view for the next question.
      this.render();
    } else {
      // We set the gameover parameter to true and we render the view.
      console.log('Game over, lad.');
      this.myGame.set({gameover: true});
      this.myGame.save();;
      this.render();
    }
  },

  render: function() {
    // Let's empty the #content div.
    var $renderTarget = this.$('#content');
    $renderTarget.empty();

    // If it's game over, we render with the gameover template.
    // If the game is still on, we render the next question.
    if (this.myGame.get('gameover')) {
      $renderTarget.html(this.templateGameOver(this.myGame.toJSON()));
    } else {
      // Questions
      var questions = this.myQuestionCollection.toJSON();
      var totalQuestions = this.myQuestionCollection.length;
      // Game
      var currentQuestion = this.myGame.get('question');
      $renderTarget.html(
        this.templateQuestion(questions[currentQuestion])
      );
      $(".current-score").html(this.myGame.get('score'));
    }
  }
});
