var QuestionCollection = Backbone.Collection.extend({
  model: QuestionModel,
  localStorage: new Backbone.LocalStorage("QuestionCollection")
});