define(["Q"], function(Q) {
    return {
      load: function (name, req, onload, config) {
          var deferred = Q.defer();
          req([name], function (value) {
              deferred.resolve(value);
          });
          return deferred.promise;
      }
    };
});
