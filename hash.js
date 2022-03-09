/*!
 * Flickity hash v2.0.1
 * Enable hash navigation for Flickity
 */

( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory( require('flickity') );
  } else {
    // browser global
    factory( window.Flickity );
  }

}( typeof window != 'undefined' ? window : this, function factory( Flickity ) {

Flickity.create.hash = function() {
  if ( !this.options.hash ) return;

  this.connectedHashLinks = [];
  // hash link listener
  // use HTML5 history pushState to prevent page scroll jump
  this.onHashLinkClick = ( event ) => {
    event.preventDefault();
    this.selectCell( event.currentTarget.hash );
    history.replaceState( history.state, '', event.currentTarget.hash );
  };

  // events
  this.on( 'activate', this.activateHash );
  this.on( 'deactivate', this.deactivateHash );
};

let proto = Flickity.prototype;

proto.activateHash = function() {
  this.on( 'change', this.onChangeHash );

  // overwrite initialIndex
  if ( this.options.initialIndex === undefined && location.hash ) {
    let cell = this.queryCell( location.hash );
    if ( cell ) {
      this.options.initialIndex = this.getCellSlideIndex( cell );
    }
  }

  this.connectHashLinks();
};

proto.deactivateHash = function() {
  this.off( 'change', this.onChangeHash );
  this.disconnectHashLinks();
};

proto.onChangeHash = function() {
  let id = this.selectedElement.id;
  if ( id ) history.replaceState( history.state, '', `#${id}` );
};

proto.connectHashLinks = function() {
  let links = document.querySelectorAll('a');
  for ( let link of links ) {
    this.connectHashLink( link );
  }
};

// used to test if link is on same page
let proxyLink = document.createElement('a');

proto.connectHashLink = function( link ) {
  if ( !link.hash ) return;

  // check that link is for the same page
  proxyLink.href = link.href;
  if ( proxyLink.pathname !== location.pathname ) return;

  let cell = this.queryCell( link.hash );
  if ( !cell ) return;

  link.addEventListener( 'click', this.onHashLinkClick );
  this.connectedHashLinks.push( link );
};

proto.disconnectHashLinks = function() {
  this.connectedHashLinks.forEach( ( link ) => {
    link.removeEventListener( 'click', this.onHashLinkClick );
  } );
  this.connectedHashLinks = [];
};

// -----  ----- //

return Flickity;

} ) );
