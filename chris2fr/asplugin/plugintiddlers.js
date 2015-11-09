/*\
title: plugintiddlers
type: application/javascript
module-type: macro

Macro to output tiddlers matching a filter to Plugin

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "plugintiddlers";

exports.params = [
	{name: "filter"},
	{name: "authorlogin",
	default: "yourname"},
	{name: "WikiShortCamelName",
	default: "YourWiki"}
];

/*
Run the macro
*/
exports.run = function(filter, authorlogin, WikiShortCamelName) {
	var data = {tiddlers: {}};
	var tiddlers = this.wiki.filterTiddlers(filter);
	var extratag = authorlogin.replace("[^a-zA-Z0-9]","") + "/" + WikiShortCamelName.replace("[^a-zA-Z0-9]","");
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
			fields["asplugin"] = extratag;
			// Adding of "ExtraTag"
			if (!("tags" in data["tiddlers"][fields["title"]])) {
			   data["tiddlers"][fields["title"]]["tags"] = "";
			}
			if( !(data["tiddlers"][fields["title"]]["tags"].indexOf(extratag) >= 0)) {
				data["tiddlers"][fields["title"]]["tags"] += " " + extratag;
			}
      data["tiddlers"][fields["title"]]["tags"] = data["tiddlers"][fields["title"]]["tags"].trim();
			// adding an extra tiddler for deltas
			data["tiddlers"]["$:/plugins/" + extratag + "/deltas"] = {
				"title":"$:/plugins/" + extratag + "/deltas",
				"tags":extratag,
				"text":"!Deltas on local wiki\n\n[asplugin[" + extratag + "]]\n\n{{{[asplugin[" + extratag + "]]}}}"
			};
		}
	}
	return JSON.stringify(data,null,$tw.config.preferences.jsonSpaces);
};

})();
