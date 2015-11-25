/*\
title: $:/macros/howwownow/bundles/relativeTitle
type: application/javascript
module-type: macro
tags: HowWowNow/Bundles

Macro to output tiddlers matching a filter to Plugin

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Extracts part after rootTitle in fullTitle
*/

exports.name = "relativeTitle";

exports.params = [
	{name: "rootTitle"},
	{name: "fullTitle"}
];

/*
Run the macro
*/
exports.run = function(naturalName) {
	var relativeTitle = "";
  relativeTitle = fullTitle.subString(rootTitle.length());
	return relativeTitle;
};

})();
