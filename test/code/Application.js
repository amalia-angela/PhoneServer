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
if ( EmWiApp.Application )
  throw new Error( "The unit file 'Application.js' included twice!" );

// Create the unit object including all members of the unit.
EmWiApp.Application = (function()
{
  var _app  = EmWiApp;
  var _unit = {};

  // Constant values used in this 'JavaScript' module only.
  var _0000 = [ 0, 0, 272, 440 ];
  var _0001 = [ 11, 167, 261, 440 ];
  var _0002 = [ 12, 167, 261, 440 ];
  var _0003 = [ 0, 35 ];
  var _0004 = [ 236, 141, 262, 167 ];
  var _0005 = [ 210, 141, 236, 167 ];
  var _0006 = [ 3, 67, 269, 99 ];
  var _0007 = [ 11, 27, 261, 61 ];
  var _0008 = [ 242, 12, 272, 42 ];
  var _0009 = [ 186, 130, 186, 130 ];
  var _000A = [ 6, 99, 266, 144 ];
  var _000B = [ 0, 0, 250, 32 ];
  var _000C = [ 0, 32 ];
  var _000D = [ 250, 32 ];
  var _000E = [ 250, 0 ];
  var _000F = [ 0, 0 ];
  var _0010 = [ 39, 3, 130, 33 ];
  var _0011 = [ 129, 3, 244, 33 ];
  var _0012 = [ 6, 4, 31, 29 ];
  var _0013 = [ 231, 10, 244, 22 ];
  var _0014 = "me";
  var _0015 = " ";
  var _0016 = [ 266, 287 ];
  var _0017 = [ 8, 287 ];
  var _0018 = [ 20, 258, 264, 287 ];
  var _0019 = " +0749320298";
  var _001A = [ 8, 232, 266, 265 ];
  var _001B = [ 266, 232 ];
  var _001C = [ 8, 232 ];
  var _001D = [ 51, 145, 101, 220 ];
  var _001E = [ 111, 145, 161, 220 ];
  var _001F = [ 171, 145, 221, 220 ];
  var _0020 = [ 8, 98, 265, 145 ];
  var _0021 = "Contact name";
  var _0022 = [ 101, 22, 171, 113 ];
  var _0023 = [ 240, 4, 265, 29 ];
  var _0024 = [ 7, 4, 32, 29 ];
  var _0025 = [ 60, 233, 84, 263 ];
  var _0026 = [ 265, 289 ];
  var _0027 = [ 7, 289 ];
  var _0028 = [ 3, 257, 269, 289 ];
  var _0029 = "Mobile number";
  var _002A = [ 264, 256 ];
  var _002B = [ 6, 256 ];
  var _002C = [ 3, 224, 269, 256 ];
  var _002D = "First Name";
  var _002E = [ 264, 223 ];
  var _002F = [ 6, 223 ];
  var _0030 = [ 3, 191, 269, 223 ];
  var _0031 = "Last Name";
  var _0032 = [ 264, 190 ];
  var _0033 = [ 6, 190 ];
  var _0034 = [ 100, 78, 170, 169 ];
  var _0035 = [ 86, 7, 186, 37 ];
  var _0036 = [ 7, 304, 42, 339 ];
  var _0037 = [ 42, 313, 109, 328 ];
  var _0038 = [ 5, 398, 263, 431 ];
  var _0039 = [ 7, 244, 265, 273 ];
  var _003A = "0749320267";
  var _003B = [ 264, 239 ];
  var _003C = [ 6, 239 ];
  var _003D = [ 6, 207, 264, 240 ];
  var _003E = [ 263, 206 ];
  var _003F = [ 5, 206 ];
  var _0040 = [ 2, 174, 268, 206 ];
  var _0041 = "First name";
  var _0042 = [ 263, 173 ];
  var _0043 = [ 5, 173 ];
  var _0044 = [ 2, 141, 268, 173 ];
  var _0045 = "Last name";
  var _0046 = [ 263, 140 ];
  var _0047 = [ 5, 140 ];
  var _0048 = [ 99, 29, 169, 120 ];
  var _0049 = [ 7, 293, 42, 328 ];
  var _004A = [ 42, 303, 109, 318 ];
  var _004B = [ 0, 30 ];
  var _004C = [ 0, 0, 272, 480 ];
  var _004D = [ 104, 374, 169, 466 ];
  var _004E = [ 182, 240, 247, 332 ];
  var _004F = [ 104, 241, 169, 333 ];
  var _0050 = [ 26, 242, 91, 334 ];
  var _0051 = [ 182, 147, 247, 239 ];
  var _0052 = [ 104, 148, 169, 240 ];
  var _0053 = [ 26, 149, 91, 241 ];
  var _0054 = [ 0, 518, 272, 958 ];
  var _0055 = [ 264, 311 ];
  var _0056 = [ 6, 311 ];
  var _0057 = [ 18, 282, 262, 311 ];
  var _0058 = [ 6, 256, 264, 289 ];
  var _0059 = [ 50, 161, 100, 236 ];
  var _005A = [ 110, 161, 160, 236 ];
  var _005B = [ 170, 161, 220, 236 ];
  var _005C = [ 10, 114, 267, 144 ];
  var _005D = [ 100, 30, 170, 121 ];
  var _005E = [ 239, 5, 264, 30 ];
  var _005F = [ 6, 5, 31, 30 ];
  var _0060 = [ 104, 340, 169, 405 ];
  var _0061 = [ 39, 80, 104, 145 ];
  var _0062 = "1";
  var _0063 = [ 169, 80, 234, 145 ];
  var _0064 = "3";
  var _0065 = [ 104, 80, 169, 145 ];
  var _0066 = "2";
  var _0067 = [ 39, 145, 104, 210 ];
  var _0068 = "4";
  var _0069 = [ 169, 145, 234, 210 ];
  var _006A = "6";
  var _006B = [ 104, 145, 169, 210 ];
  var _006C = "5";
  var _006D = [ 39, 210, 104, 275 ];
  var _006E = "7";
  var _006F = [ 169, 210, 234, 275 ];
  var _0070 = "9";
  var _0071 = [ 104, 210, 169, 275 ];
  var _0072 = "8";
  var _0073 = [ 39, 275, 104, 340 ];
  var _0074 = "*";
  var _0075 = [ 169, 275, 234, 340 ];
  var _0076 = "#";
  var _0077 = [ 104, 275, 169, 340 ];
  var _0078 = "0";
  var _0079 = [ 39, 48, 234, 80 ];
  var _007A = [ 39, 360, 101, 385 ];
  var _007B = [ 169, 340, 234, 405 ];
  var _007C = "ERROR: invalid selected page ";
  var _007D = [ 0, 440, 272, 480 ];
  var _007E = [ 0, 440, 68, 480 ];
  var _007F = [ 68, 440, 136, 480 ];
  var _0080 = [ 136, 440, 204, 480 ];
  var _0081 = [ 204, 440, 272, 480 ];
  var _0082 = [ 270, 440 ];
  var _0083 = [ 0, 440 ];
  var _0084 = "close page";
  var _0085 = [ 0, 80, 272, 340 ];
  var _0086 = [ 39, 32, 234, 64 ];
  var _0087 = [ 11, 134, 261, 440 ];
  var _0088 = [ 12, 134, 261, 440 ];
  var _0089 = [ 236, 108, 262, 134 ];
  var _008A = [ 210, 108, 236, 134 ];
  var _008B = [ 11, 12, 261, 61 ];
  var _008C = [ 180, 15, 210, 45 ];
  var _008D = [ 216, 15, 282, 40 ];
  var _008E = [ 171, 340, 236, 432 ];
  var _008F = [ 11, 95, 261, 408 ];
  var _0090 = [ 11, 42, 261, 76 ];
  var _0091 = [ 11, 12, 41, 42 ];
  var _0092 = [ 233, 12, 263, 37 ];
  var _0093 = [ 233, 12, 261, 37 ];
  var _0094 = "ERROR: Contact already in the list";
  var _0095 = [ 202, 24, 268, 49 ];
  var _0096 = [ 12, 0, 261, 30 ];
  var _0097 = [ 217, 32 ];
  var _0098 = [ 217, 0 ];
  var _0099 = [ 44, 8, 113, 26 ];
  var _009A = [ -25, 5, 0, 30 ];
  var _009B = [ 250, 0, 316, 32 ];
  var _009C = [ 217, 5, 242, 30 ];
  var _009D = [ 131, 8, 201, 26 ];
  var _009E = "FirstName";
  var _009F = [ 0, 0, 250, 50 ];
  var _00A0 = [ 0, 0, 250, 52 ];
  var _00A1 = [ 25, 52 ];
  var _00A2 = [ 205, 52 ];
  var _00A3 = [ 205, 0 ];
  var _00A4 = [ 25, 0 ];
  var _00A5 = [ 250, 50 ];
  var _00A6 = [ 0, 50 ];
  var _00A7 = [ 32, 4, 114, 22 ];
  var _00A8 = "LastName";
  var _00A9 = [ 114, 4, 220, 22 ];
  var _00AA = [ 32, 33, 101, 47 ];
  var _00AB = "Call type";
  var _00AC = [ 162, 22, 220, 36 ];
  var _00AD = "Time ";
  var _00AE = [ 225, 2, 250, 27 ];
  var _00AF = [ 0, 17, 25, 42 ];
  var _00B0 = [ -25, 11, 0, 36 ];
  var _00B1 = [ 250, 1, 316, 51 ];
  var _00B2 = "%d %m %Y";
  var _00B3 = "%H:%M %p";
  var _00B4 = [ 265, 371 ];
  var _00B5 = [ 7, 371 ];
  var _00B6 = [ 19, 342, 263, 371 ];
  var _00B7 = [ 7, 316, 265, 349 ];
  var _00B8 = [ 265, 316 ];
  var _00B9 = [ 7, 316 ];
  var _00BA = [ 265, 237 ];
  var _00BB = [ 7, 237 ];
  var _00BC = [ 8, 246, 263, 267 ];
  var _00BD = "30 nov 2022";
  var _00BE = [ 67, 267, 263, 289 ];
  var _00BF = "Outgoing Call";
  var _00C0 = [ 7, 267, 67, 289 ];
  var _00C1 = "5:37 PM";
  var _00C2 = [ 67, 289, 263, 311 ];
  var _00C3 = "22 seconds";
  var _00C4 = [ 36, 340, 101, 432 ];
  var _00C5 = [ 18, 73, 91, 103 ];
  var _00C6 = "calling...";
  var _00C7 = [ 18, 42, 171, 72 ];
  var _00C8 = [ 184, 28, 254, 119 ];
  var _00C9 = [ 0, 400, 272, 440 ];
  var _00CA = [ 0, 400, 68, 440 ];
  var _00CB = [ 68, 400, 136, 440 ];
  var _00CC = [ 136, 400, 204, 440 ];
  var _00CD = [ 204, 400, 272, 440 ];
  var _00CE = [ 170, 14, 236, 39 ];
  var _00CF = [ 0, 0, 260, 45 ];
  var _00D0 = [ 0, 41 ];
  var _00D1 = [ 260, 41 ];
  var _00D2 = [ 260, 0 ];
  var _00D3 = [ 59, 2, 255, 32 ];
  var _00D4 = [ 59, 24, 156, 44 ];
  var _00D5 = [ 6, 0, 56, 48 ];

  // User defined class: 'Application::ContactsPage'
  _unit.ContactsPage =
  {
    addContact : null,
    detailsPage : null,
    Background : null,
    VerticalList : null,
    SlideTouchHandler : null,
    UpButton : null,
    DownButton : null,
    SearchExt : null,
    TitleTxt : null,
    PlusButton : null,
    TextEditor1 : null,
    MyCardItem : null,

    // The method Init() is invoked automatically after the component has been created. 
    // This method can be overridden and filled with logic containing additional 
    // initialization statements.
    Init : function( aArg )
    {
      var _tmp;

      _app._AttachRefObserver([ this, this.onNoOfContactsChanged ], [ _tmp = _app._GetAutoObject( 
        _app.Device.Device ).Contacts, _tmp.OnGetNoOfItems, _tmp.OnSetNoOfItems ], 
        0 );
      _app._PostSignal([ this, this.onNoOfContactsChanged ], this );
      _app._AttachRefObserver([ this, this.onContactsSortingChanged ], [ _tmp = 
        _app._GetAutoObject( _app.Device.Device ).Contacts, _tmp.OnGetSorting, _tmp.OnSetSorting ], 
        0 );
      _app._PostSignal([ this, this.onContactsSortingChanged ], this );
      _app._AttachRefObserver([ this, this.onMYCardUpdate ], [ _tmp = _app._GetAutoObject( 
        _app.Device.Device ), _tmp.OnGetMyCard, _tmp.OnSetMyCard ], 0 );
      _app._PostSignal([ this, this.onMYCardUpdate ], this );
    },

    // Implementation of the Chora method : 'Application::ContactsPage.onAddPress()'
    onAddPress : function( sender )
    {
      this.addContact = _app._NewObject( _unit.ContactAddPage, 0 );
      this.addContact.OnSave = [ this, this.onSaveAdd ];
      this.addContact.OnClose = [ this, this.onCancelAdd ];
      this.addContact.OnSetContact( _app._NewObject( _app.Device.Contact, 0 ));
      this.SwitchToDialog( this.addContact, _app._GetAutoObject( _app.Res.SlideUpCentered ), 
      null, null, null, null, null, null, null, null, false );
    },

    // Implementation of the Chora method : 'Application::ContactsPage.onSaveAdd()'
    onSaveAdd : function( sender )
    {
      _app._GetAutoObject( _app.Device.Device ).Contacts.AddLast( this.addContact.Contact );
      this.DismissDialog( this.addContact, _app._GetAutoObject( _app.Res.SlideDownCentered ), 
      null, null, null, null, false );
      this.addContact = null;
    },

    // Implementation of the Chora method : 'Application::ContactsPage.onCancelAdd()'
    onCancelAdd : function( sender )
    {
      this.DismissDialog( this.addContact, _app._GetAutoObject( _app.Res.SlideDownCentered ), 
      null, null, null, null, false );
    },

    // Implementation of the Chora method : 'Application::ContactsPage.onDeleteContact()'
    onDeleteContact : function( sender )
    {
      this.VerticalList.InvalidateItems( 0, this.VerticalList.NoOfItems - 1 );
      this.DismissDialog( this.detailsPage, _app._GetAutoObject( _app.Res.SlideRightCentered ), 
      null, null, null, null, false );
    },

    // Implementation of the Chora method : 'Application::ContactsPage.onSearch()'
    onSearch : function( sender )
    {
    },

    // Implementation of the Chora method : 'Application::ContactsPage.onCloseContact()'
    onCloseContact : function( sender )
    {
      this.DismissDialog( this.detailsPage, _app._GetAutoObject( _app.Res.SlideRightCentered ), 
      null, null, null, null, false );
    },

    // Implementation of the Chora method : 'Application::ContactsPage.onUpPress()'
    onUpPress : function( sender )
    {
      _app._GetAutoObject( _app.Device.Device ).Contacts.OnSetSorting( 1 );
    },

    // Implementation of the Chora method : 'Application::ContactsPage.onDownPress()'
    onDownPress : function( sender )
    {
      _app._GetAutoObject( _app.Device.Device ).Contacts.OnSetSorting( 2 );
    },

    // This method is called by 'VerticalList' every time the list loads or updates 
    // an item.
    OnLoadItem : function( sender )
    {
      var _tmp;
      var itemNo = this.VerticalList.Item;
      var contact = _app._GetAutoObject( _app.Device.Device ).Contacts.GetContact( 
        itemNo );
      var itemView = ( _unit.ContactItem.isPrototypeOf( _tmp = this.VerticalList.View )? 
        _tmp : null );

      if ( !itemView )
        return;

      itemView.OnSetContact( contact );
      itemView.OnActivate = [ this, this.__onContactActivated ];
      itemView.OnSetBounds( _app._SetRectSize( itemView.Bounds, [( _tmp = this.VerticalList.Bounds )[2] 
      - _tmp[0], this.VerticalList.ItemHeight ]));
    },

    // Implementation of the Chora method : 'Application::ContactsPage.onNoOfContactsChanged()'
    onNoOfContactsChanged : function( sender )
    {
      this.VerticalList.OnSetNoOfItems( _app._GetAutoObject( _app.Device.Device ).Contacts.NoOfItems );
    },

    // Implementation of the Chora method : 'Application::ContactsPage.onContactsSortingChanged()'
    onContactsSortingChanged : function( sender )
    {
      this.VerticalList.InvalidateItems( 0, this.VerticalList.NoOfItems - 1 );
    },

    // Implementation of the Chora method : 'Application::ContactsPage.onContactActivated()'
    onContactActivated : function( sender )
    {
      var itemView = ( _unit.ContactItem.isPrototypeOf( sender )? sender : null );

      if ( !!itemView )
      {
        this.detailsPage = _app._NewObject( _unit.ContactDetailsPage, 0 );
        this.detailsPage.OnBack = [ this, this.onCloseContact ];
        this.detailsPage.OnDelete = [ this, this.onDeleteContact ];
        this.detailsPage.OnSetContact( itemView.Contact );
        this.SwitchToDialog( this.detailsPage, _app._GetAutoObject( _app.Res.SlideLeftCentered ), 
        null, null, null, null, null, null, null, null, false );
      }
    },

    // Wrapper for the slot method : 'Application::ContactsPage.onContactActivated'
    __onContactActivated : function(s){ this.onContactActivated(s);},

    // Implementation of the Chora method : 'Application::ContactsPage.onMYCardUpdate()'
    onMYCardUpdate : function( sender )
    {
      this.VerticalList.InvalidateItems( 0, this.VerticalList.NoOfItems - 1 );
    },

    // Implementation of the Chora method : 'Application::ContactsPage.onMyCardPress()'
    onMyCardPress : function( sender )
    {
      if ( !!_app._GetAutoObject( _app.Device.Device ).MyCard )
      {
        var contact = _app._GetAutoObject( _app.Device.Device ).Contacts.FindByID( 
          _app._GetAutoObject( _app.Device.Device ).MyCard );

        if ( !!contact )
        {
          this.detailsPage = _app._NewObject( _unit.ContactDetailsPage, 0 );
          this.detailsPage.OnBack = [ this, this.onCloseContact ];
          this.detailsPage.OnSetContact( contact );
          this.SwitchToDialog( this.detailsPage, _app._GetAutoObject( _app.Res.SlideLeftCentered ), 
          null, null, null, null, null, null, null, null, false );
        }
      }
    },

    // Initializer for the class 'Application::ContactsPage'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Group._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Views.Rectangle._Init.call( this.Background = { _parent:this }, 0 );
      _app.Core.VerticalList._Init.call( this.VerticalList = { _parent:this }, 0 );
      _app.Core.SlideTouchHandler._Init.call( this.SlideTouchHandler = { _parent:this }, 0 );
      _app.Components.SButton25x25._Init.call( this.UpButton = { _parent:this }, 0 );
      _app.Components.SButton25x25._Init.call( this.DownButton = { _parent:this }, 0 );
      _app.Components.SearchEtxt._Init.call( this.SearchExt = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.TitleTxt = { _parent:this }, 0 );
      _app.Components.SButton25x25._Init.call( this.PlusButton = { _parent:this }, 0 );
      _app.Templates.TextEditor._Init.call( this.TextEditor1 = { _parent:this }, 0 );
      _unit.MyCardItem._Init.call( this.MyCardItem = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.ContactsPage;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _0000 );
      this.Background.OnSetLayout( 0x3F );
      this.Background.OnSetBounds( _0000 );
      this.VerticalList.OnSetLayout( 0x14 );
      this.VerticalList.OnSetBounds( _0001 );
      this.VerticalList.OnSetItemHeight( 32 );
      this.VerticalList.OnSetItemClass( _unit.ContactItem );
      this.SlideTouchHandler.OnSetStackingPriority( -1 );
      this.SlideTouchHandler.OnSetLayout( 0x14 );
      this.SlideTouchHandler.OnSetBounds( _0002 );
      this.SlideTouchHandler.OnSetSnapNext( _0003 );
      this.SlideTouchHandler.SlideHorz = false;
      this.UpButton.OnSetLayout( 0x18 );
      this.UpButton.OnSetBounds( _0004 );
      this.UpButton.OnSetInitials( _app.Res.Uptxt );
      this.UpButton.OnSetInitialsColor( _app.Res.Blue );
      this.UpButton.OnSetBackgoundColor( _app.Res.Transparent );
      this.UpButton.OnSetBackgoundPressedColor( _app.Res.Transparent );
      this.UpButton.OnSetBackgroundUnabled( _app.Res.Transparent );
      this.DownButton.OnSetLayout( 0x18 );
      this.DownButton.OnSetBounds( _0005 );
      this.DownButton.OnSetEnabled( true );
      this.DownButton.OnSetInitials( _app.Res.DownTxt );
      this.DownButton.OnSetInitialsColor( _app.Res.Blue );
      this.DownButton.OnSetBackgoundColor( _app.Res.Transparent );
      this.DownButton.OnSetBackgoundPressedColor( _app.Res.Transparent );
      this.DownButton.OnSetBackgroundUnabled( _app.Res.Transparent );
      this.SearchExt.OnSetLayout( 0x1D );
      this.SearchExt.OnSetBounds( _0006 );
      this.SearchExt.OnSetColor( _app.Res.Grey );
      this.TitleTxt.OnSetBounds( _0007 );
      this.TitleTxt.OnSetAlignment( 0x11 );
      this.TitleTxt.OnSetString( _app.Strings.ContactsTxtx );
      this.TitleTxt.OnSetColor( _app.Res.Black );
      this.PlusButton.OnSetBounds( _0008 );
      this.PlusButton.OnSetEnabled( true );
      this.PlusButton.OnSetInitials( _app.Res.PlusIconTxt );
      this.PlusButton.OnSetInitialsColor( _app.Res.Blue );
      this.PlusButton.OnSetBackgoundColor( _app.Res.Transparent );
      this.PlusButton.OnSetBackgoundPressedColor( _app.Res.Transparent );
      this.PlusButton.OnSetBackgroundUnabled( _app.Res.Transparent );
      this.TextEditor1.OnSetBounds( _0009 );
      this.MyCardItem.OnSetBounds( _000A );
      this.Add( this.Background, 0 );
      this.Add( this.VerticalList, 0 );
      this.Add( this.SlideTouchHandler, 0 );
      this.Add( this.UpButton, 0 );
      this.Add( this.DownButton, 0 );
      this.Add( this.SearchExt, 0 );
      this.Add( this.TitleTxt, 0 );
      this.Add( this.PlusButton, 0 );
      this.Add( this.TextEditor1, 0 );
      this.Add( this.MyCardItem, 0 );
      this.VerticalList.OnLoadItem = [ this, this.OnLoadItem ];
      this.VerticalList.OnSetSlideHandler( this.SlideTouchHandler );
      this.UpButton.OnActivate = [ this, this.onUpPress ];
      this.UpButton.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.UpButton.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.DownButton.OnActivate = [ this, this.onDownPress ];
      this.DownButton.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.DownButton.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.SearchExt.OnChange = [ this, this.onSearch ];
      this.TitleTxt.OnSetFont( _app._GetResource( _app.Res.TitileFont32 ));
      this.PlusButton.OnActivate = [ this, this.onAddPress ];
      this.PlusButton.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.PlusButton.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.MyCardItem.OnActivate = [ this, this.onMyCardPress ];

      // Call the user defined constructor
      this.Init( aArg );
    },

    // Deintializer for the class 'Application::ContactsPage'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Core.Group;

      // Then deitialize all embedded objects ...
      this.Background._Done();
      this.VerticalList._Done();
      this.SlideTouchHandler._Done();
      this.UpButton._Done();
      this.DownButton._Done();
      this.SearchExt._Done();
      this.TitleTxt._Done();
      this.PlusButton._Done();
      this.TextEditor1._Done();
      this.MyCardItem._Done();

      // Finally continue the deinitialization in the super class
      _app.Core.Group._Done.call( this );
    },

    // Re-Initializer for the class 'Application::ContactsPage'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Core.Group._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.Background._ReInit();
      this.VerticalList._ReInit();
      this.SlideTouchHandler._ReInit();
      this.UpButton._ReInit();
      this.DownButton._ReInit();
      this.SearchExt._ReInit();
      this.TitleTxt._ReInit();
      this.PlusButton._ReInit();
      this.TextEditor1._ReInit();
      this.MyCardItem._ReInit();
    },

    // Garbage Collector method for the class 'Application::ContactsPage'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.Group._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.addContact ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.detailsPage ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Background )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.VerticalList )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.SlideTouchHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.UpButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.DownButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.SearchExt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TitleTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.PlusButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TextEditor1 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.MyCardItem )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::ContactsPage"
  };

  // User defined class: 'Application::ContactItem'
  _unit.ContactItem =
  {
    Contact : null,

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
    TouchHandler : null,
    Background : null,
    LastNameTxt : null,
    FirstNameTxt : null,
    Line : null,
    PrfofilButton : null,
    Line1 : null,
    MeTxt : null,
    ButtonColor : 0,
    TextColor : 0,

    // This variable stores the current state of the button.
    enabled : false,

    // This variable stores the current state of the button.
    selected : false,

    // This variable stores the current state of the button.
    pressed : false,

    // The method Init() is invoked automatically after the component has been created. 
    // This method can be overridden and filled with logic containing additional 
    // initialization statements.
    Init : function( aArg )
    {
      var _tmp;

      _app._AttachRefObserver([ this, this.onContactUpdated ], [ _tmp = _app._GetAutoObject( 
        _app.Device.Device ), _tmp.OnGetMyCard, _tmp.OnSetMyCard ], 0 );
      _app._PostSignal([ this, this.onContactUpdated ], this );
    },

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

      _app.Core.Group.UpdateViewState.call( this, aState );

      var isEnabled = (( aState & 0x10 ) === 0x10 );
      var isSelected = (( aState & 0x20 ) === 0x20 );
      var isPressed = ( this.TouchHandler.Down && this.TouchHandler.Inside ) || 
        this.FlashTimer.Enabled;

      if ( !isEnabled )
      {
        this.Background.OnSetColor( this.ButtonColor );
        this.LastNameTxt.OnSetColor( _app.Res.Grey );
        this.FirstNameTxt.OnSetColor( _app.Res.Grey );
        this.MeTxt.OnSetColor( _app.Res.Transparent );
      }
      else
        if ( isPressed )
          this.Background.OnSetColor( _app.Res.PressColor );
        else
          if ( isSelected )
            this.Background.OnSetColor( _app.Res.GreyLight );
          else
          {
            this.Background.OnSetColor( this.ButtonColor );
            this.LastNameTxt.OnSetColor( this.TextColor );
            this.FirstNameTxt.OnSetColor( this.TextColor );
            this.MeTxt.OnSetColor( _app.Res.Transparent );
          }

      this.enabled = isEnabled;
      this.selected = isSelected;
      this.pressed = isPressed;
    },

    // Implementation of the Chora method : 'Application::ContactItem.OnSetContact()'
    OnSetContact : function( value )
    {
      if ( this.Contact === value )
        return;

      if ( !!this.Contact )
        _app._DetachObjObserver([ this, this.onContactUpdated ], this.Contact, 0 );

      this.Contact = value;

      if ( !!this.Contact )
        _app._AttachObjObserver([ this, this.onContactUpdated ], this.Contact, 0 );

      _app._PostSignal([ this, this.onContactUpdated ], this );
    },

    // Implementation of the Chora method : 'Application::ContactItem.onContactUpdated()'
    onContactUpdated : function( sender )
    {
      if ( !this.Contact )
      {
        this.FirstNameTxt.OnSetString( _app._EmptyString );
        this.LastNameTxt.OnSetString( _app._EmptyString );
        this.PrfofilButton.OnSetInitials( _app._EmptyString );
      }
      else
      {
        if ( this.Contact.LastName === _app._EmptyString )
          this.LastNameTxt.OnSetString( this.Contact.FirstName );
        else
        {
          this.FirstNameTxt.OnSetString( this.Contact.FirstName );
          this.LastNameTxt.OnSetString( this.Contact.LastName );
        }

        this.PrfofilButton.OnSetInitials( this.Contact.NameInitials );

        if ( !!_app._GetAutoObject( _app.Device.Device ).MyCard && ( this.Contact.ID 
            === _app._GetAutoObject( _app.Device.Device ).MyCard.ID ))
          this.MeTxt.OnSetColor( _app.Res.Grey );
      }
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

    // Initializer for the class 'Application::ContactItem'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Group._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Core.Timer._Init.call( this.FlashTimer = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.KeyHandler = { _parent:this }, 0 );
      _app.Core.SimpleTouchHandler._Init.call( this.TouchHandler = { _parent:this }, 0 );
      _app.Views.Rectangle._Init.call( this.Background = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.LastNameTxt = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.FirstNameTxt = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Line = { _parent:this }, 0 );
      _app.Components.SButton25x25._Init.call( this.PrfofilButton = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Line1 = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.MeTxt = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.ContactItem;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _000B );
      this.ButtonColor = _app.Res.White;
      this.FlashTimer.OnSetPeriod( 0 );
      this.FlashTimer.OnSetBegin( 50 );
      this.KeyHandler.Filter = 149;
      this.TextColor = _app.Res.Black;
      this.TouchHandler.OnSetLayout( 0x3F );
      this.TouchHandler.OnSetPoint4( _000C );
      this.TouchHandler.OnSetPoint3( _000D );
      this.TouchHandler.OnSetPoint2( _000E );
      this.TouchHandler.OnSetPoint1( _000F );
      this.TouchHandler.RetargetCondition = 0xF;
      this.TouchHandler.OnSetMaxStrikeCount( 100 );
      this.Background.OnSetBounds( _000B );
      this.Background.OnSetColorBL( 0xC8FDFDFD );
      this.Background.OnSetColorBR( 0xC8FDFDFD );
      this.Background.OnSetColor( 0xFFFFFFFF );
      this.LastNameTxt.OnSetBounds( _0010 );
      this.LastNameTxt.OnSetAlignment( 0x11 );
      this.LastNameTxt.OnSetString( _app._EmptyString );
      this.LastNameTxt.OnSetColor( _app.Res.Black );
      this.FirstNameTxt.OnSetStackingPriority( 0 );
      this.FirstNameTxt.OnSetLayout( 0x5 );
      this.FirstNameTxt.OnSetBounds( _0011 );
      this.FirstNameTxt.OnSetAlignment( 0x11 );
      this.FirstNameTxt.OnSetString( _app._EmptyString );
      this.FirstNameTxt.OnSetColor( _app.Res.Black );
      this.Line.OnSetLayout( 0x14 );
      this.Line.OnSetPoint2( _000D );
      this.Line.OnSetPoint1( _000C );
      this.Line.OnSetWidth( 2 );
      this.Line.OnSetColor( _app.Res.GreyLight );
      this.PrfofilButton.OnSetBounds( _0012 );
      this.PrfofilButton.OnSetDescriptColor( _app.Res.White );
      this.Line1.OnSetLayout( 0x14 );
      this.Line1.OnSetPoint2( _000E );
      this.Line1.OnSetPoint1( _000F );
      this.Line1.OnSetWidth( 2 );
      this.Line1.OnSetColor( _app.Res.GreyLight );
      this.MeTxt.OnSetBounds( _0013 );
      this.MeTxt.OnSetAutoSize( true );
      this.MeTxt.OnSetAlignment( 0x14 );
      this.MeTxt.OnSetString( _0014 );
      this.MeTxt.OnSetColor( _app.Res.Transparent );
      this.MeTxt.OnSetVisible( true );
      this.Add( this.TouchHandler, 0 );
      this.Add( this.Background, 0 );
      this.Add( this.LastNameTxt, 0 );
      this.Add( this.FirstNameTxt, 0 );
      this.Add( this.Line, 0 );
      this.Add( this.PrfofilButton, 0 );
      this.Add( this.Line1, 0 );
      this.Add( this.MeTxt, 0 );
      this.FlashTimer.OnTrigger = [ this, this.onFlashTimer ];
      this.KeyHandler.OnPress = [ this, this.onPressKey ];
      this.TouchHandler.OnLeave = [ this, this.onEnterLeaveTouch ];
      this.TouchHandler.OnEnter = [ this, this.onEnterLeaveTouch ];
      this.TouchHandler.OnRelease = [ this, this.onReleaseTouch ];
      this.TouchHandler.OnPress = [ this, this.onPressTouch ];
      this.LastNameTxt.OnSetFont( _app._GetResource( _app.Res.ContactFontBold15 ));
      this.FirstNameTxt.OnSetFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.PrfofilButton.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.PrfofilButton.OnSetInitialsFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.PrfofilButton.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.MeTxt.OnSetFont( _app._GetResource( _app.Resources.DefaultFont ));

      // Call the user defined constructor
      this.Init( aArg );
    },

    // Deintializer for the class 'Application::ContactItem'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Core.Group;

      // Then deitialize all embedded objects ...
      this.FlashTimer._Done();
      this.KeyHandler._Done();
      this.TouchHandler._Done();
      this.Background._Done();
      this.LastNameTxt._Done();
      this.FirstNameTxt._Done();
      this.Line._Done();
      this.PrfofilButton._Done();
      this.Line1._Done();
      this.MeTxt._Done();

      // Finally continue the deinitialization in the super class
      _app.Core.Group._Done.call( this );
    },

    // Re-Initializer for the class 'Application::ContactItem'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Core.Group._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.FlashTimer._ReInit();
      this.KeyHandler._ReInit();
      this.TouchHandler._ReInit();
      this.Background._ReInit();
      this.LastNameTxt._ReInit();
      this.FirstNameTxt._ReInit();
      this.Line._ReInit();
      this.PrfofilButton._ReInit();
      this.Line1._ReInit();
      this.MeTxt._ReInit();
    },

    // Garbage Collector method for the class 'Application::ContactItem'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.Group._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.Contact ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnActivate ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.FlashTimer )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.KeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TouchHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Background )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.LastNameTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.FirstNameTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.PrfofilButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line1 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.MeTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::ContactItem"
  };

  // User defined class: 'Application::ContactDetailsPage'
  _unit.ContactDetailsPage =
  {
    editContact : null,
    Contact : null,
    OnDelete : null,
    OnBack : null,
    Background : null,
    Line2 : null,
    NumberTxt : null,
    MobileTxt : null,
    Line1 : null,
    CallBtn : null,
    VideoCallBtn : null,
    PushButtonMediumBlue2 : null,
    ContactName : null,
    UserInitialsBtn : null,
    EditBtn : null,
    BackBtn : null,
    FavoritTxt : null,

    // Implementation of the Chora method : 'Application::ContactDetailsPage.onTapEdit()'
    onTapEdit : function( sender )
    {
      this.editContact = _app._NewObject( _unit.ContactEditPage, 0 );
      this.editContact.OnSave = [ this, this.onSaveEdit ];
      this.editContact.OnClose = [ this, this.onCancelEdit ];
      this.editContact.OnSetContact( this.Contact );
      this.editContact.OnDelete = [ this, this.onDelete ];
      this.SwitchToDialog( this.editContact, _app._GetAutoObject( _app.Res.FadeInOutCentered ), 
      null, null, null, null, null, null, null, null, false );
    },

    // Wrapper for the slot method : 'Application::ContactDetailsPage.onTapEdit'
    __onTapEdit : function(s){ this.onTapEdit(s);},

    // Implementation of the Chora method : 'Application::ContactDetailsPage.onDelete()'
    onDelete : function( sender )
    {
      var _tmp;

      ( _tmp = this.OnDelete )? _tmp[1].call( _tmp[0], this ) : null;
      this.DismissDialog( this.editContact, _app._GetAutoObject( _app.Res.FadeInOutCentered ), 
      null, null, null, null, false );
    },

    // Implementation of the Chora method : 'Application::ContactDetailsPage.onTapCall()'
    onTapCall : function( sender )
    {
      _app._GetAutoObject( _app.Device.Device ).SendCallContact( this.Contact );
    },

    // Implementation of the Chora method : 'Application::ContactDetailsPage.onSaveEdit()'
    onSaveEdit : function( sender )
    {
      this.DismissDialog( this.editContact, _app._GetAutoObject( _app.Res.FadeInOutCentered ), 
      null, null, null, null, false );
    },

    // Implementation of the Chora method : 'Application::ContactDetailsPage.onCancelEdit()'
    onCancelEdit : function( sender )
    {
      this.DismissDialog( this.editContact, _app._GetAutoObject( _app.Res.FadeInOutCentered ), 
      null, null, null, null, false );
    },

    // Implementation of the Chora method : 'Application::ContactDetailsPage.onBack()'
    onBack : function( sender )
    {
      var _tmp;

      ( _tmp = this.OnBack )? _tmp[1].call( _tmp[0], this ) : null;
    },

    // Implementation of the Chora method : 'Application::ContactDetailsPage.OnSetContact()'
    OnSetContact : function( value )
    {
      if ( this.Contact === value )
        return;

      if ( !!this.Contact )
        _app._DetachObjObserver([ this, this.__onContactUpdated ], this.Contact, 
          0 );

      this.Contact = value;

      if ( !!this.Contact )
      {
        _app._AttachObjObserver([ this, this.__onContactUpdated ], this.Contact, 
          0 );
        _app._PostSignal([ this, this.__onContactUpdated ], this );
      }
    },

    // Implementation of the Chora method : 'Application::ContactDetailsPage.onContactUpdated()'
    onContactUpdated : function( sender )
    {
      if ( !!this.Contact )
      {
        this.ContactName.OnSetString(( this.Contact.LastName + _0015 ) + this.Contact.FirstName );
        this.NumberTxt.OnSetString( this.Contact.PhoneNumber );
        this.UserInitialsBtn.OnSetInitials( this.Contact.NameInitials );
        this.FavoritTxt.OnSetVisible(( this.Contact.Favorite? true : false ));
      }
    },

    // Wrapper for the slot method : 'Application::ContactDetailsPage.onContactUpdated'
    __onContactUpdated : function(s){ this.onContactUpdated(s);},

    // Initializer for the class 'Application::ContactDetailsPage'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Group._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Views.Rectangle._Init.call( this.Background = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Line2 = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.NumberTxt = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.MobileTxt = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Line1 = { _parent:this }, 0 );
      _app.Components.Button50x75._Init.call( this.CallBtn = { _parent:this }, 0 );
      _app.Components.Button50x75._Init.call( this.VideoCallBtn = { _parent:this }, 0 );
      _app.Components.Button50x75._Init.call( this.PushButtonMediumBlue2 = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.ContactName = { _parent:this }, 0 );
      _app.Components.ButtonBase70x90._Init.call( this.UserInitialsBtn = { _parent:this }, 0 );
      _app.Components.SButton25x25._Init.call( this.EditBtn = { _parent:this }, 0 );
      _app.Components.SButton25x25._Init.call( this.BackBtn = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.FavoritTxt = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.ContactDetailsPage;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _0000 );
      this.Background.OnSetBounds( _0000 );
      this.Line2.OnSetPoint2( _0016 );
      this.Line2.OnSetPoint1( _0017 );
      this.Line2.OnSetColor( 0xFDE2E2E2 );
      this.NumberTxt.OnSetLayout( 0x14 );
      this.NumberTxt.OnSetBounds( _0018 );
      this.NumberTxt.OnSetColorBR( 0x00FFFFFF );
      this.NumberTxt.OnSetAlignment( 0x11 );
      this.NumberTxt.OnSetString( _0019 );
      this.NumberTxt.OnSetColor( _app.Res.Blue );
      this.MobileTxt.OnSetLayout( 0x14 );
      this.MobileTxt.OnSetBounds( _001A );
      this.MobileTxt.OnSetAlignment( 0x11 );
      this.MobileTxt.OnSetString( _app.Strings.MobileTxt );
      this.MobileTxt.OnSetColor( _app.Res.Black );
      this.Line1.OnSetPoint2( _001B );
      this.Line1.OnSetPoint1( _001C );
      this.Line1.OnSetColor( 0xFDE2E2E2 );
      this.CallBtn.OnSetBounds( _001D );
      this.CallBtn.OnSetInitials( _app.Res.CallTxt );
      this.CallBtn.OnSetDescript( _app.Strings.callTxt );
      this.CallBtn.OnSetBackgoundColor( _app.Res.Blue );
      this.CallBtn.OnSetBackgoundPressedColor( _app.Res.BlueLight );
      this.VideoCallBtn.OnSetBounds( _001E );
      this.VideoCallBtn.OnSetEnabled( true );
      this.VideoCallBtn.OnSetInitials( _app.Res.VideoCallTxt );
      this.VideoCallBtn.OnSetDescript( _app.Strings.VideoTxt );
      this.VideoCallBtn.OnSetBackgoundColor( _app.Res.Blue );
      this.VideoCallBtn.OnSetBackgoundPressedColor( _app.Res.BlueLight );
      this.PushButtonMediumBlue2.OnSetBounds( _001F );
      this.PushButtonMediumBlue2.OnSetEnabled( true );
      this.PushButtonMediumBlue2.OnSetInitials( _app.Res.MessageIconTxt );
      this.PushButtonMediumBlue2.OnSetDescript( _app.Strings.messageTxt );
      this.PushButtonMediumBlue2.OnSetBackgoundColor( _app.Res.Blue );
      this.PushButtonMediumBlue2.OnSetBackgoundPressedColor( _app.Res.BlueLight );
      this.ContactName.OnSetLayout( 0x14 );
      this.ContactName.OnSetBounds( _0020 );
      this.ContactName.OnSetAlignment( 0x12 );
      this.ContactName.OnSetString( _0021 );
      this.ContactName.OnSetColor( _app.Res.Black );
      this.UserInitialsBtn.OnSetBounds( _0022 );
      this.EditBtn.OnSetBounds( _0023 );
      this.EditBtn.OnSetInitials( _app.Res.EditIconTxt );
      this.EditBtn.OnSetInitialsColor( _app.Res.Blue );
      this.EditBtn.OnSetBackgoundColor( _app.Res.Transparent );
      this.EditBtn.OnSetBackgoundPressedColor( _app.Res.Transparent );
      this.BackBtn.OnSetBounds( _0024 );
      this.BackBtn.OnSetInitials( _app.Res.BackIconTxt );
      this.BackBtn.OnSetInitialsColor( _app.Res.Blue );
      this.BackBtn.OnSetBackgoundColor( _app.Res.Transparent );
      this.BackBtn.OnSetBackgoundPressedColor( _app.Res.Transparent );
      this.FavoritTxt.OnSetBounds( _0025 );
      this.FavoritTxt.OnSetString( _app.Res.HeartTxt );
      this.FavoritTxt.OnSetColor( _app.Res.Grey );
      this.FavoritTxt.OnSetVisible( false );
      this.Add( this.Background, 0 );
      this.Add( this.Line2, 0 );
      this.Add( this.NumberTxt, 0 );
      this.Add( this.MobileTxt, 0 );
      this.Add( this.Line1, 0 );
      this.Add( this.CallBtn, 0 );
      this.Add( this.VideoCallBtn, 0 );
      this.Add( this.PushButtonMediumBlue2, 0 );
      this.Add( this.ContactName, 0 );
      this.Add( this.UserInitialsBtn, 0 );
      this.Add( this.EditBtn, 0 );
      this.Add( this.BackBtn, 0 );
      this.Add( this.FavoritTxt, 0 );
      this.NumberTxt.OnSetFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.MobileTxt.OnSetFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.CallBtn.OnActivate = [ this, this.onTapCall ];
      this.CallBtn.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont20 ));
      this.CallBtn.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium ));
      this.VideoCallBtn.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont20 ));
      this.VideoCallBtn.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium ));
      this.PushButtonMediumBlue2.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont20 ));
      this.PushButtonMediumBlue2.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium ));
      this.ContactName.OnSetFont( _app._GetResource( _app.Res.TitileFont29 ));
      this.EditBtn.OnActivate = [ this, this.__onTapEdit ];
      this.EditBtn.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.EditBtn.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.BackBtn.OnActivate = [ this, this.onBack ];
      this.BackBtn.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.BackBtn.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.FavoritTxt.OnSetFont( _app._GetResource( _app.Res.IconsFont20 ));
    },

    // Deintializer for the class 'Application::ContactDetailsPage'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Core.Group;

      // Then deitialize all embedded objects ...
      this.Background._Done();
      this.Line2._Done();
      this.NumberTxt._Done();
      this.MobileTxt._Done();
      this.Line1._Done();
      this.CallBtn._Done();
      this.VideoCallBtn._Done();
      this.PushButtonMediumBlue2._Done();
      this.ContactName._Done();
      this.UserInitialsBtn._Done();
      this.EditBtn._Done();
      this.BackBtn._Done();
      this.FavoritTxt._Done();

      // Finally continue the deinitialization in the super class
      _app.Core.Group._Done.call( this );
    },

    // Re-Initializer for the class 'Application::ContactDetailsPage'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Core.Group._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.Background._ReInit();
      this.Line2._ReInit();
      this.NumberTxt._ReInit();
      this.MobileTxt._ReInit();
      this.Line1._ReInit();
      this.CallBtn._ReInit();
      this.VideoCallBtn._ReInit();
      this.PushButtonMediumBlue2._ReInit();
      this.ContactName._ReInit();
      this.UserInitialsBtn._ReInit();
      this.EditBtn._ReInit();
      this.BackBtn._ReInit();
      this.FavoritTxt._ReInit();
    },

    // Garbage Collector method for the class 'Application::ContactDetailsPage'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.Group._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.editContact ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Contact ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnDelete ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnBack ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Background )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line2 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.NumberTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.MobileTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line1 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.CallBtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.VideoCallBtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.PushButtonMediumBlue2 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.ContactName )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.UserInitialsBtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.EditBtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.BackBtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.FavoritTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::ContactDetailsPage"
  };

  // User defined class: 'Application::ContactAddPage'
  _unit.ContactAddPage =
  {
    Contact : null,
    OnSave : null,
    OnClose : null,
    Background : null,
    Line4 : null,
    PhoneNumberTxt : null,
    Line3 : null,
    FirstNameTxt : null,
    Line2 : null,
    LastNameTxt : null,
    Line1 : null,
    UserInitials : null,
    TitleTxt : null,
    SaveBtn : null,
    CloseButton : null,
    ToggleButton : null,
    Text : null,

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
      _app.Core.Group.UpdateViewState.call( this, aState );

      if ( !!this.Contact )
      {
        if ((( this.FirstNameTxt.OnGetString() !== _app._EmptyString ) || ( this.LastNameTxt.OnGetString() 
            !== _app._EmptyString )) || ( this.PhoneNumberTxt.OnGetString() !== 
            _app._EmptyString ))
          this.SaveBtn.OnSetEnabled( true );
        else
          this.SaveBtn.OnSetEnabled( false );
      }
    },

    // Implementation of the Chora method : 'Application::ContactAddPage.onSave()'
    onSave : function( sender )
    {
      var _tmp;

      _app._NotifyObjObservers( this.Contact, 0 );

      if ( this.ToggleButton.Active === true )
        _app._GetAutoObject( _app.Device.Device ).OnSetMyCard( this.Contact );

      ( _tmp = this.OnSave )? _tmp[1].call( _tmp[0], this ) : null;
    },

    // Implementation of the Chora method : 'Application::ContactAddPage.OnSetContact()'
    OnSetContact : function( value )
    {
      if ( this.Contact === value )
        return;

      if ( !!this.Contact )
        _app._DetachObjObserver([ this, this.onContactUpdated ], this.Contact, 0 );

      this.Contact = value;

      if ( !!this.Contact )
      {
        _app._AttachObjObserver([ this, this.onContactUpdated ], this.Contact, 0 );
        _app._PostSignal([ this, this.onContactUpdated ], this );
      }
    },

    // Implementation of the Chora method : 'Application::ContactAddPage.onContactUpdated()'
    onContactUpdated : function( sender )
    {
      this.Contact.OnSetFirstName( this.FirstNameTxt.OnGetString());
      this.Contact.OnSetLastName( this.LastNameTxt.OnGetString());
      this.Contact.OnSetPhoneNumber( this.PhoneNumberTxt.OnGetString());
      this.Contact.OnSetNameInitials( _app._GetAutoObject( _app.Device.Device ).Contacts.GetInitials( 
      this.LastNameTxt.OnGetString(), this.FirstNameTxt.OnGetString()));

      if ( this.ToggleButton.Active === true )
        this.Contact.OnSetMyCard( this.ToggleButton.Active );

      if (( this.Contact.LastName === _app._EmptyString ) && ( this.Contact.FirstName 
          === _app._EmptyString ))
        this.Contact.OnSetLastName( this.Contact.PhoneNumber );
    },

    // Implementation of the Chora method : 'Application::ContactAddPage.onClose()'
    onClose : function( sender )
    {
      var _tmp;

      ( _tmp = this.OnClose )? _tmp[1].call( _tmp[0], this ) : null;
    },

    // Implementation of the Chora method : 'Application::ContactAddPage.onFieldChanged()'
    onFieldChanged : function( sender )
    {
      this.UserInitials.OnSetInitials( _app._GetAutoObject( _app.Device.Device ).Contacts.GetInitials( 
      this.LastNameTxt.OnGetString(), this.FirstNameTxt.OnGetString()));
      this.InvalidateViewState();
    },

    // Initializer for the class 'Application::ContactAddPage'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Group._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Views.Rectangle._Init.call( this.Background = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Line4 = { _parent:this }, 0 );
      _app.Components.InputEtxt._Init.call( this.PhoneNumberTxt = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Line3 = { _parent:this }, 0 );
      _app.Components.InputEtxt._Init.call( this.FirstNameTxt = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Line2 = { _parent:this }, 0 );
      _app.Components.InputEtxt._Init.call( this.LastNameTxt = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Line1 = { _parent:this }, 0 );
      _app.Components.ButtonBase70x90._Init.call( this.UserInitials = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.TitleTxt = { _parent:this }, 0 );
      _app.Components.SButton25x25._Init.call( this.SaveBtn = { _parent:this }, 0 );
      _app.Components.SButton25x25._Init.call( this.CloseButton = { _parent:this }, 0 );
      _app.Components.ToggleButton._Init.call( this.ToggleButton = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.Text = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.ContactAddPage;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _0000 );
      this.Background.OnSetBounds( _0000 );
      this.Line4.OnSetPoint2( _0026 );
      this.Line4.OnSetPoint1( _0027 );
      this.Line4.OnSetColor( 0xFDE2E2E2 );
      this.PhoneNumberTxt.OnSetLayout( 0x4 );
      this.PhoneNumberTxt.OnSetBounds( _0028 );
      this.PhoneNumberTxt.OnSetString( _app._EmptyString );
      this.PhoneNumberTxt.OnSetColor( _app.Res.Blue );
      this.PhoneNumberTxt.OnSetPlaceholder( _0029 );
      this.Line3.OnSetPoint2( _002A );
      this.Line3.OnSetPoint1( _002B );
      this.Line3.OnSetColor( 0xFDE2E2E2 );
      this.FirstNameTxt.OnSetLayout( 0x4 );
      this.FirstNameTxt.OnSetBounds( _002C );
      this.FirstNameTxt.OnSetString( _app._EmptyString );
      this.FirstNameTxt.OnSetColor( _app.Res.Black );
      this.FirstNameTxt.OnSetPlaceholder( _002D );
      this.Line2.OnSetPoint2( _002E );
      this.Line2.OnSetPoint1( _002F );
      this.Line2.OnSetColor( 0xFDE2E2E2 );
      this.LastNameTxt.OnSetLayout( 0x4 );
      this.LastNameTxt.OnSetBounds( _0030 );
      this.LastNameTxt.OnSetString( _app._EmptyString );
      this.LastNameTxt.OnSetColor( _app.Res.Black );
      this.LastNameTxt.OnSetPlaceholder( _0031 );
      this.Line1.OnSetPoint2( _0032 );
      this.Line1.OnSetPoint1( _0033 );
      this.Line1.OnSetColor( 0xFDE2E2E2 );
      this.UserInitials.OnSetBounds( _0034 );
      this.UserInitials.OnSetDescript( _app.Strings.AddPhototTxt );
      this.TitleTxt.OnSetBounds( _0035 );
      this.TitleTxt.OnSetString( _app.Strings.NewContactTxt );
      this.TitleTxt.OnSetColor( _app.Res.Black );
      this.SaveBtn.OnSetBounds( _0023 );
      this.SaveBtn.OnSetEnabled( false );
      this.SaveBtn.OnSetInitials( _app.Res.CkeckIconTxt );
      this.SaveBtn.OnSetInitialsColor( _app.Res.Blue );
      this.SaveBtn.OnSetBackgoundColor( _app.Res.Transparent );
      this.SaveBtn.OnSetBackgoundPressedColor( _app.Res.Transparent );
      this.SaveBtn.OnSetBackgroundUnabled( _app.Res.Transparent );
      this.CloseButton.OnSetBounds( _0024 );
      this.CloseButton.OnSetInitials( _app.Res.CloseIconTxt );
      this.CloseButton.OnSetInitialsColor( _app.Res.Blue );
      this.CloseButton.OnSetBackgoundColor( _app.Res.Transparent );
      this.CloseButton.OnSetBackgoundPressedColor( _app.Res.Transparent );
      this.CloseButton.OnSetBackgroundUnabled( _app.Res.Transparent );
      this.ToggleButton.OnSetBounds( _0036 );
      this.Text.OnSetBounds( _0037 );
      this.Text.OnSetAlignment( 0x11 );
      this.Text.OnSetString( _app.Strings.MyCardTxt );
      this.Text.OnSetColor( _app.Res.Grey );
      this.Add( this.Background, 0 );
      this.Add( this.Line4, 0 );
      this.Add( this.PhoneNumberTxt, 0 );
      this.Add( this.Line3, 0 );
      this.Add( this.FirstNameTxt, 0 );
      this.Add( this.Line2, 0 );
      this.Add( this.LastNameTxt, 0 );
      this.Add( this.Line1, 0 );
      this.Add( this.UserInitials, 0 );
      this.Add( this.TitleTxt, 0 );
      this.Add( this.SaveBtn, 0 );
      this.Add( this.CloseButton, 0 );
      this.Add( this.ToggleButton, 0 );
      this.Add( this.Text, 0 );
      this.PhoneNumberTxt.OnChange = [ this, this.onFieldChanged ];
      this.FirstNameTxt.OnChange = [ this, this.onFieldChanged ];
      this.LastNameTxt.OnChange = [ this, this.onFieldChanged ];
      this.TitleTxt.OnSetFont( _app._GetResource( _app.Res.ContactFontBold15 ));
      this.SaveBtn.OnActivate = [ this, this.onSave ];
      this.SaveBtn.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.SaveBtn.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.CloseButton.OnActivate = [ this, this.onClose ];
      this.CloseButton.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.CloseButton.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.Text.OnSetFont( _app._GetResource( _app.Resources.FontSmall ));
    },

    // Deintializer for the class 'Application::ContactAddPage'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Core.Group;

      // Then deitialize all embedded objects ...
      this.Background._Done();
      this.Line4._Done();
      this.PhoneNumberTxt._Done();
      this.Line3._Done();
      this.FirstNameTxt._Done();
      this.Line2._Done();
      this.LastNameTxt._Done();
      this.Line1._Done();
      this.UserInitials._Done();
      this.TitleTxt._Done();
      this.SaveBtn._Done();
      this.CloseButton._Done();
      this.ToggleButton._Done();
      this.Text._Done();

      // Finally continue the deinitialization in the super class
      _app.Core.Group._Done.call( this );
    },

    // Re-Initializer for the class 'Application::ContactAddPage'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Core.Group._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.Background._ReInit();
      this.Line4._ReInit();
      this.PhoneNumberTxt._ReInit();
      this.Line3._ReInit();
      this.FirstNameTxt._ReInit();
      this.Line2._ReInit();
      this.LastNameTxt._ReInit();
      this.Line1._ReInit();
      this.UserInitials._ReInit();
      this.TitleTxt._ReInit();
      this.SaveBtn._ReInit();
      this.CloseButton._ReInit();
      this.ToggleButton._ReInit();
      this.Text._ReInit();
    },

    // Garbage Collector method for the class 'Application::ContactAddPage'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.Group._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.Contact ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnSave ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnClose ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Background )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line4 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.PhoneNumberTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line3 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.FirstNameTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line2 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.LastNameTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line1 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.UserInitials )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TitleTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.SaveBtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.CloseButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.ToggleButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Text )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::ContactAddPage"
  };

  // User defined class: 'Application::ContactEditPage'
  _unit.ContactEditPage =
  {
    Contact : null,
    OnSave : null,
    OnClose : null,
    OnDelete : null,
    Background : null,
    DeleteBtn : null,
    NumberTxt : null,
    Line4 : null,
    MobileTxt : null,
    Line3 : null,
    FirstNameTxt : null,
    Line2 : null,
    LastNameTxt : null,
    Line1 : null,
    UserInitials : null,
    CloseBtn : null,
    SaveBtn : null,
    ToggleButton : null,
    Text : null,

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
      _app.Core.Group.UpdateViewState.call( this, aState );

      if ( !!this.Contact )
      {
        if (((( this.Contact.FirstName !== this.FirstNameTxt.OnGetString()) || ( 
            this.Contact.LastName !== this.LastNameTxt.OnGetString())) || ( this.Contact.PhoneNumber 
            !== this.NumberTxt.OnGetString())) || ( this.ToggleButton.Active !== 
            this.Contact.MyCard ))
          this.SaveBtn.OnSetEnabled( true );
        else
          this.SaveBtn.OnSetEnabled( false );
      }
    },

    // Implementation of the Chora method : 'Application::ContactEditPage.onSave()'
    onSave : function( sender )
    {
      var _tmp;

      this.Contact.OnSetFirstName( this.FirstNameTxt.OnGetString());
      this.Contact.OnSetLastName( this.LastNameTxt.OnGetString());
      this.Contact.OnSetPhoneNumber( this.NumberTxt.OnGetString());
      this.Contact.OnSetNameInitials( _app._GetAutoObject( _app.Device.Device ).Contacts.GetInitials( 
      this.Contact.LastName, this.Contact.FirstName ));

      if ( this.Contact.MyCard !== this.ToggleButton.Active )
      {
        this.Contact.OnSetMyCard( this.ToggleButton.Active );
        _app._GetAutoObject( _app.Device.Device ).OnSetMyCard( this.Contact );
      }

      ( _tmp = this.OnSave )? _tmp[1].call( _tmp[0], this ) : null;
    },

    // Implementation of the Chora method : 'Application::ContactEditPage.onClose()'
    onClose : function( sender )
    {
      var _tmp;

      ( _tmp = this.OnClose )? _tmp[1].call( _tmp[0], this ) : null;
    },

    // Implementation of the Chora method : 'Application::ContactEditPage.onDeleteContact()'
    onDeleteContact : function( sender )
    {
      var _tmp;

      _app._GetAutoObject( _app.Device.Device ).Contacts.Remove( this.Contact );
      ( _tmp = this.OnDelete )? _tmp[1].call( _tmp[0], this ) : null;
    },

    // Implementation of the Chora method : 'Application::ContactEditPage.OnSetContact()'
    OnSetContact : function( value )
    {
      if ( this.Contact === value )
        return;

      if ( !!this.Contact )
        _app._DetachObjObserver([ this, this.onContactUpdated ], this.Contact, 0 );

      this.Contact = value;

      if ( !!this.Contact )
      {
        _app._AttachObjObserver([ this, this.onContactUpdated ], this.Contact, 0 );
        _app._PostSignal([ this, this.onContactUpdated ], this );
      }
    },

    // Implementation of the Chora method : 'Application::ContactEditPage.onContactUpdated()'
    onContactUpdated : function( sender )
    {
      if ( !!this.Contact )
      {
        this.FirstNameTxt.OnSetString( this.Contact.FirstName );
        this.LastNameTxt.OnSetString( this.Contact.LastName );
        this.NumberTxt.OnSetString( this.Contact.PhoneNumber );
        this.UserInitials.OnSetInitials( this.Contact.NameInitials );
        this.ToggleButton.OnSetActive( this.Contact.MyCard );
      }
    },

    // Implementation of the Chora method : 'Application::ContactEditPage.onFieldModified()'
    onFieldModified : function( sender )
    {
      this.UserInitials.OnSetInitials( _app._GetAutoObject( _app.Device.Device ).Contacts.GetInitials( 
      this.Contact.LastName, this.Contact.FirstName ));
      this.InvalidateViewState();
    },

    // Initializer for the class 'Application::ContactEditPage'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Group._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Views.Rectangle._Init.call( this.Background = { _parent:this }, 0 );
      _app.Components.Button265x470._Init.call( this.DeleteBtn = { _parent:this }, 0 );
      _app.Components.InputEtxt._Init.call( this.NumberTxt = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Line4 = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.MobileTxt = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Line3 = { _parent:this }, 0 );
      _app.Components.InputEtxt._Init.call( this.FirstNameTxt = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Line2 = { _parent:this }, 0 );
      _app.Components.InputEtxt._Init.call( this.LastNameTxt = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Line1 = { _parent:this }, 0 );
      _app.Components.ButtonBase70x90._Init.call( this.UserInitials = { _parent:this }, 0 );
      _app.Components.SButton25x25._Init.call( this.CloseBtn = { _parent:this }, 0 );
      _app.Components.SButton25x25._Init.call( this.SaveBtn = { _parent:this }, 0 );
      _app.Components.ToggleButton._Init.call( this.ToggleButton = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.Text = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.ContactEditPage;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _0000 );
      this.Background.OnSetBounds( _0000 );
      this.DeleteBtn.OnSetBounds( _0038 );
      this.DeleteBtn.OnSetEnabled( true );
      this.DeleteBtn.OnSetLabel( _app.Strings.DeleteContactTxt );
      this.NumberTxt.OnSetLayout( 0x14 );
      this.NumberTxt.OnSetBounds( _0039 );
      this.NumberTxt.OnSetAlignment( 0x11 );
      this.NumberTxt.OnSetString( _003A );
      this.NumberTxt.OnSetColor( _app.Res.Blue );
      this.NumberTxt.OnSetPlaceholder( _003A );
      this.Line4.OnSetPoint2( _003B );
      this.Line4.OnSetPoint1( _003C );
      this.Line4.OnSetColor( 0xFDE2E2E2 );
      this.MobileTxt.OnSetLayout( 0x14 );
      this.MobileTxt.OnSetBounds( _003D );
      this.MobileTxt.OnSetAlignment( 0x11 );
      this.MobileTxt.OnSetString( _app.Strings.MobileTxt );
      this.MobileTxt.OnSetColor( _app.Res.Grey );
      this.Line3.OnSetPoint2( _003E );
      this.Line3.OnSetPoint1( _003F );
      this.Line3.OnSetColor( 0xFDE2E2E2 );
      this.FirstNameTxt.OnSetLayout( 0x4 );
      this.FirstNameTxt.OnSetBounds( _0040 );
      this.FirstNameTxt.OnSetString( _0041 );
      this.FirstNameTxt.OnSetColor( _app.Res.Black );
      this.FirstNameTxt.OnSetPlaceholder( _0041 );
      this.Line2.OnSetPoint2( _0042 );
      this.Line2.OnSetPoint1( _0043 );
      this.Line2.OnSetColor( 0xFDE2E2E2 );
      this.LastNameTxt.OnSetLayout( 0x4 );
      this.LastNameTxt.OnSetBounds( _0044 );
      this.LastNameTxt.OnSetString( _0045 );
      this.LastNameTxt.OnSetColor( _app.Res.Black );
      this.LastNameTxt.OnSetPlaceholder( _0045 );
      this.Line1.OnSetPoint2( _0046 );
      this.Line1.OnSetPoint1( _0047 );
      this.Line1.OnSetColor( 0xFDE2E2E2 );
      this.UserInitials.OnSetBounds( _0048 );
      this.UserInitials.OnSetInitials( _app._EmptyString );
      this.UserInitials.OnSetDescript( _app.Strings.AddPhototTxt );
      this.CloseBtn.OnSetBounds( _0024 );
      this.CloseBtn.OnSetInitials( _app.Res.CloseIconTxt );
      this.CloseBtn.OnSetInitialsColor( _app.Res.Blue );
      this.CloseBtn.OnSetBackgoundColor( _app.Res.Transparent );
      this.CloseBtn.OnSetBackgoundPressedColor( _app.Res.Transparent );
      this.SaveBtn.OnSetBounds( _0023 );
      this.SaveBtn.OnSetEnabled( false );
      this.SaveBtn.OnSetInitials( _app.Res.CkeckIconTxt );
      this.SaveBtn.OnSetInitialsColor( _app.Res.Blue );
      this.SaveBtn.OnSetBackgoundColor( _app.Res.Transparent );
      this.SaveBtn.OnSetBackgoundPressedColor( _app.Res.Transparent );
      this.SaveBtn.OnSetBackgroundUnabled( _app.Res.Transparent );
      this.SaveBtn.OnSetDescriptUnabled( _app.Res.Grey );
      this.ToggleButton.OnSetBounds( _0049 );
      this.ToggleButton.OnSetBackgroundSelectedColor( _app.Res.GreyLight );
      this.Text.OnSetBounds( _004A );
      this.Text.OnSetAlignment( 0x11 );
      this.Text.OnSetString( _app.Strings.MyCardTxt );
      this.Text.OnSetColor( _app.Res.Grey );
      this.Add( this.Background, 0 );
      this.Add( this.DeleteBtn, 0 );
      this.Add( this.NumberTxt, 0 );
      this.Add( this.Line4, 0 );
      this.Add( this.MobileTxt, 0 );
      this.Add( this.Line3, 0 );
      this.Add( this.FirstNameTxt, 0 );
      this.Add( this.Line2, 0 );
      this.Add( this.LastNameTxt, 0 );
      this.Add( this.Line1, 0 );
      this.Add( this.UserInitials, 0 );
      this.Add( this.CloseBtn, 0 );
      this.Add( this.SaveBtn, 0 );
      this.Add( this.ToggleButton, 0 );
      this.Add( this.Text, 0 );
      this.DeleteBtn.OnActivate = [ this, this.onDeleteContact ];
      this.NumberTxt.OnChange = [ this, this.onFieldModified ];
      this.NumberTxt.OnSetFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.MobileTxt.OnSetFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.FirstNameTxt.OnChange = [ this, this.onFieldModified ];
      this.LastNameTxt.OnChange = [ this, this.onFieldModified ];
      this.CloseBtn.OnActivate = [ this, this.onClose ];
      this.CloseBtn.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.CloseBtn.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.SaveBtn.OnActivate = [ this, this.onSave ];
      this.SaveBtn.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.SaveBtn.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.ToggleButton.OnToggle = [ this, this.onFieldModified ];
      this.Text.OnSetFont( _app._GetResource( _app.Resources.FontSmall ));
    },

    // Deintializer for the class 'Application::ContactEditPage'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Core.Group;

      // Then deitialize all embedded objects ...
      this.Background._Done();
      this.DeleteBtn._Done();
      this.NumberTxt._Done();
      this.Line4._Done();
      this.MobileTxt._Done();
      this.Line3._Done();
      this.FirstNameTxt._Done();
      this.Line2._Done();
      this.LastNameTxt._Done();
      this.Line1._Done();
      this.UserInitials._Done();
      this.CloseBtn._Done();
      this.SaveBtn._Done();
      this.ToggleButton._Done();
      this.Text._Done();

      // Finally continue the deinitialization in the super class
      _app.Core.Group._Done.call( this );
    },

    // Re-Initializer for the class 'Application::ContactEditPage'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Core.Group._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.Background._ReInit();
      this.DeleteBtn._ReInit();
      this.NumberTxt._ReInit();
      this.Line4._ReInit();
      this.MobileTxt._ReInit();
      this.Line3._ReInit();
      this.FirstNameTxt._ReInit();
      this.Line2._ReInit();
      this.LastNameTxt._ReInit();
      this.Line1._ReInit();
      this.UserInitials._ReInit();
      this.CloseBtn._ReInit();
      this.SaveBtn._ReInit();
      this.ToggleButton._ReInit();
      this.Text._ReInit();
    },

    // Garbage Collector method for the class 'Application::ContactEditPage'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.Group._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.Contact ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnSave ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnClose ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnDelete ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Background )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.DeleteBtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.NumberTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line4 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.MobileTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line3 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.FirstNameTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line2 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.LastNameTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line1 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.UserInitials )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.CloseBtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.SaveBtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.ToggleButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Text )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::ContactEditPage"
  };

  // User defined class: 'Application::CallPage'
  _unit.CallPage =
  {
    contactsPage : null,
    addCall : null,
    ContactsBtn : null,
    VideoCallBtn : null,
    AddCallBtn : null,
    SpeakerBtn : null,
    KeyPadBtn : null,
    MuteBtn : null,
    Keypad : null,
    Stoper : null,

    // The method Init() is invoked automatically after the component has been created. 
    // This method can be overridden and filled with logic containing additional 
    // initialization statements.
    Init : function( aArg )
    {
      var _tmp;

      this.Stoper.StartTimer( this );
    },

    // Implementation of the Chora method : 'Application::CallPage.onContactUpdated()'
    onContactUpdated : function( sender )
    {
      if ( this.Contact.CallState === 6 )
      {
        this.AddCallBtn.OnSetEnabled( true );
        this.VideoCallBtn.OnSetEnabled( true );
      }

      _unit.CallPageBase.onContactUpdated.call( this, sender );
    },

    // Implementation of the Chora method : 'Application::CallPage.onSpeakerPress()'
    onSpeakerPress : function( sender )
    {
      _app._GetAutoObject( _app.Device.Device ).OnSetSpeaker( !_app._GetAutoObject( 
      _app.Device.Device ).Speaker );
      this.SpeakerBtn.OnSetBackgoundColor(( _app._GetAutoObject( _app.Device.Device ).Speaker? 
      _app.Res.White : _app.Res.WhiteTransparent ));
      this.SpeakerBtn.OnSetInitialsColor(( _app._GetAutoObject( _app.Device.Device ).Speaker? 
      _app.Res.Black : _app.Res.White ));
    },

    // Implementation of the Chora method : 'Application::CallPage.onMicPress()'
    onMicPress : function( sender )
    {
      _app._GetAutoObject( _app.Device.Device ).OnSetMicrophone( !_app._GetAutoObject( 
      _app.Device.Device ).Microphone );
      this.MuteBtn.OnSetBackgoundColor(( _app._GetAutoObject( _app.Device.Device ).Microphone? 
      _app.Res.White : _app.Res.WhiteTransparent ));
      this.MuteBtn.OnSetInitialsColor(( _app._GetAutoObject( _app.Device.Device ).Microphone? 
      _app.Res.Black : _app.Res.White ));
    },

    // Implementation of the Chora method : 'Application::CallPage.onKeypadPress()'
    onKeypadPress : function( sender )
    {
      this.Keypad.OnSetBounds( _app._SetRectOrigin( this.Keypad.Bounds, _004B ));
      this.Keypad.OnHide = [ this, this.onHide ];
    },

    // Implementation of the Chora method : 'Application::CallPage.onAddCallPress()'
    onAddCallPress : function( sender )
    {
      this.addCall = _app._NewObject( _unit.ContactsAppInsideCall, 0 );
      this.addCall.OnCancel = [ this, this.onCancel1 ];
      this.PresentDialog( this.addCall, _app._GetAutoObject( _app.Res.SlideUpCenteredLimit ), 
      null, null, null, null, null, null, null, false );
    },

    // Implementation of the Chora method : 'Application::CallPage.onVideoCallPress()'
    onVideoCallPress : function( sender )
    {
    },

    // Implementation of the Chora method : 'Application::CallPage.onContactsPress()'
    onContactsPress : function( sender )
    {
      this.contactsPage = _app._NewObject( _unit.ContactsInsideCall, 0 );
      this.contactsPage.OnCancel = [ this, this.onCancel ];
      this.SwitchToDialog( this.contactsPage, _app._GetAutoObject( _app.Res.SlideUpCenteredLimit ), 
      null, null, null, null, null, null, null, null, false );
    },

    // Implementation of the Chora method : 'Application::CallPage.onCancel()'
    onCancel : function( sender )
    {
      this.DismissDialog( this.contactsPage, _app._GetAutoObject( _app.Res.SlideDownCentered ), 
      null, null, null, null, false );
      this.contactsPage = null;
    },

    // Implementation of the Chora method : 'Application::CallPage.onHide()'
    onHide : function( sender )
    {
      this.Keypad.OnSetBounds( _app._SetRectY( this.Keypad.Bounds, this.Bounds[3]));
      this.Keypad.InputEtxt.OnSetString( _app._EmptyString );
      this.ContactNameTxt.OnSetVisible( true );
      this.TimeTxt.OnSetVisible( true );
      this.UserInitials.OnSetVisible( true );
    },

    // Implementation of the Chora method : 'Application::CallPage.onKeypadEdit()'
    onKeypadEdit : function( sender )
    {
      this.ContactNameTxt.OnSetVisible( this.Keypad.InputEtxt.OnGetString() === 
      _app._EmptyString );
      this.TimeTxt.OnSetVisible( this.Keypad.InputEtxt.OnGetString() === _app._EmptyString );
      this.UserInitials.OnSetVisible( this.Keypad.InputEtxt.OnGetString() === _app._EmptyString );
    },

    // Implementation of the Chora method : 'Application::CallPage.onCancel1()'
    onCancel1 : function( sender )
    {
      this.DismissDialog( this.addCall, _app._GetAutoObject( _app.Res.SlideDownCentered ), 
      null, null, null, null, false );
      this.addCall = null;
    },

    // Implementation of the Chora method : 'Application::CallPage.upDateTalkDuration()'
    upDateTalkDuration : function( sender )
    {
      if ( this.Contact.CallState === 6 )
        this.TimeTxt.OnSetString( this.Contact.GetDuration());
    },

    // Initializer for the class 'Application::CallPage'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.CallPageBase._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Components.Button65x90._Init.call( this.ContactsBtn = { _parent:this }, 0 );
      _app.Components.Button65x90._Init.call( this.VideoCallBtn = { _parent:this }, 0 );
      _app.Components.Button65x90._Init.call( this.AddCallBtn = { _parent:this }, 0 );
      _app.Components.Button65x90._Init.call( this.SpeakerBtn = { _parent:this }, 0 );
      _app.Components.Button65x90._Init.call( this.KeyPadBtn = { _parent:this }, 0 );
      _app.Components.Button65x90._Init.call( this.MuteBtn = { _parent:this }, 0 );
      _unit.KeypadInsideCall._Init.call( this.Keypad = { _parent:this }, 0 );
      _app.Core.Timer._Init.call( this.Stoper = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.CallPage;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _004C );
      this.DesclineButton.OnSetBounds( _004D );
      this.ContactsBtn.OnSetBounds( _004E );
      this.ContactsBtn.OnSetInitials( _app.Res.UserIconTxt );
      this.ContactsBtn.OnSetDescript( _app.Strings.contactsTxt );
      this.ContactsBtn.OnSetDescriptColor( _app.Res.White );
      this.ContactsBtn.OnSetBackgoundColor( _app.Res.WhiteTransparent );
      this.ContactsBtn.OnSetBackgoundPressedColor( _app.Res.PressColor );
      this.VideoCallBtn.OnSetBounds( _004F );
      this.VideoCallBtn.OnSetEnabled( false );
      this.VideoCallBtn.OnSetInitials( _app.Res.VideoCallTxt );
      this.VideoCallBtn.OnSetDescript( _app.Strings.videocallTxt );
      this.VideoCallBtn.OnSetDescriptColor( _app.Res.White );
      this.VideoCallBtn.OnSetBackgoundColor( _app.Res.WhiteTransparent );
      this.VideoCallBtn.OnSetBackgoundPressedColor( _app.Res.PressColor );
      this.VideoCallBtn.OnSetBackgroundUnabled( _app.Res.WhiteSemiTransparent );
      this.AddCallBtn.OnSetBounds( _0050 );
      this.AddCallBtn.OnSetEnabled( false );
      this.AddCallBtn.OnSetInitials( _app.Res.PlusIconTxt );
      this.AddCallBtn.OnSetDescript( _app.Strings.addcallTxt );
      this.AddCallBtn.OnSetDescriptColor( _app.Res.White );
      this.AddCallBtn.OnSetBackgoundColor( _app.Res.WhiteTransparent );
      this.AddCallBtn.OnSetBackgoundPressedColor( _app.Res.PressColor );
      this.AddCallBtn.OnSetBackgroundUnabled( _app.Res.WhiteSemiTransparent );
      this.SpeakerBtn.OnSetBounds( _0051 );
      this.SpeakerBtn.OnSetInitials( _app.Res.SpeakerTxt );
      this.SpeakerBtn.OnSetDescript( _app.Strings.speakerTxt );
      this.SpeakerBtn.OnSetDescriptColor( _app.Res.White );
      this.SpeakerBtn.OnSetBackgoundColor( _app.Res.WhiteTransparent );
      this.SpeakerBtn.OnSetBackgoundPressedColor( _app.Res.PressColor );
      this.KeyPadBtn.OnSetBounds( _0052 );
      this.KeyPadBtn.OnSetInitials( _app.Res.KeypadTxt );
      this.KeyPadBtn.OnSetDescript( _app.Strings.keypadTxt );
      this.KeyPadBtn.OnSetDescriptColor( _app.Res.White );
      this.KeyPadBtn.OnSetBackgoundColor( _app.Res.WhiteTransparent );
      this.KeyPadBtn.OnSetBackgoundPressedColor( _app.Res.PressColor );
      this.MuteBtn.OnSetBounds( _0053 );
      this.MuteBtn.OnSetInitials( _app.Res.MicOffTxt );
      this.MuteBtn.OnSetDescript( _app.Strings.muteTxt );
      this.MuteBtn.OnSetDescriptColor( _app.Res.White );
      this.MuteBtn.OnSetBackgoundColor( _app.Res.WhiteTransparent );
      this.MuteBtn.OnSetBackgoundPressedColor( _app.Res.PressColor );
      this.Keypad.OnSetBounds( _0054 );
      this.Keypad.OnSetHideFunction( false );
      this.Keypad.OnSetHideCall( true );
      this.Add( this.ContactsBtn, 0 );
      this.Add( this.VideoCallBtn, 0 );
      this.Add( this.AddCallBtn, 0 );
      this.Add( this.SpeakerBtn, 0 );
      this.Add( this.KeyPadBtn, 0 );
      this.Add( this.MuteBtn, 0 );
      this.Add( this.Keypad, 0 );
      this.ContactsBtn.OnActivate = [ this, this.onContactsPress ];
      this.ContactsBtn.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont12 ));
      this.ContactsBtn.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.ContactsBtn.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.VideoCallBtn.OnActivate = [ this, this.onVideoCallPress ];
      this.VideoCallBtn.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont12 ));
      this.VideoCallBtn.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.VideoCallBtn.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.AddCallBtn.OnActivate = [ this, this.onAddCallPress ];
      this.AddCallBtn.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont12 ));
      this.AddCallBtn.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.AddCallBtn.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.SpeakerBtn.OnActivate = [ this, this.onSpeakerPress ];
      this.SpeakerBtn.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont12 ));
      this.SpeakerBtn.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.SpeakerBtn.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.KeyPadBtn.OnActivate = [ this, this.onKeypadPress ];
      this.KeyPadBtn.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont12 ));
      this.KeyPadBtn.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.KeyPadBtn.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.MuteBtn.OnActivate = [ this, this.onMicPress ];
      this.MuteBtn.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont12 ));
      this.MuteBtn.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.MuteBtn.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.Keypad.OnEditTextChanged = [ this, this.onKeypadEdit ];
      this.Stoper.OnTrigger = [ this, this.upDateTalkDuration ];

      // Call the user defined constructor
      this.Init( aArg );
    },

    // Deintializer for the class 'Application::CallPage'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _unit.CallPageBase;

      // Then deitialize all embedded objects ...
      this.ContactsBtn._Done();
      this.VideoCallBtn._Done();
      this.AddCallBtn._Done();
      this.SpeakerBtn._Done();
      this.KeyPadBtn._Done();
      this.MuteBtn._Done();
      this.Keypad._Done();
      this.Stoper._Done();

      // Finally continue the deinitialization in the super class
      _unit.CallPageBase._Done.call( this );
    },

    // Re-Initializer for the class 'Application::CallPage'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _unit.CallPageBase._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.ContactsBtn._ReInit();
      this.VideoCallBtn._ReInit();
      this.AddCallBtn._ReInit();
      this.SpeakerBtn._ReInit();
      this.KeyPadBtn._ReInit();
      this.MuteBtn._ReInit();
      this.Keypad._ReInit();
      this.Stoper._ReInit();
    },

    // Garbage Collector method for the class 'Application::CallPage'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.CallPageBase._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.contactsPage ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.addCall ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.ContactsBtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.VideoCallBtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.AddCallBtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.SpeakerBtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.KeyPadBtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.MuteBtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Keypad )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Stoper )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::CallPage"
  };

  // User defined class: 'Application::DetailsInsideCall'
  _unit.DetailsInsideCall =
  {
    // Implementation of the Chora method : 'Application::DetailsInsideCall.onTapEdit()'
    onTapEdit : function( sender )
    {
      this.editContact = _app._NewObject( _unit.ContactEditPage, 0 );
      this.editContact.OnSave = [ this, this.onSaveEdit ];
      this.editContact.OnClose = [ this, this.onCancelEdit ];
      this.editContact.OnSetContact( this.Contact );
      this.editContact.OnDelete = [ this, this.onDelete ];
      this.SwitchToDialog( this.editContact, _app._GetAutoObject( _app.Res.FadeInOutCentered ), 
      null, null, null, null, null, null, null, null, false );
    },

    // Initializer for the class 'Application::DetailsInsideCall'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.ContactDetailsPage._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.DetailsInsideCall;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _0000 );
      this.Background.OnSetBounds( _0000 );
      this.Line2.OnSetPoint2( _0055 );
      this.Line2.OnSetPoint1( _0056 );
      this.NumberTxt.OnSetBounds( _0057 );
      this.MobileTxt.OnSetBounds( _0058 );
      this.Line1.OnSetPoint2( _002A );
      this.Line1.OnSetPoint1( _002B );
      this.CallBtn.OnSetBounds( _0059 );
      this.CallBtn.OnSetEnabled( false );
      this.VideoCallBtn.OnSetBounds( _005A );
      this.PushButtonMediumBlue2.OnSetBounds( _005B );
      this.ContactName.OnSetBounds( _005C );
      this.UserInitialsBtn.OnSetBounds( _005D );
      this.UserInitialsBtn.OnSetEnabled( false );
      this.EditBtn.OnSetBounds( _005E );
      this.BackBtn.OnSetBounds( _005F );
    },

    // Internal variables of this class.
    _className : "Application::DetailsInsideCall"
  };

  // User defined class: 'Application::KeypadPage'
  _unit.KeypadPage =
  {
    OnHide : null,
    OnEditTextChanged : null,
    Background : null,
    callbtn : null,
    btn1 : null,
    btn3 : null,
    btn2 : null,
    btn4 : null,
    btn6 : null,
    btn5 : null,
    btn7 : null,
    btn9 : null,
    btn8 : null,
    btnstar : null,
    btnDiez : null,
    btn0 : null,
    InputEtxt : null,
    HideBtn : null,
    BtnErase : null,
    BackgoundColor : 0,
    HideCall : false,
    HideFunction : true,

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

      _app.Core.Group.UpdateViewState.call( this, aState );

      var isEnabled = (( aState & 0x10 ) === 0x10 );

      if ( this.HideFunction === false )
        this.HideBtn.OnSetVisible( true );

      if ( this.HideFunction === true )
        this.HideBtn.OnSetVisible( false );

      if ( this.HideCall === false )
        this.callbtn.OnSetVisible( true );

      if ( this.HideCall === true )
        this.callbtn.OnSetVisible( false );

      if ( !isEnabled )
        this.Background.OnSetColor( _app.Res.Grey );
      else
        this.Background.OnSetColor( this.BackgoundColor );
    },

    // Implementation of the Chora method : 'Application::KeypadPage.onHide()'
    onHide : function( sender )
    {
      _app._PostSignal( this.OnHide, this );
    },

    // Implementation of the Chora method : 'Application::KeypadPage.OnSetHideFunction()'
    OnSetHideFunction : function( value )
    {
      if ( this.HideFunction === value )
        return;

      this.HideFunction = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Application::KeypadPage.onButtonsPress()'
    onButtonsPress : function( sender )
    {
      var _tmp;
      var b = ( _app.Components.SButton65x65.isPrototypeOf( sender )? sender : null );

      if ( sender === this.BtnErase )
        this.InputEtxt.OnSetString( _app._StringRemove( this.InputEtxt.OnGetString(), 
        this.InputEtxt.OnGetString().length - 1, 1 ));
      else
        if ( !!b )
          this.InputEtxt.OnSetString( this.InputEtxt.OnGetString() + b.Initials );

      ( _tmp = this.OnEditTextChanged )? _tmp[1].call( _tmp[0], this ) : null;
    },

    // Implementation of the Chora method : 'Application::KeypadPage.OnSetHideCall()'
    OnSetHideCall : function( value )
    {
      if ( this.HideCall === value )
        return;

      this.HideCall = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Application::KeypadPage.onCallPress()'
    onCallPress : function( sender )
    {
      if ( this.InputEtxt.OnGetString() !== _app._EmptyString )
        _app._GetAutoObject( _app.Device.Device ).SendCallNumber( this.InputEtxt.OnGetString());
    },

    // Initializer for the class 'Application::KeypadPage'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Group._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Views.Rectangle._Init.call( this.Background = { _parent:this }, 0 );
      _app.Components.SButton65x65._Init.call( this.callbtn = { _parent:this }, 0 );
      _app.Components.SButton65x65._Init.call( this.btn1 = { _parent:this }, 0 );
      _app.Components.SButton65x65._Init.call( this.btn3 = { _parent:this }, 0 );
      _app.Components.SButton65x65._Init.call( this.btn2 = { _parent:this }, 0 );
      _app.Components.SButton65x65._Init.call( this.btn4 = { _parent:this }, 0 );
      _app.Components.SButton65x65._Init.call( this.btn6 = { _parent:this }, 0 );
      _app.Components.SButton65x65._Init.call( this.btn5 = { _parent:this }, 0 );
      _app.Components.SButton65x65._Init.call( this.btn7 = { _parent:this }, 0 );
      _app.Components.SButton65x65._Init.call( this.btn9 = { _parent:this }, 0 );
      _app.Components.SButton65x65._Init.call( this.btn8 = { _parent:this }, 0 );
      _app.Components.SButton65x65._Init.call( this.btnstar = { _parent:this }, 0 );
      _app.Components.SButton65x65._Init.call( this.btnDiez = { _parent:this }, 0 );
      _app.Components.SButton65x65._Init.call( this.btn0 = { _parent:this }, 0 );
      _app.Components.InputEtxt._Init.call( this.InputEtxt = { _parent:this }, 0 );
      _app.Components.TextButton._Init.call( this.HideBtn = { _parent:this }, 0 );
      _app.Components.SButton65x65._Init.call( this.BtnErase = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.KeypadPage;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _0000 );
      this.BackgoundColor = _app.Res.White;
      this.Background.OnSetBounds( _0000 );
      this.Background.OnSetColor( 0xFFFFFFFF );
      this.callbtn.OnSetBounds( _0060 );
      this.callbtn.OnSetInitials( _app.Res.CallTxt );
      this.callbtn.OnSetBackgoundColor( _app.Res.GreenDark );
      this.callbtn.OnSetBackgoundPressedColor( _app.Res.Green );
      this.btn1.OnSetBounds( _0061 );
      this.btn1.OnSetInitials( _0062 );
      this.btn1.OnSetDescriptColor( _app.Res.Black );
      this.btn1.OnSetInitialsColor( _app.Res.Black );
      this.btn1.OnSetBackgoundColor( _app.Res.GreyLight );
      this.btn1.OnSetBackgoundPressedColor( _app.Res.Grey );
      this.btn1.OnSetInitialsPressColor( _app.Res.Black );
      this.btn3.OnSetBounds( _0063 );
      this.btn3.OnSetInitials( _0064 );
      this.btn3.OnSetDescriptColor( _app.Res.Black );
      this.btn3.OnSetInitialsColor( _app.Res.Black );
      this.btn3.OnSetBackgoundColor( _app.Res.GreyLight );
      this.btn3.OnSetBackgoundPressedColor( _app.Res.Grey );
      this.btn3.OnSetInitialsPressColor( _app.Res.Black );
      this.btn2.OnSetBounds( _0065 );
      this.btn2.OnSetInitials( _0066 );
      this.btn2.OnSetDescriptColor( _app.Res.Black );
      this.btn2.OnSetInitialsColor( _app.Res.Black );
      this.btn2.OnSetBackgoundColor( _app.Res.GreyLight );
      this.btn2.OnSetBackgoundPressedColor( _app.Res.Grey );
      this.btn2.OnSetInitialsPressColor( _app.Res.Black );
      this.btn4.OnSetBounds( _0067 );
      this.btn4.OnSetInitials( _0068 );
      this.btn4.OnSetDescriptColor( _app.Res.Black );
      this.btn4.OnSetInitialsColor( _app.Res.Black );
      this.btn4.OnSetBackgoundColor( _app.Res.GreyLight );
      this.btn4.OnSetBackgoundPressedColor( _app.Res.Grey );
      this.btn4.OnSetInitialsPressColor( _app.Res.Black );
      this.btn6.OnSetBounds( _0069 );
      this.btn6.OnSetInitials( _006A );
      this.btn6.OnSetDescriptColor( _app.Res.Black );
      this.btn6.OnSetInitialsColor( _app.Res.Black );
      this.btn6.OnSetBackgoundColor( _app.Res.GreyLight );
      this.btn6.OnSetBackgoundPressedColor( _app.Res.Grey );
      this.btn6.OnSetInitialsPressColor( _app.Res.Black );
      this.btn5.OnSetBounds( _006B );
      this.btn5.OnSetInitials( _006C );
      this.btn5.OnSetDescriptColor( _app.Res.Black );
      this.btn5.OnSetInitialsColor( _app.Res.Black );
      this.btn5.OnSetBackgoundColor( _app.Res.GreyLight );
      this.btn5.OnSetBackgoundPressedColor( _app.Res.Grey );
      this.btn5.OnSetInitialsPressColor( _app.Res.Black );
      this.btn7.OnSetBounds( _006D );
      this.btn7.OnSetInitials( _006E );
      this.btn7.OnSetDescriptColor( _app.Res.Black );
      this.btn7.OnSetInitialsColor( _app.Res.Black );
      this.btn7.OnSetBackgoundColor( _app.Res.GreyLight );
      this.btn7.OnSetBackgoundPressedColor( _app.Res.Grey );
      this.btn7.OnSetInitialsPressColor( _app.Res.Black );
      this.btn9.OnSetBounds( _006F );
      this.btn9.OnSetInitials( _0070 );
      this.btn9.OnSetDescriptColor( _app.Res.Black );
      this.btn9.OnSetInitialsColor( _app.Res.Black );
      this.btn9.OnSetBackgoundColor( _app.Res.GreyLight );
      this.btn9.OnSetBackgoundPressedColor( _app.Res.Grey );
      this.btn9.OnSetInitialsPressColor( _app.Res.Black );
      this.btn8.OnSetBounds( _0071 );
      this.btn8.OnSetInitials( _0072 );
      this.btn8.OnSetDescript( _0072 );
      this.btn8.OnSetDescriptColor( _app.Res.White );
      this.btn8.OnSetInitialsColor( _app.Res.Black );
      this.btn8.OnSetBackgoundColor( _app.Res.GreyLight );
      this.btn8.OnSetBackgoundPressedColor( _app.Res.Grey );
      this.btn8.OnSetInitialsPressColor( _app.Res.Black );
      this.btnstar.OnSetBounds( _0073 );
      this.btnstar.OnSetInitials( _0074 );
      this.btnstar.OnSetInitialsColor( _app.Res.Black );
      this.btnstar.OnSetBackgoundColor( _app.Res.GreyLight );
      this.btnstar.OnSetBackgoundPressedColor( _app.Res.Grey );
      this.btnstar.OnSetInitialsPressColor( _app.Res.Black );
      this.btnDiez.OnSetBounds( _0075 );
      this.btnDiez.OnSetInitials( _0076 );
      this.btnDiez.OnSetDescript( _0076 );
      this.btnDiez.OnSetDescriptColor( _app.Res.Black );
      this.btnDiez.OnSetInitialsColor( _app.Res.Black );
      this.btnDiez.OnSetBackgoundColor( _app.Res.GreyLight );
      this.btnDiez.OnSetBackgoundPressedColor( _app.Res.Grey );
      this.btnDiez.OnSetInitialsPressColor( _app.Res.Black );
      this.btn0.OnSetBounds( _0077 );
      this.btn0.OnSetInitials( _0078 );
      this.btn0.OnSetDescript( _0078 );
      this.btn0.OnSetDescriptColor( _app.Res.Black );
      this.btn0.OnSetInitialsColor( _app.Res.Black );
      this.btn0.OnSetBackgoundColor( _app.Res.GreyLight );
      this.btn0.OnSetBackgoundPressedColor( _app.Res.Grey );
      this.btn0.OnSetInitialsPressColor( _app.Res.Black );
      this.InputEtxt.OnSetBounds( _0079 );
      this.InputEtxt.OnSetString( _app._EmptyString );
      this.InputEtxt.OnSetColor( _app.Res.Black );
      this.HideBtn.OnSetBounds( _007A );
      this.HideBtn.OnSetText( _app.Strings.HideTxt );
      this.HideBtn.OnSetTextColor( _app.Res.Black );
      this.HideBtn.OnSetTextColorPress( _app.Res.Grey );
      this.BtnErase.OnSetBounds( _007B );
      this.BtnErase.OnSetInitials( _app.Res.BackspaceTxt );
      this.BtnErase.OnSetDescript( _0076 );
      this.BtnErase.OnSetDescriptColor( _app.Res.Black );
      this.BtnErase.OnSetInitialsColor( _app.Res.Black );
      this.BtnErase.OnSetBackgoundColor( _app.Res.Transparent );
      this.BtnErase.OnSetBackgoundPressedColor( _app.Res.Transparent );
      this.BtnErase.OnSetInitialsPressColor( _app.Res.Black );
      this.Add( this.Background, 0 );
      this.Add( this.callbtn, 0 );
      this.Add( this.btn1, 0 );
      this.Add( this.btn3, 0 );
      this.Add( this.btn2, 0 );
      this.Add( this.btn4, 0 );
      this.Add( this.btn6, 0 );
      this.Add( this.btn5, 0 );
      this.Add( this.btn7, 0 );
      this.Add( this.btn9, 0 );
      this.Add( this.btn8, 0 );
      this.Add( this.btnstar, 0 );
      this.Add( this.btnDiez, 0 );
      this.Add( this.btn0, 0 );
      this.Add( this.InputEtxt, 0 );
      this.Add( this.HideBtn, 0 );
      this.Add( this.BtnErase, 0 );
      this.callbtn.OnActivate = [ this, this.onCallPress ];
      this.callbtn.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.callbtn.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.btn1.OnActivate = [ this, this.onButtonsPress ];
      this.btn1.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.btn1.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.btn3.OnActivate = [ this, this.onButtonsPress ];
      this.btn3.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.btn3.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.btn2.OnActivate = [ this, this.onButtonsPress ];
      this.btn2.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.btn2.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.btn4.OnActivate = [ this, this.onButtonsPress ];
      this.btn4.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.btn4.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.btn6.OnActivate = [ this, this.onButtonsPress ];
      this.btn6.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.btn6.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.btn5.OnActivate = [ this, this.onButtonsPress ];
      this.btn5.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.btn5.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.btn7.OnActivate = [ this, this.onButtonsPress ];
      this.btn7.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.btn7.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.btn9.OnActivate = [ this, this.onButtonsPress ];
      this.btn9.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.btn9.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.btn8.OnActivate = [ this, this.onButtonsPress ];
      this.btn8.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.btn8.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.btnstar.OnActivate = [ this, this.onButtonsPress ];
      this.btnstar.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.btnDiez.OnActivate = [ this, this.onButtonsPress ];
      this.btnDiez.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.btnDiez.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.btn0.OnActivate = [ this, this.onButtonsPress ];
      this.btn0.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.btn0.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.InputEtxt.OnSetFont( _app._GetResource( _app.Res.TitileFont25 ));
      this.HideBtn.OnActivate = [ this, this.onHide ];
      this.BtnErase.OnActivate = [ this, this.onButtonsPress ];
      this.BtnErase.OnSetDescriptFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.BtnErase.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.BtnErase.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
    },

    // Deintializer for the class 'Application::KeypadPage'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Core.Group;

      // Then deitialize all embedded objects ...
      this.Background._Done();
      this.callbtn._Done();
      this.btn1._Done();
      this.btn3._Done();
      this.btn2._Done();
      this.btn4._Done();
      this.btn6._Done();
      this.btn5._Done();
      this.btn7._Done();
      this.btn9._Done();
      this.btn8._Done();
      this.btnstar._Done();
      this.btnDiez._Done();
      this.btn0._Done();
      this.InputEtxt._Done();
      this.HideBtn._Done();
      this.BtnErase._Done();

      // Finally continue the deinitialization in the super class
      _app.Core.Group._Done.call( this );
    },

    // Re-Initializer for the class 'Application::KeypadPage'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Core.Group._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.Background._ReInit();
      this.callbtn._ReInit();
      this.btn1._ReInit();
      this.btn3._ReInit();
      this.btn2._ReInit();
      this.btn4._ReInit();
      this.btn6._ReInit();
      this.btn5._ReInit();
      this.btn7._ReInit();
      this.btn9._ReInit();
      this.btn8._ReInit();
      this.btnstar._ReInit();
      this.btnDiez._ReInit();
      this.btn0._ReInit();
      this.InputEtxt._ReInit();
      this.HideBtn._ReInit();
      this.BtnErase._ReInit();
    },

    // Garbage Collector method for the class 'Application::KeypadPage'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.Group._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.OnHide ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnEditTextChanged ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Background )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.callbtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.btn1 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.btn3 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.btn2 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.btn4 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.btn6 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.btn5 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.btn7 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.btn9 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.btn8 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.btnstar )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.btnDiez )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.btn0 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.InputEtxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.HideBtn )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.BtnErase )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::KeypadPage"
  };

  // This is the root component of the entire GUI application.
  _unit.ContactsApp =
  {
    Outline : null,
    Rectangle : null,
    NavBarButtons : null,
    NavBarButtons1 : null,
    NavBarButtons2 : null,
    NavBarButtons3 : null,
    Line : null,
    SelectedPage : -1,

    // The method Init() is invoked automatically after the component has been created. 
    // This method can be overridden and filled with logic containing additional 
    // initialization statements.
    Init : function( aArg )
    {
      this.OnSetSelectedPage( 2 );
    },

    // Implementation of the Chora method : 'Application::ContactsApp.OnSetSelectedPage()'
    OnSetSelectedPage : function( value )
    {
      if ( this.SelectedPage === value )
        return;

      this.SelectedPage = value;
      _app._NotifyRefObservers([ this, this.OnGetSelectedPage, this.OnSetSelectedPage ], 
        0 );

      switch ( this.SelectedPage )
      {
        case 0 :
        {
          var favorites = _app._NewObject( _unit.FavoritesPage, 0 );

          this.Outline.SwitchToDialog( favorites, null, null, null, null, null, 
          null, null, null, null, false );
        }
        break;

        case 1 :
        {
          var recent = _app._NewObject( _unit.RecentPage, 0 );

          this.Outline.SwitchToDialog( recent, null, null, null, null, null, null, 
          null, null, null, false );
        }
        break;

        case 2 :
        {
          var contacts = _app._NewObject( _unit.ContactsPage, 0 );

          this.Outline.SwitchToDialog( contacts, null, null, null, null, null, null, 
          null, null, null, false );
        }
        break;

        case 3 :
        {
          var keypad = _app._NewObject( _unit.KeypadPage, 0 );

          this.Outline.SwitchToDialog( keypad, null, null, null, null, null, null, 
          null, null, null, false );
        }
        break;

        default : 
          _app._Trace( "%s%i", _007C, this.SelectedPage );
      }
    },

    // Implementation of the Chora method : 'Application::ContactsApp.OnGetSelectedPage()'
    OnGetSelectedPage : function()
    {
      return this.SelectedPage;
    },

    // Initializer for the class 'Application::ContactsApp'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Group._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Core.Group._Init.call( this.Outline = { _parent:this }, 0 );
      _app.Views.Rectangle._Init.call( this.Rectangle = { _parent:this }, 0 );
      _app.Components.NavBarButton64x40._Init.call( this.NavBarButtons = { _parent:this }, 0 );
      _app.Components.NavBarButton64x40._Init.call( this.NavBarButtons1 = { _parent:this }, 0 );
      _app.Components.NavBarButton64x40._Init.call( this.NavBarButtons2 = { _parent:this }, 0 );
      _app.Components.NavBarButton64x40._Init.call( this.NavBarButtons3 = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Line = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.ContactsApp;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _004C );
      this.Outline.OnSetBounds( _0000 );
      this.Rectangle.OnSetBounds( _007D );
      this.NavBarButtons.OnSetBounds( _007E );
      this.NavBarButtons.OnSetIcon( _app.Res.HeartTxt );
      this.NavBarButtons.OnSetDescript( _app.Strings.FavoritesTxt );
      this.NavBarButtons1.OnSetBounds( _007F );
      this.NavBarButtons1.OnSetIcon( _app.Res.CallTxt );
      this.NavBarButtons1.OnSetDescript( _app.Strings.RecentTxt );
      this.NavBarButtons1.OnSetOutletSelector( 1 );
      this.NavBarButtons2.OnSetBounds( _0080 );
      this.NavBarButtons2.OnSetIcon( _app.Res.UserIconTxt );
      this.NavBarButtons2.OnSetDescript( _app.Strings.ContactsTxtx );
      this.NavBarButtons2.OnSetOutletSelector( 2 );
      this.NavBarButtons3.OnSetBounds( _0081 );
      this.NavBarButtons3.OnSetIcon( _app.Res.KeypadTxt );
      this.NavBarButtons3.OnSetDescript( _app.Strings.KeypadTxt );
      this.NavBarButtons3.OnSetOutletSelector( 3 );
      this.Line.OnSetPoint2( _0082 );
      this.Line.OnSetPoint1( _0083 );
      this.Line.OnSetColor( _app.Res.Grey );
      this.Add( this.Outline, 0 );
      this.Add( this.Rectangle, 0 );
      this.Add( this.NavBarButtons, 0 );
      this.Add( this.NavBarButtons1, 0 );
      this.Add( this.NavBarButtons2, 0 );
      this.Add( this.NavBarButtons3, 0 );
      this.Add( this.Line, 0 );
      this.NavBarButtons.OnSetOutlet([ this, this.OnGetSelectedPage, this.OnSetSelectedPage ]);
      this.NavBarButtons1.OnSetOutlet([ this, this.OnGetSelectedPage, this.OnSetSelectedPage ]);
      this.NavBarButtons2.OnSetOutlet([ this, this.OnGetSelectedPage, this.OnSetSelectedPage ]);
      this.NavBarButtons3.OnSetOutlet([ this, this.OnGetSelectedPage, this.OnSetSelectedPage ]);

      // Call the user defined constructor
      this.Init( aArg );
    },

    // Deintializer for the class 'Application::ContactsApp'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Core.Group;

      // Then deitialize all embedded objects ...
      this.Outline._Done();
      this.Rectangle._Done();
      this.NavBarButtons._Done();
      this.NavBarButtons1._Done();
      this.NavBarButtons2._Done();
      this.NavBarButtons3._Done();
      this.Line._Done();

      // Finally continue the deinitialization in the super class
      _app.Core.Group._Done.call( this );
    },

    // Re-Initializer for the class 'Application::ContactsApp'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Core.Group._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.Outline._ReInit();
      this.Rectangle._ReInit();
      this.NavBarButtons._ReInit();
      this.NavBarButtons1._ReInit();
      this.NavBarButtons2._ReInit();
      this.NavBarButtons3._ReInit();
      this.Line._ReInit();
    },

    // Garbage Collector method for the class 'Application::ContactsApp'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.Group._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.Outline )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Rectangle )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.NavBarButtons )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.NavBarButtons1 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.NavBarButtons2 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.NavBarButtons3 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::ContactsApp"
  };

  // User defined class: 'Application::Application'
  _unit.Application =
  {
    deviceInstance : null,
    ongoingPage : null,
    historyContact : null,
    ContactsApp : null,

    // The method Init() is invoked automatically after the component has been created. 
    // This method can be overridden and filled with logic containing additional 
    // initialization statements.
    Init : function( aArg )
    {
      var _tmp;

      _app._AttachRefObserver([ this, this.onCallState ], [ _tmp = _app._GetAutoObject( 
        _app.Device.Device ).Ongoing, _tmp.OnGetNoOfItems, _tmp.OnSetNoOfItems ], 
        0 );
      _app._PostSignal([ this, this.onCallState ], this );
    },

    // Implementation of the Chora method : 'Application::Application.onCallState()'
    onCallState : function( sender )
    {
      var _tmp;

      if ( !!this.historyContact )
        _app._DetachObjObserver([ this, this.onCallState ], this.historyContact, 
          0 );

      this.historyContact = ( _app.Device.HistoryContact.isPrototypeOf( _tmp = _app._GetAutoObject( 
      _app.Device.Device ).Ongoing.GetContact( 0 ))? _tmp : null );

      if ( !!this.ongoingPage )
      {
        this.DismissDialog( this.ongoingPage, _app._GetAutoObject( _app.Res.FadeInOutCentered ), 
        null, null, null, null, false );
        this.ongoingPage = null;
      }

      if ( !!this.historyContact )
      {
        if (((( this.historyContact.CallState === 2 ) || ( this.historyContact.CallState 
            === 7 )) || ( this.historyContact.CallState === 4 )) || ( this.historyContact.CallState 
            === 1 ))
        {
          _app._Trace( "%s", _0084 );
          this.DismissDialog( this.ongoingPage, _app._GetAutoObject( _app.Res.FadeInOutCentered ), 
          null, null, null, null, false );
        }

        if ( this.historyContact.CallDirection === 1 )
        {
          if ( this.historyContact.CallState === 6 )
          {
            this.ongoingPage = _app._NewObject( _unit.CallPage, 0 );
            this.ongoingPage.OnSetContact( this.historyContact );
          }
          else
          {
            this.ongoingPage = _app._NewObject( _unit.IncomingCall, 0 );
            this.ongoingPage.OnSetContact( this.historyContact );
          }

          this.PresentDialog( this.ongoingPage, _app._GetAutoObject( _app.Res.FadeInOutCentered ), 
          null, null, null, null, null, null, null, false );
        }
        else
          if ( this.historyContact.CallDirection === 2 )
          {
            this.ongoingPage = _app._NewObject( _unit.CallPage, 0 );
            this.ongoingPage.OnSetContact( this.historyContact );
            this.PresentDialog( this.ongoingPage, _app._GetAutoObject( _app.Res.FadeInOutCentered ), 
            null, null, null, null, null, null, null, false );
          }

        _app._AttachObjObserver([ this, this.onCallState ], this.historyContact, 
          0 );
      }
    },

    // Initializer for the class 'Application::Application'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Root._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _unit.ContactsApp._Init.call( this.ContactsApp = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Application;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _004C );
      this.ContactsApp.OnSetBounds( _004C );
      this.Add( this.ContactsApp, 0 );
      this.deviceInstance = _app._GetAutoObject( _app.Device.Device );

      // Call the user defined constructor
      this.Init( aArg );

      // In case of multi-variant classes determine the currently suitable
      // variant ...
      var _variant = this._variants();

      // ... and instantiate the variant (if currently appropriate)
      if ( _variant )
      {
        this._vthis = {};
        _variant._Init.call( this, aArg );
      }
    },

    // Deintializer for the class 'Application::Application'
    _Done : function()
    {
      // Deinitialize the variant object ...
      if ( this._vthis )
        this._vthis._Done.call( this );

      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Core.Root;

      // Then deitialize all embedded objects ...
      this.ContactsApp._Done();

      // Finally continue the deinitialization in the super class
      _app.Core.Root._Done.call( this );
    },

    // Re-Initializer for the class 'Application::Application'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Core.Root._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.ContactsApp._ReInit();

      // In case of multi-variant classes re-initialize the current variant
      // object ...
      if ( this._vthis )
        this._vthis._ReInit.call( this );
    },

    // Garbage Collector method for the class 'Application::Application'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.Root._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.deviceInstance ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.ongoingPage ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.historyContact ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.ContactsApp )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the variant object ...
      if ( this._vthis )
        this._vthis._Mark( aCycle );
    },

    // Function to determine the currently effective variant of this class.
    _variants : function()
    {
      return _unit.ApplicationSimulation._variants();
    },

    // Internal variables of this class.
    _vthis : null,
    _className : "Application::Application"
  };

  // User defined class: 'Application::KeypadInsideCall'
  _unit.KeypadInsideCall =
  {
    BackgroundSmall : null,

    // Initializer for the class 'Application::KeypadInsideCall'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.KeypadPage._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Views.Rectangle._Init.call( this.BackgroundSmall = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.KeypadInsideCall;

      // ... and initialize objects, variables, properties, etc.
      this.Background.OnSetVisible( false );
      this.BackgroundSmall.OnSetBounds( _0085 );
      this.BackgroundSmall.OnSetColorBL( 0xFA838383 );
      this.BackgroundSmall.OnSetColorBR( 0xFF4F4F4F );
      this.BackgroundSmall.OnSetColorTR( 0xFF898989 );
      this.BackgroundSmall.OnSetColorTL( 0xFF898989 );
      this.BackgroundSmall.OnSetColor( 0xFF3C3C3C );
      this.callbtn.OnSetVisible( false );
      this.btn3.OnSetEnabled( true );
      this.InputEtxt.OnSetBounds( _0086 );
      this.InputEtxt.OnSetColor( _app.Res.White );
      this.HideBtn.OnSetTextColor( _app.Res.White );
      this.BtnErase.OnSetInitialsColor( _app.Res.White );
      this.BtnErase.OnSetInitialsPressColor( _app.Res.Grey );
      this.Add( this.BackgroundSmall, -16 );
    },

    // Deintializer for the class 'Application::KeypadInsideCall'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _unit.KeypadPage;

      // Then deitialize all embedded objects ...
      this.BackgroundSmall._Done();

      // Finally continue the deinitialization in the super class
      _unit.KeypadPage._Done.call( this );
    },

    // Re-Initializer for the class 'Application::KeypadInsideCall'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _unit.KeypadPage._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.BackgroundSmall._ReInit();
    },

    // Garbage Collector method for the class 'Application::KeypadInsideCall'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.KeypadPage._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.BackgroundSmall )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::KeypadInsideCall"
  };

  // User defined class: 'Application::ContactsInsideCall'
  _unit.ContactsInsideCall =
  {
    OnCancel : null,
    TextButton : null,

    // Implementation of the Chora method : 'Application::ContactsInsideCall.onContactActivated()'
    onContactActivated : function( sender )
    {
      var itemView = ( _unit.ContactItem.isPrototypeOf( sender )? sender : null );

      if ( !!itemView )
      {
        this.detailsPage = _app._NewObject( _unit.DetailsInsideCall, 0 );
        this.detailsPage.OnBack = [ this, this.onCloseContact ];
        this.detailsPage.OnDelete = [ this, this.onDeleteContact ];
        this.detailsPage.OnSetContact( itemView.Contact );
        this.SwitchToDialog( this.detailsPage, _app._GetAutoObject( _app.Res.SlideLeftCentered ), 
        null, null, null, null, null, null, null, null, false );
      }
    },

    // Implementation of the Chora method : 'Application::ContactsInsideCall.onCancel()'
    onCancel : function( sender )
    {
      _app._PostSignal( this.OnCancel, this );
    },

    // Initializer for the class 'Application::ContactsInsideCall'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.ContactsPage._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Components.TextButton._Init.call( this.TextButton = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.ContactsInsideCall;

      // ... and initialize objects, variables, properties, etc.
      this.VerticalList.OnSetBounds( _0087 );
      this.SlideTouchHandler.OnSetBounds( _0088 );
      this.UpButton.OnSetBounds( _0089 );
      this.DownButton.OnSetBounds( _008A );
      this.TitleTxt.OnSetBounds( _008B );
      this.PlusButton.OnSetBounds( _008C );
      this.MyCardItem.OnSetVisible( false );
      this.TextButton.OnSetBounds( _008D );
      this.TextButton.OnSetText( _app.Strings.CancelTxt );
      this.Add( this.TextButton, 0 );
      this.TitleTxt.OnSetFont( _app._GetResource( _app.Res.ContactFontBold15 ));
      this.TextButton.OnActivate = [ this, this.onCancel ];
    },

    // Deintializer for the class 'Application::ContactsInsideCall'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _unit.ContactsPage;

      // Then deitialize all embedded objects ...
      this.TextButton._Done();

      // Finally continue the deinitialization in the super class
      _unit.ContactsPage._Done.call( this );
    },

    // Re-Initializer for the class 'Application::ContactsInsideCall'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _unit.ContactsPage._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.TextButton._ReInit();
    },

    // Garbage Collector method for the class 'Application::ContactsInsideCall'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.ContactsPage._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.OnCancel ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TextButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::ContactsInsideCall"
  };

  // Class variant: 'Application::ApplicationSimulation'
  _unit.ApplicationSimulation =
  {
    // Initializer for the class variant 'Application::ApplicationSimulation'
    _Init : function( aArg )
    {
      var _vthis = this._vthis;

      // Adjust this object's class inheritance ...
      _vthis.__proto__ = _unit.ApplicationSimulation;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _004C );

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class variant 'Application::ApplicationSimulation'
    _Done : function()
    {
      var _vthis = this._vthis;
      // First adjust the object's class inheritance ...
      _vthis.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class variant 'Application::ApplicationSimulation'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class variant 'Application::ApplicationSimulation'
    _Mark : function( aCycle )
    {
    },

    // Function to determine the currently effective sub-variant of this class variant.
    _variants : function()
    {
      return this;
    },

    // Internal variables of this class variant.
    _className : "Application::ApplicationSimulation"
  };

  // User defined class: 'Application::IncomingCall'
  _unit.IncomingCall =
  {
    AcceptButton : null,

    // The method Init() is invoked automatically after the component has been created. 
    // This method can be overridden and filled with logic containing additional 
    // initialization statements.
    Init : function( aArg )
    {
    },

    // Implementation of the Chora method : 'Application::IncomingCall.onAcceptCall()'
    onAcceptCall : function( sender )
    {
      _app._GetAutoObject( _app.Device.Device ).SendCallAnswer( this.Contact );
    },

    // Initializer for the class 'Application::IncomingCall'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.CallPageBase._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Components.Button65x90._Init.call( this.AcceptButton = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.IncomingCall;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _004C );
      this.AcceptButton.OnSetBounds( _008E );
      this.AcceptButton.OnSetInitials( _app.Res.CallTxt );
      this.AcceptButton.OnSetDescript( _app.Strings.acceptTxt );
      this.AcceptButton.OnSetDescriptColor( _app.Res.White );
      this.AcceptButton.OnSetBackgoundColor( _app.Res.GreenDark );
      this.AcceptButton.OnSetBackgoundPressedColor( _app.Res.Green );
      this.Add( this.AcceptButton, 0 );
      this.AcceptButton.OnActivate = [ this, this.onAcceptCall ];
      this.AcceptButton.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.AcceptButton.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));

      // Call the user defined constructor
      this.Init( aArg );
    },

    // Deintializer for the class 'Application::IncomingCall'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _unit.CallPageBase;

      // Then deitialize all embedded objects ...
      this.AcceptButton._Done();

      // Finally continue the deinitialization in the super class
      _unit.CallPageBase._Done.call( this );
    },

    // Re-Initializer for the class 'Application::IncomingCall'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _unit.CallPageBase._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.AcceptButton._ReInit();
    },

    // Garbage Collector method for the class 'Application::IncomingCall'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.CallPageBase._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.AcceptButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::IncomingCall"
  };

  // User defined class: 'Application::FavoritesPage'
  _unit.FavoritesPage =
  {
    addFav : null,
    Contact : null,
    detailsPage : null,
    Background : null,
    VerticalList : null,
    SlideTouchHandler : null,
    TitleTxt1 : null,
    PlusButton : null,
    TextButton : null,
    EditMode : false,

    // The method Init() is invoked automatically after the component has been created. 
    // This method can be overridden and filled with logic containing additional 
    // initialization statements.
    Init : function( aArg )
    {
      var _tmp;

      _app._AttachRefObserver([ this, this.onNoOfContactsChanged ], [ _tmp = _app._GetAutoObject( 
        _app.Device.Device ).Favorites, _tmp.OnGetNoOfItems, _tmp.OnSetNoOfItems ], 
        0 );
      _app._PostSignal([ this, this.onNoOfContactsChanged ], this );
    },

    // Implementation of the Chora method : 'Application::FavoritesPage.onAddPress()'
    onAddPress : function( sender )
    {
      this.addFav = _app._NewObject( _unit.ContactsList, 0 );
      this.addFav.OnCancel = [ this, this.onClose ];
      this.addFav.OnAddFav = [ this, this.onAdd ];
      this.addFav.OnSetContact( _app._NewObject( _app.Device.Contact, 0 ));
      this.SwitchToDialog( this.addFav, _app._GetAutoObject( _app.Res.SlideUpCentered ), 
      null, null, null, null, null, null, null, null, false );
    },

    // This method is called by 'VerticalList' every time the list loads or updates 
    // an item.
    OnLoadItem : function( sender )
    {
      var _tmp;
      var itemNo = this.VerticalList.Item;
      var contact = _app._GetAutoObject( _app.Device.Device ).Favorites.GetContact( 
        itemNo );
      var itemView = ( _unit.FavContactItem.isPrototypeOf( _tmp = this.VerticalList.View )? 
        _tmp : null );

      this.OnSetContact( itemView.Contact );

      if ( !itemView )
        return;

      itemView.OnSetContact( contact );
      itemView.OnActivate = [ this, this.onPressedContact ];
      itemView.OnDelete = [ this, this.onDeleteContact ];
      itemView.OnInfo = [ this, this.onInfoContact ];
      itemView.OnSetEditMode( this.EditMode );
      itemView.OnSetBounds( _app._SetRectSize( itemView.Bounds, [( _tmp = this.VerticalList.Bounds )[2] 
      - _tmp[0], this.VerticalList.ItemHeight ]));
    },

    // Implementation of the Chora method : 'Application::FavoritesPage.onPressedContact()'
    onPressedContact : function( sender )
    {
      this.OnSetContact(( _unit.FavContactItem.isPrototypeOf( sender )? sender : 
      null ).Contact );
      _app._GetAutoObject( _app.Device.Device ).SendCallContact( this.Contact );
      this.OnSetContact( null );
    },

    // Implementation of the Chora method : 'Application::FavoritesPage.onClose()'
    onClose : function( sender )
    {
      this.DismissDialog( this.addFav, _app._GetAutoObject( _app.Res.SlideDownCentered ), 
      null, null, null, null, false );
    },

    // Implementation of the Chora method : 'Application::FavoritesPage.onNoOfContactsChanged()'
    onNoOfContactsChanged : function( sender )
    {
      this.VerticalList.OnSetNoOfItems( _app._GetAutoObject( _app.Device.Device ).Favorites.NoOfItems );
    },

    // Implementation of the Chora method : 'Application::FavoritesPage.OnSetContact()'
    OnSetContact : function( value )
    {
      if ( this.Contact === value )
        return;

      this.Contact = value;
      _app._NotifyRefObservers([ this, this.OnGetContact, this.OnSetContact ], 0 );
    },

    // Implementation of the Chora method : 'Application::FavoritesPage.onInfoContact()'
    onInfoContact : function( sender )
    {
      this.detailsPage = _app._NewObject( _unit.ContactDetailsPage, 0 );
      this.detailsPage.OnSetContact(( _unit.FavContactItem.isPrototypeOf( sender )? 
      sender : null ).Contact );
      this.detailsPage.OnBack = [ this, this.onCloseDetailsPage ];
      this.SwitchToDialog( this.detailsPage, _app._GetAutoObject( _app.Res.SlideLeftCentered ), 
      null, null, null, null, null, null, null, null, false );
    },

    // Implementation of the Chora method : 'Application::FavoritesPage.onDeleteContact()'
    onDeleteContact : function( sender )
    {
      this.OnSetContact(( _unit.FavContactItem.isPrototypeOf( sender )? sender : 
      null ).Contact );

      var contact = _app._GetAutoObject( _app.Device.Device ).Contacts.FindByID( 
        this.Contact );

      if ( !!contact )
        contact.OnSetFavorite( false );

      _app._GetAutoObject( _app.Device.Device ).Favorites.Remove( this.Contact );
      this.VerticalList.InvalidateItems( 0, this.VerticalList.NoOfItems - 1 );
      this.OnSetContact( null );
    },

    // Implementation of the Chora method : 'Application::FavoritesPage.onCloseDetailsPage()'
    onCloseDetailsPage : function( sender )
    {
      this.DismissDialog( this.detailsPage, _app._GetAutoObject( _app.Res.SlideRightCentered ), 
      null, null, null, null, false );
      this.OnSetContact( null );
    },

    // Implementation of the Chora method : 'Application::FavoritesPage.onEdit()'
    onEdit : function( sender )
    {
      this.EditMode = !this.EditMode;
      this.VerticalList.InvalidateItems( 0, this.VerticalList.NoOfItems - 1 );
    },

    // Implementation of the Chora method : 'Application::FavoritesPage.onAdd()'
    onAdd : function( sender )
    {
      _app._GetAutoObject( _app.Device.Device ).Favorites.AddLast( this.addFav.Contact );
      this.VerticalList.InvalidateItems( 0, this.VerticalList.NoOfItems - 1 );
      this.DismissDialog( this.addFav, _app._GetAutoObject( _app.Res.SlideDownCentered ), 
      null, null, null, null, false );
      this.addFav = null;
    },

    // Default onget method for the property 'Contact'
    OnGetContact : function()
    {
      return this.Contact;
    },

    // Initializer for the class 'Application::FavoritesPage'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Group._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Views.Rectangle._Init.call( this.Background = { _parent:this }, 0 );
      _app.Core.VerticalList._Init.call( this.VerticalList = { _parent:this }, 0 );
      _app.Core.SlideTouchHandler._Init.call( this.SlideTouchHandler = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.TitleTxt1 = { _parent:this }, 0 );
      _app.Components.SButton25x25._Init.call( this.PlusButton = { _parent:this }, 0 );
      _app.Components.TextButton._Init.call( this.TextButton = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.FavoritesPage;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _0000 );
      this.Background.OnSetLayout( 0x3F );
      this.Background.OnSetBounds( _0000 );
      this.VerticalList.OnSetBounds( _008F );
      this.VerticalList.OnSetItemHeight( 32 );
      this.VerticalList.OnSetItemClass( _unit.FavContactItem );
      this.SlideTouchHandler.OnSetStackingPriority( -2 );
      this.SlideTouchHandler.OnSetBounds( _008F );
      this.SlideTouchHandler.SlideHorz = false;
      this.TitleTxt1.OnSetBounds( _0090 );
      this.TitleTxt1.OnSetAlignment( 0x11 );
      this.TitleTxt1.OnSetString( _app.Strings.FavoritesTxt );
      this.TitleTxt1.OnSetColor( _app.Res.Black );
      this.PlusButton.OnSetBounds( _0091 );
      this.PlusButton.OnSetEnabled( true );
      this.PlusButton.OnSetInitials( _app.Res.PlusIconTxt );
      this.PlusButton.OnSetInitialsColor( _app.Res.Blue );
      this.PlusButton.OnSetBackgoundColor( _app.Res.Transparent );
      this.PlusButton.OnSetBackgoundPressedColor( _app.Res.Transparent );
      this.TextButton.OnSetBounds( _0092 );
      this.TextButton.OnSetText( _app.Strings.EditTxt );
      this.Add( this.Background, 0 );
      this.Add( this.VerticalList, 0 );
      this.Add( this.SlideTouchHandler, 0 );
      this.Add( this.TitleTxt1, 0 );
      this.Add( this.PlusButton, 0 );
      this.Add( this.TextButton, 0 );
      this.VerticalList.OnLoadItem = [ this, this.OnLoadItem ];
      this.VerticalList.OnSetSlideHandler( this.SlideTouchHandler );
      this.TitleTxt1.OnSetFont( _app._GetResource( _app.Res.TitileFont32 ));
      this.PlusButton.OnActivate = [ this, this.onAddPress ];
      this.PlusButton.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.PlusButton.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.TextButton.OnActivate = [ this, this.onEdit ];

      // Call the user defined constructor
      this.Init( aArg );
    },

    // Deintializer for the class 'Application::FavoritesPage'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Core.Group;

      // Then deitialize all embedded objects ...
      this.Background._Done();
      this.VerticalList._Done();
      this.SlideTouchHandler._Done();
      this.TitleTxt1._Done();
      this.PlusButton._Done();
      this.TextButton._Done();

      // Finally continue the deinitialization in the super class
      _app.Core.Group._Done.call( this );
    },

    // Re-Initializer for the class 'Application::FavoritesPage'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Core.Group._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.Background._ReInit();
      this.VerticalList._ReInit();
      this.SlideTouchHandler._ReInit();
      this.TitleTxt1._ReInit();
      this.PlusButton._ReInit();
      this.TextButton._ReInit();
    },

    // Garbage Collector method for the class 'Application::FavoritesPage'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.Group._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.addFav ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Contact ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.detailsPage ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Background )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.VerticalList )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.SlideTouchHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TitleTxt1 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.PlusButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TextButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::FavoritesPage"
  };

  // User defined class: 'Application::RecentPage'
  _unit.RecentPage =
  {
    SelectedContact : null,
    detailsPage : null,
    Background : null,
    TitleTxt1 : null,
    TextButton : null,
    VerticalList : null,
    SlideTouchHandler : null,
    EditMode : false,

    // The method Init() is invoked automatically after the component has been created. 
    // This method can be overridden and filled with logic containing additional 
    // initialization statements.
    Init : function( aArg )
    {
      var _tmp;

      _app._AttachRefObserver([ this, this.onNoOfContactsChanged ], [ _tmp = _app._GetAutoObject( 
        _app.Device.Device ).History, _tmp.OnGetNoOfItems, _tmp.OnSetNoOfItems ], 
        0 );
      _app._PostSignal([ this, this.onNoOfContactsChanged ], this );
    },

    // This method is called by 'VerticalList' every time the list loads or updates 
    // an item.
    OnLoadItem : function( sender )
    {
      var _tmp;
      var itemNo = this.VerticalList.Item;
      var contactHistory = ( _app.Device.HistoryContact.isPrototypeOf( _tmp = _app._GetAutoObject( 
        _app.Device.Device ).History.GetContact( itemNo ))? _tmp : null );
      var itemView = ( _unit.RecentItm.isPrototypeOf( _tmp = this.VerticalList.View )? 
        _tmp : null );

      if ( !itemView )
        return;

      if ( !!contactHistory )
      {
        itemView.OnSetContactHistory( contactHistory );
        itemView.OnSetEditMode( this.EditMode );
        itemView.OnActivate = [ this, this.onPressedContact ];
        itemView.OnDelete = [ this, this.onDeleteContact ];
        itemView.OnInfo = [ this, this.onInfoContact ];
      }

      itemView.OnSetBounds( _app._SetRectSize( itemView.Bounds, [( _tmp = this.VerticalList.Bounds )[2] 
      - _tmp[0], this.VerticalList.ItemHeight ]));
    },

    // Implementation of the Chora method : 'Application::RecentPage.onNoOfContactsChanged()'
    onNoOfContactsChanged : function( sender )
    {
      this.VerticalList.OnSetNoOfItems( _app._GetAutoObject( _app.Device.Device ).History.NoOfItems );
    },

    // Implementation of the Chora method : 'Application::RecentPage.OnSetSelectedContact()'
    OnSetSelectedContact : function( value )
    {
      if ( this.SelectedContact === value )
        return;

      this.SelectedContact = value;
      _app._NotifyRefObservers([ this, this.OnGetSelectedContact, this.OnSetSelectedContact ], 
        0 );
    },

    // Implementation of the Chora method : 'Application::RecentPage.onEdit()'
    onEdit : function( sender )
    {
      this.EditMode = !this.EditMode;
      this.VerticalList.InvalidateItems( 0, this.VerticalList.NoOfItems - 1 );
    },

    // Implementation of the Chora method : 'Application::RecentPage.onPressedContact()'
    onPressedContact : function( sender )
    {
      var itemView = ( _unit.RecentItm.isPrototypeOf( sender )? sender : null );

      this.OnSetSelectedContact( itemView.ContactHistory );
      _app._GetAutoObject( _app.Device.Device ).SendCallContact( this.SelectedContact );
      this.OnSetSelectedContact( null );
    },

    // Implementation of the Chora method : 'Application::RecentPage.onInfoContact()'
    onInfoContact : function( sender )
    {
      var itemView = ( _unit.RecentItm.isPrototypeOf( sender )? sender : null );

      if ( !!itemView )
      {
        this.detailsPage = _app._NewObject( _unit.RecentDetailsPage, 0 );
        this.detailsPage.OnBack = [ this, this.onCloseDetailsPage ];
        this.detailsPage.OnDelete = [ this, this.onCloseDetailsPage ];
        this.detailsPage.OnSetHistoryContact( itemView.ContactHistory );
        this.SwitchToDialog( this.detailsPage, _app._GetAutoObject( _app.Res.SlideLeftCentered ), 
        null, null, null, null, null, null, null, null, false );
      }
    },

    // Implementation of the Chora method : 'Application::RecentPage.onDeleteContact()'
    onDeleteContact : function( sender )
    {
      var itemView = ( _unit.RecentItm.isPrototypeOf( sender )? sender : null );

      this.OnSetSelectedContact( itemView.ContactHistory );
      _app._GetAutoObject( _app.Device.Device ).History.Remove( this.SelectedContact );
      this.VerticalList.InvalidateItems( 0, this.VerticalList.NoOfItems - 1 );
      this.OnSetSelectedContact( null );
    },

    // Implementation of the Chora method : 'Application::RecentPage.onCloseDetailsPage()'
    onCloseDetailsPage : function( sender )
    {
      this.VerticalList.InvalidateItems( 0, _app._GetAutoObject( _app.Device.Device ).History.NoOfItems 
      - 1 );
      this.DismissDialog( this.detailsPage, _app._GetAutoObject( _app.Res.SlideRightCentered ), 
      null, null, null, null, false );
      this.OnSetSelectedContact( null );
    },

    // Default onget method for the property 'SelectedContact'
    OnGetSelectedContact : function()
    {
      return this.SelectedContact;
    },

    // Initializer for the class 'Application::RecentPage'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Group._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Views.Rectangle._Init.call( this.Background = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.TitleTxt1 = { _parent:this }, 0 );
      _app.Components.TextButton._Init.call( this.TextButton = { _parent:this }, 0 );
      _app.Core.VerticalList._Init.call( this.VerticalList = { _parent:this }, 0 );
      _app.Core.SlideTouchHandler._Init.call( this.SlideTouchHandler = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.RecentPage;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _0000 );
      this.Background.OnSetLayout( 0x3F );
      this.Background.OnSetBounds( _0000 );
      this.TitleTxt1.OnSetBounds( _0090 );
      this.TitleTxt1.OnSetAlignment( 0x11 );
      this.TitleTxt1.OnSetString( _app.Strings.RecentTxt );
      this.TitleTxt1.OnSetColor( _app.Res.Black );
      this.TextButton.OnSetLayout( 0xA );
      this.TextButton.OnSetBounds( _0093 );
      this.TextButton.OnSetText( _app.Strings.EditTxt );
      this.VerticalList.OnSetBounds( _008F );
      this.VerticalList.OnSetItemHeight( 50 );
      this.VerticalList.OnSetItemClass( _unit.RecentItm );
      this.SlideTouchHandler.OnSetStackingPriority( -1 );
      this.SlideTouchHandler.OnSetBounds( _008F );
      this.SlideTouchHandler.SlideHorz = false;
      this.Add( this.Background, 0 );
      this.Add( this.TitleTxt1, 0 );
      this.Add( this.TextButton, 0 );
      this.Add( this.VerticalList, 0 );
      this.Add( this.SlideTouchHandler, 0 );
      this.TitleTxt1.OnSetFont( _app._GetResource( _app.Res.TitileFont32 ));
      this.TextButton.OnActivate = [ this, this.onEdit ];
      this.VerticalList.OnLoadItem = [ this, this.OnLoadItem ];
      this.VerticalList.OnSetSlideHandler( this.SlideTouchHandler );

      // Call the user defined constructor
      this.Init( aArg );
    },

    // Deintializer for the class 'Application::RecentPage'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Core.Group;

      // Then deitialize all embedded objects ...
      this.Background._Done();
      this.TitleTxt1._Done();
      this.TextButton._Done();
      this.VerticalList._Done();
      this.SlideTouchHandler._Done();

      // Finally continue the deinitialization in the super class
      _app.Core.Group._Done.call( this );
    },

    // Re-Initializer for the class 'Application::RecentPage'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Core.Group._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.Background._ReInit();
      this.TitleTxt1._ReInit();
      this.TextButton._ReInit();
      this.VerticalList._ReInit();
      this.SlideTouchHandler._ReInit();
    },

    // Garbage Collector method for the class 'Application::RecentPage'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.Group._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.SelectedContact ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.detailsPage ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Background )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TitleTxt1 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TextButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.VerticalList )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.SlideTouchHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::RecentPage"
  };

  // User defined class: 'Application::ContactsList'
  _unit.ContactsList =
  {
    Contact : null,
    OnAddFav : null,
    Text : null,

    // Implementation of the Chora method : 'Application::ContactsList.onContactActivated()'
    onContactActivated : function( sender )
    {
      this.OnSetContact(( _unit.ContactItem.isPrototypeOf( sender )? sender : null ).Contact );

      if ( this.Contact.Favorite === false )
      {
        this.Contact.OnSetFavorite( true );
        _app._PostSignal( this.OnAddFav, this );
      }
      else
      {
        _app._Trace( "%s", _0094 );
        _app._PostSignal( this.OnCancel, this );
      }
    },

    // Implementation of the Chora method : 'Application::ContactsList.OnSetContact()'
    OnSetContact : function( value )
    {
      if ( this.Contact === value )
        return;

      this.Contact = value;
      _app._NotifyRefObservers([ this, this.OnGetContact, this.OnSetContact ], 0 );
    },

    // Default onget method for the property 'Contact'
    OnGetContact : function()
    {
      return this.Contact;
    },

    // Initializer for the class 'Application::ContactsList'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.ContactsInsideCall._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Views.Text._Init.call( this.Text = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.ContactsList;

      // ... and initialize objects, variables, properties, etc.
      this.PlusButton.OnSetVisible( false );
      this.TextButton.OnSetBounds( _0095 );
      this.Text.OnSetBounds( _0096 );
      this.Text.OnSetString( _app.Strings.AddToFavTxt );
      this.Text.OnSetColor( _app.Res.Black );
      this.Add( this.Text, 0 );
      this.Text.OnSetFont( _app._GetResource( _app.Res.ContactFont12 ));
    },

    // Deintializer for the class 'Application::ContactsList'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _unit.ContactsInsideCall;

      // Then deitialize all embedded objects ...
      this.Text._Done();

      // Finally continue the deinitialization in the super class
      _unit.ContactsInsideCall._Done.call( this );
    },

    // Re-Initializer for the class 'Application::ContactsList'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _unit.ContactsInsideCall._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.Text._ReInit();
    },

    // Garbage Collector method for the class 'Application::ContactsList'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.ContactsInsideCall._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.Contact ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnAddFav ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Text )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::ContactsList"
  };

  // User defined class: 'Application::FavContactItem'
  _unit.FavContactItem =
  {
    OnDelete : null,
    OnInfo : null,
    EditEffect : null,
    DeleteEffect : null,
    RemoveButton : null,
    DeleteButton : null,
    InfoButton : null,
    EditMode : false,

    // Implementation of the Chora method : 'Application::FavContactItem.onAnimate()'
    onAnimate : function( sender )
    {
      this.RemoveButton.OnSetBounds( _app._SetRectX( this.RemoveButton.Bounds, ( 
      this.EditEffect.Value - 25 ) - this.DeleteEffect.Value ));
      this.PrfofilButton.OnSetBounds( _app._SetRectX( this.PrfofilButton.Bounds, 
      ( this.EditEffect.Value + 6 ) - this.DeleteEffect.Value ));
      this.LastNameTxt.OnSetBounds( _app._SetRectX( this.LastNameTxt.Bounds, ( this.EditEffect.Value 
      + 55 ) - this.DeleteEffect.Value ));
      this.FirstNameTxt.OnSetBounds( _app._SetRectX( this.FirstNameTxt.Bounds, ( 
      this.EditEffect.Value + 146 ) - this.DeleteEffect.Value ));
      this.InfoButton.OnSetBounds( _app._SetRectX( this.InfoButton.Bounds, ( this.EditEffect.Value 
      + 217 ) - this.DeleteEffect.Value ));
      this.TouchHandler.OnSetPoint1([ this.RemoveButton.Bounds[2], this.TouchHandler.Point1[1]]);
      this.TouchHandler.OnSetPoint4([ this.RemoveButton.Bounds[2], this.TouchHandler.Point4[1]]);
      this.DeleteButton.OnSetBounds( _app._SetRectX( this.DeleteButton.Bounds, ( 
      this.EditEffect.Value + 273 ) - this.DeleteEffect.Value ));
    },

    // Implementation of the Chora method : 'Application::FavContactItem.OnSetEditMode()'
    OnSetEditMode : function( value )
    {
      var _tmp;

      if ( this.EditMode === value )
        return;

      this.EditMode = value;
      this.EditEffect.OnSetReversed( !this.EditMode );

      if ( this.EditMode )
      {
        this.InfoButton.OnSetInitials( _app.Res.MenuTxt );
        this.InfoButton.OnSetInitialsColor( _app.Res.Grey );
      }
      else
      {
        this.InfoButton.OnSetInitials( _app.Res.InfoTxt );
        this.InfoButton.OnSetInitialsColor( _app.Res.Blue );

        if ( this.DeleteEffect.Enabled || ( this.DeleteEffect.Value === this.DeleteEffect.Value2 ))
        {
          this.DeleteEffect.OnSetReversed( true );
          this.DeleteEffect.StartEffect( this );
        }
      }

      this.EditEffect.StartEffect( this );
    },

    // Implementation of the Chora method : 'Application::FavContactItem.onDelete()'
    onDelete : function( sender )
    {
      var _tmp;

      this.DeleteEffect.OnSetReversed( true );
      this.DeleteEffect.StartEffect( this );
      _app._PostSignal( this.OnDelete, this );
    },

    // Implementation of the Chora method : 'Application::FavContactItem.onShowDelete()'
    onShowDelete : function( sender )
    {
      var _tmp;

      this.DeleteEffect.OnSetReversed( false );
      this.DeleteEffect.StartEffect( this );
    },

    // Implementation of the Chora method : 'Application::FavContactItem.onInfo()'
    onInfo : function( sender )
    {
      var _tmp;

      ( _tmp = this.OnInfo )? _tmp[1].call( _tmp[0], this ) : null;
    },

    // Initializer for the class 'Application::FavContactItem'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.ContactItem._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Effects.Int32Effect._Init.call( this.EditEffect = { _parent:this }, 0 );
      _app.Effects.Int32Effect._Init.call( this.DeleteEffect = { _parent:this }, 0 );
      _app.Components.SButton25x25._Init.call( this.RemoveButton = { _parent:this }, 0 );
      _app.Components.TextButton._Init.call( this.DeleteButton = { _parent:this }, 0 );
      _app.Components.SButton25x25._Init.call( this.InfoButton = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.FavContactItem;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _000B );
      this.EditEffect.OnSetNoOfCycles( 1 );
      this.EditEffect.OnSetCycleDuration( 250 );
      this.EditEffect.Value2 = 25;
      this.EditEffect.Value1 = 0;
      this.DeleteEffect.OnSetNoOfCycles( 1 );
      this.DeleteEffect.OnSetCycleDuration( 250 );
      this.DeleteEffect.Value2 = 110;
      this.DeleteEffect.Value1 = 0;
      this.TouchHandler.OnSetStackingPriority( -1 );
      this.TouchHandler.OnSetPoint3( _0097 );
      this.TouchHandler.OnSetPoint2( _0098 );
      this.Background.OnSetLayout( 0x3 );
      this.Background.OnSetBounds( _000B );
      this.LastNameTxt.OnSetLayout( 0x3 );
      this.LastNameTxt.OnSetBounds( _0099 );
      this.LastNameTxt.OnSetAutoSize( true );
      this.RemoveButton.OnSetBounds( _009A );
      this.RemoveButton.OnSetBackgoundColor( _app.Res.Red );
      this.RemoveButton.OnSetBackgoundPressedColor( _app.Res.RedLight );
      this.DeleteButton.OnSetBounds( _009B );
      this.DeleteButton.OnSetText( _app.Strings.deleteTxt );
      this.DeleteButton.OnSetTextColor( _app.Res.White );
      this.DeleteButton.OnSetTextColorPress( _app.Res.WhiteSemiTransparent );
      this.DeleteButton.OnSetBackgoundColor( _app.Res.Red );
      this.InfoButton.OnSetLayout( 0x3 );
      this.InfoButton.OnSetBounds( _009C );
      this.InfoButton.OnSetInitials( _app.Res.InfoTxt );
      this.InfoButton.OnSetInitialsColor( _app.Res.Blue );
      this.InfoButton.OnSetBackgoundColor( _app.Res.Transparent );
      this.InfoButton.OnSetBackgoundPressedColor( _app.Res.WhiteSemiTransparent );
      this.FirstNameTxt.OnSetLayout( 0x3 );
      this.FirstNameTxt.OnSetBounds( _009D );
      this.FirstNameTxt.OnSetAutoSize( true );
      this.FirstNameTxt.OnSetString( _009E );
      this.Line.OnSetPoint2( _000D );
      this.Line.OnSetWidth( 2 );
      this.Line.OnSetColor( _app.Res.GreyLight );
      this.PrfofilButton.OnSetLayout( 0x3 );
      this.PrfofilButton.OnSetBounds( _0012 );
      this.Line1.OnSetPoint2( _000E );
      this.Add( this.RemoveButton, -5 );
      this.Add( this.DeleteButton, -5 );
      this.Add( this.InfoButton, -5 );
      this.EditEffect.OnAnimate = [ this, this.onAnimate ];
      this.DeleteEffect.OnAnimate = [ this, this.onAnimate ];
      this.RemoveButton.OnActivate = [ this, this.onShowDelete ];
      this.RemoveButton.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.DeleteButton.OnActivate = [ this, this.onDelete ];
      this.InfoButton.OnActivate = [ this, this.onInfo ];
      this.InfoButton.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont20 ));
      this.InfoButton.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.PrfofilButton.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
    },

    // Deintializer for the class 'Application::FavContactItem'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _unit.ContactItem;

      // Then deitialize all embedded objects ...
      this.EditEffect._Done();
      this.DeleteEffect._Done();
      this.RemoveButton._Done();
      this.DeleteButton._Done();
      this.InfoButton._Done();

      // Finally continue the deinitialization in the super class
      _unit.ContactItem._Done.call( this );
    },

    // Re-Initializer for the class 'Application::FavContactItem'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _unit.ContactItem._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.EditEffect._ReInit();
      this.DeleteEffect._ReInit();
      this.RemoveButton._ReInit();
      this.DeleteButton._ReInit();
      this.InfoButton._ReInit();
    },

    // Garbage Collector method for the class 'Application::FavContactItem'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.ContactItem._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.OnDelete ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnInfo ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.EditEffect )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.DeleteEffect )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.RemoveButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.DeleteButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.InfoButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::FavContactItem"
  };

  // User defined class: 'Application::RecentItm'
  _unit.RecentItm =
  {
    ContactHistory : null,

    // The property 'OnActivate' can refer to a slot method, which will receive 
    // a signal as soon as the user has activated the button. Thereupon the method's 
    // logic will be executed.
    OnActivate : null,
    OnDelete : null,
    OnInfo : null,

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
    Line : null,
    LastNameTxt : null,
    FirstNameTxt : null,
    CallTypeTxt : null,
    TimeTxt : null,
    InfoButton : null,
    PushButtonSmall : null,
    RemoveButton : null,
    DeleteButton : null,
    Line1 : null,
    EditEffect : null,
    DeleteEffect : null,

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
    ButtonColor : 0,
    IconColor : 0,
    ColorText1 : 0,
    ColorText2 : 0,
    EditMode : false,

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

      _app.Core.Group.UpdateViewState.call( this, aState );

      var isEnabled = (( aState & 0x10 ) === 0x10 );
      var isSelected = (( aState & 0x20 ) === 0x20 );
      var isPressed = ( this.TouchHandler.Down && this.TouchHandler.Inside ) || 
        this.FlashTimer.Enabled;

      if ( !!this.LastNameTxt )
      {
        var clr = this.ColorText1;
        var font = _app._GetResource( _app.Res.ContactFontBold15 );

        this.LastNameTxt.OnSetFont( font );
        this.LastNameTxt.OnSetColor( clr );
      }

      if ( !!this.FirstNameTxt )
      {
        var clr = this.ColorText1;
        var font = _app._GetResource( _app.Res.ContactFont15 );

        this.FirstNameTxt.OnSetFont( font );
        this.FirstNameTxt.OnSetColor( clr );
      }

      if ( !!this.CallTypeTxt )
      {
        this.CallTypeTxt.OnSetFont( _app._GetResource( _app.Res.ContactFont12 ));
        this.CallTypeTxt.OnSetColor( this.ColorText2 );
      }

      if ( !!this.TimeTxt )
      {
        this.TimeTxt.OnSetFont( _app._GetResource( _app.Res.ContactFont12 ));
        this.TimeTxt.OnSetColor( this.ColorText2 );
      }

      if ( !isEnabled )
        this.Background.OnSetColor( this.ButtonColor );
      else
        if ( isPressed )
          this.Background.OnSetColor( _app.Res.PressColor );
        else
          if ( isSelected )
            this.Background.OnSetColor( _app.Res.GreyLight );
          else
            this.Background.OnSetColor( this.ButtonColor );

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

    // Implementation of the Chora method : 'Application::RecentItm.OnSetColorText1()'
    OnSetColorText1 : function( value )
    {
      if ( this.ColorText1 === value )
        return;

      this.ColorText1 = value;
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Application::RecentItm.onAnimate()'
    onAnimate : function( sender )
    {
      this.RemoveButton.OnSetBounds( _app._SetRectX( this.RemoveButton.Bounds, ( 
      this.EditEffect.Value - 25 ) - this.DeleteEffect.Value ));
      this.PushButtonSmall.OnSetBounds( _app._SetRectX( this.PushButtonSmall.Bounds, 
      ( this.EditEffect.Value + 6 ) - this.DeleteEffect.Value ));
      this.LastNameTxt.OnSetBounds( _app._SetRectX( this.LastNameTxt.Bounds, ( this.EditEffect.Value 
      + 55 ) - this.DeleteEffect.Value ));
      this.FirstNameTxt.OnSetBounds( _app._SetRectX( this.FirstNameTxt.Bounds, ( 
      this.EditEffect.Value + 146 ) - this.DeleteEffect.Value ));
      this.CallTypeTxt.OnSetBounds( _app._SetRectX( this.CallTypeTxt.Bounds, ( this.EditEffect.Value 
      + 55 ) - this.DeleteEffect.Value ));
      this.InfoButton.OnSetBounds( _app._SetRectX( this.InfoButton.Bounds, ( this.EditEffect.Value 
      + 217 ) - this.DeleteEffect.Value ));
      this.TimeTxt.OnSetBounds( _app._SetRectX( this.TimeTxt.Bounds, ( this.EditEffect.Value 
      + 192 ) - this.DeleteEffect.Value ));
      this.TouchHandler.OnSetPoint1([ this.RemoveButton.Bounds[2], this.TouchHandler.Point1[1]]);
      this.TouchHandler.OnSetPoint4([ this.RemoveButton.Bounds[2], this.TouchHandler.Point4[1]]);
      this.DeleteButton.OnSetBounds( _app._SetRectX( this.DeleteButton.Bounds, ( 
      this.EditEffect.Value + 273 ) - this.DeleteEffect.Value ));
    },

    // Implementation of the Chora method : 'Application::RecentItm.OnSetEditMode()'
    OnSetEditMode : function( value )
    {
      var _tmp;

      if ( this.EditMode === value )
        return;

      this.EditMode = value;
      this.EditEffect.OnSetReversed( !this.EditMode );

      if ( this.EditMode )
        this.InfoButton.OnSetVisible( false );
      else
      {
        this.InfoButton.OnSetVisible( true );

        if ( this.DeleteEffect.Enabled || ( this.DeleteEffect.Value === this.DeleteEffect.Value2 ))
        {
          this.DeleteEffect.OnSetReversed( true );
          this.DeleteEffect.StartEffect( this );
        }
      }

      this.EditEffect.StartEffect( this );
    },

    // Implementation of the Chora method : 'Application::RecentItm.onDelete()'
    onDelete : function( sender )
    {
      var _tmp;

      this.DeleteEffect.OnSetReversed( true );
      this.DeleteEffect.StartEffect( this );
      _app._PostSignal( this.OnDelete, this );
    },

    // Implementation of the Chora method : 'Application::RecentItm.onShowDelete()'
    onShowDelete : function( sender )
    {
      var _tmp;

      this.DeleteEffect.OnSetReversed( false );
      this.DeleteEffect.StartEffect( this );
    },

    // Implementation of the Chora method : 'Application::RecentItm.onInfo()'
    onInfo : function( sender )
    {
      _app._PostSignal( this.OnInfo, this );
    },

    // Implementation of the Chora method : 'Application::RecentItm.OnSetContactHistory()'
    OnSetContactHistory : function( value )
    {
      if ( this.ContactHistory === value )
        return;

      if ( !!this.ContactHistory )
        _app._DetachObjObserver([ this, this.onContactRistoryUpdate ], this.ContactHistory, 
          0 );

      this.ContactHistory = value;

      if ( !!this.ContactHistory )
      {
        _app._AttachObjObserver([ this, this.onContactRistoryUpdate ], this.ContactHistory, 
          0 );
        _app._PostSignal([ this, this.onContactRistoryUpdate ], this );
      }
    },

    // Implementation of the Chora method : 'Application::RecentItm.onContactRistoryUpdate()'
    onContactRistoryUpdate : function( sender )
    {
      if ( !!this.ContactHistory )
      {
        this.LastNameTxt.OnSetString( this.ContactHistory.LastName );
        this.FirstNameTxt.OnSetString( this.ContactHistory.FirstName );

        if ( this.ContactHistory.CallDirection === 1 )
          this.PushButtonSmall.OnSetInitials( _app.Res.IncomingCallTxt );
        else
          this.PushButtonSmall.OnSetInitials( _app.Res.OutgoingCallTxt );

        this.CallTypeTxt.OnSetString( this.ContactHistory.GetCallDirection());
        this.TimeTxt.OnSetString( this.ContactHistory.GetTimeOfCall());

        if ( this.ContactHistory.CallState === 1 )
          this.OnSetColorText1( _app.Res.Red );
        else
          this.OnSetColorText1( _app.Res.Black );
      }
    },

    // Initializer for the class 'Application::RecentItm'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Group._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Core.Timer._Init.call( this.FlashTimer = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.KeyHandler = { _parent:this }, 0 );
      _app.Views.Rectangle._Init.call( this.Background = { _parent:this }, 0 );
      _app.Core.SimpleTouchHandler._Init.call( this.TouchHandler = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Line = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.LastNameTxt = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.FirstNameTxt = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.CallTypeTxt = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.TimeTxt = { _parent:this }, 0 );
      _app.Components.SButton25x25._Init.call( this.InfoButton = { _parent:this }, 0 );
      _app.Components.SButton25x25._Init.call( this.PushButtonSmall = { _parent:this }, 0 );
      _app.Components.SButton25x25._Init.call( this.RemoveButton = { _parent:this }, 0 );
      _app.Components.TextButton._Init.call( this.DeleteButton = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Line1 = { _parent:this }, 0 );
      _app.Effects.Int32Effect._Init.call( this.EditEffect = { _parent:this }, 0 );
      _app.Effects.Int32Effect._Init.call( this.DeleteEffect = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.RecentItm;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _009F );
      this.Icon = _app.Res.OutgoingCallTxt;
      this.ButtonColor = _app.Res.White;
      this.IconColor = _app.Res.White;
      this.FlashTimer.OnSetPeriod( 0 );
      this.FlashTimer.OnSetBegin( 50 );
      this.KeyHandler.Filter = 149;
      this.Background.OnSetBounds( _00A0 );
      this.Background.OnSetColorBL( 0xC8FDFDFD );
      this.Background.OnSetColorBR( 0xC8FDFDFD );
      this.Background.OnSetColor( 0xFFFFFFFF );
      this.TouchHandler.OnSetLayout( 0x3F );
      this.TouchHandler.OnSetPoint4( _00A1 );
      this.TouchHandler.OnSetPoint3( _00A2 );
      this.TouchHandler.OnSetPoint2( _00A3 );
      this.TouchHandler.OnSetPoint1( _00A4 );
      this.TouchHandler.RetargetCondition = 0xF;
      this.TouchHandler.OnSetMaxStrikeCount( 100 );
      this.Line.OnSetLayout( 0x14 );
      this.Line.OnSetPoint2( _00A5 );
      this.Line.OnSetPoint1( _00A6 );
      this.Line.OnSetWidth( 2 );
      this.Line.OnSetColor( _app.Res.GreyLight );
      this.LastNameTxt.OnSetBounds( _00A7 );
      this.LastNameTxt.OnSetAutoSize( true );
      this.LastNameTxt.OnSetAlignment( 0x11 );
      this.LastNameTxt.OnSetString( _00A8 );
      this.LastNameTxt.OnSetColor( _app.Res.Black );
      this.FirstNameTxt.OnSetStackingPriority( 0 );
      this.FirstNameTxt.OnSetLayout( 0x5 );
      this.FirstNameTxt.OnSetBounds( _00A9 );
      this.FirstNameTxt.OnSetAutoSize( true );
      this.FirstNameTxt.OnSetAlignment( 0x11 );
      this.FirstNameTxt.OnSetString( _009E );
      this.FirstNameTxt.OnSetColor( _app.Res.Black );
      this.CallTypeTxt.OnSetBounds( _00AA );
      this.CallTypeTxt.OnSetAutoSize( true );
      this.CallTypeTxt.OnSetAlignment( 0x11 );
      this.CallTypeTxt.OnSetString( _00AB );
      this.TimeTxt.OnSetBounds( _00AC );
      this.TimeTxt.OnSetAutoSize( true );
      this.TimeTxt.OnSetAlignment( 0x14 );
      this.TimeTxt.OnSetString( _00AD );
      this.ColorText1 = _app.Res.Black;
      this.ColorText2 = _app.Res.Grey;
      this.InfoButton.OnSetLayout( 0x3 );
      this.InfoButton.OnSetBounds( _00AE );
      this.InfoButton.OnSetInitials( _app.Res.InfoTxt );
      this.InfoButton.OnSetInitialsColor( _app.Res.Blue );
      this.InfoButton.OnSetBackgoundColor( _app.Res.Transparent );
      this.InfoButton.OnSetBackgoundPressedColor( _app.Res.Transparent );
      this.PushButtonSmall.OnSetBounds( _00AF );
      this.PushButtonSmall.OnSetAlphaBlended( true );
      this.PushButtonSmall.OnSetInitials( _app._EmptyString );
      this.PushButtonSmall.OnSetInitialsColor( _app.Res.Grey );
      this.PushButtonSmall.OnSetBackgoundColor( _app.Res.WhiteTransparent );
      this.PushButtonSmall.OnSetBackgoundPressedColor( _app.Res.WhiteTransparent );
      this.PushButtonSmall.OnSetBackgroundUnabled( _app.Res.WhiteTransparent );
      this.RemoveButton.OnSetBounds( _00B0 );
      this.RemoveButton.OnSetInitials( _app.Res.RemoveTxt );
      this.RemoveButton.OnSetBackgoundColor( _app.Res.Red );
      this.RemoveButton.OnSetBackgoundPressedColor( _app.Res.Transparent );
      this.DeleteButton.OnSetBounds( _00B1 );
      this.DeleteButton.OnSetText( _app.Strings.deleteTxt );
      this.DeleteButton.OnSetTextColor( _app.Res.White );
      this.DeleteButton.OnSetTextColorPress( _app.Res.WhiteSemiTransparent );
      this.DeleteButton.OnSetBackgoundColor( _app.Res.Red );
      this.Line1.OnSetLayout( 0x14 );
      this.Line1.OnSetPoint2( _000E );
      this.Line1.OnSetPoint1( _000F );
      this.Line1.OnSetWidth( 2 );
      this.Line1.OnSetColor( _app.Res.GreyLight );
      this.EditEffect.OnSetNoOfCycles( 1 );
      this.EditEffect.OnSetCycleDuration( 250 );
      this.EditEffect.Value2 = 25;
      this.EditEffect.Value1 = 0;
      this.DeleteEffect.OnSetNoOfCycles( 1 );
      this.DeleteEffect.OnSetCycleDuration( 250 );
      this.DeleteEffect.Value2 = 110;
      this.DeleteEffect.Value1 = 0;
      this.Add( this.Background, 0 );
      this.Add( this.TouchHandler, 0 );
      this.Add( this.Line, 0 );
      this.Add( this.LastNameTxt, 0 );
      this.Add( this.FirstNameTxt, 0 );
      this.Add( this.CallTypeTxt, 0 );
      this.Add( this.TimeTxt, 0 );
      this.Add( this.InfoButton, 0 );
      this.Add( this.PushButtonSmall, 0 );
      this.Add( this.RemoveButton, 0 );
      this.Add( this.DeleteButton, 0 );
      this.Add( this.Line1, 0 );
      this.FlashTimer.OnTrigger = [ this, this.onFlashTimer ];
      this.KeyHandler.OnPress = [ this, this.onPressKey ];
      this.TouchHandler.OnLeave = [ this, this.onEnterLeaveTouch ];
      this.TouchHandler.OnEnter = [ this, this.onEnterLeaveTouch ];
      this.TouchHandler.OnRelease = [ this, this.onReleaseTouch ];
      this.TouchHandler.OnPress = [ this, this.onPressTouch ];
      this.LastNameTxt.OnSetFont( _app._GetResource( _app.Res.ContactFontBold15 ));
      this.FirstNameTxt.OnSetFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.CallTypeTxt.OnSetFont( _app._GetResource( _app.Resources.DefaultFont ));
      this.TimeTxt.OnSetFont( _app._GetResource( _app.Resources.DefaultFont ));
      this.InfoButton.OnActivate = [ this, this.onInfo ];
      this.InfoButton.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.InfoButton.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.PushButtonSmall.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont20 ));
      this.PushButtonSmall.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.RemoveButton.OnActivate = [ this, this.onShowDelete ];
      this.RemoveButton.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.RemoveButton.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundSmall ));
      this.DeleteButton.OnActivate = [ this, this.onDelete ];
      this.EditEffect.OnAnimate = [ this, this.onAnimate ];
      this.DeleteEffect.OnAnimate = [ this, this.onAnimate ];
    },

    // Deintializer for the class 'Application::RecentItm'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Core.Group;

      // Then deitialize all embedded objects ...
      this.FlashTimer._Done();
      this.KeyHandler._Done();
      this.Background._Done();
      this.TouchHandler._Done();
      this.Line._Done();
      this.LastNameTxt._Done();
      this.FirstNameTxt._Done();
      this.CallTypeTxt._Done();
      this.TimeTxt._Done();
      this.InfoButton._Done();
      this.PushButtonSmall._Done();
      this.RemoveButton._Done();
      this.DeleteButton._Done();
      this.Line1._Done();
      this.EditEffect._Done();
      this.DeleteEffect._Done();

      // Finally continue the deinitialization in the super class
      _app.Core.Group._Done.call( this );
    },

    // Re-Initializer for the class 'Application::RecentItm'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Core.Group._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.FlashTimer._ReInit();
      this.KeyHandler._ReInit();
      this.Background._ReInit();
      this.TouchHandler._ReInit();
      this.Line._ReInit();
      this.LastNameTxt._ReInit();
      this.FirstNameTxt._ReInit();
      this.CallTypeTxt._ReInit();
      this.TimeTxt._ReInit();
      this.InfoButton._ReInit();
      this.PushButtonSmall._ReInit();
      this.RemoveButton._ReInit();
      this.DeleteButton._ReInit();
      this.Line1._ReInit();
      this.EditEffect._ReInit();
      this.DeleteEffect._ReInit();
    },

    // Garbage Collector method for the class 'Application::RecentItm'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.Group._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.ContactHistory ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnActivate ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnDelete ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnInfo ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.FlashTimer )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.KeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Background )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TouchHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.LastNameTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.FirstNameTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.CallTypeTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TimeTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.InfoButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.PushButtonSmall )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.RemoveButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.DeleteButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line1 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.EditEffect )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.DeleteEffect )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::RecentItm"
  };

  // User defined class: 'Application::RecentDetailsPage'
  _unit.RecentDetailsPage =
  {
    HistoryContact : null,
    Line4 : null,
    DateTxt : null,
    TypeTxt : null,
    TimeTxt : null,
    DurationTxt : null,

    // Implementation of the Chora method : 'Application::RecentDetailsPage.onContactUpdated()'
    onContactUpdated : function( sender )
    {
      if ( !!this.HistoryContact )
      {
        this.UserInitialsBtn.OnSetInitials( this.HistoryContact.NameInitials );
        this.ContactName.OnSetString(( this.HistoryContact.LastName + _0015 ) + 
        this.HistoryContact.FirstName );
        this.NumberTxt.OnSetString( this.HistoryContact.PhoneNumber );
        this.DateTxt.OnSetString( this.HistoryContact.TimeOfCall.Format( _00B2 ));
        this.TimeTxt.OnSetString( this.HistoryContact.TimeOfCall.Format( _00B3 ));

        if (( this.HistoryContact.CallState === 7 ) && (( this.HistoryContact.CallDirection 
            === 1 ) || ( this.HistoryContact.CallDirection === 2 )))
        {
          this.TypeTxt.OnSetString( this.HistoryContact.GetCallDirection());
          this.DurationTxt.OnSetString( this.HistoryContact.GetDuration());
        }
        else
        {
          this.TypeTxt.OnSetString( this.HistoryContact.GetCallState());
          this.DurationTxt.OnSetString( this.HistoryContact.GetDuration());
        }
      }
    },

    // Implementation of the Chora method : 'Application::RecentDetailsPage.OnSetHistoryContact()'
    OnSetHistoryContact : function( value )
    {
      if ( this.HistoryContact === value )
        return;

      if ( !!this.HistoryContact )
        _app._DetachObjObserver([ this, this.__onContactUpdated ], this.HistoryContact, 
          0 );

      this.HistoryContact = value;

      if ( !!this.HistoryContact )
      {
        _app._AttachObjObserver([ this, this.__onContactUpdated ], this.HistoryContact, 
          0 );
        _app._PostSignal([ this, this.__onContactUpdated ], this );
      }
    },

    // Initializer for the class 'Application::RecentDetailsPage'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.ContactDetailsPage._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Views.Line._Init.call( this.Line4 = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.DateTxt = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.TypeTxt = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.TimeTxt = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.DurationTxt = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.RecentDetailsPage;

      // ... and initialize objects, variables, properties, etc.
      this.Line2.OnSetPoint2( _00B4 );
      this.Line2.OnSetPoint1( _00B5 );
      this.NumberTxt.OnSetBounds( _00B6 );
      this.MobileTxt.OnSetBounds( _00B7 );
      this.Line1.OnSetPoint2( _00B8 );
      this.Line1.OnSetPoint1( _00B9 );
      this.Line4.OnSetPoint2( _00BA );
      this.Line4.OnSetPoint1( _00BB );
      this.Line4.OnSetColor( 0xFDE2E2E2 );
      this.DateTxt.OnSetBounds( _00BC );
      this.DateTxt.OnSetAlignment( 0x11 );
      this.DateTxt.OnSetString( _00BD );
      this.DateTxt.OnSetColor( _app.Res.Black );
      this.TypeTxt.OnSetBounds( _00BE );
      this.TypeTxt.OnSetAlignment( 0x11 );
      this.TypeTxt.OnSetString( _00BF );
      this.TypeTxt.OnSetColor( _app.Res.Black );
      this.TimeTxt.OnSetBounds( _00C0 );
      this.TimeTxt.OnSetAlignment( 0x11 );
      this.TimeTxt.OnSetString( _00C1 );
      this.TimeTxt.OnSetColor( _app.Res.Black );
      this.DurationTxt.OnSetBounds( _00C2 );
      this.DurationTxt.OnSetAlignment( 0x11 );
      this.DurationTxt.OnSetString( _00C3 );
      this.DurationTxt.OnSetColor( _app.Res.Grey );
      this.Add( this.Line4, 0 );
      this.Add( this.DateTxt, 0 );
      this.Add( this.TypeTxt, 0 );
      this.Add( this.TimeTxt, 0 );
      this.Add( this.DurationTxt, 0 );
      this.DateTxt.OnSetFont( _app._GetResource( _app.Res.ContactFont15 ));
      this.TypeTxt.OnSetFont( _app._GetResource( _app.Res.ContactFontBold15 ));
      this.TimeTxt.OnSetFont( _app._GetResource( _app.Res.ContactFont12 ));
      this.DurationTxt.OnSetFont( _app._GetResource( _app.Res.ContactFont12 ));
    },

    // Deintializer for the class 'Application::RecentDetailsPage'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _unit.ContactDetailsPage;

      // Then deitialize all embedded objects ...
      this.Line4._Done();
      this.DateTxt._Done();
      this.TypeTxt._Done();
      this.TimeTxt._Done();
      this.DurationTxt._Done();

      // Finally continue the deinitialization in the super class
      _unit.ContactDetailsPage._Done.call( this );
    },

    // Re-Initializer for the class 'Application::RecentDetailsPage'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _unit.ContactDetailsPage._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.Line4._ReInit();
      this.DateTxt._ReInit();
      this.TypeTxt._ReInit();
      this.TimeTxt._ReInit();
      this.DurationTxt._ReInit();
    },

    // Garbage Collector method for the class 'Application::RecentDetailsPage'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.ContactDetailsPage._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.HistoryContact ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line4 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.DateTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TypeTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TimeTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.DurationTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::RecentDetailsPage"
  };

  // User defined class: 'Application::CallPageBase'
  _unit.CallPageBase =
  {
    Contact : null,
    Background : null,
    DesclineButton : null,
    TimeTxt : null,
    ContactNameTxt : null,
    UserInitials : null,

    // Implementation of the Chora method : 'Application::CallPageBase.onContactUpdated()'
    onContactUpdated : function( sender )
    {
      if ( !!this.Contact )
      {
        this.ContactNameTxt.OnSetString(( this.Contact.LastName + _0015 ) + this.Contact.FirstName );
        this.UserInitials.OnSetInitials( this.Contact.NameInitials );
      }
      else
      {
        this.ContactNameTxt.OnSetString( _app._GetAutoObject( _app.Device.Device ).Ongoing.GetContact( 
        0 ).PhoneNumber );
        this.UserInitials.OnSetVisible( false );
      }
    },

    // Wrapper for the slot method : 'Application::CallPageBase.onContactUpdated'
    __onContactUpdated : function(s){ this.onContactUpdated(s);},

    // Implementation of the Chora method : 'Application::CallPageBase.onDesclineCall()'
    onDesclineCall : function( sender )
    {
      if ( this.Contact.CallDirection === 2 )
        _app._GetAutoObject( _app.Device.Device ).SendEndCall( this.Contact.PhoneNumber );
      else
        if ( this.Contact.CallDirection === 1 )
          _app._GetAutoObject( _app.Device.Device ).SendEndCall( this.Contact.PhoneNumber );
    },

    // Implementation of the Chora method : 'Application::CallPageBase.OnSetContact()'
    OnSetContact : function( value )
    {
      if ( this.Contact === value )
        return;

      if ( !!this.Contact )
        _app._DetachObjObserver([ this, this.__onContactUpdated ], this.Contact, 
          0 );

      this.Contact = value;

      if ( !!this.Contact )
      {
        _app._AttachObjObserver([ this, this.__onContactUpdated ], this.Contact, 
          0 );
        _app._PostSignal([ this, this.__onContactUpdated ], this );
      }
    },

    // Initializer for the class 'Application::CallPageBase'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Group._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Views.Rectangle._Init.call( this.Background = { _parent:this }, 0 );
      _app.Components.Button65x90._Init.call( this.DesclineButton = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.TimeTxt = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.ContactNameTxt = { _parent:this }, 0 );
      _app.Components.ButtonBase70x90._Init.call( this.UserInitials = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.CallPageBase;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _004C );
      this.Background.OnSetBounds( _004C );
      this.Background.OnSetColorBL( 0xFA838383 );
      this.Background.OnSetColorBR( 0xFF4F4F4F );
      this.Background.OnSetColorTR( 0xFF898989 );
      this.Background.OnSetColorTL( 0xFF898989 );
      this.Background.OnSetColor( 0xFF3C3C3C );
      this.DesclineButton.OnSetBounds( _00C4 );
      this.DesclineButton.OnSetInitials( _app.Res.EndCallTxt );
      this.DesclineButton.OnSetDescript( _app.Strings.declineTxt );
      this.DesclineButton.OnSetDescriptColor( _app.Res.White );
      this.DesclineButton.OnSetBackgoundColor( _app.Res.Red );
      this.DesclineButton.OnSetBackgoundPressedColor( _app.Res.RedLight );
      this.TimeTxt.OnSetLayout( 0x14 );
      this.TimeTxt.OnSetBounds( _00C5 );
      this.TimeTxt.OnSetAlignment( 0x12 );
      this.TimeTxt.OnSetString( _00C6 );
      this.TimeTxt.OnSetColor( _app.Res.White );
      this.ContactNameTxt.OnSetLayout( 0x14 );
      this.ContactNameTxt.OnSetBounds( _00C7 );
      this.ContactNameTxt.OnSetEnableBidiText( false );
      this.ContactNameTxt.OnSetAutoSize( true );
      this.ContactNameTxt.OnSetAlignment( 0x11 );
      this.ContactNameTxt.OnSetString( _0021 );
      this.ContactNameTxt.OnSetColor( _app.Res.White );
      this.UserInitials.OnSetBounds( _00C8 );
      this.UserInitials.OnSetEnabled( false );
      this.UserInitials.OnSetDescript( _app._EmptyString );
      this.Add( this.Background, 0 );
      this.Add( this.DesclineButton, 0 );
      this.Add( this.TimeTxt, 0 );
      this.Add( this.ContactNameTxt, 0 );
      this.Add( this.UserInitials, 0 );
      this.DesclineButton.OnActivate = [ this, this.onDesclineCall ];
      this.DesclineButton.OnSetInitialsFont( _app._GetResource( _app.Res.IconsFont25 ));
      this.DesclineButton.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium1 ));
      this.TimeTxt.OnSetFont( _app._GetResource( _app.Res.ContactFont12 ));
      this.ContactNameTxt.OnSetFont( _app._GetResource( _app.Res.TitileFont25 ));
    },

    // Deintializer for the class 'Application::CallPageBase'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Core.Group;

      // Then deitialize all embedded objects ...
      this.Background._Done();
      this.DesclineButton._Done();
      this.TimeTxt._Done();
      this.ContactNameTxt._Done();
      this.UserInitials._Done();

      // Finally continue the deinitialization in the super class
      _app.Core.Group._Done.call( this );
    },

    // Re-Initializer for the class 'Application::CallPageBase'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Core.Group._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.Background._ReInit();
      this.DesclineButton._ReInit();
      this.TimeTxt._ReInit();
      this.ContactNameTxt._ReInit();
      this.UserInitials._ReInit();
    },

    // Garbage Collector method for the class 'Application::CallPageBase'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.Group._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.Contact ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Background )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.DesclineButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TimeTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.ContactNameTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.UserInitials )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::CallPageBase"
  };

  // User defined class: 'Application::ContactsAppInsideCall'
  _unit.ContactsAppInsideCall =
  {
    OnCancel : null,
    TextButton : null,

    // Implementation of the Chora method : 'Application::ContactsAppInsideCall.onCancel()'
    onCancel : function( sender )
    {
      _app._PostSignal( this.OnCancel, this );
    },

    // Initializer for the class 'Application::ContactsAppInsideCall'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.ContactsApp._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Components.TextButton._Init.call( this.TextButton = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.ContactsAppInsideCall;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _0000 );
      this.Rectangle.OnSetBounds( _00C9 );
      this.NavBarButtons.OnSetBounds( _00CA );
      this.NavBarButtons1.OnSetBounds( _00CB );
      this.NavBarButtons2.OnSetBounds( _00CC );
      this.NavBarButtons3.OnSetBounds( _00CD );
      this.TextButton.OnSetBounds( _00CE );
      this.TextButton.OnSetText( _app.Strings.CancelTxt );
      this.Add( this.TextButton, 0 );
      this.TextButton.OnActivate = [ this, this.onCancel ];
    },

    // Deintializer for the class 'Application::ContactsAppInsideCall'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _unit.ContactsApp;

      // Then deitialize all embedded objects ...
      this.TextButton._Done();

      // Finally continue the deinitialization in the super class
      _unit.ContactsApp._Done.call( this );
    },

    // Re-Initializer for the class 'Application::ContactsAppInsideCall'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _unit.ContactsApp._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.TextButton._ReInit();
    },

    // Garbage Collector method for the class 'Application::ContactsAppInsideCall'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.ContactsApp._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.OnCancel ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TextButton )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::ContactsAppInsideCall"
  };

  // User defined class: 'Application::MyCardItem'
  _unit.MyCardItem =
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
    TouchHandler : null,
    Background : null,
    NameTxt : null,
    Line1 : null,
    MyCardTxt : null,
    PushButtonSmall1 : null,
    ButtonColor : 0,
    IconColor : 0,
    TextColor : 0,

    // This variable stores the current state of the button.
    enabled : false,

    // This variable stores the current state of the button.
    selected : false,

    // This variable stores the current state of the button.
    pressed : false,

    // The method Init() is invoked automatically after the component has been created. 
    // This method can be overridden and filled with logic containing additional 
    // initialization statements.
    Init : function( aArg )
    {
      var _tmp;

      _app._AttachRefObserver([ this, this.onContactUpdated ], [ _tmp = _app._GetAutoObject( 
        _app.Device.Device ), _tmp.OnGetMyCard, _tmp.OnSetMyCard ], 0 );
      _app._PostSignal([ this, this.onContactUpdated ], this );
    },

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

      _app.Core.Group.UpdateViewState.call( this, aState );

      var isEnabled = (( aState & 0x10 ) === 0x10 );
      var isSelected = (( aState & 0x20 ) === 0x20 );
      var isPressed = ( this.TouchHandler.Down && this.TouchHandler.Inside ) || 
        this.FlashTimer.Enabled;

      if ( !isEnabled )
        this.Background.OnSetColor( this.ButtonColor );
      else
        if ( isPressed )
          this.Background.OnSetColor( _app.Res.PressColor );
        else
          if ( isSelected )
            this.Background.OnSetColor( _app.Res.GreyLight );
          else
            this.Background.OnSetColor( this.ButtonColor );

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

    // Implementation of the Chora method : 'Application::MyCardItem.onContactUpdated()'
    onContactUpdated : function( sender )
    {
      if ( !!_app._GetAutoObject( _app.Device.Device ).MyCard )
      {
        this.NameTxt.OnSetString(( _app._GetAutoObject( _app.Device.Device ).MyCard.LastName 
        + _0015 ) + _app._GetAutoObject( _app.Device.Device ).MyCard.FirstName );
        this.PushButtonSmall1.OnSetInitials( _app._GetAutoObject( _app.Device.Device ).MyCard.NameInitials );
      }
      else
      {
        this.NameTxt.OnSetString( _app._EmptyString );
        this.PushButtonSmall1.OnSetInitials( _app._EmptyString );
      }
    },

    // Initializer for the class 'Application::MyCardItem'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Group._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Core.Timer._Init.call( this.FlashTimer = { _parent:this }, 0 );
      _app.Core.KeyPressHandler._Init.call( this.KeyHandler = { _parent:this }, 0 );
      _app.Core.SimpleTouchHandler._Init.call( this.TouchHandler = { _parent:this }, 0 );
      _app.Views.Rectangle._Init.call( this.Background = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.NameTxt = { _parent:this }, 0 );
      _app.Views.Line._Init.call( this.Line1 = { _parent:this }, 0 );
      _app.Views.Text._Init.call( this.MyCardTxt = { _parent:this }, 0 );
      _app.Components.SButton50x50._Init.call( this.PushButtonSmall1 = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.MyCardItem;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _00CF );
      this.ButtonColor = _app.Res.White;
      this.IconColor = _app.Res.White;
      this.TextColor = _app.Res.Black;
      this.FlashTimer.OnSetPeriod( 0 );
      this.FlashTimer.OnSetBegin( 50 );
      this.KeyHandler.Filter = 149;
      this.TouchHandler.OnSetLayout( 0x3F );
      this.TouchHandler.OnSetPoint4( _00D0 );
      this.TouchHandler.OnSetPoint3( _00D1 );
      this.TouchHandler.OnSetPoint2( _00D2 );
      this.TouchHandler.OnSetPoint1( _000F );
      this.TouchHandler.RetargetCondition = 0xF;
      this.TouchHandler.OnSetMaxStrikeCount( 100 );
      this.Background.OnSetBounds( _00CF );
      this.Background.OnSetColorBL( 0xC8FDFDFD );
      this.Background.OnSetColorBR( 0xC8FDFDFD );
      this.Background.OnSetColor( 0xFFFFFFFF );
      this.NameTxt.OnSetBounds( _00D3 );
      this.NameTxt.OnSetAlignment( 0x11 );
      this.NameTxt.OnSetString( _app.Strings.MyCardTxt );
      this.NameTxt.OnSetColor( _app.Res.Black );
      this.Line1.OnSetLayout( 0x14 );
      this.Line1.OnSetPoint2( _00D2 );
      this.Line1.OnSetPoint1( _000F );
      this.Line1.OnSetWidth( 2 );
      this.Line1.OnSetColor( _app.Res.GreyLight );
      this.MyCardTxt.OnSetBounds( _00D4 );
      this.MyCardTxt.OnSetAlignment( 0x11 );
      this.MyCardTxt.OnSetString( _app.Strings.MyCardTxt );
      this.MyCardTxt.OnSetColor( _app.Res.Grey );
      this.PushButtonSmall1.OnSetBounds( _00D5 );
      this.Add( this.TouchHandler, 0 );
      this.Add( this.Background, 0 );
      this.Add( this.NameTxt, 0 );
      this.Add( this.Line1, 0 );
      this.Add( this.MyCardTxt, 0 );
      this.Add( this.PushButtonSmall1, 0 );
      this.FlashTimer.OnTrigger = [ this, this.onFlashTimer ];
      this.KeyHandler.OnPress = [ this, this.onPressKey ];
      this.TouchHandler.OnLeave = [ this, this.onEnterLeaveTouch ];
      this.TouchHandler.OnEnter = [ this, this.onEnterLeaveTouch ];
      this.TouchHandler.OnRelease = [ this, this.onReleaseTouch ];
      this.TouchHandler.OnPress = [ this, this.onPressTouch ];
      this.NameTxt.OnSetFont( _app._GetResource( _app.Res.ContactFontBold15 ));
      this.MyCardTxt.OnSetFont( _app._GetResource( _app.Res.ContactFont12 ));
      this.PushButtonSmall1.OnSetBackgound( _app._GetResource( _app.Res.ButtonRoundMedium ));

      // Call the user defined constructor
      this.Init( aArg );
    },

    // Deintializer for the class 'Application::MyCardItem'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Core.Group;

      // Then deitialize all embedded objects ...
      this.FlashTimer._Done();
      this.KeyHandler._Done();
      this.TouchHandler._Done();
      this.Background._Done();
      this.NameTxt._Done();
      this.Line1._Done();
      this.MyCardTxt._Done();
      this.PushButtonSmall1._Done();

      // Finally continue the deinitialization in the super class
      _app.Core.Group._Done.call( this );
    },

    // Re-Initializer for the class 'Application::MyCardItem'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Core.Group._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.FlashTimer._ReInit();
      this.KeyHandler._ReInit();
      this.TouchHandler._ReInit();
      this.Background._ReInit();
      this.NameTxt._ReInit();
      this.Line1._ReInit();
      this.MyCardTxt._ReInit();
      this.PushButtonSmall1._ReInit();
    },

    // Garbage Collector method for the class 'Application::MyCardItem'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.Group._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.OnActivate ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.FlashTimer )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.KeyHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TouchHandler )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Background )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.NameTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Line1 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.MyCardTxt )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.PushButtonSmall1 )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Application::MyCardItem"
  };

  // Function to initialize the application.
  _unit._Init = function()
  {
    _unit.ContactsPage.__proto__ = _app.Core.Group;
    _unit.ContactItem.__proto__ = _app.Core.Group;
    _unit.ContactDetailsPage.__proto__ = _app.Core.Group;
    _unit.ContactAddPage.__proto__ = _app.Core.Group;
    _unit.ContactEditPage.__proto__ = _app.Core.Group;
    _unit.CallPage.__proto__ = _unit.CallPageBase;
    _unit.DetailsInsideCall.__proto__ = _unit.ContactDetailsPage;
    _unit.KeypadPage.__proto__ = _app.Core.Group;
    _unit.ContactsApp.__proto__ = _app.Core.Group;
    _unit.Application.__proto__ = _app.Core.Root;
    _unit.KeypadInsideCall.__proto__ = _unit.KeypadPage;
    _unit.ContactsInsideCall.__proto__ = _unit.ContactsPage;
    _unit.IncomingCall.__proto__ = _unit.CallPageBase;
    _unit.FavoritesPage.__proto__ = _app.Core.Group;
    _unit.RecentPage.__proto__ = _app.Core.Group;
    _unit.ContactsList.__proto__ = _unit.ContactsInsideCall;
    _unit.FavContactItem.__proto__ = _unit.ContactItem;
    _unit.RecentItm.__proto__ = _app.Core.Group;
    _unit.RecentDetailsPage.__proto__ = _unit.ContactDetailsPage;
    _unit.CallPageBase.__proto__ = _app.Core.Group;
    _unit.ContactsAppInsideCall.__proto__ = _unit.ContactsApp;
    _unit.MyCardItem.__proto__ = _app.Core.Group;
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