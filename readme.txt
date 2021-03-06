=== Multilang Block ===
Contributors:      Artur Piszek (artpi)
Tags:              block
Requires at least: 5.3.0
Tested up to:      5.6.0
Stable tag:        0.1.0
Tags:              multilang, multilanguage, translation, language
Requires PHP:      7.0.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Multilang block provides a simple multilanguage experience right in Gutenberg.
You can create hidden content visible only for speakers of other languages.

== Description ==

Not every site needs 1:1 multilanguage experience. Sometimes you want to give your visitors from a certain country a piece of information like "check my other site in your language", or provide a brief introduction.
Multilang block was created with this idea. Of course, nothing prevents you from wrapping all the content in Multilang block, because it's the best block out there!

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/multilang-block` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress
1. Insert "Multilang block" into your post or page
1. Select a language for the block
1. Every block INSIDE the multilang block will be visible only for people who have the selected language in `navigator.languages` of their browsers.


== Frequently Asked Questions ==

= What can I put inside the Multilang block? =

Everything. Except donuts, they get squished and the filling will be all over the place.
The block is functionally identical to the group block.

= How does multilang block know what languages users speak? =

Users can set up languages in the browser settings. They are passed to `navigator.languages` property.
Multilang block reads this list and if the language you selected is on there - block is displayed.
It stays hidden for users that don't have that language set in browser settings.

= How is the content hidden? =

In JavaScript. Post Content has the full content of the post, so it will probably show up in RSS, and in similar delivery systems.

== Screenshots ==

1. An example of the Multilang block wrapping an introduction for Polish visitors.

== Changelog ==

= 0.1.0 =
* Release

