var QuestionModel = Backbone.Model.extend({
  defaults: {
    movie: {
      title: '',
      poster: ''
    },
    actor: {
      name: '',
      image: '',
      isPresent: true
    }
  }
});
