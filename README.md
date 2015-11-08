# TiddlyWiki as Plugin

Source : https://github.com/chris2fr/tiddlywiki-as-plugin/

TiddlyWiki as Plugin is a TiddlyWiki plugin to automagically manage content from TiddlyWiki wikis as plugins themselves.

## For now

This is an additional export filter. Save the file as a .tld, for example for "All Tiddlers" in the side-menu. Save the file. Import the file into another Wiki.

To configure, please change the variables in $:/plugins/mannfr/asplugin/config.

For example, to create this plugin, I did an advanced search with the filter "[tag[TiddlyWikiAsAPlugin]]" and then simply exported the results as a plugin.

## For the future

I would like to setup a "library source" where the exported plugins could be sent to a library on a public server for update on distributed wikis.

I would like to be able to commit changed Tiddlers to the source wiki as change sets for merge.

I would like to version the Wikis through Git on the Plugin server.

I would like to concur the world.
