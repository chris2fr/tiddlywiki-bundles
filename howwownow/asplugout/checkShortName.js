/*\
title: checkShortName
type: application/javascript
module-type: macro
tags: Chris2Fr/AsPlugout

Macro to output tiddlers matching a filter to Plugin

\*/
/*\
title: checkShortName
type: application/javascript
module-type: macro

Just eliminates non-conform spaces

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "checkShortName";

exports.params = [
	{name: "shortName"}
];

/*
Run the macro
*/
exports.run = function(shortName) {
  return "" + shortName.replace(/[^a-zA-Z0-9]/g,"");
};

})();
