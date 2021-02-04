document.addEventListener( 'DOMContentLoaded', function() {
    //Now lets get the langs this user has set in the browser.
    const langs = navigator.languages ? navigator.languages.slice() : [];
    if( navigator.language ) {
        langs.push( navigator.language );
    }
    const filteredLangs = langs.map( lang => lang.split('-')[0] ) // Way of extracting ISO6391
    .filter( (value, index, self) => self.indexOf(value) === index ); // We want unique ones.

    document.querySelectorAll( 'div.multilang-block-container' ).forEach( block => {
        const lang = block.getAttribute( 'lang' );
        if ( ! lang || filteredLangs.indexOf( lang ) !== -1 ) {
            block.style.display='block';
        }
    } );
} );
