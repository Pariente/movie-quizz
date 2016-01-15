var GameCollection = Backbone.Collection.extend({
  model: GameModel,
  localStorage: new Backbone.LocalStorage("GameCollection")
});