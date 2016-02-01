var AppRouter = Backbone.Router.extend({

  routes: {
    // Default route
    '': 'defaultRoute',
    // Game start route
    'play': 'gameStartRoute',
    // Game over route
    'gameover': 'gameOverRoute',
    // Highscores route
    'scores': 'scoresRoute'
  },

  defaultRoute: function () {
  },

  gameStartRoute: function() {
    var MyQuestionView = new QuestionView();
  },

  gameOverRoute: function() {
    var MyGameOverView = new GameOverView();
  },

  scoresRoute: function() {
    var MyScoresView = new ScoresView();
  },
});

var MyRouter = new AppRouter();

Backbone.history.start();
