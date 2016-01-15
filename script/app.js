var AppRouter = Backbone.Router.extend({

  routes: {
    // Default route
    '': 'defaultRoute',
    // Game start route
    'start': 'gameStartRoute',
    // Gameover route
    'gameover': 'gameOverRoute',
    // Highscores route
    'scores': 'scoresRoute'
  },

  defaultRoute: function () {
    console.log('This is the default route.');
  },

  gameStartRoute: function() {
    console.log('This is the gameStart route.');
    var MyQuestionView = new QuestionView();
  },

  gameOverRoute: function() {
    console.log('This is the gameOver route.');
  },

  scoresRoute: function() {
    console.log('This is the scores route.');
  },
});

var MyRouter = new AppRouter();

Backbone.history.start();
