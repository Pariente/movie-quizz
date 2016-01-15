var QuestionView = Backbone.View.extend ({

  el: '#app',

  events: {

  },

  initialize: function() {
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

  getTemplate: function(question) {
    console.log(question);
    var questionTemplate = '<p>Yolo '+ question.movie.title +'</p>';
    return $(questionTemplate);
  },

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
    var totalQuestions = this.myQuestionCollection.length;
    var currentQuestion = 0;
    var questions = this.myQuestionCollection.toJSON();
    console.log(questions);
    var questionTemplate = this.getTemplate(questions[currentQuestion]);
    $renderTarget.append(questionTemplate);
  }
});
