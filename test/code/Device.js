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
if ( EmWiApp.Device )
  throw new Error( "The unit file 'Device.js' included twice!" );

// Create the unit object including all members of the unit.
EmWiApp.Device = (function()
{
  var _app  = EmWiApp;
  var _unit = {};

  // Constant values used in this 'JavaScript' module only.
  var _0000 = "cancelled";
  var _0001 = "Smith";
  var _0002 = "Noah";
  var _0003 = "0723";
  var _0004 = "Jones";
  var _0005 = "Oliver";
  var _0006 = "0745";
  var _0007 = "Williams";
  var _0008 = "Amelia";
  var _0009 = "0759876234";
  var _000A = "Taylor";
  var _000B = "Leo";
  var _000C = "0713243546";
  var _000D = "Brown";
  var _000E = "Nancy";
  var _000F = "0754981234";
  var _0010 = "Davies";
  var _0011 = "James";
  var _0012 = "0756788890";
  var _0013 = "Addison";
  var _0014 = "Michaek";
  var _0015 = "0740987662";
  var _0016 = "Kennedy";
  var _0017 = "Jane";
  var _0018 = "0755545654";
  var _0019 = "Humphrey";
  var _001A = "George";
  var _001B = "0737678772";
  var _001C = "%S seconds";
  var _001D = "%M:%S minutes";
  var _001E = "%H:%M:%S houres";
  var _001F = "%H:%M %p";
  var _0020 = "%w";
  var _0021 = "%d:%m:%y";
  var _0022 = "http://localhost/php-files/contacts/receive/";
  var _0023 = "/";
  var _0024 = "call";
  var _0025 = "answer";
  var _0026 = "reject";
  var _0027 = "endcall";
  var _0028 = "message";
  var _0029 = "Unknown message from server";
  var _002A = "http://localhost/php-files/contacts/call/send/";
  var _002B = "/call/";
  var _002C = "/cancelled/";
  var _002D = "/answer/";

  // User defined class: 'Device::Contact'
  _unit.Contact =
  {
    Messages : null,
    FirstName : _app._EmptyString,
    LastName : _app._EmptyString,
    PhoneNumber : _app._EmptyString,
    NameInitials : _app._EmptyString,
    ID : 0,
    MyCard : false,
    Favorite : false,

    // Implementation of the Chora method : 'Device::Contact.Init()'
    Init : function( aArg )
    {
      this.ID = _app._GetAutoObject( _unit.Device ).GetNewID();
    },

    // Implementation of the Chora method : 'Device::Contact.OnSetFirstName()'
    OnSetFirstName : function( value )
    {
      if ( this.FirstName === value )
        return;

      this.FirstName = value;
      _app._NotifyObjObservers( this, 0 );
    },

    // Implementation of the Chora method : 'Device::Contact.OnSetLastName()'
    OnSetLastName : function( value )
    {
      if ( this.LastName === value )
        return;

      this.LastName = value;
      _app._NotifyObjObservers( this, 0 );
    },

    // Implementation of the Chora method : 'Device::Contact.OnSetPhoneNumber()'
    OnSetPhoneNumber : function( value )
    {
      if ( this.PhoneNumber === value )
        return;

      this.PhoneNumber = value;
      _app._NotifyObjObservers( this, 0 );
    },

    // Implementation of the Chora method : 'Device::Contact.OnSetNameInitials()'
    OnSetNameInitials : function( value )
    {
      if ( this.NameInitials === value )
        return;

      this.NameInitials = value;
      _app._NotifyObjObservers( this, 0 );
    },

    // Implementation of the Chora method : 'Device::Contact.OnSetID()'
    OnSetID : function( value )
    {
      if ( this.ID === value )
        return;

      this.ID = value;
    },

    // Implementation of the Chora method : 'Device::Contact.CopyDataTo()'
    CopyDataTo : function( aContact )
    {
      aContact.OnSetID( this.ID );
      aContact.OnSetLastName( this.LastName );
      aContact.OnSetFirstName( this.FirstName );
      aContact.OnSetPhoneNumber( this.PhoneNumber );
      aContact.OnSetNameInitials( this.NameInitials );

      return aContact;
    },

    // Implementation of the Chora method : 'Device::Contact.OnSetFavorite()'
    OnSetFavorite : function( value )
    {
      if ( this.Favorite === value )
        return;

      this.Favorite = value;
      _app._NotifyObjObservers( this, 0 );
    },

    // Implementation of the Chora method : 'Device::Contact.OnSetMyCard()'
    OnSetMyCard : function( value )
    {
      if ( this.MyCard === value )
        return;

      this.MyCard = value;
    },

    // Initializer for the class 'Device::Contact'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Contact;

      // Call the user defined constructor
      this.Init( aArg );

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Device::Contact'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Device::Contact'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Device::Contact'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark all reachable objects ...
      if (( _tmp = this.Messages ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Device::Contact"
  };

  // User defined enumeration: 'Device::Sorting'
  _unit.Sorting =
  {
    None : 0,
    Ascending : 1,
    Descending : 2
  };

  // User defined class: 'Device::DeviceClass'
  _unit.DeviceClass =
  {
    server : null,
    MyCard : null,
    Contacts : null,
    History : null,
    Favorites : null,
    Search : null,
    Ongoing : null,
    LastID : 0,
    Speaker : false,
    Microphone : false,

    // Implementation of the Chora method : 'Device::DeviceClass.Done()'
    Done : function()
    {
      var thisObject = this;

      {
        /*
           TO DO:

           Depending on your application case you call functions of the underlying
           middleware (or access the device directly) in order to perform the necessary
           de-initialization steps. For example, you invoke some 'C' function:

             YourDevice_DeInitialize();

           IMPORTANT:
           ----------

           The variable 'thisObject' represents the actually de-initialized instance of the
           Device::DeviceClass. If you have stored this object at the initialization
           time (in the 'Init' method) in some global C variable or registered it by the
           middleware, it is important to perform now the opposite operation. Set the
           global variable to NULL or de-register 'thisObject' object from the middleware.

        */
      }
    },

    // Implementation of the Chora method : 'Device::DeviceClass.Init()'
    Init : function( aArg )
    {
      var thisObject = this;

      {
        /*
           TO DO:

           Depending on your application case you call functions of the underlying
           middleware (or access the device directly) in order to perform the necessary
           initialization steps. For example, you invoke some 'C' function:

             YourDevice_Initialize();

           The variable 'thisObject' represents the actually initialized instance of the
           Device::DeviceClass. You can store this variable e.g. in the middleware
           and use it whenever the middleware needs to notify the GUI application about
           some state alternation or events. In this manner, the middleware will be able
           to invoke methods of the interface device object.

           For example, you can store 'thisObject' in some global C variable:

             // Declaration of the global C variable
             XObject theDeviceObject;

             // Store the instance in the global variable
             theDeviceObject = thisObject;

           Later use the global variable e.g. to provide the GUI application with events:

             ApplicationDeviceClass__TriggerSomeEvent( theDeviceObject );

           IMPORTANT:
           ----------

           If you store 'thisObject' for later use, don't forget to implement the opposite
           operation in the method 'Done'. Concrete, 'Done' should set the global variable
           again to the value NULL.

        */
      }
    },

    // Implementation of the Chora method : 'Device::DeviceClass.OnGetMicrophone()'
    OnGetMicrophone : function()
    {
      return this.Microphone;
    },

    // Implementation of the Chora method : 'Device::DeviceClass.OnSetMicrophone()'
    OnSetMicrophone : function( value )
    {
      if ( this.Microphone === value )
        return;

      this.Microphone = value;
      {
        /*
           TO DO:

           You can call a function of your own device API or you simply
           modify a variable existing in your middleware to reflect the
           new value:

           YourDevice_SetSomeValue( value );

           or

           YourDevice_SomeVariable = value;
        */
      }
      _app._NotifyRefObservers([ this, this.OnGetMicrophone, this.OnSetMicrophone ], 
        0 );
    },

    // This method is intended to be called by the device to notify the GUI application 
    // about an alternation of its setting or state value.
    UpdateMicrophone : function( aNewValue )
    {
      if ( aNewValue !== this.Microphone )
      {
        this.Microphone = aNewValue;
        _app._NotifyRefObservers([ this, this.OnGetMicrophone, this.OnSetMicrophone ], 
          0 );
      }
    },

    // Implementation of the Chora method : 'Device::DeviceClass.OnGetSpeaker()'
    OnGetSpeaker : function()
    {
      return this.Speaker;
    },

    // Implementation of the Chora method : 'Device::DeviceClass.OnSetSpeaker()'
    OnSetSpeaker : function( value )
    {
      if ( this.Speaker === value )
        return;

      this.Speaker = value;
      {
        /*
           TO DO:

           You can call a function of your own device API or you simply
           modify a variable existing in your middleware to reflect the
           new value:

           YourDevice_SetSomeValue( value );

           or

           YourDevice_SomeVariable = value;
        */
      }
      _app._NotifyRefObservers([ this, this.OnGetSpeaker, this.OnSetSpeaker ], 0 );
    },

    // This method is intended to be called by the device to notify the GUI application 
    // about an alternation of its setting or state value.
    UpdateSpeaker : function( aNewValue )
    {
      if ( aNewValue !== this.Speaker )
      {
        this.Speaker = aNewValue;
        _app._NotifyRefObservers([ this, this.OnGetSpeaker, this.OnSetSpeaker ], 
          0 );
      }
    },

    // Implementation of the Chora method : 'Device::DeviceClass.SendCallContact()'
    SendCallContact : function( aContact )
    {
      var historyContact = _app._NewObject( _unit.HistoryContact, 0 );

      aContact.CopyDataTo( historyContact );
      historyContact.OnSetTimeOfCall( _app._NewObject( _app.Core.Time, 0 ).OnGetCurrentTime());
      historyContact.OnSetCallState( 3 );
      historyContact.OnSetCallDirection( 2 );
      this.Ongoing.AddLast( historyContact );

      if ( !_app._GetAutoObject( _unit.PhoneServer ).StartCall( historyContact.PhoneNumber ))
      {
        historyContact.OnSetCallState( 8 );
        this.History.AddFirst( historyContact );
        this.Ongoing.Remove( historyContact );
      }
    },

    // Implementation of the Chora method : 'Device::DeviceClass.ReceiveCall()'
    ReceiveCall : function( aPhoneNumber )
    {
      var contact = this.Contacts.FindByPhoneNumber( aPhoneNumber );
      var historyContact = _app._NewObject( _unit.HistoryContact, 0 );

      if ( !contact )
      {
        historyContact.OnSetLastName( aPhoneNumber );
        historyContact.OnSetPhoneNumber( aPhoneNumber );
      }
      else
        contact.CopyDataTo( historyContact );

      historyContact.OnSetTimeOfCall( _app._NewObject( _app.Core.Time, 0 ).OnGetCurrentTime());
      historyContact.OnSetCallState( 3 );
      historyContact.OnSetCallDirection( 1 );
      this.Ongoing.AddLast( historyContact );
    },

    // Implementation of the Chora method : 'Device::DeviceClass.SendCallNumber()'
    SendCallNumber : function( aPhoneNumber )
    {
      var contact = this.Contacts.FindByPhoneNumber( aPhoneNumber );
      var historyContact = _app._NewObject( _unit.HistoryContact, 0 );

      if ( !contact )
      {
        historyContact.OnSetLastName( aPhoneNumber );
        historyContact.OnSetPhoneNumber( aPhoneNumber );
      }
      else
        contact.CopyDataTo( historyContact );

      historyContact.OnSetTimeOfCall( _app._NewObject( _app.Core.Time, 0 ).OnGetCurrentTime());
      historyContact.OnSetCallState( 3 );
      historyContact.OnSetCallDirection( 2 );
      this.Ongoing.AddLast( historyContact );

      if ( !_app._GetAutoObject( _unit.PhoneServer ).StartCall( historyContact.PhoneNumber ))
      {
        historyContact.OnSetCallState( 1 );
        this.History.AddFirst( historyContact );
        this.Ongoing.Remove( historyContact );
      }
    },

    // Implementation of the Chora method : 'Device::DeviceClass.GetNewID()'
    GetNewID : function()
    {
      var _tmp;

      this.LastID += 1;

      return this.LastID;
    },

    // Implementation of the Chora method : 'Device::DeviceClass.SendEndCall()'
    SendEndCall : function( aPhoneNumber )
    {
      var _tmp;
      var historyContact = ( _unit.HistoryContact.isPrototypeOf( _tmp = _app._GetAutoObject( 
        _unit.Device ).Ongoing.GetContact( 0 ))? _tmp : null );

      if ( historyContact.CallState === 3 )
      {
        historyContact.OnSetCallState( 2 );
        _app._Trace( "%s", _0000 );
        _app._GetAutoObject( _unit.PhoneServer ).CancelledCall( historyContact.PhoneNumber );
      }
      else
        if ( historyContact.CallState === 6 )
        {
          historyContact.OnSetCallState( 7 );
          historyContact.OnSetEndTime( _app._NewObject( _app.Core.Time, 0 ).OnGetCurrentTime());
          _app._GetAutoObject( _unit.PhoneServer ).EndCall( historyContact.PhoneNumber );
        }

      this.History.AddFirst( historyContact );
      this.Ongoing.Remove( historyContact );
    },

    // Implementation of the Chora method : 'Device::DeviceClass.SendCallAnswer()'
    SendCallAnswer : function( aContact )
    {
      aContact.OnSetCallState( 6 );
      aContact.OnSetStartTime( _app._NewObject( _app.Core.Time, 0 ).OnGetCurrentTime());

      if ( !_app._GetAutoObject( _unit.PhoneServer ).AnswerCall( aContact.PhoneNumber ))
      {
        aContact.OnSetCallState( 1 );
        this.History.AddFirst( aContact );
        this.Ongoing.Remove( aContact );
      }
    },

    // Implementation of the Chora method : 'Device::DeviceClass.ReceiveCallAnswered()'
    ReceiveCallAnswered : function( aPhoneNumber )
    {
      var _tmp;
      var historyContact = ( _unit.HistoryContact.isPrototypeOf( _tmp = _app._GetAutoObject( 
        _unit.Device ).Ongoing.GetContact( 0 ))? _tmp : null );

      historyContact.OnSetCallState( 6 );
      historyContact.OnSetStartTime( _app._NewObject( _app.Core.Time, 0 ).OnGetCurrentTime());
    },

    // Implementation of the Chora method : 'Device::DeviceClass.ReceiveCallRejected()'
    ReceiveCallRejected : function( aPhoneNumber )
    {
      var _tmp;
      var historyContact = ( _unit.HistoryContact.isPrototypeOf( _tmp = _app._GetAutoObject( 
        _unit.Device ).Ongoing.GetContact( 0 ))? _tmp : null );

      if ( historyContact.CallState === 3 )
        historyContact.OnSetCallState( 4 );

      this.History.AddFirst( historyContact );
      this.Ongoing.Remove( historyContact );
    },

    // Implementation of the Chora method : 'Device::DeviceClass.ReceiveEndCall()'
    ReceiveEndCall : function( aPhoneNumber )
    {
      var _tmp;
      var historyContact = ( _unit.HistoryContact.isPrototypeOf( _tmp = _app._GetAutoObject( 
        _unit.Device ).Ongoing.GetContact( 0 ))? _tmp : null );

      if ( historyContact.CallState === 3 )
        historyContact.OnSetCallState( 2 );
      else
        if ( historyContact.CallState === 6 )
        {
          historyContact.OnSetCallState( 7 );
          historyContact.OnSetEndTime( _app._NewObject( _app.Core.Time, 0 ).OnGetCurrentTime());
        }

      this.History.AddFirst( historyContact );
      this.Ongoing.Remove( historyContact );
    },

    // Implementation of the Chora method : 'Device::DeviceClass.OnSetMyCard()'
    OnSetMyCard : function( value )
    {
      var _tmp;

      if ( this.MyCard === value )
        return;

      this.MyCard = value;

      if ( !!this.MyCard )
        _app._GetAutoObject( _unit.PhoneServer ).PollServerData.StartTimer( this );

      _app._NotifyRefObservers([ this, this.OnGetMyCard, this.OnSetMyCard ], 0 );
      _app._Trace( "%s", ( this.MyCard.FirstName + this.MyCard.LastName ) + this.MyCard.PhoneNumber );
    },

    // Implementation of the Chora method : 'Device::DeviceClass.ReceiveMessage()'
    ReceiveMessage : function( aPhoneNumber, aMessageContent )
    {
      var contact = this.Contacts.FindByPhoneNumber( aPhoneNumber );

      if ( !contact )
      {
        contact = _app._NewObject( _unit.Contact, 0 );
        contact.OnSetFirstName( aPhoneNumber );
        contact.OnSetPhoneNumber( aPhoneNumber );
        contact.OnSetNameInitials( this.Contacts.GetInitials( aPhoneNumber, _app._EmptyString ));
      }

      var msg = _app._NewObject( _unit.Message, 0 );

      msg.OnSetSender( contact );
      msg.OnSetReceiver( this.MyCard );
      msg.OnSetTimeSent( _app._NewObject( _app.Core.Time, 0 ).OnGetCurrentTime());
      msg.OnSetMessage( aMessageContent );
      this.MyCard.Messages.Add( msg );
    },

    // Default onget method for the property 'MyCard'
    OnGetMyCard : function()
    {
      return this.MyCard;
    },

    // Initializer for the class 'Device::DeviceClass'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Templates.DeviceClass._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _unit.ContactList._Init.call( this.Contacts = { _parent:this }, 0 );
      _unit.ContactList._Init.call( this.History = { _parent:this }, 0 );
      _unit.ContactList._Init.call( this.Favorites = { _parent:this }, 0 );
      _unit.ContactList._Init.call( this.Search = { _parent:this }, 0 );
      _unit.ContactList._Init.call( this.Ongoing = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.DeviceClass;

      // ... and initialize objects, variables, properties, etc.
      this.server = _app._GetAutoObject( _unit.PhoneServer );

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

    // Deintializer for the class 'Device::DeviceClass'
    _Done : function()
    {
      // Deinitialize the variant object ...
      if ( this._vthis )
        this._vthis._Done.call( this );

      // Call the user defined destructor
      this.Done();

      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Templates.DeviceClass;

      // Then deitialize all embedded objects ...
      this.Contacts._Done();
      this.History._Done();
      this.Favorites._Done();
      this.Search._Done();
      this.Ongoing._Done();

      // Finally continue the deinitialization in the super class
      _app.Templates.DeviceClass._Done.call( this );
    },

    // Re-Initializer for the class 'Device::DeviceClass'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Templates.DeviceClass._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.Contacts._ReInit();
      this.History._ReInit();
      this.Favorites._ReInit();
      this.Search._ReInit();
      this.Ongoing._ReInit();

      // In case of multi-variant classes re-initialize the current variant
      // object ...
      if ( this._vthis )
        this._vthis._ReInit.call( this );
    },

    // Garbage Collector method for the class 'Device::DeviceClass'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Templates.DeviceClass._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.server ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.MyCard ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Contacts )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.History )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Favorites )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Search )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Ongoing )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the variant object ...
      if ( this._vthis )
        this._vthis._Mark( aCycle );
    },

    // Function to determine the currently effective variant of this class.
    _variants : function()
    {
      return _unit.DeviceSimulation._variants();
    },

    // Internal variables of this class.
    _vthis : null,
    _className : "Device::DeviceClass"
  };

  // User defined auto object: 'Device::Device'
  _unit.Device =
  {
    // Initializer for the auto object 'Device::Device'
    _Init : function()
    {
      // First create the auto object instance ...
      _unit.DeviceClass._Init.call( this, 0 );
    },

    // Function to determine the currently effective variant of this auto-object.
    _variants : function()
    {
      return this;
    },

    // The current unique instance of the auto object
    _this : null
  };

  // User defined enumeration: 'Device::CallState'
  _unit.CallState =
  {
    None : 0,
    Missed : 1,
    Cancelled : 2,
    Dialing : 3,
    Rejected : 4,
    Hold : 5,
    Speaking : 6,
    EndCall : 7,
    Fail : 8
  };

  // Class variant: 'Device::DeviceSimulation'
  _unit.DeviceSimulation =
  {
    // Implementation of the Chora method : 'Device::DeviceSimulation.Init()'
    Init : function( aArg )
    {
      var _vthis = this._vthis;

      _app._PostSignal([ this, _vthis.CreateContactData ], this );
    },

    // Implementation of the Chora method : 'Device::DeviceSimulation.CreateContact()'
    CreateContact : function( aLastName, aFirstName, aPhoneNumber )
    {
      var MyContact = _app._NewObject( _unit.Contact, 0 );

      MyContact.OnSetFirstName( aFirstName );
      MyContact.OnSetLastName( aLastName );
      MyContact.OnSetPhoneNumber( aPhoneNumber );
      MyContact.OnSetNameInitials( this.Contacts.GetInitials( aLastName, aFirstName ));
      this.Contacts.AddLast( MyContact );
    },

    // Implementation of the Chora method : 'Device::DeviceSimulation.CreateContactFav()'
    CreateContactFav : function( aLastName, aFirstName, aPhoneNumber )
    {
      var MyContact = _app._NewObject( _unit.Contact, 0 );

      MyContact.OnSetFirstName( aFirstName );
      MyContact.OnSetLastName( aLastName );
      MyContact.OnSetPhoneNumber( aPhoneNumber );
      MyContact.OnSetNameInitials( this.Favorites.GetInitials( aLastName, aFirstName ));
      this.Favorites.AddLast( MyContact );
    },

    // Implementation of the Chora method : 'Device::DeviceSimulation.CreateContactData()'
    CreateContactData : function( sender )
    {
      var _vthis = this._vthis;

      _vthis.CreateContact.call( this, _0001, _0002, _0003 );
      _vthis.CreateContact.call( this, _0004, _0005, _0006 );
      _vthis.CreateContact.call( this, _0007, _0008, _0009 );
      _vthis.CreateContact.call( this, _000A, _000B, _000C );
      _vthis.CreateContact.call( this, _000D, _000E, _000F );
      _vthis.CreateContact.call( this, _0010, _0011, _0012 );
      _vthis.CreateContact.call( this, _0013, _0014, _0015 );
      _vthis.CreateContact.call( this, _0016, _0017, _0018 );
      _vthis.CreateContactFav.call( this, _0019, _001A, _001B );
      this.Contacts.insertionSort();
    },

    // Initializer for the class variant 'Device::DeviceSimulation'
    _Init : function( aArg )
    {
      var _vthis = this._vthis;

      // Adjust this object's class inheritance ...
      _vthis.__proto__ = _unit.DeviceSimulation;

      // Call the user defined constructor
      _vthis.Init.call( this, aArg );

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class variant 'Device::DeviceSimulation'
    _Done : function()
    {
      var _vthis = this._vthis;
      // First adjust the object's class inheritance ...
      _vthis.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class variant 'Device::DeviceSimulation'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class variant 'Device::DeviceSimulation'
    _Mark : function( aCycle )
    {
    },

    // Function to determine the currently effective sub-variant of this class variant.
    _variants : function()
    {
      return this;
    },

    // Internal variables of this class variant.
    _className : "Device::DeviceSimulation"
  };

  // User defined class: 'Device::HistoryContact'
  _unit.HistoryContact =
  {
    TimeOfCall : null,
    StartTime : null,
    EndTime : null,
    CallDirection : 0,
    CallState : 0,

    // Implementation of the Chora method : 'Device::HistoryContact.OnSetCallState()'
    OnSetCallState : function( value )
    {
      if ( this.CallState === value )
        return;

      this.CallState = value;
      _app._NotifyObjObservers( this, 0 );
    },

    // Implementation of the Chora method : 'Device::HistoryContact.OnSetTimeOfCall()'
    OnSetTimeOfCall : function( value )
    {
      if ( this.TimeOfCall === value )
        return;

      this.TimeOfCall = value;
      _app._NotifyObjObservers( this, 0 );
    },

    // Implementation of the Chora method : 'Device::HistoryContact.OnSetStartTime()'
    OnSetStartTime : function( value )
    {
      if ( this.StartTime === value )
        return;

      this.StartTime = value;
      _app._NotifyObjObservers( this, 0 );
    },

    // Implementation of the Chora method : 'Device::HistoryContact.OnSetCallDirection()'
    OnSetCallDirection : function( value )
    {
      if ( this.CallDirection === value )
        return;

      this.CallDirection = value;
      _app._NotifyObjObservers( this, 0 );
    },

    // Implementation of the Chora method : 'Device::HistoryContact.OnSetEndTime()'
    OnSetEndTime : function( value )
    {
      if ( this.EndTime === value )
        return;

      this.EndTime = value;
      _app._NotifyObjObservers( this, 0 );
    },

    // Implementation of the Chora method : 'Device::HistoryContact.GetDuration()'
    GetDuration : function()
    {
      var time = _app._NewObject( _app.Core.TimeSpan, 0 );

      if ( !this.StartTime )
        return _app._EmptyString;
      else
        if ( !this.EndTime )
          time = _app._NewObject( _app.Core.Time, 0 ).OnGetCurrentTime().Difference( 
          this.StartTime );
        else
          time = this.EndTime.Difference( this.StartTime );

      if ( time.OnGetTotalMinutes() < 1 )
        return time.Format( _001C );

      if ( time.OnGetTotalMinutes() < 60 )
        return time.Format( _001D );
      else
        return time.Format( _001E );
    },

    // Implementation of the Chora method : 'Device::HistoryContact.GetCallState()'
    GetCallState : function()
    {
      switch ( this.CallState )
      {
        case 2 :
          return _app._GetVariantOf( _app.Strings.CancelledTxt );

        case 1 :
          return _app._GetVariantOf( _app.Strings.MissedTxt );

        case 4 :
          return _app._GetVariantOf( _app.Strings.RejectedTxt );

        default : 
          return _app.Strings.ErrorTxt;
      }
    },

    // Implementation of the Chora method : 'Device::HistoryContact.GetCallDirection()'
    GetCallDirection : function()
    {
      switch ( this.CallDirection )
      {
        case 1 :
          return _app._GetVariantOf( _app.Strings.IncomingTxt );

        case 2 :
          return _app._GetVariantOf( _app.Strings.OutgoingTxt );

        default : 
          return _app.Strings.ErrorTxt;
      }
    },

    // Implementation of the Chora method : 'Device::HistoryContact.GetTimeOfCall()'
    GetTimeOfCall : function()
    {
      var time;

      if ( !this.TimeOfCall )
        return _app._EmptyString;

      time = _app._NewObject( _app.Core.Time, 0 ).OnGetCurrentTime().Difference( 
      this.TimeOfCall );

      if ( time.OnGetTotalHours() < 24 )
        return this.TimeOfCall.Format( _001F );

      if ( this.TimeOfCall.Day < _app._NewObject( _app.Core.Time, 0 ).OnGetCurrentTime().Day )
        return this.TimeOfCall.Format( _0020 );
      else
        return this.TimeOfCall.Format( _0021 );
    },

    // Initializer for the class 'Device::HistoryContact'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.Contact._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.HistoryContact;
    },

    // Garbage Collector method for the class 'Device::HistoryContact'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.Contact._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.TimeOfCall ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.StartTime ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.EndTime ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Device::HistoryContact"
  };

  // User defined class: 'Device::ContactListElement'
  _unit.ContactListElement =
  {
    next : null,
    Data : null,

    // Initializer for the class 'Device::ContactListElement'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.ContactListElement;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Device::ContactListElement'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Device::ContactListElement'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Device::ContactListElement'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark all reachable objects ...
      if (( _tmp = this.next ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Data ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Device::ContactListElement"
  };

  // User defined class: 'Device::ContactList'
  _unit.ContactList =
  {
    head : null,
    sorted : null,
    NoOfItems : 0,
    Sorting : 0,

    // Implementation of the Chora method : 'Device::ContactList.AddLast()'
    AddLast : function( aContact )
    {
      var _tmp;
      var elem = _app._NewObject( _unit.ContactListElement, 0 );

      elem.Data = aContact;

      if ( !this.head )
        this.head = elem;
      else
      {
        var lastNode = this.head;

        while ( !!lastNode.next )
          lastNode = lastNode.next;

        lastNode.next = elem;
      }

      this.OnSetNoOfItems( this.NoOfItems + 1 );
    },

    // Implementation of the Chora method : 'Device::ContactList.Remove()'
    Remove : function( aContact )
    {
      var _tmp;
      var elem = this.head;
      var prev = null;

      if ( !!elem && ( elem.Data === aContact ))
      {
        this.head = elem.next;
        this.OnSetNoOfItems( this.NoOfItems - 1 );
      }
      else
      {
        while ( !!elem && ( elem.Data !== aContact ))
        {
          prev = elem;
          elem = elem.next;
        }

        prev.next = elem.next;
        this.OnSetNoOfItems( this.NoOfItems - 1 );
      }
    },

    // Implementation of the Chora method : 'Device::ContactList.OnSetNoOfItems()'
    OnSetNoOfItems : function( value )
    {
      if ( this.NoOfItems === value )
        return;

      this.NoOfItems = value;
      _app._NotifyRefObservers([ this, this.OnGetNoOfItems, this.OnSetNoOfItems ], 
        0 );
    },

    // Implementation of the Chora method : 'Device::ContactList.GetContact()'
    GetContact : function( aIndex )
    {
      var _tmp;

      if ( !this.head || ( aIndex >= this.NoOfItems ))
        return null;

      var elem = this.head;
      var it = 0;

      while (( it !== aIndex ) && !!elem.Data )
      {
        elem = elem.next;
        it += 1;
      }

      return elem.Data;
    },

    // Implementation of the Chora method : 'Device::ContactList.GetInitials()'
    GetInitials : function( aLastname, aFirstname )
    {
      return ( String.fromCharCode( aLastname.charCodeAt( 0 ) || 0 ) + _app._EmptyString ) 
        + String.fromCharCode( aFirstname.charCodeAt( 0 ) || 0 );
    },

    // Implementation of the Chora method : 'Device::ContactList.insertionSort()'
    insertionSort : function()
    {
      var current = this.head;

      while ( !!current )
      {
        var next = current.next;

        this.sortedInsert( current );
        current = next;
      }

      this.head = this.sorted;
      this.sorted = null;
    },

    // Implementation of the Chora method : 'Device::ContactList.sortedInsert()'
    sortedInsert : function( aElement )
    {
      if (( !this.sorted || (( this.Sorting === 1 ) && ( this.sorted.Data.LastName 
          >= aElement.Data.LastName ))) || (( this.Sorting === 2 ) && ( this.sorted.Data.LastName 
          <= aElement.Data.LastName )))
      {
        aElement.next = this.sorted;
        this.sorted = aElement;
      }
      else
      {
        var current = this.sorted;

        while ( !!current.next && ((( this.Sorting === 1 ) && ( current.next.Data.LastName 
               < aElement.Data.LastName )) || (( this.Sorting === 2 ) && ( current.next.Data.LastName 
               > aElement.Data.LastName ))))
          current = current.next;

        aElement.next = current.next;
        current.next = aElement;
      }
    },

    // Implementation of the Chora method : 'Device::ContactList.OnSetSorting()'
    OnSetSorting : function( value )
    {
      if ( this.Sorting === value )
        return;

      this.Sorting = value;
      this.insertionSort();
      _app._NotifyRefObservers([ this, this.OnGetSorting, this.OnSetSorting ], 0 );
    },

    // Implementation of the Chora method : 'Device::ContactList.FindByPhoneNumber()'
    FindByPhoneNumber : function( aNumber )
    {
      var elem = this.head;

      while ( !!elem )
      {
        if ( elem.Data.PhoneNumber === aNumber )
          return elem.Data;

        elem = elem.next;
      }

      return null;
    },

    // Implementation of the Chora method : 'Device::ContactList.FindByID()'
    FindByID : function( aContact )
    {
      var elem = this.head;

      while ( !!elem.next )
      {
        if ( elem.Data.ID === aContact.ID )
          return elem.Data;

        elem = elem.next;
      }

      return null;
    },

    // Implementation of the Chora method : 'Device::ContactList.AddFirst()'
    AddFirst : function( aContact )
    {
      var _tmp;
      var elem = _app._NewObject( _unit.ContactListElement, 0 );

      elem.Data = aContact;
      elem.Data = aContact;
      elem.next = this.head;
      this.head = elem;
      this.OnSetNoOfItems( this.NoOfItems + 1 );
    },

    // Default onget method for the property 'NoOfItems'
    OnGetNoOfItems : function()
    {
      return this.NoOfItems;
    },

    // Default onget method for the property 'Sorting'
    OnGetSorting : function()
    {
      return this.Sorting;
    },

    // Initializer for the class 'Device::ContactList'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.ContactList;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Device::ContactList'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Device::ContactList'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Device::ContactList'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark all reachable objects ...
      if (( _tmp = this.head ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.sorted ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Device::ContactList"
  };

  // User defined enumeration: 'Device::CallDirection'
  _unit.CallDirection =
  {
    None : 0,
    Incoming : 1,
    Outgoing : 2
  };

  // User defined class: 'Device::PhoneServerClass'
  _unit.PhoneServerClass =
  {
    PollServerData : null,

    // Implementation of the Chora method : 'Device::PhoneServerClass.askServerData()'
    askServerData : function( sender )
    {
      var senderID;
      var phoneNumber;
      var url;
      var message;
      var messageContent;

      senderID = _app._GetAutoObject( _unit.Device ).MyCard.PhoneNumber;
      phoneNumber = _app._EmptyString;
      message = _app._EmptyString;
      messageContent = _app._EmptyString;
      url = ( _0022 + senderID ) + _0023;
      {
        let req = new XMLHttpRequest();
        req.open('GET', url, false);
        req.onload = function() {
          if (req.status == 200) {

            let json    = JSON.parse(req.response);
            phoneNumber = json.sender;
            message     = json.message;
            messageContent = json.content;
          }
        };
        req.send();

        // console.log("OUT" + phoneNumber);
      }

      if ( message === _0024 )
        _app._GetAutoObject( _unit.Device ).ReceiveCall( phoneNumber );
      else
        if ( message === _0025 )
          _app._GetAutoObject( _unit.Device ).ReceiveCallAnswered( phoneNumber );
        else
          if ( message === _0026 )
            _app._GetAutoObject( _unit.Device ).ReceiveCallRejected( phoneNumber );
          else
            if (( message === _0027 ) || ( message === _0000 ))
              _app._GetAutoObject( _unit.Device ).ReceiveEndCall( phoneNumber );
            else
              if ( message === _0028 )
                _app._GetAutoObject( _unit.Device ).ReceiveMessage( phoneNumber, 
                messageContent );
              else
                _app._Trace( "%s", _0029 );
    },

    // Implementation of the Chora method : 'Device::PhoneServerClass.Done()'
    Done : function()
    {
      var thisObject = this;

      {
        /*
           TO DO:

           Depending on your application case you call functions of the underlying
           middleware (or access the device directly) in order to perform the necessary
           de-initialization steps. For example, you invoke some 'C' function:

             YourDevice_DeInitialize();

           IMPORTANT:
           ----------

           The variable 'thisObject' represents the actually de-initialized instance of the
           Device::DeviceClass1. If you have stored this object at the initialization
           time (in the 'Init' method) in some global C variable or registered it by the
           middleware, it is important to perform now the opposite operation. Set the
           global variable to NULL or de-register 'thisObject' object from the middleware.

        */
      }
    },

    // Implementation of the Chora method : 'Device::PhoneServerClass.Init()'
    Init : function( aArg )
    {
      var thisObject = this;

      {
        /*
           TO DO:

           Depending on your application case you call functions of the underlying
           middleware (or access the device directly) in order to perform the necessary
           initialization steps. For example, you invoke some 'C' function:

             YourDevice_Initialize();

           The variable 'thisObject' represents the actually initialized instance of the
           Device::DeviceClass1. You can store this variable e.g. in the middleware
           and use it whenever the middleware needs to notify the GUI application about
           some state alternation or events. In this manner, the middleware will be able
           to invoke methods of the interface device object.

           For example, you can store 'thisObject' in some global C variable:

             // Declaration of the global C variable
             XObject theDeviceObject;

             // Store the instance in the global variable
             theDeviceObject = thisObject;

           Later use the global variable e.g. to provide the GUI application with events:

             ApplicationDeviceClass__TriggerSomeEvent( theDeviceObject );

           IMPORTANT:
           ----------

           If you store 'thisObject' for later use, don't forget to implement the opposite
           operation in the method 'Done'. Concrete, 'Done' should set the global variable
           again to the value NULL.

        */
      }
    },

    // Implementation of the Chora method : 'Device::PhoneServerClass.StartCall()'
    StartCall : function( aReceiverNumber )
    {
      var url;
      var result = _app._EmptyString;
      var senderID = _app._GetAutoObject( _unit.Device ).MyCard.PhoneNumber;

      url = ((( _002A + senderID ) + _0023 ) + aReceiverNumber ) + _002B;
      {
        var req = new XMLHttpRequest();
        req.open("GET", url, false);
        req.onload = function() {
          if (req.status == 200) {
              console.log(req.status);
              result = req.responseText;
          }};

        req.send();
      }
      _app._Trace( "%s", result );

      if ( result === _app._EmptyString )
        return true;

      return false;
    },

    // Implementation of the Chora method : 'Device::PhoneServerClass.EndCall()'
    EndCall : function( aReceiverNumber )
    {
      var url;
      var result = _app._EmptyString;
      var senderID = _app._GetAutoObject( _unit.Device ).MyCard.PhoneNumber;

      url = ((( _002A + senderID ) + _0023 ) + aReceiverNumber ) + _002C;
      {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false); 
        xhr.onload = function() {
          if (xhr.readyState === 4) {
              console.log(req.status);
              result = req.responseText;
          }};

        xhr.send();
      }
      _app._Trace( "%s", result );

      if ( result === _app._EmptyString )
        return true;

      return false;
    },

    // Implementation of the Chora method : 'Device::PhoneServerClass.AnswerCall()'
    AnswerCall : function( aReceiverNumber )
    {
      var url;
      var result = _app._EmptyString;
      var senderID = _app._GetAutoObject( _unit.Device ).MyCard.PhoneNumber;

      url = ((( _002A + senderID ) + _0023 ) + aReceiverNumber ) + _002D;
      {
        var req = new XMLHttpRequest();
        req.open("GET", url, false);
        req.onload = function() {
          if (req.status == 200) {
              console.log(req.status);
              result = req.responseText;
          }};

        req.send();
      }
      _app._Trace( "%s", result );

      if ( result === _app._EmptyString )
        return true;

      return false;
    },

    // Implementation of the Chora method : 'Device::PhoneServerClass.CancelledCall()'
    CancelledCall : function( aReceiverNumber )
    {
      var url;
      var result = _app._EmptyString;
      var senderID = _app._GetAutoObject( _unit.Device ).MyCard.PhoneNumber;

      url = ((( _002A + senderID ) + _0023 ) + aReceiverNumber ) + _002C;
      _app._Trace( "%s", url );
      {
        var req = new XMLHttpRequest();
        req.open("GET", url, false);
        req.onload = function() {
          if (req.status == 200) {
              console.log(req.status);
              result = req.responseText;
          }};

        req.send();
      }
      _app._Trace( "%s", result );

      if ( result === _app._EmptyString )
        return true;

      return false;
    },

    // Initializer for the class 'Device::PhoneServerClass'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Templates.DeviceClass._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _app.Core.Timer._Init.call( this.PollServerData = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.PhoneServerClass;

      // ... and initialize objects, variables, properties, etc.
      this.PollServerData.OnTrigger = [ this, this.askServerData ];

      // Call the user defined constructor
      this.Init( aArg );
    },

    // Deintializer for the class 'Device::PhoneServerClass'
    _Done : function()
    {
      // Call the user defined destructor
      this.Done();

      // First adjust the object's class inheritance ...
      this.__proto__ = _app.Templates.DeviceClass;

      // Then deitialize all embedded objects ...
      this.PollServerData._Done();

      // Finally continue the deinitialization in the super class
      _app.Templates.DeviceClass._Done.call( this );
    },

    // Re-Initializer for the class 'Device::PhoneServerClass'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _app.Templates.DeviceClass._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.PollServerData._ReInit();
    },

    // Garbage Collector method for the class 'Device::PhoneServerClass'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Templates.DeviceClass._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.PollServerData )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Device::PhoneServerClass"
  };

  // User defined auto object: 'Device::PhoneServer'
  _unit.PhoneServer =
  {
    // Initializer for the auto object 'Device::PhoneServer'
    _Init : function()
    {
      // First create the auto object instance ...
      _unit.PhoneServerClass._Init.call( this, 0 );
    },

    // Function to determine the currently effective variant of this auto-object.
    _variants : function()
    {
      return this;
    },

    // The current unique instance of the auto object
    _this : null
  };

  // User defined class: 'Device::Message'
  _unit.Message =
  {
    next : null,
    Sender : null,
    Receiver : null,
    TimeSent : null,
    Message : _app._EmptyString,

    // Implementation of the Chora method : 'Device::Message.OnSetMessage()'
    OnSetMessage : function( value )
    {
      if ( this.Message === value )
        return;

      this.Message = value;
      _app._NotifyObjObservers( this, 0 );
    },

    // Implementation of the Chora method : 'Device::Message.OnSetSender()'
    OnSetSender : function( value )
    {
      if ( this.Sender === value )
        return;

      this.Sender = value;
      _app._NotifyObjObservers( this, 0 );
    },

    // Implementation of the Chora method : 'Device::Message.OnSetReceiver()'
    OnSetReceiver : function( value )
    {
      if ( this.Receiver === value )
        return;

      this.Receiver = value;
      _app._NotifyObjObservers( this, 0 );
    },

    // Implementation of the Chora method : 'Device::Message.OnSetTimeSent()'
    OnSetTimeSent : function( value )
    {
      if ( this.TimeSent === value )
        return;

      this.TimeSent = value;
      _app._NotifyObjObservers( this, 0 );
    },

    // Initializer for the class 'Device::Message'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Message;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Device::Message'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Device::Message'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Device::Message'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark all reachable objects ...
      if (( _tmp = this.next ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Sender ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Receiver ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.TimeSent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Device::Message"
  };

  // User defined class: 'Device::MessagesList'
  _unit.MessagesList =
  {
    head : null,
    NoOfItems : 0,

    // Implementation of the Chora method : 'Device::MessagesList.Add()'
    Add : function( aMessage )
    {
      var _tmp;
      var mes;

      mes = aMessage;

      if ( !this.head )
        this.head = mes;
      else
      {
        var lastNode = this.head;

        while ( !!lastNode.next )
          lastNode = lastNode.next;

        lastNode.next = mes;
      }

      this.OnSetNoOfItems( this.NoOfItems + 1 );
    },

    // Implementation of the Chora method : 'Device::MessagesList.OnSetNoOfItems()'
    OnSetNoOfItems : function( value )
    {
      if ( this.NoOfItems === value )
        return;

      this.NoOfItems = value;
      _app._NotifyRefObservers([ this, this.OnGetNoOfItems, this.OnSetNoOfItems ], 
        0 );
    },

    // Default onget method for the property 'NoOfItems'
    OnGetNoOfItems : function()
    {
      return this.NoOfItems;
    },

    // Initializer for the class 'Device::MessagesList'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.MessagesList;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Device::MessagesList'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Device::MessagesList'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Device::MessagesList'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark all reachable objects ...
      if (( _tmp = this.head ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Device::MessagesList"
  };

  // Function to initialize the application.
  _unit._Init = function()
  {
    _unit.DeviceClass.__proto__ = _app.Templates.DeviceClass;
    _unit.HistoryContact.__proto__ = _unit.Contact;
    _unit.PhoneServerClass.__proto__ = _app.Templates.DeviceClass;
  };

  // Function to re-initialize global objects after language selection.
  _unit._ReInit = function()
  {
    var _tmp;

    if (( _tmp = _unit.Device._this ))
      _tmp._ReInit();
    if (( _tmp = _unit.PhoneServer._this ))
      _tmp._ReInit();
  };

  // Function to reclaim memory occupied by unused objects.
  _unit._Reclaim = function( aCycle )
  {
    var _tmp;

    if (( _tmp = _unit.Device._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.Device._this = null );
    if (( _tmp = _unit.PhoneServer._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.PhoneServer._this = null );
  };

  return _unit;
})();

/* Embedded Wizard */