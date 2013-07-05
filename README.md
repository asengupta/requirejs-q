requirejs-q
===========

This project has two components you can use.
* A wrapper to allow loading RequireJS modules using Q promises (requireQ).
* A RequireJS plugin to transparently load modules which return Q promises (rq).

requireQ
========

   var promise = requireQ(["some-module", "another-module"]);
   promise.spread(function(m1, m2) {
     console.log("Modules were loaded.");
  	 console.log(m1);
  	 console.log(m2);
   });

rq
==

An async module which returns a Q promise:

   // async-module.js
   define([], function() {
     console.log("This does nothing either...");
  	 var t = Q.fcall(function() {return {data: "Again"};});
  	 console.log("t is ");
  	 console.log(t);
  	 return t;
   });

Include it as below:

   require(["rq!async-module"], function(v) {
     console.log("Loaded another module");
  	 console.log(v); // v will be the JSON, not the promise
   });

Alternatively, you can use requireQ directly, without using rq at all, like so:

   var promise = requireQ(["some-module", "another-module", "async-module"]);
   promise.spread(function(m1, m2, v) {
     console.log("Modules were loaded.");
     console.log(m1);
  	 console.log(m2);
     console.log(v); // v will be the JSON
   });
