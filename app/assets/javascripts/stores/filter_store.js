(function (root) {

  var _filter = {min: 0, max: 100};
  var CHANGE_EVENT = "change";

  var resetFilter = function (filter) {
    _filter = filter;
  };


  root.FilterStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _filters.slice(0);
    },

    filterParams: function () {
      return _filter;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dipatcherID: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {
        case (FilterConstants.SET_FILTER):
          resetFilter(payload.filter);
          FilterStore.emit(CHANGE_EVENT);
          break;
      }
    })



  });

})(this);
