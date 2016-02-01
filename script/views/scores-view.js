var ScoresView = Backbone.View.extend ({

  el: '#app',

  initialize: function() {
    $('#footer').empty();
    this.gameCollection = new GameCollection();
    this.gameCollection.fetch();
    this.render();
  },

  templateScores: Handlebars.compile($('#template-scores').html()),

  render: function() {
    var highScores = new GameCollection();
    var gamesToShow = this.gameCollection.toJSON();
    for (i=0;i<gamesToShow.length;i++) {
      if (gamesToShow[i].name != '') {
        highScores.add(gamesToShow[i]);
      }
    }
    function sortByKey(array, key) {
      return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
      });
    }
    var scoresToShow = highScores.toJSON();
    scoresToShow = sortByKey(scoresToShow, 'score');
    var $renderTarget = this.$('#content');
    $renderTarget.empty();
    $renderTarget.html(
      this.templateScores(scoresToShow)
    );
  }
});
