# TiddlyWiki as Plugin

TiddlyWiki as Plugin is a TiddlyWiki plugin to automagically manage content from TiddlyWiki wikis as plugins themselves.

The .tid file for import is here :

https://raw.githubusercontent.com/chris2fr/tiddlywiki-as-plugin/master/build/asplugin.tid

You need to save that to your local filesystem, take off the .txt extension, then import it into your wiki for now.

Source : https://github.com/chris2fr/tiddlywiki-as-plugin/

## For now

This is an additional export filter. Save the file as a .tld, for example for "All Tiddlers" in the side-menu. Save the file. Import the file into another Wiki.

To configure, please change the variables in $:/plugins/mannfr/asplugin/config.

For example, to create this plugin, I did an advanced search with the filter "[tag[TiddlyWikiAsPlugin]]" and then simply exported the results as a plugin.

## For the future

I would like to setup a "library source" where the exported plugins could be sent to a library on a public server for update on distributed wikis.

I also would like to register this plugin in a library. Perhaps TWGuides at http://twguides.org.

I would like to be able to commit changed Tiddlers to the source wiki as change sets for merge.

I would like to version the Wikis through Git on the Plugin server.

I would like to concur the world.
