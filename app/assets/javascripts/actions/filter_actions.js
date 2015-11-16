FilterActions = {

  setFilter: function (filter) {
    AppDispatcher.dispatch({
      actiontype: FilterConstants.SET_FILTER,
      filter: filter
    });
  }


};
