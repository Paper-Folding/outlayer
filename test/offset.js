( function() {

'use strict';

test( 'offset', function() {

  var container = document.querySelector('#offset');
  var stamp1 = container.querySelector('.stamp1');
  var stamp2 = container.querySelector('.stamp2');
  var layout = new Outlayer( container, {
    itemSelector: '.item'
  });
  container.style.height = '300px';

  layout.getSize();
  layout._getBoundingRect();
  var offset1 = layout._getElementOffset( stamp1 );
  var offset2 = layout._getElementOffset( stamp2 );
  // console.log( offset );
  equal( offset1.left, 0, 'stamp1 offset left: 0' );
  equal( offset1.top, 0, 'stamp1 offset top: 0' );
  equal( offset2.right, 0, 'stamp2 offset right: 0' );
  equal( offset2.bottom, 0, 'stamp2 offset bottom: 0' );

  stamp1.style.left = '40px';
  stamp1.style.top = '20px';
  stamp2.style.right = '50px';
  stamp2.style.bottom = '30px';
  offset1 = layout._getElementOffset( stamp1 );
  offset2 = layout._getElementOffset( stamp2 );
  // console.log( offset );
  equal( offset1.left, 40, 'stamp1 offset left: 40' );
  equal( offset1.top, 20, 'stamp1 offset top: 20' );
  equal( offset2.right, 50, 'stamp2 offset right: 50' );
  equal( offset2.bottom, 30, 'stamp2 offset bottom: 30' );

  // add border to container
  container.style.borderWidth = '40px 30px 20px 10px';
  layout.getSize();
  layout._getBoundingRect();
  offset1 = layout._getElementOffset( stamp1 );
  offset2 = layout._getElementOffset( stamp2 );
  // left/top should still be the same
  equal( offset1.left, 40, 'stamp1 offset with border left: 40' );
  equal( offset1.top, 20, 'stamp1 offset with border top: 20' );
  equal( offset2.right, 50, 'stamp2 offset with border right: 50' );
  equal( offset2.bottom, 30, 'stamp2 offset with border bottom: 30' );
  // add padding to container
  container.style.padding = '10px 20px 30px 40px';
  layout.getSize();
  layout._getBoundingRect();
  offset1 = layout._getElementOffset( stamp1 );
  offset2 = layout._getElementOffset( stamp2 );
  // left/top should still be the same
  equal( offset1.left, 0, 'stamp1 offset with border and padding, left: 0' );
  equal( offset1.top, 10, 'stamp1 offset with border and padding, top: 10' );
  equal( offset2.right, 30, 'stamp2 offset with border and padding, right: 30' );
  equal( offset2.bottom, 0, 'stamp2 offset with border and padding, bottom: 0' );

});

})();