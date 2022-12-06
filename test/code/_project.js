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

// Forward declaration of the 'EmWi' and the application name space.
var EmWi_11_00;
var EmWiApp;

// Ensure that the Embedded Wizard runtime environment file is loaded before ...
if ( !EmWi_11_00 )
  throw new Error( "The Embedded Wizard runtime environment file 'emwi_11_00.js' isn't yet loaded!" );

// If this application file has already been loaded ...
if ( EmWiApp )
  throw new Error( "The application file '_project.js' included twice!" );

// Create the application object including all application's global members.
EmWiApp = (function()
{
  // The functionality of an application is inherited from the unique and global
  // EmWi object.
  var _app = { __proto__: EmWi_11_00 };

  // The 'default' Language. Each project has to contain at least one language brick 
  // called 'Default'
  _app.Default = 0;
  _app.Magyar = 1;

  // Constant containing the preferred size of the screen in pixel.
  _app._ScreenSize = [ 272, 480 ];

  // Function returning the main application class.
  _app._ApplicationClass = function(){ return _app.Application.Application; };

  // Constant containing the user defined application title.
  _app._ApplicationTitle = "";

  // Variables determining the language/variant selection.
  _app._Language = 0;
  _app._Styles = 0;

  // Internally used variables.
  _app._RootSet = [];

  // Function to init the application.
  _app._Init = function()
  {
    _app.Core._Init();
    _app.Effects._Init();
    _app.Graphics._Init();
    _app.Resources._Init();
    _app.Views._Init();
    _app.Application._Init();
    _app.Templates._Init();
    _app.Res._Init();
    _app.WidgetSet._Init();
    _app.Components._Init();
    _app.Strings._Init();
    _app.Device._Init();
    this.__proto__._Init.apply( this, arguments );
  };

  // Function to re-initialize global objects after language selection.
  _app._ReInit = function()
  {
    _app.Core._ReInit();
    _app.Effects._ReInit();
    _app.Graphics._ReInit();
    _app.Resources._ReInit();
    _app.Views._ReInit();
    _app.Application._ReInit();
    _app.Templates._ReInit();
    _app.Res._ReInit();
    _app.WidgetSet._ReInit();
    _app.Components._ReInit();
    _app.Strings._ReInit();
    _app.Device._ReInit();
  };

  // Function to reclaim memory occupied by unused objects.
  _app._Reclaim = function( aCycle )
  {
    _app.Core._Reclaim( aCycle );
    _app.Effects._Reclaim( aCycle );
    _app.Graphics._Reclaim( aCycle );
    _app.Resources._Reclaim( aCycle );
    _app.Views._Reclaim( aCycle );
    _app.Application._Reclaim( aCycle );
    _app.Templates._Reclaim( aCycle );
    _app.Res._Reclaim( aCycle );
    _app.WidgetSet._Reclaim( aCycle );
    _app.Components._Reclaim( aCycle );
    _app.Strings._Reclaim( aCycle );
    _app.Device._Reclaim( aCycle );
  };

  return _app;
})();

/* Embedded Wizard */