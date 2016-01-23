var GameOverView = Backbone.View.extend ({

  el: '#app',

  events: {
    'click .submit-score': 'submitScore'
    // click on new game
    // click on back to main menu
  },

  initialize: function() {
    $('#footer').empty();
    this.gameCollection = new GameCollection();
    this.gameCollection.fetch();
    this.render();
  },

  templateGameOver: Handlebars.compile($('#template-gameover').html()),

  submitScore: function() {
    var name = $('#player-name').val();
    this.gameCollection.last().set({name: name});
    this.gameCollection.last().save();
    window.location.hash = 'scores';
  },

  render: function() {
    // Let's empty the #content div.
    var $renderTarget = this.$('#content');
    $renderTarget.empty();
    var games = this.gameCollection.toJSON();
    var lastGame = games[games.length - 1];
    $renderTarget.html(
      this.templateGameOver(lastGame)
    );
  }
});
