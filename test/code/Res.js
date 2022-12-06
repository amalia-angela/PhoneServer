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
if ( EmWiApp.Res )
  throw new Error( "The unit file 'Res.js' included twice!" );

// Create the unit object including all members of the unit.
EmWiApp.Res = (function()
{
  var _app  = EmWiApp;
  var _unit = {};

  // User defined constant: 'Res::CallTxt'
  _unit.CallTxt = "\uE0B0";

  // User defined constant: 'Res::MessageIconTxt'
  _unit.MessageIconTxt = "\uE253";

  // User defined constant: 'Res::BackIconTxt'
  _unit.BackIconTxt = "\uE5E0";

  // User defined constant: 'Res::EditIconTxt'
  _unit.EditIconTxt = "\uE3C9";

  // User defined constant: 'Res::UserIconTxt'
  _unit.UserIconTxt = "\uE853";

  // User defined constant: 'Res::PlusIconTxt'
  _unit.PlusIconTxt = "\uE145";

  // User defined constant: 'Res::SerachIconTxt'
  _unit.SerachIconTxt = "\uE8B6";

  // User defined constant: 'Res::CkeckIconTxt'
  _unit.CkeckIconTxt = "\uE876";

  // User defined constant: 'Res::CloseIconTxt'
  _unit.CloseIconTxt = "\uE5CD";

  // The global autoobject Res::SlideDownCentered represents the fade-in/out operation 
  // affecting the position and the opacity of the given GUI component. When using 
  // the transition for the fade-in operation, the GUI component slides from the 
  // top edge of its owner component and continues moving vertically until it reaches 
  // the owner's center position. When using the transition for the fade-out operation, 
  // the component slides down until it leaves the visible area of its owner component. 
  // Additionally, while the transitions are performed, the opacity of the GUI component 
  // fades-in or fades-out accordingly. This transition is thus ideal wherever one 
  // GUI component should smoothly slide-in/out in context of another component. 
  // The duration of the transition is configured per default to take 500 ms and 
  // the timing is configured to start fast and then slow down the animation (FastIn_EaseOut).
  // This object exists for your convenience permitting you to simply refer the 
  // transition wherever it is required in your implementation without having to 
  // take care of the creation and configuration of the object. If you require the 
  // transition to run with other configuration (e.g. other timing parameters), 
  // create a copy of this object and adapt its properties accordingly.
  _unit.SlideDownCentered =
  {
    // Initializer for the auto object 'Res::SlideDownCentered'
    _Init : function()
    {
      // First create the auto object instance ...
      _app.Effects.SlideTransition._Init.call( this, 0 );

      // Initialize the object ...
      this.Alignment = 0x11;
      this.Duration = 200;
      this.Direction = 5;
    },

    // Function to determine the currently effective variant of this auto-object.
    _variants : function()
    {
      return this;
    },

    // The current unique instance of the auto object
    _this : null
  };

  // The global autoobject Res::SlideUpCentered represents the fade-in/out operation 
  // affecting the position and the opacity of the given GUI component. When using 
  // the transition for the fade-in operation, the GUI component slides from the 
  // bottom edge of its owner component and continues moving vertically until it 
  // reaches the owner's center position. When using the transition for the fade-out 
  // operation, the component slides up until it leaves the visible area of its 
  // owner component. Additionally, while the transitions are performed, the opacity 
  // of the GUI component fades-in or fades-out accordingly. This transition is 
  // thus ideal wherever one GUI component should smoothly slide-in/out in context 
  // of another component. The duration of the transition is configured per default 
  // to take 500 ms and the timing is configured to start fast and then slow down 
  // the animation (FastIn_EaseOut).
  // This object exists for your convenience permitting you to simply refer the 
  // transition wherever it is required in your implementation without having to 
  // take care of the creation and configuration of the object. If you require the 
  // transition to run with other configuration (e.g. other timing parameters), 
  // create a copy of this object and adapt its properties accordingly.
  _unit.SlideUpCentered =
  {
    // Initializer for the auto object 'Res::SlideUpCentered'
    _Init : function()
    {
      // First create the auto object instance ...
      _app.Effects.SlideTransition._Init.call( this, 0 );

      // Initialize the object ...
      this.Alignment = 0x11;
      this.Duration = 200;
      this.Direction = 4;
    },

    // Function to determine the currently effective variant of this auto-object.
    _variants : function()
    {
      return this;
    },

    // The current unique instance of the auto object
    _this : null
  };

  // The global autoobject Res::SlideRightCentered represents the fade-in/out operation 
  // affecting the position and the opacity of the given GUI component. When using 
  // the transition for the fade-in operation, the GUI component slides from the 
  // left edge of its owner component and continues moving horizontally until it 
  // reaches the owner's center position. When using the transition for the fade-out 
  // operation, the component slides to the right until it leaves the visible area 
  // of its owner component. Additionally, while the transitions are performed, 
  // the opacity of the GUI component fades-in or fades-out accordingly. This transition 
  // is thus ideal wherever one GUI component should smoothly slide-in/out in context 
  // of another component. The duration of the transition is configured per default 
  // to take 500 ms and the timing is configured to start fast and then slow down 
  // the animation (FastIn_EaseOut).
  // This object exists for your convenience permitting you to simply refer the 
  // transition wherever it is required in your implementation without having to 
  // take care of the creation and configuration of the object. If you require the 
  // transition to run with other configuration (e.g. other timing parameters), 
  // create a copy of this object and adapt its properties accordingly.
  _unit.SlideRightCentered =
  {
    // Initializer for the auto object 'Res::SlideRightCentered'
    _Init : function()
    {
      // First create the auto object instance ...
      _app.Effects.SlideTransition._Init.call( this, 0 );

      // Initialize the object ...
      this.Alignment = 0x11;
      this.Duration = 200;
      this.Direction = 7;
    },

    // Function to determine the currently effective variant of this auto-object.
    _variants : function()
    {
      return this;
    },

    // The current unique instance of the auto object
    _this : null
  };

  // User defined font resource: 'Res::TitileFont32'
  _unit.TitileFont32 =
  {
    // Function to determine the class of this resource.
    _class : function() { return _app.Resources.Font; },

    0 : {
      Data  : function() { return _app.ResTitileFont32; },
      Cache : [],
      _this : null
    }
  };

  // User defined font resource: 'Res::ContactFont15'
  _unit.ContactFont15 =
  {
    // Function to determine the class of this resource.
    _class : function() { return _app.Resources.Font; },

    0 : {
      Data  : function() { return _app.ResContactFont15; },
      Cache : [],
      _this : null
    }
  };

  // User defined font resource: 'Res::ContactFontBold15'
  _unit.ContactFontBold15 =
  {
    // Function to determine the class of this resource.
    _class : function() { return _app.Resources.Font; },

    0 : {
      Data  : function() { return _app.ResContactFontBold15; },
      Cache : [],
      _this : null
    }
  };

  // User defined font resource: 'Res::IconsFont25'
  _unit.IconsFont25 =
  {
    // Function to determine the class of this resource.
    _class : function() { return _app.Resources.Font; },

    0 : {
      Data  : function() { return _app.ResIconsFont25; },
      Cache : [],
      _this : null
    }
  };

  // User defined constant: 'Res::BlueLight'
  _unit.BlueLight = 0xF4FF8F7C;

  // User defined constant: 'Res::Grey'
  _unit.Grey = 0xFDBCBCBC;

  // User defined constant: 'Res::MicOffTxt'
  _unit.MicOffTxt = "\uE02B";

  // User defined constant: 'Res::KeypadTxt'
  _unit.KeypadTxt = "\uE31A";

  // User defined constant: 'Res::GreyLight'
  _unit.GreyLight = 0xFDF0F0F0;

  // User defined constant: 'Res::SpeakerTxt'
  _unit.SpeakerTxt = "\uE050";

  // User defined constant: 'Res::Black'
  _unit.Black = 0xFF181818;

  // User defined constant: 'Res::EndCallTxt'
  _unit.EndCallTxt = "\uE0B1";

  // User defined font resource: 'Res::TitileFont29'
  _unit.TitileFont29 =
  {
    // Function to determine the class of this resource.
    _class : function() { return _app.Resources.Font; },

    0 : {
      Data  : function() { return _app.ResTitileFont29; },
      Cache : [],
      _this : null
    }
  };

  // User defined constant: 'Res::VideoCallTxt'
  _unit.VideoCallTxt = "\uE04B";

  // User defined font resource: 'Res::IconsFont30'
  _unit.IconsFont30 =
  {
    // Function to determine the class of this resource.
    _class : function() { return _app.Resources.Font; },

    0 : {
      Data  : function() { return _app.ResIconsFont30; },
      Cache : [],
      _this : null
    }
  };

  // User defined font resource: 'Res::IconsFont20'
  _unit.IconsFont20 =
  {
    // Function to determine the class of this resource.
    _class : function() { return _app.Resources.Font; },

    0 : {
      Data  : function() { return _app.ResIconsFont20; },
      Cache : [],
      _this : null
    }
  };

  // User defined font resource: 'Res::TitileFont25'
  _unit.TitileFont25 =
  {
    // Function to determine the class of this resource.
    _class : function() { return _app.Resources.Font; },

    0 : {
      Data  : function() { return _app.ResTitileFont25; },
      Cache : [],
      _this : null
    }
  };

  // User defined constant: 'Res::WhiteTransparent'
  _unit.WhiteTransparent = 0x26FFFFFF;

  // User defined constant: 'Res::Red'
  _unit.Red = 0xFF0F28B5;

  // User defined constant: 'Res::Blue'
  _unit.Blue = 0xFFFF0B1B;

  // User defined constant: 'Res::DownTxt'
  _unit.DownTxt = "\uE5CF";

  // User defined constant: 'Res::Uptxt'
  _unit.Uptxt = "\uE5CE";

  // User defined constant: 'Res::RedLight'
  _unit.RedLight = 0xEE323CE8;

  // User defined font resource: 'Res::ContactFont12'
  _unit.ContactFont12 =
  {
    // Function to determine the class of this resource.
    _class : function() { return _app.Resources.Font; },

    0 : {
      Data  : function() { return _app.ResContactFont12; },
      Cache : [],
      _this : null
    }
  };

  // User defined constant: 'Res::WhiteSemiTransparent'
  _unit.WhiteSemiTransparent = 0x73FFFFFF;

  // User defined constant: 'Res::White'
  _unit.White = 0xF9FFFFFF;

  // User defined constant: 'Res::Green'
  _unit.Green = 0xFF159912;

  // User defined constant: 'Res::GreenDark'
  _unit.GreenDark = 0xFF0E6B0C;

  // User defined constant: 'Res::Transparent'
  _unit.Transparent = 0x00FFFFFF;

  // User defined bitmap resource: 'Res::ButtonRoundMedium'
  _unit.ButtonRoundMedium =
  {
    // Function to determine the class of this resource.
    _class : function() { return _app.Resources.Bitmap; },

    // Attributes for the language : 'Default'.
    0 : {
      FileName     : "./res/ResButtonRoundMedium.png",
      Format       : _app._PIXEL_FORMAT_ALPHA8,
      NoOfFrames   : 1,
      FrameSize    : [ 40, 40 ],
      FrameDelay   : 0,

      // The current unique instance of this resource variant
      _this : null
    }
  };

  // User defined bitmap resource: 'Res::ButtonRoundBig'
  _unit.ButtonRoundBig =
  {
    // Function to determine the class of this resource.
    _class : function() { return _app.Resources.Bitmap; },

    // Attributes for the language : 'Default'.
    0 : {
      FileName     : "./res/ResButtonRoundBig.png",
      Format       : _app._PIXEL_FORMAT_ALPHA8,
      NoOfFrames   : 1,
      FrameSize    : [ 70, 70 ],
      FrameDelay   : 0,

      // The current unique instance of this resource variant
      _this : null
    }
  };

  // User defined bitmap resource: 'Res::ButtonRoundSmall'
  _unit.ButtonRoundSmall =
  {
    // Function to determine the class of this resource.
    _class : function() { return _app.Resources.Bitmap; },

    // Attributes for the language : 'Default'.
    0 : {
      FileName     : "./res/ResButtonRoundSmall.png",
      Format       : _app._PIXEL_FORMAT_ALPHA8,
      NoOfFrames   : 1,
      FrameSize    : [ 25, 25 ],
      FrameDelay   : 0,

      // The current unique instance of this resource variant
      _this : null
    }
  };

  // User defined bitmap resource: 'Res::ButtonRoundMedium1'
  _unit.ButtonRoundMedium1 =
  {
    // Function to determine the class of this resource.
    _class : function() { return _app.Resources.Bitmap; },

    // Attributes for the language : 'Default'.
    0 : {
      FileName     : "./res/ResButtonRoundMedium1.png",
      Format       : _app._PIXEL_FORMAT_ALPHA8,
      NoOfFrames   : 1,
      FrameSize    : [ 55, 55 ],
      FrameDelay   : 0,

      // The current unique instance of this resource variant
      _this : null
    }
  };

  // The global autoobject Res::FadeInOutCentered represents the fade-in/out operation 
  // affecting the opacity of a given GUI component. When using the transition for 
  // the fade-in operation, the GUI component is automatically arranged to appear 
  // centered within the area of its owner component. This transition is thus ideal 
  // wherever one GUI component should smoothly appear or disappear in context of 
  // another component. The duration of the transition is configured per default 
  // to take 500 ms.
  // This object exists for your convenience permitting you to simply refer the 
  // transition wherever it is required in your implementation without having to 
  // take care of the creation and configuration of the object. If you require the 
  // transition to run with other configuration (e.g. other timing parameters), 
  // create a copy of this object and adapt its properties accordingly.
  _unit.FadeInOutCentered =
  {
    // Initializer for the auto object 'Res::FadeInOutCentered'
    _Init : function()
    {
      // First create the auto object instance ...
      _app.Effects.FadeInOutTransition._Init.call( this, 0 );

      // Initialize the object ...
      this.Alignment = 0x11;
      this.Duration = 200;
    },

    // Function to determine the currently effective variant of this auto-object.
    _variants : function()
    {
      return this;
    },

    // The current unique instance of the auto object
    _this : null
  };

  // The global autoobject Res::SlideLeftCentered represents the fade-in/out operation 
  // affecting the position and the opacity of the given GUI component. When using 
  // the transition for the fade-in operation, the GUI component slides from the 
  // right edge of its owner component and continues moving horizontally until it 
  // reaches the owner's center position. When using the transition for the fade-out 
  // operation, the component slides to the left until it leaves the visible area 
  // of its owner component. Additionally, while the transitions are performed, 
  // the opacity of the GUI component fades-in or fades-out accordingly. This transition 
  // is thus ideal wherever one GUI component should smoothly slide-in/out in context 
  // of another component. The duration of the transition is configured per default 
  // to take 500 ms and the timing is configured to start fast and then slow down 
  // the animation (FastIn_EaseOut).
  // This object exists for your convenience permitting you to simply refer the 
  // transition wherever it is required in your implementation without having to 
  // take care of the creation and configuration of the object. If you require the 
  // transition to run with other configuration (e.g. other timing parameters), 
  // create a copy of this object and adapt its properties accordingly.
  _unit.SlideLeftCentered =
  {
    // Initializer for the auto object 'Res::SlideLeftCentered'
    _Init : function()
    {
      // First create the auto object instance ...
      _app.Effects.SlideTransition._Init.call( this, 0 );

      // Initialize the object ...
      this.Alignment = 0x11;
      this.Duration = 200;
      this.Direction = 2;
    },

    // Function to determine the currently effective variant of this auto-object.
    _variants : function()
    {
      return this;
    },

    // The current unique instance of the auto object
    _this : null
  };

  // User defined constant: 'Res::HeartTxt'
  _unit.HeartTxt = "\uE87D";

  // User defined constant: 'Res::BackspaceTxt'
  _unit.BackspaceTxt = "\uE14A";

  // User defined constant: 'Res::PressColor'
  _unit.PressColor = 0xD5F8F8F8;

  // User defined constant: 'Res::OutgoingCallTxt'
  _unit.OutgoingCallTxt = "\uE0B2";

  // User defined constant: 'Res::RemoveTxt'
  _unit.RemoveTxt = "\uE15B";

  // User defined constant: 'Res::InfoTxt'
  _unit.InfoTxt = "\uE88E";

  // User defined constant: 'Res::MenuTxt'
  _unit.MenuTxt = "\uE5D2";

  // User defined bitmap resource: 'Res::SearchButton'
  _unit.SearchButton =
  {
    // Function to determine the class of this resource.
    _class : function() { return _app.Resources.Bitmap; },

    // Attributes for the language : 'Default'.
    0 : {
      FileName     : "./res/ResSearchButton.png",
      Format       : _app._PIXEL_FORMAT_ALPHA8,
      NoOfFrames   : 1,
      FrameSize    : [ 65, 30 ],
      FrameDelay   : 0,

      // The current unique instance of this resource variant
      _this : null
    }
  };

  // The global autoobject Res::SlideUpCentered1 represents the fade-in/out operation 
  // affecting the position and the opacity of the given GUI component. When using 
  // the transition for the fade-in operation, the GUI component slides from the 
  // bottom edge of its owner component and continues moving vertically until it 
  // reaches the owner's center position. When using the transition for the fade-out 
  // operation, the component slides up until it leaves the visible area of its 
  // owner component. Additionally, while the transitions are performed, the opacity 
  // of the GUI component fades-in or fades-out accordingly. This transition is 
  // thus ideal wherever one GUI component should smoothly slide-in/out in context 
  // of another component. The duration of the transition is configured per default 
  // to take 500 ms and the timing is configured to start fast and then slow down 
  // the animation (FastIn_EaseOut).
  // This object exists for your convenience permitting you to simply refer the 
  // transition wherever it is required in your implementation without having to 
  // take care of the creation and configuration of the object. If you require the 
  // transition to run with other configuration (e.g. other timing parameters), 
  // create a copy of this object and adapt its properties accordingly.
  _unit.SlideUpCenteredLimit =
  {
    // Initializer for the auto object 'Res::SlideUpCenteredLimit'
    _Init : function()
    {
      // First create the auto object instance ...
      _app.Effects.SlideTransition._Init.call( this, 0 );

      // Initialize the object ...
      this.MarginTop = 40;
      this.Alignment = 0x11;
      this.Duration = 200;
      this.Direction = 4;
    },

    // Function to determine the currently effective variant of this auto-object.
    _variants : function()
    {
      return this;
    },

    // The current unique instance of the auto object
    _this : null
  };

  // User defined constant: 'Res::IncomingCallTxt'
  _unit.IncomingCallTxt = "\uE0B5";

  // User defined constant: 'Res::CheckIcon'
  _unit.CheckIcon = "\uE5CA";

  // Function to initialize the application.
  _unit._Init = function()
  {
  };

  // Function to re-initialize global objects after language selection.
  _unit._ReInit = function()
  {
    var _tmp;

    if (( _tmp = _unit.SlideDownCentered._this ))
      _tmp._ReInit();
    if (( _tmp = _unit.SlideUpCentered._this ))
      _tmp._ReInit();
    if (( _tmp = _unit.SlideRightCentered._this ))
      _tmp._ReInit();
    if (( _tmp = _unit.FadeInOutCentered._this ))
      _tmp._ReInit();
    if (( _tmp = _unit.SlideLeftCentered._this ))
      _tmp._ReInit();
    if (( _tmp = _unit.SlideUpCenteredLimit._this ))
      _tmp._ReInit();
  };

  // Function to reclaim memory occupied by unused objects.
  _unit._Reclaim = function( aCycle )
  {
    var _tmp;

    if (( _tmp = _unit.SlideDownCentered._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.SlideDownCentered._this = null );
    if (( _tmp = _unit.SlideUpCentered._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.SlideUpCentered._this = null );
    if (( _tmp = _unit.SlideRightCentered._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.SlideRightCentered._this = null );
    if (( _tmp = _unit.TitileFont32[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.TitileFont32[0]._this = null );
    if (( _tmp = _unit.ContactFont15[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.ContactFont15[0]._this = null );
    if (( _tmp = _unit.ContactFontBold15[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.ContactFontBold15[0]._this = null );
    if (( _tmp = _unit.IconsFont25[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.IconsFont25[0]._this = null );
    if (( _tmp = _unit.TitileFont29[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.TitileFont29[0]._this = null );
    if (( _tmp = _unit.IconsFont30[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.IconsFont30[0]._this = null );
    if (( _tmp = _unit.IconsFont20[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.IconsFont20[0]._this = null );
    if (( _tmp = _unit.TitileFont25[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.TitileFont25[0]._this = null );
    if (( _tmp = _unit.ContactFont12[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.ContactFont12[0]._this = null );
    if (( _tmp = _unit.ButtonRoundMedium[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.ButtonRoundMedium[0]._this = null );
    if (( _tmp = _unit.ButtonRoundBig[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.ButtonRoundBig[0]._this = null );
    if (( _tmp = _unit.ButtonRoundSmall[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.ButtonRoundSmall[0]._this = null );
    if (( _tmp = _unit.ButtonRoundMedium1[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.ButtonRoundMedium1[0]._this = null );
    if (( _tmp = _unit.FadeInOutCentered._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.FadeInOutCentered._this = null );
    if (( _tmp = _unit.SlideLeftCentered._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.SlideLeftCentered._this = null );
    if (( _tmp = _unit.SearchButton[0]._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.SearchButton[0]._this = null );
    if (( _tmp = _unit.SlideUpCenteredLimit._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.SlideUpCenteredLimit._this = null );
  };

  return _unit;
})();

/* Embedded Wizard */