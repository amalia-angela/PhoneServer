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
if ( EmWiApp.Graphics )
  throw new Error( "The unit file 'Graphics.js' included twice!" );

// Create the unit object including all members of the unit.
EmWiApp.Graphics = (function()
{
  var _app  = EmWiApp;
  var _unit = {};

  // Constant values used in this 'JavaScript' module only.
  var _0000 = [ 0, 0 ];
  var _0001 = "Can not resize explicitly attached graphics engine bitmaps";
  var _0002 = [ 0, 0, 0, 0 ];
  var _0003 = "No graphics engine bitmap attached to this canvas";
  var _0004 = "The canvas is already initialized with a graphics engine bitmap";
  var _0005 = "WarpBitmap() operation has been omitted due to the resulting area " +
    "being wider or higher than 4069 pixel.";
  var _0006 = "ScaleBitmap() operation has been omitted due to the resulting area " +
    "being wider or higher than 4069 pixel.";
  var _0007 = "DrawThickLine() operation has been omitted due to the resulting area " +
    "being wider or higher than 4069 pixel.";
  var _0008 = [ 1, 1 ];
  var _0009 = [ 2, 2 ];

  // The class Graphics::Canvas provides a drawing destination for all graphics 
  // operations. It is like a bitmap which can be modified by calling the methods 
  // of this canvas class. For example, the method @FillRectangle() fills an area 
  // of the canvas with a color or a color gradient. More sophisticated methods 
  // allow text output, scaling or 2D/3D warping of images. The functionality of 
  // this canvas class corresponds to the of the underlying Graphics Engine.
  // Since the canvas inherits from the Resources::Bitmap class it can be handled 
  // as an ordinary bitmap. It can e.g. be assigned to a Views::Image view and thus 
  // be displayed on the screen.
  _unit.Canvas =
  {
    OnDraw : null,
    InvalidArea : _app._NullRect,
    DstFrameNr : 0,
    attached : false,

    // Implementation of the Chora method : 'Graphics::Canvas.Done()'
    Done : function()
    {
      if ( this.attached )
        this.DetachBitmap();
    },

    // Implementation of the Chora method : 'Graphics::Canvas.Init()'
    Init : function( aArg )
    {
      this.Mutable = true;
    },

    // Implementation of the Chora method : 'Graphics::Canvas.OnSetFrameSize()'
    OnSetFrameSize : function( value )
    {
      if (( value[0] <= 0 ) || ( value[1] <= 0 ))
        value = _0000;

      if ( _app._IsEqualPoint( value, this.FrameSize ))
        return;

      if ( this.attached )
        throw new Error(  _0001  );

      this.FrameSize = value;
      this.Animated = ((( this.FrameSize[0] > 0 ) && ( this.FrameSize[1] > 0 )) 
      && ( this.FrameDelay > 0 )) && ( this.NoOfFrames > 1 );

      if ( !this.bitmap )
        return;

      var handle = this.bitmap;

      _app._FreeBitmap( handle );
      this.bitmap = null;
    },

    // Implementation of the Chora method : 'Graphics::Canvas.Update()'
    Update : function()
    {
      var _tmp;

      if (( !this.bitmap && ( this.FrameSize[0] > 0 )) && ( this.FrameSize[1] > 
          0 ))
      {
        var frameSize = this.FrameSize;
        var noOfFrames = this.NoOfFrames;
        var frameDelay = this.FrameDelay;
        var handle = null;

        {
          handle = _app._CreateBitmap( _app._PIXEL_FORMAT_NATIVE, frameSize, 
                                            frameDelay, noOfFrames );
        }
        this.bitmap = handle;

        if ( !this.bitmap )
        {
          this.FrameSize = _0000;
          this.FrameDelay = 0;
          this.NoOfFrames = 1;
        }

        this.InvalidArea = [].concat( _0000, this.FrameSize );

        if ( !!this.bitmap )
        {
          var dstFrameNr = this.DstFrameNr;

          for ( this.DstFrameNr = this.NoOfFrames - 1; this.DstFrameNr >= 0; this.DstFrameNr-- )
            this.FillRectangle( this.InvalidArea, this.InvalidArea, 0x00000000, 
            0x00000000, 0x00000000, 0x00000000, false );

          this.DstFrameNr = dstFrameNr;
        }
      }

      if ( !((( _tmp = this.InvalidArea )[0] >= _tmp[2]) || ( _tmp[1] >= _tmp[3])))
      {
        if (( this.FrameSize[0] > 0 ) && ( this.FrameSize[1] > 0 ))
          ( _tmp = this.OnDraw )? _tmp[1].call( _tmp[0], this ) : null;

        this.InvalidArea = _0002;
      }
    },

    // The method DetachBitmap() exists for the integration purpose with the underlying 
    // target system. You will never need to invoke this method directly from your 
    // GUI application. The method is invoked after the screen update is finished 
    // and the canvas object should be detached from the framebuffer.
    DetachBitmap : function()
    {
      if ( !this.attached )
        throw new Error(  _0003  );

      this.bitmap = null;
      this.attached = false;
      this.FrameSize = _0000;
      this.FrameDelay = 0;
      this.NoOfFrames = 1;
      this.Animated = false;

      return this;
    },

    // The method AttachBitmap() exists for the integration purpose with the underlying 
    // target system. You will never need to invoke this method directly from your 
    // GUI application. The method is invoked at the beginning of the screen update.
    // The method connects the canvas object with the framebuffer.
    AttachBitmap : function( aBitmap )
    {
      if ( !!this.bitmap )
        throw new Error(  _0004  );

      if ( !aBitmap )
        return this;

      this.bitmap = aBitmap;
      this.attached = true;

      var noOfFrames = 1;
      var frameSize = _0000;
      var frameDelay = 0;

      {
        noOfFrames = aBitmap.NoOfFrames;
        frameSize  = aBitmap.FrameSize;
        frameDelay = aBitmap.FrameDelay;
      }
      this.NoOfFrames = noOfFrames;
      this.FrameSize = frameSize;
      this.FrameDelay = frameDelay;
      this.Animated = ( this.FrameDelay > 0 ) && ( this.NoOfFrames > 1 );

      return this;
    },

    // The method DrawText() draws the text row passed in the parameter aString 
    // into the canvas. The font to draw the text is passed in the parameter aFont. 
    // The parameter aOffset determines within aString the sign to start the drawing 
    // operation. If aOffset is zero, the operation starts with the first sign. 
    // The parameter aCount determines the max. number of following sigs to draw. 
    // If aCount is -1, all signs until the end of the string are drawn. 
    // The area to draw the text is determined by the parameter aDstRect. The parameter 
    // aOrientation controls the rotation of the text. The parameter aSrcPos determines 
    // the base line position of the text relative to a corner of aDstRect, which 
    // by taking in account the specified text orientation serves as the origin 
    // for the draw operation. For example, if the parameter aOrientation is Views::Orientation.Rotated_270, 
    // the text is drawn aSrcPos pixel relative to the bottom-right corner of aDstRect. 
    // The parameter aMinWidth determines the min. width in pixel of the drawn text 
    // row regardless of the specified rotation. If necessary the space signs within 
    // the text will be stretched to fill this area. The parameters aColorTL, aColorTR, 
    // aColorBL, aColorBR determine the colors at the corresponding corners of the 
    // aDstRect area.
    // The parameter aClip limits the drawing operation. Pixel lying outside this 
    // area remain unchanged. The last aBlend parameter controls the mode how drawn 
    // pixel are combined with the pixel already existing in the destination bitmap. 
    // If aBlend is 'true', the drawn pixel are alpha-blended with the background, 
    // otherwise the drawn pixel will overwrite the old content.
    DrawText : function( aClip, aFont, aString, aOffset, aCount, aDstRect, aSrcPos, 
      aMinWidth, aOrientation, aColorTL, aColorTR, aColorBR, aColorBL, aBlend )
    {
      if ( !this.bitmap )
        this.Update();

      if ( !this.bitmap )
        return;

      if ( aOffset < 0 )
        aOffset = 0;

      if (( !aFont || !aFont.font ) || (( aOffset > 0 ) && ( aOffset >= aString.length )))
        return;

      var orient = 0;

      if ( aOrientation === 1 )
        orient = 90;
      else
        if ( aOrientation === 2 )
          orient = 180;
        else
          if ( aOrientation === 3 )
            orient = 270;

      var dstFrameNo = this.DstFrameNr;
      var dstBitmap = this.bitmap;
      var srcFont = aFont.font;

      {
        _app._DrawText( dstBitmap, srcFont, aString, aOffset, aCount, dstFrameNo, aClip,
                    aDstRect, aSrcPos, aMinWidth, orient, aColorTL, aColorTR, aColorBR, aColorBL,
                    aBlend );
      }
    },

    // The method DrawBitmapFrame() draws a free scalable frame by composing it 
    // of bitmap segments. These segments are used to draw the frame's corners, 
    // to fill its edges and to fill its interior area. The bitmap has thus to contain 
    // nine equal segments arranged in three rows and three columns. The top-left 
    // segment e.g. is used to draw the top-left corner of the frame. In contrast, 
    // the top-middle segment corresponds to the frame's top edge. If the edge is 
    // wider than the segment, multiple copies of the segment are used to fill the 
    // entire edge. In this manner the entire frame is composed by simply copying 
    // bitmap segments.
    // The bitmap is specified in the parameter aBitmap. In case of a multi-frame 
    // bitmap the desired frame can be selected in the parameter aFrameNr. The resulting 
    // size of the drawn frame is specified by aDstRect parameter. The parameter 
    // aEdges control which edges are drawn and which are omitted. Optionally the 
    // copied pixel can be modulated by a color gradient specified by the four parameters 
    // aColorTL .. aColorBL.
    // An additional clipping area aClip limits the operation. All pixel lying outside 
    // this area will not be drawn. The last aBlend parameter controls the mode 
    // how drawn pixel are combined with the pixel already existing in the destination 
    // bitmap. If aBlend is 'true', the drawn pixel are alpha-blended with the background, 
    // otherwise the drawn pixel will overwrite the old content.
    DrawBitmapFrame : function( aClip, aBitmap, aFrameNr, aDstRect, aEdges, aColorTL, 
      aColorTR, aColorBR, aColorBL, aBlend )
    {
      var _tmp;

      if ( !this.bitmap )
        this.Update();

      if ( !this.bitmap )
        return;

      if (((( !aBitmap || !aBitmap.bitmap ) || !aEdges ) || ( aFrameNr < 0 )) || 
          ( aFrameNr >= aBitmap.NoOfFrames ))
        return;

      var dstBitmap = this.bitmap;
      var srcBitmap = aBitmap.bitmap;
      var dstFrameNo = this.DstFrameNr;
      var srcRect = [].concat( _0000, aBitmap.FrameSize );
      var left = (( aEdges & 0x1 ) === 0x1 );
      var top = (( aEdges & 0x2 ) === 0x2 );
      var right = (( aEdges & 0x4 ) === 0x4 );
      var bottom = (( aEdges & 0x8 ) === 0x8 );
      var interior = (( aEdges & 0x10 ) === 0x10 );

      {
        _app._DrawBitmapFrame( dstBitmap, srcBitmap, dstFrameNo, aFrameNr,
                           aClip, aDstRect, srcRect, left, top, right, bottom,
                           interior, aColorTL, aColorTR, aColorBR, aColorBL, aBlend );
      }
    },

    // The method WarpBitmap() performs the projection of a rectangular source bitmap 
    // area onto a four corner polygon within the destination canvas. The bitmap 
    // is specified in the parameter aBitmap and the desired area to copy in aSrcRect. 
    // In case of a multi-frame bitmap the desired frame can be selected in the 
    // parameter aFrameNr.
    // The destination polygon is determined by the coordinates aX1,aY1 .. aX4,aY4. 
    // The coefficients aW1 .. aW4 are responsible for the perspective distortion. 
    // The parameters aColor1, aColor2, aColor3, aColor4 determine the colors or 
    // opacities at the corresponding corners of the polygon area. The parameter 
    // aClip limits the drawing operation. Pixel lying outside this area remain 
    // unchanged. The aBlend parameter controls the mode how drawn pixel are combined 
    // with the pixel already existing in the destination bitmap. If aBlend is 'true', 
    // the drawn pixel are alpha-blended with the background, otherwise the drawn 
    // pixel will overwrite the old content. The last parameter aFilter controls 
    // the bi-linear filter. If aFilter is 'true', the source bitmap pixel will 
    // be bi-linear filtered in order to get better output.
    WarpBitmap : function( aClip, aBitmap, aFrameNr, aDstX1, aDstY1, aDstW1, aDstX2, 
      aDstY2, aDstW2, aDstX3, aDstY3, aDstW3, aDstX4, aDstY4, aDstW4, aSrcRect, 
      aColor1, aColor2, aColor3, aColor4, aBlend, aFilter )
    {
      if ( !this.bitmap )
        this.Update();

      if ( !this.bitmap )
        return;

      if ((( !aBitmap || !aBitmap.bitmap ) || ( aFrameNr < 0 )) || ( aFrameNr >= 
          aBitmap.NoOfFrames ))
        return;

      var x1 = aDstX1;
      var x2 = aDstX2;
      var y1 = aDstY1;
      var y2 = aDstY2;

      if ( aDstX2 < x1 )
        x1 = aDstX2;

      if ( aDstX3 < x1 )
        x1 = aDstX3;

      if ( aDstX4 < x1 )
        x1 = aDstX4;

      if ( aDstX2 > x2 )
        x2 = aDstX2;

      if ( aDstX3 > x2 )
        x2 = aDstX3;

      if ( aDstX4 > x2 )
        x2 = aDstX4;

      if ( aDstY2 < y1 )
        y1 = aDstY2;

      if ( aDstY3 < y1 )
        y1 = aDstY3;

      if ( aDstY4 < y1 )
        y1 = aDstY4;

      if ( aDstY2 > y2 )
        y2 = aDstY2;

      if ( aDstY3 > y2 )
        y2 = aDstY3;

      if ( aDstY4 > y2 )
        y2 = aDstY4;

      if ((((( x2 - x1 ) > 4096.000000 ) || (( x2 - x1 ) < -4096.000000 )) || (( 
          y2 - y1 ) > 4096.000000 )) || (( y2 - y1 ) < -4096.000000 ))
      {
        _app._Trace( "%s", _0005 );

        return;
      }

      var dstBitmap = this.bitmap;
      var srcBitmap = aBitmap.bitmap;
      var dstFrameNr = this.DstFrameNr;

      {
        _app._WarpBitmap( dstBitmap, srcBitmap, dstFrameNr, aFrameNr, aClip, aDstX1, aDstY1,
                      aDstW1, aDstX2, aDstY2, aDstW2, aDstX3, aDstY3, aDstW3, aDstX4,
                      aDstY4, aDstW4, aSrcRect, aColor1, aColor2, aColor3, aColor4, aBlend,
                      aFilter );
      }
    },

    // The method ScaleBitmap() copies and scales an area of a aBitmap into the 
    // canvas. The bitmap is specified in the parameter aBitmap and the desired 
    // area to copy in aSrcRect. In case of a multi-frame bitmap the desired frame 
    // can be selected in the parameter aFrameNr.
    // The destination area in canvas is determined by the parameter aDstRect. The 
    // parameters aColorTL, aColorTR, aColorBL, aColorBR determine the colors or 
    // opacities at the corresponding corners of the aDstRect area.
    // The parameter aClip limits the drawing operation. Pixel lying outside this 
    // area remain unchanged. The aBlend parameter controls the mode how drawn pixel 
    // are combined with the pixel already existing in the destination bitmap. If 
    // aBlend is 'true', the drawn pixel are alpha-blended with the background, 
    // otherwise the drawn pixel will overwrite the old content. The last parameter 
    // aFilter controls the bi-linear filter. If aFilter is 'true', the source bitmap 
    // pixel will be bi-linear filtered in order to get better output.
    ScaleBitmap : function( aClip, aBitmap, aFrameNr, aDstRect, aSrcRect, aColorTL, 
      aColorTR, aColorBR, aColorBL, aBlend, aFilter )
    {
      if ( !this.bitmap )
        this.Update();

      if ( !this.bitmap )
        return;

      if ((( !aBitmap || !aBitmap.bitmap ) || ( aFrameNr < 0 )) || ( aFrameNr >= 
          aBitmap.NoOfFrames ))
        return;

      var top = aDstRect[1];
      var left = aDstRect[0];
      var right = aDstRect[2];
      var bottom = aDstRect[3];

      if ((((( right - left ) > 4096.000000 ) || (( right - left ) < -4096.000000 )) 
          || (( bottom - top ) > 4096.000000 )) || (( bottom - top ) < -4096.000000 ))
      {
        _app._Trace( "%s", _0006 );

        return;
      }

      var dstBitmap = this.bitmap;
      var srcBitmap = aBitmap.bitmap;
      var dstFrameNo = this.DstFrameNr;

      {
        _app._WarpBitmap( dstBitmap, srcBitmap, dstFrameNo, aFrameNr, aClip, left, top, 
                      1, right, top, 1, right, bottom, 1, left,  bottom, 1, aSrcRect,
                      aColorTL, aColorTR, aColorBR, aColorBL, aBlend, aFilter );
      }
    },

    // The method CopyBitmap() copies an area of a aBitmap into the canvas. The 
    // bitmap is specified in the parameter aBitmap. In case of a multi-frame bitmap 
    // the desired frame can be selected in the parameter aFrameNr.
    // The area to copy the bitmap is determined by the parameter aDstRect. The 
    // optional aSrcPos parameter determines a displacement of the bitmap within 
    // this aDstRect area. The parameters aColorTL, aColorTR, aColorBL, aColorBR 
    // determine the colors or opacities at the corresponding corners of the aDstRect 
    // area.
    // The parameter aClip limits the drawing operation. Pixel lying outside this 
    // area remain unchanged. The last aBlend parameter controls the mode how drawn 
    // pixel are combined with the pixel already existing in the destination bitmap. 
    // If aBlend is 'true', the drawn pixel are alpha-blended with the background, 
    // otherwise the drawn pixel will overwrite the old content.
    CopyBitmap : function( aClip, aBitmap, aFrameNr, aDstRect, aSrcPos, aColorTL, 
      aColorTR, aColorBR, aColorBL, aBlend )
    {
      if ( !this.bitmap )
        this.Update();

      if ( !this.bitmap )
        return;

      if ((( !aBitmap || !aBitmap.bitmap ) || ( aFrameNr < 0 )) || ( aFrameNr >= 
          aBitmap.NoOfFrames ))
        return;

      var dstBitmap = this.bitmap;
      var srcBitmap = aBitmap.bitmap;
      var dstFrameNr = this.DstFrameNr;

      {
        _app._CopyBitmap( dstBitmap, srcBitmap, dstFrameNr, aFrameNr, aClip, aDstRect,
                      aSrcPos, aColorTL, aColorTR, aColorBR, aColorBL, aBlend );
      }
    },

    // The method FillRectangle() fills an area of canvas. The area is determined 
    // by the parameter aDstRect. The parameters aColorTL, aColorTR, aColorBL, aColorBR 
    // determine the colors at the corresponding corners of the aDstRect area.
    // The parameter aClip limits the drawing operation. Pixel lying outside this 
    // area remain unchanged. The last aBlend parameter controls the mode how drawn 
    // pixel are combined with the pixel already existing in the destination bitmap. 
    // If aBlend is 'true', the drawn pixel are alpha-blended with the background, 
    // otherwise the drawn pixel will overwrite the old content.
    FillRectangle : function( aClip, aDstRect, aColorTL, aColorTR, aColorBR, aColorBL, 
      aBlend )
    {
      if ( !this.bitmap )
        this.Update();

      if ( !this.bitmap )
        return;

      var dstBitmap = this.bitmap;
      var dstFrameNo = this.DstFrameNr;

      {
        _app._FillRectangle( dstBitmap, dstFrameNo, aClip, aDstRect, aColorTL, aColorTR,
                         aColorBR, aColorBL, aBlend );
      }
    },

    // Implementation of the Chora method : 'Graphics::Canvas.DrawThickLine()'
    DrawThickLine : function( aClip, aDstPos1, aDstPos2, aWidth1, aWidth2, aColor1, 
      aColor2, aBlend )
    {
      if ( !this.bitmap )
        this.Update();

      if ( !this.bitmap )
        return;

      var w1 = aWidth1;
      var w2 = aWidth2;
      var p1 = aDstPos1;
      var p2 = aDstPos2;

      if ( _app._IsEqualPoint( p1, p2 ))
        return;

      if ( w1 <= 1 )
        w1 = 1;

      if ( w2 <= 1 )
        w2 = 1;

      var fw1 = w1 / 2.000000;
      var fw2 = w2 / 2.000000;
      var fp1X = p1[0];
      var fp1Y = p1[1];
      var fp2X = p2[0];
      var fp2Y = p2[1];
      var dirX = fp2X - fp1X;
      var dirY = fp2Y - fp1Y;
      var len = Math.sqrt(( dirX * dirX ) + ( dirY * dirY ));

      if ((( w1 > 4096 ) || ( w2 > 4096 )) || ( len > 4096.000000 ))
      {
        _app._Trace( "%s", _0007 );

        return;
      }

      dirX = dirX / len;
      dirY = dirY / len;

      var x1 = fp1X + ( dirY * fw1 );
      var y1 = fp1Y - ( dirX * fw1 );
      var x2 = fp2X + ( dirY * fw2 );
      var y2 = fp2Y - ( dirX * fw2 );
      var x3 = fp2X - ( dirY * fw2 );
      var y3 = fp2Y + ( dirX * fw2 );
      var x4 = fp1X - ( dirY * fw1 );
      var y4 = fp1Y + ( dirX * fw1 );
      var opaqueBitmap = _app._GetResource( _app.Resources.WhiteBitmapStripe );
      var srcRect = [].concat( _0008, _app._MovePointNeg( opaqueBitmap.FrameSize, 
        _0009 ));
      var dstBitmap = this.bitmap;
      var dstFrameNo = this.DstFrameNr;
      var srcBitmap = opaqueBitmap.bitmap;

      {
        _app._WarpBitmap( dstBitmap, srcBitmap, dstFrameNo, 0, aClip, x1, y1, 1.0,
                      x2, y2, 1.0, x3, y3, 1.0, x4, y4, 1.0, srcRect, aColor1, aColor2, aColor2,
                      aColor1, aBlend, false );
      }
    },

    // The method DrawLine() draws a line into the canvas. The line will be drawn 
    // from the aDstPos1 point to the aDstPos2 point with the given colors aColor1 
    // and aColor2.
    // The parameter aClip limits the drawing operation. Pixel lying outside this 
    // area remain unchanged. The last aBlend parameter controls the mode how drawn 
    // pixel are combined with the pixel already existing in the destination bitmap. 
    // If aBlend is 'true', the drawn pixel are alpha-blended with the background, 
    // otherwise the drawn pixel will overwrite the old content.
    DrawLine : function( aClip, aDstPos1, aDstPos2, aColor1, aColor2, aBlend )
    {
      if ( !this.bitmap )
        this.Update();

      if ( !this.bitmap )
        return;

      var dstBitmap = this.bitmap;
      var dstFrameNo = this.DstFrameNr;

      {
        _app._DrawLine( dstBitmap, dstFrameNo, aClip, aDstPos1, aDstPos2, aColor1,
                    aColor2, aBlend );
      }
    },

    // Initializer for the class 'Graphics::Canvas'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Resources.Bitmap._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Canvas;

      // Call the user defined constructor
      this.Init( aArg );
    },

    // Deintializer for the class 'Graphics::Canvas'
    _Done : function()
    {
      // Call the user defined destructor
      this.Done();

      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Resources.Bitmap;

      // Finally continue the deinitialization in the super class
      _app.Resources.Bitmap._Done.call( this );
    },

    // Garbage Collector method for the class 'Graphics::Canvas'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Resources.Bitmap._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.OnDraw ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Graphics::Canvas"
  };

  // The class Graphics::WarpMatrix provides the core functionality for all 2D and 
  // 3D transformations. With its aim, Views::WarpImage and Views::WarpGroup can 
  // be translated, scaled and rotated around the X, Y and Z axis. Moreover, small 
  // 3D scenes consisting of several warp views can be defined. This allows you 
  // to enrich GUI components with fancy 3D effects. Please note, Embedded Wizard 
  // is not a 3D GUI development tool! Its lightweight 3D functionality is limited 
  // to the perspectively correct projection of a source image onto a four corners 
  // polygon lying in the GUI component. The matrix coefficients describe thus the 
  // transformation of the rectangular area of the source image into a four corners 
  // polygon.
  // To define the desired transformation the WarpMatrix class provides following 
  // three methods @Translate(), @Scale() and @Rotate(). These can be combined together 
  // in order to get more complex transformations. The source image can thus be 
  // rotated and then e.g. translated in the 3D space. The order in which these 
  // operations are executed is essential. Changing of the order may produce different 
  // results.
  // The methods @Push() and @Pop() are very useful to store and restore the current 
  // state of the matrix on the matrix stack. This is important when 3D scenes are 
  // composed of several transformed source images. In this manner one and the same 
  // matrix is used for all warp views. To perform the transformation defined in 
  // the matrix, pass it to the Warp3D() method provided by the WarpImage and WarpGroup 
  // views.
  _unit.WarpMatrix =
  {
    M11 : 1.000000,
    M12 : 0,
    M14 : 0,
    M21 : 0,
    M22 : 1.000000,
    M24 : 0,
    M31 : 0,
    M32 : 0,
    M33 : 1.000000,
    M34 : 0,
    Z : 0,
    isIdentity : true,

    // Implementation of the Chora method : 'Graphics::WarpMatrix.CalculateZ()'
    CalculateZ : function( aX, aY )
    {
      var z = (( aX * this.M31 ) + ( aY * this.M32 )) + this.M34;

      this.Z = z;

      return true;
    },

    // Implementation of the Chora method : 'Graphics::WarpMatrix.DeriveFromQuad()'
    DeriveFromQuad : function( aX1, aY1, aX2, aY2, aX3, aY3, aX4, aY4 )
    {
      var deltaX1 = aX2 - aX3;
      var deltaY1 = aY2 - aY3;
      var deltaX2 = aX4 - aX3;
      var deltaY2 = aY4 - aY3;
      var sumX = (( aX1 - aX2 ) + aX3 ) - aX4;
      var sumY = (( aY1 - aY2 ) + aY3 ) - aY4;
      var det = ( deltaX1 * deltaY2 ) - ( deltaY1 * deltaX2 );

      if ( det === 0.000000 )
        return null;

      this.M31 = (( sumX * deltaY2 ) - ( sumY * deltaX2 )) / det;
      this.M32 = (( deltaX1 * sumY ) - ( deltaY1 * sumX )) / det;
      this.M33 = 0.000000;
      this.M34 = 1.000000;
      this.M11 = ( aX2 - aX1 ) + ( this.M31 * aX2 );
      this.M12 = ( aX4 - aX1 ) + ( this.M32 * aX4 );
      this.M14 = aX1;
      this.M21 = ( aY2 - aY1 ) + ( this.M31 * aY2 );
      this.M22 = ( aY4 - aY1 ) + ( this.M32 * aY4 );
      this.M24 = aY1;
      this.isIdentity = false;

      return this;
    },

    // Initializer for the class 'Graphics::WarpMatrix'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.WarpMatrix;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Graphics::WarpMatrix'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Graphics::WarpMatrix'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Graphics::WarpMatrix'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Graphics::WarpMatrix"
  };

  // The definition Graphics::Edges enumerates the parts of a free scalable frame. 
  // It is used to determine, which parts should be drawn.
  _unit.Edges =
  {
    Left : 0x1,
    Top : 0x2,
    Right : 0x4,
    Bottom : 0x8,
    Interior : 0x10
  };

  // Function to initialize the application.
  _unit._Init = function()
  {
    _unit.Canvas.__proto__ = _app.Resources.Bitmap;
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