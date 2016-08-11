// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.render, this);
  },

  render: function() {
    this.collection.forEach(function(item) { 
      var song = new SongQueueEntryView(item);
      song.render();
    });

    return this.$el;
  }

});
