/*******************************************************************************
*
* E M B E D D E D   W I Z A R D   P R O J E C T
*
*                                                Copyright (c) TARA Systems GmbH
*                                    written by Paul Banach and Manfred Schweyer
*
********************************************************************************
*
* This file was generated automatically by Embedded Wizard Studio.
*
* Please do not make any modifications of this file! The modifications are lost
* when the file is generated again by Embedded Wizard Studio!
*
* The template of this heading text can be found in the file 'head.ewt' in the
* directory 'Platforms' of your Embedded Wizard installation directory. If you
* wish to adapt this text, please copy the template file 'head.ewt' into your
* project directory and edit the copy only. Please avoid any modifications of
* the original template file!
*
* Version  : 11.00
* Profile  : Simulation
* Platform : Tara.WebGL.RGBA8888
*
*******************************************************************************/

// Forward declaration of application object.
var EmWiApp;

// Ensure that the application file is loaded before ...
if ( !EmWiApp )
  throw new Error( "The application file '_project.js' isn't yet loaded!" );

// If this unit has already been loaded ...
if ( EmWiApp.Views )
  throw new Error( "The unit file 'Views.js' included twice!" );

// Create the unit object including all members of the unit.
EmWiApp.Views = (function()
{
  var _app  = EmWiApp;
  var _unit = {};

  // Constant values used in this 'JavaScript' module only.
  var _0000 = [ 1, 1 ];
  var _0001 = [ 0, 0 ];
  var _0002 = [ 0, 0, 0, 0 ];
  var _0003 = "The Slide Touch Handler:";
  var _0004 = "is already connected with a view.";
  var _0005 = "The Slide Touch Handler is already connected with a view to scroll " +
    "its content.";
  var _0006 = "Can not display the warp aspect of the superior group. Endless recursive " +
    "dependency.";

  // The class Views::Line provides a kind of view specialized to draw a single 
  // straight line segment. The end positions of the line are determined by the 
  // properties @Point1 and @Point2. The color of the line is defined by the property 
  // @Color. Alternatively, the line can be drawn with a color gradient specified 
  // by the properties @Color1 and @Color2. The thickness of the line is 1 pixel 
  // unless the properties @Width1 or @Width2 have been modified. Lines with the 
  // thickness greatest than 1 pixel are drawn as filled polygons.
  // The visibility of the line is controlled by the properties @Visible, @AlphaBlended 
  // and @Embedded. In particular the property @Embedded can determine whether the 
  // corresponding view is limited (== embedded) to the boundary of a sibling Core::Outline 
  // view or not. The embedding of views within a Core::Outline allows a kind of 
  // sub-groups within the GUI component itself. Very useful for any kind of scrollable 
  // lists, menus, etc.
  _unit.Line =
  {
    whiteBitmap : null,

    // The property 'Width2' stores the width in pixel of the line at its end position 
    // @Point2.
    Width2 : 1,

    // The property 'Width1' stores the width in pixel of the line at its start 
    // position @Point1.
    Width1 : 1,

    // The property 'Color' controls the color of the entire line. The resulting 
    // colors can additionally be modulated by the values specified in the properties 
    // @Color1 and @Color2. Thus this property is useful if no gradients are desired.
    Color : 0xFFFFFFFF,

    // The method Draw() is invoked automatically if parts of the view should be 
    // redrawn on the screen. This can occur when e.g. the view has been moved or 
    // the appearance of the view has changed before.
    // Draw() is invoked automatically by the framework, you never will need to 
    // invoke this method directly. However you can request an invocation of this 
    // method by calling the method InvalidateArea() of the views @Owner. Usually 
    // this is also unnecessary unless you are developing your own view.
    // The passed parameters determine the drawing destination aCanvas and the area 
    // to redraw aClip in the coordinate space of the canvas. The parameter aOffset 
    // contains the displacement between the origin of the views owner and the origin 
    // of the canvas. You will need it to convert views coordinates into these of 
    // the canvas.
    // The parameter aOpacity contains the opacity descended from this view's @Owner. 
    // It lies in range 0 .. 255. If the view implements its own 'Opacity', 'Color', 
    // etc. properties, the Draw() method should calculate the resulting real opacity 
    // by mixing the values of these properties with the one passed in aOpacity 
    // parameter.
    // The parameter aBlend contains the blending mode descended from this view's 
    // @Owner. It determines, whether the view should be drawn with alpha-blending 
    // active or not. If aBlend is false, the outputs of the view should overwrite 
    // the corresponding pixel in the drawing destination aCanvas. If aBlend is 
    // true, the outputs should be mixed with the pixel already stored in aCanvas. 
    // For this purpose all Graphics Engine functions provide a parameter to specify 
    // the mode for the respective drawing operation. If the view implements its 
    // own 'Blend' property, the Draw() method should calculate the resulting real 
    // blend mode by using logical AND operation of the value of the property and 
    // the one passed in aBlend parameter.
    Draw : function( aCanvas, aClip, aOffset, aOpacity, aBlend )
    {
      var _tmp;
      var w1 = this.Width1;
      var w2 = this.Width2;
      var p1 = _app._MovePointPos( this.Point1, aOffset );
      var p2 = _app._MovePointPos( this.Point2, aOffset );
      var c1;
      var c2;
      var c = this.Color;

      if ( _app._IsEqualPoint( p1, p2 ))
        return;

      aBlend = aBlend && (( this.viewState & 0x2 ) === 0x2 );
      aOpacity = aOpacity + 1;
      c1 = c2 = c;

      if ( aOpacity < 256 )
      {
        c1 = ( c1 & 0x00FFFFFF ) | (((( aOpacity * (( c1 >> 24 ) & 0xFF )) >> 8 ) 
        & 0xFF ) << 24 );
        c2 = ( c2 & 0x00FFFFFF ) | (((( aOpacity * (( c2 >> 24 ) & 0xFF )) >> 8 ) 
        & 0xFF ) << 24 );
      }

      if (( w1 === 1 ) && ( w2 === 1 ))
        aCanvas.DrawLine( aClip, p1, p2, c1, c2, aBlend );
      else
        aCanvas.DrawThickLine( aClip, p1, p2, w1, w2, c1, c2, aBlend );
    },

    // The method GetExtent() returns the position and the size of the view relative 
    // to the origin of its @Owner. In case of views with a non rectangular shape 
    // the method returns the rectangular boundary area enclosing the entire shape.
    GetExtent : function()
    {
      var w1 = this.Width1;
      var w2 = this.Width2;
      var p1 = this.Point1;
      var p2 = this.Point2;

      if ((( w1 === 1 ) && ( w2 === 1 )) || _app._IsEqualPoint( p1, p2 ))
        return _app.Core.LineView.GetExtent.call( this );

      var fw1 = w1 / 2.000000;
      var fw2 = w2 / 2.000000;
      var fp1X = p1[0];
      var fp1Y = p1[1];
      var fp2X = p2[0];
      var fp2Y = p2[1];
      var dirX = fp2X - fp1X;
      var dirY = fp2Y - fp1Y;
      var len = Math.sqrt(( dirX * dirX ) + ( dirY * dirY ));

      dirX = dirX / len;
      dirY = dirY / len;

      var c1x = fp1X + ( dirY * fw1 );
      var c1y = fp1Y - ( dirX * fw1 );
      var c2x = fp2X + ( dirY * fw2 );
      var c2y = fp2Y - ( dirX * fw2 );
      var c3x = fp2X - ( dirY * fw2 );
      var c3y = fp2Y + ( dirX * fw2 );
      var c4x = fp1X - ( dirY * fw1 );
      var c4y = fp1Y + ( dirX * fw1 );
      var left = c1x;
      var right = c1x;
      var top = c1y;
      var bottom = c1y;

      if ( c2x < left )
        left = c2x;

      if ( c3x < left )
        left = c3x;

      if ( c4x < left )
        left = c4x;

      if ( c2x > right )
        right = c2x;

      if ( c3x > right )
        right = c3x;

      if ( c4x > right )
        right = c4x;

      if ( c2y < top )
        top = c2y;

      if ( c3y < top )
        top = c3y;

      if ( c4y < top )
        top = c4y;

      if ( c2y > bottom )
        bottom = c2y;

      if ( c3y > bottom )
        bottom = c3y;

      if ( c4y > bottom )
        bottom = c4y;

      var r = [ left | 0, top | 0, right | 0, bottom | 0 ];

      r = [].concat( r.slice(0,2), _app._MovePointPos( r.slice(2,4), _0000 ));

      return r;
    },

    // Implementation of the Chora method : 'Views::Line.observerSlot()'
    observerSlot : function( sender )
    {
      var _tmp;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());
    },

    // Implementation of the Chora method : 'Views::Line.OnSetWidth2()'
    OnSetWidth2 : function( value )
    {
      var _tmp;

      if ( value < 1 )
        value = 1;

      if ( value === this.Width2 )
        return;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      this.Width2 = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      if ((( value !== 1 ) || ( this.Width1 !== 1 )) && !this.whiteBitmap )
      {
        this.whiteBitmap = _app._GetResource( _app.Resources.WhiteBitmapStripe );

        if ( this.whiteBitmap.Mutable )
          _app._AttachObjObserver([ this, this.observerSlot ], this.whiteBitmap, 
            0 );
      }

      if ((( value === 1 ) && ( this.Width1 === 1 )) && !!this.whiteBitmap )
      {
        if ( this.whiteBitmap.Mutable )
          _app._DetachObjObserver([ this, this.observerSlot ], this.whiteBitmap, 
            0 );

        this.whiteBitmap = null;
      }
    },

    // Implementation of the Chora method : 'Views::Line.OnSetWidth1()'
    OnSetWidth1 : function( value )
    {
      var _tmp;

      if ( value < 1 )
        value = 1;

      if ( value === this.Width1 )
        return;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      this.Width1 = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      if ((( value !== 1 ) || ( this.Width2 !== 1 )) && !this.whiteBitmap )
      {
        this.whiteBitmap = _app._GetResource( _app.Resources.WhiteBitmapStripe );

        if ( this.whiteBitmap.Mutable )
          _app._AttachObjObserver([ this, this.observerSlot ], this.whiteBitmap, 
            0 );
      }

      if ((( value === 1 ) && ( this.Width2 === 1 )) && !!this.whiteBitmap )
      {
        if ( this.whiteBitmap.Mutable )
          _app._DetachObjObserver([ this, this.observerSlot ], this.whiteBitmap, 
            0 );

        this.whiteBitmap = null;
      }
    },

    // Implementation of the Chora method : 'Views::Line.OnSetWidth()'
    OnSetWidth : function( value )
    {
      var _tmp;

      if ( value < 1 )
        value = 1;

      if (( value === this.Width1 ) && ( value === this.Width2 ))
        return;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      this.Width1 = value;
      this.Width2 = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      if (( value !== 1 ) && !this.whiteBitmap )
      {
        this.whiteBitmap = _app._GetResource( _app.Resources.WhiteBitmapStripe );

        if ( this.whiteBitmap.Mutable )
          _app._AttachObjObserver([ this, this.observerSlot ], this.whiteBitmap, 
            0 );
      }

      if (( value === 1 ) && !!this.whiteBitmap )
      {
        if ( this.whiteBitmap.Mutable )
          _app._DetachObjObserver([ this, this.observerSlot ], this.whiteBitmap, 
            0 );

        this.whiteBitmap = null;
      }
    },

    // Implementation of the Chora method : 'Views::Line.OnSetColor()'
    OnSetColor : function( value )
    {
      var _tmp;

      if ( value === this.Color )
        return;

      this.Color = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());
    },

    // Implementation of the Chora method : 'Views::Line.OnGetVisible()'
    OnGetVisible : function()
    {
      var _tmp;

      return (( this.viewState & 0x1 ) === 0x1 );
    },

    // Implementation of the Chora method : 'Views::Line.OnSetVisible()'
    OnSetVisible : function( value )
    {
      if ( value )
        this.ChangeViewState( 0x1, 0x0 );
      else
        this.ChangeViewState( 0x0, 0x1 );
    },

    // Initializer for the class 'Views::Line'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.LineView._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Line;
    },

    // Garbage Collector method for the class 'Views::Line'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.LineView._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.whiteBitmap ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Views::Line"
  };

  // The class Views::Rectangle provides a kind of view specialized to draw a filled 
  // rectangle. The position and the size of the rectangle are determined by the 
  // property @Bounds. The color to fill the rectangle is defined by the property 
  // @Color. Alternatively, the rectangle can be filled with a color gradient specified 
  // by the properties @ColorTL, @ColorTR, @ColorBL and @ColorBR. For each view's 
  // corner different color can be set. 
  // The visibility of the rectangle is controlled by the properties @Visible, @AlphaBlended 
  // and @Embedded. In particular the property @Embedded can determine whether the 
  // corresponding view is limited (== embedded) to the boundary of a sibling Core::Outline 
  // view or not. The embedding of views within a Core::Outline allows a kind of 
  // sub-groups within the GUI component itself. Very useful for any kind of scrollable 
  // lists, menus, etc.
  _unit.Rectangle =
  {
    // The property 'ColorBL' stores the color at the bottom-left corner of the 
    // rectangle's @Bounds area. This color value can additionally be modulated 
    // by the common color value stored in the property @Color.
    ColorBL : 0xFFFFFFFF,

    // The property 'ColorBR' stores the color at the bottom-right corner of the 
    // rectangle's @Bounds area. This color value can additionally be modulated 
    // by the common color value stored in the property @Color.
    ColorBR : 0xFFFFFFFF,

    // The property 'ColorTR' stores the color at the top-right corner of the rectangle's 
    // @Bounds area. This color value can additionally be modulated by the common 
    // color value stored in the property @Color.
    ColorTR : 0xFFFFFFFF,

    // The property 'ColorTL' stores the color at the top-left corner of the rectangle's 
    // @Bounds area. This color value can additionally be modulated by the common 
    // color value stored in the property @Color.
    ColorTL : 0xFFFFFFFF,

    // The property 'Color' controls the color of the entire rectangle. Thus this 
    // property is useful if no gradients are desired. The resulting colors can 
    // additionally be modulated by the values specified in the properties @ColorTL, 
    // @ColorTR, @ColorBL and @ColorBR.
    Color : 0xFFFFFFFF,

    // The method Draw() is invoked automatically if parts of the view should be 
    // redrawn on the screen. This can occur when e.g. the view has been moved or 
    // the appearance of the view has changed before.
    // Draw() is invoked automatically by the framework, you never will need to 
    // invoke this method directly. However you can request an invocation of this 
    // method by calling the method InvalidateArea() of the views @Owner. Usually 
    // this is also unnecessary unless you are developing your own view.
    // The passed parameters determine the drawing destination aCanvas and the area 
    // to redraw aClip in the coordinate space of the canvas. The parameter aOffset 
    // contains the displacement between the origin of the views owner and the origin 
    // of the canvas. You will need it to convert views coordinates into these of 
    // the canvas.
    // The parameter aOpacity contains the opacity descended from this view's @Owner. 
    // It lies in range 0 .. 255. If the view implements its own 'Opacity', 'Color', 
    // etc. properties, the Draw() method should calculate the resulting real opacity 
    // by mixing the values of these properties with the one passed in aOpacity 
    // parameter.
    // The parameter aBlend contains the blending mode descended from this view's 
    // @Owner. It determines, whether the view should be drawn with alpha-blending 
    // active or not. If aBlend is false, the outputs of the view should overwrite 
    // the corresponding pixel in the drawing destination aCanvas. If aBlend is 
    // true, the outputs should be mixed with the pixel already stored in aCanvas. 
    // For this purpose all Graphics Engine functions provide a parameter to specify 
    // the mode for the respective drawing operation. If the view implements its 
    // own 'Blend' property, the Draw() method should calculate the resulting real 
    // blend mode by using logical AND operation of the value of the property and 
    // the one passed in aBlend parameter.
    Draw : function( aCanvas, aClip, aOffset, aOpacity, aBlend )
    {
      var _tmp;
      var ctl = this.ColorTL;
      var ctr = this.ColorTR;
      var cbl = this.ColorBL;
      var cbr = this.ColorBR;
      var c = this.Color;

      aBlend = aBlend && (( this.viewState & 0x2 ) === 0x2 );
      aOpacity = aOpacity + 1;

      if (((( ctl === ctr ) && ( cbl === cbr )) && ( ctl === cbl )) && ( ctl === 
          0xFFFFFFFF ))
        ctl = ctr = cbl = cbr = c;
      else
        if ( c !== 0xFFFFFFFF )
        {
          ctl = ( ctl & 0x00FFFFFF ) | (((((( ctl >> 24 ) & 0xFF ) * ((( c >> 24 ) 
          & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 24 );
          ctl = ( ctl & 0xFFFFFF00 ) | (((( ctl & 0xFF ) * (( c & 0xFF ) + 1 )) 
          >> 8 ) & 0xFF );
          ctl = ( ctl & 0xFFFF00FF ) | (((((( ctl >> 8 ) & 0xFF ) * ((( c >> 8 ) 
          & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 8 );
          ctl = ( ctl & 0xFF00FFFF ) | (((((( ctl >> 16 ) & 0xFF ) * ((( c >> 16 ) 
          & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 16 );
          ctr = ( ctr & 0x00FFFFFF ) | (((((( ctr >> 24 ) & 0xFF ) * ((( c >> 24 ) 
          & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 24 );
          ctr = ( ctr & 0xFFFFFF00 ) | (((( ctr & 0xFF ) * (( c & 0xFF ) + 1 )) 
          >> 8 ) & 0xFF );
          ctr = ( ctr & 0xFFFF00FF ) | (((((( ctr >> 8 ) & 0xFF ) * ((( c >> 8 ) 
          & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 8 );
          ctr = ( ctr & 0xFF00FFFF ) | (((((( ctr >> 16 ) & 0xFF ) * ((( c >> 16 ) 
          & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 16 );
          cbl = ( cbl & 0x00FFFFFF ) | (((((( cbl >> 24 ) & 0xFF ) * ((( c >> 24 ) 
          & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 24 );
          cbl = ( cbl & 0xFFFFFF00 ) | (((( cbl & 0xFF ) * (( c & 0xFF ) + 1 )) 
          >> 8 ) & 0xFF );
          cbl = ( cbl & 0xFFFF00FF ) | (((((( cbl >> 8 ) & 0xFF ) * ((( c >> 8 ) 
          & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 8 );
          cbl = ( cbl & 0xFF00FFFF ) | (((((( cbl >> 16 ) & 0xFF ) * ((( c >> 16 ) 
          & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 16 );
          cbr = ( cbr & 0x00FFFFFF ) | (((((( cbr >> 24 ) & 0xFF ) * ((( c >> 24 ) 
          & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 24 );
          cbr = ( cbr & 0xFFFFFF00 ) | (((( cbr & 0xFF ) * (( c & 0xFF ) + 1 )) 
          >> 8 ) & 0xFF );
          cbr = ( cbr & 0xFFFF00FF ) | (((((( cbr >> 8 ) & 0xFF ) * ((( c >> 8 ) 
          & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 8 );
          cbr = ( cbr & 0xFF00FFFF ) | (((((( cbr >> 16 ) & 0xFF ) * ((( c >> 16 ) 
          & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 16 );
        }

      if ( aOpacity < 256 )
      {
        ctl = ( ctl & 0x00FFFFFF ) | (((( aOpacity * (( ctl >> 24 ) & 0xFF )) >> 
        8 ) & 0xFF ) << 24 );
        ctr = ( ctr & 0x00FFFFFF ) | (((( aOpacity * (( ctr >> 24 ) & 0xFF )) >> 
        8 ) & 0xFF ) << 24 );
        cbl = ( cbl & 0x00FFFFFF ) | (((( aOpacity * (( cbl >> 24 ) & 0xFF )) >> 
        8 ) & 0xFF ) << 24 );
        cbr = ( cbr & 0x00FFFFFF ) | (((( aOpacity * (( cbr >> 24 ) & 0xFF )) >> 
        8 ) & 0xFF ) << 24 );
      }

      aCanvas.FillRectangle( aClip, _app._MoveRectPos( this.Bounds, aOffset ), ctl, 
      ctr, cbr, cbl, aBlend );
    },

    // Implementation of the Chora method : 'Views::Rectangle.OnSetColorBL()'
    OnSetColorBL : function( value )
    {
      var _tmp;

      if ( value === this.ColorBL )
        return;

      this.ColorBL = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );
    },

    // Implementation of the Chora method : 'Views::Rectangle.OnSetColorBR()'
    OnSetColorBR : function( value )
    {
      var _tmp;

      if ( value === this.ColorBR )
        return;

      this.ColorBR = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );
    },

    // Implementation of the Chora method : 'Views::Rectangle.OnSetColorTR()'
    OnSetColorTR : function( value )
    {
      var _tmp;

      if ( value === this.ColorTR )
        return;

      this.ColorTR = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );
    },

    // Implementation of the Chora method : 'Views::Rectangle.OnSetColorTL()'
    OnSetColorTL : function( value )
    {
      var _tmp;

      if ( value === this.ColorTL )
        return;

      this.ColorTL = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );
    },

    // Implementation of the Chora method : 'Views::Rectangle.OnSetColor()'
    OnSetColor : function( value )
    {
      var _tmp;

      if ( value === this.Color )
        return;

      this.Color = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );
    },

    // Implementation of the Chora method : 'Views::Rectangle.OnSetVisible()'
    OnSetVisible : function( value )
    {
      if ( value )
        this.ChangeViewState( 0x1, 0x0 );
      else
        this.ChangeViewState( 0x0, 0x1 );
    },

    // Initializer for the class 'Views::Rectangle'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.RectView._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Rectangle;
    },

    // Internal variables of this class.
    _className : "Views::Rectangle"
  };

  // The class Views::Frame provides a kind of view specialized to draw free scalable 
  // frames by composing them of bitmap segments. These segments are used to draw 
  // the frame's corners, to fill its edges and to fill its interior area. The bitmap 
  // has thus to contain nine equal segments arranged in three rows and three columns. 
  // The top-left segment e.g. is used to draw the top-left corner of the frame. 
  // In contrast, the top-middle segment corresponds to the frame's top edge. If 
  // the edge is wider than the segment, multiple copies of the segment are used 
  // to fill the entire edge. In this manner the entire frame is composed by simply 
  // copying bitmap segments. It's up to you to provide suitable bitmaps. The only 
  // thing you have to take in account when designing them is, that their size have 
  // to be a multiple of 3.
  // The bitmap is determined by the property @Bitmap. In case of a multi-frame 
  // bitmap the desired frame can be selected by the property @FrameNumber. Please 
  // don't confuse these multi-frame bitmaps with the frames described above. Multi-frame 
  // bitmaps, which are able to be animated can be controlled by the properties 
  // @Animated and @Endless. Alternatively, the animation can be controlled by sending 
  // signals to the slot methods @StartAnimation and @StopAnimation.
  // The position and the size of the area to draw the frame is determined by the 
  // property @Bounds. The properties @Color, @ColorTL, @ColorTR, @ColorBL and @ColorBR 
  // can be used to tint the frame or to modulate its transparency. For each view's 
  // corner different color can be set, so the frame can be shown with fancy color 
  // or opacity gradients. The particular effect of the colors depends on the type 
  // of the bitmap used to compose the frame:
  // - Alpha8 bitmaps will be tinted with the given colors due to the fact they 
  // don't provide their own color information. This allows one and the same Alpha8 
  // bitmap to be drawn with different colors.
  // - In case of Native, Index8 or RGB565 bitmaps the opacity of the bitmap is 
  // modulated by the color's alpha value. The original RGB information stored in 
  // the bitmap are not affected. This allows one and the same bitmap to be drawn 
  // with different transparencies.
  // With the properties @Edges and @NoEdgesLimit you can individually configure 
  // which edges of the frame view are displayed.
  // The visibility of the frame is controlled by the properties @Visible, @AlphaBlended, 
  // @Opacity and @Embedded. In particular the property @Embedded can determine 
  // whether the corresponding view is limited (== embedded) to the boundary of 
  // a sibling Core::Outline view or not. The embedding of views within a Core::Outline 
  // allows a kind of sub-groups within the GUI component itself. Very useful for 
  // any kind of scrollable lists, menus, etc.
  _unit.Frame =
  {
    timer : null,

    // The property 'Bitmap' refers to the bitmap object to display in this view. 
    // If the bitmap consists of more than one frame, the desired frame number can 
    // be determined by the property @FrameNumber. If the bitmap is animated, the 
    // animation will start if the property @Animated is 'true'.
    // Please note, this bitmap is used to display free scalable frames by composing 
    // them of bitmap segments. These segments are used to draw the frame's corners, 
    // to fill its edges and to fill its interior area. The bitmap has thus to contain 
    // nine equal segments arranged in three rows and three columns. The top-left 
    // segment e.g. is used to draw the top-left corner of the frame. In contrast, 
    // the top-middle segment corresponds to the frame's top edge. If the edge is 
    // wider than the segment, multiple copies of the segment are used to fill the 
    // entire edge. In this manner the entire frame is composed by simply copying 
    // bitmap segments. It's up to you to provide suitable bitmaps. The only thing 
    // you have to take in account when designing them is, that their size have 
    // to be a multiple of 3.
    Bitmap : null,
    animFrameNumber : -1,

    // The property 'Color' controls the color of the entire frame. Thus this property 
    // is useful if no gradients are desired. The resulting colors can additionally 
    // be modulated by the values specified in the properties @ColorTL, @ColorTR, 
    // @ColorBL and @ColorBR.
    // The effect of this color value depends on the type of the bitmap specified 
    // in the @Bitmap property:
    // - Alpha8 bitmaps will be tinted with the given colors due to the fact they 
    // don't provide their own color information. This allows one and the same Alpha8 
    // bitmap to be drawn with different colors.
    // - In case of Native, Index8 or RGB565 bitmaps the opacity of the bitmap is 
    // modulated by the color's alpha value. The original RGB information stored 
    // in the bitmap are not affected. This allows one and the same bitmap to be 
    // drawn with different transparencies.
    Color : 0xFFFFFFFF,
    startTime : 0,

    // The property 'Animated' determines whether the view may play animated bitmaps. 
    // Assigning the value 'true' to this property can cause the view to re-start 
    // the animated bitmap with the frame specified in the property @FrameNumber. 
    // The value 'false' in contrast stops the running animated bitmap at its current 
    // position. The animation can also be controlled by sending signals to the 
    // slot methods @StartAnimation and @StopAnimation. Animated bitmaps are a special 
    // kind of bitmaps containing short video sequences. The animation can work 
    // with an animated bitmap only. See Resources::Bitmap.
    Animated : false,

    // The method Draw() is invoked automatically if parts of the view should be 
    // redrawn on the screen. This can occur when e.g. the view has been moved or 
    // the appearance of the view has changed before.
    // Draw() is invoked automatically by the framework, you never will need to 
    // invoke this method directly. However you can request an invocation of this 
    // method by calling the method InvalidateArea() of the views @Owner. Usually 
    // this is also unnecessary unless you are developing your own view.
    // The passed parameters determine the drawing destination aCanvas and the area 
    // to redraw aClip in the coordinate space of the canvas. The parameter aOffset 
    // contains the displacement between the origin of the views owner and the origin 
    // of the canvas. You will need it to convert views coordinates into these of 
    // the canvas.
    // The parameter aOpacity contains the opacity descended from this view's @Owner. 
    // It lies in range 0 .. 255. If the view implements its own 'Opacity', 'Color', 
    // etc. properties, the Draw() method should calculate the resulting real opacity 
    // by mixing the values of these properties with the one passed in aOpacity 
    // parameter.
    // The parameter aBlend contains the blending mode descended from this view's 
    // @Owner. It determines, whether the view should be drawn with alpha-blending 
    // active or not. If aBlend is false, the outputs of the view should overwrite 
    // the corresponding pixel in the drawing destination aCanvas. If aBlend is 
    // true, the outputs should be mixed with the pixel already stored in aCanvas. 
    // For this purpose all Graphics Engine functions provide a parameter to specify 
    // the mode for the respective drawing operation. If the view implements its 
    // own 'Blend' property, the Draw() method should calculate the resulting real 
    // blend mode by using logical AND operation of the value of the property and 
    // the one passed in aBlend parameter.
    Draw : function( aCanvas, aClip, aOffset, aOpacity, aBlend )
    {
      var _tmp;
      var frameNr = 0;

      if ( this.animFrameNumber >= 0 )
        frameNr = this.animFrameNumber;

      if ( !this.Bitmap || ( frameNr >= this.Bitmap.NoOfFrames ))
        return;

      this.Bitmap.Update();

      var ctl;
      var ctr;
      var cbr;
      var cbl;
      var c = this.Color;
      var opacity = ((( aOpacity + 1 ) * 255 ) >> 8 ) + 1;
      var r = _app._MoveRectPos( this.Bounds, aOffset );

      aBlend = aBlend && (( this.viewState & 0x2 ) === 0x2 );
      ctl = ctr = cbl = cbr = c;

      if ( opacity < 256 )
      {
        ctl = ( ctl & 0x00FFFFFF ) | (((((( ctl >> 24 ) & 0xFF ) * opacity ) >> 
        8 ) & 0xFF ) << 24 );
        ctr = ( ctr & 0x00FFFFFF ) | (((((( ctr >> 24 ) & 0xFF ) * opacity ) >> 
        8 ) & 0xFF ) << 24 );
        cbr = ( cbr & 0x00FFFFFF ) | (((((( cbr >> 24 ) & 0xFF ) * opacity ) >> 
        8 ) & 0xFF ) << 24 );
        cbl = ( cbl & 0x00FFFFFF ) | (((((( cbl >> 24 ) & 0xFF ) * opacity ) >> 
        8 ) & 0xFF ) << 24 );
      }

      aCanvas.DrawBitmapFrame( aClip, this.Bitmap, frameNr, r, 0x1F, ctl, ctr, cbr, 
      cbl, aBlend );
    },

    // Implementation of the Chora method : 'Views::Frame.observerSlot()'
    observerSlot : function( sender )
    {
      var _tmp;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );
    },

    // Implementation of the Chora method : 'Views::Frame.timerSlot()'
    timerSlot : function( sender )
    {
      var _tmp;
      var frameNr = this.animFrameNumber;
      var period = 0;

      if ( !!this.Bitmap )
        period = this.Bitmap.NoOfFrames * this.Bitmap.FrameDelay;

      if (( !!this.timer && ( this.animFrameNumber < 0 )) && ( period > 0 ))
        this.startTime = this.timer.Time;

      if ( !!this.timer && ( period > 0 ))
      {
        var time = ( this.timer.Time - this.startTime ) | 0;

        frameNr = ( time / this.Bitmap.FrameDelay ) | 0;

        if ( time >= period )
        {
          frameNr = frameNr % this.Bitmap.NoOfFrames;
          this.startTime = this.timer.Time - ( time % period );
        }
      }

      if ((( frameNr !== this.animFrameNumber ) && !!this.Owner ) && (( this.viewState 
          & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );

      this.animFrameNumber = frameNr;

      if ( !period && !!this.timer )
      {
        _app._DetachObjObserver([ this, this.timerSlot ], this.timer, 0 );
        this.timer = null;
      }
    },

    // Implementation of the Chora method : 'Views::Frame.OnSetColor()'
    OnSetColor : function( value )
    {
      var _tmp;

      if ( value === this.Color )
        return;

      this.Color = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );
    },

    // Implementation of the Chora method : 'Views::Frame.OnSetAnimated()'
    OnSetAnimated : function( value )
    {
      var _tmp;

      if ( this.Animated === value )
        return;

      this.Animated = value;
      this.animFrameNumber = -1;

      if ( !value && !!this.timer )
      {
        _app._DetachObjObserver([ this, this.timerSlot ], this.timer, 0 );
        this.timer = null;
      }

      if ( value )
      {
        this.timer = _app._GetAutoObject( _app.Effects.EffectTimer );
        _app._AttachObjObserver([ this, this.timerSlot ], this.timer, 0 );
        _app._PostSignal([ this, this.timerSlot ], this );
      }

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );
    },

    // Implementation of the Chora method : 'Views::Frame.OnSetBitmap()'
    OnSetBitmap : function( value )
    {
      var _tmp;

      if ( value === this.Bitmap )
        return;

      if ( !!this.Bitmap && this.Bitmap.Mutable )
        _app._DetachObjObserver([ this, this.observerSlot ], this.Bitmap, 0 );

      this.Bitmap = value;
      this.animFrameNumber = -1;

      if ( !!value && value.Mutable )
        _app._AttachObjObserver([ this, this.observerSlot ], value, 0 );

      if ( this.Animated )
      {
        this.OnSetAnimated( false );
        this.OnSetAnimated( true );
      }

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );
    },

    // Initializer for the class 'Views::Frame'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.RectView._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Frame;
    },

    // Garbage Collector method for the class 'Views::Frame'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.RectView._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.timer ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Bitmap ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Views::Frame"
  };

  // The class Views::Image provides a kind of view specialized to draw and animate 
  // bitmaps. The bitmap is determined by the property @Bitmap. In case of a multi-frame 
  // bitmap the desired frame can be selected by the property @FrameNumber. The 
  // animation of bitmaps containing short video sequences is controlled by the 
  // properties @Animated and @Endless. Alternatively, the animation can be controlled 
  // by sending signals to the slot methods @StartAnimation and @StopAnimation.
  // The position and the size of the area where the bitmap is drawn is determined 
  // by the property @Bounds. If the size of this area differs from the size of 
  // the bitmap the bitmap can be aligned or scaled within this area. This is controlled 
  // by the property @Alignment. With the property @Orientation the displayed content 
  // can be rotated. The properties @Color, @ColorTL, @ColorTR, @ColorBL and @ColorBR 
  // can be used to tint the bitmap or to modulate its transparency. For each view's 
  // corner different color can be set, so the bitmap can be shown with fancy color 
  // or opacity gradients. The particular effect of the colors depends on the type 
  // of the bitmap:
  // - Alpha8 bitmaps will be tinted with the given colors due to the fact they 
  // don't provide their own color information. This allows one and the same Alpha8 
  // bitmap to be drawn with different colors.
  // - In case of Native, Index8 or RGB565 bitmaps the opacity of the bitmap is 
  // modulated by the color's alpha value. The original RGB information stored in 
  // the bitmap are not affected. This allows one and the same bitmap to be drawn 
  // with different transparencies.
  // The property @SlideHandler permits the image view to be connected together 
  // with an interactive Core::SlideTouchHandler. In this manner the user can scroll 
  // the displayed bitmap by simply touching the slide handler on the screen. Alternatively, 
  // the scroll position can be controlled by the value of the property @ScrollOffset.
  // The visibility of the image is controlled by the properties @Visible, @AlphaBlended, 
  // @Opacity and @Embedded. In particular the property @Embedded can determine 
  // whether the corresponding view is limited (== embedded) to the boundary of 
  // a sibling Core::Outline view or not. The embedding of views within a Core::Outline 
  // allows a kind of sub-groups within the GUI component itself. Very useful for 
  // any kind of scrollable lists, menus, etc.
  _unit.Image =
  {
    timer : null,

    // The property 'Bitmap' refers to the bitmap object to display in this view. 
    // If the bitmap consists of more than one frame, the desired frame number can 
    // be determined by the property @FrameNumber. If the bitmap is animated, the 
    // animation will start if the property @Animated is 'true'.
    Bitmap : null,
    startTime : 0,
    animFrameNumber : 0,

    // The property 'Color' controls the color of the entire image. Thus this property 
    // is useful if no gradients are desired. The resulting colors can additionally 
    // be modulated by the values specified in the properties @ColorTL, @ColorTR, 
    // @ColorBL and @ColorBR.
    // The effect of this color value depends on the type of the bitmap specified 
    // in the @Bitmap property:
    // - Alpha8 bitmaps will be tinted with the given colors due to the fact they 
    // don't provide their own color information. This allows one and the same Alpha8 
    // bitmap to be drawn with different colors.
    // - In case of Native, Index8 or RGB565 bitmaps the opacity of the bitmap is 
    // modulated by the color's alpha value. The original RGB information stored 
    // in the bitmap are not affected. This allows one and the same bitmap to be 
    // drawn with different transparencies.
    Color : 0xFFFFFFFF,

    // The property 'Animated' determines whether the view may play animated bitmaps. 
    // Assigning the value 'true' to this property can cause the view to re-start 
    // the animated bitmap with the frame specified in the property @FrameNumber. 
    // The value 'false' in contrast stops the running animated bitmap at its current 
    // position. The animation can also be controlled by sending signals to the 
    // slot methods @StartAnimation and @StopAnimation. Animated bitmaps are a special 
    // kind of bitmaps containing short video sequences. The animation can work 
    // with an animated bitmap only. See Resources::Bitmap.
    Animated : false,

    // The method Draw() is invoked automatically if parts of the view should be 
    // redrawn on the screen. This can occur when e.g. the view has been moved or 
    // the appearance of the view has changed before.
    // Draw() is invoked automatically by the framework, you never will need to 
    // invoke this method directly. However you can request an invocation of this 
    // method by calling the method InvalidateArea() of the views @Owner. Usually 
    // this is also unnecessary unless you are developing your own view.
    // The passed parameters determine the drawing destination aCanvas and the area 
    // to redraw aClip in the coordinate space of the canvas. The parameter aOffset 
    // contains the displacement between the origin of the views owner and the origin 
    // of the canvas. You will need it to convert views coordinates into these of 
    // the canvas.
    // The parameter aOpacity contains the opacity descended from this view's @Owner. 
    // It lies in range 0 .. 255. If the view implements its own 'Opacity', 'Color', 
    // etc. properties, the Draw() method should calculate the resulting real opacity 
    // by mixing the values of these properties with the one passed in aOpacity 
    // parameter.
    // The parameter aBlend contains the blending mode descended from this view's 
    // @Owner. It determines, whether the view should be drawn with alpha-blending 
    // active or not. If aBlend is false, the outputs of the view should overwrite 
    // the corresponding pixel in the drawing destination aCanvas. If aBlend is 
    // true, the outputs should be mixed with the pixel already stored in aCanvas. 
    // For this purpose all Graphics Engine functions provide a parameter to specify 
    // the mode for the respective drawing operation. If the view implements its 
    // own 'Blend' property, the Draw() method should calculate the resulting real 
    // blend mode by using logical AND operation of the value of the property and 
    // the one passed in aBlend parameter.
    Draw : function( aCanvas, aClip, aOffset, aOpacity, aBlend )
    {
      var _tmp;
      var frameNr = 0;

      if ( this.animFrameNumber >= 0 )
        frameNr = this.animFrameNumber;

      if ( !this.Bitmap || ( frameNr >= this.Bitmap.NoOfFrames ))
        return;

      this.Bitmap.Update();

      var area = this.GetContentArea();
      var size = this.Bitmap.FrameSize;

      if (( area[0] >= area [2]) || ( area[1] >= area [3]))
        return;

      var ctl;
      var ctr;
      var cbr;
      var cbl;
      var c = this.Color;
      var opacity = ((( aOpacity + 1 ) * 255 ) >> 8 ) + 1;

      aBlend = aBlend && (( this.viewState & 0x2 ) === 0x2 );
      ctl = ctr = cbl = cbr = c;

      if ( opacity < 256 )
      {
        ctl = ( ctl & 0x00FFFFFF ) | (((((( ctl >> 24 ) & 0xFF ) * opacity ) >> 
        8 ) & 0xFF ) << 24 );
        ctr = ( ctr & 0x00FFFFFF ) | (((((( ctr >> 24 ) & 0xFF ) * opacity ) >> 
        8 ) & 0xFF ) << 24 );
        cbr = ( cbr & 0x00FFFFFF ) | (((((( cbr >> 24 ) & 0xFF ) * opacity ) >> 
        8 ) & 0xFF ) << 24 );
        cbl = ( cbl & 0x00FFFFFF ) | (((((( cbl >> 24 ) & 0xFF ) * opacity ) >> 
        8 ) & 0xFF ) << 24 );
      }

      if ( _app._IsEqualPoint([ area[2] - area[0], area[3] - area[1]], size ))
        aCanvas.CopyBitmap( aClip, this.Bitmap, frameNr, _app._MoveRectPos( this.Bounds, 
        aOffset ), _app._MovePointNeg( this.Bounds.slice(0,2), area.slice(0,2)), 
        ctl, ctr, cbr, cbl, aBlend );
      else
        aCanvas.ScaleBitmap( aClip, this.Bitmap, frameNr, _app._MoveRectPos( area, 
        aOffset ), [].concat( _0001, size ), ctl, ctr, cbr, cbl, aBlend, true );
    },

    // Implementation of the Chora method : 'Views::Image.observerSlot()'
    observerSlot : function( sender )
    {
      var _tmp;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );
    },

    // Implementation of the Chora method : 'Views::Image.timerSlot()'
    timerSlot : function( sender )
    {
      var _tmp;
      var frameNr = this.animFrameNumber;
      var period = 0;

      if ( !!this.Bitmap )
        period = this.Bitmap.NoOfFrames * this.Bitmap.FrameDelay;

      if (( !!this.timer && ( this.animFrameNumber < 0 )) && ( period > 0 ))
        this.startTime = this.timer.Time;

      if ( !!this.timer && ( period > 0 ))
      {
        var time = ( this.timer.Time - this.startTime ) | 0;

        frameNr = ( time / this.Bitmap.FrameDelay ) | 0;

        if ( time >= period )
        {
          frameNr = frameNr % this.Bitmap.NoOfFrames;
          this.startTime = this.timer.Time - ( time % period );
        }
      }

      if ((( frameNr !== this.animFrameNumber ) && !!this.Owner ) && (( this.viewState 
          & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );

      this.animFrameNumber = frameNr;

      if ( !period && !!this.timer )
      {
        _app._DetachObjObserver([ this, this.timerSlot ], this.timer, 0 );
        this.timer = null;
      }
    },

    // Implementation of the Chora method : 'Views::Image.OnSetColor()'
    OnSetColor : function( value )
    {
      var _tmp;

      if ( value === this.Color )
        return;

      this.Color = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );
    },

    // Implementation of the Chora method : 'Views::Image.OnSetAnimated()'
    OnSetAnimated : function( value )
    {
      var _tmp;

      if ( this.Animated === value )
        return;

      this.Animated = value;
      this.animFrameNumber = -1;

      if ( !value && !!this.timer )
      {
        _app._DetachObjObserver([ this, this.timerSlot ], this.timer, 0 );
        this.timer = null;
      }

      if ( value )
      {
        this.timer = _app._GetAutoObject( _app.Effects.EffectTimer );
        _app._AttachObjObserver([ this, this.timerSlot ], this.timer, 0 );
        _app._PostSignal([ this, this.timerSlot ], this );
      }

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );
    },

    // Implementation of the Chora method : 'Views::Image.OnSetBitmap()'
    OnSetBitmap : function( value )
    {
      var _tmp;

      if ( value === this.Bitmap )
        return;

      if ( !!this.Bitmap && this.Bitmap.Mutable )
        _app._DetachObjObserver([ this, this.observerSlot ], this.Bitmap, 0 );

      this.Bitmap = value;
      this.animFrameNumber = -1;

      if ( !!value && value.Mutable )
        _app._AttachObjObserver([ this, this.observerSlot ], value, 0 );

      if ( this.Animated )
      {
        this.OnSetAnimated( false );
        this.OnSetAnimated( true );
      }

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );
    },

    // The method GetContentArea() returns the position and the size of an area 
    // where the view will show the bitmap. This area is expressed in coordinates 
    // relative to the top-left corner of the view's @Owner. The method takes in 
    // account all properties which do affect the position and the alignment of 
    // the bitmap, e.g. @Alignment or @ScrollOffset.
    GetContentArea : function()
    {
      var _tmp;

      if ( !this.Bitmap )
        return _0002;

      var size = this.Bitmap.FrameSize;
      var bounds = this.Bounds;
      var width = bounds[2] - bounds[0];
      var height = bounds[3] - bounds[1];

      if ( !size[0] || !size[1])
        return _0002;

      var rd = [ 0, 0, width, height ];
      var rs = rd;

      rs = _app._SetRectSize( rs, size );

      if (( rs[2] - rs[0]) !== ( rd[2] - rd[0]))
        rs = _app._SetRectX( rs, ( rd[0] + ((( rd[2] - rd[0]) / 2 ) | 0 )) - ((( 
        rs[2] - rs[0]) / 2 ) | 0 ));

      if (( rs[3] - rs[1]) !== ( rd[3] - rd[1]))
        rs = _app._SetRectY( rs, ( rd[1] + ((( rd[3] - rd[1]) / 2 ) | 0 )) - ((( 
        rs[3] - rs[1]) / 2 ) | 0 ));

      rs = _app._MoveRectPos( rs, bounds.slice(0,2));

      return rs;
    },

    // Initializer for the class 'Views::Image'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.RectView._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Image;
    },

    // Garbage Collector method for the class 'Views::Image'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.RectView._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.timer ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Bitmap ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Views::Image"
  };

  // The class Views::Text provides a kind of view specialized to print the text. 
  // The text is stored in the property @String. It can consist of several rows 
  // separated by the new-line sign '\\n'. Optionally an automatic text wrap ca 
  // be performed if the property @WrapText is 'true'. The automatic text wrap takes 
  // place primarily between words. More sophisticated text wrap can be controlled 
  // by following special signs used within the text:
  // - The tilde sign '~' and the soft-hyphen sign '\x00AD' identify a potential 
  // text wrap position. They are usually not displayed until the text wrap took 
  // place at their position. Then the text row is terminated with a hyphen '-' 
  // sign.
  // - The circumflex accent '^' sign and '\x200B' zero-width non breakable space 
  // identify potential text wrap positions without ever being visible.
  // In order to be able to output the special characters '^' and '~' and as regular 
  // signs, the character '%' can be applied in front of the affected sign to convert 
  // it to a regular sign. To show the '%' sign itself, use '%%' sequence.
  // Beside the automatic text wrap, an explicit linefeed is possible when the '\n' 
  // sign has been found in the string.
  // The text output is performed with the font specified in the property @Font. 
  // The position and the size of the area where the text is drawn is determined 
  // by the property @Bounds. If the size of this area differs from the size of 
  // the text, the text can be aligned. This is controlled by the property @Alignment. 
  // With the property @Orientation the displayed content can be rotated. The color 
  // to print the text is defined by the property @Color. Alternatively, the text 
  // can be drawn with a color gradient specified by the properties @ColorTL, @ColorTR, 
  // @ColorBL and @ColorBR. For each view's corner different color can be set.
  // The property @SlideHandler permits the text view to be connected together with 
  // an interactive Core::SlideTouchHandler. In this manner the user can scroll 
  // the displayed text by simply touching the slide handler on the screen. Alternatively, 
  // the scroll position can be controlled by the value of the property @ScrollOffset.
  // The visibility of the text is controlled by the properties @Visible and @Embedded. 
  // In particular the property @Embedded can determine whether the corresponding 
  // view is limited (== embedded) to the boundary of a sibling Core::Outline view 
  // or not. The embedding of views within a Core::Outline allows a kind of sub-groups 
  // within the GUI component itself. Very useful for any kind of scrollable lists, 
  // menus, etc.
  // With the property @EnableBidiText the view can be configured to treat the original 
  // string @String as containing bi-directional text. In such case, the string 
  // is processed by the Unicode Bidirectional Algorithm. If the text contains Arabic 
  // characters, the algorithm performs the shaping and determines the obligatory 
  // Arabic ligatures. With the method @IsBidiText(), @IsBaseDirectionRTL() and 
  // @IsCharDirectionRTL() the resulting state of the processed text can be determined.
  // The text provides an additional set of methods useful to access the text rows 
  // and glyphs, e.g. @GetNoOfRows(), @GetRowArea(), @RowCol2Position(), @RowCol2StringIndex(), 
  // @StringIndex2RowCol(), etc. These methods can be invoked from a slot method 
  // assigned to the property @OnUpdate. In this manner text position can be calculated 
  // or additional decorations can be drawn.
  _unit.Text =
  {
    // The property 'SlideHandler' provides an interface, where a slide handler 
    // can be attached. In this manner the handler can control the view and the 
    // user can scroll the text by simply touching the slide handler on the screen.
    SlideHandler : null,

    // The property 'Font' refers to the font object used to print the text. The 
    // text is determined by the property @String.
    Font : null,

    // The property 'OnUpdate' can refer to a slot method, which should be invoked 
    // by the view after the displayed @String or the position of the view have 
    // been changed. This method is intended to update decorations, like the position 
    // of a blinking caret in a text editor, etc. For this purpose methods @GetContentArea(), 
    // @GetRowArea(), @RowCol2Position(), @Position2RowCol(), @GetNoOfRows(), @GetRowString(), 
    // @RowCol2StringIndex() can be used. It's up to you to provide the slot method 
    // and to fill it with the desired behavior.
    OnUpdate : null,
    flowString : _app._EmptyString,

    // The property 'String' stores the text to print in this view. The corresponding 
    // font is determined by the property @Font. The text can consist of several 
    // rows separated by the new-line sign '\n'. Optionally an automatic text wrap 
    // can be performed if the property @WrapText is 'true'. The automatic text 
    // wrap takes place primarily between words. More sophisticated text wrap can 
    // be controlled by following special signs used within the text:
    // - The tilde sign '~' and the soft-hyphen sign '\x00AD' identify a potential 
    // text wrap position. They are usually not displayed until the text wrap took 
    // place at their position. Then the text row is terminated with a hyphen '-' 
    // sign.
    // - The circumflex accent '^' sign identifies a potential text wrap position 
    // without ever being visible.
    // In order to be able to output the special characters '^', '~' and '\x00AD' 
    // as regular signs, the character '%' can be applied in front of the affected 
    // sign to convert it to a regular sign. To show the '%' sign itself, use '%%' 
    // sequence.
    String : _app._EmptyString,
    bidiContext : null,
    textSize : _app._NullPoint,

    // The property 'ColorBR' stores the color at the bottom-right corner of the 
    // view's @Bounds area. This color value can additionally be modulated by the 
    // common color value stored in the property @Color.
    ColorBR : 0xFFFFFFFF,

    // The property 'ScrollOffset' stores an additional displacement in pixel to 
    // move the text within the view's area. It is useful to create e.g. marquee 
    // text.
    ScrollOffset : _app._NullPoint,

    // The property 'Alignment' determines how the view should display the text 
    // rows if their size differ from the size of the view. In this manner the rows 
    // can be aligned horizontally. The entire text block can be aligned vertically.
    // Please note, the orientation of the area in context of which the text is 
    // aligned is affected by the property @Orientation. For example, if the view 
    // is configured to rotate the text 90 degrees counter-clockwise and to align 
    // it to the left edge, all text rows will be arranged consequently at the bottom 
    // edge of the view.
    Alignment : 0x12,

    // The property 'Color' controls the color of the entire view. Thus this property 
    // is useful if no gradients are desired. The resulting colors can additionally 
    // be modulated by the values specified in the properties @ColorTL, @ColorTR, 
    // @ColorBL and @ColorBR.
    Color : 0xFFFFFFFF,

    // The property 'WrapText' determines whether long text rows should be wrapped 
    // automatically. If this property is 'true', the view will wrap the text rows 
    // which are longer than the value resulting from the property @WrapWidth.
    WrapText : false,

    // The property 'AutoSize' determines whether @Bounds of the view should be 
    // adjusted automatically in response to text or font changes. If AutoSize is 
    // 'true', the view will adapt its bounds area correspondingly to the area occupied 
    // by the drawn text.
    AutoSize : false,

    // The property 'EnableBidiText' controls how the Text view should handle strings 
    // containing bidirectional or right-to-left (e.g. Arabic) contents. If this 
    // property is 'true', the Text view applies the 'Unicode Bidirectional Algoritm' 
    // on the specified string. This includes the shaping of Arabic glyphs and building 
    // of Arabic mandatory ligatures. If this property is 'false', none of the here 
    // described steps is applied - the Text view displays the string as it is.
    EnableBidiText : false,
    reparsed : false,

    // Implementation of the Chora method : 'Views::Text.Done()'
    Done : function()
    {
      if ( !!this.bidiContext )
      {
        this.freeBidi( this.bidiContext );
        this.bidiContext = null;
      }
    },

    // The method Draw() is invoked automatically if parts of the view should be 
    // redrawn on the screen. This can occur when e.g. the view has been moved or 
    // the appearance of the view has changed before.
    // Draw() is invoked automatically by the framework, you never will need to 
    // invoke this method directly. However you can request an invocation of this 
    // method by calling the method InvalidateArea() of the views @Owner. Usually 
    // this is also unnecessary unless you are developing your own view.
    // The passed parameters determine the drawing destination aCanvas and the area 
    // to redraw aClip in the coordinate space of the canvas. The parameter aOffset 
    // contains the displacement between the origin of the views owner and the origin 
    // of the canvas. You will need it to convert views coordinates into these of 
    // the canvas.
    // The parameter aOpacity contains the opacity descended from this view's @Owner. 
    // It lies in range 0 .. 255. If the view implements its own 'Opacity', 'Color', 
    // etc. properties, the Draw() method should calculate the resulting real opacity 
    // by mixing the values of these properties with the one passed in aOpacity 
    // parameter.
    // The parameter aBlend contains the blending mode descended from this view's 
    // @Owner. It determines, whether the view should be drawn with alpha-blending 
    // active or not. If aBlend is false, the outputs of the view should overwrite 
    // the corresponding pixel in the drawing destination aCanvas. If aBlend is 
    // true, the outputs should be mixed with the pixel already stored in aCanvas. 
    // For this purpose all Graphics Engine functions provide a parameter to specify 
    // the mode for the respective drawing operation. If the view implements its 
    // own 'Blend' property, the Draw() method should calculate the resulting real 
    // blend mode by using logical AND operation of the value of the property and 
    // the one passed in aBlend parameter.
    Draw : function( aCanvas, aClip, aOffset, aOpacity, aBlend )
    {
      var _tmp;

      if (( this.flowString === _app._EmptyString ) || !this.Font )
        return;

      var align = this.Alignment;
      var font = this.Font;
      var rd = _app._MoveRectPos( this.Bounds, aOffset );
      var ctl = 0xFFFFFFFF;
      var ctr = 0xFFFFFFFF;
      var cbr = this.ColorBR;
      var cbl = 0xFFFFFFFF;
      var col = this.Color;
      var opacity = ((( aOpacity + 1 ) * 255 ) >> 8 ) + 1;
      var noOfRows = this.flowString.charCodeAt( 0 ) || 0;
      var area = _app._MoveRectPos( this.GetContentArea(), aOffset );
      var ofs = [ rd[0] - area[0], ( rd[1] - area[1]) - font.Ascent ];

      if ( noOfRows < 1 )
        return;

      if ( 0xFFFFFFFF === cbr )
        ctl = ctr = cbl = cbr = col;
      else
        if ( col !== 0xFFFFFFFF )
        {
          ctl = ( ctl & 0x00FFFFFF ) | (((( 255 * ((( col >> 24 ) & 0xFF ) + 1 )) 
          >> 8 ) & 0xFF ) << 24 );
          ctl = ( ctl & 0xFFFFFF00 ) | (((( ctl & 0xFF ) * (( col & 0xFF ) + 1 )) 
          >> 8 ) & 0xFF );
          ctl = ( ctl & 0xFFFF00FF ) | (((((( ctl >> 8 ) & 0xFF ) * ((( col >> 8 ) 
          & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 8 );
          ctl = ( ctl & 0xFF00FFFF ) | (((((( ctl >> 16 ) & 0xFF ) * ((( col >> 
          16 ) & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 16 );
          ctr = ( ctr & 0x00FFFFFF ) | (((( 255 * ((( col >> 24 ) & 0xFF ) + 1 )) 
          >> 8 ) & 0xFF ) << 24 );
          ctr = ( ctr & 0xFFFFFF00 ) | (((( ctr & 0xFF ) * (( col & 0xFF ) + 1 )) 
          >> 8 ) & 0xFF );
          ctr = ( ctr & 0xFFFF00FF ) | (((((( ctr >> 8 ) & 0xFF ) * ((( col >> 8 ) 
          & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 8 );
          ctr = ( ctr & 0xFF00FFFF ) | (((((( ctr >> 16 ) & 0xFF ) * ((( col >> 
          16 ) & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 16 );
          cbl = ( cbl & 0x00FFFFFF ) | (((( 255 * ((( col >> 24 ) & 0xFF ) + 1 )) 
          >> 8 ) & 0xFF ) << 24 );
          cbl = ( cbl & 0xFFFFFF00 ) | (((( cbl & 0xFF ) * (( col & 0xFF ) + 1 )) 
          >> 8 ) & 0xFF );
          cbl = ( cbl & 0xFFFF00FF ) | (((((( cbl >> 8 ) & 0xFF ) * ((( col >> 8 ) 
          & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 8 );
          cbl = ( cbl & 0xFF00FFFF ) | (((((( cbl >> 16 ) & 0xFF ) * ((( col >> 
          16 ) & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 16 );
          cbr = ( cbr & 0x00FFFFFF ) | (((((( cbr >> 24 ) & 0xFF ) * ((( col >> 
          24 ) & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 24 );
          cbr = ( cbr & 0xFFFFFF00 ) | (((( cbr & 0xFF ) * (( col & 0xFF ) + 1 )) 
          >> 8 ) & 0xFF );
          cbr = ( cbr & 0xFFFF00FF ) | (((((( cbr >> 8 ) & 0xFF ) * ((( col >> 8 ) 
          & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 8 );
          cbr = ( cbr & 0xFF00FFFF ) | (((((( cbr >> 16 ) & 0xFF ) * ((( col >> 
          16 ) & 0xFF ) + 1 )) >> 8 ) & 0xFF ) << 16 );
        }

      if ( opacity < 256 )
      {
        ctl = ( ctl & 0x00FFFFFF ) | (((((( ctl >> 24 ) & 0xFF ) * opacity ) >> 
        8 ) & 0xFF ) << 24 );
        ctr = ( ctr & 0x00FFFFFF ) | (((((( ctr >> 24 ) & 0xFF ) * opacity ) >> 
        8 ) & 0xFF ) << 24 );
        cbr = ( cbr & 0x00FFFFFF ) | (((((( cbr >> 24 ) & 0xFF ) * opacity ) >> 
        8 ) & 0xFF ) << 24 );
        cbl = ( cbl & 0x00FFFFFF ) | (((((( cbl >> 24 ) & 0xFF ) * opacity ) >> 
        8 ) & 0xFF ) << 24 );
      }

      if ((( align & 0x80 ) === 0x80 ))
      {
        if ( this.IsBaseDirectionRTL())
          align = ( align & ~0x80 ) | 0x4;
        else
          align = ( align & ~0x80 ) | 0x1;
      }

      if (( noOfRows === 1 ) && !(( align & 0x40 ) === 0x40 ))
      {
        aCanvas.DrawText( aClip, font, this.flowString, 2, ( this.flowString.charCodeAt( 
        1 ) || 0 ) - 1, rd, ofs, 0, 0, ctl, ctr, cbr, cbl, true );

        return;
      }

      var leading = font.Leading;
      var rowHeight = ( font.Ascent + font.Descent ) + leading;
      var clipY1 = aClip[1] - area[1];
      var clipY2 = aClip[3] - area[1];
      var areaW = area[2] - area[0];
      var y = 0;
      var i = 1;
      var c = this.flowString.charCodeAt( 1 ) || 0;

      while ((( y + rowHeight ) < clipY1 ) && ( c > 0 ))
      {
        i = i + c;
        y = y + rowHeight;
        c = this.flowString.charCodeAt( i ) || 0;
      }

      while (( y < clipY2 ) && ( c > 0 ))
      {
        var ofs2 = _app._MovePointNeg( ofs, [ 0, y ]);
        var rw = 0;
        var justified = false;

        if ((((( align & 0x40 ) === 0x40 ) && (( this.flowString.charCodeAt(( i 
            + c ) - 1 ) || 0 ) !== 0x0A )) && (( this.flowString.charCodeAt( i + 
            1 ) || 0 ) !== 0x0A )) && (( this.flowString.charCodeAt( i + c ) || 
            0 ) !== 0x00 ))
          justified = true;

        if ( justified && !!( align & 0x6 ))
        {
          var rowEnd = i + c;
          var blank1 = this.flowString.indexOf( String.fromCharCode( 0x20 ), i + 
            1 );
          var blank2 = this.flowString.indexOf( String.fromCharCode( 0xA0 ), i + 
            1 );

          if ((( blank1 < 0 ) || ( blank1 >= rowEnd )) && (( blank2 < 0 ) || ( blank2 
              >= rowEnd )))
            justified = false;
        }

        if ( justified )
          rw = areaW;
        else
          if ((( align & 0x4 ) === 0x4 ))
            ofs2 = [( ofs2[0] - areaW ) + font.GetTextAdvance( this.flowString, 
            i + 1, c - 1 ), ofs2[1]];
          else
            if ((( align & 0x2 ) === 0x2 ))
              ofs2 = [( ofs2[0] - (( areaW / 2 ) | 0 )) + (( font.GetTextAdvance( 
              this.flowString, i + 1, c - 1 ) / 2 ) | 0 ), ofs2[1]];

        aCanvas.DrawText( aClip, font, this.flowString, i + 1, c - 1, rd, ofs2, 
        rw, 0, ctl, ctr, cbr, cbl, true );
        i = i + c;
        y = y + rowHeight;
        c = this.flowString.charCodeAt( i ) || 0;
      }
    },

    // Implementation of the Chora method : 'Views::Text.OnSetBounds()'
    OnSetBounds : function( value )
    {
      var _tmp;

      if ( _app._IsEqualRect( value, this.Bounds ))
        return;

      var resized;

      resized = (( _tmp = this.Bounds )[2] - _tmp[0]) !== ( value[2] - value[0]);

      if ((( resized && this.WrapText ) && this.reparsed ) && !(( this.viewState 
          & 0x2000 ) === 0x2000 ))
      {
        this.flowString = _app._EmptyString;
        this.reparsed = false;
        _app._PostSignal([ this, this.preReparseSlot ], this );
      }

      _app.Core.RectView.OnSetBounds.call( this, value );
      _app._PostSignal([ this, this.preOnUpdateSlot ], this );
    },

    // Implementation of the Chora method : 'Views::Text.bidiReverseReorderIndex()'
    bidiReverseReorderIndex : function( aBidi, aRowStart, aRowEnd, aIndex )
    {
      if ( !aBidi )
        return aIndex;

      aIndex = _app._BidiReverseReorderIndex( aBidi, aRowStart, aRowEnd, aIndex );

      return aIndex;
    },

    // Implementation of the Chora method : 'Views::Text.bidiReorderIndex()'
    bidiReorderIndex : function( aBidi, aRowStart, aRowEnd, aIndex )
    {
      if ( !aBidi )
        return aIndex;

      aIndex = _app._BidiReorderIndex( aBidi, aRowStart, aRowEnd, aIndex );

      return aIndex;
    },

    // Implementation of the Chora method : 'Views::Text.freeBidi()'
    freeBidi : function( aBidi )
    {
      if ( !aBidi )
        return;

      _app._FreeBidi( aBidi );
    },

    // Implementation of the Chora method : 'Views::Text.createBidi()'
    createBidi : function( aSize )
    {
      var bidi = null;

      bidi = _app._CreateBidi( aSize );

      return bidi;
    },

    // Implementation of the Chora method : 'Views::Text.preOnUpdateSlot()'
    preOnUpdateSlot : function( sender )
    {
      _app._PostSignal( this.OnUpdate, this );
    },

    // Implementation of the Chora method : 'Views::Text.preReparseSlot()'
    preReparseSlot : function( sender )
    {
      _app._PostSignal([ this, this.reparseSlot ], this );
    },

    // Implementation of the Chora method : 'Views::Text.onSlideSlot()'
    onSlideSlot : function( sender )
    {
      this.OnSetScrollOffset( this.SlideHandler.Offset );
    },

    // Implementation of the Chora method : 'Views::Text.onStartSlideSlot()'
    onStartSlideSlot : function( sender )
    {
      var _tmp;
      var area = this.GetContentArea();
      var origin = this.Bounds.slice(0,2);

      if ( area[0] > origin[0])
        area = [].concat( origin[0], area.slice(1,4));

      if ( area[1] > origin[1])
        area = _app._SetRectY1( area, origin[1]);

      var offset = _app._MovePointNeg( area.slice(0,2), this.Bounds.slice(0,2));
      var minOffset = _app._MovePointNeg([( _tmp = this.Bounds )[2] - _tmp[0], _tmp[3] 
        - _tmp[1]], [ area[2] - area[0], area[3] - area[1]]);

      if ( minOffset[0] > 0 )
        minOffset = [ 0, minOffset[1]];

      if ( minOffset[1] > 0 )
        minOffset = [ minOffset[0], 0 ];

      this.SlideHandler.Offset = this.ScrollOffset;
      this.SlideHandler.MinOffset = _app._MovePointNeg( _app._MovePointPos( this.ScrollOffset, 
      minOffset ), offset );
      this.SlideHandler.MaxOffset = _app._MovePointNeg( this.ScrollOffset, offset );
    },

    // Implementation of the Chora method : 'Views::Text.reparseSlot()'
    reparseSlot : function( sender )
    {
      var _tmp;

      if ( this.reparsed )
        return;

      var width = ( _tmp = this.Bounds )[2] - _tmp[0];
      var maxWidth = -1;
      var font = this.Font;

      if (( !!font && !!!font.Ascent ) && !!!font.Descent )
        font = null;

      if ( this.WrapText )
      {
        maxWidth = width;

        if ( maxWidth < 0 )
          maxWidth = 1;
      }

      if ( !!this.bidiContext )
      {
        this.freeBidi( this.bidiContext );
        this.bidiContext = null;
      }

      this.reparsed = true;

      if (( this.String !== _app._EmptyString ) && !!font )
      {
        var length = this.String.length;

        if ( this.EnableBidiText )
          this.bidiContext = this.createBidi( length );

        this.flowString = font.ParseFlowString( this.String, 0, maxWidth, length, 
        this.bidiContext );

        if ( !!this.bidiContext && !this.IsBidiText())
        {
          this.freeBidi( this.bidiContext );
          this.bidiContext = null;
        }
      }
      else
        this.flowString = _app._EmptyString;

      this.textSize = _0001;

      if ( this.AutoSize && ( this.flowString !== _app._EmptyString ))
      {
        this.viewState = this.viewState | 0x2000;
        this.OnSetBounds( _app._MoveRectNeg( _app._InflateRect( this.GetContentArea(), 
        _0001 ), this.ScrollOffset ));
        this.viewState = this.viewState & ~0x2000;
      }

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );

      _app._PostSignal([ this, this.preOnUpdateSlot ], this );
    },

    // Implementation of the Chora method : 'Views::Text.OnSetEnableBidiText()'
    OnSetEnableBidiText : function( value )
    {
      if ( value === this.EnableBidiText )
        return;

      this.EnableBidiText = value;
      this.flowString = _app._EmptyString;
      this.reparsed = false;
      _app._PostSignal([ this, this.preReparseSlot ], this );
    },

    // Implementation of the Chora method : 'Views::Text.OnSetOnUpdate()'
    OnSetOnUpdate : function( value )
    {
      if ( _app._IsEqualSlot( value, this.OnUpdate ))
        return;

      this.OnUpdate = value;

      if ( this.WrapText || !!value )
        this.viewState = this.viewState & ~0x100;
      else
        this.viewState = this.viewState | 0x100;
    },

    // Implementation of the Chora method : 'Views::Text.OnSetColorBR()'
    OnSetColorBR : function( value )
    {
      var _tmp;

      if ( value === this.ColorBR )
        return;

      this.ColorBR = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );
    },

    // Implementation of the Chora method : 'Views::Text.OnSetSlideHandler()'
    OnSetSlideHandler : function( value )
    {
      if ( value === this.SlideHandler )
        return;

      if ( !!value && !!value.privateOnSlide )
      {
        _app._Trace( "%s%$%*%s", _0003, value, _0004 );
        throw new Error(  _0005  );
      }

      if ( !!this.SlideHandler )
      {
        this.SlideHandler.privateOnStart = null;
        this.SlideHandler.privateOnSlide = null;
      }

      this.SlideHandler = value;

      if ( !!value )
      {
        value.privateOnStart = [ this, this.onStartSlideSlot ];
        value.privateOnSlide = [ this, this.onSlideSlot ];
      }
    },

    // Implementation of the Chora method : 'Views::Text.OnSetAutoSize()'
    OnSetAutoSize : function( value )
    {
      if ( value === this.AutoSize )
        return;

      this.AutoSize = value;

      if ( value && this.reparsed )
      {
        this.viewState = this.viewState | 0x2000;
        this.OnSetBounds( _app._MoveRectNeg( _app._InflateRect( this.GetContentArea(), 
        _0001 ), this.ScrollOffset ));
        this.viewState = this.viewState & ~0x2000;
      }
    },

    // Implementation of the Chora method : 'Views::Text.OnSetWrapText()'
    OnSetWrapText : function( value )
    {
      if ( value === this.WrapText )
        return;

      this.WrapText = value;

      if ( this.reparsed )
      {
        this.flowString = _app._EmptyString;
        this.reparsed = false;
        _app._PostSignal([ this, this.preReparseSlot ], this );
      }

      if ( value || !!this.OnUpdate )
        this.viewState = this.viewState & ~0x100;
      else
        this.viewState = this.viewState | 0x100;
    },

    // Implementation of the Chora method : 'Views::Text.OnSetScrollOffset()'
    OnSetScrollOffset : function( value )
    {
      var _tmp;

      if ( _app._IsEqualPoint( value, this.ScrollOffset ))
        return;

      this.ScrollOffset = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );

      if ( this.reparsed )
        _app._PostSignal([ this, this.preOnUpdateSlot ], this );
    },

    // Implementation of the Chora method : 'Views::Text.OnSetAlignment()'
    OnSetAlignment : function( value )
    {
      var _tmp;

      if ( value === this.Alignment )
        return;

      this.Alignment = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );

      if ( this.reparsed )
        _app._PostSignal([ this, this.preOnUpdateSlot ], this );
    },

    // Implementation of the Chora method : 'Views::Text.OnSetString()'
    OnSetString : function( value )
    {
      if ( value === this.String )
        return;

      this.String = value;
      this.flowString = _app._EmptyString;
      this.reparsed = false;
      _app._PostSignal([ this, this.preReparseSlot ], this );
    },

    // Implementation of the Chora method : 'Views::Text.OnSetFont()'
    OnSetFont : function( value )
    {
      if ( value === this.Font )
        return;

      this.Font = value;
      this.flowString = _app._EmptyString;
      this.reparsed = false;
      _app._PostSignal([ this, this.preReparseSlot ], this );
    },

    // Implementation of the Chora method : 'Views::Text.OnSetColor()'
    OnSetColor : function( value )
    {
      var _tmp;

      if ( value === this.Color )
        return;

      this.Color = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );
    },

    // Implementation of the Chora method : 'Views::Text.OnSetVisible()'
    OnSetVisible : function( value )
    {
      if ( value )
        this.ChangeViewState( 0x1, 0x0 );
      else
        this.ChangeViewState( 0x0, 0x1 );
    },

    // The method IsBaseDirectionRTL() returns 'true' if the text specified in @String 
    // starts with an RTL (right-to-left) character. This implies the base direction 
    // of the entire text paragraph. If the text starts with an LTR (left-to-right) 
    // sign or the property @EnableBidiText is 'false', this method returns 'false'.
    IsBaseDirectionRTL : function()
    {
      if ( !this.reparsed )
        this.reparseSlot( this );

      if ( !this.bidiContext )
        return false;

      var result = false;
      var bidi = this.bidiContext;

      result = _app._BidiIsRTL( bidi );

      return result;
    },

    // The method IsBidiText() returns 'true' if the text specified in the property 
    // @String contains any right-to-left contents or any other Bidi algorithm specific 
    // control codes requiring the Bidi processing of this text. Please note, if 
    // the property @EnableBidiText is false, the text is not processed by the Bidi 
    // algorithm and this method returns 'false'.
    IsBidiText : function()
    {
      if ( !this.reparsed )
        this.reparseSlot( this );

      if ( !this.bidiContext )
        return false;

      var result = false;
      var bidi = this.bidiContext;

      result = _app._BidiIsNeeded( bidi );

      return result;
    },

    // The method StringIndex2RowCol() tries to determine the row and column display 
    // position of a sign corresponding to a character with the given number aIndex 
    // stored in the original string @String. Within the string the first character 
    // has the index 0, the second 1, and so far. The returned value defines the 
    // row/column position where the affected sign is displayed after the string 
    // is processed and wrapped in several text rows. This value contains in its 
    // 'x' component the column number and in the 'y' component the row number. 
    // The columns and rows are counted starting with 0.
    // Please note, that the returned row/column position identifies visible signs 
    // only. If aIndex addresses a zero-width sign (e.g. eliminated soft-hyphen, 
    // new-line, Bidi control marks, the escape sign '%', etc.), the method returns 
    // in 'x' the column position identifying the next visible sign existing within 
    // the same text row. If starting at the estimated column position there is 
    // no other visible sign until the end of the text row, the method returns in 
    // 'x' the column number of the last visible sign + 1 (means: the returned position 
    // addresses the column behind the last visible sign). Furthermore, if the Text 
    // view is configured with the property @Ellipsis set 'true', the method fails 
    // and returns the value <0,0> regardless of the specified aIndex parameter.
    // The method is useful to determine the displayed text fragment corresponding 
    // to a given string index. Knowing the row number you can use the method @GetRowString() 
    // to obtain the corresponding row text and with the known column number you 
    // can evaluate the corresponding character in this row. Furthermore, by using 
    // the method @RowCol2Position() you can obtain the pixel position where the 
    // sign at the estimated row/column is displayed.
    StringIndex2RowCol : function( aIndex )
    {
      if (( this.String === _app._EmptyString ) || !this.Font )
        return _0001;

      if ( !this.reparsed )
        this.reparseSlot( this );

      if ( aIndex < 0 )
        aIndex = 0;

      var lastRow = ( this.flowString.charCodeAt( 0 ) || 0 ) - 1;
      var rowLen = this.flowString.charCodeAt( 1 ) || 0;
      var inx = 1;
      var skip = 2;
      var row = 0;
      var col = -1;
      var count = true;

      aIndex = aIndex + 2;

      while (( row < lastRow ) && (( inx + rowLen ) <= aIndex ))
      {
        inx = inx + rowLen;
        row = row + 1;
        skip = skip + 1;
        aIndex = aIndex + 1;
        rowLen = this.flowString.charCodeAt( inx ) || 0;
      }

      if ( aIndex > ( inx + rowLen ))
        aIndex = inx + rowLen;

      if ( !!this.bidiContext )
        aIndex = ( inx + this.bidiReorderIndex( this.bidiContext, ( inx + 1 ) - 
        skip, ( inx + rowLen ) - skip, ( aIndex - inx ) - 1 )) + 1;

      for ( ; aIndex > inx; inx = inx + 1 )
      {
        var ch = this.flowString.charCodeAt( inx + 1 ) || 0;

        if ( count )
          col = col + 1;

        count = ( ch !== 0xFEFF ) && ( ch !== 0x0A );
      }

      return [ col, row ];
    },

    // The method RowCol2StringIndex() tries to determine from the given row/column 
    // position the index of the corresponding character in the original string 
    // @String. The position is specified in the parameter aRowCol. This parameter 
    // contains in its 'x' component the column number and in the 'y' component 
    // the row number as it is displayed on the screen. The columns and rows are 
    // counted starting with 0. The returned index refers within @String the character 
    // which is displayed at the specified row/column position.
    // Please note, the passed row/column position identifies visible signs only 
    // in the order as they appear on the screen. Any zero-width signs (e.g. eliminated 
    // soft-hyphen, new-line, Bidi control marks, the escape sign '%', etc.) are 
    // ignored. If the specified row is negative, the method returns the index corresponding 
    // to the first sign in the first row. If the specified row does not exist, 
    // the method returns the index corresponding to the character following the 
    // last sign in the last row. If the specified column is negative, the method 
    // returns the index corresponding to the first sign within the affected row. 
    // If the specified column does not exist, the method returns the index of the 
    // character following the last sign within the row. Furthermore, if the Text 
    // view is configured with the property @Ellipsis set 'true', the method fails 
    // and returns the value 0 regardless of the specified aRowCol parameter. 
    // This method is useful if e.g. a text fragment found at the given row/column 
    // position should be evaluated or modified.
    RowCol2StringIndex : function( aRowCol )
    {
      if (( this.String === _app._EmptyString ) || !this.Font )
        return 0;

      if ( !this.reparsed )
        this.reparseSlot( this );

      var row = aRowCol[1];
      var col = aRowCol[0];
      var inx = 1;
      var skip = 2;
      var noOfRows = this.flowString.charCodeAt( 0 ) || 0;
      var rowLen = this.flowString.charCodeAt( 1 ) || 0;

      if ( row >= noOfRows )
      {
        row = noOfRows - 1;
        col = this.flowString.length;
      }

      if ( row < 0 )
      {
        row = 0;
        col = 0;
      }

      if ( col < 0 )
        col = 0;

      while (( row > 0 ) && ( rowLen > 0 ))
      {
        inx = inx + rowLen;
        row = row - 1;
        skip = skip + 1;
        rowLen = this.flowString.charCodeAt( inx ) || 0;
      }

      var inx2 = inx;
      var rowStart = ( inx - skip ) + 1;
      var rowEnd = ( rowStart + rowLen ) - 1;
      var pending = false;

      while (( col >= 0 ) && ( rowLen > 1 ))
      {
        var ch = this.flowString.charCodeAt( inx + 1 ) || 0;

        inx = inx + 1;
        rowLen = rowLen - 1;
        pending = ( ch === 0xFEFF ) || ( ch === 0x0A );

        if ( !pending )
        {
          col = col - 1;
          inx2 = inx;
        }
      }

      if (( !pending && ( col >= 0 )) && (( this.flowString.charCodeAt( inx + 1 ) 
          || 0 ) === 0x00 ))
        pending = true;

      if ( pending )
        inx2 = inx2 + 1;

      inx2 = inx2 - skip;

      if ( !!this.bidiContext )
        inx2 = rowStart + this.bidiReverseReorderIndex( this.bidiContext, rowStart, 
        rowEnd, inx2 - rowStart );

      return inx2;
    },

    // The method Position2RowCol() tries to determine the row and column numbers 
    // for the specified pixel position aPoint. The position aPoint is expressed 
    // in coordinates relative to the top-left corner of the view's @Owner. The 
    // method takes in account all properties which do affect the position and the 
    // alignment of the text, e.g. @Alignment, @Orientation, @ScrollOffset, @WrapText, 
    // etc. The returned value contains in 'x' the column number and in 'y' the 
    // row number of the affected sign as it is displayed on the screen. The first 
    // row/column has the number 0, the second has the number 1, and so far.
    // If the specified position points above the first or below the last row, the 
    // corresponding row is selected. If the position points before the first sign 
    // of the affected row, the first column 0 is selected. If the position points 
    // behind the last sign in the row, the method returns the column number of 
    // the last sign in the row +1.
    // This method is useful, e.g. to determine which sign lies at a position touched 
    // by the user.
    Position2RowCol : function( aPoint )
    {
      var _tmp;

      if (( this.String === _app._EmptyString ) || !this.Font )
        return _0001;

      if ( !this.reparsed )
        this.reparseSlot( this );

      var area = this.GetContentArea();

      if (( area[0] >= area [2]) || ( area[1] >= area [3]))
        return _0001;

      var font = this.Font;
      var align = this.Alignment;
      var noOfRows = this.flowString.charCodeAt( 0 ) || 0;
      var leading = font.Leading;

      if ( aPoint[1] < area[1])
        aPoint = [ aPoint[0], area[1]];

      if ( aPoint[1] >= area[3])
        aPoint = [ aPoint[0], area[3] - 1 ];

      var rowHeight = ( font.Ascent + font.Descent ) + leading;
      var row = (( aPoint[1] - area[1]) / rowHeight ) | 0;
      var rowString = this.GetRowString( row );
      var rowLen = rowString.length;
      var justified = false;

      if ((( align & 0x80 ) === 0x80 ))
      {
        if ( this.IsBaseDirectionRTL())
          align = ( align & ~0x80 ) | 0x4;
        else
          align = ( align & ~0x80 ) | 0x1;
      }

      if ((( align & 0x40 ) === 0x40 ) && ( row < ( noOfRows - 1 )))
        justified = true;

      if (( justified && ( rowString.indexOf( String.fromCharCode( 0x20 ), 0 ) < 
          0 )) && ( rowString.indexOf( String.fromCharCode( 0xA0 ), 0 ) < 0 ))
        justified = false;

      if ( justified )
      {
        var inx = 1;
        var row2 = row;

        while ( row2 > 0 )
        {
          inx = inx + ( this.flowString.charCodeAt( inx ) || 0 );
          row2 = row2 - 1;
        }

        if ((( this.flowString.charCodeAt( inx + 1 ) || 0 ) === 0x0A ) || (( this.flowString.charCodeAt(( 
            inx + ( this.flowString.charCodeAt( inx ) || 0 )) - 1 ) || 0 ) === 0x0A ))
          justified = false;
      }

      var rw = 0;
      var x = 0;

      if ( justified )
        rw = area[2] - area[0];
      else
        if ((( align & 0x4 ) === 0x4 ))
          x = ( area[2] - area[0]) - font.GetTextAdvance( rowString, 0, rowLen );
        else
          if ((( align & 0x2 ) === 0x2 ))
            x = ((( area[2] - area[0]) / 2 ) | 0 ) - (( font.GetTextAdvance( rowString, 
            0, rowLen ) / 2 ) | 0 );

      var col = font.GetTextColumnAtPosition( rowString, 0, rowLen, ( aPoint[0] 
        - area[0]) - x, rw );

      if ( col < 0 )
        col = 0;

      return [ col, row ];
    },

    // The method RowCol2Position() returns the baseline-position where the view 
    // will draw the sign for the row and column specified in the parameter aRowCol. 
    // This parameter contains in 'x' the number of the column and in 'y' the number 
    // of the row as it is displayed on the screen. The first row/column has the 
    // number 0, the second the number 1, and so far. The returned position is expressed 
    // in coordinates relative to the top-left corner of the view's @Owner. The 
    // method takes in account all properties which do affect the position and the 
    // alignment of the text, e.g. @Alignment, @Orientation, @ScrollOffset, @WrapText, 
    // etc.
    // If the specified row is negative, the method returns the position of the 
    // first sign in the first text row. If the specified row is not existing, the 
    // method returns the position behind the last sign in the last text row. If 
    // the column is negative, the method returns the position of the first sign 
    // in the corresponding row. If the row does not contain the specified column, 
    // the position behind the last sign in the row is returned.
    // This method is useful, if e.g. additional decoration should be drawn around 
    // the signs like a blinking caret in a text editor, etc.
    RowCol2Position : function( aRowCol )
    {
      var _tmp;

      if (( this.String === _app._EmptyString ) || !this.Font )
        return _0001;

      if ( !this.reparsed )
        this.reparseSlot( this );

      var noOfRows = this.flowString.charCodeAt( 0 ) || 0;
      var font = this.Font;
      var align = this.Alignment;
      var row = aRowCol[1];
      var col = aRowCol[0];

      if ( row >= noOfRows )
      {
        row = noOfRows - 1;
        col = this.flowString.length;
      }

      if ( row < 0 )
      {
        row = 0;
        col = 0;
      }

      var rowString = this.GetRowString( row );
      var rowLen = rowString.length;
      var area = this.GetContentArea();
      var justified = false;
      var leading = font.Leading;

      if ((( align & 0x80 ) === 0x80 ))
      {
        if ( this.IsBaseDirectionRTL())
          align = ( align & ~0x80 ) | 0x4;
        else
          align = ( align & ~0x80 ) | 0x1;
      }

      if ((( align & 0x40 ) === 0x40 ) && ( row < ( noOfRows - 1 )))
        justified = true;

      if (( justified && ( rowString.indexOf( String.fromCharCode( 0x20 ), 0 ) < 
          0 )) && ( rowString.indexOf( String.fromCharCode( 0xA0 ), 0 ) < 0 ))
        justified = false;

      if ( justified )
      {
        var inx = 1;
        var row2 = row;

        while ( row2 > 0 )
        {
          inx = inx + ( this.flowString.charCodeAt( inx ) || 0 );
          row2 = row2 - 1;
        }

        if ((( this.flowString.charCodeAt( inx + 1 ) || 0 ) === 0x0A ) || (( this.flowString.charCodeAt(( 
            inx + ( this.flowString.charCodeAt( inx ) || 0 )) - 1 ) || 0 ) === 0x0A ))
          justified = false;
      }

      var y = ( area[1] + ( row * (( font.Ascent + font.Descent ) + leading ))) 
        + font.Ascent;
      var rw = 0;
      var x = area[0];

      if ( justified )
        rw = area[2] - area[0];
      else
        if ((( align & 0x4 ) === 0x4 ))
          x = area[2] - font.GetTextAdvance( rowString, 0, rowLen );
        else
          if ((( align & 0x2 ) === 0x2 ))
            x = ( x + ((( area[2] - area[0]) / 2 ) | 0 )) - (( font.GetTextAdvance( 
            rowString, 0, rowLen ) / 2 ) | 0 );

      var pos = font.GetPositionAtTextColumn( rowString, 0, rowLen, col, rw );

      if ( pos < 0 )
        pos = 0;

      return [ x + pos, y ];
    },

    // The method GetRowString() returns the content of the row with the number 
    // specified in the parameter aRow. The first row has the number 0, the second 
    // 1, and so far. If the row is not available, an empty string is returned. 
    // Please note, if the view is configured with @EnableBidiText to process and 
    // display bi-directional text and the affected text row is reversed, the method 
    // returns the Bidi processed string as it appears on the screen.
    // All invisible signs, like the soft-hyphen sign, the '%' escape sign, the 
    // new-line sign, Bidi control codes as well as the superfluous space signs 
    // found eventually after a line wrap are removed from the returned string. 
    // In other words, the returned string corresponds to the text displayed in 
    // the row.
    GetRowString : function( aRow )
    {
      if (( this.String === _app._EmptyString ) || !this.Font )
        return _app._EmptyString;

      if ( !this.reparsed )
        this.reparseSlot( this );

      var noOfRows = this.flowString.charCodeAt( 0 ) || 0;
      var inx = 1;

      if (( !this.Font || ( aRow < 0 )) || ( aRow >= noOfRows ))
        return _app._EmptyString;

      while ( aRow > 0 )
      {
        inx = inx + ( this.flowString.charCodeAt( inx ) || 0 );
        aRow = aRow - 1;
      }

      var start = inx;
      var end = inx + ( this.flowString.charCodeAt( inx ) || 0 );
      var ch = 0x00;

      do
      {
        start = start + 1;
        ch = this.flowString.charCodeAt( start ) || 0;
      }
      while ((( ch === 0xFEFF ) || ( ch === 0x0A )) && ( start <= end ));

      do
      {
        end = end - 1;
        ch = this.flowString.charCodeAt( end ) || 0;
      }
      while ((( ch === 0xFEFF ) || ( ch === 0x0A )) && ( start <= end ));

      var rowString = _app._StringMiddle( this.flowString, start, ( end - start ) 
        + 1 );
      var inx1;

      for ( inx1 = rowString.indexOf( String.fromCharCode( 0xFEFF ), 0 ); inx1 >= 
           0; inx1 = rowString.indexOf( String.fromCharCode( 0xFEFF ), inx1 + 1 ))
      {
        var inx2 = inx1 + 1;

        while (( rowString.charCodeAt( inx2 ) || 0 ) === 0xFEFF )
          inx2 = inx2 + 1;

        rowString = _app._StringRemove( rowString, inx1, inx2 - inx1 );
      }

      return rowString;
    },

    // The method GetContentArea() returns the position and the size of an area 
    // where the view will show the text. This area is expressed in coordinates 
    // relative to the top-left corner of the view's @Owner. The method takes in 
    // account all properties which do affect the position and the alignment of 
    // the text, e.g. @Alignment, @Orientation, @ScrollOffset, @WrapText, etc.
    GetContentArea : function()
    {
      var _tmp;

      if (( this.String === _app._EmptyString ) || !this.Font )
        return _0002;

      if ( !this.reparsed )
        this.reparseSlot( this );

      if ( this.flowString === _app._EmptyString )
        return _0002;

      var leading = this.Font.Leading;
      var rh = ( this.Font.Ascent + this.Font.Descent ) + this.Font.Leading;

      if ( _app._IsEqualPoint( this.textSize, _0001 ))
        this.textSize = [ this.Font.GetFlowTextAdvance( this.flowString ), this.textSize[1]];

      this.textSize = [ this.textSize[0], (( this.flowString.charCodeAt( 0 ) || 
      0 ) * rh ) - leading ];

      var align = this.Alignment;
      var bounds = this.Bounds;
      var width = bounds[2] - bounds[0];
      var height = bounds[3] - bounds[1];
      var rd = [ 0, 0, width, height ];
      var rs = [].concat( rd.slice(0,2), _app._MovePointPos( rd.slice(0,2), this.textSize ));

      if ((( align & 0x80 ) === 0x80 ))
      {
        if ( this.IsBaseDirectionRTL())
          align = ( align & ~0x80 ) | 0x4;
        else
          align = ( align & ~0x80 ) | 0x1;
      }

      if ((( align & 0x40 ) === 0x40 ))
      {
        var maxWidth;

        maxWidth = width;

        if ( maxWidth < 0 )
          maxWidth = 0;

        if ( maxWidth > ( rs[2] - rs[0]))
          rs = _app._SetRectW( rs, maxWidth );
      }

      if (( rs[2] - rs[0]) !== ( rd[2] - rd[0]))
      {
        if ((( align & 0x4 ) === 0x4 ))
          rs = _app._SetRectX( rs, rd[2] - ( rs[2] - rs[0]));
        else
          if ((( align & 0x2 ) === 0x2 ))
            rs = _app._SetRectX( rs, ( rd[0] + ((( rd[2] - rd[0]) / 2 ) | 0 )) - 
            ((( rs[2] - rs[0]) / 2 ) | 0 ));
      }

      if (( rs[3] - rs[1]) !== ( rd[3] - rd[1]))
      {
        if ((( align & 0x20 ) === 0x20 ))
          rs = _app._SetRectY( rs, rd[3] - ( rs[3] - rs[1]));
        else
          if ((( align & 0x10 ) === 0x10 ))
            rs = _app._SetRectY( rs, ( rd[1] + ((( rd[3] - rd[1]) / 2 ) | 0 )) - 
            ((( rs[3] - rs[1]) / 2 ) | 0 ));
      }

      rs = _app._MoveRectPos( rs, bounds.slice(0,2));

      return _app._MoveRectPos( rs, this.ScrollOffset );
    },

    // Initializer for the class 'Views::Text'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.RectView._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Text;
    },

    // Deintializer for the class 'Views::Text'
    _Done : function()
    {
      // Call the user defined destructor
      this.Done();

      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Core.RectView;

      // Finally continue the deinitialization in the super class
      _app.Core.RectView._Done.call( this );
    },

    // Garbage Collector method for the class 'Views::Text'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.RectView._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.SlideHandler ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Font ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnUpdate ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Views::Text"
  };

  // The class Views::WarpView provides the base functionality for views able to 
  // show images scaled and rotated in the 2D/3D space. First of all, Embedded Wizard 
  // is not a 3D GUI development tool! Its lightweight 3D functionality is limited 
  // to the perspectively correct projection of an image onto a quad (four corners 
  // polygon). Depending on this polygon's shape, different kinds of transformations 
  // are possible, e.g. scaling, rotation or mirroring. The polygon is determined 
  // by the four corners @Point1, @Point2, @Point3 and @Point4. Moving these corners 
  // is thus sufficient to determine the desired transformation.
  // More sophisticated way to control the transformations is provided by the methods 
  // @RotateAndScale() and @Warp3D(). These methods derive the polygon coordinates 
  // automatically from the given parameters.
  // The visibility of the view is controlled by the properties @Visible, @AlphaBlended, 
  // and @Embedded. In particular the property @Embedded can determine whether the 
  // corresponding view is limited (== embedded) to the boundary of a sibling Core::Outline 
  // view or not. The embedding of views within a Core::Outline allows a kind of 
  // sub-groups within the GUI component itself. Very useful for any kind of scrollable 
  // lists, menus, etc.
  // The class Views::WarpView doesn't define any particular appearance. It exists 
  // as base for derived view classes like the Views::WarpImage and Views::WarpGroup.
  _unit.WarpView =
  {
    bitmapSize : _app._NullPoint,
    vertices : _app._NewArray( 4, 3, 0, null ),

    // The property 'SourceArea' determines the area of the source image to project 
    // onto the destination polygon. The area is expressed in coordinates relative 
    // to the top-left corner of the source image. If SrcArea is <0,0,0,0>, the 
    // entire image is used.
    SourceArea : _app._NullRect,
    newUpdateCase : 0,
    oldUpdateCase : 0,

    // The property 'Quality' determines whether the image projection should be 
    // performed with an additional bi-linear filter or not. The usage of the filter 
    // may produce smooth outputs. Without the filter the projected image may appear 
    // with ugly steps. Depending on the underlying graphics system, the filter 
    // may impact the resulting performance. Therefore it's up to you to decide 
    // which part of the GUI should appear with the higher quality. To activate 
    // the filter assign 'true' to this property.
    Quality : true,

    // Implementation of the Chora method : 'Views::WarpView.OnSetPoint4()'
    OnSetPoint4 : function( value )
    {
      if ( _app._IsEqualPoint( value, this.Point4 ))
        return;

      _app.Core.QuadView.OnSetPoint4.call( this, value );
      this.vertices.Set( 3, 0, value[0]);
      this.vertices.Set( 3, 1, value[1]);
      this.vertices.Set( 3, 2, 1.000000 );
      this.newUpdateCase = 0x45;
      _app._PostSignal([ this, this.__update ], this );
    },

    // Implementation of the Chora method : 'Views::WarpView.OnSetPoint3()'
    OnSetPoint3 : function( value )
    {
      if ( _app._IsEqualPoint( value, this.Point3 ))
        return;

      _app.Core.QuadView.OnSetPoint3.call( this, value );
      this.vertices.Set( 2, 0, value[0]);
      this.vertices.Set( 2, 1, value[1]);
      this.vertices.Set( 2, 2, 1.000000 );
      this.newUpdateCase = 0x45;
      _app._PostSignal([ this, this.__update ], this );
    },

    // Implementation of the Chora method : 'Views::WarpView.OnSetPoint2()'
    OnSetPoint2 : function( value )
    {
      if ( _app._IsEqualPoint( value, this.Point2 ))
        return;

      _app.Core.QuadView.OnSetPoint2.call( this, value );
      this.vertices.Set( 1, 0, value[0]);
      this.vertices.Set( 1, 1, value[1]);
      this.vertices.Set( 1, 2, 1.000000 );
      this.newUpdateCase = 0x45;
      _app._PostSignal([ this, this.__update ], this );
    },

    // Implementation of the Chora method : 'Views::WarpView.OnSetPoint1()'
    OnSetPoint1 : function( value )
    {
      if ( _app._IsEqualPoint( value, this.Point1 ))
        return;

      _app.Core.QuadView.OnSetPoint1.call( this, value );
      this.vertices.Set( 0, 0, value[0]);
      this.vertices.Set( 0, 1, value[1]);
      this.vertices.Set( 0, 2, 1.000000 );
      this.newUpdateCase = 0x45;
      _app._PostSignal([ this, this.__update ], this );
    },

    // Implementation of the Chora method : 'Views::WarpView.calculateLight()'
    calculateLight : function()
    {
      return;
    },

    // Implementation of the Chora method : 'Views::WarpView.update()'
    update : function( sender )
    {
      var _tmp;

      if ( this.newUpdateCase === 0x00 )
        return;

      if ( this.newUpdateCase === 0x45 )
      {
        var m = _app._NewObject( _app.Graphics.WarpMatrix, 0 );

        m = m.DeriveFromQuad( this.vertices.Get( 0, 0 ), this.vertices.Get( 0, 1 ), 
        this.vertices.Get( 1, 0 ), this.vertices.Get( 1, 1 ), this.vertices.Get( 
        2, 0 ), this.vertices.Get( 2, 1 ), this.vertices.Get( 3, 0 ), this.vertices.Get( 
        3, 1 ));

        if ( !!m )
        {
          m.CalculateZ( 0.000000, 0.000000 );
          this.vertices.Set( 0, 2, m.Z * 240.000000 );
          m.CalculateZ( 1.000000, 0.000000 );
          this.vertices.Set( 1, 2, m.Z * 240.000000 );
          m.CalculateZ( 1.000000, 1.000000 );
          this.vertices.Set( 2, 2, m.Z * 240.000000 );
          m.CalculateZ( 0.000000, 1.000000 );
          this.vertices.Set( 3, 2, m.Z * 240.000000 );
        }

        this.calculateLight();
      }

      this.oldUpdateCase = this.newUpdateCase;
      this.newUpdateCase = 0x00;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());
    },

    // Wrapper for the slot method : 'Views::WarpView.update'
    __update : function(s){ this.update(s);},

    // Implementation of the Chora method : 'Views::WarpView.OnSetQuality()'
    OnSetQuality : function( value )
    {
      var _tmp;

      if ( value === this.Quality )
        return;

      this.Quality = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());
    },

    // Implementation of the Chora method : 'Views::WarpView.OnSetSourceArea()'
    OnSetSourceArea : function( value )
    {
      var _tmp;

      if ( _app._IsEqualRect( value, this.SourceArea ))
        return;

      this.SourceArea = value;

      if (((( this.oldUpdateCase === 0x45 ) && ( this.newUpdateCase === 0x00 )) 
          && !!this.Owner ) && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      if (( this.oldUpdateCase !== 0x45 ) && ( this.newUpdateCase === 0x00 ))
      {
        this.newUpdateCase = this.oldUpdateCase;
        _app._PostSignal([ this, this.__update ], this );
      }
    },

    // Initializer for the class 'Views::WarpView'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.QuadView._Init.call( this, aArg );

      // Then create and initialize all new arrays ...
      ( this.vertices = []).__proto__ = _unit.WarpView.vertices;

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.WarpView;

      // ... and initialize objects, variables, properties, etc.
      this.viewState = 0x3;
    },

    // Internal variables of this class.
    _className : "Views::WarpView"
  };

  // The class Views::WarpGroup provides a kind of view able to show the aspect 
  // of a foreign GUI component scaled and rotated in the 2D/3D space. In this manner 
  // several warped copies of the component can be shown on the screen. Even the 
  // aspect of an invisible component. This is very useful for fancy fade or mirror 
  // effects. To work, the component has to be buffered. For this purpose set its 
  // property Buffered to the value 'true'. Not buffered components will not appear 
  // in this view. The GUI component to show its aspect is referred by the property 
  // @Group. 
  // First of all, Embedded Wizard is not a 3D GUI development tool! Its lightweight 
  // 3D functionality is limited to the perspectively correct projection of an image 
  // onto a quad (four corners polygon). Depending on this polygon's shape, different 
  // kinds of transformations are possible, e.g. scaling, rotation or mirroring. 
  // The polygon is determined by the four corners @Point1, @Point2, @Point3 and 
  // @Point4. Moving these corners is thus sufficient to determine the desired transformation.
  // More sophisticated way to control the transformations is provided by the methods 
  // @RotateAndScale() and @Warp3D(). These methods derive the polygon coordinates 
  // automatically from the given parameters.
  // The properties @Opacity, @Opacity1, @Opacity2, @Opacity3 and @Opacity4 can 
  // be used to modulate the transparency. For each polygon corner different opacity 
  // can be set, so the component's aspect can be shown with fancy opacity gradients. 
  // This view is also able to relay touch events to the associated GUI component. 
  // This is determined by the property @RelayCursorEvents. 
  // The visibility of the view is controlled by the properties @Visible, @AlphaBlended 
  // and @Embedded. In particular the property @Embedded can determine whether the 
  // corresponding view is limited (== embedded) to the boundary of a sibling Core::Outline 
  // view or not. The embedding of views within a Core::Outline allows a kind of 
  // sub-groups within the GUI component itself. Very useful for any kind of scrollable 
  // lists, menus, etc.
  _unit.WarpGroup =
  {
    cursorTargetView : null,
    bitmap : null,

    // The property 'Group' refers to a component whose aspect should be displayed 
    // within this view. In this manner several copies of a component can be shown 
    // on the screen. This is useful for fancy fade or mirror effects. Don't forget 
    // to activate the Buffered property of the component. Not buffered components 
    // can't be shown by this view.
    // Depending on the property @SourceArea the entire component or only its section 
    // is shown.
    Group : null,
    i11 : 1.000000,
    i12 : 0,
    i13 : 0,
    i21 : 0,
    i22 : 1.000000,
    i23 : 0,
    i31 : 0,
    i32 : 0,
    i33 : 1.000000,

    // The property 'Opacity' controls the opacity of the entire view. Thus this 
    // property is useful if no gradients are desired. This property can take values 
    // in range of 0 .. 255. If the value is 255, the view will appear with its 
    // full opacity. The value equal to zero results in a fully transparent view. 
    // Other values in the range 1 .. 254 show a semitransparent views. The resulting 
    // opacity can additionally be modulated by the values specified in the properties 
    // @Opacity1, @Opacity2, @Opacity3 and @Opacity4.
    Opacity : 255,
    invMatrixValid : false,

    // The method Draw() is invoked automatically if parts of the view should be 
    // redrawn on the screen. This can occur when e.g. the view has been moved or 
    // the appearance of the view has changed before.
    // Draw() is invoked automatically by the framework, you never will need to 
    // invoke this method directly. However you can request an invocation of this 
    // method by calling the method InvalidateArea() of the views @Owner. Usually 
    // this is also unnecessary unless you are developing your own view.
    // The passed parameters determine the drawing destination aCanvas and the area 
    // to redraw aClip in the coordinate space of the canvas. The parameter aOffset 
    // contains the displacement between the origin of the views owner and the origin 
    // of the canvas. You will need it to convert views coordinates into these of 
    // the canvas.
    // The parameter aOpacity contains the opacity descended from this view's @Owner. 
    // It lies in range 0 .. 255. If the view implements its own 'Opacity', 'Color', 
    // etc. properties, the Draw() method should calculate the resulting real opacity 
    // by mixing the values of these properties with the one passed in aOpacity 
    // parameter.
    // The parameter aBlend contains the blending mode descended from this view's 
    // @Owner. It determines, whether the view should be drawn with alpha-blending 
    // active or not. If aBlend is false, the outputs of the view should overwrite 
    // the corresponding pixel in the drawing destination aCanvas. If aBlend is 
    // true, the outputs should be mixed with the pixel already stored in aCanvas. 
    // For this purpose all Graphics Engine functions provide a parameter to specify 
    // the mode for the respective drawing operation. If the view implements its 
    // own 'Blend' property, the Draw() method should calculate the resulting real 
    // blend mode by using logical AND operation of the value of the property and 
    // the one passed in aBlend parameter.
    Draw : function( aCanvas, aClip, aOffset, aOpacity, aBlend )
    {
      var _tmp;

      if ( !this.bitmap )
        return;

      this.bitmap.Update();

      var ofsX = aOffset[0];
      var ofsY = aOffset[1];
      var area = _app._IntersectRect2( this.SourceArea, [].concat( _0001, this.bitmapSize ));

      aBlend = aBlend && (( this.viewState & 0x2 ) === 0x2 );
      aOpacity = aOpacity + 1;

      var o1;
      var o2;
      var o3;
      var o4;
      var o = this.Opacity;

      o1 = o2 = o3 = o4 = o;

      var c1 = 255 | ( 255 << 8 ) | ( 255 << 16 ) | (((( aOpacity * o1 ) >> 8 ) 
        & 0xFF ) << 24 );
      var c2 = 255 | ( 255 << 8 ) | ( 255 << 16 ) | (((( aOpacity * o2 ) >> 8 ) 
        & 0xFF ) << 24 );
      var c3 = 255 | ( 255 << 8 ) | ( 255 << 16 ) | (((( aOpacity * o3 ) >> 8 ) 
        & 0xFF ) << 24 );
      var c4 = 255 | ( 255 << 8 ) | ( 255 << 16 ) | (((( aOpacity * o4 ) >> 8 ) 
        & 0xFF ) << 24 );

      aClip = _app._IntersectRect2( aClip, _app._MoveRectPos( _0002, aOffset ));
      aCanvas.WarpBitmap( aClip, this.bitmap, 0, this.vertices.Get( 0, 0 ) + ofsX, 
      this.vertices.Get( 0, 1 ) + ofsY, this.vertices.Get( 0, 2 ), this.vertices.Get( 
      1, 0 ) + ofsX, this.vertices.Get( 1, 1 ) + ofsY, this.vertices.Get( 1, 2 ), 
      this.vertices.Get( 2, 0 ) + ofsX, this.vertices.Get( 2, 1 ) + ofsY, this.vertices.Get( 
      2, 2 ), this.vertices.Get( 3, 0 ) + ofsX, this.vertices.Get( 3, 1 ) + ofsY, 
      this.vertices.Get( 3, 2 ), area, c1, c2, c3, c4, aBlend, this.Quality );
    },

    // The method HandleEvent() is invoked automatically if the view has received 
    // an event. For example, touching the view on the touch screen can cause the 
    // view to receive a Core::CursorEvent event. Within this method the view can 
    // evaluate the event and react to it.
    // Whether the event has been handled by the view or not is determined by the 
    // return value. To sign an event as handled HandleEvent() should return a valid 
    // object (e.g. 'this'). If the event has not been handled, 'null' should be 
    // returned.
    // Depending on the kind of the event, the framework can continue dispatching 
    // of still unhandled events. For example, keyboard events (Core::KeyEvent class) 
    // are automatically delivered to the superior @Owner of the receiver view if 
    // this view has ignored the event.
    // HandleEvent() is invoked automatically by the framework, so you never should 
    // need to invoke it directly. However you can prepare and post new events by 
    // using the methods DispatchEvent() and BroadcastEvent() of the application 
    // class Core::Root.
    HandleEvent : function( aEvent )
    {
      if ( !this.Group || !this.cursorTargetView )
        return null;

      var event1 = ( _app.Core.CursorEvent.isPrototypeOf( aEvent )? aEvent : null );
      var event2 = ( _app.Core.DragEvent.isPrototypeOf( aEvent )? aEvent : null );

      if ( !event1 && !event2 )
        return null;

      var offset = _0001;
      var grp = this.cursorTargetView.Owner;

      while ( !!grp && ( grp !== this.Group ))
      {
        offset = _app._MovePointNeg( offset, grp.Bounds.slice(0,2));
        grp = grp.Owner;
      }

      var view = this.cursorTargetView;

      if ( !!event1 && !event1.Down )
        this.cursorTargetView = null;

      if ( !!event1 )
      {
        event1.CurrentPos = _app._MovePointPos( this.mapPosition( event1.CurrentPos ), 
        offset );
        event1.HittingPos = _app._MovePointPos( this.mapPosition( event1.HittingPos ), 
        offset );

        return view.HandleEvent( event1 );
      }

      if ( !!event2 )
      {
        var oldPos = _app._MovePointPos( this.mapPosition( _app._MovePointNeg( event2.CurrentPos, 
          event2.Offset )), offset );

        event2.CurrentPos = _app._MovePointPos( this.mapPosition( event2.CurrentPos ), 
        offset );
        event2.HittingPos = _app._MovePointPos( this.mapPosition( event2.HittingPos ), 
        offset );
        event2.Offset = _app._MovePointNeg( event2.CurrentPos, oldPos );

        return view.HandleEvent( event2 );
      }

      return _unit.WarpView.HandleEvent.call( this, aEvent );
    },

    // The method CursorHitTest() is invoked automatically in order to determine 
    // whether the view is interested in the receipt of cursor events or not. This 
    // method will be invoked immediately after the user has tapped the visible 
    // area of the view. If the view is not interested in the cursor event, the 
    // framework repeats this procedure for the next behind view until a willing 
    // view has been found or all views are evaluated.
    // In the implementation of the method the view can evaluate the passed aArea 
    // parameter. It determines the place where the user has tapped the view with 
    // his fingertip expressed in the coordinates of the views @Owner. The method 
    // can test e.g. whether the tapped area does intersect any touchable areas 
    // within the view, etc. The affected finger is identified in the parameter 
    // aFinger. The first finger (or the first mouse device button) has the number 
    // 0.
    // The parameter aStrikeCount determines how many times the same area has been 
    // tapped in series. This is useful to detect series of multiple touches, e.g. 
    // in case of the double click, aStrikeCount == 2.
    // The parameter aDedicatedView, if it is not 'null', restricts the event to 
    // be handled by this view only. If aDedicatedView == null, no special restriction 
    // exists.
    // This method is also invoked if during an existing grab cycle the current 
    // target view has decided to resign and deflect the cursor events to another 
    // view. This is usually the case after the user has performed a gesture the 
    // current target view is not interested to process. Thereupon, the system looks 
    // for another view willing to take over the cursor event processing after the 
    // performed gesture. Which gesture has caused the operation, is specified in 
    // the parameter aRetargetReason.
    // If the view is willing to process the event, the method should create, initialize 
    // and return a new Core::CursorHit object. This object identify the willing 
    // view. Otherwise the method should return 'null'.
    // CursorHitTest() is invoked automatically by the framework, so you never should 
    // need to invoke it directly. This method is predetermined for the hit-test 
    // only. The proper processing of events should take place in the @HandleEvent() 
    // method by reacting to Core::CursorEvent and Core::DragEvent events.
    CursorHitTest : function( aArea, aFinger, aStrikeCount, aDedicatedView, aRetargetReason )
    {
      var _tmp;

      if ( !this.Group || !(( this.Group.viewState & 0x18 ) === 0x18 ))
        return null;

      var pos = _app._GetRectCenter( aArea );

      pos = this.mapPosition( pos );

      var srcArea = _app._IntersectRect2( this.SourceArea, [].concat( _0001, this.bitmapSize ));

      if ( !_app._IsPointInRect( srcArea, pos ))
        return null;

      var hit = this.Group.CursorHitTest( _app._MoveRectPos( _app._MoveRectPos([ 
        0, 0, aArea[2] - aArea[0], aArea[3] - aArea[1]], pos ), this.Group.Bounds.slice(0,2)), 
        aFinger, aStrikeCount, aDedicatedView, aRetargetReason );

      if ( !!hit )
        this.cursorTargetView = hit.View;
      else
        this.cursorTargetView = null;

      if ( !!this.cursorTargetView )
        return _app._NewObject( _app.Core.CursorHit, 0 ).Initialize( this, _0001 );

      return null;
    },

    // Implementation of the Chora method : 'Views::WarpGroup.update()'
    update : function( sender )
    {
      _unit.WarpView.update.call( this, sender );
      this.invMatrixValid = false;
    },

    // Implementation of the Chora method : 'Views::WarpGroup.updateInvMatrix()'
    updateInvMatrix : function()
    {
      var x1 = this.vertices.Get( 0, 0 );
      var y1 = this.vertices.Get( 0, 1 );
      var x2 = this.vertices.Get( 1, 0 );
      var y2 = this.vertices.Get( 1, 1 );
      var x3 = this.vertices.Get( 2, 0 );
      var y3 = this.vertices.Get( 2, 1 );
      var x4 = this.vertices.Get( 3, 0 );
      var y4 = this.vertices.Get( 3, 1 );
      var deltaX1 = x2 - x3;
      var deltaY1 = y2 - y3;
      var deltaX2 = x4 - x3;
      var deltaY2 = y4 - y3;
      var sumX = (( x1 - x2 ) + x3 ) - x4;
      var sumY = (( y1 - y2 ) + y3 ) - y4;
      var det = ( deltaX1 * deltaY2 ) - ( deltaY1 * deltaX2 );

      if ( det === 0.000000 )
        return;

      var g = (( sumX * deltaY2 ) - ( sumY * deltaX2 )) / det;
      var h = (( deltaX1 * sumY ) - ( deltaY1 * sumX )) / det;
      var a = ( x2 - x1 ) + ( g * x2 );
      var b = ( x4 - x1 ) + ( h * x4 );
      var c = x1;
      var d = ( y2 - y1 ) + ( g * y2 );
      var e = ( y4 - y1 ) + ( h * y4 );
      var f = y1;

      this.i11 = e - ( f * h );
      this.i12 = ( c * h ) - b;
      this.i13 = ( b * f ) - ( c * e );
      this.i21 = ( f * g ) - d;
      this.i22 = a - ( c * g );
      this.i23 = ( c * d ) - ( a * f );
      this.i31 = ( d * h ) - ( e * g );
      this.i32 = ( b * g ) - ( a * h );
      this.i33 = ( a * e ) - ( b * d );
      this.invMatrixValid = true;
    },

    // Implementation of the Chora method : 'Views::WarpGroup.mapPosition()'
    mapPosition : function( aPos )
    {
      var _tmp;

      if ( !this.invMatrixValid )
        this.updateInvMatrix();

      var xd = aPos[0];
      var yd = aPos[1];
      var xs = (( xd * this.i11 ) + ( yd * this.i12 )) + this.i13;
      var ys = (( xd * this.i21 ) + ( yd * this.i22 )) + this.i23;
      var qs = (( xd * this.i31 ) + ( yd * this.i32 )) + this.i33;

      if ( qs !== 0.000000 )
      {
        xs = xs / qs;
        ys = ys / qs;
      }

      var srcArea = _app._IntersectRect2( this.SourceArea, [].concat( _0001, this.bitmapSize ));

      xs = xs * ( srcArea[2] - srcArea[0]);
      ys = ys * ( srcArea[3] - srcArea[1]);

      return _app._MovePointPos([ xs | 0, ys | 0 ], srcArea.slice(0,2));
    },

    // Implementation of the Chora method : 'Views::WarpGroup.observerSlot()'
    observerSlot : function( sender )
    {
      var _tmp;
      var oldBitmapSize = this.bitmapSize;

      if ( !!this.Group )
        this.bitmap = this.Group.buffer;
      else
        this.bitmap = null;

      if ( !!this.bitmap )
        this.bitmapSize = this.bitmap.FrameSize;
      else
        this.bitmapSize = _0001;

      if ((( _app._IsEqualPoint( oldBitmapSize, this.bitmapSize ) || (( this.oldUpdateCase 
          === 0x45 ) && ( this.newUpdateCase === 0x00 ))) && !!this.Owner ) && (( 
          this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      if ((( this.oldUpdateCase !== 0x45 ) && ( this.newUpdateCase === 0x00 )) && 
          !_app._IsEqualPoint( oldBitmapSize, this.bitmapSize ))
      {
        this.newUpdateCase = this.oldUpdateCase;
        _app._PostSignal([ this, this.__update ], this );
      }
    },

    // Implementation of the Chora method : 'Views::WarpGroup.OnSetOpacity()'
    OnSetOpacity : function( value )
    {
      var _tmp;

      if ( value === this.Opacity )
        return;

      this.Opacity = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());
    },

    // Implementation of the Chora method : 'Views::WarpGroup.OnSetGroup()'
    OnSetGroup : function( value )
    {
      if ( value === this.Group )
        return;

      if ( !!value && ( value === this.Owner ))
        throw new Error(  _0006  );

      if ( !!this.Group )
      {
        _app._DetachObjObserver([ this, this.observerSlot ], this.Group, 0 );
        this.bitmap = null;
      }

      this.Group = value;

      if ( !!value )
      {
        _app._AttachObjObserver([ this, this.observerSlot ], value, 0 );
        this.bitmap = value.buffer;
      }

      this.observerSlot( this );
    },

    // Initializer for the class 'Views::WarpGroup'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.WarpView._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.WarpGroup;
    },

    // Garbage Collector method for the class 'Views::WarpGroup'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.WarpView._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.cursorTargetView ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.bitmap ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Group ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Views::WarpGroup"
  };

  // The definition Views::TextAlignment determines the set of constraints to apply 
  // on text rows and blocks if their size differ from the size of the view where 
  // the text is shown. Depending on the active constraints the text rows can be 
  // aligned horizontally and text blocks vertically.
  _unit.TextAlignment =
  {
    AlignHorzLeft : 0x1,
    AlignHorzCenter : 0x2,
    AlignHorzRight : 0x4,
    AlignVertTop : 0x8,
    AlignVertCenter : 0x10,
    AlignVertBottom : 0x20,
    AlignHorzJustified : 0x40,
    AlignHorzAuto : 0x80
  };

  // The definition Views::Orientation determines the possible options to control 
  // the orientation of the content displayed in the Views::Image, Views::Group 
  // and Views::Text views. Depending on the selected option the view displays the 
  // content rotated.
  _unit.Orientation =
  {
    Normal : 0,
    Rotated_90 : 1,
    Rotated_180 : 2,
    Rotated_270 : 3
  };

  // Function to initialize the application.
  _unit._Init = function()
  {
    _unit.Line.__proto__ = _app.Core.LineView;
    _unit.Rectangle.__proto__ = _app.Core.RectView;
    _unit.Frame.__proto__ = _app.Core.RectView;
    _unit.Image.__proto__ = _app.Core.RectView;
    _unit.Text.__proto__ = _app.Core.RectView;
    _unit.WarpView.__proto__ = _app.Core.QuadView;
    _unit.WarpGroup.__proto__ = _unit.WarpView;
  };

  // Function to re-initialize global objects after language selection.
  _unit._ReInit = function()
  {
  };

  // Function to reclaim memory occupied by unused objects.
  _unit._Reclaim = function( aCycle )
  {
  };

  return _unit;
})();

/* Embedded Wizard */