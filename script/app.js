var AppRouter = Backbone.Router.extend({

  routes: {
    // Default route
    '': 'defaultRoute',
    // Game start route
    'start': 'gameStartRoute',
    // Gameover route
    'gameover': 'gameOverRoute',
    // Highscores route
    'highscores': 'highscoresRoute'
  },

  defaultRoute: function () {
    console.log('This is the default route.');
  },

  gameStartRoute: function() {
    console.log('This is the gameStart route.');
  },

  gameOverRoute: function() {
    console.log('This is the gameOver route.');
  },

  highscoresRoute: function() {
    console.log('This is the highscores route.');
  },
});

var MyRouter = new AppRouter;

Backbone.history.start();
