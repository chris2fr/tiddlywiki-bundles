/*\
title: UnAtMacro
type: application/javascript
module-type: macro
tags: HowWowNow/Bundles

Macro to take everything to the left of @

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "unAt";

exports.params = [
	{name: "title"}
];

/*
Run the macro
*/
exports.run = function(title) {
  title = "" + title;
  return title.split('@')[0];
};

})();
