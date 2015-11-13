ApiUtil = {

  fetchBenches: function (bounds) {

      $.ajax({
        url: "api/benches",
        method: "GET",
        dataType: "json",
        data: {bounds: bounds},
        success: function (benches) {
          ApiActions.receiveAll(benches);
        }

      });
  }

};
