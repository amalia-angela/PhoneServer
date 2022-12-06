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
if ( EmWiApp.Resources )
  throw new Error( "The unit file 'Resources.js' included twice!" );

// Create the unit object including all members of the unit.
EmWiApp.Resources = (function()
{
  var _app  = EmWiApp;
  var _unit = {};

  // Constant values used in this 'JavaScript' module only.
  var _0000 = [ 0, 0 ];
  var _0001 = "The property \'FrameSize\' is READ ONLY.";

  // The class Resources::Bitmap provides the base functionality to handle bitmaps. 
  // A bitmap consists of at least one frame (an image). If there are more than 
  // one frame stored within the bitmap, the bitmap is called 'multi-frame'. Such 
  // multi-frame bitmaps are very useful e.g. to run short video sequences.
  // This class implements a set of properties to query or change bitmap attributes. 
  // For example, the property @FrameSize stores the size of a single bitmap frame 
  // in pixel. The property @NoOfFrames determines how many frames are available 
  // in the bitmap.
  // Usually, bitmaps are created at the design time by drag-and-drop them from 
  // the Embedded Wizard Gallery into the Composer window where you are editing 
  // your GUI project. The bitmap attributes will be determined in the Embedded 
  // Wizard Inspector.
  _unit.Bitmap =
  {
    bitmap : null,

    // The property 'FrameDelay' determines the interval in milliseconds between 
    // two consecutive frames within an animated bitmap. If it is zero, the bitmap 
    // is not animated.
    FrameDelay : 0,

    // The property 'NoOfFrames' determines how many frames belong to the bitmap. 
    // A frame is an image within the bitmap. Multi-frame bitmaps thus contain several 
    // images. At the runtime the frames can be selected or the entire set of frames 
    // can be animated similarly to a video sequence. A bitmap consists of at least 
    // one frame.
    NoOfFrames : 1,

    // The property 'FrameSize' determines the size in pixel of a single frame within 
    // the bitmap. In case of multi-frame bitmaps, all frames have the same size.
    FrameSize : _app._NullPoint,
    Mutable : false,
    Animated : false,

    // Implementation of the Chora method : 'Resources::Bitmap.Done()'
    Done : function()
    {
      if ( !this.bitmap )
        return;

      var handle = this.bitmap;

      _app._FreeBitmap( handle );
      this.bitmap = null;
      this.FrameSize = _0000;
      this.FrameDelay = 0;
      this.NoOfFrames = 1;
      this.Animated = false;
    },

    // Implementation of the Chora method : 'Resources::Bitmap.Init()'
    Init : function( aArg )
    {
      if ( !aArg )
        return;

      var handle = null;
      var noOfFrames = 1;
      var frameSize = _0000;
      var frameDelay = 0;

      {
        // aArg is a pointer to the memory where the bitmap resource is stored.
        var bmp = _app._LoadBitmap( aArg, this );

        // After the bitmap has been loaded get the size of the bitmap and store it
        // in the following variables.
        if ( bmp )
        {
          noOfFrames = bmp.NoOfFrames;
          frameSize  = bmp.FrameSize;
          frameDelay = bmp.FrameDelay;
        }

        handle = bmp;
      }
      this.bitmap = handle;
      this.NoOfFrames = noOfFrames;
      this.FrameSize = frameSize;
      this.FrameDelay = frameDelay;
      this.Mutable = true;
      this.Animated = ( !!this.bitmap && ( this.FrameDelay > 0 )) && ( this.NoOfFrames 
      > 1 );
    },

    // Implementation of the Chora method : 'Resources::Bitmap.OnSetFrameSize()'
    OnSetFrameSize : function( value )
    {
      throw new Error(  _0001  );
    },

    // Implementation of the Chora method : 'Resources::Bitmap.Update()'
    Update : function()
    {
    },

    // Initializer for the class 'Resources::Bitmap'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Resource._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Bitmap;

      // Call the user defined constructor
      this.Init( aArg );
    },

    // Deintializer for the class 'Resources::Bitmap'
    _Done : function()
    {
      // Call the user defined destructor
      this.Done();

      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Core.Resource;

      // Finally continue the deinitialization in the super class
      _app.Core.Resource._Done.call( this );
    },

    // Internal variables of this class.
    _className : "Resources::Bitmap"
  };

  // Font resource used per default by 'Text' and 'Attributed Text' views to ensure 
  // that new views don't remain empty on the screen.
  _unit.DefaultFont =
  {
    // Function to determine the class of this resource.
    _class : function() { return _unit.Font; },

    0 : {
      Data  : function() { return _app.ResourcesDefaultFont; },
      Cache : [],
      _this : null
    }
  };

  // The class Resources::Font provides the base functionality to handle fonts. 
  // A font serves as a kind of container to store glyphs together with their metrics 
  // and attributes. Fonts are used to print text on the screen. Due to their complexity 
  // fonts can be loaded from font resources only. The dynamic creation or modification 
  // of fonts at the runtime is not possible.
  // This class implements a set of methods and properties to query font and glyph 
  // metrics and attributes. For example, the method @GetGlyphSize() returns the 
  // size in pixel of the specified glyph. The method @GetTextExtent() in contrast 
  // determines the area needed to print the given text.
  // Font are created at the design time by drag-and-drop them from the Embedded 
  // Wizard Gallery into the Composer window where you are editing your GUI project. 
  // The font attributes will be determined in the Embedded Wizard Inspector.
  _unit.Font =
  {
    font : null,

    // The property 'Leading' stores the leading metric in pixel of the font. This 
    // is an additional space between two rows printed with this font.
    Leading : 0,

    // The property 'Descent' stores the descent metric in pixel of the font. This 
    // is the area below the base line. The total height of a text row results of 
    // the sum of @Ascent and @Descent.
    Descent : 0,

    // The property 'Ascent' stores the ascent metric in pixel of the font. This 
    // is the area above the base line. The total height of a text row results of 
    // the sum of @Ascent and @Descent.
    Ascent : 0,

    // Implementation of the Chora method : 'Resources::Font.Done()'
    Done : function()
    {
      this.freeFont();
    },

    // Implementation of the Chora method : 'Resources::Font.Init()'
    Init : function( aArg )
    {
      this.loadFont( aArg );
    },

    // Implementation of the Chora method : 'Resources::Font.freeFont()'
    freeFont : function()
    {
      if ( !this.font )
        return;

      var handle = this.font;

      _app._FreeFont( handle );
      this.font = null;
      this.Ascent = 0;
      this.Descent = 0;
      this.Leading = 0;
    },

    // Implementation of the Chora method : 'Resources::Font.loadFont()'
    loadFont : function( aFontResource )
    {
      if ( !aFontResource )
        return;

      var handle = null;
      var ascent = 0;
      var descent = 0;
      var leading = 0;

      {
        // aFontResource is a pointer to a memory where the font resource is stored.
        var font = _app._LoadFont( aFontResource );

        /* After the font has been loaded query its ascent and descent. */
        if ( font )
        {
          ascent  = font.Ascent;
          descent = font.Descent;
          leading = font.Leading;
        }

        handle = font;
      }
      this.font = handle;
      this.Ascent = ascent;
      this.Descent = descent;
      this.Leading = leading;
    },

    // Implementation of the Chora method : 'Resources::Font.GetPositionAtTextColumn()'
    GetPositionAtTextColumn : function( aString, aOffset, aCount, aColumn, aMinWidth )
    {
      if ( aOffset < 0 )
        aOffset = 0;

      if ( !this.font )
        return 0;

      if (( aOffset > 0 ) && ( aOffset > aString.length ))
        aOffset = aString.length;

      var handle = this.font;
      var pos = 0;

      pos = _app._GetPositionAtTextColumn( handle, aString, aOffset, aCount, aColumn, aMinWidth );

      return pos;
    },

    // Implementation of the Chora method : 'Resources::Font.GetTextColumnAtPosition()'
    GetTextColumnAtPosition : function( aString, aOffset, aCount, aX, aMinWidth )
    {
      if ( aOffset < 0 )
        aOffset = 0;

      if ( !this.font )
        return 0;

      if (( aOffset > 0 ) && ( aOffset > aString.length ))
        aOffset = aString.length;

      var handle = this.font;
      var col = 0;

      col = _app._GetTextColumnAtPosition( handle, aString, aOffset, aCount, aX, aMinWidth );

      return col;
    },

    // Implementation of the Chora method : 'Resources::Font.GetFlowTextAdvance()'
    GetFlowTextAdvance : function( aFlowString )
    {
      if ( !this.font )
        return 0;

      var handle = this.font;
      var advance = 0;

      advance = _app._GetFlowTextAdvance( handle, aFlowString );

      return advance;
    },

    // Implementation of the Chora method : 'Resources::Font.ParseFlowString()'
    ParseFlowString : function( aString, aOffset, aWidth, aMaxNoOfRows, aBidi )
    {
      if ( aOffset < 0 )
        aOffset = 0;

      if ( !this.font || (( aOffset > 0 ) && ( aOffset >= aString.length )))
        return _app._EmptyString;

      var handle = this.font;
      var result = _app._EmptyString;

      result = _app._ParseFlowString( handle, aString, aOffset, aWidth, aMaxNoOfRows, aBidi );

      return result;
    },

    // The method GetTextAdvance() calculates the horizontal advance in pixel of 
    // a text row to print with this font. This value is calculated by the sum of 
    // advance values of all affected glyphs. The text is passed in the parameter 
    // aString. The parameter aOffset determines within aString the sign to start 
    // the calculation. If aOffset is zero, the calculation starts with the first 
    // sign. The parameter aCount determines the max. number of following sigs to 
    // calculate the advance value. If aCount is -1, all signs until the end of 
    // the string will be evaluated.
    GetTextAdvance : function( aString, aOffset, aCount )
    {
      if ( aOffset < 0 )
        aOffset = 0;

      if ( !this.font || (( aOffset > 0 ) && ( aOffset >= aString.length )))
        return 0;

      var handle = this.font;
      var advance = 0;

      advance = _app._GetTextAdvance( handle, aString, aOffset, aCount );

      return advance;
    },

    // Initializer for the class 'Resources::Font'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Resource._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Font;

      // Call the user defined constructor
      this.Init( aArg );
    },

    // Deintializer for the class 'Resources::Font'
    _Done : function()
    {
      // Call the user defined destructor
      this.Done();

      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Core.Resource;

      // Finally continue the deinitialization in the super class
      _app.Core.Resource._Done.call( this );
    },

    // Internal variables of this class.
    _className : "Resources::Font"
  };

  // The small version of the default font resource. The resource is using 'Roboto' 
  // TrueType font with 18 pixel height.
  _unit.FontSmall =
  {
    // Function to determine the class of this resource.
    _class : function() { return _unit.Font; },

    0 : {
      Data  : function() { return _app.ResourcesFontSmall; },
      Cache : [],
      _this : null
    }
  };

  // The medium version of the default font resource. The resource is using 'Roboto' 
  // TrueType font with 24 pixel height.
  _unit.FontMedium =
  {
    // Function to determine the class of this resource.
    _class : function() { return _unit.Font; },

    0 : {
      Data  : function() { return _app.ResourcesFontMedium; },
      Cache : [],
      _this : null
    }
  };

  // User defined bitmap resource: 'Resources::WhiteBitmapStripe'
  _unit.WhiteBitmapStripe =
  {
    // Function to determine the class of this resource.
    _class : function() { return _unit.Bitmap; },

    // Attributes for the language : 'Default'.
    0 : {
      FileName     : "./res/ResourcesWhiteBitmapStripe.png",
      Format       : _app._PIXEL_FORMAT_ALPHA8,
      NoOfFrames   : 1,
      FrameSize    : [ 256, 4 ],
      FrameDelay   : 0,

      // The current unique instance of this resource variant
      _this : null
    }
  };

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.Monday = "Monday";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.Tuesday = "Tuesday";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.Wednesday = "Wednesday";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.Thursday = "Thursday";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.Friday = "Friday";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.Saturday = "Saturday";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.Sunday = "Sunday";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.AM = "AM";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.PM = "PM";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.January = "January";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.February = "February";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.March = "March";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.April = "April";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.May = "May";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.June = "June";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.July = "July";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.August = "August";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.September = "September";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.October = "October";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.November = "November";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.December = "December";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.MondayAbbr = "Mon";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.TuesdayAbbr = "Tue";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.WednesdayAbbr = "Wed";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.ThursdayAbbr = "Thu";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.FridayAbbr = "Fri";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.SaturdayAbbr = "Sat";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.SundayAbbr = "Sun";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.JanuaryAbbr = "Jan";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.FebruaryAbbr = "Feb";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.MarchAbbr = "Mar";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.AprilAbbr = "Apr";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.MayAbbr = "May";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.JuneAbbr = "Jun";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.JulyAbbr = "Jul";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.AugustAbbr = "Aug";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.SeptemberAbbr = "Sep";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.OctoberAbbr = "Oct";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.NovemberAbbr = "Nov";

  // Constant string used by Core::Time class to format time and date. Per default 
  // the constant is initialized in English language. If necessary, you can derive 
  // a variant from the interesting constant, store the variant in one of your project 
  // units and initialize it with other eventually multi-lingual localized text.
  _unit.DecemberAbbr = "Dec";

  // Function to initialize the application.
  _unit._Init = function()
  {
    _unit.Bitmap.__proto__ = _app.Core.Resource;
    _unit.Font.__proto__ = _app.Core.Resource;
  };

  // Function to re-initialize global objects after language selection.
  _unit._ReInit = function()
  {
  };

  // Function to reclaim memory occupied by unused objects.
  _unit._Reclaim = function( aCycle )
  {
    var _tmp;

    if (( _tmp = _unit.DefaultFont[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.DefaultFont[0]._this = null );
    if (( _tmp = _unit.FontSmall[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.FontSmall[0]._this = null );
    if (( _tmp = _unit.FontMedium[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.FontMedium[0]._this = null );
    if (( _tmp = _unit.WhiteBitmapStripe[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.WhiteBitmapStripe[0]._this = null );
  };

  return _unit;
})();

/* Embedded Wizard */