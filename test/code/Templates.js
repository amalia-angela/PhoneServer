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
if ( EmWiApp.Templates )
  throw new Error( "The unit file 'Templates.js' included twice!" );

// Create the unit object including all members of the unit.
EmWiApp.Templates = (function()
{
  var _app  = EmWiApp;
  var _unit = {};

  // User defined class: 'Templates::PushButton'
  _unit.PushButton =
  {
    // Initializer for the class 'Templates::PushButton'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Group._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.PushButton;
    },

    // Internal variables of this class.
    _className : "Templates::PushButton"
  };

  // User defined class: 'Templates::ToggleButton'
  _unit.ToggleButton =
  {
    // Initializer for the class 'Templates::ToggleButton'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Group._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.ToggleButton;
    },

    // Internal variables of this class.
    _className : "Templates::ToggleButton"
  };

  // User defined class: 'Templates::TextEditor'
  _unit.TextEditor =
  {
    // Initializer for the class 'Templates::TextEditor'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Group._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.TextEditor;
    },

    // Internal variables of this class.
    _className : "Templates::TextEditor"
  };

  // User defined class: 'Templates::DeviceClass'
  _unit.DeviceClass =
  {
    // Initializer for the class 'Templates::DeviceClass'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.DeviceClass;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Templates::DeviceClass'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Templates::DeviceClass'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Templates::DeviceClass'
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
    _className : "Templates::DeviceClass"
  };

  // Function to initialize the application.
  _unit._Init = function()
  {
    _unit.PushButton.__proto__ = _app.Core.Group;
    _unit.ToggleButton.__proto__ = _app.Core.Group;
    _unit.TextEditor.__proto__ = _app.Core.Group;
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