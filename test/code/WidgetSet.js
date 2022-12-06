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
if ( EmWiApp.WidgetSet )
  throw new Error( "The unit file 'WidgetSet.js' included twice!" );

// Create the unit object including all members of the unit.
EmWiApp.WidgetSet = (function()
{
  var _app  = EmWiApp;
  var _unit = {};

  // Function to initialize the application.
  _unit._Init = function()
  {
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