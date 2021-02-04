/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/editor';
import { BlockControls } from '@wordpress/block-editor';
import { SelectControl, Toolbar } from '@wordpress/components';
import ISO6391 from 'iso-639-1';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
const userLangs = ( navigator.languages || [] ) // We want the current user langs up top, so that they are easier to pick.
	.map( lang => lang.split('-')[0] ) // Way of extracting ISO6391
	.filter( (value, index, self) => self.indexOf(value) === index ); // We want unique ones.

const languageCodes = userLangs.concat( ISO6391.getAllCodes() ).map( code => ( {
	value: code,
	label: ISO6391.getNativeName( code )
} ) );

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps() }>
			<BlockControls>
				<Toolbar label={ __( 'Select a language to show this block to' ) }>
				<SelectControl
					value={ attributes.lang }
					onChange={ ( lang ) => setAttributes( { lang } ) }
					options={ [
						{ value: '', label: __( 'This block will only be visible for people speaking:' ), disabled: true },
					].concat( languageCodes ) }
				/>
				</Toolbar>
			</BlockControls>
			<InnerBlocks />
		</div>
	);
}
