function requireQ(modules) {
var deferred = Q.defer();
requirejs(modules, function(){
    deferred.resolve(arguments);
  });
  return deferred.promise;
};
// Use spread()
