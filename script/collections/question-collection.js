var QuestionCollection = Backbone.Collection.extend({
  model: QuestionModel,
  url: "questions.json"
});
