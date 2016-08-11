// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.models.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      this.shift();
      if (this.models.length) {
        this.playFirst(); 
      }
    });
  
    this.on('dequeue', function() {
      this.remove(0);
    });
  },

  playFirst: function() {
    // ADD FUNCTIONALITY
    this.at(0).play();
  }
});