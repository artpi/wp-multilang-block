<?php
/**
 * Plugin Name:     Multilang Block
 * Description:     Create hidden content visible only for speakers of other languages
 * Version:         0.1.0
 * Author:          Artur Piszek (artpi)
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     multilang-block
 *
 * @package         artpi
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function artpi_multilang_block_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "artpi/multilang-block" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'artpi-multilang-block-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'artpi-multilang-block-block-editor', 'multilang-block' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'artpi-multilang-block-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'artpi-multilang-block-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'artpi/multilang-block',
		array(
			'editor_script' => 'artpi-multilang-block-block-editor',
			'editor_style'  => 'artpi-multilang-block-block-editor',
			'style'         => 'artpi-multilang-block-block',
		)
	);
}
add_action( 'init', 'artpi_multilang_block_block_init' );

function artpi_multilang_block_block_frontend_assets() {
	if ( ! is_admin() && ! wp_script_is( 'multilang-block-frontend-js', 'enqueued' ) ) {
		wp_enqueue_script(
			'multilang-block-frontend-js',
			plugins_url( '/multilang-block.js', __FILE__ ),
			[],
			filemtime( plugin_dir_path( __FILE__ ) . '/multilang-block.js' )
		  );
	}
}
add_action( 'enqueue_block_assets', 'artpi_multilang_block_block_frontend_assets' );
