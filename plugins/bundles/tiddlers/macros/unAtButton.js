/*\
title: $:/macros/howwownow/bundles/unAtButton
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

exports.name = "unAtButton";

exports.params = [
	{name: "title"}
];

/*
Run the macro
*/
exports.run = function(title) {
  title = "" + title;
  if (title.indexOf('@') < 1) {
	  return "";
  } else {
	title = title.split('@')[0];
  	var ret = "<$button>-@<$action-sendmessage $message=\"tm-close-other-tiddlers\"/>\n";
	ret += "<$action-navigate $to=\"" + title.split('@')[0] + "\"/>\n";
	ret += "</$button>";
	return ret;
  }
};

})();
