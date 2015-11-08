# AsPlugin

AsPlugin is a TiddlyWiki plugin which aims to automagically manage content from TiddlyWiki wikis as plugins themselves. The idea is to "import" other wikis into a current wiki with the plugin mechanism. The plugin mechanism is powerful because of shadow tiddlers. Shadow tiddlers are a kind of version control in TiddlyWiki.

Right now, AsPlugin proposes an additional export filter regrouping all selected Tiddlers in a configured plugin from the export menu in the wiki, the search or the advanced search interfaces.After having exported the tiddlers as a plugin in a .tid file, you can then import the .tid file into any other wiki. The .tid file is actually a plugin, and all the included tiddlers become shadow tiddlers of that plugin. 

In the future, I would like to explore using other features of the plugin mechanism. The library server could be a way to centralize changes to plugged-out TiddlyWikis for automagic updates to the including TiddlyWikis. Changes on the including TiddlyWikis could be proposed to the included TiddlyWiki for update, if desired: incorporate back and delete. 

The .tid file for import is here :

https://raw.githubusercontent.com/chris2fr/tiddlywiki-as-plugin/master/build/asplugin.tid

You need to save that to your local filesystem, take off the .txt extension, then import it into your wiki for now.

Source : https://github.com/chris2fr/tiddlywiki-as-plugin/

## Usage

This is an additional export filter. Save the file as a .tid, for example for "All Tiddlers" in the side-menu. Save the file. Import the file into another Wiki.

To configure, please change the variables in $:/plugins/mannfr/asplugin/config.

For example, to create this plugin, I did an advanced search with the filter "[tag[TiddlyWikiAsPlugin]]" and then simply exported the results as a plugin.

## Roadmap

I would like to setup a "library source" where the exported plugins could be sent to a library on a public server for update on distributed wikis.

I also would like to register this plugin in a library. Perhaps TWGuides at http://twguides.org.

It would be nice to have a front-end to the config data tiddler.

It would be nice to use that plugin to create the GitHub plugin for my TiddlyWiki on this subject.

Perhaps I can create a dedicated wiki to TiddlyWikiAsPlugin. I could then share that wiki on TWGuides.org.

It would be nice to set up translations of the plugin.

I would like to be able to commit changed Tiddlers to the source wiki as change sets for merge.

I would like to version the Wikis through Git on the Plugin server, somehow.

Perhaps the plugin could be included in the core some day.
