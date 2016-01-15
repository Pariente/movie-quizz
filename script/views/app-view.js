var AppView = Backbone.View.extend ({

  el: '#app',

  events: {

  },

  initialize: function() {
    this.myQuestionCollection = new QuestionCollection(); // we bind the collection to the view by instanciating it.
    this.myQuestionCollection.fetch({
      url: "http://dcamilleri.com/wsf/api",
      success: function() {
            console.log("JSON file load was successful", AllStudents);
        },
      error: function(){
         console.log('There was some error in loading and processing the JSON file');
      }
    });
    this.render();
  },

  getTemplate: function(question) {

  },

  render: function() {

  }
});
