var QuestionView = Backbone.View.extend ({

  el: '#app',

  events: {

  },

  initialize: function() {
    $('#footer').empty();
    var that = this;
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

  templateHandlebars: Handlebars.compile($('#template-handlebars').html()),

  nextQuestion: function(answer, question) {
    var goodAnswer = question.actor.isPresent;
    if (answer === goodAnswer) {
      // we increment current score
      // we go to the next question
    } else {
      // we redirect to gameover
    }
  },

  render: function() {
    var $renderTarget = this.$('#content');
    $renderTarget.empty();
    // Questions
    var questions = this.myQuestionCollection.toJSON();
    var totalQuestions = this.myQuestionCollection.length;
    // Game
    var myGame = new GameModel();
    var currentQuestion = myGame.get('current');

    $renderTarget.html(
      this.templateHandlebars(questions[currentQuestion])
    );
  }
});
