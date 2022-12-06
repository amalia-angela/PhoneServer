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
if ( EmWiApp.Components )
  throw new Error( "The unit file 'Components.js' included twice!" );

// Create the unit object including all members of the unit.
EmWiApp.Components = (function()
{
  var _app  = EmWiApp;
  var _unit = {};

  // Constant values used in this 'JavaScript' module only.
  var _0000 = [ 0, 0, 70, 90 ];
  var _0001 = [ 0, 0, 70, 70 ];
  var _0002 = [ 0, 91 ];
  var _0003 = [ 70, 91 ];
  var _0004 = [ 70, 0 ];
  var _0005 = [ 0, 0 ];
  var _0006 = [ 0, 70, 70, 91 ];
  var _0007 = [ 20, 20 ];
  var _0008 = [ -10, -10 ];
  var _0009 = "\n";
  var _000A = "%";
  var _000B = [ 0, 0, 266, 32 ];
  var _000C = [ 0, 0, 268, 32 ];
  var _000D = [ 0, 0, 231, 32 ];
  var _000E = [ 0, 32 ];
  var _000F = [ 231, 32 ];
  var _0010 = [ 231, 0 ];
  var _0011 = [ 7, 3, 231, 33 ];
  var _0012 = [ 50, 70 ];
  var _0013 = [ 50, 50 ];
  var _0014 = [ 231, 3, 261, 31 ];
  var _0015 = [ 231, 33 ];
  var _0016 = [ 268, 33 ];
  var _0017 = [ 268, 1 ];
  var _0018 = [ 231, 1 ];
  var _0019 = "Text";
  var _001A = "Insert Text here";
  var _001B = "\n";
  var _001C = "Text\n";
  var _001D = [ 0, 0, 272, 32 ];
  var _001E = [ 272, 32 ];
  var _001F = [ 272, 0 ];
  var _0020 = [ 13, 2, 272, 32 ];
  var _0021 = [ 14, 2, 272, 32 ];
  var _0022 = [ 0, 29 ];
  var _0023 = [ 0, 5 ];
  var _0024 = [ 6, 436, 265, 470 ];
  var _0025 = [ 0, 0, 258, 33 ];
  var _0026 = [ 0, 33 ];
  var _0027 = [ 258, 33 ];
  var _0028 = [ 258, 0 ];
  var _0029 = [ 12, 0, 258, 33 ];
  var _002A = "Delete contact";
  var _002B = [ 0, 0, 66, 25 ];
  var _002C = [ 0, -4, 66, 28 ];
  var _002D = [ 0, 25 ];
  var _002E = [ 66, 25 ];
  var _002F = [ 66, 0 ];
  var _0030 = [ 0, 0, 68, 40 ];
  var _0031 = [ 0, 40 ];
  var _0032 = [ 65, 40 ];
  var _0033 = [ 65, 0 ];
  var _0034 = [ 0, 0, 68, 25 ];
  var _0035 = [ 0, 25, 68, 40 ];
  var _0036 = [ 0, 0, 35, 35 ];
  var _0037 = [ 0, 35 ];
  var _0038 = [ 35, 35 ];
  var _0039 = [ 35, 0 ];
  var _003A = [ 0, 0, 50, 75 ];
  var _003B = [ 0, 0, 50, 50 ];
  var _003C = [ 0, 50, 50, 75 ];
  var _003D = [ 0, 0, 65, 90 ];
  var _003E = [ 0, 0, 65, 65 ];
  var _003F = [ 0, 65, 65, 90 ];
  var _0040 = [ 0, 0, 25, 25 ];

  // This class implements a 'push button' widget. When the user presses the button, 
  // a signal is sent to the slot method stored in its @OnActivate property.
  _unit.ButtonBase70x90 =
  {
    DescriptFont : null,
    InitialsFont : null,
    Backgound : null,

    // The property 'OnActivate' can refer to a slot method, which will receive 
    // a signal as soon as the user has activated the button. Thereupon the method's 
    // logic will be executed.
    OnActivate : null,

    // This timer object is used to flash the button when the user has tapped it 
    // very quickly or the button has been activated with the keyboard. This is 
    // just a visual feedback effect.
    FlashTimer : null,

    // This key handler reacts to key press events. When the user presses the key 
    // specified in the property 'Filter' of the key handler, the handler is activated 
    // and the method '@onPressKey' is called.
    KeyHandler : null,
    Background : null,
    TouchHandler : null,
    InitialsTxt : null,
    DescripTxt : null,

    // The property 'Label' specifies the text to display as label in this push 
    // button widget. The desired font as well as the colors for all individual 
    // button states have to be specified in the configuration object assigned to 
    // the property @Appearance. If there is no configuration object associated 
    // to this push button widget (the property @Appearance is 'null'), no label 
    // is displayed.
    // Per default, the label is displayed centered within the push button area. 
    // You can modify the alignment of the label as well as its margins by specifying 
    // them in the configuration object.
    Initials : _app._EmptyString,
    Descript : _app._EmptyString,
    DescriptColor : 0,
    InitialsColor : 0,
    BackgoundColor : 0,
    BackgoundPressedColor : 0,
    BackgroundUnabled : 0,
    DescriptUnabled : 0,
    InitialsUnabled : 0,
    DescriptpPressColor : 0,
    InitialsPressColor : 0,

    // This variable stores the current state of the button.
    enabled : false,

    // This variable stores the current state of the button.
    selected : false,

    // This variable stores the current state of the button.
    pressed : false,

    // The method UpdateViewState() is invoked automatically after the state of 
    // the component has been changed. This method can be overridden and filled 
    // with logic to ensure the visual aspect of the component does reflect its 
    // current state. For example, the 'enabled' state of the component can affect 
    // its colors (disabled components may appear pale). In this case the logic 
    // of the method should modify the respective color properties accordingly to 
    // the current 'enabled' state. 
    // The current state of the component is passed as a set in the parameter aState. 
    // It reflects the very basic component state like its visibility or the ability 
    // to react to user inputs. Beside this common state, the method can also involve 
    // any other variables used in the component as long as they reflect its current 
    // state. For example, the toggle switch component can take in account its toggle 
    // state 'on' or 'off' and change accordingly the location of the slider, etc.
    // Usually, this method will be invoked automatically by the framework. Optionally 
    // you can request its invocation by using the method @InvalidateViewState().
    UpdateViewState : function( aState )
    {
      var _tmp;

      _app.Templates.PushButton.UpdateViewState.call( this, aState );

      var isEnabled = (( aState & 0x10 ) === 0x10 );
      var isSelected = (( aState & 0x20 ) === 0x20 );
      var isPressed = ( this.TouchHandler.Down && this.TouchHandler.Inside ) || 
        this.FlashTimer.Enabled;

      this.Background.OnSetBitmap( this.Backgound );

      if ( !!this.InitialsTxt )
      {
        this.InitialsTxt.OnSetFont( this.InitialsFont );
        this.InitialsTxt.OnSetString( this.Initials );
        this.InitialsTxt.OnSetColor( this.InitialsColor );
      }

      if ( !!this.DescripTxt )
      {
        this.DescripTxt.OnSetFont( this.DescriptFont );
        this.DescripTxt.OnSetString( this.Descript );
        this.DescripTxt.OnSetColor( this.DescriptColor );
      }

      if ( !isEnabled )
      {
        this.Background.OnSetColor( this.BackgroundUnabled );
        this.DescripTxt.OnSetColor( this.DescriptUnabled );
        this.InitialsTxt.OnSetColor( this.InitialsUnabled );
      }
      else
        if ( isPressed )
        {
          this.Background.OnSetColor( this.BackgoundPressedColor );
          this.DescripTxt.OnSetColor( this.DescriptpPressColor );
          this.InitialsTxt.OnSetColor( this.InitialsPressColor );
        }
        else
          this.Background.OnSetColor( this.BackgoundColor );

      this.enabled = isEnabled;
      this.selected = isSelected;
      this.pressed = isPressed;
    },

    // This internal slot method is called when the '@FlashTimer' is expired. It 
    // ends the short flash feedback effect.
    onFlashTimer : function( sender )
    {
      this.InvalidateViewState();
      _app._PostSignal( this.OnActivate, this );
    },

    // This internal slot method is called when the '@KeyHandler' is activated (when 
    // the user has pressed the key specified in the property 'Filter' of the key 
    // handler).
    onPressKey : function( sender )
    {
      if ( this.TouchHandler.Down )
        return;

      if ( this.KeyHandler.Repetition )
        return;

      this.InvalidateViewState();

      if ( this.FlashTimer.Enabled )
      {
        _app._PostSignal( this.OnActivate, this );
        this.FlashTimer.OnSetEnabled( false );
      }

      this.FlashTimer.OnSetEnabled( true );
    },

    // This internal slot method is called when the user drags the finger while 
    // pressing the button. This only updates the button to appear pressed or released.
    onEnterLeaveTouch : function( sender )
    {
      this.InvalidateViewState();
    },

    // This internal slot method is called when the user releases the touch screen 
    // after touching the button's area. This activates the button.
    onReleaseTouch : function( sender )
    {
      if ( !this.TouchHandler.Inside )
        return;

      if ( this.TouchHandler.AutoDeflected )
        return;

      if ( this.TouchHandler.HoldPeriod >= this.FlashTimer.Begin )
        _app._PostSignal( this.OnActivate, this );
      else
        this.FlashTimer.OnSetEnabled( true );
    },

    // This internal slot method is called when the user touches the button's area.
    onPressTouch : function( sender )
    {
      if ( this.FlashTimer.Enabled )
      {
        _app._PostSignal( this.OnActivate, this );
        this.FlashTimer.OnSetEnabled( false );
      }
    },

    // Implementation of the Chora method : 'Components::ButtonBase70x90.OnSetInitials()'
    OnSetInitials : function( value )
    {
      if ( this.Initials === value )
        return;

      this.Initials = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::ButtonBase70x90.OnSetDescript()'
    OnSetDescript : function( value )
    {
      if ( this.Descript === value )
        return;

      this.Descript = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::ButtonBase70x90.OnSetDescriptColor()'
    OnSetDescriptColor : function( value )
    {
      if ( this.DescriptColor === value )
        return;

      this.DescriptColor = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::ButtonBase70x90.OnSetInitialsColor()'
    OnSetInitialsColor : function( value )
    {
      if ( this.InitialsColor === value )
        return;

      this.InitialsColor = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::ButtonBase70x90.OnSetBackgoundColor()'
    OnSetBackgoundColor : function( value )
    {
      if ( this.BackgoundColor === value )
        return;

      this.BackgoundColor = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::ButtonBase70x90.OnSetBackgoundPressedColor()'
    OnSetBackgoundPressedColor : function( value )
    {
      if ( this.BackgoundPressedColor === value )
        return;

      this.BackgoundPressedColor = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::ButtonBase70x90.OnSetDescriptFont()'
    OnSetDescriptFont : function( value )
    {
      if ( this.DescriptFont === value )
        return;

      this.DescriptFont = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::ButtonBase70x90.OnSetInitialsFont()'
    OnSetInitialsFont : function( value )
    {
      if ( this.InitialsFont === value )
        return;

      this.InitialsFont = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::ButtonBase70x90.OnSetBackgound()'
    OnSetBackgound : function( value )
    {
      if ( this.Backgound === value )
        return;

      this.Backgound = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::ButtonBase70x90.OnSetBackgroundUnabled()'
    OnSetBackgroundUnabled : function( value )
    {
      if ( this.BackgroundUnabled === value )
        return;

      this.BackgroundUnabled = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::ButtonBase70x90.OnSetDescriptUnabled()'
    OnSetDescriptUnabled : function( value )
    {
      if ( this.DescriptUnabled === value )
        return;

      this.DescriptUnabled = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::ButtonBase70x90.OnSetInitialsPressColor()'
    OnSetInitialsPressColor : function( value )
    {
      if ( this.InitialsPressColor === value )
        return;

      this.InitialsPressColor = value;
      this.InvalidateViewState();
    },

    // Initializer for the class 'Components::ButtonBase70x90'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Templates.PushButton._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Core.Timer._Init.call( this.FlashTimer = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.KeyHandler = { _parent:this }, 0 );
      _app.Views.Image._Init.call( this.Background = { _parent:this }, 0 );
      _app.Core.SimpleTouchHandler._Init.call( this.TouchHandler = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.InitialsTxt = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.DescripTxt = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.ButtonBase70x90;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _0000 );
      this.FlashTimer.OnSetPeriod( 0 );
      this.FlashTimer.OnSetBegin( 50 );
      this.KeyHandler.Filter = 149;
      this.DescriptColor = _app.Res.Blue;
      this.InitialsColor = _app.Res.White;
      this.BackgoundColor = _app.Res.Grey;
      this.BackgoundPressedColor = _app.Res.GreyLight;
      this.Background.OnSetLayout( 0x3F );
      this.Background.OnSetBounds( _0001 );
      this.Background.OnSetColor( 0xFFFFFFFF );
      this.TouchHandler.OnSetLayout( 0x3F );
      this.TouchHandler.OnSetPoint4( _0002 );
      this.TouchHandler.OnSetPoint3( _0003 );
      this.TouchHandler.OnSetPoint2( _0004 );
      this.TouchHandler.OnSetPoint1( _0005 );
      this.TouchHandler.RetargetCondition = 0xF;
      this.TouchHandler.OnSetMaxStrikeCount( 100 );
      this.InitialsTxt.OnSetBounds( _0001 );
      this.InitialsTxt.OnSetAutoSize( true );
      this.InitialsTxt.OnSetString( _app._EmptyString );
      this.InitialsTxt.OnSetColor( 0xFFFFFFFF );
      this.DescripTxt.OnSetBounds( _0006 );
      this.DescripTxt.OnSetAutoSize( true );
      this.DescripTxt.OnSetAlignment( 0x22 );
      this.DescripTxt.OnSetString( _app._EmptyString );
      this.BackgroundUnabled = _app.Res.Grey;
      this.DescriptUnabled = _app.Res.Grey;
      this.InitialsUnabled = _app.Res.Grey;
      this.DescriptpPressColor = _app.Res.GreyLight;
      this.InitialsPressColor = _app.Res.BlueLight;
      this.Add( this.Background, 0 );
      this.Add( this.TouchHandler, 0 );
      this.Add( this.InitialsTxt, 0 );
      this.Add( this.DescripTxt, 0 );
      this.FlashTimer.OnTrigger = [ this, this.onFlashTimer ];
      this.KeyHandler.OnPress = [ this, this.onPressKey ];
      this.DescriptFont = _app._GetResource( _app.Res.ContactFont12 );
      this.InitialsFont = _app._GetResource( _app.Res.TitileFont25 );
      this.Backgound = _app._GetResource( _app.Res.ButtonRoundBig );
      this.TouchHandler.OnLeave = [ this, this.onEnterLeaveTouch ];
      this.TouchHandler.OnEnter = [ this, this.onEnterLeaveTouch ];
      this.TouchHandler.OnRelease = [ this, this.onReleaseTouch ];
      this.TouchHandler.OnPress = [ this, this.onPressTouch ];
      this.InitialsTxt.OnSetFont( _app._GetResource( _app.Res.IconsFont30 ));
      this.DescripTxt.OnSetFont( _app._GetResource( _app.Res.ContactFontBold15 ));
    },

    // Deintializer for the class 'Components::ButtonBase70x90'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Templates.PushButton;

      // Then deitialize all embedded objects ...
      this.FlashTimer._Done();
      this.KeyHandler._Done();
      this.Background._Done();
      this.TouchHandler._Done();
      this.InitialsTxt._Done();
      this.DescripTxt._Done();

      // Finally continue the deinitialization in the super class
      _app.Templates.PushButton._Done.call( this );
    },

    // Re-Initializer for the class 'Components::ButtonBase70x90'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Templates.PushButton._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.FlashTimer._ReInit();
      this.KeyHandler._ReInit();
      this.Background._ReInit();
      this.TouchHandler._ReInit();
      this.InitialsTxt._ReInit();
      this.DescripTxt._ReInit();
    },

    // Garbage Collector method for the class 'Components::ButtonBase70x90'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Templates.PushButton._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.DescriptFont ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.InitialsFont ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Backgound ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnActivate ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.FlashTimer )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.KeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Background )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TouchHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.InitialsTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.DescripTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Components::ButtonBase70x90"
  };

  // This component implements an editor.
  _unit.SearchEtxt =
  {
    // This internal variable refers to a temporary Views::Image object used to 
    // show the background for the augmented text content around the caret. This 
    // view appears during the user is moving this caret by touching the caret with 
    // the finger.
    magnifyingBack : null,

    // This internal variable refers to a temporary Views::WarpGroup object used 
    // to show the augmented text content around the caret. This view appears during 
    // the user is moving this caret by touching the caret with the finger.
    magnifyingView : null,

    // The property 'Font' refers to the font object used to display the text. The 
    // text is determined by the property @String.
    Font : null,

    // The property 'Font' refers to the font object used to display the text. The 
    // text is determined by the property @String.
    IconFont : null,

    // The property 'OnChange' can refer to a slot method, which should be invoked 
    // by the text editor when the user modifies the text.
    OnChange : null,

    // This bool change effect is used to blink the caret.
    blinkEffect : null,

    // This key handler reacts to user inputs if the user has pressed the 'up', 
    // 'down', 'left' or 'right' key. In this case the associated onCursorKey method 
    // is called.
    CursorKeyHandler : null,

    // This key handler reacts to user inputs if the user has pressed the 'backspace' 
    // key. In this case the associated onBackspaceKey method is called.
    BackspaceKeyHandler : null,

    // This key handler reacts to user inputs if the user has pressed the 'delete' 
    // key. In this case the associated onDeleteKey method is called.
    DeleteKeyHandler : null,

    // This key handler reacts to user inputs if the user has pressed the 'enter' 
    // key. In this case the associated onNewlineKey method is called.
    NewlineKeyHandler : null,

    // This key handler reacts to user inputs if the user has pressed a key corresponding 
    // to character/digit. In this case the associated onCharacterKey method is 
    // called.
    CharacterKeyHandler : null,
    Frame : null,

    // This slide gesture handler is used to scroll the text content.
    SlideTouchHandler : null,

    // This generic touch handler is used to move the caret.
    SimpleTouchHandler : null,
    Text : null,
    Caret : null,
    Search : null,
    SimpleTouchHandler1 : null,

    // This generic touch handler is used to move the caret.
    SimpleTouchHandler2 : null,

    // The property 'String' stores the text of the editor.
    Icon : _app._EmptyString,

    // This internal variable stores the current caret index. This is the position 
    // within Text.String property where the user can input text or delete signs.
    caretIndex : 0,

    // The property 'Color' controls the color of the text.
    Color : 0xFF000000,

    // This flag is set if it is evtl. necessary to scroll the editor content in 
    // order to ensure that the caret is still visible.
    autoScroll : false,

    // The method UpdateViewState() is invoked automatically after the state of 
    // the component has been changed. This method can be overridden and filled 
    // with logic to ensure the visual aspect of the component does reflect its 
    // current state. For example, the 'enabled' state of the component can affect 
    // its colors (disabled components may appear pale). In this case the logic 
    // of the method should modify the respective color properties accordingly to 
    // the current 'enabled' state. 
    // The current state of the component is passed as a set in the parameter aState. 
    // It reflects the very basic component state like its visibility or the ability 
    // to react to user inputs. Beside this common state, the method can also involve 
    // any other variables used in the component as long as they reflect its current 
    // state. For example, the toggle switch component can take in account its toggle 
    // state 'on' or 'off' and change accordingly the location of the slider, etc.
    // Usually, this method will be invoked automatically by the framework. Optionally 
    // you can request its invocation by using the method @InvalidateViewState().
    UpdateViewState : function( aState )
    {
      var _tmp;

      _app.Templates.TextEditor.UpdateViewState.call( this, aState );

      if ((( aState & 0x40 ) === 0x40 ))
        this.blinkEffect.OnSetEnabled( true );
      else
      {
        this.blinkEffect.OnSetEnabled( false );
        this.Caret.OnSetVisible( false );
      }

      this.Search.OnSetFont( this.IconFont );
      this.Search.OnSetString( this.Icon );
    },

    // This slot method is called after the caret has been adjusted. Its job is 
    // to adjust too the position of the magnifying glass view where the augmented 
    // text content around the caret is shown.
    updateMagnifyingView : function( sender )
    {
      var _tmp;

      if ( !this.magnifyingView )
        return;

      var srcArea = this.magnifyingView.SourceArea;
      var extent = this.magnifyingView.GetExtent();
      var bounds = this.Bounds;
      var caret = this.Caret.Point1;
      var srcX = caret[0] - ((( srcArea[2] - srcArea[0]) / 2 ) | 0 );

      if ( srcX < 0 )
        srcX = 0;

      if (( srcX + ( srcArea[2] - srcArea[0])) > ( bounds[2] - bounds[0]))
        srcX = ( bounds[2] - bounds[0]) - ( srcArea[2] - srcArea[0]);

      this.magnifyingView.OnSetSourceArea( _app._SetRectOrigin( this.magnifyingView.SourceArea, 
      [ srcX, caret[1]]));

      var dstX = ( bounds[0] + caret[0]) - (( caret[0] - srcX ) * 2 );
      var ofs = [ dstX - extent[0], ( bounds[1] + caret[1]) - extent[3]];

      this.magnifyingView.MoveView( ofs, false );
      this.magnifyingBack.MoveView( ofs, false );
    },

    // This slot method is called after a short delay when the user has moved the 
    // caret or modified the text. Its job is to ensure that the caret is still 
    // visible. If necessary, the editor content is scrolled.
    updateScrollOffset : function( sender )
    {
      var _tmp;
      var bounds = this.Text.Bounds;
      var ofsX = 0;
      var ofsY = 0;

      if ( this.Caret.Point1[0] < bounds[0])
        ofsX = bounds[0] - this.Caret.Point1[0];

      if ( this.Caret.Point1[0] > bounds[2])
        ofsX = bounds[2] - this.Caret.Point1[0];

      if ( this.Caret.Point1[1] < bounds[1])
        ofsY = bounds[1] - this.Caret.Point1[1];

      if ( this.Caret.Point2[1] > bounds[3])
        ofsY = bounds[3] - this.Caret.Point2[1];

      if ( !!ofsX || !!ofsY )
        this.Text.OnSetScrollOffset( _app._MovePointPos( this.Text.ScrollOffset, 
        [ ofsX, ofsY ]));

      ofsX = this.Text.ScrollOffset[0];
      ofsY = this.Text.ScrollOffset[1];

      var size = [( _tmp = this.Text.GetContentArea())[2] - _tmp[0], _tmp[3] - _tmp[1]];

      if ( size[0] <= (( _tmp = this.Text.Bounds )[2] - _tmp[0]))
        ofsX = 0;

      if ( size[1] <= (( _tmp = this.Text.Bounds )[3] - _tmp[1]))
        ofsY = 0;

      this.Text.OnSetScrollOffset([ ofsX, ofsY ]);
    },

    // This slot method is attached to the Text view. Each time the Text view has 
    // rearranged the text, this method is called. Its job is to adjust the caret 
    // to the evtl. new position.
    updateCaret : function( sender )
    {
      if ( !this.Font )
        return;

      var rowCol = this.Text.StringIndex2RowCol( this.caretIndex );
      var pos = this.Text.RowCol2Position( rowCol );

      this.Caret.OnSetPoint1( _app._MovePointNeg( pos, [ 0, this.Font.Ascent ]));
      this.Caret.OnSetPoint2( _app._MovePointPos( pos, [ 0, this.Font.Descent ]));

      if ( this.blinkEffect.Enabled )
      {
        this.blinkEffect.OnSetEnabled( false );
        this.blinkEffect.OnSetEnabled( true );
      }

      if ( this.autoScroll )
      {
        _app._PostSignal([ this, this.updateScrollOffset ], this );
        this.autoScroll = false;
      }

      if ( !!this.magnifyingView )
        _app._PostSignal([ this, this.updateMagnifyingView ], this );
    },

    // This method is called from the corresponding SimpleTouchHandler. Its job 
    // is to hide the magnifying glass view again.
    onReleaseTouch : function( sender )
    {
      if ( !!this.magnifyingView )
      {
        this.Owner.Remove( this.magnifyingView );
        this.Owner.Remove( this.magnifyingBack );
        this.magnifyingView = null;
        this.magnifyingBack = null;
        this.OnSetBuffered( false );
      }
    },

    // This method is called from the corresponding SimpleTouchHandler. Its job 
    // is to move the caret accordingly to the user's finger movement.
    onDragTouch : function( sender )
    {
      if ( !!this.magnifyingView )
      {
        var rc = this.Text.Position2RowCol( this.SimpleTouchHandler.CurrentPos );
        var newCaretIndex = this.Text.RowCol2StringIndex( rc );

        if ( newCaretIndex !== this.caretIndex )
        {
          this.caretIndex = newCaretIndex;
          _app._PostSignal([ this, this.updateCaret ], this );
          this.autoScroll = true;
        }
      }
      else
      {
        var ofs = _app._MovePointNeg( this.SimpleTouchHandler.CurrentPos, this.SimpleTouchHandler.HittingPos );

        if (((( ofs[0] < -8 ) || ( ofs[0] > 8 )) || ( ofs[1] < -8 )) || ( ofs[1] 
            > 8 ))
          this.GetRoot().DeflectCursor( this.SlideTouchHandler, _0005 );
      }
    },

    // This method is called from the corresponding SimpleTouchHandler. Its job 
    // is to activate the caret movement mode if the user has pressed the finger 
    // on the screen for a while. The method also shows a small magnifying glass 
    // where the text around the caret is shown. This should help the user to navigate 
    // the caret with the finger.
    onHoldTouch : function( sender )
    {
      var _tmp;

      if (( this.SimpleTouchHandler.HoldPeriod >= 300 ) && !this.magnifyingView )
      {
        var height = this.Caret.Point2[1] - this.Caret.Point1[1];
        var width = height * 3;

        if ( height > (( _tmp = this.Bounds )[3] - _tmp[1]))
          height = ( _tmp = this.Bounds )[3] - _tmp[1];

        if ( width > (( _tmp = this.Bounds )[2] - _tmp[0]))
          width = ( _tmp = this.Bounds )[2] - _tmp[0];

        this.OnSetBuffered( true );
        this.magnifyingView = _app._NewObject( _app.Views.WarpGroup, 0 );
        this.magnifyingBack = _app._NewObject( _app.Views.Rectangle, 0 );
        this.magnifyingView.OnSetGroup( this );
        this.magnifyingView.OnSetQuality( true );
        this.magnifyingView.OnSetOpacity( 200 );
        this.magnifyingView.OnSetSourceArea([ 0, 0, width, height ]);
        this.magnifyingView.OnSetPoint2([ width * 2, this.magnifyingView.Point2[1]]);
        this.magnifyingView.OnSetPoint3([ width * 2, this.magnifyingView.Point3[1]]);
        this.magnifyingView.OnSetPoint3([ this.magnifyingView.Point3[0], height 
        * 2 ]);
        this.magnifyingView.OnSetPoint4([ this.magnifyingView.Point4[0], height 
        * 2 ]);
        this.magnifyingBack.OnSetBounds( _app._SetRectSize( this.magnifyingBack.Bounds, 
        _app._MovePointPos([ width * 2, height * 2 ], _0007 )));
        this.magnifyingBack.OnSetBounds( _app._SetRectOrigin( this.magnifyingBack.Bounds, 
        _0008 ));
        this.magnifyingBack.OnSetColor( 0xCCEEEEEE );
        this.Owner.Add( this.magnifyingBack, 0 );
        this.Owner.Add( this.magnifyingView, 0 );
        _app._PostSignal([ this, this.updateMagnifyingView ], this );
      }

      if ( !!this.magnifyingView )
        this.onDragTouch( this );
    },

    // This method is called from the corresponding SimpleTouchHandler. Its job 
    // is to obtain the focused state for the editor so the user can interact with 
    // the editor content and to place the caret at the touched position.
    onPressTouch : function( sender )
    {
      if ( !this.HasViewState( 0x40 ))
        this.ObtainFocus();

      var rc = this.Text.Position2RowCol( this.SimpleTouchHandler.CurrentPos );
      var newCaretIndex = this.Text.RowCol2StringIndex( rc );

      if ( newCaretIndex !== this.caretIndex )
      {
        this.caretIndex = newCaretIndex;
        _app._PostSignal([ this, this.updateCaret ], this );
        this.autoScroll = true;
      }
    },

    // This method is called from the corresponding keyboard handler. Its job is 
    // to move the caret up/down/left or right in the editor text.
    onCursorKey : function( sender )
    {
      if ( !this.Font )
        return;

      var rc = this.Text.StringIndex2RowCol( this.caretIndex );

      if ( this.CursorKeyHandler.Code === 6 )
      {
        rc = [ rc[0] - 1, rc[1]];

        if ( this.Text.RowCol2StringIndex( rc ) === this.caretIndex )
        {
          rc = [ rc[0], rc[1] - 1 ];
          rc = [ this.Text.GetRowString( rc[1]).length, rc[1]];
        }
      }

      if ( this.CursorKeyHandler.Code === 7 )
      {
        rc = [ rc[0] + 1, rc[1]];

        if ( this.Text.RowCol2StringIndex( rc ) === this.caretIndex )
        {
          rc = [ rc[0], rc[1] + 1 ];
          rc = [ 0, rc[1]];
        }
      }

      if ( this.CursorKeyHandler.Code === 4 )
      {
        var pos = this.Text.RowCol2Position( rc );
        var rowHeight = ( this.Font.Ascent + this.Font.Descent ) + this.Font.Leading;

        rc = this.Text.Position2RowCol( _app._MovePointNeg( pos, [ 0, rowHeight ]));
      }

      if ( this.CursorKeyHandler.Code === 5 )
      {
        var pos = this.Text.RowCol2Position( rc );
        var rowHeight = ( this.Font.Ascent + this.Font.Descent ) + this.Font.Leading;

        rc = this.Text.Position2RowCol( _app._MovePointPos( pos, [ 0, rowHeight ]));
      }

      var newCaretIndex = this.Text.RowCol2StringIndex( rc );

      if ( newCaretIndex !== this.caretIndex )
      {
        this.caretIndex = newCaretIndex;
        _app._PostSignal([ this, this.updateCaret ], this );
        this.autoScroll = true;
      }
    },

    // This method is called from the corresponding keyboard handler. Its job is 
    // to delete the sign preceding the current caret position and to move the caret 
    // accordingly.
    onBackspaceKey : function( sender )
    {
      if ( !this.caretIndex )
        return;

      var ch = this.Text.String.charCodeAt( this.caretIndex - 1 ) || 0;
      var count = 1;

      if ((( ch === 0x5E ) || ( ch === 0x7E )) || ( ch === 0x25 ))
        count = 2;

      this.Text.OnSetString( _app._StringRemove( this.Text.String, this.caretIndex 
      - count, count ));
      this.caretIndex = this.caretIndex - count;
      this.autoScroll = true;
      _app._PostSignal( this.OnChange, this );
    },

    // This method is called from the corresponding keyboard handler. Its job is 
    // to delete the sign at the current caret position.
    onDeleteKey : function( sender )
    {
      if ( this.caretIndex >= ( this.Text.String.length - 1 ))
        return;

      var ch = this.Text.String.charCodeAt( this.caretIndex ) || 0;
      var count = 1;

      if ( ch === 0x25 )
        count = 2;

      this.Text.OnSetString( _app._StringRemove( this.Text.String, this.caretIndex, 
      count ));
      this.autoScroll = true;
      _app._PostSignal( this.OnChange, this );
    },

    // This method is called from the corresponding keyboard handler. Its job is 
    // to insert at the current caret position the <new line> sign and to move the 
    // caret to the next row.
    onNewlineKey : function( sender )
    {
      this.Text.OnSetString( _app._StringInsert( this.Text.String, _0009, this.caretIndex ));
      this.caretIndex = this.caretIndex + 1;
      this.autoScroll = true;
      _app._PostSignal( this.OnChange, this );
    },

    // This method is called from the corresponding keyboard handler. Its job is 
    // to insert at the current caret position the sign which has been input by 
    // the user and to move the caret to the next column.
    onCharacterKey : function( sender )
    {
      var ch = this.CharacterKeyHandler.CharCode;
      var str = String.fromCharCode( ch );

      if (((( ch === 0x5E ) || ( ch === 0x7E )) || ( ch === 0xAD )) || ( ch === 
          0x25 ))
        str = _000A + String.fromCharCode( ch );

      this.Text.OnSetString( _app._StringInsert( this.Text.String, str, this.caretIndex ));
      this.caretIndex = this.caretIndex + str.length;
      this.autoScroll = true;
      _app._PostSignal( this.OnChange, this );
    },

    // Implementation of the Chora method : 'Components::SearchEtxt.OnSetColor()'
    OnSetColor : function( value )
    {
      if ( this.Color === value )
        return;

      this.Color = value;
      this.Text.OnSetColor( value );
      this.Caret.OnSetColor( value );
    },

    // Implementation of the Chora method : 'Components::SearchEtxt.onIconPress()'
    onIconPress : function( sender )
    {
    },

    // Initializer for the class 'Components::SearchEtxt'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Templates.TextEditor._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Effects.BoolEffect._Init.call( this.blinkEffect = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.CursorKeyHandler = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.BackspaceKeyHandler = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.DeleteKeyHandler = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.NewlineKeyHandler = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.CharacterKeyHandler = { _parent:this }, 0 );
      _app.Views.Frame._Init.call( this.Frame = { _parent:this }, 0 );
      _app.Core.SlideTouchHandler._Init.call( this.SlideTouchHandler = { _parent:this }, 0 );
      _app.Core.SimpleTouchHandler._Init.call( this.SimpleTouchHandler = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.Text = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Caret = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.Search = { _parent:this }, 0 );
      _app.Core.SimpleTouchHandler._Init.call( this.SimpleTouchHandler1 = { _parent:this }, 0 );
      _app.Core.SimpleTouchHandler._Init.call( this.SimpleTouchHandler2 = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.SearchEtxt;

      // ... and initialize objects, variables, properties, etc.
      var _tmp;

      this.OnSetBounds( _000B );
      this.blinkEffect.Value2 = false;
      this.blinkEffect.Value1 = true;
      this.blinkEffect.OnSetCycleDuration( 500 );
      this.blinkEffect.OnSetInterCycleDelay( 500 );
      this.CursorKeyHandler.Filter = 147;
      this.BackspaceKeyHandler.Filter = 151;
      this.DeleteKeyHandler.Filter = 44;
      this.NewlineKeyHandler.Filter = 149;
      this.CharacterKeyHandler.Filter = 145;
      this.Frame.OnSetLayout( 0x3F );
      this.Frame.OnSetBounds( _000C );
      this.Frame.OnSetColor( 0xFDF0F0F0 );
      this.SlideTouchHandler.OnSetLayout( 0x3F );
      this.SlideTouchHandler.OnSetBounds( _000D );
      this.SlideTouchHandler.SlideHorz = false;
      this.SlideTouchHandler.OnSetFriction( 0.050000 );
      this.SimpleTouchHandler.OnSetLayout( 0x3F );
      this.SimpleTouchHandler.OnSetPoint4( _000E );
      this.SimpleTouchHandler.OnSetPoint3( _000F );
      this.SimpleTouchHandler.OnSetPoint2( _0010 );
      this.SimpleTouchHandler.OnSetPoint1( _0005 );
      this.SimpleTouchHandler.OnSetMaxStrikeCount( 3 );
      this.Text.OnSetLayout( 0x3F );
      this.Text.OnSetBounds( _0011 );
      this.Text.OnSetWrapText( true );
      this.Text.OnSetAlignment( 0x11 );
      this.Text.OnSetString( _app._EmptyString );
      this.Text.OnSetColor( 0xFDB9B9B9 );
      this.Caret.OnSetPoint2( _0012 );
      this.Caret.OnSetPoint1( _0013 );
      this.Caret.OnSetWidth2( 2 );
      this.Caret.OnSetWidth1( 2 );
      this.Caret.OnSetColor( 0xFF000000 );
      this.Caret.OnSetVisible( false );
      this.Search.OnSetLayout( 0x14 );
      this.Search.OnSetBounds( _0014 );
      this.Search.OnSetWrapText( true );
      this.Search.OnSetColor( 0xFDB9B9B9 );
      this.Icon = _app.Res.SerachIconTxt;
      this.SimpleTouchHandler2.OnSetLayout( 0x3F );
      this.SimpleTouchHandler2.OnSetPoint4( _0015 );
      this.SimpleTouchHandler2.OnSetPoint3( _0016 );
      this.SimpleTouchHandler2.OnSetPoint2( _0017 );
      this.SimpleTouchHandler2.OnSetPoint1( _0018 );
      this.SimpleTouchHandler2.OnSetMaxStrikeCount( 3 );
      this.Add( this.Frame, 0 );
      this.Add( this.SlideTouchHandler, 0 );
      this.Add( this.SimpleTouchHandler, 0 );
      this.Add( this.Text, 0 );
      this.Add( this.Caret, 0 );
      this.Add( this.Search, 0 );
      this.Add( this.SimpleTouchHandler1, 0 );
      this.Add( this.SimpleTouchHandler2, 0 );
      this.blinkEffect.Outlet = [ _tmp = this.Caret, _tmp.OnGetVisible, _tmp.OnSetVisible ];
      this.Font = _app._GetResource( _app.Resources.FontMedium );
      this.CursorKeyHandler.OnPress = [ this, this.onCursorKey ];
      this.CursorKeyHandler.OnHold = [ this, this.onCursorKey ];
      this.BackspaceKeyHandler.OnPress = [ this, this.onBackspaceKey ];
      this.BackspaceKeyHandler.OnHold = [ this, this.onBackspaceKey ];
      this.DeleteKeyHandler.OnPress = [ this, this.onDeleteKey ];
      this.DeleteKeyHandler.OnHold = [ this, this.onDeleteKey ];
      this.NewlineKeyHandler.OnPress = [ this, this.onNewlineKey ];
      this.NewlineKeyHandler.OnHold = [ this, this.onNewlineKey ];
      this.CharacterKeyHandler.OnPress = [ this, this.onCharacterKey ];
      this.CharacterKeyHandler.OnHold = [ this, this.onCharacterKey ];
      this.Frame.OnSetBitmap( _app._GetResource( _app.Res.SearchButton ));
      this.SimpleTouchHandler.OnDrag = [ this, this.onDragTouch ];
      this.SimpleTouchHandler.OnHold = [ this, this.onHoldTouch ];
      this.SimpleTouchHandler.OnRelease = [ this, this.onReleaseTouch ];
      this.SimpleTouchHandler.OnPress = [ this, this.onPressTouch ];
      this.Text.OnSetOnUpdate([ this, this.updateCaret ]);
      this.Text.OnSetSlideHandler( this.SlideTouchHandler );
      this.Text.OnSetFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.IconFont = _app._GetResource( _app.Res.IconsFont25 );
      this.SimpleTouchHandler2.OnPress = [ this, this.onIconPress ];
    },

    // Deintializer for the class 'Components::SearchEtxt'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Templates.TextEditor;

      // Then deitialize all embedded objects ...
      this.blinkEffect._Done();
      this.CursorKeyHandler._Done();
      this.BackspaceKeyHandler._Done();
      this.DeleteKeyHandler._Done();
      this.NewlineKeyHandler._Done();
      this.CharacterKeyHandler._Done();
      this.Frame._Done();
      this.SlideTouchHandler._Done();
      this.SimpleTouchHandler._Done();
      this.Text._Done();
      this.Caret._Done();
      this.Search._Done();
      this.SimpleTouchHandler1._Done();
      this.SimpleTouchHandler2._Done();

      // Finally continue the deinitialization in the super class
      _app.Templates.TextEditor._Done.call( this );
    },

    // Re-Initializer for the class 'Components::SearchEtxt'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Templates.TextEditor._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.blinkEffect._ReInit();
      this.CursorKeyHandler._ReInit();
      this.BackspaceKeyHandler._ReInit();
      this.DeleteKeyHandler._ReInit();
      this.NewlineKeyHandler._ReInit();
      this.CharacterKeyHandler._ReInit();
      this.Frame._ReInit();
      this.SlideTouchHandler._ReInit();
      this.SimpleTouchHandler._ReInit();
      this.Text._ReInit();
      this.Caret._ReInit();
      this.Search._ReInit();
      this.SimpleTouchHandler1._ReInit();
      this.SimpleTouchHandler2._ReInit();
    },

    // Garbage Collector method for the class 'Components::SearchEtxt'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Templates.TextEditor._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.magnifyingBack ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.magnifyingView ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Font ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.IconFont ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnChange ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.blinkEffect )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.CursorKeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.BackspaceKeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.DeleteKeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.NewlineKeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.CharacterKeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Frame )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.SlideTouchHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.SimpleTouchHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Text )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Caret )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Search )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.SimpleTouchHandler1 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.SimpleTouchHandler2 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Components::SearchEtxt"
  };

  // This component implements an editor.
  _unit.InputEtxt =
  {
    // This internal variable refers to a temporary Views::Image object used to 
    // show the background for the augmented text content around the caret. This 
    // view appears during the user is moving this caret by touching the caret with 
    // the finger.
    magnifyingBack : null,

    // This internal variable refers to a temporary Views::WarpGroup object used 
    // to show the augmented text content around the caret. This view appears during 
    // the user is moving this caret by touching the caret with the finger.
    magnifyingView : null,

    // The property 'Font' refers to the font object used to display the text. The 
    // text is determined by the property @String.
    Font : null,

    // The property 'OnChange' can refer to a slot method, which should be invoked 
    // by the text editor when the user modifies the text.
    OnChange : null,

    // This bool change effect is used to blink the caret.
    blinkEffect : null,

    // This key handler reacts to user inputs if the user has pressed the 'up', 
    // 'down', 'left' or 'right' key. In this case the associated onCursorKey method 
    // is called.
    CursorKeyHandler : null,

    // This key handler reacts to user inputs if the user has pressed the 'backspace' 
    // key. In this case the associated onBackspaceKey method is called.
    BackspaceKeyHandler : null,

    // This key handler reacts to user inputs if the user has pressed the 'delete' 
    // key. In this case the associated onDeleteKey method is called.
    DeleteKeyHandler : null,

    // This key handler reacts to user inputs if the user has pressed the 'enter' 
    // key. In this case the associated onNewlineKey method is called.
    NewlineKeyHandler : null,

    // This key handler reacts to user inputs if the user has pressed a key corresponding 
    // to character/digit. In this case the associated onCharacterKey method is 
    // called.
    CharacterKeyHandler : null,

    // This slide gesture handler is used to scroll the text content.
    SlideTouchHandler : null,

    // This generic touch handler is used to move the caret.
    SimpleTouchHandler : null,
    Text : null,
    TextPlaceholder : null,
    Caret : null,

    // The property 'String' stores the text of the editor.
    String : _0019,

    // The property 'String' stores the text of the editor.
    Placeholder : _001A,

    // This internal variable stores the current caret index. This is the position 
    // within Text.String property where the user can input text or delete signs.
    caretIndex : 0,

    // The property 'Alignment' determines how the editor should display the text 
    // rows if their size differ from the size of the editor. 
    // In this manner the rows can be aligned horizontally. The entire text block 
    // can be aligned vertically.
    Alignment : 0x11,

    // The property 'Color' controls the color of the text.
    Color : 0xFF000000,

    // This flag is set if it is evtl. necessary to scroll the editor content in 
    // order to ensure that the caret is still visible.
    autoScroll : false,

    // The method UpdateViewState() is invoked automatically after the state of 
    // the component has been changed. This method can be overridden and filled 
    // with logic to ensure the visual aspect of the component does reflect its 
    // current state. For example, the 'enabled' state of the component can affect 
    // its colors (disabled components may appear pale). In this case the logic 
    // of the method should modify the respective color properties accordingly to 
    // the current 'enabled' state. 
    // The current state of the component is passed as a set in the parameter aState. 
    // It reflects the very basic component state like its visibility or the ability 
    // to react to user inputs. Beside this common state, the method can also involve 
    // any other variables used in the component as long as they reflect its current 
    // state. For example, the toggle switch component can take in account its toggle 
    // state 'on' or 'off' and change accordingly the location of the slider, etc.
    // Usually, this method will be invoked automatically by the framework. Optionally 
    // you can request its invocation by using the method @InvalidateViewState().
    UpdateViewState : function( aState )
    {
      var _tmp;

      _app.Templates.TextEditor.UpdateViewState.call( this, aState );

      if ((( aState & 0x40 ) === 0x40 ))
        this.blinkEffect.OnSetEnabled( true );
      else
      {
        this.blinkEffect.OnSetEnabled( false );
        this.Caret.OnSetVisible( false );
      }
    },

    // This slot method is called after the caret has been adjusted. Its job is 
    // to adjust too the position of the magnifying glass view where the augmented 
    // text content around the caret is shown.
    updateMagnifyingView : function( sender )
    {
      var _tmp;

      if ( !this.magnifyingView )
        return;

      var srcArea = this.magnifyingView.SourceArea;
      var extent = this.magnifyingView.GetExtent();
      var bounds = this.Bounds;
      var caret = this.Caret.Point1;
      var srcX = caret[0] - ((( srcArea[2] - srcArea[0]) / 2 ) | 0 );

      if ( srcX < 0 )
        srcX = 0;

      if (( srcX + ( srcArea[2] - srcArea[0])) > ( bounds[2] - bounds[0]))
        srcX = ( bounds[2] - bounds[0]) - ( srcArea[2] - srcArea[0]);

      this.magnifyingView.OnSetSourceArea( _app._SetRectOrigin( this.magnifyingView.SourceArea, 
      [ srcX, caret[1]]));

      var dstX = ( bounds[0] + caret[0]) - (( caret[0] - srcX ) * 2 );
      var ofs = [ dstX - extent[0], ( bounds[1] + caret[1]) - extent[3]];

      this.magnifyingView.MoveView( ofs, false );
      this.magnifyingBack.MoveView( ofs, false );
    },

    // This slot method is called after a short delay when the user has moved the 
    // caret or modified the text. Its job is to ensure that the caret is still 
    // visible. If necessary, the editor content is scrolled.
    updateScrollOffset : function( sender )
    {
      var _tmp;
      var bounds = this.Text.Bounds;
      var ofsX = 0;
      var ofsY = 0;

      if ( this.Caret.Point1[0] < bounds[0])
        ofsX = bounds[0] - this.Caret.Point1[0];

      if ( this.Caret.Point1[0] > bounds[2])
        ofsX = bounds[2] - this.Caret.Point1[0];

      if ( this.Caret.Point1[1] < bounds[1])
        ofsY = bounds[1] - this.Caret.Point1[1];

      if ( this.Caret.Point2[1] > bounds[3])
        ofsY = bounds[3] - this.Caret.Point2[1];

      if ( !!ofsX || !!ofsY )
        this.Text.OnSetScrollOffset( _app._MovePointPos( this.Text.ScrollOffset, 
        [ ofsX, ofsY ]));

      ofsX = this.Text.ScrollOffset[0];
      ofsY = this.Text.ScrollOffset[1];

      var size = [( _tmp = this.Text.GetContentArea())[2] - _tmp[0], _tmp[3] - _tmp[1]];

      if ( size[0] <= (( _tmp = this.Text.Bounds )[2] - _tmp[0]))
        ofsX = 0;

      if ( size[1] <= (( _tmp = this.Text.Bounds )[3] - _tmp[1]))
        ofsY = 0;

      this.Text.OnSetScrollOffset([ ofsX, ofsY ]);
    },

    // This slot method is attached to the Text view. Each time the Text view has 
    // rearranged the text, this method is called. Its job is to adjust the caret 
    // to the evtl. new position.
    updateCaret : function( sender )
    {
      if ( !this.Font )
        return;

      var rowCol = this.Text.StringIndex2RowCol( this.caretIndex );
      var pos = this.Text.RowCol2Position( rowCol );

      this.Caret.OnSetPoint1( _app._MovePointNeg( pos, [ 0, this.Font.Ascent ]));
      this.Caret.OnSetPoint2( _app._MovePointPos( pos, [ 0, this.Font.Descent ]));

      if ( this.blinkEffect.Enabled )
      {
        this.blinkEffect.OnSetEnabled( false );
        this.blinkEffect.OnSetEnabled( true );
      }

      if ( this.autoScroll )
      {
        _app._PostSignal([ this, this.updateScrollOffset ], this );
        this.autoScroll = false;
      }

      if ( !!this.magnifyingView )
        _app._PostSignal([ this, this.updateMagnifyingView ], this );
    },

    // This method is called from the corresponding SimpleTouchHandler. Its job 
    // is to hide the magnifying glass view again.
    onReleaseTouch : function( sender )
    {
      if ( !!this.magnifyingView )
      {
        this.Owner.Remove( this.magnifyingView );
        this.Owner.Remove( this.magnifyingBack );
        this.magnifyingView = null;
        this.magnifyingBack = null;
        this.OnSetBuffered( false );
      }
    },

    // This method is called from the corresponding SimpleTouchHandler. Its job 
    // is to move the caret accordingly to the user's finger movement.
    onDragTouch : function( sender )
    {
      if ( !!this.magnifyingView )
      {
        var rc = this.Text.Position2RowCol( this.SimpleTouchHandler.CurrentPos );
        var newCaretIndex = this.Text.RowCol2StringIndex( rc );

        if ( newCaretIndex !== this.caretIndex )
        {
          this.caretIndex = newCaretIndex;
          _app._PostSignal([ this, this.updateCaret ], this );
          this.autoScroll = true;
        }
      }
      else
      {
        var ofs = _app._MovePointNeg( this.SimpleTouchHandler.CurrentPos, this.SimpleTouchHandler.HittingPos );

        if (((( ofs[0] < -8 ) || ( ofs[0] > 8 )) || ( ofs[1] < -8 )) || ( ofs[1] 
            > 8 ))
          this.GetRoot().DeflectCursor( this.SlideTouchHandler, _0005 );
      }
    },

    // This method is called from the corresponding SimpleTouchHandler. Its job 
    // is to activate the caret movement mode if the user has pressed the finger 
    // on the screen for a while. The method also shows a small magnifying glass 
    // where the text around the caret is shown. This should help the user to navigate 
    // the caret with the finger.
    onHoldTouch : function( sender )
    {
      var _tmp;

      if (( this.SimpleTouchHandler.HoldPeriod >= 300 ) && !this.magnifyingView )
      {
        var height = this.Caret.Point2[1] - this.Caret.Point1[1];
        var width = height * 3;

        if ( height > (( _tmp = this.Bounds )[3] - _tmp[1]))
          height = ( _tmp = this.Bounds )[3] - _tmp[1];

        if ( width > (( _tmp = this.Bounds )[2] - _tmp[0]))
          width = ( _tmp = this.Bounds )[2] - _tmp[0];

        this.OnSetBuffered( true );
        this.magnifyingView = _app._NewObject( _app.Views.WarpGroup, 0 );
        this.magnifyingBack = _app._NewObject( _app.Views.Rectangle, 0 );
        this.magnifyingView.OnSetGroup( this );
        this.magnifyingView.OnSetQuality( true );
        this.magnifyingView.OnSetOpacity( 200 );
        this.magnifyingView.OnSetSourceArea([ 0, 0, width, height ]);
        this.magnifyingView.OnSetPoint2([ width * 2, this.magnifyingView.Point2[1]]);
        this.magnifyingView.OnSetPoint3([ width * 2, this.magnifyingView.Point3[1]]);
        this.magnifyingView.OnSetPoint3([ this.magnifyingView.Point3[0], height 
        * 2 ]);
        this.magnifyingView.OnSetPoint4([ this.magnifyingView.Point4[0], height 
        * 2 ]);
        this.magnifyingBack.OnSetBounds( _app._SetRectSize( this.magnifyingBack.Bounds, 
        _app._MovePointPos([ width * 2, height * 2 ], _0007 )));
        this.magnifyingBack.OnSetBounds( _app._SetRectOrigin( this.magnifyingBack.Bounds, 
        _0008 ));
        this.magnifyingBack.OnSetColor( 0xCCEEEEEE );
        this.Owner.Add( this.magnifyingBack, 0 );
        this.Owner.Add( this.magnifyingView, 0 );
        _app._PostSignal([ this, this.updateMagnifyingView ], this );
      }

      if ( !!this.magnifyingView )
        this.onDragTouch( this );
    },

    // This method is called from the corresponding SimpleTouchHandler. Its job 
    // is to obtain the focused state for the editor so the user can interact with 
    // the editor content and to place the caret at the touched position.
    onPressTouch : function( sender )
    {
      if ( !this.HasViewState( 0x40 ))
        this.ObtainFocus();

      var rc = this.Text.Position2RowCol( this.SimpleTouchHandler.CurrentPos );
      var newCaretIndex = this.Text.RowCol2StringIndex( rc );

      if ( newCaretIndex !== this.caretIndex )
      {
        this.caretIndex = newCaretIndex;
        _app._PostSignal([ this, this.updateCaret ], this );
        this.autoScroll = true;
      }
    },

    // This method is called from the corresponding keyboard handler. Its job is 
    // to move the caret up/down/left or right in the editor text.
    onCursorKey : function( sender )
    {
      if ( !this.Font )
        return;

      var rc = this.Text.StringIndex2RowCol( this.caretIndex );

      if ( this.CursorKeyHandler.Code === 6 )
      {
        rc = [ rc[0] - 1, rc[1]];

        if ( this.Text.RowCol2StringIndex( rc ) === this.caretIndex )
        {
          rc = [ rc[0], rc[1] - 1 ];
          rc = [ this.Text.GetRowString( rc[1]).length, rc[1]];
        }
      }

      if ( this.CursorKeyHandler.Code === 7 )
      {
        rc = [ rc[0] + 1, rc[1]];

        if ( this.Text.RowCol2StringIndex( rc ) === this.caretIndex )
        {
          rc = [ rc[0], rc[1] + 1 ];
          rc = [ 0, rc[1]];
        }
      }

      if ( this.CursorKeyHandler.Code === 4 )
      {
        var pos = this.Text.RowCol2Position( rc );
        var rowHeight = ( this.Font.Ascent + this.Font.Descent ) + this.Font.Leading;

        rc = this.Text.Position2RowCol( _app._MovePointNeg( pos, [ 0, rowHeight ]));
      }

      if ( this.CursorKeyHandler.Code === 5 )
      {
        var pos = this.Text.RowCol2Position( rc );
        var rowHeight = ( this.Font.Ascent + this.Font.Descent ) + this.Font.Leading;

        rc = this.Text.Position2RowCol( _app._MovePointPos( pos, [ 0, rowHeight ]));
      }

      var newCaretIndex = this.Text.RowCol2StringIndex( rc );

      if ( newCaretIndex !== this.caretIndex )
      {
        this.caretIndex = newCaretIndex;
        _app._PostSignal([ this, this.updateCaret ], this );
        this.autoScroll = true;
      }
    },

    // This method is called from the corresponding keyboard handler. Its job is 
    // to delete the sign preceding the current caret position and to move the caret 
    // accordingly.
    onBackspaceKey : function( sender )
    {
      if ( !this.caretIndex )
        return;

      var ch = this.Text.String.charCodeAt( this.caretIndex - 1 ) || 0;
      var count = 1;

      if ((( ch === 0x5E ) || ( ch === 0x7E )) || ( ch === 0x25 ))
        count = 2;

      this.Text.OnSetString( _app._StringRemove( this.Text.String, this.caretIndex 
      - count, count ));
      this.caretIndex = this.caretIndex - count;
      this.autoScroll = true;
      _app._PostSignal([ this, this.onChange ], this );
    },

    // This method is called from the corresponding keyboard handler. Its job is 
    // to delete the sign at the current caret position.
    onDeleteKey : function( sender )
    {
      if ( this.caretIndex >= ( this.Text.String.length - 1 ))
        return;

      var ch = this.Text.String.charCodeAt( this.caretIndex ) || 0;
      var count = 1;

      if ( ch === 0x25 )
        count = 2;

      this.Text.OnSetString( _app._StringRemove( this.Text.String, this.caretIndex, 
      count ));
      this.autoScroll = true;
      _app._PostSignal([ this, this.onChange ], this );
    },

    // This method is called from the corresponding keyboard handler. Its job is 
    // to insert at the current caret position the <new line> sign and to move the 
    // caret to the next row.
    onNewlineKey : function( sender )
    {
      this.Text.OnSetString( _app._StringInsert( this.Text.String, _0009, this.caretIndex ));
      this.caretIndex = this.caretIndex + 1;
      this.autoScroll = true;
      _app._PostSignal([ this, this.onChange ], this );
    },

    // This method is called from the corresponding keyboard handler. Its job is 
    // to insert at the current caret position the sign which has been input by 
    // the user and to move the caret to the next column.
    onCharacterKey : function( sender )
    {
      var ch = this.CharacterKeyHandler.CharCode;
      var str = String.fromCharCode( ch );

      if (((( ch === 0x5E ) || ( ch === 0x7E )) || ( ch === 0xAD )) || ( ch === 
          0x25 ))
        str = _000A + String.fromCharCode( ch );

      this.Text.OnSetString( _app._StringInsert( this.Text.String, str, this.caretIndex ));
      this.caretIndex = this.caretIndex + str.length;
      this.autoScroll = true;
      _app._PostSignal([ this, this.onChange ], this );
    },

    // Implementation of the Chora method : 'Components::InputEtxt.OnSetAlignment()'
    OnSetAlignment : function( value )
    {
      if ( this.Alignment === value )
        return;

      this.Alignment = value;
      this.Text.OnSetAlignment( value );
      this.autoScroll = true;
      this.Text.OnSetScrollOffset( _0005 );
    },

    // Implementation of the Chora method : 'Components::InputEtxt.OnGetString()'
    OnGetString : function()
    {
      var str = this.Text.String;
      var inx = str.indexOf( String.fromCharCode( 0x25 ), 0 );

      while ( inx >= 0 )
      {
        str = _app._StringRemove( str, inx, 1 );
        inx = str.indexOf( String.fromCharCode( 0x25 ), inx + 1 );
      }

      return _app._StringLeft( str, str.length - 1 );
    },

    // Implementation of the Chora method : 'Components::InputEtxt.OnSetString()'
    OnSetString : function( value )
    {
      if ( this.String === value )
        return;

      this.String = value;

      var str = value;
      var inx = str.indexOf( String.fromCharCode( 0x25 ), 0 );

      while ( inx >= 0 )
      {
        str = _app._StringInsert( str, _000A, inx );
        inx = str.indexOf( String.fromCharCode( 0x25 ), inx + 2 );
      }

      inx = str.indexOf( String.fromCharCode( 0x5E ), 0 );

      while ( inx >= 0 )
      {
        str = _app._StringInsert( str, _000A, inx );
        inx = str.indexOf( String.fromCharCode( 0x5E ), inx + 2 );
      }

      inx = str.indexOf( String.fromCharCode( 0x7E ), 0 );

      while ( inx >= 0 )
      {
        str = _app._StringInsert( str, _000A, inx );
        inx = str.indexOf( String.fromCharCode( 0x7E ), inx + 2 );
      }

      inx = str.indexOf( String.fromCharCode( 0xAD ), 0 );

      while ( inx >= 0 )
      {
        str = _app._StringInsert( str, _000A, inx );
        inx = str.indexOf( String.fromCharCode( 0xAD ), inx + 2 );
      }

      if ( this.caretIndex > str.length )
        this.caretIndex = str.length;

      this.Text.OnSetString( str + _001B );
      this.autoScroll = true;
      this.Text.OnSetScrollOffset( _0005 );
      _app._PostSignal([ this, this.updatePlaceholder ], this );
    },

    // Implementation of the Chora method : 'Components::InputEtxt.OnSetColor()'
    OnSetColor : function( value )
    {
      if ( this.Color === value )
        return;

      this.Color = value;
      this.Text.OnSetColor( value );
      this.Caret.OnSetColor( value );
    },

    // Implementation of the Chora method : 'Components::InputEtxt.OnSetFont()'
    OnSetFont : function( value )
    {
      if ( this.Font === value )
        return;

      this.Font = value;
      this.Text.OnSetFont( value );
      this.autoScroll = true;
      this.Text.OnSetScrollOffset( _0005 );
    },

    // Implementation of the Chora method : 'Components::InputEtxt.OnSetPlaceholder()'
    OnSetPlaceholder : function( value )
    {
      if ( this.Placeholder === value )
        return;

      this.Placeholder = value;
      this.TextPlaceholder.OnSetString( this.Placeholder );
      _app._PostSignal([ this, this.updatePlaceholder ], this );
    },

    // Implementation of the Chora method : 'Components::InputEtxt.onChange()'
    onChange : function( sender )
    {
      var _tmp;

      ( _tmp = this.OnChange )? _tmp[1].call( _tmp[0], this ) : null;
      _app._PostSignal([ this, this.updatePlaceholder ], this );
    },

    // Implementation of the Chora method : 'Components::InputEtxt.updatePlaceholder()'
    updatePlaceholder : function( sender )
    {
      if (( this.OnGetString() === _001C ) || ( this.OnGetString() === _app._EmptyString ))
        this.TextPlaceholder.OnSetVisible( true );
      else
        this.TextPlaceholder.OnSetVisible( false );
    },

    // Initializer for the class 'Components::InputEtxt'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Templates.TextEditor._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Effects.BoolEffect._Init.call( this.blinkEffect = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.CursorKeyHandler = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.BackspaceKeyHandler = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.DeleteKeyHandler = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.NewlineKeyHandler = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.CharacterKeyHandler = { _parent:this }, 0 );
      _app.Core.SlideTouchHandler._Init.call( this.SlideTouchHandler = { _parent:this }, 0 );
      _app.Core.SimpleTouchHandler._Init.call( this.SimpleTouchHandler = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.Text = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.TextPlaceholder = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Caret = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.InputEtxt;

      // ... and initialize objects, variables, properties, etc.
      var _tmp;

      this.OnSetBounds( _000B );
      this.blinkEffect.Value2 = false;
      this.blinkEffect.Value1 = true;
      this.blinkEffect.OnSetCycleDuration( 500 );
      this.blinkEffect.OnSetInterCycleDelay( 500 );
      this.CursorKeyHandler.Filter = 147;
      this.BackspaceKeyHandler.Filter = 151;
      this.DeleteKeyHandler.Filter = 44;
      this.NewlineKeyHandler.Filter = 149;
      this.CharacterKeyHandler.Filter = 145;
      this.SlideTouchHandler.OnSetLayout( 0x3F );
      this.SlideTouchHandler.OnSetBounds( _001D );
      this.SlideTouchHandler.SlideHorz = false;
      this.SlideTouchHandler.OnSetFriction( 0.050000 );
      this.SimpleTouchHandler.OnSetLayout( 0x3F );
      this.SimpleTouchHandler.OnSetPoint4( _000E );
      this.SimpleTouchHandler.OnSetPoint3( _001E );
      this.SimpleTouchHandler.OnSetPoint2( _001F );
      this.SimpleTouchHandler.OnSetPoint1( _0005 );
      this.SimpleTouchHandler.OnSetMaxStrikeCount( 3 );
      this.Text.OnSetLayout( 0x3F );
      this.Text.OnSetBounds( _0020 );
      this.Text.OnSetWrapText( true );
      this.Text.OnSetAlignment( 0x11 );
      this.Text.OnSetString( _001C );
      this.Text.OnSetColor( 0xFD1E1E1E );
      this.TextPlaceholder.OnSetLayout( 0x3F );
      this.TextPlaceholder.OnSetBounds( _0021 );
      this.TextPlaceholder.OnSetAlignment( 0x11 );
      this.TextPlaceholder.OnSetString( _app._EmptyString );
      this.TextPlaceholder.OnSetColor( 0xFDB9B9B9 );
      this.Caret.OnSetPoint2( _0022 );
      this.Caret.OnSetPoint1( _0023 );
      this.Caret.OnSetWidth2( 2 );
      this.Caret.OnSetWidth1( 2 );
      this.Caret.OnSetColor( 0xFF000000 );
      this.Caret.OnSetVisible( false );
      this.Add( this.SlideTouchHandler, 0 );
      this.Add( this.SimpleTouchHandler, 0 );
      this.Add( this.Text, 0 );
      this.Add( this.TextPlaceholder, 0 );
      this.Add( this.Caret, 0 );
      this.blinkEffect.Outlet = [ _tmp = this.Caret, _tmp.OnGetVisible, _tmp.OnSetVisible ];
      this.Font = _app._GetResource( _app.Resources.FontMedium );
      this.CursorKeyHandler.OnPress = [ this, this.onCursorKey ];
      this.CursorKeyHandler.OnHold = [ this, this.onCursorKey ];
      this.BackspaceKeyHandler.OnPress = [ this, this.onBackspaceKey ];
      this.BackspaceKeyHandler.OnHold = [ this, this.onBackspaceKey ];
      this.DeleteKeyHandler.OnPress = [ this, this.onDeleteKey ];
      this.DeleteKeyHandler.OnHold = [ this, this.onDeleteKey ];
      this.NewlineKeyHandler.OnPress = [ this, this.onNewlineKey ];
      this.NewlineKeyHandler.OnHold = [ this, this.onNewlineKey ];
      this.CharacterKeyHandler.OnPress = [ this, this.onCharacterKey ];
      this.CharacterKeyHandler.OnHold = [ this, this.onCharacterKey ];
      this.SimpleTouchHandler.OnDrag = [ this, this.onDragTouch ];
      this.SimpleTouchHandler.OnHold = [ this, this.onHoldTouch ];
      this.SimpleTouchHandler.OnRelease = [ this, this.onReleaseTouch ];
      this.SimpleTouchHandler.OnPress = [ this, this.onPressTouch ];
      this.Text.OnSetOnUpdate([ this, this.updateCaret ]);
      this.Text.OnSetSlideHandler( this.SlideTouchHandler );
      this.Text.OnSetFont( _app._GetResource( _app.Resources.FontSmall ));
      this.TextPlaceholder.OnSetFont( _app._GetResource( _app.Resources.FontSmall ));
    },

    // Deintializer for the class 'Components::InputEtxt'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Templates.TextEditor;

      // Then deitialize all embedded objects ...
      this.blinkEffect._Done();
      this.CursorKeyHandler._Done();
      this.BackspaceKeyHandler._Done();
      this.DeleteKeyHandler._Done();
      this.NewlineKeyHandler._Done();
      this.CharacterKeyHandler._Done();
      this.SlideTouchHandler._Done();
      this.SimpleTouchHandler._Done();
      this.Text._Done();
      this.TextPlaceholder._Done();
      this.Caret._Done();

      // Finally continue the deinitialization in the super class
      _app.Templates.TextEditor._Done.call( this );
    },

    // Re-Initializer for the class 'Components::InputEtxt'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Templates.TextEditor._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.blinkEffect._ReInit();
      this.CursorKeyHandler._ReInit();
      this.BackspaceKeyHandler._ReInit();
      this.DeleteKeyHandler._ReInit();
      this.NewlineKeyHandler._ReInit();
      this.CharacterKeyHandler._ReInit();
      this.SlideTouchHandler._ReInit();
      this.SimpleTouchHandler._ReInit();
      this.Text._ReInit();
      this.TextPlaceholder._ReInit();
      this.Caret._ReInit();
    },

    // Garbage Collector method for the class 'Components::InputEtxt'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Templates.TextEditor._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.magnifyingBack ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.magnifyingView ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Font ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnChange ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.blinkEffect )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.CursorKeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.BackspaceKeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.DeleteKeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.NewlineKeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.CharacterKeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.SlideTouchHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.SimpleTouchHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Text )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TextPlaceholder )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Caret )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Components::InputEtxt"
  };

  // This class implements a 'push button' widget. When the user presses the button, 
  // a signal is sent to the slot method stored in its @OnActivate property.
  _unit.Button265x470 =
  {
    // The property 'OnActivate' can refer to a slot method, which will receive 
    // a signal as soon as the user has activated the button. Thereupon the method's 
    // logic will be executed.
    OnActivate : null,

    // This timer object is used to flash the button when the user has tapped it 
    // very quickly or the button has been activated with the keyboard. This is 
    // just a visual feedback effect.
    FlashTimer : null,

    // This key handler reacts to key press events. When the user presses the key 
    // specified in the property 'Filter' of the key handler, the handler is activated 
    // and the method '@onPressKey' is called.
    KeyHandler : null,
    Background : null,
    TouchHandler : null,
    Text : null,

    // The property 'Label' specifies the text to display as label in this push 
    // button widget. The desired font as well as the colors for all individual 
    // button states have to be specified in the configuration object assigned to 
    // the property @Appearance. If there is no configuration object associated 
    // to this push button widget (the property @Appearance is 'null'), no label 
    // is displayed.
    // Per default, the label is displayed centered within the push button area. 
    // You can modify the alignment of the label as well as its margins by specifying 
    // them in the configuration object.
    Label : _app._EmptyString,

    // This variable stores the current state of the button.
    enabled : false,

    // This variable stores the current state of the button.
    selected : false,

    // This variable stores the current state of the button.
    pressed : false,

    // The method UpdateViewState() is invoked automatically after the state of 
    // the component has been changed. This method can be overridden and filled 
    // with logic to ensure the visual aspect of the component does reflect its 
    // current state. For example, the 'enabled' state of the component can affect 
    // its colors (disabled components may appear pale). In this case the logic 
    // of the method should modify the respective color properties accordingly to 
    // the current 'enabled' state. 
    // The current state of the component is passed as a set in the parameter aState. 
    // It reflects the very basic component state like its visibility or the ability 
    // to react to user inputs. Beside this common state, the method can also involve 
    // any other variables used in the component as long as they reflect its current 
    // state. For example, the toggle switch component can take in account its toggle 
    // state 'on' or 'off' and change accordingly the location of the slider, etc.
    // Usually, this method will be invoked automatically by the framework. Optionally 
    // you can request its invocation by using the method @InvalidateViewState().
    UpdateViewState : function( aState )
    {
      var _tmp;

      _app.Templates.PushButton.UpdateViewState.call( this, aState );

      var isEnabled = (( aState & 0x10 ) === 0x10 );
      var isSelected = (( aState & 0x20 ) === 0x20 );
      var isPressed = ( this.TouchHandler.Down && this.TouchHandler.Inside ) || 
        this.FlashTimer.Enabled;

      if ( !!this.Text )
      {
        var clr = _app.Res.Red;

        this.Text.OnSetFont( _app._GetResource( _app.Res.ContactFont15 ));
        this.Text.OnSetString( this.Label );
        this.Text.OnSetColor( clr );
      }

      if ( !isEnabled )
      {
        this.Background.OnSetColor( _app.Res.WhiteTransparent );
        this.Text.OnSetColor( _app.Res.Grey );
      }
      else
        if ( isPressed )
        {
          this.Background.OnSetColor( _app.Res.PressColor );
          this.Text.OnSetColor( _app.Res.RedLight );
        }
        else
          this.Background.OnSetColor( _app.Res.WhiteTransparent );

      this.enabled = isEnabled;
      this.selected = isSelected;
      this.pressed = isPressed;
    },

    // This internal slot method is called when the '@FlashTimer' is expired. It 
    // ends the short flash feedback effect.
    onFlashTimer : function( sender )
    {
      this.InvalidateViewState();
      _app._PostSignal( this.OnActivate, this );
    },

    // This internal slot method is called when the '@KeyHandler' is activated (when 
    // the user has pressed the key specified in the property 'Filter' of the key 
    // handler).
    onPressKey : function( sender )
    {
      if ( this.TouchHandler.Down )
        return;

      if ( this.KeyHandler.Repetition )
        return;

      this.InvalidateViewState();

      if ( this.FlashTimer.Enabled )
      {
        _app._PostSignal( this.OnActivate, this );
        this.FlashTimer.OnSetEnabled( false );
      }

      this.FlashTimer.OnSetEnabled( true );
    },

    // This internal slot method is called when the user drags the finger while 
    // pressing the button. This only updates the button to appear pressed or released.
    onEnterLeaveTouch : function( sender )
    {
      this.InvalidateViewState();
    },

    // This internal slot method is called when the user releases the touch screen 
    // after touching the button's area. This activates the button.
    onReleaseTouch : function( sender )
    {
      if ( !this.TouchHandler.Inside )
        return;

      if ( this.TouchHandler.AutoDeflected )
        return;

      if ( this.TouchHandler.HoldPeriod >= this.FlashTimer.Begin )
        _app._PostSignal( this.OnActivate, this );
      else
        this.FlashTimer.OnSetEnabled( true );
    },

    // This internal slot method is called when the user touches the button's area.
    onPressTouch : function( sender )
    {
      if ( this.FlashTimer.Enabled )
      {
        _app._PostSignal( this.OnActivate, this );
        this.FlashTimer.OnSetEnabled( false );
      }
    },

    // Implementation of the Chora method : 'Components::Button265x470.OnSetLabel()'
    OnSetLabel : function( value )
    {
      if ( this.Label === value )
        return;

      this.Label = value;
      this.InvalidateViewState();
    },

    // Initializer for the class 'Components::Button265x470'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Templates.PushButton._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Core.Timer._Init.call( this.FlashTimer = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.KeyHandler = { _parent:this }, 0 );
      _app.Views.Rectangle._Init.call( this.Background = { _parent:this }, 0 );
      _app.Core.SimpleTouchHandler._Init.call( this.TouchHandler = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.Text = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Button265x470;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _0024 );
      this.FlashTimer.OnSetPeriod( 0 );
      this.FlashTimer.OnSetBegin( 50 );
      this.KeyHandler.Filter = 149;
      this.Background.OnSetLayout( 0x3F );
      this.Background.OnSetBounds( _0025 );
      this.Background.OnSetColor( 0xFFFFFFFF );
      this.TouchHandler.OnSetLayout( 0x3F );
      this.TouchHandler.OnSetPoint4( _0026 );
      this.TouchHandler.OnSetPoint3( _0027 );
      this.TouchHandler.OnSetPoint2( _0028 );
      this.TouchHandler.OnSetPoint1( _0005 );
      this.TouchHandler.RetargetCondition = 0xF;
      this.TouchHandler.OnSetMaxStrikeCount( 100 );
      this.Text.OnSetLayout( 0x14 );
      this.Text.OnSetBounds( _0029 );
      this.Text.OnSetAlignment( 0x11 );
      this.Text.OnSetString( _002A );
      this.Text.OnSetColor( 0xFF5B29FF );
      this.Add( this.Background, 0 );
      this.Add( this.TouchHandler, 0 );
      this.Add( this.Text, 0 );
      this.FlashTimer.OnTrigger = [ this, this.onFlashTimer ];
      this.KeyHandler.OnPress = [ this, this.onPressKey ];
      this.TouchHandler.OnLeave = [ this, this.onEnterLeaveTouch ];
      this.TouchHandler.OnEnter = [ this, this.onEnterLeaveTouch ];
      this.TouchHandler.OnRelease = [ this, this.onReleaseTouch ];
      this.TouchHandler.OnPress = [ this, this.onPressTouch ];
      this.Text.OnSetFont( _app._GetResource( _app.Resources.FontSmall ));
    },

    // Deintializer for the class 'Components::Button265x470'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Templates.PushButton;

      // Then deitialize all embedded objects ...
      this.FlashTimer._Done();
      this.KeyHandler._Done();
      this.Background._Done();
      this.TouchHandler._Done();
      this.Text._Done();

      // Finally continue the deinitialization in the super class
      _app.Templates.PushButton._Done.call( this );
    },

    // Re-Initializer for the class 'Components::Button265x470'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Templates.PushButton._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.FlashTimer._ReInit();
      this.KeyHandler._ReInit();
      this.Background._ReInit();
      this.TouchHandler._ReInit();
      this.Text._ReInit();
    },

    // Garbage Collector method for the class 'Components::Button265x470'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Templates.PushButton._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.OnActivate ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.FlashTimer )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.KeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Background )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TouchHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Text )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Components::Button265x470"
  };

  // This class implements a 'push button' widget. When the user presses the button, 
  // a signal is sent to the slot method stored in its @OnActivate property.
  _unit.TextButton =
  {
    // The property 'OnActivate' can refer to a slot method, which will receive 
    // a signal as soon as the user has activated the button. Thereupon the method's 
    // logic will be executed.
    OnActivate : null,

    // This timer object is used to flash the button when the user has tapped it 
    // very quickly or the button has been activated with the keyboard. This is 
    // just a visual feedback effect.
    FlashTimer : null,

    // This key handler reacts to key press events. When the user presses the key 
    // specified in the property 'Filter' of the key handler, the handler is activated 
    // and the method '@onPressKey' is called.
    KeyHandler : null,
    Background : null,
    TouchHandler : null,
    TextTxt : null,

    // The property 'Label' specifies the text to display as label in this push 
    // button widget. The desired font as well as the colors for all individual 
    // button states have to be specified in the configuration object assigned to 
    // the property @Appearance. If there is no configuration object associated 
    // to this push button widget (the property @Appearance is 'null'), no label 
    // is displayed.
    // Per default, the label is displayed centered within the push button area. 
    // You can modify the alignment of the label as well as its margins by specifying 
    // them in the configuration object.
    Text : _app._EmptyString,

    // The property 'Label' specifies the text to display as label in this push 
    // button widget. The desired font as well as the colors for all individual 
    // button states have to be specified in the configuration object assigned to 
    // the property @Appearance. If there is no configuration object associated 
    // to this push button widget (the property @Appearance is 'null'), no label 
    // is displayed.
    // Per default, the label is displayed centered within the push button area. 
    // You can modify the alignment of the label as well as its margins by specifying 
    // them in the configuration object.
    TextColor : 0,

    // The property 'Label' specifies the text to display as label in this push 
    // button widget. The desired font as well as the colors for all individual 
    // button states have to be specified in the configuration object assigned to 
    // the property @Appearance. If there is no configuration object associated 
    // to this push button widget (the property @Appearance is 'null'), no label 
    // is displayed.
    // Per default, the label is displayed centered within the push button area. 
    // You can modify the alignment of the label as well as its margins by specifying 
    // them in the configuration object.
    TextColorPress : 0,

    // The property 'Label' specifies the text to display as label in this push 
    // button widget. The desired font as well as the colors for all individual 
    // button states have to be specified in the configuration object assigned to 
    // the property @Appearance. If there is no configuration object associated 
    // to this push button widget (the property @Appearance is 'null'), no label 
    // is displayed.
    // Per default, the label is displayed centered within the push button area. 
    // You can modify the alignment of the label as well as its margins by specifying 
    // them in the configuration object.
    BackgoundColor : 0,

    // This variable stores the current state of the button.
    enabled : false,

    // This variable stores the current state of the button.
    selected : false,

    // This variable stores the current state of the button.
    pressed : false,

    // The method UpdateViewState() is invoked automatically after the state of 
    // the component has been changed. This method can be overridden and filled 
    // with logic to ensure the visual aspect of the component does reflect its 
    // current state. For example, the 'enabled' state of the component can affect 
    // its colors (disabled components may appear pale). In this case the logic 
    // of the method should modify the respective color properties accordingly to 
    // the current 'enabled' state. 
    // The current state of the component is passed as a set in the parameter aState. 
    // It reflects the very basic component state like its visibility or the ability 
    // to react to user inputs. Beside this common state, the method can also involve 
    // any other variables used in the component as long as they reflect its current 
    // state. For example, the toggle switch component can take in account its toggle 
    // state 'on' or 'off' and change accordingly the location of the slider, etc.
    // Usually, this method will be invoked automatically by the framework. Optionally 
    // you can request its invocation by using the method @InvalidateViewState().
    UpdateViewState : function( aState )
    {
      var _tmp;

      _app.Templates.PushButton.UpdateViewState.call( this, aState );

      var isEnabled = (( aState & 0x10 ) === 0x10 );
      var isSelected = (( aState & 0x20 ) === 0x20 );
      var isPressed = ( this.TouchHandler.Down && this.TouchHandler.Inside ) || 
        this.FlashTimer.Enabled;

      if ( !!this.TextTxt )
      {
        var clr = this.TextColor;

        this.TextTxt.OnSetFont( _app._GetResource( _app.Res.ContactFont15 ));
        this.TextTxt.OnSetString( this.Text );
        this.TextTxt.OnSetColor( clr );
      }

      if ( !isEnabled )
      {
        this.Background.OnSetColor( this.BackgoundColor );
        this.TextTxt.OnSetColor( _app.Res.Grey );
      }
      else
        if ( isPressed )
        {
          this.Background.OnSetColor( this.BackgoundColor );
          this.TextTxt.OnSetColor( this.TextColorPress );
        }
        else
          this.Background.OnSetColor( this.BackgoundColor );

      this.enabled = isEnabled;
      this.selected = isSelected;
      this.pressed = isPressed;
    },

    // This internal slot method is called when the '@FlashTimer' is expired. It 
    // ends the short flash feedback effect.
    onFlashTimer : function( sender )
    {
      this.InvalidateViewState();
      _app._PostSignal( this.OnActivate, this );
    },

    // This internal slot method is called when the '@KeyHandler' is activated (when 
    // the user has pressed the key specified in the property 'Filter' of the key 
    // handler).
    onPressKey : function( sender )
    {
      if ( this.TouchHandler.Down )
        return;

      if ( this.KeyHandler.Repetition )
        return;

      this.InvalidateViewState();

      if ( this.FlashTimer.Enabled )
      {
        _app._PostSignal( this.OnActivate, this );
        this.FlashTimer.OnSetEnabled( false );
      }

      this.FlashTimer.OnSetEnabled( true );
    },

    // This internal slot method is called when the user drags the finger while 
    // pressing the button. This only updates the button to appear pressed or released.
    onEnterLeaveTouch : function( sender )
    {
      this.InvalidateViewState();
    },

    // This internal slot method is called when the user releases the touch screen 
    // after touching the button's area. This activates the button.
    onReleaseTouch : function( sender )
    {
      if ( !this.TouchHandler.Inside )
        return;

      if ( this.TouchHandler.AutoDeflected )
        return;

      if ( this.TouchHandler.HoldPeriod >= this.FlashTimer.Begin )
        _app._PostSignal( this.OnActivate, this );
      else
        this.FlashTimer.OnSetEnabled( true );
    },

    // This internal slot method is called when the user touches the button's area.
    onPressTouch : function( sender )
    {
      if ( this.FlashTimer.Enabled )
      {
        _app._PostSignal( this.OnActivate, this );
        this.FlashTimer.OnSetEnabled( false );
      }
    },

    // Implementation of the Chora method : 'Components::TextButton.OnSetText()'
    OnSetText : function( value )
    {
      if ( this.Text === value )
        return;

      this.Text = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::TextButton.OnSetTextColor()'
    OnSetTextColor : function( value )
    {
      if ( this.TextColor === value )
        return;

      this.TextColor = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::TextButton.OnSetTextColorPress()'
    OnSetTextColorPress : function( value )
    {
      if ( this.TextColorPress === value )
        return;

      this.TextColorPress = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::TextButton.OnSetBackgoundColor()'
    OnSetBackgoundColor : function( value )
    {
      if ( this.BackgoundColor === value )
        return;

      this.BackgoundColor = value;
      this.InvalidateViewState();
    },

    // Initializer for the class 'Components::TextButton'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Templates.PushButton._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Core.Timer._Init.call( this.FlashTimer = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.KeyHandler = { _parent:this }, 0 );
      _app.Views.Rectangle._Init.call( this.Background = { _parent:this }, 0 );
      _app.Core.SimpleTouchHandler._Init.call( this.TouchHandler = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.TextTxt = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.TextButton;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _002B );
      this.FlashTimer.OnSetPeriod( 0 );
      this.FlashTimer.OnSetBegin( 50 );
      this.KeyHandler.Filter = 149;
      this.TextColor = _app.Res.Blue;
      this.TextColorPress = _app.Res.BlueLight;
      this.BackgoundColor = _app.Res.Transparent;
      this.Background.OnSetLayout( 0x3 );
      this.Background.OnSetBounds( _002C );
      this.Background.OnSetColor( 0x00FFFFFF );
      this.TouchHandler.OnSetLayout( 0x3F );
      this.TouchHandler.OnSetPoint4( _002D );
      this.TouchHandler.OnSetPoint3( _002E );
      this.TouchHandler.OnSetPoint2( _002F );
      this.TouchHandler.OnSetPoint1( _0005 );
      this.TouchHandler.RetargetCondition = 0xF;
      this.TouchHandler.OnSetMaxStrikeCount( 100 );
      this.TextTxt.OnSetLayout( 0x3 );
      this.TextTxt.OnSetBounds( _002B );
      this.TextTxt.OnSetAlignment( 0x11 );
      this.TextTxt.OnSetString( _app._EmptyString );
      this.TextTxt.OnSetColor( 0xFFFFFFFF );
      this.Add( this.Background, 0 );
      this.Add( this.TouchHandler, 0 );
      this.Add( this.TextTxt, 0 );
      this.FlashTimer.OnTrigger = [ this, this.onFlashTimer ];
      this.KeyHandler.OnPress = [ this, this.onPressKey ];
      this.TouchHandler.OnLeave = [ this, this.onEnterLeaveTouch ];
      this.TouchHandler.OnEnter = [ this, this.onEnterLeaveTouch ];
      this.TouchHandler.OnRelease = [ this, this.onReleaseTouch ];
      this.TouchHandler.OnPress = [ this, this.onPressTouch ];
      this.TextTxt.OnSetFont( _app._GetResource( _app.Res.IconsFont25 ));
    },

    // Deintializer for the class 'Components::TextButton'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Templates.PushButton;

      // Then deitialize all embedded objects ...
      this.FlashTimer._Done();
      this.KeyHandler._Done();
      this.Background._Done();
      this.TouchHandler._Done();
      this.TextTxt._Done();

      // Finally continue the deinitialization in the super class
      _app.Templates.PushButton._Done.call( this );
    },

    // Re-Initializer for the class 'Components::TextButton'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Templates.PushButton._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.FlashTimer._ReInit();
      this.KeyHandler._ReInit();
      this.Background._ReInit();
      this.TouchHandler._ReInit();
      this.TextTxt._ReInit();
    },

    // Garbage Collector method for the class 'Components::TextButton'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Templates.PushButton._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.OnActivate ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.FlashTimer )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.KeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Background )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TouchHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TextTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Components::TextButton"
  };

  // This class implements a 'push button' widget. When the user presses the button, 
  // a signal is sent to the slot method stored in its @OnActivate property.
  _unit.NavBarButton64x40 =
  {
    // The property 'Outlet' can refer to any other 'int32' property the widget 
    // should remain synchronized with. When the user selects the radio button, 
    // the affected property is automatically updated to the value found in the 
    // property @OutletSelector. On the other hand, when the referred property is 
    // modified by another one, the radio button is automatically notified to remain 
    // in sync with the property. The button appears selected, when the referred 
    // property has the value equal to @OutletSelector.
    // This approach follows the Model-View-Controller (MVC) programming paradigm. 
    // Here the radio button represents the 'View' and 'Controller' and the property 
    // referred via 'Outlet' can be seen as a part of the 'Model'.
    Outlet : null,

    // This timer object is used to flash the button when the user has tapped it 
    // very quickly or the button has been activated with the keyboard. This is 
    // just a visual feedback effect.
    FlashTimer : null,

    // This key handler reacts to key press events. When the user presses the key 
    // specified in the property 'Filter' of the key handler, the handler is activated 
    // and the method '@onPressKey' is called.
    KeyHandler : null,
    TouchHandler : null,
    IconTxt : null,
    DescripTxt : null,

    // The property 'Label' specifies the text to display as label in this push 
    // button widget. The desired font as well as the colors for all individual 
    // button states have to be specified in the configuration object assigned to 
    // the property @Appearance. If there is no configuration object associated 
    // to this push button widget (the property @Appearance is 'null'), no label 
    // is displayed.
    // Per default, the label is displayed centered within the push button area. 
    // You can modify the alignment of the label as well as its margins by specifying 
    // them in the configuration object.
    Icon : _app._EmptyString,
    Descript : _0019,
    IconColor : 0,
    DescrpitColor : 0,

    // The property 'OutletSelector' contains a value identifying the radio button 
    // within a group of radio buttons. At the runtime, the button compares this 
    // value with the value of the property referred by @Outlet and if both are 
    // equal, the radio button assumes the 'selected' state (its property @Selected 
    // is 'true'). If the values are different, the radio button appears not selected. 
    // This selector is useful to build a group of radio buttons that refers to 
    // the same outlet. Different selectors for each radio button manages automatically 
    // the group of radio buttons.
    OutletSelector : 0,

    // This variable stores the current state of the button.
    enabled : false,

    // This variable stores the current state of the button.
    selected : true,

    // This variable stores the current state of the button.
    pressed : false,

    // The method UpdateViewState() is invoked automatically after the state of 
    // the component has been changed. This method can be overridden and filled 
    // with logic to ensure the visual aspect of the component does reflect its 
    // current state. For example, the 'enabled' state of the component can affect 
    // its colors (disabled components may appear pale). In this case the logic 
    // of the method should modify the respective color properties accordingly to 
    // the current 'enabled' state. 
    // The current state of the component is passed as a set in the parameter aState. 
    // It reflects the very basic component state like its visibility or the ability 
    // to react to user inputs. Beside this common state, the method can also involve 
    // any other variables used in the component as long as they reflect its current 
    // state. For example, the toggle switch component can take in account its toggle 
    // state 'on' or 'off' and change accordingly the location of the slider, etc.
    // Usually, this method will be invoked automatically by the framework. Optionally 
    // you can request its invocation by using the method @InvalidateViewState().
    UpdateViewState : function( aState )
    {
      var _tmp;

      _app.Templates.PushButton.UpdateViewState.call( this, aState );

      var isEnabled = (( aState & 0x10 ) === 0x10 );
      var isSelected = this.isSelected();
      var isPressed = ( this.TouchHandler.Down && this.TouchHandler.Inside ) || 
        this.FlashTimer.Enabled;

      if ( !!this.IconTxt )
      {
        var clr = this.IconColor;

        this.IconTxt.OnSetFont( _app._GetResource( _app.Res.IconsFont20 ));
        this.IconTxt.OnSetString( this.Icon );
        this.IconTxt.OnSetColor( clr );
      }

      if ( !!this.DescripTxt )
      {
        var clr = this.DescrpitColor;

        this.DescripTxt.OnSetFont( _app._GetResource( _app.Res.ContactFont12 ));
        this.DescripTxt.OnSetString( this.Descript );
        this.DescripTxt.OnSetColor( clr );
      }

      if ( !isEnabled )
      {
        this.IconTxt.OnSetColor( _app.Res.GreyLight );
        this.DescripTxt.OnSetColor( _app.Res.GreyLight );
      }
      else
        if ( isPressed )
        {
          this.IconTxt.OnSetColor( _app.Res.BlueLight );
          this.DescripTxt.OnSetColor( _app.Res.BlueLight );
        }
        else
          if ( isSelected )
          {
            this.IconTxt.OnSetColor( _app.Res.Blue );
            this.DescripTxt.OnSetColor( _app.Res.Blue );
          }
          else
          {
            this.IconTxt.OnSetColor( _app.Res.Grey );
            this.DescripTxt.OnSetColor( _app.Res.Grey );
          }

      if ( isPressed && isSelected )
        this.IconTxt.OnSetColor( _app.Res.Blue );
      else
        if ( isPressed && !isSelected )
          this.IconTxt.OnSetColor( _app.Res.BlueLight );
        else
          if ( isEnabled && isSelected )
            this.IconTxt.OnSetColor( _app.Res.Blue );
          else
            if ( isEnabled && !isSelected )
              this.IconTxt.OnSetColor( _app.Res.Grey );
            else
              if ( isSelected )
                this.IconTxt.OnSetColor( _app.Res.Blue );
              else
                this.IconTxt.OnSetColor( _app.Res.RedLight );

      this.enabled = isEnabled;
      this.selected = isSelected;
      this.pressed = isPressed;
    },

    // This internal slot method is called when the '@FlashTimer' is expired. It 
    // ends the short flash feedback effect.
    onFlashTimer : function( sender )
    {
      this.InvalidateViewState();
    },

    // This internal slot method is called when the '@KeyHandler' is activated (when 
    // the user has pressed the key specified in the property 'Filter' of the key 
    // handler).
    onPressKey : function( sender )
    {
      var _tmp0;
      if ( this.TouchHandler.Down )
        return;

      if ( this.KeyHandler.Repetition )
        return;

      this.InvalidateViewState();

      if ( this.FlashTimer.Enabled )
      {
        this.FlashTimer.OnSetEnabled( false );

        if ( !this.isSelected() && !!this.Outlet )
        {
          ( _tmp0 = this.Outlet, _tmp0[2].call( _tmp0[0], this.OutletSelector ));
          _app._NotifyRefObservers( this.Outlet, 0 );
        }
      }

      this.FlashTimer.OnSetEnabled( true );
    },

    // This internal slot method is called when the user drags the finger while 
    // pressing the button. This only updates the button to appear pressed or released.
    onEnterLeaveTouch : function( sender )
    {
      this.InvalidateViewState();
    },

    // This internal slot method is called when the user releases the touch screen 
    // after touching the button's area. This activates the button.
    onReleaseTouch : function( sender )
    {
      var _tmp0;
      if ( !this.TouchHandler.Inside )
        return;

      if ( this.TouchHandler.AutoDeflected )
        return;

      if ( this.TouchHandler.HoldPeriod >= this.FlashTimer.Begin )
      {
        if ( !this.isSelected() && !!this.Outlet )
        {
          ( _tmp0 = this.Outlet, _tmp0[2].call( _tmp0[0], this.OutletSelector ));
          _app._NotifyRefObservers( this.Outlet, 0 );
        }
      }
      else
        this.FlashTimer.OnSetEnabled( true );
    },

    // This internal slot method is called when the user touches the button's area.
    onPressTouch : function( sender )
    {
      var _tmp0;
      if ( this.FlashTimer.Enabled )
      {
        this.FlashTimer.OnSetEnabled( false );

        if ( !this.isSelected() && !!this.Outlet )
        {
          ( _tmp0 = this.Outlet, _tmp0[2].call( _tmp0[0], this.OutletSelector ));
          _app._NotifyRefObservers( this.Outlet, 0 );
        }
      }
    },

    // Implementation of the Chora method : 'Components::NavBarButton64x40.OnSetIcon()'
    OnSetIcon : function( value )
    {
      if ( this.Icon === value )
        return;

      this.Icon = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::NavBarButton64x40.OnSetDescript()'
    OnSetDescript : function( value )
    {
      if ( this.Descript === value )
        return;

      this.Descript = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::NavBarButton64x40.OnSetOutletSelector()'
    OnSetOutletSelector : function( value )
    {
      if ( this.OutletSelector === value )
        return;

      this.OutletSelector = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::NavBarButton64x40.OnSetOutlet()'
    OnSetOutlet : function( value )
    {
      if ( _app._IsEqualRef( this.Outlet, value ))
        return;

      if ( !!this.Outlet )
        _app._DetachRefObserver([ this, this.onOutlet ], this.Outlet, 0 );

      this.Outlet = value;

      if ( !!value )
        _app._AttachRefObserver([ this, this.onOutlet ], value, 0 );

      if ( !!value )
        _app._PostSignal([ this, this.onOutlet ], this );
    },

    // This slot method will receive a signal, if the value of the property assigned 
    // to @Outlet has been changed by another widget or by the application logic. 
    // In response to this notification, the widget will update itself.
    onOutlet : function( sender )
    {
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::NavBarButton64x40.isSelected()'
    isSelected : function()
    {
      var _tmp0;
      return !!this.Outlet && (( _tmp0 = this.Outlet, _tmp0[1].call( _tmp0[0])) 
        === this.OutletSelector );
    },

    // Initializer for the class 'Components::NavBarButton64x40'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Templates.PushButton._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Core.Timer._Init.call( this.FlashTimer = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.KeyHandler = { _parent:this }, 0 );
      _app.Core.SimpleTouchHandler._Init.call( this.TouchHandler = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.IconTxt = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.DescripTxt = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.NavBarButton64x40;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _0030 );
      this.FlashTimer.OnSetPeriod( 0 );
      this.FlashTimer.OnSetBegin( 50 );
      this.KeyHandler.Filter = 149;
      this.TouchHandler.OnSetLayout( 0x3F );
      this.TouchHandler.OnSetPoint4( _0031 );
      this.TouchHandler.OnSetPoint3( _0032 );
      this.TouchHandler.OnSetPoint2( _0033 );
      this.TouchHandler.OnSetPoint1( _0005 );
      this.TouchHandler.RetargetCondition = 0xF;
      this.TouchHandler.OnSetMaxStrikeCount( 100 );
      this.IconTxt.OnSetBounds( _0034 );
      this.IconTxt.OnSetString( _app._EmptyString );
      this.IconTxt.OnSetColor( 0xFFFFFFFF );
      this.DescripTxt.OnSetLayout( 0x14 );
      this.DescripTxt.OnSetBounds( _0035 );
      this.DescripTxt.OnSetAlignment( 0x12 );
      this.DescripTxt.OnSetString( _app._EmptyString );
      this.IconColor = _app.Res.Grey;
      this.DescrpitColor = _app.Res.Grey;
      this.Add( this.TouchHandler, 0 );
      this.Add( this.IconTxt, 0 );
      this.Add( this.DescripTxt, 0 );
      this.FlashTimer.OnTrigger = [ this, this.onFlashTimer ];
      this.KeyHandler.OnPress = [ this, this.onPressKey ];
      this.TouchHandler.OnLeave = [ this, this.onEnterLeaveTouch ];
      this.TouchHandler.OnEnter = [ this, this.onEnterLeaveTouch ];
      this.TouchHandler.OnRelease = [ this, this.onReleaseTouch ];
      this.TouchHandler.OnPress = [ this, this.onPressTouch ];
      this.IconTxt.OnSetFont( _app._GetResource( _app.Res.IconsFont20 ));
      this.DescripTxt.OnSetFont( _app._GetResource( _app.Res.ContactFont12 ));
    },

    // Deintializer for the class 'Components::NavBarButton64x40'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Templates.PushButton;

      // Then deitialize all embedded objects ...
      this.FlashTimer._Done();
      this.KeyHandler._Done();
      this.TouchHandler._Done();
      this.IconTxt._Done();
      this.DescripTxt._Done();

      // Finally continue the deinitialization in the super class
      _app.Templates.PushButton._Done.call( this );
    },

    // Re-Initializer for the class 'Components::NavBarButton64x40'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Templates.PushButton._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.FlashTimer._ReInit();
      this.KeyHandler._ReInit();
      this.TouchHandler._ReInit();
      this.IconTxt._ReInit();
      this.DescripTxt._ReInit();
    },

    // Garbage Collector method for the class 'Components::NavBarButton64x40'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Templates.PushButton._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.Outlet ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.FlashTimer )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.KeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TouchHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.IconTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.DescripTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Components::NavBarButton64x40"
  };

  // This class implements a 'toggle button' widget. When the user presses the button, 
  // the current value of the button represented by the property @Active is toggled 
  // and a signal is sent to the slot method stored in the property @OnToggle.
  // Alternatively the property @Outlet can refer to any other 'bool' property the 
  // widget should remain synchronized with. When the user toggles the button, the 
  // affected property is automatically updated to reflect the button's current 
  // state. On the other hand, when the referred property is modified by another 
  // one, the toggle button is automatically notified to remain in sync with the 
  // property.
  // This approach follows the Model-View-Controller (MVC) programming paradigm. 
  // Here the toggle button represents the 'View' and 'Controller' and the property 
  // referred via 'Outlet' can be seen as a part of the 'Model'.
  _unit.ToggleButton =
  {
    // The property 'OnToggle' can refer to a slot method, which will receive a 
    // signal as soon as the user has toggled the button. Thereupon the method's 
    // logic will be executed. In the associated slot method you can evaluate the 
    // current value of the property @Active.
    OnToggle : null,

    // This timer object is used to flash the button when the user has tapped it 
    // very quickly or the button has been activated with the keyboard. This is 
    // just a visual feedback effect.
    FlashTimer : null,

    // This key handler reacts to key press events. When the user presses the key 
    // specified in the property 'Filter' of the key handler, the handler is activated 
    // and the method '@onPressKey' is called.
    KeyHandler : null,
    Background : null,
    TouchHandler : null,
    Knob : null,
    BackgroundColor : 0,
    IconColor : 0,
    IconSelectedColor : 0,
    BackgroundSelectedColor : 0,

    // The property 'Active' stores the current state of the toggle button. As long 
    // as the property is 'false', the widget should appear in switched-off state. 
    // As long as the property is 'true', the widget should appear in switched-on 
    // state.
    Active : false,

    // This variable stores the current state of the button.
    enabled : false,

    // This variable stores the current state of the button.
    selected : false,

    // This variable stores the current state of the button.
    pressed : false,

    // This variable stores the current state of the button.
    checked : false,

    // The method UpdateViewState() is invoked automatically after the state of 
    // the component has been changed. This method can be overridden and filled 
    // with logic to ensure the visual aspect of the component does reflect its 
    // current state. For example, the 'enabled' state of the component can affect 
    // its colors (disabled components may appear pale). In this case the logic 
    // of the method should modify the respective color properties accordingly to 
    // the current 'enabled' state. 
    // The current state of the component is passed as a set in the parameter aState. 
    // It reflects the very basic component state like its visibility or the ability 
    // to react to user inputs. Beside this common state, the method can also involve 
    // any other variables used in the component as long as they reflect its current 
    // state. For example, the toggle switch component can take in account its toggle 
    // state 'on' or 'off' and change accordingly the location of the slider, etc.
    // Usually, this method will be invoked automatically by the framework. Optionally 
    // you can request its invocation by using the method @InvalidateViewState().
    UpdateViewState : function( aState )
    {
      var _tmp;

      _app.Templates.ToggleButton.UpdateViewState.call( this, aState );

      var isEnabled = (( aState & 0x10 ) === 0x10 );
      var isSelected = (( aState & 0x20 ) === 0x20 );
      var isPressed = ( this.TouchHandler.Down && this.TouchHandler.Inside ) || 
        this.FlashTimer.Enabled;
      var isChecked = this.Active;

      if ( isChecked )
      {
        this.Knob.OnSetColor( this.IconSelectedColor );
        this.Background.OnSetColor( this.BackgroundSelectedColor );
      }
      else
        if ( !isChecked )
        {
          this.Knob.OnSetColor( this.IconColor );
          this.Background.OnSetColor( this.BackgroundColor );
        }

      this.enabled = isEnabled;
      this.selected = isSelected;
      this.pressed = isPressed;
      this.checked = isChecked;
    },

    // This internal slot method is called when the '@FlashTimer' is expired. It 
    // ends the short flash feedback effect.
    onFlashTimer : function( sender )
    {
      this.InvalidateViewState();
      this.OnSetActive( !this.Active );
      _app._PostSignal( this.OnToggle, this );
    },

    // This internal slot method is called when the '@KeyHandler' is activated (when 
    // the user has pressed the key specified in the property 'Filter' of the key 
    // handler).
    onPressKey : function( sender )
    {
      if ( this.TouchHandler.Down )
        return;

      if ( this.KeyHandler.Repetition )
        return;

      this.InvalidateViewState();

      if ( this.FlashTimer.Enabled )
      {
        this.FlashTimer.OnSetEnabled( false );
        this.OnSetActive( !this.Active );
        _app._PostSignal( this.OnToggle, this );
      }

      this.FlashTimer.OnSetEnabled( true );
    },

    // This internal slot method is called when the user drags the finger while 
    // pressing the button. This only updates the button to appear pressed or released.
    onEnterLeaveTouch : function( sender )
    {
      this.InvalidateViewState();
    },

    // This internal slot method is called when the user releases the touch screen 
    // after touching the button's area. This activates the button.
    onReleaseTouch : function( sender )
    {
      if ( !this.TouchHandler.Inside )
        return;

      if ( this.TouchHandler.AutoDeflected )
        return;

      if ( this.TouchHandler.HoldPeriod >= this.FlashTimer.Begin )
      {
        this.OnSetActive( !this.Active );
        _app._PostSignal( this.OnToggle, this );
      }
      else
        this.FlashTimer.OnSetEnabled( true );
    },

    // This internal slot method is called when the user touches the button's area.
    onPressTouch : function( sender )
    {
      if ( this.FlashTimer.Enabled )
      {
        this.FlashTimer.OnSetEnabled( false );
        this.OnSetActive( !this.Active );
        _app._PostSignal( this.OnToggle, this );
      }
    },

    // Implementation of the Chora method : 'Components::ToggleButton.OnSetActive()'
    OnSetActive : function( value )
    {
      if ( this.Active === value )
        return;

      this.Active = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Components::ToggleButton.OnSetBackgroundSelectedColor()'
    OnSetBackgroundSelectedColor : function( value )
    {
      if ( this.BackgroundSelectedColor === value )
        return;

      this.BackgroundSelectedColor = value;
      this.InvalidateViewState();
    },

    // Initializer for the class 'Components::ToggleButton'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Templates.ToggleButton._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Core.Timer._Init.call( this.FlashTimer = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.KeyHandler = { _parent:this }, 0 );
      _app.Views.Image._Init.call( this.Background = { _parent:this }, 0 );
      _app.Core.SimpleTouchHandler._Init.call( this.TouchHandler = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.Knob = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.ToggleButton;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _0036 );
      this.FlashTimer.OnSetPeriod( 0 );
      this.FlashTimer.OnSetBegin( 50 );
      this.KeyHandler.Filter = 149;
      this.Background.OnSetLayout( 0x3F );
      this.Background.OnSetBounds( _0036 );
      this.Background.OnSetColor( _app.Res.GreyLight );
      this.TouchHandler.OnSetLayout( 0x3F );
      this.TouchHandler.OnSetPoint4( _0037 );
      this.TouchHandler.OnSetPoint3( _0038 );
      this.TouchHandler.OnSetPoint2( _0039 );
      this.TouchHandler.OnSetPoint1( _0005 );
      this.TouchHandler.RetargetCondition = 0xF;
      this.TouchHandler.OnSetMaxStrikeCount( 100 );
      this.Knob.OnSetBounds( _0036 );
      this.Knob.OnSetString( _app.Res.CheckIcon );
      this.BackgroundColor = _app.Res.GreyLight;
      this.IconColor = _app.Res.Transparent;
      this.IconSelectedColor = _app.Res.Blue;
      this.BackgroundSelectedColor = _app.Res.Blue;
      this.Add( this.Background, 0 );
      this.Add( this.TouchHandler, 0 );
      this.Add( this.Knob, 0 );
      this.FlashTimer.OnTrigger = [ this, this.onFlashTimer ];
      this.KeyHandler.OnPress = [ this, this.onPressKey ];
      this.Background.OnSetBitmap( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.TouchHandler.OnLeave = [ this, this.onEnterLeaveTouch ];
      this.TouchHandler.OnEnter = [ this, this.onEnterLeaveTouch ];
      this.TouchHandler.OnRelease = [ this, this.onReleaseTouch ];
      this.TouchHandler.OnPress = [ this, this.onPressTouch ];
      this.Knob.OnSetFont( _app._GetResource( _app.Res.IconsFont20 ));
    },

    // Deintializer for the class 'Components::ToggleButton'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Templates.ToggleButton;

      // Then deitialize all embedded objects ...
      this.FlashTimer._Done();
      this.KeyHandler._Done();
      this.Background._Done();
      this.TouchHandler._Done();
      this.Knob._Done();

      // Finally continue the deinitialization in the super class
      _app.Templates.ToggleButton._Done.call( this );
    },

    // Re-Initializer for the class 'Components::ToggleButton'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Templates.ToggleButton._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.FlashTimer._ReInit();
      this.KeyHandler._ReInit();
      this.Background._ReInit();
      this.TouchHandler._ReInit();
      this.Knob._ReInit();
    },

    // Garbage Collector method for the class 'Components::ToggleButton'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Templates.ToggleButton._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.OnToggle ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.FlashTimer )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.KeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Background )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TouchHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Knob )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Components::ToggleButton"
  };

  // User defined class: 'Components::Button50x75'
  _unit.Button50x75 =
  {
    // Initializer for the class 'Components::Button50x75'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.ButtonBase70x90._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Button50x75;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _003A );
      this.Background.OnSetBounds( _003B );
      this.InitialsTxt.OnSetBounds( _003B );
      this.DescripTxt.OnSetBounds( _003C );
    },

    // Internal variables of this class.
    _className : "Components::Button50x75"
  };

  // User defined class: 'Components::Button65x90'
  _unit.Button65x90 =
  {
    // Initializer for the class 'Components::Button65x90'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.ButtonBase70x90._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Button65x90;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _003D );
      this.Background.OnSetBounds( _003E );
      this.InitialsTxt.OnSetBounds( _003E );
      this.DescripTxt.OnSetBounds( _003F );
    },

    // Internal variables of this class.
    _className : "Components::Button65x90"
  };

  // User defined class: 'Components::SButton65x65'
  _unit.SButton65x65 =
  {
    // Initializer for the class 'Components::SButton65x65'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.ButtonBase70x90._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.SButton65x65;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _003E );
      this.Background.OnSetBounds( _003E );
      this.InitialsTxt.OnSetBounds( _003E );
      this.DescripTxt.OnSetVisible( false );
    },

    // Internal variables of this class.
    _className : "Components::SButton65x65"
  };

  // User defined class: 'Components::SButton50x50'
  _unit.SButton50x50 =
  {
    // Initializer for the class 'Components::SButton50x50'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.ButtonBase70x90._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.SButton50x50;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _003B );
      this.Background.OnSetBounds( _003B );
      this.InitialsTxt.OnSetBounds( _003B );
      this.DescripTxt.OnSetVisible( false );
    },

    // Internal variables of this class.
    _className : "Components::SButton50x50"
  };

  // User defined class: 'Components::SButton25x25'
  _unit.SButton25x25 =
  {
    // Initializer for the class 'Components::SButton25x25'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.ButtonBase70x90._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.SButton25x25;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _0040 );
      this.Background.OnSetBounds( _0040 );
      this.InitialsTxt.OnSetBounds( _0040 );
      this.DescripTxt.OnSetVisible( false );
    },

    // Internal variables of this class.
    _className : "Components::SButton25x25"
  };

  // Function to initialize the application.
  _unit._Init = function()
  {
    _unit.ButtonBase70x90.__proto__ = _app.Templates.PushButton;
    _unit.SearchEtxt.__proto__ = _app.Templates.TextEditor;
    _unit.InputEtxt.__proto__ = _app.Templates.TextEditor;
    _unit.Button265x470.__proto__ = _app.Templates.PushButton;
    _unit.TextButton.__proto__ = _app.Templates.PushButton;
    _unit.NavBarButton64x40.__proto__ = _app.Templates.PushButton;
    _unit.ToggleButton.__proto__ = _app.Templates.ToggleButton;
    _unit.Button50x75.__proto__ = _unit.ButtonBase70x90;
    _unit.Button65x90.__proto__ = _unit.ButtonBase70x90;
    _unit.SButton65x65.__proto__ = _unit.ButtonBase70x90;
    _unit.SButton50x50.__proto__ = _unit.ButtonBase70x90;
    _unit.SButton25x25.__proto__ = _unit.ButtonBase70x90;
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