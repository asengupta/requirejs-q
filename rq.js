define([], function() {
    return {
      load: function(name, req, onload, config) {
          req([name], function (value) {
          	  if (!value.then) {
          	  	onload(value);
          	  }
          	  else {
          	  	value.then(function(actualValue) {
          	  		onload(actualValue);
          	  	})
          	  }
          });
      	}
    };
});
