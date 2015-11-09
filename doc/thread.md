# Discussion Thread

See also https://groups.google.com/d/msg/tiddlywiki/HrL5owEOJKM/ywe5EU9WAQAJ

See also [george.md](george.md).

---

Tobias Beer 2015-11-06

Hi George, err Christopher :D


> George wants subwikis to be up-to-date in order to plan his activities transversally.

Does "transversally" mean independently, simultaneously?

> GeorgeGeek will consult the sub-wiki tiddler updated from the meta-wiki file

What exactly does George do here?
What does "updated from" mean?

> Create an WikiAsPlugin plugin.


Perhaps useTinka?
I still haven't gotten to play more concretely with the idea of swarms, i.e. more "losely defined bundles of tiddlers", plugin-like packaged.

Exporting a wiki as a plugin will effectively allow the subwiki to be loaded into the meta wiki without having to restart either a node-js instance nor need to duplicate tiddlers in a current wiki file.


Ideally, node will at some point not need restarting the server.

> WikiAsPlugin would mainly have an export function. The exported plugin would then replace the currently installed plugin with fresher content.


Via drag+drop update?

> viewing changes to shadow tiddlers

core feature => look at plugin => observe which plugin tiddlers are overwritten

> exporting changes from shadow tiddlers on meta-wiki

perhaps the right predefined-filter under "advanced search" will do to get "all from plugin X" that are "not shadows"?

> importing changes from meta-wiki into sub-wiki

Mhhh, why not edit the subwiki?

After all George, wants it packed and redistributed back to his meta wiki, not having to figure out what overwritten shadows to eventually delete in the Meta Wiki and when, etc.

> George, being a geek, would GIT-version the wiki-as-a-plugin and sychronize it with a node-js instance, etc.


So he does use node, after all. Then I would perhaps recommend not to endeavour this in-browser approach at all... but I can see how editing on a tablet asks for a way to get those updates from in-there synced back out-there, i.e. into node,

The layman's approach could be: do edits and save them somewhere else, e.g. a backlog in, say, Trello. From there, merge them into those "master wikis" manually.

Best wishes,

Tobias.

---

Tobias Beer 2015-11-07

Hi Christopher,

> As Tinka stands, checking each checkbox is a too troublesome.

I very much agree, without some check-all option, setting it up ain't fun at all.

>Here is a WikiAsPlugin approach:

>George sets up his personal library of plugins
A button allows the publication of the current library to that plugin library

>Any wiki can include another wiki as a plugin through that library

>The drawback would be in same-named toddlers being deleted with the deleting or even disabling of the plugin.

I like the approach. Including wikis or just collections of tiddlers in other wikis has always been a very powerful thing. Without it, we'd have no plugins, for one. Currently, we are limited in leveraging this by a sophisticated plugin-mechanism that defies a simple "reuse tidbits" approach and forces a "publish a versioned bundle of codebits and supporting tids for distribution".

When I was referring to "swarms", I meant precisely what you've had in mind. A few tiddlers forming a "swarm" that can move and reinstate in another context as simply as possible. No fuzz, no plugin, designed for content to bundle up and come to life elsewhere.

Right now, what you've got for that is export/import.

Best wishes,

— tb

---

Jeremy Ruston 2015-11-07

> On 7 Nov 2015, at 08:36, Tobias Beer <beert...@gmail.com> wrote:

> Currently, we are limited in leveraging this by a sophisticated plugin-mechanism that defies a simple "reuse tidbits" approach and forces a "publish a versioned bundle of codebits and supporting tids for distribution".

I’d like to understand the issues you see with the current plugin mechanism. Are you envisaging a specific alternative?

There are currently two ways to “reuse tidbits”: a JSON file or a plugin. The JSON file is just about the simplest thing it could be: a nice simple plain text rendering of the source of a group of tiddlers, and is easy to work with in other tools. The plugin mechanism introduces just enough “sophistication” to satisfy their purpose: to be an *updatable* reusable tidbit.

Is it just that the support for building plugins in the browser is primitive?

Best wishes

Jeremy

---

Tobias Beer 2015-11-07

Hi Jeremy,

>> Currently, we are limited in leveraging this by a sophisticated plugin-mechanism that defies a simple "reuse tidbits" approach and forces a "publish a versioned bundle of codebits and supporting tids for distribution".

> I’d like to understand the issues you see with the current plugin mechanism. Are you envisaging a specific alternative?

Thanks for asking. Not sure about the specifics, the tenets of improvements might be:

1. easy bundling of tiddlers
   * come to think of it, including plugins
2. for reuse in a bundled manner
   * meaning: as shadows (compare: inclusion on TiddlySpace)

The plugin mechanism does cater for (some of?) that scenario, only the means to use it for this purpose are possibly limited to selected individuals who know the how to's. To me, the goal would be indeed to simplify this "packaging" process and thus allow reusing tiddler packages in different context, as if plugins (or then actual plugins), and possibly even containing not only content but also structure, even functionality... in short: whatever ...could be my master template packaging all kinds of things, reused throughout my wikis. Could be a "my docs package". Could be a "my todo setup" containing the basic scaffolding for my to do list workflow... however, on a much more "simply create and use a basic package" level rather than a "figure out how to package and manage plugins" level, with versioning, naming conventions or whatever may be recommended for tried and true plugins, rather than "simple bundles".

> There are currently two ways to “reuse tidbits”: a JSON file or a plugin. The JSON file is just about the simplest thing it could be: a nice simple plain text rendering of the source of a group of tiddlers, and is easy to work with in other tools. The plugin mechanism introduces just enough “sophistication” to satisfy their purpose: to be an *updatable* reusable tidbit.

So, yes, the way how plugins work once they exist is great. Just the way to create one is not as simple as it could be to allow for a more user centric packaging of whatever tidbits into bundles. In fact, I'd even shy away from using the name "plugin", as it comes with the connotation of being a developed thing, coded of sorts. Psychologically alone, simply packing up tiddlers into reusable bundles (being shadows in a target wiki) would sound much simpler than being the author of a plugin and all the presumed responsibility one might assume comes with such a position. It would make packaging a common task and process rather than a by default advanced, elevated one.

> Is it just that the support for building plugins in the browser is primitive?

I guess so. By default, such a packer would create the most simplistic package conceivable, in terms of setup and required data. (Right now I don't even know the full requirements for plugins, tbh. (without researching) ...and then perhaps an "advanced options" panel that can be toggled so as to specify any other (plugin) parameters that may be needed / used / specified, perhaps with a help / info bubble that explains what a given metadata-field is for.

Pragmatically speaking: possibly a streamlined Tinka that...

* makes tiddler selection as easy as possible
  * currently, selecting tiddlers is by individually ticking off checkboxes next to titles matching a manually entered filter
* only asks to specify the most basic details required for packaging, leaving out everything that truly is not
  * in fact, could be just a title and nothing but
  * avails the complete / advanced options in an expandable section

Best wishes,

— tb

---

from: Jeremy R  

On: 2015-11-09

Hi Christopher

Good stuff.

You may have seen it already, but there is a core function you can call in the browser to create a plugin:

http://tiddlywiki.com/dev/#How%20to%20create%20plugins%20in%20the%20browser

https://github.com/Jermolene/TiddlyWiki5/blob/master/core/modules/utils/pluginmaker.js

The reason that the core doesn’t have an “export as plugin” option is because there’s currently no mechanism for the user to specify the other parameters needed to create the plugin: the title of the plugin tiddler, and the version number. What are you currently using as the fields of the plugin tiddler? The upgrade mechanism relies on the version number being bumped on each revision.

In terms of dynamically updating installed plugins, there is of course already a mechanism to do that via the plugin library. The internals are a bit counter-intuitive because of the same origin limitations that browser’s impose; it’s not an option to just xmlhttprequest() to retrieve the new text of a plugin.

The plugin library is represented as an HTML file that TW loads in an iframe, and then communicates with using window.postMessage(). The HTML file is allowed to use xmlhttprequest() to retrieve plugins from the same domain from which it was loaded.

The easiest way to explore might be to first look at the plugin library HTML file:

http://tiddlywiki.com/library/v5.1.9/index.html

You can see the raw files here:

https://github.com/Jermolene/jermolene.github.io/blob/master/library/v5.1.9/index.html

The plugin library is built from this special edition:

https://github.com/Jermolene/TiddlyWiki5/blob/master/editions/pluginlibrary

Most of the logic is in this plugin:

https://github.com/Jermolene/TiddlyWiki5/tree/master/plugins/tiddlywiki/pluginlibrary

The TW code that interacts with the plugin library is here:

https://github.com/Jermolene/TiddlyWiki5/blob/master/core/modules/startup/browser-messaging.js

PlugOut would be a repository, even on a local filesystem, that would act as a library for Plugins.

The obstacle here is that Chrome doesn’t let files loaded on a file:// URI perform any xmlhttprequest() to other file:// URIs.

My warning would be that the entire approach to implementing the plugin library was shaped by the browser security restrictions. I’d recommend careful testing before you rely on a browser capability actually working in the right scenarios.

Good luck,

Best wishes

Jeremy.

