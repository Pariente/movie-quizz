var GameOverView = Backbone.View.extend ({

  el: '#content',

  events: {
    // click on submit score
    // click on new game
    // click on back to main menu
  },

  initialize: function() {
    var ls = new Backbone.LocalStorage("GameCollection");
    console.log(ls);
    this.render();
  },

  templateGameOver: Handlebars.compile($('#template-gameover').html()),

  render: function() {
    var $renderTarget = this.$('#content');
    $renderTarget.empty();
    $renderTarget.html(
      // this.templateGameOver(questions[currentQuestion])
      'yolo'
    );
  }
});

// PASSER LE GAME MODEL DANS LA VIEW GAMEOVER ET VOIR COMMENT CA MARCHE
// DONC NE PAS FAIRE DE ROUTE SPECIFIQUE
