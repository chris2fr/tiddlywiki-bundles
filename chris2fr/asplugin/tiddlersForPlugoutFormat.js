/*\
title: tiddlersForPlugoutFormat
type: application/javascript
module-type: macro
tags: HowWowNow/AsPlugout

Macro to output tiddlers matching a filter to Plugin

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "tiddlersForPlugoutFormat";

exports.params = [
	{name: "filter"},
	{name: "wikiShortName",
	default: "MyWiki"},
	{name: "authorShortName",
	default: "MeMyselfAndI"}
];

/*
Run the macro
Returns a Plugin-compatible {tidlers{}} json string with a couple of additions
*/
exports.run = function(filter, wikiShortName, authorShortName) {
	var data = {tiddlers: {}};
	var tiddlers = this.wiki.filterTiddlers(filter);
	// Used as a flag and a plugout field value
	var wikiAuthorTitle = wikiShortName.replace("[^a-zA-Z0-9]","") + "/" + wikiShortName.replace("[^a-zA-Z0-9]","");
	// Where the Wiki will be
	var wikiFullPath = "$:/plugouts/" + wikiAuthorTitle
	for(var t=0;t<tiddlers.length; t++) {
		var tiddler = this.wiki.getTiddler(tiddlers[t]);
		if(tiddler) {
			var fields = new Object();
			for(var field in tiddler.fields) {
				fields[field] = tiddler.getFieldString(field);
			}
			data["tiddlers"][fields["title"]] = fields;
			// Adding of a specific field (perhaps more elegant)
			// A little belt and suspenders with the tag appending
			fields["plugout"] = wikiAuthorTitle;
			// Adding of "ExtraTag"
			if (!("tags" in data["tiddlers"][fields["title"]])) {
			   data["tiddlers"][fields["title"]]["tags"] = "";
			}
			if( !(data["tiddlers"][fields["title"]]["tags"].indexOf(wikiAuthorTitle) >= 0)) {
				data["tiddlers"][fields["title"]]["tags"] += " " + wikiAuthorTitle;
			}
      data["tiddlers"][fields["title"]]["tags"] = data["tiddlers"][fields["title"]]["tags"].trim();
			// adding an extra tiddler for deltas
			data["tiddlers"][wikiFullPath + "/deltas"] = {
				"title":wikiFullPath + "/deltas",
				"tags":wikiAuthorTitle,
				"text":"!Deltas on local wiki\n\n[plugout[" + wikiAuthorTitle + "]]\n\n{{{[plugout[" + wikiAuthorTitle + "]]}}}"
			};
		}
	}
	return JSON.stringify(data,null,$tw.config.preferences.jsonSpaces);
};

})();
