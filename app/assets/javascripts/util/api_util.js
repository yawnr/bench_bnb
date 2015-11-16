ApiUtil = {

  fetchBenches: function (bounds, filterParams) {
    
      $.ajax({
        url: "api/benches",
        method: "GET",
        dataType: "json",
        data: {bounds: bounds, filterParams: filterParams},
        success: function (benches) {
          ApiActions.receiveAll(benches);
        }

      });
  },

  createBench: function (bench, callback) {

      $.ajax({
        url: "api/benches",
        method: "POST",
        dataType: "json",
        data: {bench: bench},
        success: function (bench) {
          ApiActions.addBench(bench);
          callback();
        }

      });
  }

};
