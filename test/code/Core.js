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
if ( EmWiApp.Core )
  throw new Error( "The unit file 'Core.js' included twice!" );

// Create the unit object including all members of the unit.
EmWiApp.Core = (function()
{
  var _app  = EmWiApp;
  var _unit = {};

  // Constant values used in this 'JavaScript' module only.
  var _0000 = [ 0, 0 ];
  var _0001 = [ 0, 0, 0, 0 ];
  var _0002 = "The view does not belong to this group";
  var _0003 = "The dialog component is already presented";
  var _0004 = "The dialog component is actually not presented";
  var _0005 = "No fader to perform the fade-in/out operation";
  var _0006 = "Trying to use the same fader twice";
  var _0007 = "Trying to fade-in/out a group which belongs to another owner";
  var _0008 = "No view to restack";
  var _0009 = "View is not in this group";
  var _000A = "No view to remove";
  var _000B = "No view to add";
  var _000C = "View already in a group";
  var _000D = "Recursive invalidate during active update cycle.";
  var _000E = [ -8, -8, 9, 9 ];
  var _000F = "The method RestackTop() is not available in Core::VerticalList.";
  var _0010 = "The method Restack() is not available in Core::VerticalList.";
  var _0011 = "The method Remove() is not available in Core::VerticalList.";
  var _0012 = "The method Add() is not available in Core::VerticalList.";
  var _0013 = "The Slide Touch Handler:";
  var _0014 = "is already connected with a view.";
  var _0015 = "The Slide Touch Handler is already connected with a view to scroll " +
    "its content.";
  var _0016 = [ 0, 0, 170, 120 ];
  var _0017 = "The KeyPressHandler is embedded within an object not being derived " +
    "from Core::Group.";
  var _0018 = "Trying to cancel a task not belonging to this queue!";
  var _0019 = "Trying to enqueue a task twice!";
  var _001A = "12";
  var _001B = "%";

  // The class Core::View provides the base functionality for all visual components. 
  // This class implements a set of methods and properties to manage the view, to 
  // redraw its content, to receive and handle any user input events and to arrange 
  // it on the screen. 
  // The class Core::View doesn't define any particular behavior nor appearance. 
  // It exists as an empty base for all derived view classes like the Views::Text 
  // or Views::Image.
  // Views never appear alone. Within a GUI application they are composed to complex 
  // GUI components, like the push button or the slider. This composition is done 
  // by the class Core::Group. In this manner each view belongs to a superior group 
  // and can be managed by this group. For example, showing the group makes visible 
  // all enclosed views automatically.
  _unit.View =
  {
    next : null,
    prev : null,

    // The variable 'Owner' refers to the superior component, where this view is 
    // enclosed. This is the unique owner of the view. It determines the visibility 
    // of the view, controls the order in which one view does overlap other views, 
    // etc.
    Owner : null,
    layoutContext : null,
    viewState : 0x103,

    // The property 'StackingPriority' determines the constraints how to arrange 
    // views one above the other. Concrete, views having higher @StackingPriority 
    // value will automatically appear in front of views with lower @StackingPriority 
    // value. As such, this property is very convenient if you want some views to 
    // always appear in front of other views (so-called top-most views). Just configure 
    // the top-most views with 'StackingPriority' value greater than the value of 
    // other views.
    // This property can be configured with positive and negative values. The lower 
    // the value, the lower the priority. The value 0 (zero) determines the default 
    // priority.
    StackingPriority : 0,

    // The property 'Layout' controls the automatic arrangement of the view. It 
    // specifies a set of alignment constraints and determines whether the view 
    // can change its size. It is used primarily to re-arrange the view after its 
    // @Owner has been resized. It also controls the arrangement of the view if 
    // it has been embedded within a Core::Outline.
    // The constraints AlignToLeft, AlignToRight, AlignToTop and AlignToBottom determine 
    // whether the view is left, right, top or bottom aligned. If active, the view 
    // will try to remain a constant distance to the corresponding edge of its owner. 
    // In contrast all not explicitly aligned edges are moved proportionally to 
    // the size modification of the views owner.
    // The constraints ResizeVert and ResizeHorz determine the resize behavior of 
    // the view in response to the size modification of its owner. Views with these 
    // constraints disabled always will keep their size unchanged. In conflict cases 
    // when the alignment and resize constraints do contradict, the view will maintain 
    // its size and will be pulled into the middle area resulting by the alignment 
    // constraints.
    // In case of views automatically arranged in rows or columns within a Core::Outline, 
    // the alignment constraints determine the vertical or horizontal alignment 
    // of the view within the corresponding row or column. The resize constraints 
    // in this case enable the view to fill the entire height of a column or the 
    // entire width of a row.
    Layout : 0x14,

    // Implementation of the Chora method : 'Core::View.initLayoutContext()'
    initLayoutContext : function( aBounds, aOutline )
    {
    },

    // Implementation of the Chora method : 'Core::View.OnSetStackingPriority()'
    OnSetStackingPriority : function( value )
    {
      if ( this.StackingPriority === value )
        return;

      this.StackingPriority = value;

      if ( !!this.Owner )
      {
        var sibling = this.next;
        var delta = 0;

        while ( !!sibling && ( value > sibling.StackingPriority ))
        {
          sibling = sibling.next;
          delta = delta + 1;
        }

        sibling = this.prev;

        while ( !!sibling && ( value < sibling.StackingPriority ))
        {
          sibling = sibling.prev;
          delta = delta - 1;
        }

        if ( !!delta )
          this.Owner.Restack( this, delta );
      }
    },

    // Implementation of the Chora method : 'Core::View.OnSetLayout()'
    OnSetLayout : function( value )
    {
      var _tmp;
      var delta = value ^ this.Layout;

      if ( !delta )
        return;

      this.Layout = value;

      if ( !!this.layoutContext && !(( this.viewState & 0x400 ) === 0x400 ))
      {
        this.Owner.viewState = this.Owner.viewState | 0x5000;
        _app._PostSignal([ _tmp = this.Owner, _tmp.updateComponent ], this );
        this.Owner.InvalidateArea([ 0, 0, ( _tmp = this.Owner.Bounds )[2] - _tmp[0], 
        _tmp[3] - _tmp[1]]);
      }

      if ( !!this.layoutContext && (( this.viewState & 0x400 ) === 0x400 ))
      {
        this.layoutContext.outline.viewState = this.layoutContext.outline.viewState 
        | 0x1000;
        this.Owner.viewState = this.Owner.viewState | 0x4000;
        _app._PostSignal([ _tmp = this.Owner, _tmp.updateComponent ], this );
      }
    },

    // The method GetRoot() delivers the application object, this view belongs to. 
    // The application object represents the entire screen of the GUI application. 
    // Thus in the views hierarchy, the application object serves as the root view.
    // This method can fail and return null if the view still doesn't belong to 
    // any owner group.
    GetRoot : function()
    {
      var grp = this.Owner;

      while ( !!grp )
      {
        var root = ( _unit.Root.isPrototypeOf( grp )? grp : null );

        if ( !!root )
          return root;

        grp = grp.Owner;
      }

      return null;
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
      return null;
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
      return null;
    },

    // The method ArrangeView() is invoked automatically if the superior @Owner 
    // group needs to re-arrange its views. For example, the changing of the owners 
    // size can cause the enclosed views to adapt their position and size, so all 
    // views still fit within the new owners area. This method provides the core 
    // functionality for the automatic GUI layout mechanism.
    // The arrangement is controlled primarily by the @Layout property of the view. 
    // It specifies a set of alignment constraints and determines whether the view 
    // can change its size. The bounds area where the view should be arranged, is 
    // passed in the parameter aBounds. This is usually the current area of the 
    // views owner.
    // The parameter aFormation defines the desired arrangement mode. Depending 
    // on the value of this parameter, the views can be arranged in rows or columns. 
    // If aFormation == Core::Formation.None, no automatic row/column arrangement 
    // is performed and the view is moved and scaled only to fit inside the aBounds 
    // area.
    // ArrangeView() is invoked automatically by the framework, so you never should 
    // need to invoke it directly.
    // The method returns the size of the view after it has been arranged.
    ArrangeView : function( aBounds, aFormation )
    {
      return _0000;
    },

    // The method MoveView() changes the position of the view by adding the value 
    // aOffset to all corners of the view. For example, in case of a line view the 
    // value is added to the both line end points.
    // The parameter aFastMove serves for the optimization purpose. If it is 'true', 
    // the corners are modified without performing any updates of the view and without 
    // redrawing the screen. This is useful, when you wish to move or arrange a 
    // lot of views at once. In this case it's up to you to request the finally 
    // screen update. To do this you can use the method InvalidateArea() of the 
    // views @Owner.
    // In the case aFastMove == false, the operation automatically requests the 
    // screen redraw of the view areas before and after the movement. You don't 
    // need to take care about it.
    MoveView : function( aOffset, aFastMove )
    {
    },

    // The method GetExtent() returns the position and the size of the view relative 
    // to the origin of its @Owner. In case of views with a non rectangular shape 
    // the method returns the rectangular boundary area enclosing the entire shape.
    GetExtent : function()
    {
      return _0001;
    },

    // The method ChangeViewState() modifies the current state of the view. The 
    // state is a set of switches determining whether a view is visible, whether 
    // it can react to user inputs or whether it is just performing some update 
    // operations, etc.
    // The modification is controlled by the the both parameters. The first aSetState 
    // contains the switches to activate within the view state. The second aClearState 
    // determines all switches to disable.
    // Depending on the state alteration the method will perform different operations, 
    // e.g. in response to the clearing of the visible state, the method will request 
    // a screen redraw to make disappear the view from the screen.
    // ChangeViewState() is invoked automatically by the framework, so you never 
    // should need to invoke it directly. All relevant states are available as properties 
    // e.g. the property Visible in derived classes reflects the visible state of 
    // the view.
    ChangeViewState : function( aSetState, aClearState )
    {
      var _tmp;

      if ((( this.viewState & 0x200 ) === 0x200 ))
        aSetState = aSetState & ~0x400;

      var newState = ( this.viewState & ~aClearState ) | aSetState;
      var deltaState = newState ^ this.viewState;

      this.viewState = newState;

      if ( !!this.Owner && !!( deltaState & 0x14 ))
      {
        var focusable = (( this.viewState & 0x14 ) === 0x14 );

        if ( focusable && !this.Owner.Focus )
          this.Owner.OnSetFocus( this );

        if ( !focusable && ( this.Owner.Focus === this ))
          this.Owner.OnSetFocus( this.Owner.FindSiblingView( this, 0x14 ));
      }

      if ( !!this.Owner && !!( deltaState & 0x403 ))
        this.Owner.InvalidateArea( this.GetExtent());

      if ((( !!this.layoutContext && !!this.Owner ) && (( newState & 0x400 ) === 
          0x400 )) && (( deltaState & 0x1 ) === 0x1 ))
      {
        this.viewState = this.viewState | 0x800;
        this.Owner.viewState = this.Owner.viewState | 0x4000;
        _app._PostSignal([ _tmp = this.Owner, _tmp.updateComponent ], this );
      }

      if ( !!this.Owner && (( deltaState & 0x400 ) === 0x400 ))
      {
        this.layoutContext = null;
        this.viewState = this.viewState | 0x800;
        this.Owner.viewState = this.Owner.viewState | 0x4000;
        _app._PostSignal([ _tmp = this.Owner, _tmp.updateComponent ], this );
      }
    },

    // Initializer for the class 'Core::View'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.View;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Core::View'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Core::View'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Core::View'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark all reachable objects ...
      if (( _tmp = this.next ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.prev ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Owner ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.layoutContext ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Core::View"
  };

  // The class Core::LineView provides more specialized base functionality for all 
  // view components with the shape of a simple line. It provides some few properties 
  // to get and set the coordinates of the line end points @Point1 and @Point2.
  // The class Core::LineView serves as base class for deriving line components 
  // only. It doesn't define any particular behavior nor appearance.
  _unit.LineView =
  {
    // The property 'Point2' defines the end position of the line in the coordinates 
    // of its @Owner. This is the pixel the line ends with. Please note, this last 
    // pixel is never drawn. This allows you to connect several lines to a polyline 
    // without overlapping the end pixel of the previous line segment with the start 
    // pixel of the following segment.
    Point2 : _app._NullPoint,

    // The property 'Point1' defines the start position of the line in the coordinates 
    // of its @Owner. This is the pixel the line begins with.
    Point1 : _app._NullPoint,

    // Implementation of the Chora method : 'Core::LineView.initLayoutContext()'
    initLayoutContext : function( aBounds, aOutline )
    {
      var context = _app._NewObject( _unit.LayoutLineContext, 0 );

      this.layoutContext = null;
      context.extent = this.getExtent();
      context.bounds = aBounds;
      context.outline = aOutline;
      context.point1 = this.Point1;
      context.point2 = this.Point2;
      this.layoutContext = context;
    },

    // The method ArrangeView() is invoked automatically if the superior @Owner 
    // group needs to re-arrange its views. For example, the changing of the owners 
    // size can cause the enclosed views to adapt their position and size, so all 
    // views still fit within the new owners area. This method provides the core 
    // functionality for the automatic GUI layout mechanism.
    // The arrangement is controlled primarily by the @Layout property of the view. 
    // It specifies a set of alignment constraints and determines whether the view 
    // can change its size. The bounds area where the view should be arranged, is 
    // passed in the parameter aBounds. This is usually the current area of the 
    // views owner.
    // The parameter aFormation defines the desired arrangement mode. Depending 
    // on the value of this parameter, the views can be arranged in rows or columns. 
    // If aFormation == Core::Formation.None, no automatic row/column arrangement 
    // is performed and the view is moved and scaled only to fit inside the aBounds 
    // area.
    // ArrangeView() is invoked automatically by the framework, so you never should 
    // need to invoke it directly.
    // The method returns the size of the view after it has been arranged.
    ArrangeView : function( aBounds, aFormation )
    {
      var _tmp;
      var layout = this.Layout;
      var context = ( _unit.LayoutLineContext.isPrototypeOf( _tmp = this.layoutContext )? 
        _tmp : null );
      var x1 = context.extent[0];
      var y1 = context.extent[1];
      var x2 = context.extent[2];
      var y2 = context.extent[3];
      var dstSize = [ aBounds[2] - aBounds[0], aBounds[3] - aBounds[1]];
      var w = x2 - x1;
      var h = y2 - y1;
      var tmp;

      if ( !aFormation )
      {
        var srcSize = [( _tmp = context.bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]];

        x1 = x1 - context.bounds[0];
        y1 = y1 - context.bounds[1];

        if ( srcSize[0] !== dstSize[0])
        {
          var alignToLeft = (( layout & 0x4 ) === 0x4 );
          var alignToRight = (( layout & 0x8 ) === 0x8 );
          var resizeHorz = (( layout & 0x1 ) === 0x1 );

          if ( !alignToLeft && ( resizeHorz || !alignToRight ))
            x1 = (( x1 * dstSize[0]) / srcSize[0]) | 0;

          if ( !alignToRight && ( resizeHorz || !alignToLeft ))
          {
            x2 = x2 - context.bounds[0];
            x2 = (( x2 * dstSize[0]) / srcSize[0]) | 0;
            x2 = x2 - dstSize[0];
          }
          else
            x2 = x2 - context.bounds[2];

          x1 = x1 + aBounds[0];
          x2 = x2 + aBounds[2];

          if ( !resizeHorz )
          {
            if ( alignToLeft && !alignToRight )
              x2 = x1 + w;
            else
              if ( !alignToLeft && alignToRight )
                x1 = x2 - w;
              else
              {
                x1 = x1 + (((( x2 - x1 ) - w ) / 2 ) | 0 );
                x2 = x1 + w;
              }
          }
        }
        else
        {
          x2 = x2 - context.bounds[2];
          x1 = x1 + aBounds[0];
          x2 = x2 + aBounds[2];
        }

        if ( srcSize[1] !== dstSize[1])
        {
          var alignToTop = (( layout & 0x10 ) === 0x10 );
          var alignToBottom = (( layout & 0x20 ) === 0x20 );
          var resizeVert = (( layout & 0x2 ) === 0x2 );

          if ( !alignToTop && ( resizeVert || !alignToBottom ))
            y1 = (( y1 * dstSize[1]) / srcSize[1]) | 0;

          if ( !alignToBottom && ( resizeVert || !alignToTop ))
          {
            y2 = y2 - context.bounds[1];
            y2 = (( y2 * dstSize[1]) / srcSize[1]) | 0;
            y2 = y2 - dstSize[1];
          }
          else
            y2 = y2 - context.bounds[3];

          y1 = y1 + aBounds[1];
          y2 = y2 + aBounds[3];

          if ( !resizeVert )
          {
            if ( alignToTop && !alignToBottom )
              y2 = y1 + h;
            else
              if ( !alignToTop && alignToBottom )
                y1 = y2 - h;
              else
              {
                y1 = y1 + (((( y2 - y1 ) - h ) / 2 ) | 0 );
                y2 = y1 + h;
              }
          }
        }
        else
        {
          y2 = y2 - context.bounds[3];
          y1 = y1 + aBounds[1];
          y2 = y2 + aBounds[3];
        }
      }
      else
      {
        switch ( aFormation )
        {
          case 3 :
          {
            x1 = aBounds[0];
            x2 = x1 + w;
          }
          break;

          case 4 :
          {
            x2 = aBounds[2];
            x1 = x2 - w;
          }
          break;

          case 1 :
          {
            y1 = aBounds[1];
            y2 = y1 + h;
          }
          break;

          case 2 :
          {
            y2 = aBounds[3];
            y1 = y2 - h;
          }
          break;

          default :; 
        }

        if (( aFormation === 3 ) || ( aFormation === 4 ))
        {
          var alignToTop = (( layout & 0x10 ) === 0x10 );
          var alignToBottom = (( layout & 0x20 ) === 0x20 );
          var resizeVert = (( layout & 0x2 ) === 0x2 );

          if ( resizeVert )
          {
            y1 = aBounds[1];
            y2 = aBounds[3];
          }
          else
            if ( alignToTop && !alignToBottom )
            {
              y1 = aBounds[1];
              y2 = y1 + h;
            }
            else
              if ( alignToBottom && !alignToTop )
              {
                y2 = aBounds[3];
                y1 = y2 - h;
              }
              else
              {
                y1 = aBounds[1] + (((( aBounds[3] - aBounds[1]) - h ) / 2 ) | 0 );
                y2 = y1 + h;
              }
        }

        if (( aFormation === 1 ) || ( aFormation === 2 ))
        {
          var alignToLeft = (( layout & 0x4 ) === 0x4 );
          var alignToRight = (( layout & 0x8 ) === 0x8 );
          var resizeHorz = (( layout & 0x1 ) === 0x1 );

          if ( resizeHorz )
          {
            x1 = aBounds[0];
            x2 = aBounds[2];
          }
          else
            if ( alignToLeft && !alignToRight )
            {
              x1 = aBounds[0];
              x2 = x1 + w;
            }
            else
              if ( alignToRight && !alignToLeft )
              {
                x2 = aBounds[2];
                x1 = x2 - w;
              }
              else
              {
                x1 = aBounds[0] + (((( aBounds[2] - aBounds[0]) - w ) / 2 ) | 0 );
                x2 = x1 + w;
              }
        }
      }

      context.isEmpty = ( x1 >= x2 ) || ( y1 >= y2 );
      w = x2 - x1;
      h = y2 - y1;

      if ( context.point2[0] < context.point1[0])
      {
        tmp = x1;
        x1 = x2 - 1;
        x2 = tmp - 1;
      }

      if ( context.point2[1] < context.point1[1])
      {
        tmp = y1;
        y1 = y2 - 1;
        y2 = tmp - 1;
      }

      if (( x2 - x1 ) === 1 )
        x2 = x1;

      if (( y2 - y1 ) === 1 )
        y2 = y1;

      if ((( this.viewState & 0x100 ) === 0x100 ))
      {
        this.Point1 = [ x1, y1 ];
        this.Point2 = [ x2, y2 ];
      }
      else
      {
        this.OnSetPoint1([ x1, y1 ]);
        this.OnSetPoint2([ x2, y2 ]);
        this.layoutContext = context;
      }

      return [ w, h ];
    },

    // The method MoveView() changes the position of the view by adding the value 
    // aOffset to all corners of the view. For example, in case of a line view the 
    // value is added to the both line end points.
    // The parameter aFastMove serves for the optimization purpose. If it is 'true', 
    // the corners are modified without performing any updates of the view and without 
    // redrawing the screen. This is useful, when you wish to move or arrange a 
    // lot of views at once. In this case it's up to you to request the finally 
    // screen update. To do this you can use the method InvalidateArea() of the 
    // views @Owner.
    // In the case aFastMove == false, the operation automatically requests the 
    // screen redraw of the view areas before and after the movement. You don't 
    // need to take care about it.
    MoveView : function( aOffset, aFastMove )
    {
      if ( aFastMove )
      {
        this.Point1 = _app._MovePointPos( this.Point1, aOffset );
        this.Point2 = _app._MovePointPos( this.Point2, aOffset );
      }
      else
      {
        this.OnSetPoint1( _app._MovePointPos( this.Point1, aOffset ));
        this.OnSetPoint2( _app._MovePointPos( this.Point2, aOffset ));
      }
    },

    // The method GetExtent() returns the position and the size of the view relative 
    // to the origin of its @Owner. In case of views with a non rectangular shape 
    // the method returns the rectangular boundary area enclosing the entire shape.
    GetExtent : function()
    {
      if ( !!this.layoutContext && this.layoutContext.isEmpty )
        return _0001;

      return this.getExtent();
    },

    // Implementation of the Chora method : 'Core::LineView.getExtent()'
    getExtent : function()
    {
      var x1 = this.Point1[0];
      var y1 = this.Point1[1];
      var x2 = this.Point2[0];
      var y2 = this.Point2[1];
      var w = x2 - x1;
      var h = y2 - y1;
      var tmp;

      if ( w < 0 )
        w = -w;

      if ( h < 0 )
        h = -h;

      if ( w >= h )
      {
        if ( x2 > x1 )
          x2 = x2 - 1;

        if ( x2 < x1 )
          x2 = x2 + 1;
      }

      if ( h >= w )
      {
        if ( y2 > y1 )
          y2 = y2 - 1;

        if ( y2 < y1 )
          y2 = y2 + 1;
      }

      if ( x2 < x1 )
      {
        tmp = x1;
        x1 = x2;
        x2 = tmp;
      }

      if ( y2 < y1 )
      {
        tmp = y1;
        y1 = y2;
        y2 = tmp;
      }

      return [ x1, y1, x2 + 1, y2 + 1 ];
    },

    // Implementation of the Chora method : 'Core::LineView.OnSetPoint2()'
    OnSetPoint2 : function( value )
    {
      var _tmp;

      if ( _app._IsEqualPoint( value, this.Point2 ))
        return;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      this.layoutContext = null;
      this.Point2 = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      if (( !!this.Owner && (( this.viewState & 0x400 ) === 0x400 )) && !(( this.Owner.viewState 
          & 0x2000 ) === 0x2000 ))
      {
        this.viewState = this.viewState | 0x800;
        this.Owner.viewState = this.Owner.viewState | 0x4000;
        _app._PostSignal([ _tmp = this.Owner, _tmp.updateComponent ], this );
      }
    },

    // Implementation of the Chora method : 'Core::LineView.OnSetPoint1()'
    OnSetPoint1 : function( value )
    {
      var _tmp;

      if ( _app._IsEqualPoint( value, this.Point1 ))
        return;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      this.layoutContext = null;
      this.Point1 = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      if (( !!this.Owner && (( this.viewState & 0x400 ) === 0x400 )) && !(( this.Owner.viewState 
          & 0x2000 ) === 0x2000 ))
      {
        this.viewState = this.viewState | 0x800;
        this.Owner.viewState = this.Owner.viewState | 0x4000;
        _app._PostSignal([ _tmp = this.Owner, _tmp.updateComponent ], this );
      }
    },

    // Initializer for the class 'Core::LineView'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.View._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.LineView;
    },

    // Internal variables of this class.
    _className : "Core::LineView"
  };

  // The class Core::QuadView provides more specialized base functionality for all 
  // view components with the shape of a quad (polygon consisting of 4 corners). 
  // It provides some few properties to get and set the coordinates of the quad 
  // corners @Point1, @Point2, @Point3 and @Point4.
  // The class Core::QuadView serves as base class for deriving quad components 
  // only. It doesn't define any particular behavior nor appearance.
  _unit.QuadView =
  {
    // The property 'Point4' defines the position of the fourth corner of the quad 
    // in the coordinates of the corresponding @Owner.
    Point4 : _app._NullPoint,

    // The property 'Point3' defines the position of the third corner of the quad 
    // in the coordinates of the corresponding @Owner.
    Point3 : _app._NullPoint,

    // The property 'Point2' defines the position of the second corner of the quad 
    // in the coordinates of the corresponding @Owner.
    Point2 : _app._NullPoint,

    // The property 'Point1' defines the position of the first corner of the quad 
    // in the coordinates of the corresponding @Owner.
    Point1 : _app._NullPoint,

    // Implementation of the Chora method : 'Core::QuadView.initLayoutContext()'
    initLayoutContext : function( aBounds, aOutline )
    {
      var context = _app._NewObject( _unit.LayoutQuadContext, 0 );

      this.layoutContext = null;
      context.extent = this.GetExtent();
      context.bounds = aBounds;
      context.outline = aOutline;
      context.point1 = this.Point1;
      context.point2 = this.Point2;
      context.point3 = this.Point3;
      context.point4 = this.Point4;
      this.layoutContext = context;
    },

    // The method ArrangeView() is invoked automatically if the superior @Owner 
    // group needs to re-arrange its views. For example, the changing of the owners 
    // size can cause the enclosed views to adapt their position and size, so all 
    // views still fit within the new owners area. This method provides the core 
    // functionality for the automatic GUI layout mechanism.
    // The arrangement is controlled primarily by the @Layout property of the view. 
    // It specifies a set of alignment constraints and determines whether the view 
    // can change its size. The bounds area where the view should be arranged, is 
    // passed in the parameter aBounds. This is usually the current area of the 
    // views owner.
    // The parameter aFormation defines the desired arrangement mode. Depending 
    // on the value of this parameter, the views can be arranged in rows or columns. 
    // If aFormation == Core::Formation.None, no automatic row/column arrangement 
    // is performed and the view is moved and scaled only to fit inside the aBounds 
    // area.
    // ArrangeView() is invoked automatically by the framework, so you never should 
    // need to invoke it directly.
    // The method returns the size of the view after it has been arranged.
    ArrangeView : function( aBounds, aFormation )
    {
      var _tmp;
      var layout = this.Layout;
      var context = ( _unit.LayoutQuadContext.isPrototypeOf( _tmp = this.layoutContext )? 
        _tmp : null );
      var x1 = context.extent[0];
      var y1 = context.extent[1];
      var x2 = context.extent[2];
      var y2 = context.extent[3];
      var dstSize = [ aBounds[2] - aBounds[0], aBounds[3] - aBounds[1]];
      var w = x2 - x1;
      var h = y2 - y1;

      if ( !aFormation )
      {
        var srcSize = [( _tmp = context.bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]];

        x1 = x1 - context.bounds[0];
        y1 = y1 - context.bounds[1];

        if ( srcSize[0] !== dstSize[0])
        {
          var alignToLeft = (( layout & 0x4 ) === 0x4 );
          var alignToRight = (( layout & 0x8 ) === 0x8 );
          var resizeHorz = (( layout & 0x1 ) === 0x1 );

          if ( !alignToLeft && ( resizeHorz || !alignToRight ))
            x1 = (( x1 * dstSize[0]) / srcSize[0]) | 0;

          if ( !alignToRight && ( resizeHorz || !alignToLeft ))
          {
            x2 = x2 - context.bounds[0];
            x2 = (( x2 * dstSize[0]) / srcSize[0]) | 0;
            x2 = x2 - dstSize[0];
          }
          else
            x2 = x2 - context.bounds[2];

          x1 = x1 + aBounds[0];
          x2 = x2 + aBounds[2];

          if ( !resizeHorz )
          {
            if ( alignToLeft && !alignToRight )
              x2 = x1 + w;
            else
              if ( !alignToLeft && alignToRight )
                x1 = x2 - w;
              else
              {
                x1 = x1 + (((( x2 - x1 ) - w ) / 2 ) | 0 );
                x2 = x1 + w;
              }
          }
        }
        else
        {
          x2 = x2 - context.bounds[2];
          x1 = x1 + aBounds[0];
          x2 = x2 + aBounds[2];
        }

        if ( srcSize[1] !== dstSize[1])
        {
          var alignToTop = (( layout & 0x10 ) === 0x10 );
          var alignToBottom = (( layout & 0x20 ) === 0x20 );
          var resizeVert = (( layout & 0x2 ) === 0x2 );

          if ( !alignToTop && ( resizeVert || !alignToBottom ))
            y1 = (( y1 * dstSize[1]) / srcSize[1]) | 0;

          if ( !alignToBottom && ( resizeVert || !alignToTop ))
          {
            y2 = y2 - context.bounds[1];
            y2 = (( y2 * dstSize[1]) / srcSize[1]) | 0;
            y2 = y2 - dstSize[1];
          }
          else
            y2 = y2 - context.bounds[3];

          y1 = y1 + aBounds[1];
          y2 = y2 + aBounds[3];

          if ( !resizeVert )
          {
            if ( alignToTop && !alignToBottom )
              y2 = y1 + h;
            else
              if ( !alignToTop && alignToBottom )
                y1 = y2 - h;
              else
              {
                y1 = y1 + (((( y2 - y1 ) - h ) / 2 ) | 0 );
                y2 = y1 + h;
              }
          }
        }
        else
        {
          y2 = y2 - context.bounds[3];
          y1 = y1 + aBounds[1];
          y2 = y2 + aBounds[3];
        }
      }
      else
      {
        switch ( aFormation )
        {
          case 3 :
          {
            x1 = aBounds[0];
            x2 = x1 + w;
          }
          break;

          case 4 :
          {
            x2 = aBounds[2];
            x1 = x2 - w;
          }
          break;

          case 1 :
          {
            y1 = aBounds[1];
            y2 = y1 + h;
          }
          break;

          case 2 :
          {
            y2 = aBounds[3];
            y1 = y2 - h;
          }
          break;

          default :; 
        }

        if (( aFormation === 3 ) || ( aFormation === 4 ))
        {
          var alignToTop = (( layout & 0x10 ) === 0x10 );
          var alignToBottom = (( layout & 0x20 ) === 0x20 );
          var resizeVert = (( layout & 0x2 ) === 0x2 );

          if ( resizeVert )
          {
            y1 = aBounds[1];
            y2 = aBounds[3];
          }
          else
            if ( alignToTop && !alignToBottom )
            {
              y1 = aBounds[1];
              y2 = y1 + h;
            }
            else
              if ( alignToBottom && !alignToTop )
              {
                y2 = aBounds[3];
                y1 = y2 - h;
              }
              else
              {
                y1 = aBounds[1] + (((( aBounds[3] - aBounds[1]) - h ) / 2 ) | 0 );
                y2 = y1 + h;
              }
        }

        if (( aFormation === 1 ) || ( aFormation === 2 ))
        {
          var alignToLeft = (( layout & 0x4 ) === 0x4 );
          var alignToRight = (( layout & 0x8 ) === 0x8 );
          var resizeHorz = (( layout & 0x1 ) === 0x1 );

          if ( resizeHorz )
          {
            x1 = aBounds[0];
            x2 = aBounds[2];
          }
          else
            if ( alignToLeft && !alignToRight )
            {
              x1 = aBounds[0];
              x2 = x1 + w;
            }
            else
              if ( alignToRight && !alignToLeft )
              {
                x2 = aBounds[2];
                x1 = x2 - w;
              }
              else
              {
                x1 = aBounds[0] + (((( aBounds[2] - aBounds[0]) - w ) / 2 ) | 0 );
                x2 = x1 + w;
              }
        }
      }

      context.isEmpty = ( x1 >= x2 ) || ( y1 >= y2 );
      w = ( x2 - x1 ) - 1;
      h = ( y2 - y1 ) - 1;

      var ex = context.extent[0];
      var ey = context.extent[1];
      var ew = ( context.extent[2] - ex ) - 1;
      var eh = ( context.extent[3] - ey ) - 1;

      if ( !ew )
        ew = 1;

      if ( !eh )
        eh = 1;

      if ((( this.viewState & 0x100 ) === 0x100 ))
      {
        this.Point1 = [ x1 + (((( context.point1[0] - ex ) * w ) / ew ) | 0 ), y1 
        + (((( context.point1[1] - ey ) * h ) / eh ) | 0 )];
        this.Point2 = [ x1 + (((( context.point2[0] - ex ) * w ) / ew ) | 0 ), y1 
        + (((( context.point2[1] - ey ) * h ) / eh ) | 0 )];
        this.Point3 = [ x1 + (((( context.point3[0] - ex ) * w ) / ew ) | 0 ), y1 
        + (((( context.point3[1] - ey ) * h ) / eh ) | 0 )];
        this.Point4 = [ x1 + (((( context.point4[0] - ex ) * w ) / ew ) | 0 ), y1 
        + (((( context.point4[1] - ey ) * h ) / eh ) | 0 )];
      }
      else
      {
        this.OnSetPoint1([ x1 + (((( context.point1[0] - ex ) * w ) / ew ) | 0 ), 
        y1 + (((( context.point1[1] - ey ) * h ) / eh ) | 0 )]);
        this.OnSetPoint2([ x1 + (((( context.point2[0] - ex ) * w ) / ew ) | 0 ), 
        y1 + (((( context.point2[1] - ey ) * h ) / eh ) | 0 )]);
        this.OnSetPoint3([ x1 + (((( context.point3[0] - ex ) * w ) / ew ) | 0 ), 
        y1 + (((( context.point3[1] - ey ) * h ) / eh ) | 0 )]);
        this.OnSetPoint4([ x1 + (((( context.point4[0] - ex ) * w ) / ew ) | 0 ), 
        y1 + (((( context.point4[1] - ey ) * h ) / eh ) | 0 )]);
        this.layoutContext = context;
      }

      return [ w + 1, h + 1 ];
    },

    // The method MoveView() changes the position of the view by adding the value 
    // aOffset to all corners of the view. For example, in case of a line view the 
    // value is added to the both line end points.
    // The parameter aFastMove serves for the optimization purpose. If it is 'true', 
    // the corners are modified without performing any updates of the view and without 
    // redrawing the screen. This is useful, when you wish to move or arrange a 
    // lot of views at once. In this case it's up to you to request the finally 
    // screen update. To do this you can use the method InvalidateArea() of the 
    // views @Owner.
    // In the case aFastMove == false, the operation automatically requests the 
    // screen redraw of the view areas before and after the movement. You don't 
    // need to take care about it.
    MoveView : function( aOffset, aFastMove )
    {
      if ( aFastMove )
      {
        this.Point1 = _app._MovePointPos( this.Point1, aOffset );
        this.Point2 = _app._MovePointPos( this.Point2, aOffset );
        this.Point3 = _app._MovePointPos( this.Point3, aOffset );
        this.Point4 = _app._MovePointPos( this.Point4, aOffset );
      }
      else
      {
        this.OnSetPoint1( _app._MovePointPos( this.Point1, aOffset ));
        this.OnSetPoint2( _app._MovePointPos( this.Point2, aOffset ));
        this.OnSetPoint3( _app._MovePointPos( this.Point3, aOffset ));
        this.OnSetPoint4( _app._MovePointPos( this.Point4, aOffset ));
      }
    },

    // The method GetExtent() returns the position and the size of the view relative 
    // to the origin of its @Owner. In case of views with a non rectangular shape 
    // the method returns the rectangular boundary area enclosing the entire shape.
    GetExtent : function()
    {
      if ( !!this.layoutContext && this.layoutContext.isEmpty )
        return _0001;

      var x1 = this.Point1[0];
      var y1 = this.Point1[1];
      var x2 = this.Point3[0];
      var y2 = this.Point3[1];

      if (((( this.Point4[0] !== x1 ) || ( this.Point2[1] !== y1 )) || ( this.Point2[0] 
          !== x2 )) || ( this.Point4[1] !== y2 ))
      {
        if ( this.Point2[0] < x1 )
          x1 = this.Point2[0];

        if ( this.Point3[0] < x1 )
          x1 = this.Point3[0];

        if ( this.Point4[0] < x1 )
          x1 = this.Point4[0];

        if ( this.Point2[1] < y1 )
          y1 = this.Point2[1];

        if ( this.Point3[1] < y1 )
          y1 = this.Point3[1];

        if ( this.Point4[1] < y1 )
          y1 = this.Point4[1];

        if ( this.Point1[0] > x2 )
          x2 = this.Point1[0];

        if ( this.Point2[0] > x2 )
          x2 = this.Point2[0];

        if ( this.Point4[0] > x2 )
          x2 = this.Point4[0];

        if ( this.Point1[1] > y2 )
          y2 = this.Point1[1];

        if ( this.Point2[1] > y2 )
          y2 = this.Point2[1];

        if ( this.Point4[1] > y2 )
          y2 = this.Point4[1];
      }
      else
      {
        var tmp;

        if ( x2 < x1 )
        {
          tmp = x1;
          x1 = x2;
          x2 = tmp;
        }

        if ( y2 < y1 )
        {
          tmp = y1;
          y1 = y2;
          y2 = tmp;
        }
      }

      return [ x1, y1, x2 + 1, y2 + 1 ];
    },

    // Implementation of the Chora method : 'Core::QuadView.OnSetPoint4()'
    OnSetPoint4 : function( value )
    {
      var _tmp;

      if ( _app._IsEqualPoint( value, this.Point4 ))
        return;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      this.layoutContext = null;
      this.Point4 = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      if (( !!this.Owner && (( this.viewState & 0x400 ) === 0x400 )) && !(( this.Owner.viewState 
          & 0x2000 ) === 0x2000 ))
      {
        this.viewState = this.viewState | 0x800;
        this.Owner.viewState = this.Owner.viewState | 0x4000;
        _app._PostSignal([ _tmp = this.Owner, _tmp.updateComponent ], this );
      }
    },

    // Implementation of the Chora method : 'Core::QuadView.OnSetPoint3()'
    OnSetPoint3 : function( value )
    {
      var _tmp;

      if ( _app._IsEqualPoint( value, this.Point3 ))
        return;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      this.layoutContext = null;
      this.Point3 = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      if (( !!this.Owner && (( this.viewState & 0x400 ) === 0x400 )) && !(( this.Owner.viewState 
          & 0x2000 ) === 0x2000 ))
      {
        this.viewState = this.viewState | 0x800;
        this.Owner.viewState = this.Owner.viewState | 0x4000;
        _app._PostSignal([ _tmp = this.Owner, _tmp.updateComponent ], this );
      }
    },

    // Implementation of the Chora method : 'Core::QuadView.OnSetPoint2()'
    OnSetPoint2 : function( value )
    {
      var _tmp;

      if ( _app._IsEqualPoint( value, this.Point2 ))
        return;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      this.layoutContext = null;
      this.Point2 = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      if (( !!this.Owner && (( this.viewState & 0x400 ) === 0x400 )) && !(( this.Owner.viewState 
          & 0x2000 ) === 0x2000 ))
      {
        this.viewState = this.viewState | 0x800;
        this.Owner.viewState = this.Owner.viewState | 0x4000;
        _app._PostSignal([ _tmp = this.Owner, _tmp.updateComponent ], this );
      }
    },

    // Implementation of the Chora method : 'Core::QuadView.OnSetPoint1()'
    OnSetPoint1 : function( value )
    {
      var _tmp;

      if ( _app._IsEqualPoint( value, this.Point1 ))
        return;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      this.layoutContext = null;
      this.Point1 = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.GetExtent());

      if (( !!this.Owner && (( this.viewState & 0x400 ) === 0x400 )) && !(( this.Owner.viewState 
          & 0x2000 ) === 0x2000 ))
      {
        this.viewState = this.viewState | 0x800;
        this.Owner.viewState = this.Owner.viewState | 0x4000;
        _app._PostSignal([ _tmp = this.Owner, _tmp.updateComponent ], this );
      }
    },

    // The method IsPointInside() verifies whether the specified position aPoint 
    // lies within the quad and returns 'true' if this is the case. If aPoint lies 
    // outside the quad, the method returns 'false'.
    IsPointInside : function( aPoint )
    {
      var points = _app._NewArray( 4, _app._NullPoint, null );
      var i = 0;
      var j = 3;
      var inside1 = false;
      var inside2 = false;

      points.Set( 0, this.Point1 );
      points.Set( 1, this.Point2 );
      points.Set( 2, this.Point3 );
      points.Set( 3, this.Point4 );

      while ( i < 4 )
      {
        var vert1X = points.Get( i )[0];
        var vert1Y = points.Get( i )[1];
        var vert2X = points.Get( j )[0];
        var vert2Y = points.Get( j )[1];

        if ((( vert1Y > aPoint[1]) !== ( vert2Y > aPoint[1])) || (( vert1Y < aPoint[1]) 
            !== ( vert2Y < aPoint[1])))
        {
          var x = (((( vert2X - vert1X ) * ( aPoint[1] - vert1Y )) / ( vert2Y - 
            vert1Y )) | 0 ) + vert1X;

          if ( aPoint[0] > x )
            inside1 = !inside1;

          if ( aPoint[0] < x )
            inside2 = !inside2;
        }

        j = i;
        i = i + 1;
      }

      return inside1 || inside2;
    },

    // The method HasRectShape() evaluates the shape of the quad and returns 'true' 
    // if the quad has the shape of a rectangle. Otherwise 'false' is returned.
    HasRectShape : function()
    {
      return (((( this.Point1[0] === this.Point4[0]) && ( this.Point2[0] === this.Point3[0])) 
        && ( this.Point1[1] === this.Point2[1])) && ( this.Point3[1] === this.Point4[1])) 
        || (((( this.Point1[0] === this.Point2[0]) && ( this.Point3[0] === this.Point4[0])) 
        && ( this.Point1[1] === this.Point4[1])) && ( this.Point2[1] === this.Point3[1]));
    },

    // Initializer for the class 'Core::QuadView'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.View._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.QuadView;
    },

    // Internal variables of this class.
    _className : "Core::QuadView"
  };

  // The class Core::RectView provides more specialized base functionality for all 
  // view components with the shape of a rectangle. It provides a property to get 
  // and set the coordinates of the rectangle @Bounds.
  // The class Core::RectView serves as base class for deriving rectangle components 
  // only. It doesn't define any particular behavior nor appearance.
  _unit.RectView =
  {
    // The property 'Bounds' defines the position and the size of the view in the 
    // coordinates of the corresponding @Owner.
    Bounds : _app._NullRect,

    // Implementation of the Chora method : 'Core::RectView.initLayoutContext()'
    initLayoutContext : function( aBounds, aOutline )
    {
      var context = _app._NewObject( _unit.LayoutContext, 0 );

      context.extent = this.Bounds;
      context.bounds = aBounds;
      context.outline = aOutline;
      this.layoutContext = context;
    },

    // The method ArrangeView() is invoked automatically if the superior @Owner 
    // group needs to re-arrange its views. For example, the changing of the owners 
    // size can cause the enclosed views to adapt their position and size, so all 
    // views still fit within the new owners area. This method provides the core 
    // functionality for the automatic GUI layout mechanism.
    // The arrangement is controlled primarily by the @Layout property of the view. 
    // It specifies a set of alignment constraints and determines whether the view 
    // can change its size. The bounds area where the view should be arranged, is 
    // passed in the parameter aBounds. This is usually the current area of the 
    // views owner.
    // The parameter aFormation defines the desired arrangement mode. Depending 
    // on the value of this parameter, the views can be arranged in rows or columns. 
    // If aFormation == Core::Formation.None, no automatic row/column arrangement 
    // is performed and the view is moved and scaled only to fit inside the aBounds 
    // area.
    // ArrangeView() is invoked automatically by the framework, so you never should 
    // need to invoke it directly.
    // The method returns the size of the view after it has been arranged.
    ArrangeView : function( aBounds, aFormation )
    {
      var _tmp;
      var layout = this.Layout;
      var context = this.layoutContext;
      var x1 = context.extent[0];
      var y1 = context.extent[1];
      var x2 = context.extent[2];
      var y2 = context.extent[3];
      var dstSize = [ aBounds[2] - aBounds[0], aBounds[3] - aBounds[1]];
      var w = x2 - x1;
      var h = y2 - y1;

      if ( !aFormation )
      {
        var srcSize = [( _tmp = context.bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]];

        x1 = x1 - context.bounds[0];
        y1 = y1 - context.bounds[1];

        if ( srcSize[0] !== dstSize[0])
        {
          var alignToLeft = (( layout & 0x4 ) === 0x4 );
          var alignToRight = (( layout & 0x8 ) === 0x8 );
          var resizeHorz = (( layout & 0x1 ) === 0x1 );

          if ( !alignToLeft && ( resizeHorz || !alignToRight ))
            x1 = (( x1 * dstSize[0]) / srcSize[0]) | 0;

          if ( !alignToRight && ( resizeHorz || !alignToLeft ))
          {
            x2 = x2 - context.bounds[0];
            x2 = (( x2 * dstSize[0]) / srcSize[0]) | 0;
            x2 = x2 - dstSize[0];
          }
          else
            x2 = x2 - context.bounds[2];

          x1 = x1 + aBounds[0];
          x2 = x2 + aBounds[2];

          if ( !resizeHorz )
          {
            if ( alignToLeft && !alignToRight )
              x2 = x1 + w;
            else
              if ( !alignToLeft && alignToRight )
                x1 = x2 - w;
              else
              {
                x1 = x1 + (((( x2 - x1 ) - w ) / 2 ) | 0 );
                x2 = x1 + w;
              }
          }
        }
        else
        {
          x2 = x2 - context.bounds[2];
          x1 = x1 + aBounds[0];
          x2 = x2 + aBounds[2];
        }

        if ( srcSize[1] !== dstSize[1])
        {
          var alignToTop = (( layout & 0x10 ) === 0x10 );
          var alignToBottom = (( layout & 0x20 ) === 0x20 );
          var resizeVert = (( layout & 0x2 ) === 0x2 );

          if ( !alignToTop && ( resizeVert || !alignToBottom ))
            y1 = (( y1 * dstSize[1]) / srcSize[1]) | 0;

          if ( !alignToBottom && ( resizeVert || !alignToTop ))
          {
            y2 = y2 - context.bounds[1];
            y2 = (( y2 * dstSize[1]) / srcSize[1]) | 0;
            y2 = y2 - dstSize[1];
          }
          else
            y2 = y2 - context.bounds[3];

          y1 = y1 + aBounds[1];
          y2 = y2 + aBounds[3];

          if ( !resizeVert )
          {
            if ( alignToTop && !alignToBottom )
              y2 = y1 + h;
            else
              if ( !alignToTop && alignToBottom )
                y1 = y2 - h;
              else
              {
                y1 = y1 + (((( y2 - y1 ) - h ) / 2 ) | 0 );
                y2 = y1 + h;
              }
          }
        }
        else
        {
          y2 = y2 - context.bounds[3];
          y1 = y1 + aBounds[1];
          y2 = y2 + aBounds[3];
        }
      }
      else
      {
        switch ( aFormation )
        {
          case 3 :
          {
            x1 = aBounds[0];
            x2 = x1 + w;
          }
          break;

          case 4 :
          {
            x2 = aBounds[2];
            x1 = x2 - w;
          }
          break;

          case 1 :
          {
            y1 = aBounds[1];
            y2 = y1 + h;
          }
          break;

          case 2 :
          {
            y2 = aBounds[3];
            y1 = y2 - h;
          }
          break;

          default :; 
        }

        if (( aFormation === 3 ) || ( aFormation === 4 ))
        {
          var alignToTop = (( layout & 0x10 ) === 0x10 );
          var alignToBottom = (( layout & 0x20 ) === 0x20 );
          var resizeVert = (( layout & 0x2 ) === 0x2 );

          if ( resizeVert )
          {
            y1 = aBounds[1];
            y2 = aBounds[3];
          }
          else
            if ( alignToTop && !alignToBottom )
            {
              y1 = aBounds[1];
              y2 = y1 + h;
            }
            else
              if ( alignToBottom && !alignToTop )
              {
                y2 = aBounds[3];
                y1 = y2 - h;
              }
              else
              {
                y1 = aBounds[1] + (((( aBounds[3] - aBounds[1]) - h ) / 2 ) | 0 );
                y2 = y1 + h;
              }
        }

        if (( aFormation === 1 ) || ( aFormation === 2 ))
        {
          var alignToLeft = (( layout & 0x4 ) === 0x4 );
          var alignToRight = (( layout & 0x8 ) === 0x8 );
          var resizeHorz = (( layout & 0x1 ) === 0x1 );

          if ( resizeHorz )
          {
            x1 = aBounds[0];
            x2 = aBounds[2];
          }
          else
            if ( alignToLeft && !alignToRight )
            {
              x1 = aBounds[0];
              x2 = x1 + w;
            }
            else
              if ( alignToRight && !alignToLeft )
              {
                x2 = aBounds[2];
                x1 = x2 - w;
              }
              else
              {
                x1 = aBounds[0] + (((( aBounds[2] - aBounds[0]) - w ) / 2 ) | 0 );
                x2 = x1 + w;
              }
        }
      }

      context.isEmpty = ( x1 >= x2 ) || ( y1 >= y2 );

      if ((( this.viewState & 0x100 ) === 0x100 ))
        this.Bounds = [ x1, y1, x2, y2 ];
      else
      {
        this.OnSetBounds([ x1, y1, x2, y2 ]);
        this.layoutContext = context;
      }

      return [ x2 - x1, y2 - y1 ];
    },

    // The method MoveView() changes the position of the view by adding the value 
    // aOffset to all corners of the view. For example, in case of a line view the 
    // value is added to the both line end points.
    // The parameter aFastMove serves for the optimization purpose. If it is 'true', 
    // the corners are modified without performing any updates of the view and without 
    // redrawing the screen. This is useful, when you wish to move or arrange a 
    // lot of views at once. In this case it's up to you to request the finally 
    // screen update. To do this you can use the method InvalidateArea() of the 
    // views @Owner.
    // In the case aFastMove == false, the operation automatically requests the 
    // screen redraw of the view areas before and after the movement. You don't 
    // need to take care about it.
    MoveView : function( aOffset, aFastMove )
    {
      if ( aFastMove )
        this.Bounds = _app._MoveRectPos( this.Bounds, aOffset );
      else
        this.OnSetBounds( _app._MoveRectPos( this.Bounds, aOffset ));
    },

    // The method GetExtent() returns the position and the size of the view relative 
    // to the origin of its @Owner. In case of views with a non rectangular shape 
    // the method returns the rectangular boundary area enclosing the entire shape.
    GetExtent : function()
    {
      return this.Bounds;
    },

    // Implementation of the Chora method : 'Core::RectView.OnSetBounds()'
    OnSetBounds : function( value )
    {
      var _tmp;

      if ( _app._IsEqualRect( value, this.Bounds ))
        return;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );

      this.layoutContext = null;
      this.Bounds = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );

      if (( !!this.Owner && (( this.viewState & 0x400 ) === 0x400 )) && !(( this.Owner.viewState 
          & 0x2000 ) === 0x2000 ))
      {
        this.viewState = this.viewState | 0x800;
        this.Owner.viewState = this.Owner.viewState | 0x4000;
        _app._PostSignal([ _tmp = this.Owner, _tmp.updateComponent ], this );
      }
    },

    // Initializer for the class 'Core::RectView'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.View._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.RectView;
    },

    // Internal variables of this class.
    _className : "Core::RectView"
  };

  // The class Core::Group provides the base functionality for all kinds of complex 
  // GUI components, like the push button, the slider or the entire menu panel. 
  // All user defined GUI components do descend from this class.
  // Groups serve as containers for other views. They are able to manage any number 
  // of enclosed views, to arrange these views, to redraw them automatically and 
  // to deliver user input events to the views. They act as the unique @Owner of 
  // the enclosed views. At the same time the groups borderline determines the area 
  // where its views can appear. Parts of views lying outside this @Bounds area 
  // are clipped and not visible.
  // Each group defines its own coordinate system starting with the origin <0,0> 
  // at the top-left corner of the group. All views enclosed within the group are 
  // placed relatively to this origin. Moving a group automatically moves the corresponding 
  // coordinate system and thus the enclosed views. You don't need to take care 
  // about it.
  // Since the Core::Group class descends from the very basic ordinary Core::View 
  // class, groups can be enclosed within other groups, by what nesting of GUI components 
  // is possible. For example, several push button components can be enclosed within 
  // a superior menu component in order to design a more complex component. It's 
  // up to you to compose these view hierarchies.
  // The interface of the Core::Group class provides a wide range of methods and 
  // some properties to control the group and the enclosed views. For example:
  // - The list of enclosed views is controlled by the methods @Add(), @Remove() 
  // and @Restack(). These methods allow you to insert new views to the group, to 
  // remove existing views from the group or to change the so-called Z-order of 
  // views - the order determining which view lies in the front and which in the 
  // background of the group.
  // - More sophisticated: with the method @FadeGroup() animated transitions to 
  // add and fade-in or to fade-out and remove a GUI component within 'this' component 
  // can be scheduled.
  // - To find and enumerate the enclosed views, the methods like @FindNextView(), 
  // @FindPrevView(), @FindViewAtPosition, @FindViewInDirection() or @GetViewAtIndex() 
  // are available. 
  // - Although the screen redraw is performed automatically by the framework, the 
  // method InvalidateArea() can be used to request an explicit screen update for 
  // the given area of the group. Furthermore, by overriding the methods @DrawBackground() 
  // and @DrawForeground() the descending class can implement additional code to 
  // draw the areas behind and in front of the enclosed views programmatically.
  // - If the size of the group changes, all enclosed views are arranged automatically 
  // accordingly to their @Layout properties. If more sophisticated arrangement 
  // is desired the method @UpdateLayout() can be overridden and filled with the 
  // appropriate logic to calculate the position and size of views. If your application 
  // case it requires, you can trigger the layout update explicitly by invoking 
  // the method @InvalidateLayout().
  // - Although the delivery of user input events to the views is performed automatically 
  // by the framework, the both methods @DispatchEvent() and @BroadcastEvent() can 
  // be used to feed the group and its views with any additional user defined events.
  // - The visibility of the group and thus the visibility of all enclosed views 
  // is controlled by the properties @Visible, @AlphaBlended, @Opacity and @Embedded. 
  // In particular the property @Embedded can determine whether the corresponding 
  // GUI component is limited (== embedded) to the boundary of a sibling Core::Outline 
  // view or not. The embedding of views within a Core::Outline allows a kind of 
  // sub-groups within the group itself. Very useful for any kind of scrollable 
  // lists, menus, etc.
  // - The property @Buffered controls whether the group should store its aspect 
  // in an off-screen bitmap. This feature is useful when e.g. the entire group 
  // should be animated - it can avoid superfluous redrawing of the groups content. 
  // Other advantage of this feature is the possibility to replicate the aspect 
  // of a group within a Views::Group or Views::WarpGroup view. With other words, 
  // several copies of the group aspect can be shown on the screen. Useful for many 
  // fade-in, 2D/3D warp or mirror visual effects.
  // - Other useful feature is the centralized and uniform update of the GUI state. 
  // Usually every GUI component does store its current state, like the states 'on' 
  // or 'off' in case of a toggle switch component. This state can change at the 
  // runtime e.g. in response to the user interaction. To handle this state alteration 
  // the method @UpdateViewState() can be overridden and filled with the desired 
  // logic to reflect the current state in the appearance of the GUI component. 
  // In this manner the entire state update is located in a single method. This 
  // method will be invoked automatically by the framework. Optionally you can request 
  // its invocation by using the method @InvalidateViewState().
  // - The class Core::Group implements a powerful infrastructure permitting simple 
  // presentation and dismissing of GUI components in context of 'this' component 
  // similarly to the concepts of 'alert panels', 'message boxes' or 'dialogs' known 
  // from other GUI frameworks. Internally, every instance of Core::Group manages 
  // a stack with all dialog components belonging actually to it. The dialog component 
  // on top of the stack is considered as the active dialog - the dialog, the user 
  // may interact with. Other dialogs lying in the background are automatically 
  // deactivated and they are suppressed from being able to receive and process 
  // user inputs. New dialogs are presented by using the method @PresentDialog(). 
  // With the method @SwitchToDialog() you can replace the actually active dialog 
  // by another one. Finally, with the method @DismissDialog() one of the actually 
  // presented dialogs can be dismissed again. Every of these operations can be 
  // performed with animation transitions, you specify in the parameters when invoking 
  // the respective method.
  // - If using the above described infrastructure to manage dialogs, you can use 
  // the methods @IsDialog(), @IsActiveDialog() and @IsCurrentDialog() to verify 
  // whether the affected GUI component is actually, just in this moment a dialog 
  // presented within another GUI component, whether it is an active dialog or even 
  // the current dialog. Knowing this is essential to estimate the actual state 
  // of the GUI application, even if the dialogs appear or disappear with animations. 
  // With the methods @CountDialogs(), @GetDialogAtIndex(), @GetIndexOfDialog() 
  // you can simply evaluate and traverse the stack of dialog components existing 
  // actually in context of 'this' GUI component. With the method @FindCurrentDialog() 
  // you can search in 'this' component and all subordinated dialog components for 
  // the dialog which is the current one. The both methods @FindDialogByClass() 
  // and @FindActiveDialogByClass() are convenient to search in 'this' component 
  // and all subordinated dialog components for the dialog, which is an instance 
  // of a specified component class.
  _unit.Group =
  {
    first : null,
    last : null,
    keyHandlers : null,
    buffer : null,
    dialogStack : null,
    fadersQueue : null,
    pendingFader : null,

    // The property 'Focus' selects the view to which the component should forward 
    // all keyboard events. If a keyboard event arrives to the component, the event 
    // is first propagated to this selected view before the component can handle 
    // it.
    // In a hierarchy of nested components, their @Focus properties will establish 
    // a kind of focus path which leads directly from the application object to 
    // the current keyboard event receiver view. In this context all views along 
    // this focus path are 'focused' and able to react to keyboard events.
    // The @Focus property affects the state of the selected view. The view will 
    // obtain the state Core::ViewState.Selected. Views really belonging to the 
    // focus path are additionally signed with the state Core::ViewState.Focused. 
    // These states can be evaluated in the views implementation of the @UpdateViewState() 
    // method. For example, the method can highlight the view if it is focused.
    // Please note, it is not possible to select a view which is not able to react 
    // to keyboard events. Whether a view is able or not is determined by its property 
    // @Enabled. If this property changes for the currently selected view, the framework 
    // will automatically select other able sibling view.
    Focus : null,

    // The property 'Opacity' controls the translucence of the component. This property 
    // can take values in range of 0 .. 255. If the value is 255, the component 
    // will appear with its full opacity. The value equal to zero results in a fully 
    // transparent component. Other values in the range 1 .. 254 show a semitransparent 
    // component.
    Opacity : 255,

    // The method Init() is invoked automatically after the component has been created. 
    // This method can be overridden and filled with logic containing additional 
    // initialization statements.
    Init : function( aArg )
    {
      this.InvalidateViewState();
    },

    // Implementation of the Chora method : 'Core::Group.Draw()'
    Draw : function( aCanvas, aClip, aOffset, aOpacity, aBlend )
    {
      var _tmp;

      aOpacity = (( aOpacity + 1 ) * this.Opacity ) >> 8;
      aBlend = aBlend && (( this.viewState & 0x2 ) === 0x2 );

      if ( !this.buffer )
        this.drawContent( aCanvas, aClip, _app._MovePointPos( aOffset, this.Bounds.slice(0,2)), 
        aOpacity, aBlend );
      else
      {
        var c = 255 | ( 255 << 8 ) | ( 255 << 16 ) | (( aOpacity & 0xFF ) << 24 );

        this.buffer.Update();
        aCanvas.CopyBitmap( aClip, this.buffer, 0, _app._MoveRectPos( this.Bounds, 
        aOffset ), _0000, c, c, c, c, aBlend );
      }
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
      var view = this.last;
      var found = null;
      var area = _0001;
      var form = null;
      var lock = !!this.fadersQueue && ( !!this.fadersQueue.current || !!this.fadersQueue.first );

      if ((( _tmp = _app._IntersectRect( aArea, this.Bounds ))[0] >= _tmp[2]) || 
          ( _tmp[1] >= _tmp[3]))
        return null;

      aArea = _app._MoveRectNeg( aArea, this.Bounds.slice(0,2));

      while ( !!view )
      {
        if ((( view.viewState & 0x400 ) === 0x400 ) && !form )
        {
          form = view.prev;

          while ( !!form && !(( form.viewState & 0x200 ) === 0x200 ))
            form = form.prev;

          if ( !!form )
            area = _app._IntersectRect( aArea, form.GetExtent());
          else
            area = _0001;
        }

        if ( form === view )
        {
          form = null;
          area = _0001;
        }

        if (((((( view.viewState & 0x8 ) === 0x8 ) && (( view.viewState & 0x10 ) 
            === 0x10 )) && !(( view.viewState & 0x40000 ) === 0x40000 )) && !(( 
            view.viewState & 0x20000 ) === 0x20000 )) && ( !(( view.viewState & 
            0x10000 ) === 0x10000 ) || (( this.dialogStack.group === view ) && !lock )))
        {
          var extent = view.GetExtent();
          var dedicatedView = aDedicatedView;
          var cursorHit = null;

          if ( dedicatedView === view )
            dedicatedView = null;

          if ((( view.viewState & 0x400 ) === 0x400 ))
          {
            if ( !((( _tmp = _app._IntersectRect( extent, area ))[0] >= _tmp[2]) 
                || ( _tmp[1] >= _tmp[3])))
              cursorHit = view.CursorHitTest( area, aFinger, aStrikeCount, dedicatedView, 
              aRetargetReason );
          }
          else
            if ( !((( _tmp = _app._IntersectRect( extent, aArea ))[0] >= _tmp[2]) 
                || ( _tmp[1] >= _tmp[3])) || ( aDedicatedView === view ))
              cursorHit = view.CursorHitTest( aArea, aFinger, aStrikeCount, dedicatedView, 
              aRetargetReason );

          view = view.prev;

          if ( !!cursorHit )
          {
            if ( !found || (( cursorHit.Deviation < found.Deviation ) && ( cursorHit.Deviation 
                >= 0 )))
              found = cursorHit;

            if ( !cursorHit.Deviation )
              view = null;
          }
        }
        else
          view = view.prev;
      }

      return found;
    },

    // The method ChangeViewState() modifies the current state of the view. The 
    // state is a set of switches determining whether a view is visible, whether 
    // it can react to user inputs or whether it is just performing some update 
    // operations, etc.
    // The modification is controlled by the the both parameters. The first aSetState 
    // contains the switches to activate within the view state. The second aClearState 
    // determines all switches to disable.
    // Depending on the state alteration the method will perform different operations, 
    // e.g. in response to the clearing of the visible state, the method will request 
    // a screen redraw to make disappear the view from the screen.
    // ChangeViewState() is invoked automatically by the framework, so you never 
    // should need to invoke it directly. All relevant states are available as properties 
    // e.g. the property Visible in derived classes reflects the visible state of 
    // the view.
    ChangeViewState : function( aSetState, aClearState )
    {
      var _tmp;
      var oldState = this.viewState;

      _unit.RectView.ChangeViewState.call( this, aSetState, aClearState );

      var deltaState = this.viewState ^ oldState;

      if ( !!this.Focus && (( deltaState & 0x40 ) === 0x40 ))
      {
        if ((( this.viewState & 0x40 ) === 0x40 ))
          this.Focus.ChangeViewState( 0x40, 0x0 );
        else
          this.Focus.ChangeViewState( 0x0, 0x40 );
      }

      if ( !!this.dialogStack && (( deltaState & 0x40 ) === 0x40 ))
      {
        if ((( this.viewState & 0x40 ) === 0x40 ) && (( this.dialogStack.group.viewState 
            & 0x14 ) === 0x14 ))
          this.dialogStack.group.ChangeViewState( 0x40, 0x0 );
        else
          this.dialogStack.group.ChangeViewState( 0x0, 0x40 );
      }

      if ( !!deltaState )
      {
        this.viewState = this.viewState | 0x8000;
        _app._PostSignal([ this, this.updateComponent ], this );
      }
    },

    // Implementation of the Chora method : 'Core::Group.OnSetBounds()'
    OnSetBounds : function( value )
    {
      var _tmp;

      if ( _app._IsEqualRect( value, this.Bounds ))
        return;

      var oldSize = [( _tmp = this.Bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]];
      var newSize = [ value[2] - value[0], value[3] - value[1]];
      var resize = !_app._IsEqualPoint( oldSize, newSize );

      if ( resize && !!this.buffer )
      {
        this.buffer.OnSetFrameSize( newSize );
        _app._NotifyObjObservers( this, 0 );
        _app._NotifyObjObservers( this.buffer, 0 );
      }

      _unit.RectView.OnSetBounds.call( this, value );

      if (( resize && ( oldSize[0] > 0 )) && ( oldSize[1] > 0 ))
      {
        var bounds = [].concat( _0000, oldSize );
        var view = this.first;

        while ( !!view )
        {
          if (( !view.layoutContext && ( view.Layout !== 0x14 )) && !(( view.viewState 
              & 0x400 ) === 0x400 ))
            view.initLayoutContext( bounds, null );

          view = view.next;
        }
      }

      if ( resize )
      {
        this.viewState = this.viewState | 0x5000;
        _app._PostSignal([ this, this.updateComponent ], this );
      }
    },

    // Implementation of the Chora method : 'Core::Group.processKeyHandlers()'
    processKeyHandlers : function( aEvent )
    {
      var keyEvent = ( _unit.KeyEvent.isPrototypeOf( aEvent )? aEvent : null );
      var handler = this.keyHandlers;

      if ( !keyEvent )
        return null;

      while ( !!handler && !handler.HandleEvent( keyEvent ))
        handler = handler.next;

      return handler;
    },

    // Implementation of the Chora method : 'Core::Group.updateBufferSlot()'
    updateBufferSlot : function( sender )
    {
      if ( !!this.buffer )
      {
        this.buffer.FillRectangle( this.buffer.InvalidArea, this.buffer.InvalidArea, 
        0x00000000, 0x00000000, 0x00000000, 0x00000000, false );
        this.drawContent( this.buffer, this.buffer.InvalidArea, _0000, 255, true );
      }
    },

    // Implementation of the Chora method : 'Core::Group.drawContent()'
    drawContent : function( aCanvas, aClip, aOffset, aOpacity, aBlend )
    {
      var _tmp;
      var view = this.first;
      var clip = _0001;
      var outlineVisible = true;

      this.DrawBackground( aCanvas, aClip, aOffset, aOpacity, aBlend );

      while ( !!view )
      {
        if ((( view.viewState & 0x200 ) === 0x200 ))
        {
          var outlineView = ( _unit.Outline.isPrototypeOf( view )? view : null );

          clip = _app._IntersectRect( aClip, _app._MoveRectPos( outlineView.Bounds, 
          aOffset ));
          outlineVisible = (( outlineView.viewState & 0x1 ) === 0x1 );
        }

        if ((( view.viewState & 0x1 ) === 0x1 ))
        {
          if ((( view.viewState & 0x400 ) === 0x400 ))
          {
            if ( outlineVisible )
            {
              var area = _app._IntersectRect( _app._MoveRectPos( view.GetExtent(), 
                aOffset ), clip );

              if ( !(( area[0] >= area [2]) || ( area[1] >= area [3])))
                view.Draw( aCanvas, area, aOffset, aOpacity, aBlend );
            }
          }
          else
          {
            var area = _app._IntersectRect( _app._MoveRectPos( view.GetExtent(), 
              aOffset ), aClip );

            if ( !(( area[0] >= area [2]) || ( area[1] >= area [3])))
              view.Draw( aCanvas, area, aOffset, aOpacity, aBlend );
          }
        }

        view = view.next;
      }

      this.DrawForeground( aCanvas, aClip, aOffset, aOpacity, aBlend );
    },

    // Implementation of the Chora method : 'Core::Group.recalculateLayout()'
    recalculateLayout : function()
    {
      var _tmp;
      var groupLayout = (( this.viewState & 0x1000 ) === 0x1000 );
      var groupBounds = [ 0, 0, ( _tmp = this.Bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]];
      var formLayout = false;
      var formBounds = _0001;
      var formBounds2 = _0001;
      var view = this.last;
      var form = null;

      while ( !!view )
      {
        if ((( view.viewState & 0x800 ) === 0x800 ))
        {
          formLayout = true;
          view.viewState = view.viewState & ~0x800;
        }

        if ( formLayout && (( view.viewState & 0x200 ) === 0x200 ))
          formLayout = false;

        view = view.prev;
      }

      formLayout = false;
      view = this.first;

      if ( groupLayout )
      {
        this.viewState = this.viewState & ~0x1000;
        groupLayout = !(( groupBounds[0] >= groupBounds [2]) || ( groupBounds[1] 
        >= groupBounds [3]));
      }

      this.viewState = this.viewState | 0x2000;

      while ( !!view )
      {
        if ((( view.viewState & 0x400 ) === 0x400 ))
        {
          if ( !!view.layoutContext && ( view.layoutContext.outline !== form ))
            view.layoutContext = null;

          if (( !view.layoutContext && formLayout ) && ( view.Layout !== 0x14 ))
            view.initLayoutContext( formBounds2, form );
        }

        if ( !!view.layoutContext )
        {
          if ( groupLayout && !(( view.viewState & 0x400 ) === 0x400 ))
            view.ArrangeView( groupBounds, 0 );

          if ( formLayout && (( view.viewState & 0x400 ) === 0x400 ))
            view.ArrangeView( formBounds2, 0 );
        }

        if ((( view.viewState & 0x200 ) === 0x200 ))
        {
          formLayout = (( view.viewState & 0x1000 ) === 0x1000 );
          form = ( _unit.Outline.isPrototypeOf( view )? view : null );

          if ( formLayout )
          {
            view.viewState = view.viewState & ~0x1000;
            formBounds = form.Bounds;
            formBounds2 = formBounds;
            formLayout = !(( formBounds[0] >= formBounds [2]) || ( formBounds[1] 
            >= formBounds [3]));
          }

          if ( formLayout )
            this.InvalidateArea( form.Bounds );
        }

        view = view.next;
      }

      this.viewState = this.viewState & ~0x2000;
      this.UpdateLayout([ groupBounds[2] - groupBounds[0], groupBounds[3] - groupBounds[1]]);
    },

    // Implementation of the Chora method : 'Core::Group.updateComponent()'
    updateComponent : function( sender )
    {
      var _tmp;
      var updateLayout = (( this.viewState & 0x1000 ) === 0x1000 );

      if ((( this.viewState & 0x4000 ) === 0x4000 ))
      {
        this.viewState = this.viewState & ~0x4000;
        this.recalculateLayout();
      }

      if ((( this.viewState & 0x8000 ) === 0x8000 ) || updateLayout )
      {
        this.viewState = this.viewState & ~0x8000;
        this.UpdateViewState( this.viewState );
      }
    },

    // Implementation of the Chora method : 'Core::Group.OnSetFocus()'
    OnSetFocus : function( value )
    {
      var _tmp;

      if ( !!value && ( value.Owner !== this ))
        throw new Error(  _0002  );

      if ( !!value && !(( value.viewState & 0x14 ) === 0x14 ))
        value = null;

      if ( !!value && (( value.viewState & 0x10000 ) === 0x10000 ))
        value = null;

      if ( value === this.Focus )
        return;

      if ( !!this.Focus )
        this.Focus.ChangeViewState( 0x0, 0x60 );

      this.Focus = value;

      if ( !!value )
      {
        if ((( this.viewState & 0x40 ) === 0x40 ))
          value.ChangeViewState( 0x60, 0x0 );
        else
          value.ChangeViewState( 0x20, 0x0 );
      }
    },

    // Implementation of the Chora method : 'Core::Group.OnGetBuffered()'
    OnGetBuffered : function()
    {
      return !!this.buffer;
    },

    // Implementation of the Chora method : 'Core::Group.OnSetBuffered()'
    OnSetBuffered : function( value )
    {
      var _tmp;

      if ( !!this.buffer === value )
        return;

      if ( value )
      {
        this.buffer = _app._NewObject( _app.Graphics.Canvas, 0 );
        this.buffer.OnSetFrameSize([( _tmp = this.Bounds )[2] - _tmp[0], _tmp[3] 
        - _tmp[1]]);
        this.buffer.OnDraw = [ this, this.updateBufferSlot ];
      }
      else
      {
        this.buffer.OnDraw = null;
        this.buffer.OnSetFrameSize( _0000 );
        this.buffer = null;
      }

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );

      _app._NotifyObjObservers( this, 0 );
    },

    // Implementation of the Chora method : 'Core::Group.OnSetEnabled()'
    OnSetEnabled : function( value )
    {
      if ( value )
        this.ChangeViewState( 0x10, 0x0 );
      else
        this.ChangeViewState( 0x0, 0x10 );
    },

    // Implementation of the Chora method : 'Core::Group.OnSetOpacity()'
    OnSetOpacity : function( value )
    {
      var _tmp;

      if ( value > 255 )
        value = 255;

      if ( value < 0 )
        value = 0;

      if ( value === this.Opacity )
        return;

      this.Opacity = value;

      if ( !!this.Owner && (( this.viewState & 0x1 ) === 0x1 ))
        this.Owner.InvalidateArea( this.Bounds );
    },

    // Wrapper for the method : 'Core::Group.OnSetOpacity'
    __OnSetOpacity : function(v){ this.OnSetOpacity(v);},

    // Implementation of the Chora method : 'Core::Group.OnSetAlphaBlended()'
    OnSetAlphaBlended : function( value )
    {
      if ( value )
        this.ChangeViewState( 0x2, 0x0 );
      else
        this.ChangeViewState( 0x0, 0x2 );
    },

    // Implementation of the Chora method : 'Core::Group.OnGetVisible()'
    OnGetVisible : function()
    {
      var _tmp;

      return (( this.viewState & 0x1 ) === 0x1 );
    },

    // Implementation of the Chora method : 'Core::Group.OnSetVisible()'
    OnSetVisible : function( value )
    {
      if ( value )
        this.ChangeViewState( 0x1, 0x0 );
      else
        this.ChangeViewState( 0x0, 0x1 );
    },

    // The method DrawForeground() is invoked automatically if parts of the GUI 
    // component should be redrawn on the screen. This can occur when e.g. the component 
    // has been moved or the appearance of the enclosed views has changed before.
    // DrawForeground() is invoked after all other views existing inside the component 
    // are drawn. Thus it can be used to implement sophisticated foreground drawing 
    // operations. By overriding this method in a descending class the desired drawing 
    // operations can be implemented individually.
    // This method is invoked by the framework, so you never will need to invoke 
    // this method directly. However you can request an invocation of this method 
    // by calling the method @InvalidateArea().
    // The passed parameters determine the drawing destination aCanvas and the area 
    // to redraw aClip in the coordinate space of the canvas. The parameter aOffset 
    // contains the displacement between the origin of the GUI component and the 
    // origin of the canvas. You will need it to convert the drawing coordinates 
    // into these of the canvas.
    // The parameter aOpacity contains the resulting @Opacity value to apply on 
    // the drawn contents. It lies in range 0 .. 255. The parameter aBlend contains 
    // the resulting @AlphaBlended mode to apply. It determines, whether the drawing 
    // operations should be performed with alpha-blending active or not. If aBlend 
    // is false, the drawn contents should overwrite the corresponding pixel in 
    // the drawing destination aCanvas. If aBlend is true, the outputs should be 
    // mixed with the pixel already stored in aCanvas. For this purpose all Graphics 
    // Engine functions provide a parameter to specify the mode for the respective 
    // drawing operation.
    // Please note also the method @DrawBackground(), which is invoked before the 
    // views belonging to the component have begun their drawing operations.
    DrawForeground : function( aCanvas, aClip, aOffset, aOpacity, aBlend )
    {
    },

    // The method DrawBackground() is invoked automatically if parts of the GUI 
    // component should be redrawn on the screen. This can occur when e.g. the component 
    // has been moved or the appearance of the enclosed views has changed before.
    // DrawBackground() is invoked before all other views existing inside the component 
    // are drawn. Thus it can be used to implement sophisticated background filling 
    // operations. By overriding this method in a descending class the desired drawing 
    // operations can be implemented individually.
    // This method is invoked by the framework, so you never will need to invoke 
    // this method directly. However you can request an invocation of this method 
    // by calling the method @InvalidateArea().
    // The passed parameters determine the drawing destination aCanvas and the area 
    // to redraw aClip in the coordinate space of the canvas. The parameter aOffset 
    // contains the displacement between the origin of the GUI component and the 
    // origin of the canvas. You will need it to convert the drawing coordinates 
    // into these of the canvas.
    // The parameter aOpacity contains the resulting @Opacity value to apply on 
    // the drawn contents. It lies in range 0 .. 255. The parameter aBlend contains 
    // the resulting @AlphaBlended mode to apply. It determines, whether the drawing 
    // operations should be performed with alpha-blending active or not. If aBlend 
    // is false, the drawn contents should overwrite the corresponding pixel in 
    // the drawing destination aCanvas. If aBlend is true, the outputs should be 
    // mixed with the pixel already stored in aCanvas. For this purpose all Graphics 
    // Engine functions provide a parameter to specify the mode for the respective 
    // drawing operation.
    // Please note also the method @DrawForeground(), which is invoked after all 
    // views belonging to the component have finalized their drawing operations.
    DrawBackground : function( aCanvas, aClip, aOffset, aOpacity, aBlend )
    {
    },

    // The method GetMinimalSize() provides a common interface to ask the component 
    // for the minimum possible size it can assume by still correctly displaying 
    // the contents enclosed inside it. This information can thereupon be used in 
    // complex layout application cases to equally adjust multiple components, etc.
    // 
    // The default implementation of this method does nothing and returns <0,0> 
    // value. If necessary, you can override the method and implement an algorithm 
    // to calculate from the actual content of the GUI component its minimum size. 
    // For example, if the component displays some text, the calculation can take 
    // in account the space needed for this text.
    GetMinimalSize : function()
    {
      return _0000;
    },

    // The method SwitchToDialog() schedules an operation to show in context of 
    // 'this' component another component passed in the parameter aDialogGroup. 
    // The operation to show the component is performed with an animation specified 
    // in the parameter aPresentTransition. If the parameter aPresentTransition 
    // is 'null', the show operation uses the default transition presenting the 
    // new dialog component instantly in the center of 'this' component without 
    // performing any smooth animation effects. Calling the method SwitchToDialog() 
    // causes the new dialog component to replace the entry on top of an internal 
    // stack containing all dialogs existing at the moment in context of 'this' 
    // owner component. The dialog component on top of the stack is considered as 
    // the active dialog - the dialog, the user may interact with. Other dialogs 
    // lying in the background are automatically deactivated and they are suppressed 
    // from being able to receive and process user inputs. If not needed anymore, 
    // the dialog component can be hidden again by calling the method @DismissDialog() 
    // or SwitchToDialog(), which causes the corresponding dialog stack entry to 
    // be removed or replaced. Accordingly, with the method @PresentDialog() new 
    // dialog component can be pushed on top of this stack overlaying all other 
    // dialogs in the background. If there was already an active dialog component 
    // presented in context of 'this' owner, this old component looses its active 
    // state and it is dismissed.
    // With the parameter aDismissTransition you can specify the animation to perform 
    // when the just presented dialog component is dismissed again, which is caused 
    // when calling the method @DismissDialog() or SwitchToDialog(). If the parameter 
    // aDismissTransition is 'null', the dialog will disappear with the same transition 
    // as used to show it (resulting from the parameter aPresentTransition).
    // With the parameter aOverlayTransition you determine an optional animation 
    // to apply on the just presented component when a further dialog component 
    // is presented overlying it (by using the method @PresentDialog()). In this 
    // way you can control, whether and how the component should disappear when 
    // a new component is presented above it. With the parameter aRestoreTransition 
    // you specify the opposite animation to perform when after dismissing the overlaying 
    // component, the component in the background becomes active again.
    // Usually, when presenting a new component by using the method SwitchToDialog(), 
    // the previously presented component disappears with the dismiss transition 
    // specified at its own presentation time (see the parameter aDismissTransition). 
    // This behavior can be overridden by specifying in the parameter aOverrideDismissTransition 
    // other animation to hide the old component.
    // Switching the dialog in foreground may affect the visibility state of the 
    // dialog component lying further in the background. In particular, the component 
    // in the background will schedule a restore transition as expected to be after 
    // the dialog in foreground is dismissed, and an overlay transition as resulting 
    // from the just presented new dialog component. Which transitions are performed 
    // results primarily from the parameters aOverlayTransition and aRestoreTransition 
    // specified at the presentation time of the background dialog component and 
    // the parameter aOverrideRestoreTransition specified at the presentation time 
    // of the overlaying (just dismissed) dialog component. Furthermore, you can 
    // override this behavior by specifying other animations in the parameters aOverrideOverlayTransition 
    // and aOverrideRestoreTransition in the invocation of the method SwitchToDialog().
    // The both parameters aComplete and aCancel can be provided with references 
    // to slot methods, which are signaled as soon as the present operation is finished 
    // (aComplete) or it has been canceled (aCancel) due to other transition being 
    // scheduled for the same GUI component aDialogGroup making the actual operation 
    // obsolete.
    // The present operation is enqueued, so calling SwitchToDialog(), @PresentDialog() 
    // and @DismissDialog() several times in sequence for different components in 
    // context of 'this' owner component causes the resulting transitions to be 
    // executed strictly one after another. This behavior can be changed by passing 
    // the value 'true' in the parameter aCombine. In this case, the new operation 
    // will be executed together with last prepared but not yet started operation. 
    // In this manner several independent transitions can run simultaneously.
    SwitchToDialog : function( aDialogGroup, aPresentTransition, aDismissTransition, 
      aOverlayTransition, aRestoreTransition, aOverrideDismissTransition, aOverrideOverlayTransition, 
      aOverrideRestoreTransition, aComplete, aCancel, aCombine )
    {
      var _tmp;

      if ( !this.dialogStack )
      {
        this.PresentDialog( aDialogGroup, aPresentTransition, aDismissTransition, 
        aOverlayTransition, aRestoreTransition, null, null, aComplete, aCancel, 
        aCombine );

        return;
      }

      var oldDialog = this.dialogStack;
      var nextDialog = oldDialog.next;

      if ((( aDialogGroup.viewState & 0x10000 ) === 0x10000 ) && ( this.dialogStack.group 
          !== aDialogGroup ))
        throw new Error(  _0003  );

      var newDialog = _app._NewObject( _unit.DialogContext, 0 );
      var dismissTransition = oldDialog.dismissTransition;
      var restoreTransition = null;
      var overlayTransition = null;

      if ( !!nextDialog )
      {
        restoreTransition = nextDialog.restoreTransition;
        overlayTransition = nextDialog.overlayTransition;
      }

      if ( !!nextDialog && !!oldDialog.overrideRestoreTransition )
        restoreTransition = oldDialog.overrideRestoreTransition;

      if ( !!nextDialog && !!aOverrideOverlayTransition )
        overlayTransition = aOverrideOverlayTransition;

      if ( !!aOverrideDismissTransition )
        dismissTransition = aOverrideDismissTransition;

      if ( !aPresentTransition )
        aPresentTransition = _app._GetAutoObject( _app.Effects.ShowHideCentered );

      if ( !aDismissTransition )
        aDismissTransition = aPresentTransition;

      if ( !aRestoreTransition )
        aRestoreTransition = aOverlayTransition;

      if ( !aOverlayTransition )
        aOverlayTransition = aRestoreTransition;

      newDialog.dismissTransition = aDismissTransition;
      newDialog.overlayTransition = aOverlayTransition;
      newDialog.restoreTransition = aRestoreTransition;
      newDialog.overrideRestoreTransition = aOverrideRestoreTransition;
      newDialog.group = aDialogGroup;
      newDialog.next = this.dialogStack.next;
      this.dialogStack.next = null;
      this.dialogStack = newDialog;

      if ( this.Focus === aDialogGroup )
        this.OnSetFocus( null );

      oldDialog.group.ChangeViewState( 0x0, 0x10040 );

      if ((( this.viewState & 0x40 ) === 0x40 ) && (( aDialogGroup.viewState & 0x4 ) 
          === 0x4 ))
        aDialogGroup.ChangeViewState( 0x10040, 0x0 );
      else
        aDialogGroup.ChangeViewState( 0x10000, 0x0 );

      if ( !!overlayTransition )
      {
        this.FadeGroup( nextDialog.group, overlayTransition.CreateOverlayFader(), 
        null, null, aCombine );
        this.FadeGroup( oldDialog.group, dismissTransition.CreateDismissFader(), 
        null, null, true );
        this.FadeGroup( newDialog.group, aPresentTransition.CreatePresentFader(), 
        aComplete, aCancel, true );
      }
      else
        if ( !!restoreTransition )
        {
          this.FadeGroup( nextDialog.group, restoreTransition.CreateRestoreFader(), 
          null, null, aCombine );
          this.FadeGroup( oldDialog.group, dismissTransition.CreateDismissFader(), 
          null, null, true );
          this.FadeGroup( newDialog.group, aPresentTransition.CreatePresentFader(), 
          aComplete, aCancel, true );
        }
        else
          if ( !!dismissTransition )
          {
            this.FadeGroup( oldDialog.group, dismissTransition.CreateDismissFader(), 
            null, null, aCombine );
            this.FadeGroup( newDialog.group, aPresentTransition.CreatePresentFader(), 
            aComplete, aCancel, true );
          }
          else
            this.FadeGroup( newDialog.group, aPresentTransition.CreatePresentFader(), 
            aComplete, aCancel, aCombine );
    },

    // The method DismissDialog() schedules an operation to hide again the component 
    // passed in the parameter aDialogGroup. The component has to be presented by 
    // a preceding @PresentDialog() or @SwitchToDialog() method invocation. Calling 
    // the method DismissDialog() causes the corresponding entry to be removed from 
    // the internal stack containing all dialogs existing at the moment in context 
    // of 'this' owner component. The dialog component on top of the stack is considered 
    // as the active dialog - the dialog, the user may interact with. Other dialogs 
    // lying in the background are automatically deactivated and they are suppressed 
    // from being able to receive and process user inputs. Accordingly, applying 
    // the dismiss operation on the actually active (top) dialog causes the dialog 
    // existing eventually behind it to restore its active state.
    // The operation to hide the component is performed with an animation specified 
    // at its presentation time (in the parameter aDismissTransition of the method 
    // @PresentDialog() or @SwitchToDialog()). Alternatively, other transition to 
    // hide the component can be specified in the parameter aOverrideDismissTransition.
    // Dismissing a dialog may affect the visibility state of the dialog component 
    // lying further in the background. In particular, the component in the background 
    // will schedule a restore transition as expected to be after the dialog overlaying 
    // it is dismissed. When dismissing a dialog, which is not the active one (not 
    // on top of the stack), the component in the background will also schedule 
    // an overlay transition as resulting from the new overlaying dialog component. 
    // Which transitions are performed results primarily from the parameters aOverlayTransition 
    // and aRestoreTransition specified at the presentation time of the background 
    // dialog component and the parameters aOverrideRestoreTransition specified 
    // at the presentation time of the overlaying (just dismissed) dialog component. 
    // Furthermore, you can override this behavior by specifying other animations 
    // in the parameters aOverrideOverlayTransition and aOverrideRestoreTransition 
    // in the invocation of the method DismissDialog().
    // The both parameters aComplete and aCancel can be provided with references 
    // to slot methods, which are signaled as soon as the dismiss operation is finished 
    // (aComplete) or it has been canceled (aCancel) due to other transition being 
    // scheduled for the same GUI component aDialogGroup making the actual operation 
    // obsolete.
    // The dismiss operation is enqueued, so calling @SwitchToDialog(), @PresentDialog() 
    // and DismissDialog() several times in sequence for different components in 
    // context of 'this' owner component causes the resulting transitions to be 
    // executed strictly one after another. This behavior can be changed by passing 
    // the value 'true' in the parameter aCombine. In this case, the new operation 
    // will be executed together with last prepared but not yet started operation. 
    // In this manner several independent transitions can run simultaneously.
    DismissDialog : function( aDialogGroup, aOverrideDismissTransition, aOverrideOverlayTransition, 
      aOverrideRestoreTransition, aComplete, aCancel, aCombine )
    {
      var _tmp;

      if ( !this.dialogStack )
        return;

      if ( !aDialogGroup )
        return;

      var dialog = this.dialogStack;
      var nextDialog = this.dialogStack.next;
      var prevDialog = null;

      while (( !!dialog && ( dialog.group !== aDialogGroup )) && !!dialog.next )
      {
        prevDialog = dialog;
        dialog = nextDialog;
        nextDialog = dialog.next;
      }

      if ( !dialog || ( dialog.group !== aDialogGroup ))
        throw new Error(  _0004  );

      if ( !prevDialog )
      {
        this.dialogStack = nextDialog;
        dialog.next = null;
      }
      else
      {
        prevDialog.next = nextDialog;
        dialog.next = null;
      }

      dialog.group.ChangeViewState( 0x0, 0x10040 );

      if ((((( this.viewState & 0x40 ) === 0x40 ) && !!nextDialog ) && !prevDialog ) 
          && (( nextDialog.group.viewState & 0x4 ) === 0x4 ))
        nextDialog.group.ChangeViewState( 0x40, 0x0 );

      var dismissTransition = dialog.dismissTransition;
      var restoreTransition = null;
      var overlayTransition = null;

      if ( !!nextDialog )
        restoreTransition = nextDialog.restoreTransition;

      if ( !!nextDialog && !!dialog.overrideRestoreTransition )
        restoreTransition = dialog.overrideRestoreTransition;

      if ( !!nextDialog && !!aOverrideRestoreTransition )
        restoreTransition = aOverrideRestoreTransition;

      if ( !!prevDialog && !!nextDialog )
        overlayTransition = nextDialog.overlayTransition;

      if (( !!prevDialog && !!nextDialog ) && !!aOverrideOverlayTransition )
        overlayTransition = aOverrideOverlayTransition;

      if ( !!aOverrideDismissTransition )
        dismissTransition = aOverrideDismissTransition;

      if ( !!overlayTransition )
      {
        this.FadeGroup( nextDialog.group, overlayTransition.CreateOverlayFader(), 
        null, null, aCombine );
        this.FadeGroup( dialog.group, dismissTransition.CreateDismissFader(), aComplete, 
        aCancel, true );
      }
      else
        if ( !!restoreTransition )
        {
          this.FadeGroup( nextDialog.group, restoreTransition.CreateRestoreFader(), 
          null, null, aCombine );
          this.FadeGroup( dialog.group, dismissTransition.CreateDismissFader(), 
          aComplete, aCancel, true );
        }
        else
          this.FadeGroup( dialog.group, dismissTransition.CreateDismissFader(), 
          aComplete, aCancel, aCombine );
    },

    // The method PresentDialog() schedules an operation to show in context of 'this' 
    // component another component passed in the parameter aDialogGroup. The operation 
    // to show the component is performed with an animation specified in the parameter 
    // aPresentTransition. If the parameter aPresentTransition is 'null', the show 
    // operation uses the default transition presenting the new dialog component 
    // instantly in the center of 'this' component without performing any smooth 
    // animation effects. Calling the method PresentDialog() causes the new dialog 
    // component to be pushed on top of an internal stack containing all dialogs 
    // existing at the moment in context of 'this' owner component. The dialog component 
    // on top of the stack is considered as the active dialog - the dialog, the 
    // user may interact with. Other dialogs lying in the background are automatically 
    // deactivated and they are suppressed from being able to receive and process 
    // user inputs. If not needed anymore, the dialog component can be hidden again 
    // by calling the method @DismissDialog() or @SwitchToDialog(), which causes 
    // the corresponding dialog stack entry to be removed or replaced. Accordingly, 
    // if there was already an active dialog component presented in context of 'this' 
    // owner, this old component looses its active state and it is overlaid by the 
    // new component.
    // With the parameter aDismissTransition you can specify the animation to perform 
    // when the just presented dialog component is dismissed again, which is caused 
    // when calling the method @DismissDialog() or @SwitchToDialog(). If the parameter 
    // aDismissTransition is 'null', the dialog will disappear with the same transition 
    // as used to show it (resulting from the parameter aPresentTransition).
    // With the parameter aOverlayTransition you determine an optional animation 
    // to apply on the just presented component when a further dialog component 
    // is presented overlying it. In this way you can control, whether and how the 
    // component should disappear when a new component is presented above it. With 
    // the parameter aRestoreTransition you specify the opposite animation to perform 
    // when after dismissing the overlaying component, the component in the background 
    // becomes active again. When calling PresentDialog(), you can override these 
    // originally specified transitions to overlay and restore the component in 
    // the background. With the parameter aOverrideOverlayTransition you can specify 
    // the animation to hide the component in the background instead of using the 
    // animation specified at its own presentation time. Similarly, with the parameter 
    // aOverrideRestoreTransition you can specify another animation to use when 
    // the component in the background restores its active state again.
    // The both parameters aComplete and aCancel can be provided with references 
    // to slot methods, which are signaled as soon as the present operation is finished 
    // (aComplete) or it has been canceled (aCancel) due to other transition being 
    // scheduled for the same GUI component aDialogGroup making the actual operation 
    // obsolete.
    // The present operation is enqueued, so calling PresentDialog(), @SwitchToDialog() 
    // and @DismissDialog() several times in sequence for different components in 
    // context of 'this' owner component causes the resulting transitions to be 
    // executed strictly one after another. This behavior can be changed by passing 
    // the value 'true' in the parameter aCombine. In this case, the new operation 
    // will be executed together with last prepared but not yet started operation. 
    // In this manner several independent transitions can run simultaneously.
    PresentDialog : function( aDialogGroup, aPresentTransition, aDismissTransition, 
      aOverlayTransition, aRestoreTransition, aOverrideOverlayTransition, aOverrideRestoreTransition, 
      aComplete, aCancel, aCombine )
    {
      var _tmp;

      if ( !aDialogGroup )
        return;

      if ( !!this.dialogStack && ( this.dialogStack.group === aDialogGroup ))
      {
        this.SwitchToDialog( aDialogGroup, aPresentTransition, aDismissTransition, 
        aOverlayTransition, aRestoreTransition, null, aOverrideOverlayTransition, 
        aOverrideRestoreTransition, aComplete, aCancel, aCombine );

        return;
      }

      if ((( aDialogGroup.viewState & 0x10000 ) === 0x10000 ))
        throw new Error(  _0003  );

      var dialog = _app._NewObject( _unit.DialogContext, 0 );

      if ( !!this.dialogStack && !this.dialogStack.overlayTransition )
      {
        if ( !aOverrideRestoreTransition )
          aOverrideRestoreTransition = aOverrideOverlayTransition;

        if ( !aOverrideOverlayTransition )
          aOverrideOverlayTransition = aOverrideRestoreTransition;
      }

      var overlayTransition = null;

      if ( !!this.dialogStack )
        overlayTransition = this.dialogStack.overlayTransition;

      if ( !!this.dialogStack && !!aOverrideOverlayTransition )
        overlayTransition = aOverrideOverlayTransition;

      if ( !aPresentTransition )
        aPresentTransition = _app._GetAutoObject( _app.Effects.ShowHideCentered );

      if ( !aDismissTransition )
        aDismissTransition = aPresentTransition;

      if ( !aRestoreTransition )
        aRestoreTransition = aOverlayTransition;

      if ( !aOverlayTransition )
        aOverlayTransition = aRestoreTransition;

      dialog.dismissTransition = aDismissTransition;
      dialog.overlayTransition = aOverlayTransition;
      dialog.restoreTransition = aRestoreTransition;
      dialog.overrideRestoreTransition = aOverrideRestoreTransition;

      if ( this.Focus === aDialogGroup )
        this.OnSetFocus( null );

      if ( !!this.dialogStack )
        this.dialogStack.group.ChangeViewState( 0x0, 0x40 );

      if ((( this.viewState & 0x40 ) === 0x40 ) && (( aDialogGroup.viewState & 0x4 ) 
          === 0x4 ))
        aDialogGroup.ChangeViewState( 0x10040, 0x0 );
      else
        aDialogGroup.ChangeViewState( 0x10000, 0x0 );

      dialog.group = aDialogGroup;
      dialog.next = this.dialogStack;
      this.dialogStack = dialog;

      if ( !!overlayTransition )
      {
        this.FadeGroup( this.dialogStack.next.group, overlayTransition.CreateOverlayFader(), 
        null, null, aCombine );
        this.FadeGroup( aDialogGroup, aPresentTransition.CreatePresentFader(), aComplete, 
        aCancel, true );
      }
      else
        this.FadeGroup( aDialogGroup, aPresentTransition.CreatePresentFader(), aComplete, 
        aCancel, aCombine );
    },

    // The method ObtainFocus() establishes the focus path to this component by 
    // switching the @Focus properties of all superior @Owner components. This ensures 
    // that the component may receive user keyboard inputs.
    ObtainFocus : function()
    {
      var _tmp;

      if ((( this.viewState & 0x40 ) === 0x40 ))
        return;

      if ((( this.viewState & 0x80 ) === 0x80 ))
        return;

      if ((( this.viewState & 0x10000 ) === 0x10000 ))
      {
        if ( !!this.Owner )
          this.Owner.ObtainFocus();

        return;
      }

      if ( !!this.Owner && ( this.Owner.Focus !== this ))
        this.Owner.OnSetFocus( this );

      if ( !!this.Owner )
        this.Owner.ObtainFocus();
    },

    // The method HasViewState() verifies whether the specified state aState is 
    // currently valid for the component. It is useful e.g. if you need to test 
    // whether a component is really focused and thus able to receive user keyboard 
    // inputs, etc.
    HasViewState : function( aState )
    {
      var _tmp;

      return ( _tmp = aState ) && (( this.viewState & _tmp ) === _tmp );
    },

    // The method LocalPosition() converts the given position aPoint from the screen 
    // coordinate space to the coordinate space of this component and returns the 
    // calculated position. In the case the component isn't visible within the application, 
    // the method can fail and return a wrong position.
    LocalPosition : function( aPoint )
    {
      var tmp = this;

      while ( !!tmp )
      {
        aPoint = _app._MovePointNeg( aPoint, tmp.Bounds.slice(0,2));
        tmp = tmp.Owner;
      }

      return aPoint;
    },

    // The method DispatchEvent() feeds the component with the event passed in the 
    // parameter aEvent and propagates it along the so-called focus path. This focus 
    // path leads to the currently selected keyboard event receiver view. If the 
    // event is rejected by the view, the same operation is repeated for the next 
    // superior view. This permits the hierarchical event dispatching until a willing 
    // view has handled the event or all views in the focus path have been evaluated. 
    // If the event remains still unhandled, it will be passed to the component 
    // itself.
    // The focus path is established by the property @Focus. 
    // DispatchEvent() returns the value returned by the @HandleEvent() method of 
    // the view which has handled the event. In the case, the event was not handled, 
    // the method returns 'null'.
    DispatchEvent : function( aEvent )
    {
      var _tmp;
      var view = this.Focus;
      var grp = ( _unit.Group.isPrototypeOf( view )? view : null );
      var handled = null;
      var lock = !!this.fadersQueue && ( !!this.fadersQueue.current || !!this.fadersQueue.first );

      if ( !!view && (((( view.viewState & 0x10000 ) === 0x10000 ) || (( view.viewState 
          & 0x40000 ) === 0x40000 )) || (( view.viewState & 0x20000 ) === 0x20000 )))
      {
        view = null;
        grp = null;
      }

      if ( !!this.dialogStack && !lock )
        handled = this.dialogStack.group.DispatchEvent( aEvent );

      if ( !handled && !!grp )
        handled = grp.DispatchEvent( aEvent );
      else
        if ( !handled && !!view )
          handled = view.HandleEvent( aEvent );

      if ( !handled )
        handled = this.HandleEvent( aEvent );

      if ( !handled )
        handled = this.processKeyHandlers( aEvent );

      return handled;
    },

    // The method BroadcastEventAtPosition() feeds the component with the event 
    // passed in the parameter aEvent and propagates it to all views, which do exist 
    // within the component and do enclose the given position aPosition until the 
    // event has been handled or all affected views are evaluated. If the event 
    // remains still unhandled, it will be passed to the component itself.
    // Beside the position, the additional parameter aFilter can be used to limit 
    // the operation to special views only, e.g. to visible and touchable views.
    // BroadcastEventAtPosition() is very useful to provide views with one and the 
    // same event in order e.g. to inform the views about an important global state 
    // alteration. The parameters aPosition and aFilter limit the operation to particular 
    // views. To send events to all views regardless of their position use the method 
    // @BroadcastEvent().
    // BroadcastEventAtPosition() returns the value returned by the @HandleEvent() 
    // method of the view which has handled the event. In the case, the event was 
    // not handled, the method returns 'null'.
    BroadcastEventAtPosition : function( aEvent, aPosition, aFilter )
    {
      var _tmp;
      var view = this.last;
      var handled = null;

      while ( !!view && !handled )
      {
        if (( !aFilter || (( _tmp = aFilter ) && (( view.viewState & _tmp ) === 
            _tmp ))) && _app._IsPointInRect( view.GetExtent(), aPosition ))
        {
          var grp = ( _unit.Group.isPrototypeOf( view )? view : null );

          if ( !!grp )
            handled = grp.BroadcastEventAtPosition( aEvent, _app._MovePointNeg( 
            aPosition, grp.Bounds.slice(0,2)), aFilter );
          else
            handled = view.HandleEvent( aEvent );
        }

        view = view.prev;
      }

      if ( !handled )
        handled = this.HandleEvent( aEvent );

      return handled;
    },

    // The method BroadcastEvent() feeds the component with the event passed in 
    // the parameter aEvent and propagates it to all views enclosed within the component 
    // until the event has been handled or all views are evaluated. If the event 
    // remains still unhandled, it will be passed to the component itself.
    // The additional parameter aFilter can be used to limit the operation to special 
    // views only, e.g. to visible and touchable views. To broadcast the event to 
    // all views pass in the parameter aFilter the value 'Core::ViewState[]'.
    // BroadcastEvent() is very useful to provide all views with one and the same 
    // event in order e.g. to inform all views about an important global state alteration. 
    // To send events to views enclosing a given position use the method @BroadcastEventAtPosition().
    // BroadcastEvent() returns the value returned by the @HandleEvent() method 
    // of the view which has handled the event. In the case, the event was not handled, 
    // the method returns 'null'.
    BroadcastEvent : function( aEvent, aFilter )
    {
      var _tmp;
      var view = this.last;
      var handled = null;

      while ( !!view && !handled )
      {
        if ( !aFilter || (( _tmp = aFilter ) && (( view.viewState & _tmp ) === _tmp )))
        {
          var grp = ( _unit.Group.isPrototypeOf( view )? view : null );

          if ( !!grp )
            handled = grp.BroadcastEvent( aEvent, aFilter );
          else
            handled = view.HandleEvent( aEvent );
        }

        view = view.prev;
      }

      if ( !handled )
        handled = this.HandleEvent( aEvent );

      if ( !handled )
        handled = this.processKeyHandlers( aEvent );

      return handled;
    },

    // The method UpdateLayout() is invoked automatically after the size of the 
    // component has been changed. This method can be overridden and filled with 
    // logic to perform a sophisticated arrangement calculation for one or more 
    // enclosed views. In this case the parameter aSize can be used. It contains 
    // the current size of the component. 
    // Usually, all enclosed views are arranged automatically accordingly to their 
    // @Layout property. UpdateLayout() gives the derived components a chance to 
    // extend this automatism by a user defined algorithm.
    UpdateLayout : function( aSize )
    {
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
    },

    // The method InvalidateViewState() declares the state of this component as 
    // changed, so its visual aspect possibly doesn't reflect its current state 
    // anymore. To update the visual aspect, the framework will invoke the @UpdateViewState() 
    // method.
    InvalidateViewState : function()
    {
      this.viewState = this.viewState | 0x8000;
      _app._PostSignal([ this, this.updateComponent ], this );
    },

    // The method InvalidateArea() declares the given area of the component as invalid, 
    // this means this area should be redrawn at the next screen update.
    InvalidateArea : function( aArea )
    {
      var _tmp;
      var grp = this;

      while ( !!grp && !(( aArea[0] >= aArea [2]) || ( aArea[1] >= aArea [3])))
      {
        var buf = grp.buffer;

        if ( !grp.Owner && ( grp !== this ))
        {
          grp.InvalidateArea( aArea );

          return;
        }

        if ( !!buf )
        {
          var oldInvalidArea = buf.InvalidArea;

          buf.InvalidArea = _app._UnionRect( buf.InvalidArea, aArea );

          if ( !_app._IsEqualRect( oldInvalidArea, buf.InvalidArea ))
          {
            _app._NotifyObjObservers( grp, 0 );
            _app._NotifyObjObservers( buf, 0 );
          }
        }

        if ( !(( grp.viewState & 0x1 ) === 0x1 ))
          return;

        aArea = _app._IntersectRect( _app._MoveRectPos( aArea, grp.Bounds.slice(0,2)), 
        grp.Bounds );
        grp = grp.Owner;
      }
    },

    // The method FindSiblingView() searches for a sibling view of the view specified 
    // in the parameter aView - aView itself will be excluded from the search operation.
    // The method combines the functionality of @FindNextView() and @FindPrevView() 
    // and tries to find any neighbor view (regarding the Z-order not the position).
    // The additional parameter aFilter can be used to limit the search operation 
    // to special views only, e.g. to visible and touchable views.
    // If there are no other views complying the filter condition, the method returns 
    // 'null'. In contrast to other find methods, FindSiblingView() will fail, if 
    // it has been invoked with aView == 'null'.
    FindSiblingView : function( aView, aFilter )
    {
      var _tmp;

      if ( !aView || ( aView.Owner !== this ))
        return null;

      var nextView = aView.next;
      var prevView = aView.prev;
      var notFilter = 0x10000;

      if ((( aFilter & 0x10000 ) === 0x10000 ))
        notFilter = 0x0;

      while ( !!nextView || !!prevView )
      {
        if (( !!nextView && ( !aFilter || (( _tmp = aFilter ) && (( nextView.viewState 
            & _tmp ) === _tmp )))) && ( !notFilter || !(( _tmp = notFilter ) && 
            (( nextView.viewState & _tmp ) === _tmp ))))
          return nextView;

        if (( !!prevView && ( !aFilter || (( _tmp = aFilter ) && (( prevView.viewState 
            & _tmp ) === _tmp )))) && ( !notFilter || !(( _tmp = notFilter ) && 
            (( prevView.viewState & _tmp ) === _tmp ))))
          return prevView;

        if ( !!nextView )
          nextView = nextView.next;

        if ( !!prevView )
          prevView = prevView.prev;
      }

      return null;
    },

    // The method FadeGroup() schedules an operation to fade-in or fade-out the 
    // GUI component passed in the parameter aGroup in context of 'this' GUI component. 
    // The kind of the fade-in/out animation is determined by the fader object specified 
    // in the parameter aFader. In this manner, depending on the used fader, individual 
    // transitions to show or hide the GUI component can be determined.
    // The operation is enqueued, so calling FadeGroup() several times in sequence 
    // for different groups in context of 'this' owner component causes the resulting 
    // transitions to be executed strictly one after another. This behavior can 
    // be changed by passing the value 'true' in the parameter aCombine. In this 
    // case, the new operation will be executed together with last prepared but 
    // not yet started operation. In this manner several independent transitions 
    // can run simultaneously.
    // If the affected GUI component aGroup is already scheduled for an animation, 
    // but this animation is not yet started, the new animation aFader replaces 
    // this old one, so that always only one animation per affected GUI component 
    // is pending for execution.
    // The both parameters aComplete and aCancel can be provided with references 
    // to slot methods, which are signaled as soon as the transition is finished 
    // (aComplete) or it has been canceled (aCancel) because of a newer transition 
    // being scheduled for the same GUI component aGroup.
    FadeGroup : function( aGroup, aFader, aComplete, aCancel, aCombine )
    {
      var _tmp;

      if ( !aGroup )
        return;

      if ( !aFader )
        throw new Error(  _0005  );

      if (( !!aFader.Group || !!aFader.Owner ) || !!aFader.task )
        throw new Error(  _0006  );

      if ( !!aGroup.Owner && ( aGroup.Owner !== this ))
        throw new Error(  _0007  );

      if ( !this.fadersQueue )
        this.fadersQueue = _app._NewObject( _unit.TaskQueue, 0 );

      aFader.Owner = this;
      aFader.Group = aGroup;
      aFader.onCancel = aCancel;
      aFader.onComplete = aComplete;

      if ( !!aGroup.pendingFader )
        aGroup.pendingFader.task.RemoveFader( aGroup.pendingFader );

      aGroup.pendingFader = aFader;
      aGroup.viewState = aGroup.viewState | 0x20000;

      if (( aCombine && !!this.fadersQueue.last ) && !this.fadersQueue.last.IsCurrent())
        ( _app.Effects.FaderTask.isPrototypeOf( _tmp = this.fadersQueue.last )? 
        _tmp : null ).AddFader( aFader );
      else
      {
        var task = _app._NewObject( _app.Effects.FaderTask, 0 );

        task.AddFader( aFader );
        this.fadersQueue.ScheduleTask( task, false );
      }
    },

    // The method RestackTop() elevates the view aView to the top of its component. 
    // After this operation the view is usually not covered by any sibling views. 
    // This method modifies the Z-order of the view. The effective stacking position 
    // of the view can additionally be affected by the value of the view's property 
    // @StackingPriority. Concrete, the view can't be be arranged in front of any 
    // sibling view configured with higher @StackingPriority value. In such case 
    // calling the method RestackTop() will arrange the view just behind the sibling 
    // view with next higher @StackingPriority value.
    // Please note, changing the Z-order of views within a component containing 
    // a Core::Outline view can cause this outline to update its automatic row or 
    // column formation.
    RestackTop : function( aView )
    {
      var _tmp;

      if ( !aView )
        throw new Error(  _0008  );

      if ( aView.Owner !== this )
        throw new Error(  _0009  );

      if ( !aView.next )
        return;

      var after = this.last;
      var sg = aView.StackingPriority;

      while ( !!after && ( after.StackingPriority > sg ))
        after = after.prev;

      if ((( after === aView ) || !after ) || ( after.next === aView ))
        return;

      if ((( aView.viewState & 0x401 ) === 0x401 ))
      {
        if ( !!aView.prev && !!aView.layoutContext )
          aView.prev.viewState = aView.prev.viewState | 0x800;

        aView.viewState = aView.viewState | 0x800;
        this.viewState = this.viewState | 0x4000;
        _app._PostSignal([ this, this.updateComponent ], this );
      }

      if ((( aView.viewState & 0x200 ) === 0x200 ))
      {
        if ( !!aView.prev )
          aView.prev.viewState = aView.prev.viewState | 0x800;

        this.viewState = this.viewState | 0x4000;
        _app._PostSignal([ this, this.updateComponent ], this );
      }

      if ( !!aView.prev )
        aView.prev.next = aView.next;
      else
        this.first = aView.next;

      aView.next.prev = aView.prev;
      aView.prev = after;
      aView.next = after.next;
      after.next = aView;

      if ( !!aView.next )
        aView.next.prev = aView;
      else
        this.last = aView;

      if ((( aView.viewState & 0x1 ) === 0x1 ))
        this.InvalidateArea( aView.GetExtent());
    },

    // The method Restack() changes the Z-order of views in the component. Depending 
    // on the parameter aOrder the method will elevate or lower the given view aView. 
    // If aOrder is negative, the view will be lowered to the background. If aOrder 
    // is positive, the view will be elevated to the foreground. If aOrder == 0, 
    // no modification will take place.
    // The absolute value of aOrder determines the maximum number of sibling views 
    // the view has to skip over in order to reach its new Z-order. The effective 
    // stacking position of the view can additionally be affected by the value of 
    // the view's property @StackingPriority. Concrete, the view is prevented from 
    // being arranged in front of any sibling view configured with a higher @StackingPriority 
    // value. Similarly the view can't be arranged behind any sibling view having 
    // lower @StackingPriority value.
    // Please note, changing the Z-order of views within a component containing 
    // a Core::Outline view can cause this outline to update its automatic row or 
    // column formation.
    Restack : function( aView, aOrder )
    {
      var _tmp;

      if ( !aView )
        throw new Error(  _0008  );

      if ( aView.Owner !== this )
        throw new Error(  _0009  );

      var after = aView;
      var before = aView;
      var sg = aView.StackingPriority;

      while ((( aOrder > 0 ) && !!after.next ) && ( after.next.StackingPriority 
             <= sg ))
      {
        after = after.next;
        aOrder = aOrder - 1;
      }

      while ((( aOrder < 0 ) && !!before.prev ) && ( before.prev.StackingPriority 
             >= sg ))
      {
        before = before.prev;
        aOrder = aOrder + 1;
      }

      if (( after === aView ) && ( before === aView ))
        return;

      if ((( aView.viewState & 0x401 ) === 0x401 ))
      {
        if ( !!aView.prev && !!aView.layoutContext )
          aView.prev.viewState = aView.prev.viewState | 0x800;

        aView.viewState = aView.viewState | 0x800;
        this.viewState = this.viewState | 0x4000;
        _app._PostSignal([ this, this.updateComponent ], this );
      }

      if ((( aView.viewState & 0x200 ) === 0x200 ))
      {
        if ( !!aView.prev )
          aView.prev.viewState = aView.prev.viewState | 0x800;

        aView.viewState = aView.viewState | 0x800;
        this.viewState = this.viewState | 0x4000;
        _app._PostSignal([ this, this.updateComponent ], this );
      }

      if ( !!aView.prev )
        aView.prev.next = aView.next;

      if ( !!aView.next )
        aView.next.prev = aView.prev;

      if ( this.first === aView )
        this.first = aView.next;

      if ( this.last === aView )
        this.last = aView.prev;

      if ( after !== aView )
      {
        aView.next = after.next;
        aView.prev = after;
        after.next = aView;

        if ( !!aView.next )
          aView.next.prev = aView;
      }

      if ( before !== aView )
      {
        aView.next = before;
        aView.prev = before.prev;
        before.prev = aView;

        if ( !!aView.prev )
          aView.prev.next = aView;
      }

      if ( !aView.next )
        this.last = aView;

      if ( !aView.prev )
        this.first = aView;

      if ((( aView.viewState & 0x1 ) === 0x1 ))
        this.InvalidateArea( aView.GetExtent());
    },

    // The method Remove() removes the given view aView from the component. After 
    // this operation the view doesn't belong anymore to the component - the view 
    // is not visible and it can't receive any events.
    // Please note, removing of views from a component containing a Core::Outline 
    // view can cause this outline to update its automatic row or column formation.
    // Please note, it the removed view is currently selected by the @Focus property, 
    // the framework will automatically select other sibling view, which will be 
    // able to react to keyboard events.
    Remove : function( aView )
    {
      var _tmp;

      if ( !aView )
        throw new Error(  _000A  );

      if ( aView.Owner !== this )
        throw new Error(  _0009  );

      if (((( aView.viewState & 0x401 ) === 0x401 ) && !!aView.prev ) && !!aView.layoutContext )
      {
        aView.prev.viewState = aView.prev.viewState | 0x800;
        this.viewState = this.viewState | 0x4000;
        _app._PostSignal([ this, this.updateComponent ], this );
      }

      if ((( aView.viewState & 0x200 ) === 0x200 ))
      {
        if ( !!aView.prev )
          aView.prev.viewState = aView.prev.viewState | 0x800;

        this.viewState = this.viewState | 0x4000;
        _app._PostSignal([ this, this.updateComponent ], this );
      }

      aView.layoutContext = null;

      if ( this.Focus === aView )
        this.OnSetFocus( this.FindSiblingView( aView, 0x14 ));

      if ( !!aView.prev )
        aView.prev.next = aView.next;

      if ( !!aView.next )
        aView.next.prev = aView.prev;

      if ( this.first === aView )
        this.first = aView.next;

      if ( this.last === aView )
        this.last = aView.prev;

      aView.Owner = null;
      aView.next = null;
      aView.prev = null;

      if ((( aView.viewState & 0x1 ) === 0x1 ))
        this.InvalidateArea( aView.GetExtent());
    },

    // The method Add() inserts the given view aView into this component and places 
    // it at a Z-order position resulting primarily from the parameter aOrder. The 
    // parameter determines the number of sibling views the view has to skip over 
    // starting with the top most view. If aOrder == 0, the newly added view will 
    // obtain the top most position. If the value is negative, the view will be 
    // lowered to the background accordingly to the absolute value of aOrder. After 
    // this operation the view belongs to the component - the view can appear on 
    // the screen and it can receive events.
    // The effective stacking position of the view can additionally be affected 
    // by the value of the view's property @StackingPriority. Concrete, the view 
    // is prevented from being arranged in front of any sibling view configured 
    // with a higher @StackingPriority value. Similarly the view can't be arranged 
    // behind any sibling view having lower @StackingPriority value.
    // Please note, adding of views to a component containing a Core::Outline view 
    // can cause this outline to update its automatic row or column formation.
    Add : function( aView, aOrder )
    {
      var _tmp;

      if ( !aView )
        throw new Error(  _000B  );

      if ( !!aView.Owner )
        throw new Error(  _000C  );

      var before = null;
      var sg = aView.StackingPriority;

      if ((( aOrder < 0 ) && !!this.last ) && ( this.last.StackingPriority >= sg ))
      {
        before = this.last;
        aOrder = aOrder + 1;
      }

      while (((( aOrder < 0 ) && !!before ) && !!before.prev ) && ( before.prev.StackingPriority 
             >= sg ))
      {
        before = before.prev;
        aOrder = aOrder + 1;
      }

      if (( !before && !!this.last ) && ( this.last.StackingPriority > sg ))
        before = this.last;

      while (( !!before && !!before.prev ) && ( before.prev.StackingPriority > sg ))
        before = before.prev;

      if ( !before )
      {
        aView.Owner = this;
        aView.prev = this.last;

        if ( !!this.last )
          this.last.next = aView;

        if ( !this.first )
          this.first = aView;

        this.last = aView;
      }
      else
      {
        aView.Owner = this;
        aView.prev = before.prev;
        aView.next = before;
        before.prev = aView;

        if ( !!aView.prev )
          aView.prev.next = aView;
        else
          this.first = aView;
      }

      if ((( aView.viewState & 0x1 ) === 0x1 ))
        this.InvalidateArea( aView.GetExtent());

      if ((( !this.Focus && (( aView.viewState & 0x4 ) === 0x4 )) && (( aView.viewState 
          & 0x10 ) === 0x10 )) && !(( aView.viewState & 0x10000 ) === 0x10000 ))
        this.OnSetFocus( aView );

      if ((( aView.viewState & 0x401 ) === 0x401 ))
      {
        aView.viewState = aView.viewState | 0x800;
        this.viewState = this.viewState | 0x4000;
        _app._PostSignal([ this, this.updateComponent ], this );
      }

      if ((( aView.viewState & 0x200 ) === 0x200 ))
      {
        aView.viewState = aView.viewState | 0x800;
        this.viewState = this.viewState | 0x4000;
        _app._PostSignal([ this, this.updateComponent ], this );
      }
    },

    // Default onget method for the property 'Opacity'
    OnGetOpacity : function()
    {
      return this.Opacity;
    },

    // Initializer for the class 'Core::Group'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.RectView._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Group;

      // ... and initialize objects, variables, properties, etc.
      this.viewState = 0x1F;

      // Call the user defined constructor
      this.Init( aArg );
    },

    // Garbage Collector method for the class 'Core::Group'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.RectView._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.first ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.last ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.keyHandlers ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.buffer ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.dialogStack ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.fadersQueue ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.pendingFader ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Focus ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Core::Group"
  };

  // The class Core::Root provides the base functionality for the entire GUI application. 
  // Due to its ancestry, the application provides the entire set of functionality 
  // implemented in the Core::Group class. It serves as the root container for all 
  // GUI components, menus, panels, etc.
  // The application also provides an interface to the underlying target system 
  // and to the screen. The coordinate system of the application corresponds therefore 
  // to the coordinate system of the screen. Every Embedded Wizard application needs 
  // one application object.
  // The interface of the Core::Root class provides several methods and properties 
  // to control the application and to coordinate the screen update and the event 
  // dispatching. For example:
  // The property @Keyboard allows the management of virtual keyboard components. 
  // A keyboard component is an ordinary GUI component you can design and fill e.g. 
  // with buttons. Its job is to generate keyboard events in response to other user 
  // interaction events, like the touch event. For this purpose the application 
  // will provide the virtual keyboard component with all necessary touch events 
  // before these are passed to the remaining parts of the GUI. Additionally, the 
  // application ensures that the virtual keyboard always remains visible on the 
  // top of the screen.
  // - The methods @BeginAnimation() and @EndAnimation() allow you to temporarily 
  // deactivate the handling of keyboard and mouse/touch panel events. This is useful 
  // during animated screen transitions to avoid interferences with user interactions.
  // - The methods @BeginModal() and @EndModal() are useful to temporarily limit 
  // the event delivery to a particular component. In this manner the component 
  // will become 'modal'. The event delivery limitation ensures that the user will 
  // interact with the given component only whereas the remaining GUI parts are 
  // not available. Modal GUI components are very common in all GUI applications.
  // - The methods @CaptureCursor(), @DeflectCursor() and @RetargetCursor() affect 
  // the flow of touch events. They are used in special cases, when e.g. after receiving 
  // a touch event the component needs to redirect the events to other component.
  // - The methods @DriveCursorHitting(), @DriveCursorMovement(), @DriveMultiTouchHitting(), 
  // @DriveMultiTouchMovement() and @DriveKeyboardHitting() are for the integration 
  // purpose with the underlaying target system. You will never need to invoke these 
  // methods from the GUI application. But if you are responsible for the integration 
  // of the GUI application with your target system, you may need to feed these 
  // methods with events from your touch screen or hardware keyboard.
  // - The properties @Language and @Styles reflect the currently selected language 
  // and the active styles. These may determine the visual aspect of the GUI application. 
  // The properties cover the underlaying Chora variables 'language' and 'styles' 
  // and broadcast Core::LanguageEvent or Core::StylesEvent in case of their modification.
  _unit.Root =
  {
    keyLastTarget : null,
    cursorTargetView : _app._NewArray( 10, null, null ),
    canvas : null,
    cursorHoldTimer : null,
    updateLock : 0,
    currentEventTimestamp : 0,
    cursorSequelCounter : _app._NewArray( 10, 0, null ),
    cursorSequelArea : _app._NewArray( 10, _app._NullRect, null ),
    cursorHoldPeriod : _app._NewArray( 10, 0, null ),
    cursorHittingPos : _app._NewArray( 10, _app._NullPoint, null ),
    cursorHittingTime : _app._NewArray( 10, 0, null ),
    cursorCurrentPos : _app._NewArray( 10, _app._NullPoint, null ),
    cursorHitOffset : _app._NewArray( 10, _app._NullPoint, null ),
    cursorLastPos : _app._NewArray( 10, _app._NullPoint, null ),
    cursorFirstPos : _app._NewArray( 10, _app._NullPoint, null ),
    cursorFinger : 0,
    fpsTime : 0,
    fpsCounter : 0,
    regionsArea : _app._NewArray( 4, 0, null ),
    regions : _app._NewArray( 4, _app._NullRect, null ),
    noOfRegions : 0,
    keyLastCode : 0,
    keyLastCharCode : 0,
    hasRootFocus : true,

    // The method GetRoot() delivers the application object, this view belongs to. 
    // The application object represents the entire screen of the GUI application. 
    // Thus in the views hierarchy, the application object serves as the root view.
    // This method can fail and return null if the view still doesn't belong to 
    // any owner group.
    GetRoot : function()
    {
      return this;
    },

    // Implementation of the Chora method : 'Core::Root.Draw()'
    Draw : function( aCanvas, aClip, aOffset, aOpacity, aBlend )
    {
      var fullScreenUpdate = false;

      fullScreenUpdate = _app._FullScreenUpdate;

      if ( !fullScreenUpdate )
        aCanvas.FillRectangle( aClip, _app._MoveRectPos( _app._MoveRectPos( aClip, 
        aOffset ), this.Bounds.slice(0,2)), 0x00000000, 0x00000000, 0x00000000, 
        0x00000000, false );

      _unit.Group.Draw.call( this, aCanvas, aClip, aOffset, aOpacity, aBlend );
    },

    // The method ChangeViewState() modifies the current state of the view. The 
    // state is a set of switches determining whether a view is visible, whether 
    // it can react to user inputs or whether it is just performing some update 
    // operations, etc.
    // The modification is controlled by the the both parameters. The first aSetState 
    // contains the switches to activate within the view state. The second aClearState 
    // determines all switches to disable.
    // Depending on the state alteration the method will perform different operations, 
    // e.g. in response to the clearing of the visible state, the method will request 
    // a screen redraw to make disappear the view from the screen.
    // ChangeViewState() is invoked automatically by the framework, so you never 
    // should need to invoke it directly. All relevant states are available as properties 
    // e.g. the property Visible in derived classes reflects the visible state of 
    // the view.
    ChangeViewState : function( aSetState, aClearState )
    {
      var _tmp;

      _unit.Group.ChangeViewState.call( this, aSetState, aClearState );

      if ( !this.Owner && ((( aSetState & 0x1 ) === 0x1 ) || (( aClearState & 0x1 ) 
          === 0x1 )))
        this.InvalidateArea([ 0, 0, ( _tmp = this.Bounds )[2] - _tmp[0], _tmp[3] 
        - _tmp[1]]);

      if ( !this.Owner && ((( aSetState & 0x2 ) === 0x2 ) || (( aClearState & 0x2 ) 
          === 0x2 )))
        this.InvalidateArea([ 0, 0, ( _tmp = this.Bounds )[2] - _tmp[0], _tmp[3] 
        - _tmp[1]]);
    },

    // Implementation of the Chora method : 'Core::Root.OnSetFocus()'
    OnSetFocus : function( value )
    {
      if (( value !== null ) || !value )
        _unit.Group.OnSetFocus.call( this, value );
    },

    // Implementation of the Chora method : 'Core::Root.OnSetBuffered()'
    OnSetBuffered : function( value )
    {
      var _tmp;
      var oldBuffer = this.buffer;

      _unit.Group.OnSetBuffered.call( this, value );

      if ((( oldBuffer !== this.buffer ) && !this.Owner ) && (( this.viewState & 
          0x1 ) === 0x1 ))
        this.InvalidateArea([ 0, 0, ( _tmp = this.Bounds )[2] - _tmp[0], _tmp[3] 
        - _tmp[1]]);
    },

    // Implementation of the Chora method : 'Core::Root.OnSetOpacity()'
    OnSetOpacity : function( value )
    {
      var _tmp;
      var oldValue = this.Opacity;

      _unit.Group.OnSetOpacity.call( this, value );

      if ((( oldValue !== this.Opacity ) && !this.Owner ) && (( this.viewState & 
          0x1 ) === 0x1 ))
        this.InvalidateArea([ 0, 0, ( _tmp = this.Bounds )[2] - _tmp[0], _tmp[3] 
        - _tmp[1]]);
    },

    // The method DispatchEvent() feeds the component with the event passed in the 
    // parameter aEvent and propagates it along the so-called focus path. This focus 
    // path leads to the currently selected keyboard event receiver view. If the 
    // event is rejected by the view, the same operation is repeated for the next 
    // superior view. This permits the hierarchical event dispatching until a willing 
    // view has handled the event or all views in the focus path have been evaluated. 
    // If the event remains still unhandled, it will be passed to the component 
    // itself.
    // The focus path is established by the property @Focus. 
    // DispatchEvent() returns the value returned by the @HandleEvent() method of 
    // the view which has handled the event. In the case, the event was not handled, 
    // the method returns 'null'.
    DispatchEvent : function( aEvent )
    {
      if ( !!aEvent )
      {
        aEvent.IsTimeExact = !!this.currentEventTimestamp;

        if ( !!this.currentEventTimestamp )
          aEvent.Time = this.currentEventTimestamp;
      }

      var handled;

      handled = _unit.Group.DispatchEvent.call( this, aEvent );
      this.currentEventTimestamp = 0;

      return handled;
    },

    // The method BroadcastEvent() feeds the component with the event passed in 
    // the parameter aEvent and propagates it to all views enclosed within the component 
    // until the event has been handled or all views are evaluated. If the event 
    // remains still unhandled, it will be passed to the component itself.
    // The additional parameter aFilter can be used to limit the operation to special 
    // views only, e.g. to visible and touchable views. To broadcast the event to 
    // all views pass in the parameter aFilter the value 'Core::ViewState[]'.
    // BroadcastEvent() is very useful to provide all views with one and the same 
    // event in order e.g. to inform all views about an important global state alteration. 
    // To send events to views enclosing a given position use the method @BroadcastEventAtPosition().
    // BroadcastEvent() returns the value returned by the @HandleEvent() method 
    // of the view which has handled the event. In the case, the event was not handled, 
    // the method returns 'null'.
    BroadcastEvent : function( aEvent, aFilter )
    {
      if ( !!aEvent )
      {
        aEvent.IsTimeExact = !!this.currentEventTimestamp;

        if ( !!this.currentEventTimestamp )
          aEvent.Time = this.currentEventTimestamp;
      }

      var handled = _unit.Group.BroadcastEvent.call( this, aEvent, aFilter );

      this.currentEventTimestamp = 0;

      return handled;
    },

    // The method InvalidateArea() declares the given area of the component as invalid, 
    // this means this area should be redrawn at the next screen update.
    InvalidateArea : function( aArea )
    {
      var _tmp;

      if ( this.updateLock > 0 )
        throw new Error(  _000D  );

      if ( !!this.buffer && !this.Owner )
      {
        if ((( _tmp = this.buffer.InvalidArea )[0] >= _tmp[2]) || ( _tmp[1] >= _tmp[3]))
        {
          _app._NotifyObjObservers( this, 0 );
          _app._NotifyObjObservers( this.buffer, 0 );
        }

        this.buffer.InvalidArea = _app._UnionRect( this.buffer.InvalidArea, aArea );
      }

      var fullScreenUpdate = false;

      fullScreenUpdate = _app._FullScreenUpdate;

      if ( fullScreenUpdate )
        aArea = [ 0, 0, ( _tmp = this.Bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]];

      if ( !!this.Owner )
      {
        _unit.Group.InvalidateArea.call( this, aArea );

        return;
      }

      aArea = _app._IntersectRect( _app._MoveRectPos( aArea, this.Bounds.slice(0,2)), 
      this.Bounds );

      if (( aArea[0] >= aArea [2]) || ( aArea[1] >= aArea [3]))
        return;

      var i;

      for ( i = 0; i < this.noOfRegions; i = i + 1 )
        if ( !((( _tmp = _app._IntersectRect( this.regions.Get( i ), aArea ))[0] 
            >= _tmp[2]) || ( _tmp[1] >= _tmp[3])))
        {
          this.regions.Set( i, _app._UnionRect( this.regions.Get( i ), aArea ));
          this.regionsArea.Set( i, _app._GetRectArea( this.regions.Get( i )));

          return;
        }

      if ( this.noOfRegions < 3 )
      {
        this.regions.Set( this.noOfRegions, aArea );
        this.regionsArea.Set( this.noOfRegions, _app._GetRectArea( aArea ));
        this.noOfRegions = this.noOfRegions + 1;

        return;
      }

      var j;
      var k;
      var jj = 0;
      var kk = 0;
      var best = 2147483647;

      this.regions.Set( this.noOfRegions, aArea );
      this.regionsArea.Set( this.noOfRegions, _app._GetRectArea( aArea ));

      for ( j = 0; j <= this.noOfRegions; j = j + 1 )
        for ( k = j + 1; k <= this.noOfRegions; k = k + 1 )
        {
          var unionArea = _app._GetRectArea( _app._UnionRect( this.regions.Get( 
            j ), this.regions.Get( k )));
          var overhead = (( unionArea << 8 ) / ( this.regionsArea.Get( j ) + this.regionsArea.Get( 
            k ))) | 0;

          if ( overhead < best )
          {
            best = overhead;
            jj = j;
            kk = k;
          }
        }

      this.regions.Set( jj, _app._UnionRect( this.regions.Get( jj ), this.regions.Get( 
      kk )));
      this.regionsArea.Set( jj, _app._GetRectArea( this.regions.Get( jj )));

      if ( kk !== this.noOfRegions )
      {
        this.regions.Set( kk, this.regions.Get( this.noOfRegions ));
        this.regionsArea.Set( kk, this.regionsArea.Get( this.noOfRegions ));
      }
    },

    // Implementation of the Chora method : 'Core::Root.createDragEvent()'
    createDragEvent : function()
    {
      var event = _app._NewObject( _unit.DragEvent, 0 );

      event.IsTimeExact = !!this.currentEventTimestamp;

      if ( !!this.currentEventTimestamp )
        event.Time = this.currentEventTimestamp;

      return event;
    },

    // Implementation of the Chora method : 'Core::Root.createCursorEvent()'
    createCursorEvent : function()
    {
      var event = _app._NewObject( _unit.CursorEvent, 0 );

      event.IsTimeExact = !!this.currentEventTimestamp;

      if ( !!this.currentEventTimestamp )
        event.Time = this.currentEventTimestamp;

      return event;
    },

    // Implementation of the Chora method : 'Core::Root.createCursorGrabEvent()'
    createCursorGrabEvent : function()
    {
      var event = _app._NewObject( _unit.CursorGrabEvent, 0 );

      event.IsTimeExact = !!this.currentEventTimestamp;

      if ( !!this.currentEventTimestamp )
        event.Time = this.currentEventTimestamp;

      return event;
    },

    // Implementation of the Chora method : 'Core::Root.cursorHoldTimerProc()'
    cursorHoldTimerProc : function( sender )
    {
      var i;
      var found = false;

      for ( i = 0; i < 10; i = i + 1 )
        if ( !!this.cursorTargetView.Get( i ))
        {
          var pos = this.cursorLastPos.Get( i );
          var grp = this.cursorTargetView.Get( i ).Owner;

          while ( !!grp && ( grp !== this ))
          {
            pos = _app._MovePointNeg( pos, grp.Bounds.slice(0,2));
            grp = grp.Owner;
          }

          if ( !grp && ( this.cursorTargetView.Get( i ) !== this ))
          {
            var tmp = this.cursorTargetView.Get( i );

            this.cursorFinger = i;
            this.cursorTargetView.Set( i, null );
            tmp.HandleEvent( this.createCursorEvent().InitializeUp( i, this.cursorCurrentPos.Get( 
            i ), this.cursorHittingPos.Get( i ), this.cursorHoldPeriod.Get( i ), 
            this.cursorSequelCounter.Get( i ) + 1, this.cursorHitOffset.Get( i ), 
            false, this.cursorLastPos.Get( i ), this.cursorFirstPos.Get( i )));
            this.BroadcastEvent( this.createCursorGrabEvent().InitializeUp( i, this.cursorSequelCounter.Get( 
            i ) + 1, false, tmp, this.cursorLastPos.Get( i )), 0x18 );
          }
          else
          {
            this.cursorHoldPeriod.Set( i, ( this.cursorHoldTimer.Time - this.cursorHittingTime.Get( 
            i )) | 0 );

            if ( this.cursorHoldPeriod.Get( i ) < 10 )
              this.cursorHoldPeriod.Set( i, 10 );

            this.cursorFinger = i;
            this.cursorTargetView.Get( i ).HandleEvent( this.createCursorEvent().InitializeHold( 
            i, pos, this.cursorHittingPos.Get( i ), this.cursorHoldPeriod.Get( i ), 
            this.cursorSequelCounter.Get( i ) + 1, this.cursorHitOffset.Get( i ), 
            this.cursorLastPos.Get( i ), this.cursorFirstPos.Get( i )));
            found = true;
          }
        }

      if ( !found )
        this.cursorHoldTimer.OnSetEnabled( false );
    },

    // The method GetFPS() returns the screen update performance expressed in frames 
    // per second. The performance is estimated for the period between the current 
    // and the preceding invocation of the GetFPS() method.
    GetFPS : function()
    {
      var ticksCount = 0;
      var fps = 0;

      ticksCount = (( new Date ).getTime() - _app._InitTime ) | 0;

      if ( !!this.fpsTime && ( ticksCount > this.fpsTime ))
        fps = (( this.fpsCounter * 1000 ) / (( ticksCount - this.fpsTime ) | 0 )) 
        | 0;

      this.fpsCounter = 0;
      this.fpsTime = ticksCount;

      return fps;
    },

    // The method Update() exists for the integration purpose with the underlying 
    // target system. You will never need to invoke this method directly from your 
    // GUI application. The method is responsible for the redrawing of invalid screen 
    // areas.
    // This method forces the redraw of all affected views and returns the position 
    // and the size of the redrawn area. If there is no invalid area to redraw,
    Update : function()
    {
      var _tmp;

      if ( !this.canvas )
        this.canvas = _app._NewObject( _app.Graphics.Canvas, 0 );

      this.canvas.OnSetFrameSize([( _tmp = this.Bounds )[2] - _tmp[0], _tmp[3] - 
      _tmp[1]]);
      this.canvas.Update();

      return this.UpdateGE20( this.canvas );
    },

    // The method UpdateGE20() exists for the integration purpose with the underlying 
    // target system. You will never need to invoke this method directly from your 
    // GUI application. The method is responsible for the redrawing of invalid screen 
    // areas.
    // This method forces the redraw of all affected views into the given drawing 
    // destination aCanvas and returns the position and the size of the redrawn 
    // area. If there is no invalid area to redraw, UpdateGE20() returns an empty 
    // rectangle. This method is intended to work with the new Graphics Engine 2.0 
    // only.
    UpdateGE20 : function( aCanvas )
    {
      if ( !this.BeginUpdate())
        return _0001;

      var wholeArea = this.UpdateCanvas( aCanvas, _0000 );

      this.EndUpdate();

      return wholeArea;
    },

    // The method EndUpdate() belongs to an interface required for integration purpose 
    // with the underlying target system. You will never need to invoke this method 
    // directly from your GUI application.
    // Calling this method finalizes the screen update cycle initiated by the preceding 
    // @BeginUpdate() invocation.
    EndUpdate : function()
    {
      if ( this.noOfRegions > 0 )
      {
        this.fpsCounter = this.fpsCounter + 1;
        this.noOfRegions = 0;
      }
    },

    // The method UpdateCanvas() belongs to an interface required for integration 
    // purpose with the underlying target system. You will never need to invoke 
    // this method directly from your GUI application.
    // This method redraws all invalid screen regions into the canvas passed in 
    // the parameter aCanvas. The parameter aOffset determines the origin where 
    // to map the top-left corner of the canvas on the screen. All update areas 
    // lying outside the canvas are clipped.
    // The method returns the position and the size of the resulting area within 
    // the canvas affected by the update. If there is no intersection between the 
    // canvas and any of the invalid areas, UpdateCanvas() returns an empty rectangle.
    UpdateCanvas : function( aCanvas, aOffset )
    {
      var _tmp;
      var wholeArea = _0001;
      var canvasArea = [].concat( aOffset, _app._MovePointPos( aCanvas.FrameSize, 
        aOffset ));
      var i;
      var j = this.noOfRegions;

      this.updateLock = this.updateLock + 1;

      for ( i = 0; ( i < j ) && ( i < 4 ); i = i + 1 )
        if ( this.regionsArea.Get( i ) > 0 )
        {
          this.Draw( aCanvas, _app._MoveRectNeg( this.regions.Get( i ), aOffset ), 
          [ -aOffset[0], -aOffset[1]], 255, true );
          wholeArea = _app._UnionRect( wholeArea, _app._IntersectRect( canvasArea, 
          this.regions.Get( i )));
        }
        else
          j = j + 1;

      this.updateLock = this.updateLock - 1;

      if ( !(( wholeArea[0] >= wholeArea [2]) || ( wholeArea[1] >= wholeArea [3])))
        return _app._MoveRectNeg( wholeArea, aOffset );
      else
        return wholeArea;
    },

    // The method GetUpdateRegion() belongs to an interface required for integration 
    // purpose with the underlying target system. You will never need to invoke 
    // this method directly from your GUI application.
    // This method returns the position and the size of the invalid region with 
    // the number specified in the parameter aRegionNo. If the desired region does 
    // not exist, the method returns an empty area.
    GetUpdateRegion : function( aRegionNo )
    {
      var i;
      var j = this.noOfRegions;

      if ( aRegionNo < 0 )
        return _0001;

      for ( i = 0; ( i < j ) && ( i < 4 ); i = i + 1 )
        if ( !this.regionsArea.Get( i ))
        {
          j = j + 1;
          aRegionNo = aRegionNo + 1;
        }
        else
          if ( i === aRegionNo )
            return this.regions.Get( i );

      return _0001;
    },

    // The method BeginUpdate() belongs to an interface required for integration 
    // purpose with the underlying target system. You will never need to invoke 
    // this method directly from your GUI application.
    // Calling this method initiates a new screen update cycle. Subsequently the 
    // method @UpdateCanvas() can be called in order to perform all waiting drawing 
    // operations. If necessary UpdateCanvas() can be called multiple times in order 
    // to draw multiple screen areas individually. Finally the update cycle is terminated 
    // by calling the method @EndUpdate().
    // The method BeginUpdate() returns the number of invalid regions waiting currently 
    // for the update. If there is nothing to update, the method returns 0 (zero). 
    // The position and the size of the invalid regions can be queried by using 
    // the method @GetUpdateRegion().
    BeginUpdate : function()
    {
      var i;
      var j;
      var k;

      for ( j = 0; j < ( this.noOfRegions - 1 ); j = j + 1 )
        if ( this.regionsArea.Get( j ) > 0 )
          for ( k = j + 1; k < this.noOfRegions; k = k + 1 )
            if ( this.regionsArea.Get( k ) > 0 )
            {
              var unionArea = _app._GetRectArea( _app._UnionRect( this.regions.Get( 
                j ), this.regions.Get( k )));

              if ((( unionArea - this.regionsArea.Get( j )) - this.regionsArea.Get( 
                  k )) < 0 )
              {
                this.regions.Set( j, _app._UnionRect( this.regions.Get( j ), this.regions.Get( 
                k )));
                this.regionsArea.Set( j, unionArea );
                this.regionsArea.Set( k, 0 );
              }
            }

      for ( i = this.noOfRegions - 1; i >= 0; i = i - 1 )
        if ( !this.regionsArea.Get( i ))
          this.noOfRegions = this.noOfRegions - 1;

      return this.noOfRegions;
    },

    // The method DoesNeedUpdate() returns a value indicating whether an area of 
    // the application needs an update. If there is no invalid area to redraw, DoesNeedUpdate() 
    // returns 'false'.
    DoesNeedUpdate : function()
    {
      if ( this.noOfRegions > 0 )
        return true;

      return false;
    },

    // The method Initialize() exists for the integration purpose with the underlying 
    // target system. You will never need to invoke this method directly from your 
    // GUI application. The method is responsible for the preparation of the application 
    // object to work with a screen with the given size aSize.
    Initialize : function( aSize )
    {
      this.OnSetBounds([].concat( _0000, aSize ));

      if ( this.hasRootFocus )
        this.viewState = this.viewState | 0x60;
      else
        this.viewState = this.viewState | 0x20;

      this.InvalidateArea( this.Bounds );

      return this;
    },

    // Implementation of the Chora method : 'Core::Root.SetRootFocus()'
    SetRootFocus : function( aHasRootFocus )
    {
      if ( aHasRootFocus === this.hasRootFocus )
        return false;

      this.hasRootFocus = aHasRootFocus;

      if ( !aHasRootFocus )
        this.ChangeViewState( 0x0, 0x40 );
      else
        this.ChangeViewState( 0x40, 0x0 );

      return true;
    },

    // The method 'SetUserInputTimestamp()' exists for optional purpose to provide 
    // the exact timestamp when the last user interaction took place. With this 
    // exact information the GUI application can calculate better interactions like 
    // touch screen gestures, etc. The time is expressed in milliseconds.
    // Usually the method will be invoked in response to user input events received 
    // in the main() message loop from the target specific keyboard or touch screen 
    // driver. The method should be called before the event is fed to the GUI system.
    SetUserInputTimestamp : function( aTimestamp )
    {
      this.currentEventTimestamp = aTimestamp;
    },

    // The method DriveKeyboardHitting() exists for the integration purpose with 
    // the underlying target system. Usually the method will be invoked in response 
    // to events received in the main() message loop from the target specific hardware 
    // keyboard driver.
    // The parameters passed to the method determine the event. aDown determines 
    // whether the user has pressed (== 'true') or released (== 'false') a key. 
    // The parameters aCode and aCharCode are used exclusively. They determine the 
    // affected key. If the method is called with a valid aCode then aCharCode should 
    // be '\0'. If the method is called with a valid aCharCode then aCode should 
    // be Core::KeyCode.NoKey.
    DriveKeyboardHitting : function( aCode, aCharCode, aDown )
    {
      var _tmp;
      var processed = !!this.keyLastTarget;

      if ( !!this.keyLastTarget && (( !aDown || ( this.keyLastCode !== aCode )) 
          || ( this.keyLastCharCode !== aCharCode )))
      {
        var event = null;
        var view = ( _unit.View.isPrototypeOf( _tmp = this.keyLastTarget )? _tmp 
          : null );
        var handler = ( _unit.KeyPressHandler.isPrototypeOf( _tmp = this.keyLastTarget )? 
          _tmp : null );

        if ( !!this.keyLastCode )
          event = _app._NewObject( _unit.KeyEvent, 0 ).Initialize( this.keyLastCode, 
          false );

        if ( this.keyLastCharCode !== 0x00 )
          event = _app._NewObject( _unit.KeyEvent, 0 ).Initialize2( this.keyLastCharCode, 
          false );

        if ( !!handler )
          handler.HandleEvent( event );
        else
          if ( !!view )
            view.HandleEvent( event );

        this.keyLastCode = 0;
        this.keyLastCharCode = 0x00;
        this.keyLastTarget = null;
      }

      if ( !!this.keyLastTarget )
      {
        var event = null;
        var view = ( _unit.View.isPrototypeOf( _tmp = this.keyLastTarget )? _tmp 
          : null );
        var handler = ( _unit.KeyPressHandler.isPrototypeOf( _tmp = this.keyLastTarget )? 
          _tmp : null );

        if ( !!aCode )
          event = _app._NewObject( _unit.KeyEvent, 0 ).Initialize( aCode, true );

        if ( this.keyLastCharCode !== 0x00 )
          event = _app._NewObject( _unit.KeyEvent, 0 ).Initialize2( aCharCode, true );

        if ( !!handler )
          handler.HandleEvent( event );
        else
          if ( !!view )
            view.HandleEvent( event );
      }

      if ( !this.keyLastTarget && aDown )
      {
        if ( !!aCode )
          this.keyLastTarget = this.DispatchEvent( _app._NewObject( _unit.KeyEvent, 
          0 ).Initialize( aCode, true ));

        if ( aCharCode !== 0x00 )
          this.keyLastTarget = this.DispatchEvent( _app._NewObject( _unit.KeyEvent, 
          0 ).Initialize2( aCharCode, true ));

        if ( !( _unit.KeyPressHandler.isPrototypeOf( _tmp = this.keyLastTarget )? 
            _tmp : null ) && !( _unit.View.isPrototypeOf( _tmp = this.keyLastTarget )? 
            _tmp : null ))
          this.keyLastTarget = null;

        this.keyLastCode = aCode;
        this.keyLastCharCode = aCharCode;
        processed = processed || !!this.keyLastTarget;
      }

      this.currentEventTimestamp = 0;

      return processed;
    },

    // The method DriveCursorMovement() exists for the integration purpose with 
    // the underlying target system. Usually the method will be invoked in response 
    // to to drag events received in the main() message loop from the target specific 
    // touch screen driver.
    // The method expects only one parameter aPos. This parameter determines the 
    // current cursor (or finger in the touch screen analogy) position. aPos lies 
    // relative to the top-left corner of the application coordinate system.
    // Please note, this method is limited to process a single touch (or mouse) 
    // event at the same time. When integrating with a target system supporting 
    // multi-touch please use the method @DriveMultiTouchMovement().
    DriveCursorMovement : function( aPos )
    {
      return this.DriveMultiTouchMovement( this.cursorFinger, aPos );
    },

    // The method DriveMultiTouchMovement() exists for the integration purpose with 
    // the underlying target system. Usually the method will be invoked in response 
    // to to drag events received in the main() message loop from the target specific 
    // touch screen driver.
    // The parameter aPos determines the current cursor (or finger in the touch 
    // screen analogy) position. aPos lies relative to the top-left corner of the 
    // application coordinate system. The number of the finger is specified in the 
    // parameter aFinger. The first finger has the number 0, the second 1, and so 
    // far till 9.
    // Please note, unlike the method @DriveCursorMovement() this method is able 
    // to process and dispatch several multi-touch events simultaneously.
    DriveMultiTouchMovement : function( aFinger, aPos )
    {
      if (( aFinger < 0 ) || ( aFinger > 9 ))
      {
        this.currentEventTimestamp = 0;

        return false;
      }

      var offset = _app._MovePointNeg( aPos, this.cursorLastPos.Get( aFinger ));

      this.cursorLastPos.Set( aFinger, aPos );

      if ( !this.cursorTargetView.Get( aFinger ) || _app._IsEqualPoint( offset, 
          _0000 ))
      {
        this.currentEventTimestamp = 0;

        return false;
      }

      var pos = aPos;
      var grp = this.cursorTargetView.Get( aFinger ).Owner;

      while ( !!grp && ( grp !== this ))
      {
        pos = _app._MovePointNeg( pos, grp.Bounds.slice(0,2));
        grp = grp.Owner;
      }

      if ( !grp && ( this.cursorTargetView.Get( aFinger ) !== this ))
      {
        var tmp = this.cursorTargetView.Get( aFinger );

        this.cursorFinger = aFinger;
        this.cursorTargetView.Set( aFinger, null );
        tmp.HandleEvent( this.createCursorEvent().InitializeUp( aFinger, this.cursorCurrentPos.Get( 
        aFinger ), this.cursorHittingPos.Get( aFinger ), this.cursorHoldPeriod.Get( 
        aFinger ), this.cursorSequelCounter.Get( aFinger ) + 1, this.cursorHitOffset.Get( 
        aFinger ), false, this.cursorLastPos.Get( aFinger ), this.cursorFirstPos.Get( 
        aFinger )));
        this.BroadcastEvent( this.createCursorGrabEvent().InitializeUp( aFinger, 
        this.cursorSequelCounter.Get( aFinger ) + 1, false, tmp, aPos ), 0x18 );
      }
      else
      {
        this.cursorCurrentPos.Set( aFinger, pos );
        this.cursorFinger = aFinger;
        this.cursorTargetView.Get( aFinger ).HandleEvent( this.createDragEvent().Initialize( 
        aFinger, pos, this.cursorHittingPos.Get( aFinger ), offset, this.cursorHoldPeriod.Get( 
        aFinger ), this.cursorSequelCounter.Get( aFinger ) + 1, this.cursorHitOffset.Get( 
        aFinger ), aPos, this.cursorFirstPos.Get( aFinger )));
      }

      this.currentEventTimestamp = 0;

      return true;
    },

    // The method DriveCursorHitting() exists for the integration purpose with the 
    // underlying target system. Usually the method will be invoked in response 
    // to to touch events received in the main() message loop from the target specific 
    // touch screen driver.
    // The parameters passed to the method determine the event. aDown determines 
    // whether the user has pressed (== 'true') or released (== 'false') his finger 
    // at the position aPos relative to the top-left origin of the GUI application 
    // area. The parameter aFinger specifies the finger (or mouse button) the user 
    // pressed for this operation. The first finger (mouse button) has the number 
    // 0, the second 1, and so far.
    // Please note, this method is limited to process a single touch (or mouse) 
    // event at the same time. When integrating with a target system supporting 
    // multi-touch please use the method @DriveMultiTouchHitting().
    DriveCursorHitting : function( aDown, aFinger, aPos )
    {
      return this.DriveMultiTouchHitting( aDown, aFinger, aPos );
    },

    // The method DriveMultiTouchHitting() exists for the integration purpose with 
    // the underlying target system. Usually the method will be invoked in response 
    // to touch events received in the main() message loop from the target specific 
    // touch screen driver.
    // The parameters passed to the method determine the event. aDown determines 
    // whether the user has pressed (== 'true') or released (== 'false') his finger 
    // at the position aPos relative to the top-left origin of the GUI application 
    // area. The parameter aFinger identifies the associated finger. The first finger 
    // has the number 0, the second 1 and so far till 9. 
    // Please note, unlike the method @DriveCursorHitting() this method is able 
    // to process and dispatch several multi-touch events simultaneously.
    DriveMultiTouchHitting : function( aDown, aFinger, aPos )
    {
      if (( aFinger < 0 ) || ( aFinger > 9 ))
      {
        this.currentEventTimestamp = 0;

        return false;
      }

      var ticksCount = this.currentEventTimestamp;

      if ( !ticksCount )
        ticksCount = (( new Date ).getTime() - _app._InitTime ) | 0;

      var savedCurrentEventTimestamp = this.currentEventTimestamp;

      this.DriveMultiTouchMovement( aFinger, aPos );
      aPos = this.cursorLastPos.Get( aFinger );
      this.currentEventTimestamp = savedCurrentEventTimestamp;

      if ( aDown )
        this.cursorFirstPos.Set( aFinger, aPos );

      if ( aDown && !this.cursorTargetView.Get( aFinger ))
      {
        var hit;
        var pos = aPos;

        if ( _app._IsPointInRect( this.cursorSequelArea.Get( aFinger ), aPos ) && 
            (( ticksCount - this.cursorHittingTime.Get( aFinger )) <= 250 ))
          this.cursorSequelCounter.Set( aFinger, this.cursorSequelCounter.Get( aFinger ) 
          + 1 );
        else
          this.cursorSequelCounter.Set( aFinger, 0 );

        this.cursorSequelArea.Set( aFinger, _app._MoveRectPos( _000E, aPos ));
        this.cursorHittingTime.Set( aFinger, ticksCount );
        hit = this.CursorHitTest( _app._MoveRectPos( _000E, aPos ), aFinger, this.cursorSequelCounter.Get( 
        aFinger ) + 1, null, 0x0 );

        if ( !!hit )
        {
          this.BroadcastEvent( this.createCursorGrabEvent().InitializeDown( aFinger, 
          this.cursorSequelCounter.Get( aFinger ) + 1, false, hit.View, aPos ), 
          0x18 );
          this.cursorTargetView.Set( aFinger, hit.View );
          this.cursorHitOffset.Set( aFinger, hit.Offset );
        }
        else
        {
          this.cursorTargetView.Set( aFinger, null );
          this.cursorHitOffset.Set( aFinger, _0000 );
          this.currentEventTimestamp = 0;

          return false;
        }

        var grp = hit.View.Owner;

        while ( !!grp && ( grp !== this ))
        {
          pos = _app._MovePointNeg( pos, grp.Bounds.slice(0,2));
          grp = grp.Owner;
        }

        this.cursorHittingPos.Set( aFinger, pos );
        this.cursorCurrentPos.Set( aFinger, pos );
        this.cursorHoldPeriod.Set( aFinger, 0 );
        this.cursorHoldTimer.OnSetEnabled( true );
        this.cursorFinger = aFinger;
        this.cursorTargetView.Get( aFinger ).HandleEvent( this.createCursorEvent().InitializeDown( 
        aFinger, pos, this.cursorSequelCounter.Get( aFinger ) + 1, this.cursorHitOffset.Get( 
        aFinger ), false, aPos ));
        this.currentEventTimestamp = 0;

        return true;
      }

      if ( !aDown && !!this.cursorTargetView.Get( aFinger ))
      {
        var pos = aPos;
        var grp = this.cursorTargetView.Get( aFinger ).Owner;

        while ( !!grp && ( grp !== this ))
        {
          pos = _app._MovePointNeg( pos, grp.Bounds.slice(0,2));
          grp = grp.Owner;
        }

        if ( !grp )
          pos = this.cursorCurrentPos.Get( aFinger );

        this.cursorFinger = aFinger;

        var tmp = this.cursorTargetView.Get( aFinger );

        this.cursorTargetView.Set( aFinger, null );
        tmp.HandleEvent( this.createCursorEvent().InitializeUp( aFinger, pos, this.cursorHittingPos.Get( 
        aFinger ), this.cursorHoldPeriod.Get( aFinger ), this.cursorSequelCounter.Get( 
        aFinger ) + 1, this.cursorHitOffset.Get( aFinger ), false, aPos, this.cursorFirstPos.Get( 
        aFinger )));
        this.BroadcastEvent( this.createCursorGrabEvent().InitializeUp( aFinger, 
        this.cursorSequelCounter.Get( aFinger ) + 1, false, tmp, aPos ), 0x18 );
        this.currentEventTimestamp = 0;

        return true;
      }

      this.currentEventTimestamp = 0;

      return false;
    },

    // The method RetargetCursorWithReason() changes the currently active cursor 
    // event target view. Usually, the target view is determined when the user presses 
    // the finger on the touch screen. Once determined, the target view remains 
    // active until the user has released the finger. In the meantime the framework 
    // will provide this target view with all cursor events. This entire cycle is 
    // called 'grab cycle'. The method RetargetCursorWithReason() allows you to 
    // select a new target view without the necessity to wait until the user has 
    // released the touch screen and thus has finalized the grab cycle.
    // Except the additional parameter aRetargetReason, this method works similarly 
    // to @RetargetCursor(). At first the method asks the new potential target view 
    // aNewTarget whether it or one of its sub-views is willing to continue processing 
    // the cursor events for the gesture specified in aRetargetReason. If successful, 
    // the method hands over the cursor event flow to this determined view. If there 
    // is no view willing to handle these events, the method hands over the event 
    // flow directly to the view specified in the parameter aFallbackTarget. If 
    // no willing view could be found and no fall-back view was given, the current 
    // grab cycle is finalized as if the user had released the touch screen.
    // Unlike the method @DeflectCursor() this RetargetCursorWithReason() method 
    // performs the cursor hit test for all views of the new potential target. This 
    // is as if the user had tapped the screen and the framework tries to determine 
    // the view affected by this interaction. This search operation is limited to 
    // views at the current cursor position. Unlike @RetargetCursor(), this method 
    // limits additionally to candidates willing to handle the gesture specified 
    // in the parameter aRetargetReason.
    // When switching the target view, the framework provides the old and the new 
    // target views with cursor events. The old view will receive a Core::CursorEvent 
    // with variables Down == 'false' and AutoDeflected == 'true' - this simulates 
    // the release operations. The new target view will receive a Core::CursorEvent 
    // with the variable Down == 'true' as if it had been just touched by the user.
    // If the application is running within a multi-touch environment, the invocation 
    // of the RetargetCursor() method does affect the event flow corresponding only 
    // to the finger which has lastly generated touch events.
    RetargetCursorWithReason : function( aNewTarget, aFallbackTarget, aRetargetReason )
    {
      if ( aNewTarget === this )
        aNewTarget = null;

      if ( !this.cursorTargetView.Get( this.cursorFinger ))
        return;

      var hit;

      hit = this.CursorHitTest( _app._MoveRectPos( _000E, this.cursorLastPos.Get( 
      this.cursorFinger )), this.cursorFinger, 1, aNewTarget, aRetargetReason );

      if ( !!hit && ( this.cursorTargetView.Get( this.cursorFinger ) !== hit.View ))
        this.DeflectCursor( hit.View, hit.Offset );

      if ( !hit && ( this.cursorTargetView.Get( this.cursorFinger ) !== aFallbackTarget ))
        this.DeflectCursor( aFallbackTarget, _0000 );
    },

    // The method DeflectCursor() changes the currently active cursor event target 
    // view. Usually, the target view is determined when the user presses the finger 
    // on the touch screen. Once determined, the target view remains active until 
    // the user has released the finger. In the meantime the framework will provide 
    // this target view with all cursor events. This entire cycle is called 'grab 
    // cycle'. The method DeflectCursor() allows you to select a new target view 
    // without the necessity to wait until the user has released the touch screen 
    // and thus has finalized the grab cycle.
    // Unlike the method @RetargetCursor() this @DeflectCursor() method hands over 
    // the cursor event flow to the new target regardless its position or state. 
    // If no new target view has been specified, the current grab cycle is finalized 
    // as if the user had released the touch screen.
    // When switching the target view, the framework provides the old and the new 
    // target views with cursor events. The old view will receive a Core::CursorEvent 
    // with variables Down == 'false' and AutoDeflected == 'true' - this simulates 
    // the release operations. The new target view will receive a Core::CursorEvent 
    // with the variable Down == 'true' as if it had been just touched by the user.
    // If the application is running within a multi-touch environment, the invocation 
    // of the DeflectCursor() method does affect the event flow corresponding only 
    // to the finger which has lastly generated touch events.
    DeflectCursor : function( aNewTarget, aHitOffset )
    {
      if ( !this.cursorTargetView.Get( this.cursorFinger ) || ( this.cursorTargetView.Get( 
          this.cursorFinger ) === aNewTarget ))
        return;

      var tmp = this.cursorTargetView.Get( this.cursorFinger );

      this.cursorTargetView.Set( this.cursorFinger, null );
      tmp.HandleEvent( this.createCursorEvent().InitializeUp( this.cursorFinger, 
      this.cursorCurrentPos.Get( this.cursorFinger ), this.cursorHittingPos.Get( 
      this.cursorFinger ), this.cursorHoldPeriod.Get( this.cursorFinger ), this.cursorSequelCounter.Get( 
      this.cursorFinger ) + 1, this.cursorHitOffset.Get( this.cursorFinger ), true, 
      this.cursorLastPos.Get( this.cursorFinger ), this.cursorFirstPos.Get( this.cursorFinger )));
      this.BroadcastEvent( this.createCursorGrabEvent().InitializeUp( this.cursorFinger, 
      this.cursorSequelCounter.Get( this.cursorFinger ) + 1, true, tmp, this.cursorLastPos.Get( 
      this.cursorFinger )), 0x18 );

      var pos = this.cursorLastPos.Get( this.cursorFinger );
      var grp = null;

      if ( !!aNewTarget )
        grp = aNewTarget.Owner;

      while ( !!grp && ( grp !== this ))
      {
        pos = _app._MovePointNeg( pos, grp.Bounds.slice(0,2));
        grp = grp.Owner;
      }

      if ( !grp && ( aNewTarget !== this ))
      {
        this.cursorTargetView.Set( this.cursorFinger, null );

        return;
      }

      this.BroadcastEvent( this.createCursorGrabEvent().InitializeDown( this.cursorFinger, 
      this.cursorSequelCounter.Get( this.cursorFinger ) + 1, true, aNewTarget, this.cursorLastPos.Get( 
      this.cursorFinger )), 0x18 );

      var ticksCount = 0;

      ticksCount = (( new Date ).getTime() - _app._InitTime ) | 0;
      this.cursorTargetView.Set( this.cursorFinger, aNewTarget );
      this.cursorHitOffset.Set( this.cursorFinger, aHitOffset );
      this.cursorHittingPos.Set( this.cursorFinger, pos );
      this.cursorCurrentPos.Set( this.cursorFinger, pos );
      this.cursorSequelCounter.Set( this.cursorFinger, 0 );
      this.cursorHoldPeriod.Set( this.cursorFinger, 0 );
      this.cursorHittingTime.Set( this.cursorFinger, ticksCount );
      this.cursorFirstPos.Set( this.cursorFinger, this.cursorLastPos.Get( this.cursorFinger ));
      this.cursorTargetView.Get( this.cursorFinger ).HandleEvent( this.createCursorEvent().InitializeDown( 
      this.cursorFinger, pos, this.cursorSequelCounter.Get( this.cursorFinger ) 
      + 1, this.cursorHitOffset.Get( this.cursorFinger ), true, this.cursorFirstPos.Get( 
      this.cursorFinger )));
    },

    // Initializer for the class 'Core::Root'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.Group._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _unit.Timer._Init.call( this.cursorHoldTimer = { _parent:this }, 0 );

      // Then create and initialize all new arrays ...
      ( this.cursorTargetView = []).__proto__ = _unit.Root.cursorTargetView;
      ( this.cursorSequelCounter = []).__proto__ = _unit.Root.cursorSequelCounter;
      ( this.cursorSequelArea = []).__proto__ = _unit.Root.cursorSequelArea;
      ( this.cursorHoldPeriod = []).__proto__ = _unit.Root.cursorHoldPeriod;
      ( this.cursorHittingPos = []).__proto__ = _unit.Root.cursorHittingPos;
      ( this.cursorHittingTime = []).__proto__ = _unit.Root.cursorHittingTime;
      ( this.cursorCurrentPos = []).__proto__ = _unit.Root.cursorCurrentPos;
      ( this.cursorHitOffset = []).__proto__ = _unit.Root.cursorHitOffset;
      ( this.cursorLastPos = []).__proto__ = _unit.Root.cursorLastPos;
      ( this.cursorFirstPos = []).__proto__ = _unit.Root.cursorFirstPos;
      ( this.regionsArea = []).__proto__ = _unit.Root.regionsArea;
      ( this.regions = []).__proto__ = _unit.Root.regions;

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Root;

      // ... and initialize objects, variables, properties, etc.
      this.viewState = 0x7F;
      this.cursorHoldTimer.OnSetPeriod( 50 );
      this.cursorHoldTimer.OnTrigger = [ this, this.cursorHoldTimerProc ];
    },

    // Deintializer for the class 'Core::Root'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _unit.Group;

      // Then deitialize all embedded objects ...
      this.cursorHoldTimer._Done();

      // Finally continue the deinitialization in the super class
      _unit.Group._Done.call( this );
    },

    // Re-Initializer for the class 'Core::Root'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _unit.Group._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.cursorHoldTimer._ReInit();
    },

    // Garbage Collector method for the class 'Core::Root'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.Group._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.keyLastTarget ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      _app._MarkObjects( this.cursorTargetView, aCycle );
      if (( _tmp = this.canvas ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.cursorHoldTimer )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Core::Root"
  };

  // The class Core::Event provides the base functionality for all events. The events 
  // are used to feed GUI components with user inputs and notifications from the 
  // target device, like an 'empty battery' event, etc. The events are dispatched 
  // and propagated by the framework. The necessary infrastructure is provided in 
  // the classes Core::View and Core::Group.
  // The class Core::Event doesn't define any particular behavior. It exists as 
  // an empty base for all derived event classes like the Core::KeyEvent or Core::LanguageEvent.
  _unit.Event =
  {
    // The variable 'Time' stores the time in milliseconds the event was generated.
    Time : 0,

    // The variable 'IsTimeExact' helps the application code to determine whether 
    // the time stamp stored in @Time does really correspond to the event generation 
    // time. This variable is set 'true' only when the target system has provided 
    // precise information about the event generation time. If the information is 
    // not available, the variable is 'false' and @Time stores the system time when 
    // the event object (and not the event) was created.
    IsTimeExact : false,

    // Implementation of the Chora method : 'Core::Event.Init()'
    Init : function( aArg )
    {
      this.Time = this.GetCurrentTime();
    },

    // The method 'GetCurrentTime()' returns the current time expressed in milliseconds. 
    // The value can be used e.g. to calculate the time span elapsed since the event 
    // was generated (see @Time).
    GetCurrentTime : function()
    {
      var ticksCount = 0;

      ticksCount = (( new Date ).getTime() - _app._InitTime ) | 0;

      return ticksCount;
    },

    // Initializer for the class 'Core::Event'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Event;

      // Call the user defined constructor
      this.Init( aArg );

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Core::Event'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Core::Event'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Core::Event'
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
    _className : "Core::Event"
  };

  // The class Core::KeyEvent provides a specialized event object able to deliver 
  // key pressure and release events. Each time a key event occurs, the code of 
  // the pressed or released key will be passed in the Core::KeyEvent object to 
  // the application. On its part the application dispatches the event to the GUI 
  // components along the focus path. See the method DispatchEvent() of the class 
  // Core::Group.
  // The Mosaic framework defines a fixed set of the most important key codes (Menu, 
  // Left, Up, Ok, Exit, Play, Record, etc.). The usage of these predefined key 
  // codes increases the platform independence of your GUI application. For special 
  // key codes, which are not included in this set, a range of UserXX key codes 
  // is provided. The codes are defined in the enum Core::KeyCode.
  // Beside the predefined fixed set of key codes the Core::KeyEvent object can 
  // also deliver a UNICODE character codes. This is very useful if your target 
  // device supports an alpha numerical keyboard.
  // Usually the key codes and the character codes are used exclusively in the Core::KeyEvent 
  // object. If an event contains a valid key code (Menu, Left, Ok, etc.), the character 
  // code is set to '\x0000'. In the case, a character code is passed in the event, 
  // the key code is set to NoKey. Digits, alpha signs 'A' .. 'Z' and some few special 
  // signs like '+', '-', '*' are handled in a special manner, they are passed as 
  // well as key codes Key0 .. Key9, KeyA .. KeyZ, KeyPlus, KeyMinus, KeyMultiply 
  // and as character codes '0' .. '9', 'A' .. 'Z', '+', '-', '*'.
  _unit.KeyEvent =
  {
    // The variable 'Code' stores the code of the pressed or released key. For UNICODE 
    // characters the character code is stored in the @CharCode variable and the 
    // variable Code is initialized with the value Core::KeyCode.NoKey.
    Code : 0,

    // The variable 'CharCode' stores the UNICODE character code of the pressed 
    // or released character. For key codes the variable is initialized with '\x0000' 
    // and the key code is stored in the variable @Code.
    CharCode : 0,

    // The variable 'Down' determines whether the key has been pressed (Down == 
    // true) or released (Down == false). For target devices, which are not able 
    // to detect the key release, the key release events may be omitted..
    Down : false,

    // The method Initialize2() initializes this Core::KeyEvent object with the 
    // given parameters. This method stores the UNICODE character code aCode in 
    // the variable @CharCode and returns this event object to the caller. The @Code 
    // variable will be initialized with the Core::KeyCode.NoKey value unless a 
    // '0' .. '9', 'A' .. 'Z' character code is passed to this method. In this case 
    // the variable @Code is initialized with the corresponding key code Key0 .. 
    // Key9 or KeyA .. KeyZ.
    Initialize2 : function( aCode, aDown )
    {
      this.Code = 0;
      this.CharCode = aCode;
      this.Down = aDown;

      if (( aCode >= 0x30 ) && ( aCode <= 0x39 ))
        this.Code = ( 10 + aCode ) - 48;

      if (( aCode >= 0x41 ) && ( aCode <= 0x5A ))
        this.Code = ( 105 + aCode ) - 65;

      if (( aCode >= 0x61 ) && ( aCode <= 0x7A ))
        this.Code = ( 105 + aCode ) - 97;

      if ( aCode === 0x20 )
        this.Code = 131;

      if ( !this.Code )
        switch ( aCode )
        {
          case 0x2B :
            this.Code = 132;
          break;

          case 0x2D :
            this.Code = 133;
          break;

          case 0x2A :
            this.Code = 134;
          break;

          case 0x2F :
            this.Code = 135;
          break;

          case 0x3D :
            this.Code = 136;
          break;

          case 0x2E :
            this.Code = 137;
          break;

          case 0x2C :
            this.Code = 138;
          break;

          case 0x3A :
            this.Code = 139;
          break;

          case 0x3B :
            this.Code = 140;
          break;

          default :; 
        }

      return this;
    },

    // The method Initialize() initializes this Core::KeyEvent object with the given 
    // parameters. This method stores the key code aCode in the variable @Code and 
    // returns this event object to the caller. The @CharCode variable will be initialized 
    // with the zero character '\x0000' unless a Key0 .. Key9; KeyA .. KeyZ code 
    // is passed to this method. In this case the variable @CharCode is initialized 
    // with the corresponding UNICODE character code '0' .. '9' or 'A' .. 'Z'.
    Initialize : function( aCode, aDown )
    {
      this.Code = aCode;
      this.Down = aDown;
      this.CharCode = 0x00;

      var cd = aCode - 10;
      var ca = aCode - 105;

      if (( cd >= 0 ) && ( cd <= 9 ))
        this.CharCode = ( 48 + cd ) & 0xFFFF;

      if (( ca >= 0 ) && ( ca <= 25 ))
        this.CharCode = ( 65 + ca ) & 0xFFFF;

      if ( aCode === 131 )
        this.CharCode = 0x20;

      if ( this.CharCode === 0x00 )
        switch ( aCode )
        {
          case 132 :
            this.CharCode = 0x2B;
          break;

          case 133 :
            this.CharCode = 0x2D;
          break;

          case 134 :
            this.CharCode = 0x2A;
          break;

          case 135 :
            this.CharCode = 0x2F;
          break;

          case 136 :
            this.CharCode = 0x3D;
          break;

          case 137 :
            this.CharCode = 0x2E;
          break;

          case 138 :
            this.CharCode = 0x2C;
          break;

          case 139 :
            this.CharCode = 0x3A;
          break;

          case 140 :
            this.CharCode = 0x3B;
          break;

          default :; 
        }

      return this;
    },

    // The method IsCode() compares the key code stored within the event with the 
    // code passed in the parameter aCodeOrCategory and returns 'true' or 'false' 
    // depending on the result of this operation.
    // The method is able to test whether a code does belong to a code category. 
    // Categories are special codes defined in the Core::KeyCode enumeration, like 
    // AlphaKeys, DigitKeys or CursorKeys. They stand for an entire range of key 
    // codes.
    IsCode : function( aCodeOrCategory )
    {
      switch ( aCodeOrCategory )
      {
        case 141 :
          return (( this.CharCode >= 0x41 ) && ( this.CharCode <= 0x5A )) || (( 
            this.CharCode >= 0x61 ) && ( this.CharCode <= 0x7A ));

        case 142 :
          return ((( this.CharCode >= 0x41 ) && ( this.CharCode <= 0x5A )) || (( 
            this.CharCode >= 0x61 ) && ( this.CharCode <= 0x7A ))) || (( this.CharCode 
            >= 0x30 ) && ( this.CharCode <= 0x39 ));

        case 143 :
          return ( this.CharCode >= 0x30 ) && ( this.CharCode <= 0x39 );

        case 144 :
          return ((( this.CharCode >= 0x41 ) && ( this.CharCode <= 0x46 )) || (( 
            this.CharCode >= 0x61 ) && ( this.CharCode <= 0x66 ))) || (( this.CharCode 
            >= 0x30 ) && ( this.CharCode <= 0x39 ));

        case 145 :
          return this.CharCode !== 0x00;

        case 146 :
          return ( this.CharCode === 0x00 ) && !!this.Code;

        case 147 :
          return ((( this.Code === 6 ) || ( this.Code === 7 )) || ( this.Code === 
            4 )) || ( this.Code === 5 );

        case 148 :
          return ( this.CharCode !== 0x00 ) || !!this.Code;

        default :; 
      }

      return aCodeOrCategory === this.Code;
    },

    // Initializer for the class 'Core::KeyEvent'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.Event._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.KeyEvent;
    },

    // Internal variables of this class.
    _className : "Core::KeyEvent"
  };

  // The class Core::CursorGrabEvent provides a specialized event object able to 
  // deliver touch screen events associated with the beginning and the end of a 
  // cursor grab cycle.
  // Each time the user clicks with the mouse cursor on the screen, hits it with 
  // a pen or touches it with his finger, the Mosaic searches for the view, which 
  // is lying at the touched screen position and willing to handle the user interaction. 
  // This found view will become the target for all subsequent cursor events related 
  // to this interaction. This relation is called the 'grab cycle'.
  // The event Core::CursorGrabEvent is used to notify all other views about the 
  // beginning and the end of the grab cycle. With the event the views receive the 
  // information where the user has touched the screen and which view has been selected 
  // as the target.
  // In this manner, although not being the target of the cursor event, the view 
  // can perform operations like to stop a running slide animation etc.
  _unit.CursorGrabEvent =
  {
    // The variable 'Target' refers to the view, which acts as the target in the 
    // grab cycle.
    Target : null,

    // The variable 'GlobalCurrentPos' stores the current cursor position expressed 
    // in the global (screen) coordinate space.
    GlobalCurrentPos : _app._NullPoint,

    // The variable 'StrikeCount' stores how often the user has tapped the screen 
    // in succession. It is one, if the user has single tapped it. It is two if 
    // a double tap took place, and so far.
    // Such series of taps are recognized only when the taps are performed very 
    // quickly and the user doesn't move the finger very much. The appropriate time 
    // delay and the valid range for the movement are determined by the properties 
    // CursorDragLimit and CursorSequelDelay of the class Core::Root.
    StrikeCount : 0,

    // The variable 'Finger' identifies the finger as an event source within a multi-touch 
    // environment. The fingers are numbered with values lying in the range 0 .. 
    // 9.
    Finger : 0,

    // The variable 'Down' determines whether the user is still touching the screen. 
    // If this variable == 'false' the user has released it.
    Down : false,

    // The variable 'AutoDeflected' is 'true', if the event has been sent from the 
    // method Core::Root.DeflectCursor() or Core::Root.RetargetCursor(). These methods 
    // make possible to hand over the cursor from the current target view to another 
    // view. In this manner new target view is determined. The variables allows 
    // you to detect the reason of the event.
    AutoDeflected : false,

    // The method InitializeUp() simplifies the initialization of this Core::CursorGrabEvent 
    // object. This method stores the given parameters in the variables of this 
    // event object, sets its variable @Down 'false' and returns this event object 
    // to the caller.
    InitializeUp : function( aFinger, aStrikeCount, aAutoDeflected, aTarget, aGlobalCurrentPos )
    {
      this.Down = false;
      this.Finger = aFinger;
      this.StrikeCount = aStrikeCount;
      this.GlobalCurrentPos = aGlobalCurrentPos;
      this.Target = aTarget;
      this.AutoDeflected = aAutoDeflected;

      return this;
    },

    // The method InitializeDown() simplifies the initialization of this Core::CursorGrabEvent 
    // object. This method stores the given parameters in the variables of this 
    // event object, sets its variable @Down 'true' and returns this event object 
    // to the caller.
    InitializeDown : function( aFinger, aStrikeCount, aAutoDeflected, aTarget, aGlobalCurrentPos )
    {
      this.Down = true;
      this.Finger = aFinger;
      this.StrikeCount = aStrikeCount;
      this.GlobalCurrentPos = aGlobalCurrentPos;
      this.Target = aTarget;
      this.AutoDeflected = aAutoDeflected;

      return this;
    },

    // Initializer for the class 'Core::CursorGrabEvent'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.Event._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.CursorGrabEvent;
    },

    // Garbage Collector method for the class 'Core::CursorGrabEvent'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.Event._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.Target ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Core::CursorGrabEvent"
  };

  // The class Core::CursorEvent provides a specialized event object able to deliver 
  // touch screen pressure and release events. Each time the user clicks with the 
  // mouse cursor on the screen, hits it with a pen or touches it with his finger, 
  // a cursor event is prepared and dispatched to the view which is willing to handle 
  // it. See the method DriveCursorHitting() of the class Core::Root.
  // The event contains information about the position where the user has tapped 
  // (@HittingPos and @CurrentPos), whether the user has pressed or released the 
  // finger (@Down), how often has the user tapped at the same position (@StrikeCount), 
  // etc.
  // The dispatching of cursor events will always take place in so called 'grab 
  // cycles'. A grab cycle starts when the user touches the screen and exists until 
  // the user has released it. At the beginning the framework determines the view 
  // which is lying at the touched position and is willing to receive cursor events. 
  // This view will become the target for all following events while this grab cycle 
  // -> the view 'grabs' the cursor for this time.
  // Afterwards the target view will receive the first Core::CursorEvent with its 
  // variable @Down == 'true'. At the end of the grab cycle, after the user has 
  // released the finger, the target view will receive the last Core::CursorEvent 
  // with the variable @Down == 'false'. In the meantime the framework will feed 
  // the target view with more events: the hold and the drag events.
  // The hold events are generated periodically in constant intervals. They store 
  // the current cursor position and the time since the grab cycle began @HoldPeriod. 
  // Please note, these hold events are sent with the variable @Down == 'true'. 
  // In order to distinguish between the first event and the following hold events, 
  // the @HoldPeriod variable should be evaluated.
  // Beside the hold events, the target view will also receive drag events as soon 
  // as the user strokes the screen. This is communicated by events of the class 
  // Core::DragEvent.
  _unit.CursorEvent =
  {
    // The variable 'GlobalHittingPos' stores the position where the user has touched 
    // the screen. This is the origin position at the beginning of the grab cycle. 
    // This position is expressed in the global (screen) coordinate space.
    GlobalHittingPos : _app._NullPoint,

    // The variable 'GlobalCurrentPos' stores the current cursor position expressed 
    // in the global (screen) coordinate space.
    GlobalCurrentPos : _app._NullPoint,

    // The variable 'StrikeCount' stores how often the user has tapped the screen 
    // in succession. It is one, if the user has single tapped it. It is two if 
    // a double tap took place, and so far.
    // Such series of taps are recognized only when the taps are performed very 
    // quickly and the user doesn't move the finger very much. The appropriate time 
    // delay and the valid range for the movement are determined by the properties 
    // CursorDragLimit and CursorSequelDelay of the class Core::Root.
    StrikeCount : 0,

    // The variable 'HoldPeriod' stores the time in milliseconds how long the user 
    // is pressing the finger on the screen. This variable is very useful if the 
    // view needs to perform an operation after some time is elapsed. At the begin 
    // of the grab cycle the HoldPeriod == 0.
    HoldPeriod : 0,

    // The variable 'HittingPos' stores the position where the user has touched 
    // the screen. This is the origin position at the beginning of the grab cycle. 
    // This position is valid in the coordinate space of the owner of the target 
    // view. In this manner the position can be compared directly with the coordinates 
    // of the view.
    HittingPos : _app._NullPoint,

    // The variable 'CurrentPos' stores the current cursor position. This position 
    // is valid in the coordinate space of the owner of the target view. In this 
    // manner the position can be compared directly with the coordinates of the 
    // view.
    CurrentPos : _app._NullPoint,

    // The variable 'Finger' identifies the finger as an event source within a multi-touch 
    // environment. The fingers are numbered with values lying in the range 0 .. 
    // 9.
    Finger : 0,

    // The variable 'Down' determines whether the user is still touching the screen. 
    // If this variable == 'false' the user has released it.
    Down : false,

    // The variable 'AutoDeflected' is 'true', if the event has been sent from the 
    // method Core::Root.DeflectCursor() or Core::Root.RetargetCursor(). These methods 
    // make possible to hand over the cursor from the current target view to another 
    // view. In this manner new target view is determined. The variables allows 
    // you to detect the reason of the event.
    AutoDeflected : false,

    // The method InitializeHold() simplifies the initialization of this Core::CursorEvent 
    // object. This method stores the given parameters in the variables of this 
    // event object, sets its variable @Down 'true' and returns this event object 
    // to the caller.
    InitializeHold : function( aFinger, aCurrentPos, aHittingPos, aHoldPeriod, aStrikeCount, 
      aHitOffset, aGlobalCurrentPos, aGlobalHittingPos )
    {
      this.Down = true;
      this.Finger = aFinger;
      this.CurrentPos = _app._MovePointPos( aCurrentPos, aHitOffset );
      this.HittingPos = _app._MovePointPos( aHittingPos, aHitOffset );
      this.HoldPeriod = aHoldPeriod;
      this.StrikeCount = aStrikeCount;
      this.GlobalCurrentPos = aGlobalCurrentPos;
      this.GlobalHittingPos = aGlobalHittingPos;

      return this;
    },

    // The method InitializeUp() simplifies the initialization of this Core::CursorEvent 
    // object. This method stores the given parameters in the variables of this 
    // event object, sets its variable @Down 'false' and returns this event object 
    // to the caller.
    InitializeUp : function( aFinger, aCurrentPos, aHittingPos, aHoldPeriod, aStrikeCount, 
      aHitOffset, aAutoDeflected, aGlobalCurrentPos, aGlobalHittingPos )
    {
      this.Down = false;
      this.Finger = aFinger;
      this.CurrentPos = _app._MovePointPos( aCurrentPos, aHitOffset );
      this.HittingPos = _app._MovePointPos( aHittingPos, aHitOffset );
      this.HoldPeriod = aHoldPeriod;
      this.StrikeCount = aStrikeCount;
      this.AutoDeflected = aAutoDeflected;
      this.GlobalCurrentPos = aGlobalCurrentPos;
      this.GlobalHittingPos = aGlobalHittingPos;

      return this;
    },

    // The method InitializeDown() simplifies the initialization of this Core::CursorEvent 
    // object. This method stores the given parameters in the variables of this 
    // event object, sets its variable @Down 'true' and returns this event object 
    // to the caller.
    InitializeDown : function( aFinger, aCurrentPos, aStrikeCount, aHitOffset, aAutoDeflected, 
      aGlobalCurrentPos )
    {
      this.Down = true;
      this.Finger = aFinger;
      this.CurrentPos = _app._MovePointPos( aCurrentPos, aHitOffset );
      this.HittingPos = _app._MovePointPos( aCurrentPos, aHitOffset );
      this.HoldPeriod = 0;
      this.StrikeCount = aStrikeCount;
      this.AutoDeflected = aAutoDeflected;
      this.GlobalCurrentPos = aGlobalCurrentPos;
      this.GlobalHittingPos = aGlobalCurrentPos;

      return this;
    },

    // Initializer for the class 'Core::CursorEvent'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.Event._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.CursorEvent;
    },

    // Internal variables of this class.
    _className : "Core::CursorEvent"
  };

  // The class Core::DragEvent provides a specialized event object able to deliver 
  // drag events. These events are sent when the user has touched the screen and 
  // then moved the finger. See the method DriveCursorMovement() of the class Core::Root.
  // The event contains information about the position where the user has tapped 
  // (@HittingPos), the current position after the drag operation (@CurrentPos), 
  // the displacement since the last drag event (@Offset), etc.
  // The drag events are sent together with the cursor events Core::CursorEvent.
  _unit.DragEvent =
  {
    // The variable 'GlobalHittingPos' stores the position where the user has touched 
    // the screen. This is the origin position at the beginning of the grab cycle. 
    // This position is expressed in the global (screen) coordinate space.
    GlobalHittingPos : _app._NullPoint,

    // The variable 'GlobalCurrentPos' stores the current cursor position expressed 
    // in the global (screen) coordinate space.
    GlobalCurrentPos : _app._NullPoint,

    // The variable 'StrikeCount' stores how often the user has tapped the screen 
    // in succession. It is one, if the user has single tapped it. It is two if 
    // a double tap took place, and so far.
    // Such series of taps are recognized only when the taps are performed very 
    // quickly and the user doesn't move the finger very much. The appropriate time 
    // delay and the valid range for the movement are determined by the properties 
    // CursorDragLimit and CursorSequelDelay of the class Core::Root.
    StrikeCount : 0,

    // The variable 'HoldPeriod' stores the time in milliseconds how long the user 
    // is pressing the finger on the screen. This variable is very useful if the 
    // view needs to perform an operation after some time is elapsed. At the begin 
    // of the grab cycle the HoldPeriod == 0.
    HoldPeriod : 0,

    // The variable 'Offset' stores the displacement since the last drag event.
    Offset : _app._NullPoint,

    // The variable 'HittingPos' stores the position where the user has touched 
    // the screen. This is the origin position at the beginning of the grab cycle. 
    // This position is valid in the coordinate space of the owner of the target 
    // view. In this manner the position can be compared directly with the coordinates 
    // of the view.
    HittingPos : _app._NullPoint,

    // The variable 'CurrentPos' stores the current cursor position. This position 
    // is valid in the coordinate space of the owner of the target view. In this 
    // manner the position can be compared directly with the coordinates of the 
    // view.
    CurrentPos : _app._NullPoint,

    // The variable 'Finger' identifies the finger as an event source within a multi-touch 
    // environment. The fingers are numbered with values lying in the range 0 .. 
    // 9.
    Finger : 0,

    // The method Initialize() simplifies the initialization of this Core::DragEvent 
    // object. This method stores the given parameters in the variables of this 
    // event object and returns this event object to the caller.
    Initialize : function( aFinger, aCurrentPos, aHittingPos, aOffset, aHoldPeriod, 
      aSequelCount, aHitOffset, aGlobalCurrentPos, aGlobalHittingPos )
    {
      this.Finger = aFinger;
      this.CurrentPos = _app._MovePointPos( aCurrentPos, aHitOffset );
      this.HittingPos = _app._MovePointPos( aHittingPos, aHitOffset );
      this.Offset = aOffset;
      this.HoldPeriod = aHoldPeriod;
      this.StrikeCount = aSequelCount;
      this.GlobalCurrentPos = aGlobalCurrentPos;
      this.GlobalHittingPos = aGlobalHittingPos;

      return this;
    },

    // Initializer for the class 'Core::DragEvent'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.Event._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.DragEvent;
    },

    // Internal variables of this class.
    _className : "Core::DragEvent"
  };

  // The class Core::Outline provides a special kind of a view able to unite and 
  // control its sibling views. It acts like a lightweight container for the views 
  // without being the owner of them:
  // - Outline can control only views lying in front of it (views with higher Z-order). 
  // Furthermore the affected views have to be signed explicitly with the state 
  // 'Embedded'. Views lying behind the outline or views not signed as embedded 
  // are ignored by the outline - they are controlled by their @Owner.
  // - Outline limits the visibility of the embedded views to its own boundary area. 
  // In this manner the views are clipped at the outlines edges.
  // - Moving the outline causes the embedded views to be moved accordingly. Together 
  // with the outline the views behave like a single union.
  // - The embedded views can be scrolled within the outline boundary area. The 
  // property @ScrollOffset determines the desired displacement.
  // - A Core::SlideTouchHandler can be attached to the outline so the user can 
  // scroll the outline content interactively by touching the screen. The property 
  // @SlideHandler allows it. 
  // - If the size of the outline changes, all embedded views are automatically 
  // arranged within the outline boundary accordingly to their @Layout properties.
  // - The property @Formation allows more sophisticated arrangement of embedded 
  // views in columns and rows. Even table-like grid is possible. It is useful to 
  // create scrollable menus or lists. With the properties @SpaceHorz, @SpaceVert 
  // and @Space the padding between the automatically arranged views is controlled.
  // - To find and enumerate the embedded views, the methods like @FindNextView(), 
  // @FindPrevView(), @FindViewAtPosition, @FindViewInDirection() or @GetViewAtIndex() 
  // are available. 
  // - The method @EnsureVisible() has the job to scroll the outline contents until 
  // the given view is visible. The method @AdjustContent() in contrast tries to 
  // scroll the outline so the entire outline area is filled with views. Usually 
  // this is used after the outline size changes.
  // The outline itself is invisible except the Embedded Wizard Composer, where 
  // all outlines appear as semitransparent rectangles. This allows you to interact 
  // with the outlines during the design time.
  _unit.Outline =
  {
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
    },

    // Implementation of the Chora method : 'Core::Outline.OnSetBounds()'
    OnSetBounds : function( value )
    {
      var _tmp;

      if ( _app._IsEqualRect( value, this.Bounds ))
        return;

      var oldSize = [( _tmp = this.Bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]];
      var newSize = [ value[2] - value[0], value[3] - value[1]];
      var resize = !_app._IsEqualPoint( oldSize, newSize );
      var offset = _app._MovePointNeg( value.slice(0,2), this.Bounds.slice(0,2));

      if ( !_app._IsEqualPoint( offset, _0000 ) && !resize )
      {
        var view = this.next;

        while ( !!view && !(( view.viewState & 0x200 ) === 0x200 ))
        {
          if ((( view.viewState & 0x400 ) === 0x400 ))
          {
            var tmp = (( view.viewState & 0x100 ) === 0x100 );

            view.MoveView( offset, tmp );
          }

          view = view.next;
        }
      }

      if (( resize && ( oldSize[0] > 0 )) && ( oldSize[1] > 0 ))
      {
        var bounds = this.Bounds;
        var view = this.next;

        while ( !!view && !(( view.viewState & 0x200 ) === 0x200 ))
        {
          if ((( view.viewState & 0x400 ) === 0x400 ))
          {
            if ( !!view.layoutContext && ( view.layoutContext.outline !== this ))
              view.layoutContext = null;

            if ( !view.layoutContext && ( view.Layout !== 0x14 ))
              view.initLayoutContext( bounds, this );
          }

          view = view.next;
        }
      }

      _unit.RectView.OnSetBounds.call( this, value );

      if ( !!this.Owner && resize )
      {
        this.viewState = this.viewState | 0x1000;

        if ( !(( this.Owner.viewState & 0x2000 ) === 0x2000 ))
        {
          this.Owner.viewState = this.Owner.viewState | 0x4000;
          _app._PostSignal([ _tmp = this.Owner, _tmp.updateComponent ], this );
        }
      }
    },

    // Initializer for the class 'Core::Outline'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.RectView._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Outline;

      // ... and initialize objects, variables, properties, etc.
      this.viewState = 0x203;
    },

    // Internal variables of this class.
    _className : "Core::Outline"
  };

  // The class Core::VerticalList provides a generic vertical list view. Its purpose 
  // is the presentation and the management of list items. Within the view the items 
  // can be scrolled and the user can select them. This is very useful to show e.g. 
  // the records from a data base. Within the view the items are arranged vertically 
  // from top to bottom. If horizontal arrangement is desired, please use the class 
  // Core::HorizontalList.
  // - All items within the list view are objects of a predetermined item class. 
  // Depending on this class, simple text items, image items or even complex GUI 
  // components can be shown there. This class is defined in the property @ItemClass. 
  // Please note, that only classes derived from Core::View are able to be shown. 
  // For example, if you want to create a list of images, assign Views::Image to 
  // this property. The height of all items is determined by the property @ItemHeight.
  // - The entire number of list items is defined by the property @NoOfItems. By 
  // changing this property the list can grow or it can shrink. Usually this value 
  // corresponds to the number of items within the associated data source, e.g. 
  // to the number of records in a data base.
  // - This view is optimized to handle with very large lists consisting of thousand 
  // of items. To preserve the memory, only the visible items will be stored there. 
  // These will be created, loaded and discarded again automatically by the list 
  // view. The only thing you have to provide is an external slot method, which 
  // is connected to the view's property @OnLoadItem. Its job is to load an item 
  // with its content from a data source. The affected item and its list index are 
  // available in the variables @View and @Item.
  // - The content of the list can be scrolled by modifying the property @ScrollOffset. 
  // Additionally a Core::SlideTouchHandler can be attached to the list view so 
  // the user can scroll the items interactively by touching the screen. The property 
  // @SlideHandler allows it. 
  // - With the property @Endless the list can be configured to start just after 
  // the last item again with the first item.
  // - The both properties @PaddingTop and @PaddingBottom permit to reserve additional 
  // space just before the first and after the last item.
  // - Within the list view one item can be selected. The index of the affected 
  // item is stored in the property @SelectedItem. If the list view is focused, 
  // this item also becomes focused. Focused items automatically receive keyboard 
  // events.
  // - The method @GetItemsArea() is useful if the area occupied by one or more 
  // items should be calculated. In contrast the method @GetItemAtPosition() tries 
  // to determines the item which is lying at a given position.
  // - The method @InvalidateItems() forces the list to re-load one or more items. 
  // This method is very useful if the content of the affected items has been altered 
  // in the associated data source.
  // - The method @EnsureVisible() has the job to scroll the list until the given 
  // item is visible. The method @AdjustList() in contrast tries to scroll the list 
  // so the entire list view area is filled with items. Usually this is used after 
  // the list size changes.
  _unit.VerticalList =
  {
    itemsPool : _app._NewArray( 8, null, null ),

    // The variable 'View' refers to the item which is about to be loaded by the 
    // external slot method @OnLoadItem. In this manner the slot method can directly 
    // access and modify the item's properties. Please note, the class of the item 
    // is predetermined by the property @ItemClass. The index of the item is available 
    // in the variable @Item.
    View : null,

    // The property 'SlideHandler' provides an interface, where a slide handler 
    // can be attached. In this manner the handler can control the list view and 
    // the user can scroll its content by simply touching the slide handler on the 
    // screen.
    SlideHandler : null,

    // The property 'OnLoadItem' should refer to a slot method, which will be invoked 
    // by the list view in order to load an item with its corresponding content. 
    // Within the slot method the index of the affected item and the item's view 
    // can be accessed. For this purpose the variables @Item and @View are available. 
    // Please note, the class of the item is predetermined by the property @ItemClass. 
    // Therefore you will explicitly need to typecast the @View variable to this 
    // class before accessing any of its properties.
    OnLoadItem : null,
    invalidTail : -1,
    invalidHead : 0,
    validTail : -1,
    validHead : 0,
    itemsPoolSize : 0,

    // The variable 'Item' stores the index of the item which is about to be loaded 
    // by the external slot method @OnLoadItem. In this manner the slot method can 
    // determine the corresponding content in the associated data source. The first 
    // item has the index 0, the second 1, and so far. The item itself is available 
    // in the variable @View.
    Item : -1,

    // The property 'ScrollOffset' stores the displacement of the list content. 
    // Changing of this property automatically causes the list to move its items 
    // accordingly.
    ScrollOffset : 0,

    // The property 'ItemHeight' stores the height of all items within the list 
    // and is expressed in pixel.
    ItemHeight : 24,

    // The property 'NoOfItems' stores how many items are currently managed within 
    // the list. This value should correspond to the number of e.g. records in the 
    // associated data source.
    NoOfItems : 0,

    // The property 'ItemClass' determines the kind of items to display in the list. 
    // Depending on this class, simple text items, image items or even complex GUI 
    // components can be shown. At the runtime the list view uses this class to 
    // create new items dynamically. The loading of the items is realized by an 
    // external slot method which should be assigned to the property @OnLoadItem. 
    // Please note, that only classes derived from Core::View are able to be shown.
    ItemClass : null,
    loading : false,

    // The method DispatchEvent() feeds the component with the event passed in the 
    // parameter aEvent and propagates it along the so-called focus path. This focus 
    // path leads to the currently selected keyboard event receiver view. If the 
    // event is rejected by the view, the same operation is repeated for the next 
    // superior view. This permits the hierarchical event dispatching until a willing 
    // view has handled the event or all views in the focus path have been evaluated. 
    // If the event remains still unhandled, it will be passed to the component 
    // itself.
    // The focus path is established by the property @Focus. 
    // DispatchEvent() returns the value returned by the @HandleEvent() method of 
    // the view which has handled the event. In the case, the event was not handled, 
    // the method returns 'null'.
    DispatchEvent : function( aEvent )
    {
      var result;

      result = _unit.Group.DispatchEvent.call( this, aEvent );

      return result;
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

      if ( !this.ItemClass )
        return;

      this.loading = true;

      var head = (( 0 - this.ScrollOffset ) / this.ItemHeight ) | 0;
      var tail = ((((( _tmp = this.Bounds )[3] - _tmp[1]) - this.ScrollOffset ) 
        - 1 ) / this.ItemHeight ) | 0;
      var count = ((((( _tmp = this.Bounds )[3] - _tmp[1]) + this.ItemHeight ) - 
        1 ) / this.ItemHeight ) | 0;

      if ( count < 1 )
        count = 1;

      var cache2 = ( count / 2 ) | 0;
      var cache3 = ( count / 3 ) | 0;

      if ( !cache2 )
        cache2 = 1;

      if ( !cache3 )
        cache3 = 1;

      if ( head < this.validHead )
      {
        head = head - cache2;
        tail = tail + cache3;
      }
      else
        if ( tail > this.validTail )
        {
          head = head - cache3;
          tail = tail + cache2;
        }
        else
        {
          head = this.validHead;
          tail = this.validTail;
        }

      if ( head >= this.NoOfItems )
      {
        head = 0;
        tail = -1;
      }
      else
        if ( tail < 0 )
        {
          head = 0;
          tail = -1;
        }

      if ( tail >= this.NoOfItems )
        tail = this.NoOfItems - 1;

      if ( head < 0 )
        head = 0;

      var reuseHead = this.validHead;
      var reuseTail = this.validTail;
      var loadHead = 0;
      var loadTail = -1;

      if ( head > reuseHead )
        reuseHead = head;

      if ( tail < reuseTail )
        reuseTail = tail;

      if ( reuseHead <= reuseTail )
      {
        while (( this.validTail < tail ) && ( this.validHead < reuseHead ))
        {
          this.releaseHeadItem();
          this.confirmTailItem();
        }

        while (( this.validHead > head ) && ( this.validTail > reuseTail ))
        {
          this.releaseTailItem();
          this.confirmHeadItem();
        }
      }
      else
      {
        this.validTail = ( this.validTail - this.validHead ) + head;
        this.validHead = head;
        loadHead = this.validHead;
        loadTail = this.validTail;
      }

      while ( this.validHead < head )
        this.releaseHeadItem();

      while ( this.validTail > tail )
        this.releaseTailItem();

      while ( this.validHead > head )
        this.confirmHeadItem();

      while ( this.validTail < tail )
        this.confirmTailItem();

      var item = this.first;
      var inx = this.validHead;
      var pos = [ 0, this.ScrollOffset + ( inx * this.ItemHeight )];
      var h = ( _tmp = this.Bounds )[3] - _tmp[1];
      var ih = this.ItemHeight;
      var fi = null;

      while ( !!item )
      {
        var ofs = _app._MovePointNeg( pos, item.GetExtent().slice(0,2));
        var iy1 = pos[1];
        var iy2 = pos[1] + ih;
        var inxN = inx;

        if ( !_app._IsEqualPoint( ofs, _0000 ))
          item.MoveView( ofs, true );

        if ((((( inxN >= this.invalidHead ) && ( inxN <= this.invalidTail )) || 
            (( inx >= loadHead ) && ( inx <= loadTail ))) && ( iy1 < h )) && ( iy2 
            > 0 ))
        {
          this.View = item;
          this.Item = inxN;
          ( _tmp = this.OnLoadItem )? _tmp[1].call( _tmp[0], this ) : null;
        }

        item = item.next;
        inx = inx + 1;
        pos = [ pos[0], pos[1] + this.ItemHeight ];
      }

      inx = this.validHead;
      item = this.first;
      pos = [ 0, this.ScrollOffset + ( inx * this.ItemHeight )];

      while ( !!item )
      {
        var iy1 = pos[1];
        var iy2 = pos[1] + ih;
        var inxN = inx;

        if (((( inxN >= this.invalidHead ) && ( inxN <= this.invalidTail )) || (( 
            inx >= loadHead ) && ( inx <= loadTail ))) && !(( iy1 < h ) && ( iy2 
            > 0 )))
        {
          this.View = item;
          this.Item = inxN;
          ( _tmp = this.OnLoadItem )? _tmp[1].call( _tmp[0], this ) : null;
        }

        if ( inxN === -1 )
          fi = item;

        item = item.next;
        inx = inx + 1;
        pos = [ pos[0], pos[1] + this.ItemHeight ];
      }

      this.invalidHead = 0;
      this.invalidTail = -1;
      this.View = null;
      this.Item = -1;
      this.OnSetFocus( fi );
      this.loading = false;
    },

    // The method FindSiblingView() searches for a sibling view of the view specified 
    // in the parameter aView - aView itself will be excluded from the search operation.
    // The method combines the functionality of @FindNextView() and @FindPrevView() 
    // and tries to find any neighbor view (regarding the Z-order not the position).
    // The additional parameter aFilter can be used to limit the search operation 
    // to special views only, e.g. to visible and touchable views.
    // If there are no other views complying the filter condition, the method returns 
    // 'null'. In contrast to other find methods, FindSiblingView() will fail, if 
    // it has been invoked with aView == 'null'.
    FindSiblingView : function( aView, aFilter )
    {
      return null;
    },

    // The method RestackTop() elevates the view aView to the top of its component. 
    // After this operation the view is usually not covered by any sibling views. 
    // This method modifies the Z-order of the view. The effective stacking position 
    // of the view can additionally be affected by the value of the view's property 
    // @StackingPriority. Concrete, the view can't be be arranged in front of any 
    // sibling view configured with higher @StackingPriority value. In such case 
    // calling the method RestackTop() will arrange the view just behind the sibling 
    // view with next higher @StackingPriority value.
    // Please note, changing the Z-order of views within a component containing 
    // a Core::Outline view can cause this outline to update its automatic row or 
    // column formation.
    RestackTop : function( aView )
    {
      throw new Error(  _000F  );
    },

    // The method Restack() changes the Z-order of views in the component. Depending 
    // on the parameter aOrder the method will elevate or lower the given view aView. 
    // If aOrder is negative, the view will be lowered to the background. If aOrder 
    // is positive, the view will be elevated to the foreground. If aOrder == 0, 
    // no modification will take place.
    // The absolute value of aOrder determines the maximum number of sibling views 
    // the view has to skip over in order to reach its new Z-order. The effective 
    // stacking position of the view can additionally be affected by the value of 
    // the view's property @StackingPriority. Concrete, the view is prevented from 
    // being arranged in front of any sibling view configured with a higher @StackingPriority 
    // value. Similarly the view can't be arranged behind any sibling view having 
    // lower @StackingPriority value.
    // Please note, changing the Z-order of views within a component containing 
    // a Core::Outline view can cause this outline to update its automatic row or 
    // column formation.
    Restack : function( aView, aOrder )
    {
      throw new Error(  _0010  );
    },

    // The method Remove() removes the given view aView from the component. After 
    // this operation the view doesn't belong anymore to the component - the view 
    // is not visible and it can't receive any events.
    // Please note, removing of views from a component containing a Core::Outline 
    // view can cause this outline to update its automatic row or column formation.
    // Please note, it the removed view is currently selected by the @Focus property, 
    // the framework will automatically select other sibling view, which will be 
    // able to react to keyboard events.
    Remove : function( aView )
    {
      throw new Error(  _0011  );
    },

    // The method Add() inserts the given view aView into this component and places 
    // it at a Z-order position resulting primarily from the parameter aOrder. The 
    // parameter determines the number of sibling views the view has to skip over 
    // starting with the top most view. If aOrder == 0, the newly added view will 
    // obtain the top most position. If the value is negative, the view will be 
    // lowered to the background accordingly to the absolute value of aOrder. After 
    // this operation the view belongs to the component - the view can appear on 
    // the screen and it can receive events.
    // The effective stacking position of the view can additionally be affected 
    // by the value of the view's property @StackingPriority. Concrete, the view 
    // is prevented from being arranged in front of any sibling view configured 
    // with a higher @StackingPriority value. Similarly the view can't be arranged 
    // behind any sibling view having lower @StackingPriority value.
    // Please note, adding of views to a component containing a Core::Outline view 
    // can cause this outline to update its automatic row or column formation.
    Add : function( aView, aOrder )
    {
      throw new Error(  _0012  );
    },

    // Implementation of the Chora method : 'Core::VerticalList.releaseTailItem()'
    releaseTailItem : function()
    {
      var item = this.last;

      if ( !item )
        return null;

      if ( item === this.Focus )
        this.OnSetFocus( null );

      this.validTail = this.validTail - 1;

      if ( !!item.prev )
        item.prev.next = null;
      else
        this.first = null;

      this.last = item.prev;
      item.prev = null;
      item.Owner = null;
      item.layoutContext = null;

      if ( this.itemsPoolSize < 8 )
      {
        this.itemsPool.Set( this.itemsPoolSize, item );
        this.itemsPoolSize = this.itemsPoolSize + 1;
      }

      return item;
    },

    // Implementation of the Chora method : 'Core::VerticalList.confirmTailItem()'
    confirmTailItem : function()
    {
      var _tmp;
      var item = null;

      if ( !this.itemsPoolSize )
      {
        item = ( _unit.View.isPrototypeOf( _tmp = _app._NewObject( this.ItemClass, 
        0 ))? _tmp : null );
        item.OnSetLayout( 0x1D );
      }
      else
      {
        this.itemsPoolSize = this.itemsPoolSize - 1;
        item = this.itemsPool.Get( this.itemsPoolSize );
      }

      this.validTail = this.validTail + 1;

      var validTailN = this.validTail;

      this.Item = validTailN;
      this.View = item;
      ( _tmp = this.OnLoadItem )? _tmp[1].call( _tmp[0], this ) : null;
      this.View = null;
      this.Item = -1;

      if ( !!this.last )
        this.last.next = item;

      item.Owner = this;
      item.prev = this.last;
      this.last = item;

      if ( !this.first )
        this.first = item;

      if ( validTailN === -1 )
        this.OnSetFocus( item );

      return item;
    },

    // Implementation of the Chora method : 'Core::VerticalList.clearPool()'
    clearPool : function()
    {
      while ( this.itemsPoolSize > 0 )
      {
        this.itemsPoolSize = this.itemsPoolSize - 1;
        this.itemsPool.Set( this.itemsPoolSize, null );
      }
    },

    // Implementation of the Chora method : 'Core::VerticalList.releaseHeadItem()'
    releaseHeadItem : function()
    {
      var item = this.first;

      if ( !item )
        return null;

      if ( item === this.Focus )
        this.OnSetFocus( null );

      this.validHead = this.validHead + 1;

      if ( !!item.next )
        item.next.prev = null;
      else
        this.last = null;

      this.first = item.next;
      item.next = null;
      item.Owner = null;
      item.layoutContext = null;

      if ( this.itemsPoolSize < 8 )
      {
        this.itemsPool.Set( this.itemsPoolSize, item );
        this.itemsPoolSize = this.itemsPoolSize + 1;
      }

      return item;
    },

    // Implementation of the Chora method : 'Core::VerticalList.confirmHeadItem()'
    confirmHeadItem : function()
    {
      var _tmp;
      var item = null;

      if ( !this.itemsPoolSize )
      {
        item = ( _unit.View.isPrototypeOf( _tmp = _app._NewObject( this.ItemClass, 
        0 ))? _tmp : null );
        item.OnSetLayout( 0x1D );
      }
      else
      {
        this.itemsPoolSize = this.itemsPoolSize - 1;
        item = this.itemsPool.Get( this.itemsPoolSize );
      }

      this.validHead = this.validHead - 1;

      var validHeadN = this.validHead;

      this.Item = validHeadN;
      this.View = item;
      ( _tmp = this.OnLoadItem )? _tmp[1].call( _tmp[0], this ) : null;
      this.View = null;
      this.Item = -1;

      if ( !!this.first )
        this.first.prev = item;

      item.Owner = this;
      item.next = this.first;
      this.first = item;

      if ( !this.last )
        this.last = item;

      if ( validHeadN === -1 )
        this.OnSetFocus( item );

      return item;
    },

    // Implementation of the Chora method : 'Core::VerticalList.onSlideSlot()'
    onSlideSlot : function( sender )
    {
      this.OnSetScrollOffset( this.SlideHandler.Offset[1]);
    },

    // Implementation of the Chora method : 'Core::VerticalList.onStartSlideSlot()'
    onStartSlideSlot : function( sender )
    {
      var _tmp;

      {
        var area = this.GetItemsArea( 0, this.NoOfItems - 1 );
        var origin = this.Bounds.slice(0,2);

        if ( area[0] > origin[0])
          area = [].concat( origin[0], area.slice(1,4));

        if ( area[1] > origin[1])
          area = _app._SetRectY1( area, origin[1]);

        var offset = area[1] - this.Bounds[1];
        var minOffset = (( _tmp = this.Bounds )[3] - _tmp[1]) - ( area[3] - area[1]);

        if ( minOffset > 0 )
          minOffset = 0;

        this.SlideHandler.Offset = [ 0, this.ScrollOffset ];
        this.SlideHandler.MinOffset = [ 0, ( this.ScrollOffset + minOffset ) - offset ];
        this.SlideHandler.MaxOffset = [ 0, this.ScrollOffset - offset ];
      }
    },

    // Implementation of the Chora method : 'Core::VerticalList.OnSetSlideHandler()'
    OnSetSlideHandler : function( value )
    {
      if ( value === this.SlideHandler )
        return;

      if ( !!value && !!value.privateOnSlide )
      {
        _app._Trace( "%s%$%*%s", _0013, value, _0014 );
        throw new Error(  _0015  );
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

    // Implementation of the Chora method : 'Core::VerticalList.OnSetScrollOffset()'
    OnSetScrollOffset : function( value )
    {
      var _tmp;

      if ( value === this.ScrollOffset )
        return;

      this.ScrollOffset = value;
      this.InvalidateViewState();
      this.InvalidateArea([ 0, 0, ( _tmp = this.Bounds )[2] - _tmp[0], _tmp[3] - 
      _tmp[1]]);
    },

    // Implementation of the Chora method : 'Core::VerticalList.OnSetItemHeight()'
    OnSetItemHeight : function( value )
    {
      var _tmp;

      if ( value < 1 )
        value = 1;

      if ( value === this.ItemHeight )
        return;

      this.ItemHeight = value;

      while ( !!this.releaseHeadItem())
        ;

      this.InvalidateViewState();
      this.InvalidateArea([ 0, 0, ( _tmp = this.Bounds )[2] - _tmp[0], _tmp[3] - 
      _tmp[1]]);
    },

    // Implementation of the Chora method : 'Core::VerticalList.OnSetNoOfItems()'
    OnSetNoOfItems : function( value )
    {
      var _tmp;

      if ( value < 0 )
        value = 0;

      if ( value === this.NoOfItems )
        return;

      var area = [ 0, 0, ( _tmp = this.Bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]];

      if ( value > this.NoOfItems )
      {
        area = _app._SetRectY1( area, this.ScrollOffset + ( this.NoOfItems * this.ItemHeight ));
        area = [].concat( area.slice(0,3), this.ScrollOffset + ( value * this.ItemHeight ));
      }
      else
      {
        area = _app._SetRectY1( area, this.ScrollOffset + ( value * this.ItemHeight ));
        area = [].concat( area.slice(0,3), this.ScrollOffset + ( this.NoOfItems 
        * this.ItemHeight ));
      }

      this.NoOfItems = value;
      this.InvalidateViewState();
      this.InvalidateArea( area );
    },

    // Implementation of the Chora method : 'Core::VerticalList.OnSetItemClass()'
    OnSetItemClass : function( value )
    {
      var _tmp;

      if ( value === this.ItemClass )
        return;

      this.ItemClass = value;

      while ( !!this.releaseHeadItem())
        ;

      this.clearPool();
      this.InvalidateViewState();
      this.InvalidateArea([ 0, 0, ( _tmp = this.Bounds )[2] - _tmp[0], _tmp[3] - 
      _tmp[1]]);
    },

    // The method GetItemsArea() determines a rectangular area within the list view 
    // occupied by one or more items. The index of the item to start the calculation 
    // is specified in the parameter aFirstItem. The parameter aLastItem specifies 
    // the index of the last affected item. The first item has the index 0, the 
    // second 1, and so far. The determined area is expressed in coordinates relative 
    // to the top-left corner of the view's @Owner. If none of the specified items 
    // does exist, the method returns an empty area.
    // Please note, if the list is configured with the property @Endless == 'true', 
    // multiple copies of one and the same item may be displayed on the screen. 
    // In such case the method returns the area corresponding to the first set of 
    // items lying actually within the list view.
    GetItemsArea : function( aFirstItem, aLastItem )
    {
      if ( aFirstItem < 0 )
        aFirstItem = 0;

      if ( aLastItem >= this.NoOfItems )
        aLastItem = this.NoOfItems - 1;

      if ( aFirstItem > aLastItem )
        return _0001;

      var area = this.Bounds;
      var ofs = this.ScrollOffset;

      area = _app._SetRectY1( area, ( area[1] + ofs ) + ( aFirstItem * this.ItemHeight ));
      area = [].concat( area.slice(0,3), area[1] + ((( aLastItem - aFirstItem ) 
      + 1 ) * this.ItemHeight ));

      return area;
    },

    // The method InvalidateItems() forces the list to reload one or more items. 
    // The index of the item to start the reload operation is specified in the parameter 
    // aFirstItem. The parameter aLastItem specifies the index of the last affected 
    // item. The first item has the index 0, the second 1, and so far. The operation 
    // can cause the list view to invoke the external @OnLoadItem slot method for 
    // each affected item.
    InvalidateItems : function( aFirstItem, aLastItem )
    {
      var _tmp;

      if ( aFirstItem < 0 )
        aFirstItem = 0;

      if ( aFirstItem > aLastItem )
        return;

      if ( this.invalidHead > this.invalidTail )
      {
        this.invalidHead = aFirstItem;
        this.invalidTail = aLastItem;
      }
      else
      {
        if ( aFirstItem < this.invalidHead )
          this.invalidHead = aFirstItem;

        if ( aLastItem > this.invalidTail )
          this.invalidTail = aLastItem;
      }

      var area = [ 0, 0, ( _tmp = this.Bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]];

      area = _app._SetRectY1( area, this.ScrollOffset + ( aFirstItem * this.ItemHeight ));
      area = [].concat( area.slice(0,3), this.ScrollOffset + (( aLastItem + 1 ) 
      * this.ItemHeight ));
      this.InvalidateViewState();
      this.InvalidateArea( area );
    },

    // Initializer for the class 'Core::VerticalList'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.Group._Init.call( this, aArg );

      // Then create and initialize all new arrays ...
      ( this.itemsPool = []).__proto__ = _unit.VerticalList.itemsPool;

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.VerticalList;

      // ... and initialize objects, variables, properties, etc.
      this.OnSetBounds( _0016 );
      this.ItemClass = _app.Views.Text;
    },

    // Garbage Collector method for the class 'Core::VerticalList'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.Group._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      _app._MarkObjects( this.itemsPool, aCycle );
      if (( _tmp = this.View ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.SlideHandler ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnLoadItem ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Core::VerticalList"
  };

  // The class Core::SimpleTouchHandler provides a special kind of a view able to 
  // react to touch screen events. Each time the user taps inside the area of the 
  // handler view, the handler send signals to slot methods stored in its various 
  // properties. For example, if there is a slot method assigned to the property 
  // @OnPress, the handler will send a signal to this slot method as soon as the 
  // user has touched the handler view area. The intention of this handler is to 
  // cover the internal aspects of the cursor event handling.
  // The simple touch handler recognizes the tap and drag operations only. More 
  // sophisticated gesture handlers are available in other classes, e.g. Core::RotateTouchHandler 
  // is able to recognize the rotation gesture.
  // The touch area can assume any quad shape (4 corners polygon). Each corner can 
  // be placed separately by the @Point1 .. @Point4 properties. In this manner fancy, 
  // non rectangular touch areas can be determined.
  // The handler provides several variables useful to query e.g. the current touch 
  // position (@CurrentPos), etc. These variables can be simply evaluated in the 
  // implementation of the slot method.
  // If this handler is intended to process multi-touch events (the property @EnableMultiTouch 
  // is 'true' and the target system can feed the application with multi-touch events) 
  // you should additionally evaluate the variable @Finger, which helps you to distinguish 
  // the touch events. Alternatively, the handler can be configured to react to 
  // multi-touch gestures (e.g. two finger taps) performed by two or more fingers 
  // by specifying the expected number of fingers in the property @NoOfFingers. 
  // With the property @LimitToFinger the handler can be limited to react to events 
  // generated by a particular finger only.
  // The property @Enabled can be used to activate/deactivate the touch handler. 
  // Disabled handler will not react to user taps.
  // With the properties @RetargetCondition, @RetargetOffset and @RetargetDelay 
  // the handler can be configured to automatically deflect the current event processing 
  // to another handler as soon as the user has performed a simple gesture, e.g. 
  // wipe down. Using these properties several handler can cooperate during an active 
  // user interaction even if these handler overlap each other. For example, one 
  // handler can process horizontal gestures while another handler will limit to 
  // vertical gestures, etc.
  // Due to its ancestry from the Core::View class, the touch handler can be arranged 
  // within its @Owner or if @Embedded == 'true' within the boundary area of an 
  // Core::Outline view in the same manner as it is done with all regular views.
  // The touch handler itself is invisible except the Embedded Wizard Composer, 
  // where all handler appear as semitransparent quads. This allows you to interact 
  // with the handlers during the design time.
  _unit.SimpleTouchHandler =
  {
    // The property 'OnDrag' can refer to a slot method, which should be invoked 
    // by the handler after the user has touched the handler and dragged the finger. 
    // It's up to you to provide the slot method and to fill it with the desired 
    // behavior. Within the slot method the current state of the handler variables 
    // like @CurrentPos, @Inside, etc. can be evaluated. If this property is 'null', 
    // no method is invoked.
    // If this handler is intended to process multi-touch events (the property @EnableMultiTouch 
    // is 'true' and the target system can feed the application with multi-touch 
    // events) you should additionally evaluate the variable @Finger, which helps 
    // you to distinguish the touch events.
    OnDrag : null,

    // The property 'OnLeave' can refer to a slot method, which should be invoked 
    // by the handler when while dragging the finger the user has left the handler 
    // area.
    // It's up to you to provide the slot method and to fill it with the desired 
    // behavior. Within the slot method the current state of the handler variables 
    // like @CurrentPos, @Inside, etc. can be evaluated. If this property is 'null', 
    // no method is invoked.
    // If this handler is intended to process multi-touch events (the property @EnableMultiTouch 
    // is 'true' and the target system can feed the application with multi-touch 
    // events) you should additionally evaluate the variable @Finger, which helps 
    // you to distinguish the touch events.
    OnLeave : null,

    // The property 'OnEnter' can refer to a slot method, which should be invoked 
    // by the handler when while dragging the finger the user has entered the handler 
    // area.
    // It's up to you to provide the slot method and to fill it with the desired 
    // behavior. Within the slot method the current state of the handler variables 
    // like @CurrentPos, @Inside, etc. can be evaluated. If this property is 'null', 
    // no method is invoked.
    // If this handler is intended to process multi-touch events (the property @EnableMultiTouch 
    // is 'true' and the target system can feed the application with multi-touch 
    // events) you should additionally evaluate the variable @Finger, which helps 
    // you to distinguish the touch events.
    OnEnter : null,

    // The property 'OnHold' can refer to a slot method, which should be invoked 
    // by the handler during the entire touch interaction. The method is invoked 
    // periodically in constant intervals, like a continuous fire of taps.
    // It's up to you to provide the slot method and to fill it with the desired 
    // behavior. Within the slot method the current state of the handler variables 
    // like @CurrentPos, @Inside, etc. can be evaluated. If this property is 'null', 
    // no method is invoked.
    // If this handler is intended to process multi-touch events (the property @EnableMultiTouch 
    // is 'true' and the target system can feed the application with multi-touch 
    // events) you should additionally evaluate the variable @Finger, which helps 
    // you to distinguish the touch events.
    OnHold : null,

    // The property 'OnRelease' can refer to a slot method, which should be invoked 
    // by the handler after the user has finished the touch interaction or the cursor 
    // event flow was redirected to another target view by an explicit invocation 
    // of the method Core::Root.DeflectCursor() or Core::Root.RetargetCursor().
    // It's up to you to provide the slot method and to fill it with the desired 
    // behavior. Within the slot method the current state of the handler variables 
    // like @Inside, @HoldPeriod, @AutoDeflected, etc. can be evaluated. If this 
    // property is 'null', no method is invoked.
    // If this handler is intended to process multi-touch events (the property @EnableMultiTouch 
    // is 'true' and the target system can feed the application with multi-touch 
    // events) you should additionally evaluate the variable @Finger, which helps 
    // you to distinguish the touch events.
    OnRelease : null,

    // The property 'OnPress' can refer to a slot method, which should be invoked 
    // by the handler after the user has tapped it on the screen. This occurs at 
    // the beginning of the touch interaction. Afterwards the handler may invoke 
    // other methods referred by the properties @OnDrag, @OnEnter, @OrLeave or @OnHold. 
    // At the end, when the user finishes the interaction, the method stored in 
    // the property @OnRelease is invoked.
    // It's up to you to provide the slot method and to fill it with the desired 
    // behavior. Within the slot method the current state of the handler variables 
    // like @HittingPos, @HoldPeriod, etc. can be evaluated. If this property is 
    // 'null', no method is invoked.
    // If this handler is intended to process multi-touch events (the property @EnableMultiTouch 
    // is 'true' and the target system can feed the application with multi-touch 
    // events) you should additionally evaluate the variable @Finger, which helps 
    // you to distinguish the touch events.
    OnPress : null,
    stateRetargetReason : 0,
    state : 0,

    // The variable 'Finger' stores the number of the finger associated with the 
    // current touch event. This can be useful if the handler is intended to handle 
    // multi-touch events. The fingers are numbered with values lying in the range 
    // 0 .. 9.
    Finger : 0,

    // The variable 'Time' stores the time in milliseconds when the user has tapped 
    // the handler area or dragged the finger for the last time. This can be useful 
    // if you e.g. need to calculate the speed with which the user is dragging the 
    // finger, etc.
    Time : 0,

    // The variable 'StrikeCount' stores how often the user has tapped the handler 
    // in succession. It is one, if the user has single tapped it. It is two if 
    // a double tap took place, and so far.
    // Such series of taps are recognized only when the taps are performed very 
    // quickly and the user doesn't move the finger very much. The appropriate time 
    // delay and the valid range for the movement are determined by the properties 
    // CursorDragLimit and CursorSequelDelay of the class Core::Root.
    StrikeCount : 0,

    // The variable 'HoldPeriod' stores the time in milliseconds how long the user 
    // is pressing the finger on the screen. This variable is useful if a delay 
    // between the tap and the reaction to the tap is desired. At the begin of the 
    // interaction Time == 0.
    HoldPeriod : 0,

    // The variable 'Offset' stores the cursor displacement since the last drag 
    // operation.
    Offset : _app._NullPoint,

    // The variable 'HittingPos' stores the position where the user has touched 
    // the screen at the beginning of the interaction. This position is valid in 
    // the coordinate space of the @Owner of this handler.
    HittingPos : _app._NullPoint,

    // The variable 'CurrentPos' stores the current cursor position. This position 
    // is valid in the coordinate space of the @Owner of this handler.
    CurrentPos : _app._NullPoint,

    // The property 'RetargetCondition' determines whether while interacting with 
    // the touch handler, this handler may automatically resign and deflect the 
    // current processing of events (the current grab cycle) to another handler.
    // With this property you specify gestures, which after being performed by the 
    // user should cause the handler to search for another handler willing to take 
    // over the further event processing of the actual interaction. In other words, 
    // you use this property to specify gestures the handler is NOT interested to 
    // process and thus should retarget to other handler.
    // Please note the properties @RetargetOffset and @RetargetDelay, with them 
    // you can configure the gestures more precisely.
    RetargetCondition : 0,

    // The property 'MaxStrikeCount' determines the upper limit for taps in series 
    // which will be considered by the handler. The value one corresponds to a single 
    // tap. The value two to a double tap, and so far. This is like a filter.
    MaxStrikeCount : 1,

    // The variable 'Down' determines whether the user is still touching the screen. 
    // If this variable == 'false' the user has finished the interaction.
    Down : false,

    // The variable 'Inside' informs whether the user currently does point with 
    // his finger inside the handler area or not. If 'true' the users finger lies 
    // inside the area. Dragging the finger outside the area will change the variable 
    // to 'false'.
    Inside : false,

    // The variable 'AutoDeflected' is 'true', if the interaction with the handler 
    // has been terminated by deflecting the cursor event flow to another target. 
    // This can occur if method Core::Root.DeflectCursor() or Core::Root.RetargetCursor() 
    // was used. These methods make possible to hand over the cursor from the current 
    // target view to another view.
    AutoDeflected : false,

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
      var _tmp;
      var event1 = ( _unit.CursorEvent.isPrototypeOf( aEvent )? aEvent : null );
      var event2 = ( _unit.DragEvent.isPrototypeOf( aEvent )? aEvent : null );
      var inside = this.Inside;
      var press;
      var hold;
      var timeout;
      var release;
      var drag;

      if ( !event1 && !event2 )
        return null;

      press = ( !!event1 && event1.Down ) && !event1.HoldPeriod;
      hold = ( !!event1 && event1.Down ) && ( event1.HoldPeriod > 0 );
      timeout = ( !!event1 && event1.Down ) && ( event1.HoldPeriod > 50 );
      release = !!event1 && !event1.Down;
      drag = !!event2;

      if (((( this.RetargetCondition & 0x20 ) === 0x20 ) && ( this.state > 0 )) 
          && ( this.state < 33554432 ))
      {
        var event3 = ( _unit.CursorGrabEvent.isPrototypeOf( aEvent )? aEvent : null );

        if ((( !!event3 && event3.Down ) && ( event3.Target !== this )) && _app._IsPointInRect( 
            this.GetExtent(), this.Owner.LocalPosition( event3.GlobalCurrentPos )))
        {
          this.stateRetargetReason = 0x20;
          this.state = this.state | 67108864;

          return null;
        }
      }

      if ( press )
      {
        var noOfFingers = 0;
        var fingers;

        this.state = this.state | ( 1 << event1.Finger );

        for ( fingers = this.state & 4095; fingers > 0; fingers = fingers >> 1 )
          if ( !!( fingers & 1 ))
            noOfFingers = noOfFingers + 1;

        if ( noOfFingers === 1 )
          this.state = ( this.state | 16777216 ) | ( 4096 << event1.Finger );
      }

      if ( release )
        this.state = ( this.state & ~( 1 << event1.Finger )) | 33554432;

      if ( timeout && ( this.state < 16777216 ))
        this.state = this.state | 67108864;

      if ( release && event1.AutoDeflected )
        this.state = this.state | 67108864;

      if ( release && !( this.state & 4095 ))
        this.stateRetargetReason = 0x0;

      if ( release && !( this.state & 16777215 ))
        this.state = 0;

      if ( hold && ( this.state >= 67108864 ))
        this.GetRoot().RetargetCursorWithReason( null, null, this.stateRetargetReason );

      if (( hold && !!( this.state & 16777216 )) && !!( this.state & 33554432 ))
      {
        hold = false;
        release = true;
      }

      if ( !!event1 && !( this.state & ( 4096 << event1.Finger )))
        return this;

      if ( !!event2 && !( this.state & ( 4096 << event2.Finger )))
        return this;

      if ( release && !( this.state & 16777216 ))
        return this;

      if ((( press || drag ) || hold ) && (( this.state < 16777216 ) || ( this.state 
          >= 33554432 )))
        return this;

      if ( release )
        this.state = this.state & 3758100479;

      if ( release && !( this.state & 16777215 ))
        this.state = 0;

      if ( !!event1 )
      {
        this.Down = press || hold;
        this.Inside = this.IsPointInside( event1.CurrentPos );
        this.HittingPos = event1.HittingPos;
        this.CurrentPos = event1.CurrentPos;
        this.Offset = _0000;
        this.HoldPeriod = event1.HoldPeriod;
        this.StrikeCount = event1.StrikeCount;
        this.AutoDeflected = event1.AutoDeflected;
        this.Finger = event1.Finger;
        this.Time = event1.Time;

        if ( event1.Down && !event1.HoldPeriod )
          inside = false;
      }

      if ( !!event2 )
      {
        this.Down = true;
        this.Inside = this.IsPointInside( event2.CurrentPos );
        this.HittingPos = event2.HittingPos;
        this.CurrentPos = event2.CurrentPos;
        this.Offset = event2.Offset;
        this.HoldPeriod = event2.HoldPeriod;
        this.StrikeCount = event2.StrikeCount;
        this.Finger = event2.Finger;
        this.AutoDeflected = false;
        this.Time = event2.Time;
        ( _tmp = this.OnDrag )? _tmp[1].call( _tmp[0], this ) : null;
      }

      if (( !!event1 && this.Down ) && !this.HoldPeriod )
        ( _tmp = this.OnPress )? _tmp[1].call( _tmp[0], this ) : null;

      if (( !!event1 && this.Down ) && ( this.HoldPeriod > 0 ))
        ( _tmp = this.OnHold )? _tmp[1].call( _tmp[0], this ) : null;

      if (( this.Down && this.Inside ) && !inside )
        ( _tmp = this.OnEnter )? _tmp[1].call( _tmp[0], this ) : null;

      if ((( this.Down && !this.Inside ) && inside ) || (( !this.Down && this.Inside ) 
          && inside ))
        ( _tmp = this.OnLeave )? _tmp[1].call( _tmp[0], this ) : null;

      if ( !!event1 && !this.Down )
        ( _tmp = this.OnRelease )? _tmp[1].call( _tmp[0], this ) : null;

      if ( !!this.RetargetCondition )
      {
        var reason = 0x0;

        if ((((( this.RetargetCondition & 0x10 ) === 0x10 ) && !!event1 ) && event1.Down ) 
            && ( event1.HoldPeriod >= 1000 ))
          reason = 0x10;

        if (((( this.RetargetCondition & 0x1 ) === 0x1 ) && !!event2 ) && (( event2.GlobalCurrentPos[1] 
            - event2.GlobalHittingPos[1]) <= -8 ))
          reason = 0x1;

        if (((( this.RetargetCondition & 0x2 ) === 0x2 ) && !!event2 ) && (( event2.GlobalCurrentPos[1] 
            - event2.GlobalHittingPos[1]) >= 8 ))
          reason = 0x2;

        if (((( this.RetargetCondition & 0x4 ) === 0x4 ) && !!event2 ) && (( event2.GlobalCurrentPos[0] 
            - event2.GlobalHittingPos[0]) <= -8 ))
          reason = 0x4;

        if (((( this.RetargetCondition & 0x8 ) === 0x8 ) && !!event2 ) && (( event2.GlobalCurrentPos[0] 
            - event2.GlobalHittingPos[0]) >= 8 ))
          reason = 0x8;

        if ( !!reason )
        {
          this.stateRetargetReason = reason;
          this.GetRoot().RetargetCursorWithReason( null, this, reason );
        }
      }

      return this;
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

      if ( !!aDedicatedView && ( aDedicatedView !== this ))
        return null;

      if (( aStrikeCount < 1 ) || ( aStrikeCount > this.MaxStrikeCount ))
        return null;

      if ( this.state >= 33554432 )
        return null;

      if (( this.state >= 16777216 ) && !( this.state & ( 4096 << aFinger )))
        return null;

      if ( !!( aRetargetReason & this.RetargetCondition ))
        return null;

      if ( this.HasRectShape())
      {
        var r = _app._IntersectRect( aArea, this.GetExtent());

        if ( !(( r[0] >= r [2]) || ( r[1] >= r [3])))
        {
          var center = _app._GetRectCenter( aArea );
          var offset = _0000;

          if ( center[0] < r[0])
            offset = [ r[0] - center[0], offset[1]];

          if ( center[0] >= r[2])
            offset = [( r[2] - center[0]) - 1, offset[1]];

          if ( center[1] < r[1])
            offset = [ offset[0], r[1] - center[1]];

          if ( center[1] >= r[3])
            offset = [ offset[0], ( r[3] - center[1]) - 1 ];

          return _app._NewObject( _unit.CursorHit, 0 ).Initialize( this, offset );
        }
      }
      else
      {
        var points = _app._NewArray( 9, _app._NullPoint, null );
        var i;

        points.Set( 0, _app._GetRectCenter( aArea ));
        points.Set( 1, points.Get( 0 ));
        points.Set( 2, points.Get( 0 ));
        points.Set( 3, points.Get( 0 ));
        points.Set( 4, points.Get( 0 ));
        points.Set( 1, [ aArea[0], points.Get( 1 )[1]]);
        points.Set( 2, [ points.Get( 2 )[0], aArea[1]]);
        points.Set( 3, [ aArea[2], points.Get( 3 )[1]]);
        points.Set( 4, [ points.Get( 4 )[0], aArea[3]]);
        points.Set( 5, aArea.slice(0,2));
        points.Set( 6, [ aArea[2], aArea[1]]);
        points.Set( 7, [ aArea[0], aArea[3]]);
        points.Set( 8, aArea.slice(2,4));

        for ( i = 0; i < 9; i = i + 1 )
          if ( this.IsPointInside( points.Get( i )))
            return _app._NewObject( _unit.CursorHit, 0 ).Initialize( this, _app._MovePointNeg( 
              points.Get( i ), points.Get( 0 )));
      }

      return null;
    },

    // Implementation of the Chora method : 'Core::SimpleTouchHandler.OnSetMaxStrikeCount()'
    OnSetMaxStrikeCount : function( value )
    {
      if ( value < 1 )
        value = 1;

      this.MaxStrikeCount = value;
    },

    // Initializer for the class 'Core::SimpleTouchHandler'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.QuadView._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.SimpleTouchHandler;

      // ... and initialize objects, variables, properties, etc.
      this.viewState = 0x11B;
    },

    // Garbage Collector method for the class 'Core::SimpleTouchHandler'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.QuadView._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.OnDrag ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnLeave ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnEnter ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnHold ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnRelease ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnPress ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Core::SimpleTouchHandler"
  };

  // The class Core::SlideTouchHandler provides a special kind of a view able to 
  // react to touch screen events and to process slide gestures. Each time the user 
  // taps inside the area of the handler and drags the finger, the handler modifies 
  // the stored @Offset value accordingly to the direction and distance the user 
  // has stroke. Each modification of this @Offset value causes the handler to send 
  // a signal to a slot method stored in the property @OnSlide. The intention of 
  // this handler is to cover the internal aspects of the cursor event handling.
  // This slide handler is very useful to add the scrolling functionality to GUI 
  // components containing large lists of items, text blocks, or other extensive 
  // contents. Even the classes Core::Outline, Core::HorizontalList, Core::VerticalList, 
  // Views::Text and Views::Image provide an interface to connect themselves with 
  // a such slide handler. In this manner the user can scroll their content by simply 
  // touching inside the handler area and dragging the finger.
  // The slide handler implements fancy animation effects to simulate movements 
  // similar to them in a real physical system with its inertia and the friction. 
  // For example, after the user has finished the interaction the sliding can continue 
  // running and its speed will decelerate accordingly to the @Friction factor. 
  // The handler provides several variables useful to query e.g. the current handler 
  // state (@Sliding), or the current slide position (@Offset), etc. These variables 
  // can be simply evaluated in the implementation of the slot method.
  // The property @Enabled can be used to activate/deactivate the touch handler. 
  // Disabled handler will not react to user taps.
  // With the properties @RetargetCondition, @RetargetOffset and @RetargetDelay 
  // the handler can be configured to automatically deflect the current event processing 
  // to another handler as soon as the user has performed a simple gesture, e.g. 
  // wipe down. Using these properties several handler can cooperate during an active 
  // user interaction even if these handler overlap each other. For example, one 
  // handler can process horizontal gestures while another handler will limit to 
  // vertical gestures, etc.
  // The handler can be configured to react to multi-touch gestures performed by 
  // two or more fingers. In such case the expected number of fingers can be specified 
  // in the property @NoOfFingers. With the property @LimitToFinger the handler 
  // can be limited to react to events generated by a particular finger only.
  // Due to its ancestry from the Core::View class, the touch handler can be arranged 
  // within its @Owner or if @Embedded == 'true' within the boundary area of an 
  // Core::Outline view in the same manner as it is done with all regular views.
  // The touch handler itself is invisible except the Embedded Wizard Composer, 
  // where all handler appear as semitransparent rectangles. This allows you to 
  // interact with the handlers during the design time.
  _unit.SlideTouchHandler =
  {
    timer : null,
    privateOnStart : null,
    privateOnSlide : null,
    state : 0,
    activeFinger : 0,
    frictFactor : 5000.000000,
    refTime : 0,
    initOffset : _app._NullPoint,
    endY : 0,
    accelerationY : 0,
    speedY : 0,
    startY : 0,
    startTimeY : 0,
    endX : 0,
    accelerationX : 0,
    speedX : 0,
    startX : 0,
    startTimeX : 0,

    // The variable 'HittingPos' stores the position where the user has touched 
    // the screen at the beginning of the interaction. This position is valid in 
    // the coordinate space of the @Owner of this handler.
    HittingPos : _app._NullPoint,

    // The variable 'Delta' stores the difference between the current value of the 
    // property @Offset and its previous value. The variable reflects the last modification 
    // of @Offset.
    Delta : _app._NullPoint,

    // The property 'MaxOffset' stores the upper limit for the @Offset value. This 
    // property should be greater or equal to @MinOffset.
    MaxOffset : _app._NullPoint,

    // The property 'MinOffset' stores the lower limit for the @Offset value. This 
    // property should be less or equal to @MaxOffset.
    MinOffset : _app._NullPoint,

    // The property 'Offset' stores the current slide position. This value changes 
    // when the user strokes or taps the handler area. The value will also change 
    // during the deceleration animation.
    Offset : _app._NullPoint,

    // The property 'SnapNext' determines an optional distance between consecutive 
    // snap positions. The snap positions are aligned relative to the top-left corner 
    // of the scrolled content. With the properties @SnapFirst and @SnapLast the 
    // first and the last snap position in the scrolled content can be configured 
    // explicitly. If this property is 0, the snap position is ignored.
    SnapNext : _app._NullPoint,

    // The property 'Friction' determines the deceleration for the animated sliding 
    // after the user has finished the interaction. The value of this property can 
    // vary in the range 0.0 .. 1.0.
    // If Friction == 0.0, the sliding will continue without any deceleration until 
    // the lower @MinOffset or the upper @MaxOffset limit has been reached by the 
    // @Offset property. If Friction == 1.0, no animated sliding will be performed. 
    // The sliding stops immediately after the user has finished the interaction.
    Friction : 0.500000,

    // The property 'SlideHorz' determines whether the handler should be able to 
    // scroll horizontally. If this property is 'false', the handler ignores any 
    // horizontal drag user interactions.
    SlideHorz : true,

    // The variable 'Sliding' informs about the current state of the handler. If 
    // Sliding is 'false' the handler is in the standstill. It is 'true' during 
    // the user interaction and during the following deceleration animation.
    Sliding : false,
    parkingX : false,
    parkingY : false,
    active : false,

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
      var _tmp;
      var event1 = ( _unit.CursorEvent.isPrototypeOf( aEvent )? aEvent : null );
      var event2 = ( _unit.DragEvent.isPrototypeOf( aEvent )? aEvent : null );
      var event3 = ( _unit.CursorGrabEvent.isPrototypeOf( aEvent )? aEvent : null );
      var press;
      var hold;
      var timeout;
      var release;
      var drag;

      press = ( !!event1 && event1.Down ) && !event1.HoldPeriod;
      hold = ( !!event1 && event1.Down ) && ( event1.HoldPeriod > 0 );
      timeout = ( !!event1 && event1.Down ) && ( event1.HoldPeriod > 50 );
      release = !!event1 && !event1.Down;
      drag = !!event2;

      if ( press )
      {
        var noOfFingers = 0;
        var fingers;

        this.state = this.state | ( 1 << event1.Finger );

        for ( fingers = this.state & 4095; fingers > 0; fingers = fingers >> 1 )
          if ( !!( fingers & 1 ))
            noOfFingers = noOfFingers + 1;

        if ( noOfFingers === 1 )
          this.state = ( this.state | 16777216 ) | ( 4096 << event1.Finger );
      }

      if ( release )
        this.state = ( this.state & ~( 1 << event1.Finger )) | 33554432;

      if ( timeout && ( this.state < 16777216 ))
        this.state = this.state | 67108864;

      if ( release && event1.AutoDeflected )
        this.state = this.state | 67108864;

      if ( release && !( this.state & 16777215 ))
        this.state = 0;

      if ( hold && ( this.state >= 67108864 ))
        this.GetRoot().RetargetCursorWithReason( null, null, 0x0 );

      if (( hold && !!( this.state & 16777216 )) && !!( this.state & 33554432 ))
      {
        hold = false;
        release = true;
      }

      if ( !!event1 && !( this.state & ( 4096 << event1.Finger )))
        return this;

      if ( !!event2 && !( this.state & ( 4096 << event2.Finger )))
        return this;

      if ( release && !( this.state & 16777216 ))
        return this;

      if ((( press || drag ) || hold ) && (( this.state < 16777216 ) || ( this.state 
          >= 33554432 )))
        return this;

      if ( release )
        this.state = this.state & 3758100479;

      if ( release && !( this.state & 16777215 ))
        this.state = 0;

      if ( !!event3 && ( event3.Target === this ))
        return null;

      if (( !!event3 && event3.Down ) && ( this.active || !this.Sliding ))
        return null;

      if (( !!event3 && event3.Down ) && !_app._IsPointInRect( this.Bounds, this.Owner.LocalPosition( 
          event3.GlobalCurrentPos )))
        return null;

      if (( !!event3 && !event3.Down ) && ( !this.active || ( this.activeFinger 
          !== event3.Finger )))
        return null;

      if (( !event1 && !event2 ) && !event3 )
        return null;

      if ( !!event1 )
      {
        this.active = press || hold;
        this.activeFinger = event1.Finger;
        this.HittingPos = event1.HittingPos;
      }

      if ( !!event2 )
        this.activeFinger = event2.Finger;

      if ( !!event3 )
      {
        this.active = event3.Down;
        this.activeFinger = event3.Finger;
      }

      if ( !!event3 && event3.Down )
      {
        this.stopAnimation();
        this.speedX = ((( event3.Time - this.startTimeX ) * 0.001000 ) * this.accelerationX ) 
        + this.speedX;
        this.speedY = ((( event3.Time - this.startTimeY ) * 0.001000 ) * this.accelerationY ) 
        + this.speedY;

        if ( this.parkingX )
          this.speedX = 0.000000;

        if ( this.parkingY )
          this.speedY = 0.000000;

        this.accelerationX = 0.000000;
        this.accelerationY = 0.000000;
        this.parkingX = false;
        this.parkingY = false;
        this.initOffset = this.Offset;
        this.refTime = event3.Time;

        return this;
      }

      if ( press )
      {
        this.stopAnimation();
        this.speedX = ((( event1.Time - this.startTimeX ) * 0.001000 ) * this.accelerationX ) 
        + this.speedX;
        this.speedY = ((( event1.Time - this.startTimeY ) * 0.001000 ) * this.accelerationY ) 
        + this.speedY;

        if ( this.parkingX || !this.Sliding )
          this.speedX = 0.000000;

        if ( this.parkingY || !this.Sliding )
          this.speedY = 0.000000;

        this.accelerationX = 0.000000;
        this.accelerationY = 0.000000;
        this.parkingX = false;
        this.parkingY = false;

        if ( !this.Sliding )
        {
          this.Sliding = true;
          ( _tmp = this.privateOnStart )? _tmp[1].call( _tmp[0], this ) : null;
        }

        this.initOffset = this.Offset;
        this.refTime = event1.Time;
      }

      if ( !!event2 )
      {
        var delta = _app._MovePointNeg( event2.CurrentPos, event2.HittingPos );
        var newOffset = this.Offset;

        if ( this.SlideHorz )
          newOffset = [ this.initOffset[0] + delta[0], newOffset[1]];

        newOffset = [ newOffset[0], this.initOffset[1] + delta[1]];

        if ( newOffset[0] < this.MinOffset[0])
          newOffset = [ this.MinOffset[0] + ((( newOffset[0] - this.MinOffset[0]) 
          / 2 ) | 0 ), newOffset[1]];
        else
          if ( newOffset[0] > this.MaxOffset[0])
            newOffset = [ this.MaxOffset[0] + ((( newOffset[0] - this.MaxOffset[0]) 
            / 2 ) | 0 ), newOffset[1]];

        if ( newOffset[1] < this.MinOffset[1])
          newOffset = [ newOffset[0], this.MinOffset[1] + ((( newOffset[1] - this.MinOffset[1]) 
          / 2 ) | 0 )];
        else
          if ( newOffset[1] > this.MaxOffset[1])
            newOffset = [ newOffset[0], this.MaxOffset[1] + ((( newOffset[1] - this.MaxOffset[1]) 
            / 2 ) | 0 )];

        if ( !_app._IsEqualPoint( newOffset, this.Offset ))
        {
          this.Delta = _app._MovePointNeg( newOffset, this.Offset );
          this.Offset = newOffset;
          ( _tmp = this.privateOnSlide )? _tmp[1].call( _tmp[0], this ) : null;
        }
      }

      if (( !!event3 && !event3.Down ) && (( event3.Time - this.refTime ) >= 200 ))
      {
        this.speedX = 0.000000;
        this.speedY = 0.000000;
      }

      if ( hold && (( event1.Time - this.refTime ) >= 200 ))
      {
        this.speedX = 0.000000;
        this.speedY = 0.000000;
      }

      if ( !!event2 && ( event2.Time > this.refTime ))
      {
        var delta = event2.Offset;
        var invTime = 1000.000000 / ( event2.Time - this.refTime );
        var newSpeedX = 0.000000;
        var newSpeedY;

        if ( this.SlideHorz )
          newSpeedX = delta[0] * invTime;

        newSpeedY = delta[1] * invTime;

        if (( newSpeedX * this.speedX ) < 0.000000 )
          this.speedX = 0.000000;

        if (( newSpeedY * this.speedY ) < 0.000000 )
          this.speedY = 0.000000;

        this.speedX = ( this.speedX + newSpeedX ) * 0.500000;
        this.speedY = ( this.speedY + newSpeedY ) * 0.500000;
        this.refTime = event2.Time;
      }

      if ( !release && !event3 )
        return this;

      if ( !!event1 && event1.AutoDeflected )
      {
        this.speedX = 0.000000;
        this.speedY = 0.000000;
      }

      if (( this.Offset[0] <= this.MinOffset[0]) || ( this.Offset[0] >= this.MaxOffset[0]))
        this.speedX = 0.000000;
      else
        if ( this.speedX === 0.000000 )
        {
          var targetX = this.Offset[0];
          var snapN = this.MinOffset[0];
          var snapP = this.MaxOffset[0];

          if ( targetX < snapN )
            snapP = this.MinOffset[0];
          else
            if ( targetX > snapP )
              snapN = this.MaxOffset[0];
            else
              if ( this.SnapNext[0] <= 1 )
              {
                snapN = targetX;
                snapP = targetX;
              }
              else
              {
                var modDiv = ( snapP - targetX ) % this.SnapNext[0];

                snapP = ( targetX - this.SnapNext[0]) + modDiv;
                snapN = targetX + modDiv;

                if ( snapP < this.MinOffset[0])
                  snapP = this.MinOffset[0];

                if ( snapN > this.MaxOffset[0])
                  snapN = this.MaxOffset[0];
              }

          if (( snapN - targetX ) <= ( targetX - snapP ))
            targetX = snapN;
          else
            targetX = snapP;

          if ( targetX !== this.Offset[0])
          {
            var distance = targetX - this.Offset[0];

            if ( distance > 0.000000 )
              this.speedX = Math.sqrt(( distance * 2.000000 ) * this.frictFactor ) 
              + 20.000000;

            if ( distance < 0.000000 )
              this.speedX = -Math.sqrt(( -distance * 2.000000 ) * this.frictFactor ) 
              - 20.000000;

            this.accelerationX = ( 400.000000 - ( this.speedX * this.speedX )) / 
            ( 2.000000 * distance );
            this.endX = targetX;
          }
        }
        else
        {
          var speedX2 = this.speedX * this.speedX;
          var distance = speedX2 / ( 2.000000 * this.frictFactor );
          var targetX = this.Offset[0];

          if ( this.speedX > 0.000000 )
            targetX = targetX + ( distance | 0 );

          if ( this.speedX < 0.000000 )
            targetX = targetX - ( distance | 0 );

          if ( targetX > this.MaxOffset[0])
            targetX = this.MaxOffset[0];
          else
            if ( targetX < this.MinOffset[0])
              targetX = this.MinOffset[0];

          var targetX0 = targetX;
          var snapN = this.MinOffset[0];
          var snapP = this.MaxOffset[0];

          if ( targetX < snapN )
            snapP = this.MinOffset[0];
          else
            if ( targetX > snapP )
              snapN = this.MaxOffset[0];
            else
              if ( this.SnapNext[0] <= 1 )
              {
                snapN = targetX;
                snapP = targetX;
              }
              else
              {
                var modDiv = ( snapP - targetX ) % this.SnapNext[0];

                snapP = ( targetX - this.SnapNext[0]) + modDiv;
                snapN = targetX + modDiv;

                if ( snapP < this.MinOffset[0])
                  snapP = this.MinOffset[0];

                if ( snapN > this.MaxOffset[0])
                  snapN = this.MaxOffset[0];
              }

          if ( this.speedX > 0.000000 )
          {
            if ( snapP <= this.Offset[0])
              targetX = snapN;
            else
              if (( targetX - snapP ) < ( snapN - targetX ))
                targetX = snapP;
              else
                targetX = snapN;
          }
          else
            if ( snapN >= this.Offset[0])
              targetX = snapP;
            else
              if (( targetX - snapP ) > ( snapN - targetX ))
                targetX = snapN;
              else
                targetX = snapP;

          if ( targetX !== this.Offset[0])
          {
            distance = targetX - this.Offset[0];

            if ( targetX !== targetX0 )
            {
              var snapDist = targetX - targetX0;

              if ( snapDist > 0.000000 )
                this.speedX = this.speedX + Math.sqrt(( snapDist * 2.000000 ) * 
                this.frictFactor );

              if ( snapDist < 0.000000 )
                this.speedX = this.speedX - Math.sqrt(( -snapDist * 2.000000 ) * 
                this.frictFactor );
            }

            if ( this.speedX > 0.000000 )
              this.speedX = this.speedX + 20.000000;

            if ( this.speedX < 0.000000 )
              this.speedX = this.speedX - 20.000000;

            this.accelerationX = ( 400.000000 - ( this.speedX * this.speedX )) / 
            ( 2.000000 * distance );
            this.endX = targetX;
          }
          else
            this.speedX = 0.000000;
        }

      if (( this.Offset[1] <= this.MinOffset[1]) || ( this.Offset[1] >= this.MaxOffset[1]))
        this.speedY = 0.000000;
      else
        if ( this.speedY === 0.000000 )
        {
          var targetY = this.Offset[1];
          var snapN = this.MinOffset[1];
          var snapP = this.MaxOffset[1];

          if ( targetY < snapN )
            snapP = this.MinOffset[1];
          else
            if ( targetY > snapP )
              snapN = this.MaxOffset[1];
            else
              if ( this.SnapNext[1] <= 1 )
              {
                snapN = targetY;
                snapP = targetY;
              }
              else
              {
                var modDiv = ( snapP - targetY ) % this.SnapNext[1];

                snapP = ( targetY - this.SnapNext[1]) + modDiv;
                snapN = targetY + modDiv;

                if ( snapP < this.MinOffset[1])
                  snapP = this.MinOffset[1];

                if ( snapN > this.MaxOffset[1])
                  snapN = this.MaxOffset[1];
              }

          if (( snapN - targetY ) <= ( targetY - snapP ))
            targetY = snapN;
          else
            targetY = snapP;

          if ( targetY !== this.Offset[1])
          {
            var distance = targetY - this.Offset[1];

            if ( distance > 0.000000 )
              this.speedY = Math.sqrt(( distance * 2.000000 ) * this.frictFactor ) 
              + 20.000000;

            if ( distance < 0.000000 )
              this.speedY = -Math.sqrt(( -distance * 2.000000 ) * this.frictFactor ) 
              - 20.000000;

            this.accelerationY = ( 400.000000 - ( this.speedY * this.speedY )) / 
            ( 2.000000 * distance );
            this.endY = targetY;
          }
        }
        else
        {
          var speedY2 = this.speedY * this.speedY;
          var distance = speedY2 / ( 2.000000 * this.frictFactor );
          var targetY = this.Offset[1];

          if ( this.speedY > 0.000000 )
            targetY = targetY + ( distance | 0 );

          if ( this.speedY < 0.000000 )
            targetY = targetY - ( distance | 0 );

          if ( targetY > this.MaxOffset[1])
            targetY = this.MaxOffset[1];
          else
            if ( targetY < this.MinOffset[1])
              targetY = this.MinOffset[1];

          var targetY0 = targetY;
          var snapN = this.MinOffset[1];
          var snapP = this.MaxOffset[1];

          if ( targetY < snapN )
            snapP = this.MinOffset[1];
          else
            if ( targetY > snapP )
              snapN = this.MaxOffset[1];
            else
              if ( this.SnapNext[1] <= 1 )
              {
                snapN = targetY;
                snapP = targetY;
              }
              else
              {
                var modDiv = ( snapP - targetY ) % this.SnapNext[1];

                snapP = ( targetY - this.SnapNext[1]) + modDiv;
                snapN = targetY + modDiv;

                if ( snapP < this.MinOffset[1])
                  snapP = this.MinOffset[1];

                if ( snapN > this.MaxOffset[1])
                  snapN = this.MaxOffset[1];
              }

          if ( this.speedY > 0.000000 )
          {
            if ( snapP <= this.Offset[1])
              targetY = snapN;
            else
              if (( targetY - snapP ) < ( snapN - targetY ))
                targetY = snapP;
              else
                targetY = snapN;
          }
          else
            if ( snapN >= this.Offset[1])
              targetY = snapP;
            else
              if (( targetY - snapP ) > ( snapN - targetY ))
                targetY = snapN;
              else
                targetY = snapP;

          if ( targetY !== this.Offset[1])
          {
            distance = targetY - this.Offset[1];

            if ( targetY !== targetY0 )
            {
              var snapDist = targetY - targetY0;

              if ( snapDist > 0.000000 )
                this.speedY = this.speedY + Math.sqrt(( snapDist * 2.000000 ) * 
                this.frictFactor );

              if ( snapDist < 0.000000 )
                this.speedY = this.speedY - Math.sqrt(( -snapDist * 2.000000 ) * 
                this.frictFactor );
            }

            if ( this.speedY > 0.000000 )
              this.speedY = this.speedY + 20.000000;

            if ( this.speedY < 0.000000 )
              this.speedY = this.speedY - 20.000000;

            this.accelerationY = ( 400.000000 - ( this.speedY * this.speedY )) / 
            ( 2.000000 * distance );
            this.endY = targetY;
          }
          else
            this.speedY = 0.000000;
        }

      if ( !!event1 )
        this.startTimeX = event1.Time;

      if ( !!event3 )
        this.startTimeX = event3.Time;

      this.startTimeY = this.startTimeX;
      this.startX = this.Offset[0];
      this.startY = this.Offset[1];
      this.startAnimation();

      return this;
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

      if ( !!aDedicatedView && ( aDedicatedView !== this ))
        return null;

      if ( this.state >= 33554432 )
        return null;

      if (( this.state >= 16777216 ) && !( this.state & ( 4096 << aFinger )))
        return null;

      if ( !this.SlideHorz && !!( aRetargetReason & 0xC ))
        return null;

      var r = _app._IntersectRect( aArea, this.Bounds );

      if ( !(( r[0] >= r [2]) || ( r[1] >= r [3])))
      {
        var center = _app._GetRectCenter( aArea );
        var offset = _0000;

        if ( center[0] < r[0])
          offset = [ r[0] - center[0], offset[1]];

        if ( center[0] >= r[2])
          offset = [( r[2] - center[0]) - 1, offset[1]];

        if ( center[1] < r[1])
          offset = [ offset[0], r[1] - center[1]];

        if ( center[1] >= r[3])
          offset = [ offset[0], ( r[3] - center[1]) - 1 ];

        return _app._NewObject( _unit.CursorHit, 0 ).Initialize( this, offset );
      }

      return null;
    },

    // Implementation of the Chora method : 'Core::SlideTouchHandler.stopAnimation()'
    stopAnimation : function()
    {
      if ( !!this.timer )
      {
        _app._DetachObjObserver([ this, this.timerSlot ], this.timer, 0 );
        this.timer = null;
      }
    },

    // Implementation of the Chora method : 'Core::SlideTouchHandler.startAnimation()'
    startAnimation : function()
    {
      this.timer = _app._GetAutoObject( _app.Effects.EffectTimer );
      _app._AttachObjObserver([ this, this.timerSlot ], this.timer, 0 );
    },

    // Implementation of the Chora method : 'Core::SlideTouchHandler.timerSlot()'
    timerSlot : function( sender )
    {
      var _tmp;

      if ( !this.timer )
        return;

      var timeX = ( this.timer.Time - this.startTimeX ) * 0.001000;
      var timeY = ( this.timer.Time - this.startTimeY ) * 0.001000;
      var timeX2 = timeX * timeX;
      var timeY2 = timeY * timeY;
      var newSpeedX = ( this.accelerationX * timeX ) + this.speedX;
      var newSpeedY = ( this.accelerationY * timeY ) + this.speedY;
      var newOffset = [(((( this.accelerationX * 0.500000 ) * timeX2 ) + ( this.speedX 
        * timeX )) + this.startX ) | 0, (((( this.accelerationY * 0.500000 ) * timeY2 ) 
        + ( this.speedY * timeY )) + this.startY ) | 0 ];

      if ( this.parkingX && ( timeX >= 0.500000 ))
      {
        newOffset = [ this.endX, newOffset[1]];
        this.speedX = 0.000000;
        this.accelerationX = 0.000000;
        this.startX = newOffset[0];
        this.parkingX = false;
      }
      else
        if ( this.parkingX )
        {
          var f = 1.000000 - Math.pow( 1.000000 - ( timeX / 0.500000 ), 5.000000 );

          newOffset = [( this.startX + (( this.endX - this.startX ) * f )) | 0, 
          newOffset[1]];
        }

      if ( this.parkingY && ( timeY >= 0.500000 ))
      {
        newOffset = [ newOffset[0], this.endY ];
        this.speedY = 0.000000;
        this.accelerationY = 0.000000;
        this.startY = newOffset[1];
        this.parkingY = false;
      }
      else
        if ( this.parkingY )
        {
          var f = 1.000000 - Math.pow( 1.000000 - ( timeY / 0.500000 ), 5.000000 );

          newOffset = [ newOffset[0], ( this.startY + (( this.endY - this.startY ) 
          * f )) | 0 ];
        }

      if ((( this.speedX > 0.000000 ) && ( newSpeedX < 0.000000 )) || (( this.speedX 
          < 0.000000 ) && ( newSpeedX > 0.000000 )))
      {
        newSpeedX = 0.000000;
        newOffset = [ this.Offset[0], newOffset[1]];
      }

      if ((( this.speedY > 0.000000 ) && ( newSpeedY < 0.000000 )) || (( this.speedY 
          < 0.000000 ) && ( newSpeedY > 0.000000 )))
      {
        newSpeedY = 0.000000;
        newOffset = [ newOffset[0], this.Offset[1]];
      }

      if ( !this.parkingX && ( newOffset[0] < this.MinOffset[0]))
      {
        this.startX = newOffset[0];
        this.endX = this.MinOffset[0];
        this.startTimeX = this.timer.Time;
        this.parkingX = true;
      }
      else
        if ( !this.parkingX && ( newOffset[0] > this.MaxOffset[0]))
        {
          this.startX = newOffset[0];
          this.endX = this.MaxOffset[0];
          this.startTimeX = this.timer.Time;
          this.parkingX = true;
        }

      if ( !this.parkingY && ( newOffset[1] < this.MinOffset[1]))
      {
        this.startY = newOffset[1];
        this.endY = this.MinOffset[1];
        this.startTimeY = this.timer.Time;
        this.parkingY = true;
      }
      else
        if ( !this.parkingY && ( newOffset[1] > this.MaxOffset[1]))
        {
          this.startY = newOffset[1];
          this.endY = this.MaxOffset[1];
          this.startTimeY = this.timer.Time;
          this.parkingY = true;
        }

      if ((( !this.parkingX && ( this.speedX !== 0.000000 )) && ( newSpeedX > -20.000000 )) 
          && ( newSpeedX < 20.000000 ))
      {
        newOffset = [ this.endX, newOffset[1]];
        this.speedX = 0.000000;
        this.accelerationX = 0.000000;
        this.startX = newOffset[0];
      }

      if ((( !this.parkingY && ( this.speedY !== 0.000000 )) && ( newSpeedY > -20.000000 )) 
          && ( newSpeedY < 20.000000 ))
      {
        newOffset = [ newOffset[0], this.endY ];
        this.speedY = 0.000000;
        this.accelerationY = 0.000000;
        this.startY = newOffset[1];
      }

      if ( !_app._IsEqualPoint( newOffset, this.Offset ))
      {
        this.Delta = _app._MovePointNeg( newOffset, this.Offset );
        this.Offset = newOffset;
        ( _tmp = this.privateOnSlide )? _tmp[1].call( _tmp[0], this ) : null;
      }

      if (((( this.speedX === 0.000000 ) && ( this.speedY === 0.000000 )) && !this.parkingX ) 
          && !this.parkingY )
      {
        this.stopAnimation();
        this.Sliding = false;
      }
    },

    // Implementation of the Chora method : 'Core::SlideTouchHandler.OnSetSnapNext()'
    OnSetSnapNext : function( value )
    {
      if ( value[0] < 0 )
        value = [ 0, value[1]];

      if ( value[1] < 0 )
        value = [ value[0], 0 ];

      this.SnapNext = value;
    },

    // Implementation of the Chora method : 'Core::SlideTouchHandler.OnSetFriction()'
    OnSetFriction : function( value )
    {
      if ( value < 0.000000 )
        value = 0.000000;

      if ( value > 1.000000 )
        value = 1.000000;

      if ( value === this.Friction )
        return;

      this.Friction = value;

      if ( value < 0.000000 )
        value = 0.000000;

      this.frictFactor = value * 10000.000000;
    },

    // Initializer for the class 'Core::SlideTouchHandler'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.RectView._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.SlideTouchHandler;

      // ... and initialize objects, variables, properties, etc.
      this.viewState = 0x11B;
    },

    // Garbage Collector method for the class 'Core::SlideTouchHandler'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.RectView._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.timer ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.privateOnStart ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.privateOnSlide ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Core::SlideTouchHandler"
  };

  // The class Core::KeyPressHandler provides a universal keyboard event handler 
  // able to process key press and release events. It compares the received key 
  // codes with the value of the property @Filter and if the codes do match the 
  // filter condition, sends signals to the slot methods stored in the @OnPress, 
  // @OnHold and @OnRelease properties.
  // Keyboard handlers can be created at the design time only. You can simply drag-and-drop 
  // them from the Embedded Wizard Gallery into the Composer window where you are 
  // editing the GUI component. If necessary several keyboard handlers can be added 
  // to the component. For example, one handler can react to the 'Enter' key and 
  // the other to the 'Exit' key. The order in which the handlers will process the 
  // events corresponds to their Z-order. You can verify and modify this Z-order 
  // in the Embedded Wizard Inspector. Please note, keyboard handlers created at 
  // the runtime with the Chora 'new' operator will not work!
  // The handler provides several variables with details of the received keyboard 
  // event, like the key code (@Code or @CharCode), whether the user has pressed 
  // or released the key (@Down), etc. These variables can be evaluated in the implementation 
  // of the slot method.
  // The property @Enabled can be used to activate/deactivate the keyboard handler. 
  // Disabled handler will not react to the events.
  _unit.KeyPressHandler =
  {
    next : null,

    // The property 'OnPress' can refer to a slot method, which should be invoked 
    // by the handler when the user has pressed a key with a code matching the filter 
    // condition @Filter.
    // Within the slot method the current state of the handler variables like @Code, 
    // @CharCode, @Down, @Repetition, etc. can be evaluated.
    // If the slot method decides to ignore the event, it can assign 'true' to the 
    // variable @Continue. This causes the framework to pass the event to the next 
    // following handler or GUI component. With it, however, the handler will not 
    // receive any corresponding @OnHold nor @OnRelease events.
    OnPress : null,

    // The property 'OnHold' can refer to a slot method, which should be invoked 
    // by the handler when the user continues pressing a key with a code matching 
    // the filter condition @Filter.
    // Within the slot method the current state of the handler variables like @Code, 
    // @CharCode, @Down, @Repetition. etc. can be evaluated.
    // Please note, the frequency with it the repetition events are delivered does 
    // depend on the target system and its particular keyboard drivers. If the keyboard 
    // driver doesn't support the repetition events, the handler will receive only 
    // the @OnPress and @OnRelease events without any @OnHold.
    OnHold : null,
    pressCounter : 0,

    // The variable 'Time' stores the time in milliseconds when the user has triggered 
    // the event.
    Time : 0,

    // The variable 'RepetitionCount' stores the number of key down repetition events 
    // received by this handler after the user has pressed a key.
    // Just after pressing a key the variable RepetitionCount is 0. Later every 
    // repetition event causes the variable to be incremented. In this manner the 
    // implementation of the @OnHold or @OnRelease slot method can determine how 
    // long the user presses the key.
    // Please note, the frequency with it the repetition events are delivered does 
    // depend on the target system and its particular keyboard drivers. If the keyboard 
    // driver doesn't support the repetition events, the handler will receive only 
    // the @OnPress and @OnRelease events without any @OnHold.
    RepetitionCount : 0,

    // The property 'Filter' stores the key code or the category of key codes to 
    // process by this handler. Keyboard events with key codes not matching this 
    // filter will be ignored.
    Filter : 148,

    // The variable 'Code' stores the code of the pressed or released key. For UNICODE 
    // characters the character code is stored in the @CharCode variable and the 
    // variable Code is initialized with the value Core::KeyCode.NoKey.
    Code : 0,

    // The variable 'CharCode' stores the UNICODE character code of the pressed 
    // or released character. For key codes the variable is initialized with '\x0000' 
    // and the key code is stored in the variable @Code.
    CharCode : 0,

    // The variable 'Down' determines whether the user has pressed or released the 
    // key. If this variable == 'true' the key has been pressed.
    Down : false,

    // The variable 'Repetition' determines whether the user continues pressing 
    // the key.
    Repetition : false,

    // Implementation of the Chora method : 'Core::KeyPressHandler.Init()'
    Init : function( aArg )
    {
      var _tmp;
      var group = ( _unit.Group.isPrototypeOf( _tmp = this._parent )? _tmp : null );

      if ( !group )
        throw new Error(  _0017  );

      this.next = group.keyHandlers;
      group.keyHandlers = this;
    },

    // Implementation of the Chora method : 'Core::KeyPressHandler.HandleEvent()'
    HandleEvent : function( aEvent )
    {
      var _tmp;

      if ( !!aEvent && aEvent.IsCode( this.Filter ))
      {
        this.Down = aEvent.Down;
        this.Code = aEvent.Code;
        this.CharCode = aEvent.CharCode;
        this.Time = aEvent.Time;

        if ( aEvent.Down )
        {
          this.RepetitionCount = this.pressCounter;
          this.Repetition = this.pressCounter > 0;

          if ( this.Repetition )
            ( _tmp = this.OnHold )? _tmp[1].call( _tmp[0], this ) : null;
          else
            ( _tmp = this.OnPress )? _tmp[1].call( _tmp[0], this ) : null;

          this.pressCounter = this.pressCounter + 1;

          return true;
        }

        if ( !aEvent.Down )
        {
          this.Repetition = this.pressCounter > 1;
          this.RepetitionCount = this.pressCounter - 1;
          this.pressCounter = 0;

          return true;
        }
      }

      return false;
    },

    // Initializer for the class 'Core::KeyPressHandler'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.KeyPressHandler;

      // Call the user defined constructor
      this.Init( aArg );

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Core::KeyPressHandler'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Core::KeyPressHandler'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Core::KeyPressHandler'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark all reachable objects ...
      if (( _tmp = this.next ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnPress ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnHold ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Core::KeyPressHandler"
  };

  // The class Core::CursorHit provides a helper object used to identify the view 
  // tapped on the touch screen by the user. When the user touches the screen, the 
  // framework searches for a view lying at the touched position and willing to 
  // start the touch interaction. This search process is performed by the method 
  // Core::View.CursorHitTest().
  _unit.CursorHit =
  {
    // The variable 'View' refers to the potential target view affected by the touch 
    // and willing to start the touch interaction.
    View : null,
    Deviation : 0,

    // The variable 'Offset' stores an optional displacement if the user has touched 
    // the view outside its boundary area. This can occur when the user tries to 
    // hit a small GUI component with a thick finger. This offset value determines 
    // the number of pixel to correct all cursor coordinates delivered in the following 
    // Core::CursorEvent and Core::DragEvent events. In this manner the target view 
    // will receive coordinates lying correctly within its boundary area.
    Offset : _app._NullPoint,

    // The method Initialize() initializes this Core::CursorHit object with the 
    // given parameter. The value offset stores an optional displacement if the 
    // user has touched the view outside its boundary area. This can occur when 
    // the user tries to hit a small GUI component with a thick finger. This offset 
    // value determines the number of pixel to correct all cursor coordinates delivered 
    // in the following Core::CursorEvent and Core::DragEvent events. In this manner 
    // the target view will receive coordinates lying correctly within its boundary 
    // area.
    Initialize : function( aView, aOffset )
    {
      this.View = aView;
      this.Offset = aOffset;
      this.Deviation = ( aOffset[0] * aOffset[0]) + ( aOffset[1] * aOffset[1]);

      return this;
    },

    // Initializer for the class 'Core::CursorHit'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.CursorHit;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Core::CursorHit'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Core::CursorHit'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Core::CursorHit'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark all reachable objects ...
      if (( _tmp = this.View ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Core::CursorHit"
  };

  // User defined class: 'Core::LayoutContext'
  _unit.LayoutContext =
  {
    outline : null,
    extent : _app._NullRect,
    bounds : _app._NullRect,
    isEmpty : false,

    // Initializer for the class 'Core::LayoutContext'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.LayoutContext;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Core::LayoutContext'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Core::LayoutContext'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Core::LayoutContext'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark all reachable objects ...
      if (( _tmp = this.outline ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Core::LayoutContext"
  };

  // User defined class: 'Core::LayoutLineContext'
  _unit.LayoutLineContext =
  {
    point2 : _app._NullPoint,
    point1 : _app._NullPoint,

    // Initializer for the class 'Core::LayoutLineContext'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.LayoutContext._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.LayoutLineContext;
    },

    // Internal variables of this class.
    _className : "Core::LayoutLineContext"
  };

  // User defined class: 'Core::LayoutQuadContext'
  _unit.LayoutQuadContext =
  {
    point4 : _app._NullPoint,
    point3 : _app._NullPoint,
    point2 : _app._NullPoint,
    point1 : _app._NullPoint,

    // Initializer for the class 'Core::LayoutQuadContext'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.LayoutContext._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.LayoutQuadContext;
    },

    // Internal variables of this class.
    _className : "Core::LayoutQuadContext"
  };

  // User defined class: 'Core::DialogContext'
  _unit.DialogContext =
  {
    group : null,
    next : null,
    dismissTransition : null,
    restoreTransition : null,
    overlayTransition : null,
    overrideRestoreTransition : null,

    // Initializer for the class 'Core::DialogContext'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.DialogContext;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Core::DialogContext'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Core::DialogContext'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Core::DialogContext'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark all reachable objects ...
      if (( _tmp = this.group ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.next ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.dismissTransition ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.restoreTransition ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.overlayTransition ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.overrideRestoreTransition ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Core::DialogContext"
  };

  // The class Core::TaskQueue provides a simple task scheduler component. The component 
  // implements functionality to register, manage and perform tasks. A task can 
  // be e.g. an animated transition between two GUI components. With the task queue, 
  // several independent transitions (and another operations) can be executed strictly 
  // one after another.
  // Usually the tasks are executed in the order in which they were previously added 
  // to the queue (the order in which they are scheduled). The queue takes care 
  // that at the same time only one task is executed. This task is called the 'current' 
  // task. As soon as the current task is completed, the queue activates the next 
  // available task.
  // A single task is represented by an instance of a class derived from Core::Task. 
  // To schedule a task, create an instance of the task class and call the method 
  // @ScheduleTask() with the task as parameter.
  // With the method @CancelTask() you can remove a previously scheduled task from 
  // the queue again or if the task is already running, stop it and let the queue 
  // continue with the next task.
  // The method @GetCurrentTask() is useful to determine which task is currently 
  // in progress by the affected queue.
  // It is essential to understand, that the entire 'task' functionality has nothing 
  // to do with multi-threading or multi-tasking features known from operating systems. 
  // Applications developed with Chora are limited to a single-thread environment. 
  // There is no real background thread activity. Accordingly your implementation 
  // of a task should behave cooperatively. A well designed task should perform 
  // its job quickly, use timers or effects to delay execution and when the job 
  // is done inform the queue about its completion.
  _unit.TaskQueue =
  {
    current : null,
    last : null,
    first : null,
    isInOnStart : false,

    // Implementation of the Chora method : 'Core::TaskQueue.completeTask()'
    completeTask : function()
    {
      if ( !this.current )
        return;

      var task = this.current;

      this.current.queue = null;
      this.current = null;
      _app._PostSignal([ this, this.onPreDispatchNext1 ], this );
      task.OnComplete( this );
    },

    // Implementation of the Chora method : 'Core::TaskQueue.onDispatchNext()'
    onDispatchNext : function( sender )
    {
      if ( !!this.current )
        return;

      if ( !this.first )
        return;

      this.current = this.first;
      this.first = this.first.next;

      if ( !!this.first )
        this.first.prev = null;
      else
        this.last = null;

      this.current.next = null;
      this.isInOnStart = true;
      this.current.OnStart( this );
      this.isInOnStart = false;
    },

    // Implementation of the Chora method : 'Core::TaskQueue.onPreDispatchNext3()'
    onPreDispatchNext3 : function( sender )
    {
      _app._PostSignal([ this, this.onDispatchNext ], this );
    },

    // Implementation of the Chora method : 'Core::TaskQueue.onPreDispatchNext2()'
    onPreDispatchNext2 : function( sender )
    {
      _app._PostSignal([ this, this.onPreDispatchNext3 ], this );
    },

    // Implementation of the Chora method : 'Core::TaskQueue.onPreDispatchNext1()'
    onPreDispatchNext1 : function( sender )
    {
      _app._PostSignal([ this, this.onPreDispatchNext2 ], this );
    },

    // The method CancelTask() allows the application to remove a previously registered 
    // task from the task queue. The affected task is determined by the parameter 
    // aTask.
    // If the affected task is currently executed, the task is notified to immediately 
    // finalize its work. Afterwards the queue starts the next available task. The 
    // method will throw an error if you try to cancel a task not belonging to this 
    // queue.
    CancelTask : function( aTask )
    {
      if ( !aTask || !aTask.queue )
        return;

      if ( aTask.queue !== this )
        throw new Error(  _0018  );

      var wasStarted = false;

      if ( this.current === aTask )
      {
        this.current = null;
        wasStarted = true;
        _app._PostSignal([ this, this.onPreDispatchNext1 ], this );
      }
      else
      {
        if ( !!aTask.next )
          aTask.next.prev = aTask.prev;
        else
          this.last = aTask.prev;

        if ( !!aTask.prev )
          aTask.prev.next = aTask.next;
        else
          this.first = aTask.next;

        aTask.prev = null;
        aTask.next = null;
      }

      aTask.queue = null;

      if ( wasStarted )
        aTask.OnCancel( this );
    },

    // The method ScheduleTask() registers the task passed in the parameter aTask 
    // for later execution.
    // The tasks are executed in the order in which they have been previously scheduled. 
    // If the parameter aWithPriority is false, the new task will be arranged at 
    // the end of the list with waiting tasks. If the parameter is true, the task 
    // is enqueued in front of all waiting tasks.
    // The method will throw an error if you try to schedule the same task twice.
    ScheduleTask : function( aTask, aWithPriority )
    {
      if ( !aTask )
        return;

      if ( !!aTask.queue )
        throw new Error(  _0019  );

      aTask.queue = this;

      if ( aWithPriority )
      {
        aTask.next = this.first;

        if ( !!this.first )
          this.first.prev = aTask;
        else
          this.last = aTask;

        this.first = aTask;
      }
      else
      {
        aTask.prev = this.last;

        if ( !!this.last )
          this.last.next = aTask;
        else
          this.first = aTask;

        this.last = aTask;
      }

      if ( !this.current )
        _app._PostSignal([ this, this.onPreDispatchNext1 ], this );
    },

    // Initializer for the class 'Core::TaskQueue'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.TaskQueue;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Core::TaskQueue'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Core::TaskQueue'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Core::TaskQueue'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark all reachable objects ...
      if (( _tmp = this.current ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.last ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.first ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Core::TaskQueue"
  };

  // The class Core::Task provides the basic functionality for implementing tasks 
  // which then can be scheduled for later execution. The execution of tasks is 
  // controlled by instances of the class Core::TaskQueue.
  // Usually you will use this class to derive your own task class. In your task 
  // class you can implement what to do when the task is started, canceled or completed. 
  // For this purpose you can override the methods @OnStart(), @OnCancel(), @OnComplete() 
  // and @OnContinue().
  // It is essential to understand, that the entire 'task' functionality has nothing 
  // to do with multi-threading or multi-tasking features known from operating systems. 
  // Applications developed with Chora are limited to a single-thread environment. 
  // There is no real background thread activity. Accordingly your implementation 
  // of a task should behave cooperatively. A well designed task should perform 
  // its job quickly, use timers or effects to delay execution and when the job 
  // is done reports its completion by calling the method @Complete().
  _unit.Task =
  {
    queue : null,
    prev : null,
    next : null,

    // The method OnComplete() is called when the task is done with its work. The 
    // default implementation of this method does nothing. You can override this 
    // method in derived task classes and implement what to do when the task is 
    // finished. For example, you can release resources used temporarily during 
    // animations.
    // To complete a task you should call explicitly the method @Complete(). The 
    // parameter aQueue refers to the queue this task belonged to. It can be used 
    // e.g. to schedule again a task to the same queue, etc.
    OnComplete : function( aQueue )
    {
    },

    // The method OnCancel() is called when the task is canceled after being started. 
    // The default implementation of this method does nothing. You can override 
    // this method in derived task classes and implement what to do when the task 
    // is prematurely aborted. For example, you can stop running timers and effects 
    // started in the preceding @OnStart() method.
    // To cancel a task you should call explicitly the method @Cancel(). The parameter 
    // aQueue refers to the queue this task belonged to. It can be used e.g. to 
    // schedule again a task to the same queue, etc.
    OnCancel : function( aQueue )
    {
    },

    // The method OnStart() is called at the begin of the execution of this task. 
    // The default implementation of the method simply cancels the task causing 
    // the next available task in the task queue to be started. You should override 
    // this method in derived task classes to implement what the task should do.
    // There are three typical application cases how to implement the OnStart() 
    // method:
    // - In its simplest case the entire task algorithm is implemented in the OnStart() 
    // method. In this case the method @Complete() should be called before leaving 
    // OnStart().
    // - If the task does take long time for execution by using timers or effects, 
    // you should put in OnStart() the code necessary to start the timers/effects. 
    // Don't forget to call @Complete() when all timers/effects are done.
    // - If the task is divided in many small execution steps, the OnStart() method 
    // should call @Continue() to request the @OnContinue() method to be executed 
    // after a short delay (usually after the next screen update). In @OnContinue() 
    // you can perform the next step of the task. If necessary, @OnContinue() can 
    // also request to be called again after a short delay. At the end of the task, 
    // after the last step is terminated, don't forget to call @Complete().
    // The parameter aQueue refers to the queue this task belongs to. It can be 
    // used to schedule more task to execute later.
    OnStart : function( aQueue )
    {
      this.Cancel();
    },

    // The method Complete() informs the task queue about the completion of this 
    // task. Thereupon the next available task in the queue can be executed. This 
    // method is usually called in context of the @OnStart() or @OnContinue() method 
    // when the task has finalized its work. Calling the method for a not current 
    // task has no effect.
    Complete : function()
    {
      if ( !!this.queue && ( this.queue.current === this ))
        this.queue.completeTask();
    },

    // The method Cancel() removes this task from the task queue where the task 
    // has been previously scheduled. In the case the task is already in progress, 
    // the queue will advise the task to abort its work immediately before the task 
    // is removed from the queue (see @OnCancel()).
    // Whether a task is waiting for execution can be determined by @IsScheduled(). 
    // Whether a task is in progress can be determined by @IsCurrent().
    // Canceling a running task will cause the task queue to start the next available 
    // task.
    Cancel : function()
    {
      if ( !!this.queue )
        this.queue.CancelTask( this );
    },

    // The method IsCurrent() returns 'true' if the affected task is currently performed. 
    // The method returns 'false' if the task is done, waiting for execution or 
    // it simply doesn't belong to any task queue.
    IsCurrent : function()
    {
      return !!this.queue && ( this.queue.current === this );
    },

    // Initializer for the class 'Core::Task'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Task;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Core::Task'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Core::Task'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Core::Task'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark all reachable objects ...
      if (( _tmp = this.queue ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.prev ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.next ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Core::Task"
  };

  // User defined class: 'Core::Resource'
  _unit.Resource =
  {
    resource : null,

    // Implementation of the Chora method : 'Core::Resource.Done()'
    Done : function()
    {
      this.resource = null;
    },

    // Implementation of the Chora method : 'Core::Resource.Init()'
    Init : function( aArg )
    {
      this.resource = aArg;
    },

    // Initializer for the class 'Core::Resource'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Resource;

      // Call the user defined constructor
      this.Init( aArg );

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Core::Resource'
    _Done : function()
    {
      // Call the user defined destructor
      this.Done();

      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Core::Resource'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Core::Resource'
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
    _className : "Core::Resource"
  };

  // User defined inline code: 'Core::TimerProc'
   

  // The class Core::Timer provides a mechanism to trigger periodical operations 
  // in predetermined intervals. The intervals are defined by the properties @Begin 
  // und @Period. After an interval is elapsed, the timer sends a signal to the 
  // method stored in the property OnTrigger. Optionally, the method @Trigger() 
  // can be overridden and implemented in classes derived from Core::Timer.
  // The timer will always start with the interval specified in @Begin. After the 
  // begin interval is elapsed, the timer can continue running with the interval 
  // defined in @Period.
  // Whether the timer is running or not is controlled by its property @Enabled. 
  // It can be used to start and stop the timer. The timer can also be controlled 
  // by sending signals to its @StartTimer and @StopTimer slot methods.
  _unit.Timer =
  {
    // This property 'OnTrigger' can refer to a slot method, which should be invoked 
    // by the timer each time it expires (when the interval defined in @Begin or 
    // @Period is elapsed).
    OnTrigger : null,
    timer : null,

    // The variable 'Time' stores the time in milliseconds when the timer is expired 
    // for the last time.
    Time : 0,

    // The property 'Period' stores an interval in milliseconds to expire periodically 
    // after the start interval @Begin is elapsed. If Period is less or equal to 
    // zero the timer will expire only once after the interval specified in @Begin.
    Period : 1000,

    // The property 'Begin' stores the interval in milliseconds for the first timer 
    // expiration. If this value is less or equal to zero, the timer will expire 
    // only in intervals specified in the property @Period.
    Begin : 0,

    // The property 'Enabled' determines whether the timer is currently running.
    // Assigning the value 'true' to this property re-starts the timer. The timer 
    // will start then the interval specified in @Begin. After the interval is elapsed, 
    // the timer continue running with the interval defined in @Period.
    Enabled : false,

    // Implementation of the Chora method : 'Core::Timer.Done()'
    Done : function()
    {
      var tmp = this.timer;

      if ( !!tmp )
        tmp.DestroyTimer();

      this.timer = null;
    },

    // Implementation of the Chora method : 'Core::Timer.restart()'
    restart : function( aBegin, aPeriod )
    {
      if ( aBegin < 0 )
        aBegin = 0;

      if ( aPeriod < 0 )
        aPeriod = 0;

      var tmp = this.timer;

      if ( !tmp && (( aBegin > 0 ) || ( aPeriod > 0 )))
        tmp = _app._CreateTimer( this, this.Trigger );

      if ( !!tmp )
        {
          /* At first stop the timer ... */
          tmp.ResetTimer();

          /* and then restart it again. */
          tmp.StartTimer( aBegin, aPeriod );
        }

      this.timer = tmp;
    },

    // Implementation of the Chora method : 'Core::Timer.OnSetPeriod()'
    OnSetPeriod : function( value )
    {
      if ( value < 0 )
        value = 0;

      if ( value === this.Period )
        return;

      this.Period = value;

      if ( this.Enabled )
        this.restart( this.Begin, value );
    },

    // Implementation of the Chora method : 'Core::Timer.OnSetBegin()'
    OnSetBegin : function( value )
    {
      if ( value < 0 )
        value = 0;

      if ( value === this.Begin )
        return;

      this.Begin = value;

      if ( this.Enabled )
        this.restart( value, this.Period );
    },

    // Implementation of the Chora method : 'Core::Timer.OnSetEnabled()'
    OnSetEnabled : function( value )
    {
      if ( value === this.Enabled )
        return;

      this.Enabled = value;

      if ( value )
        this.restart( this.Begin, this.Period );
      else
        this.restart( 0, 0 );

      this.Time = this.GetCurrentTime();
    },

    // The method 'GetCurrentTime()' returns the current time expressed in milliseconds. 
    // The value can be used e.g. to calculate the time span elapsed since the timer 
    // was expired (see @Time).
    GetCurrentTime : function()
    {
      var ticksCount = 0;

      ticksCount = (( new Date ).getTime() - _app._InitTime ) | 0;

      return ticksCount;
    },

    // The method Trigger() will be invoked when the timer is expired (when the 
    // interval defined in @Begin or @Period is elapsed). The method can be overridden 
    // and implemented in derived classes. The default implementation of this method 
    // sends a signal to the slot method stored in the @OnTrigger property.
    Trigger : function()
    {
      var _tmp;

      this.Time = this.GetCurrentTime();

      if ( !this.Period )
        this.OnSetEnabled( false );

      ( _tmp = this.OnTrigger )? _tmp[1].call( _tmp[0], this ) : null;
    },

    // The slot method 'StartTimer' will re-start the timer if a signal is sent 
    // to this slot method. The timer will start with the interval specified in 
    // @Begin. After the interval is elapsed, the timer continue running with the 
    // interval defined in @Period.
    StartTimer : function( sender )
    {
      if ( this.Enabled )
        this.OnSetEnabled( false );

      this.OnSetEnabled( true );
    },

    // Initializer for the class 'Core::Timer'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Timer;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Core::Timer'
    _Done : function()
    {
      // Call the user defined destructor
      this.Done();

      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Core::Timer'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Core::Timer'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark all reachable objects ...
      if (( _tmp = this.OnTrigger ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Core::Timer"
  };

  // The class Core::Time is used for date and time operations. Objects of this 
  // class can store the time, convert it and format strings with the time, etc.
  _unit.Time =
  {
    // The property 'Second' stores the number of seconds.
    Second : 0,

    // The property 'Minute' stores the number of minutes.
    Minute : 0,

    // The property 'Hour' stores the number of hours since midnight.
    Hour : 0,

    // The property 'Day' stores the day in range 1 .. 31.
    Day : 0,

    // The property 'Month' stores the month in range 1 .. 12.
    Month : 0,

    // The property 'Year' stores the year including the century.
    Year : 0,

    // Implementation of the Chora method : 'Core::Time.getMonthName()'
    getMonthName : function( aMonth, aAbbreviated )
    {
      if ( aAbbreviated )
        switch ( aMonth )
        {
          case 1 :
            return _app.Resources.JanuaryAbbr;

          case 2 :
            return _app.Resources.FebruaryAbbr;

          case 3 :
            return _app.Resources.MarchAbbr;

          case 4 :
            return _app.Resources.AprilAbbr;

          case 5 :
            return _app.Resources.MayAbbr;

          case 6 :
            return _app.Resources.JuneAbbr;

          case 7 :
            return _app.Resources.JulyAbbr;

          case 8 :
            return _app.Resources.AugustAbbr;

          case 9 :
            return _app.Resources.SeptemberAbbr;

          case 10 :
            return _app.Resources.OctoberAbbr;

          case 11 :
            return _app.Resources.NovemberAbbr;

          case 12 :
            return _app.Resources.DecemberAbbr;

          default : 
            return _app._EmptyString;
        }
      else
        switch ( aMonth )
        {
          case 1 :
            return _app.Resources.January;

          case 2 :
            return _app.Resources.February;

          case 3 :
            return _app.Resources.March;

          case 4 :
            return _app.Resources.April;

          case 5 :
            return _app.Resources.May;

          case 6 :
            return _app.Resources.June;

          case 7 :
            return _app.Resources.July;

          case 8 :
            return _app.Resources.August;

          case 9 :
            return _app.Resources.September;

          case 10 :
            return _app.Resources.October;

          case 11 :
            return _app.Resources.November;

          case 12 :
            return _app.Resources.December;

          default : 
            return _app._EmptyString;
        }
    },

    // Implementation of the Chora method : 'Core::Time.getDayOfWeekName()'
    getDayOfWeekName : function( aDayOfWeek, aAbbreviated )
    {
      if ( aAbbreviated )
        switch ( aDayOfWeek )
        {
          case 1 :
            return _app.Resources.MondayAbbr;

          case 2 :
            return _app.Resources.TuesdayAbbr;

          case 3 :
            return _app.Resources.WednesdayAbbr;

          case 4 :
            return _app.Resources.ThursdayAbbr;

          case 5 :
            return _app.Resources.FridayAbbr;

          case 6 :
            return _app.Resources.SaturdayAbbr;

          case 0 :
            return _app.Resources.SundayAbbr;

          default : 
            return _app._EmptyString;
        }
      else
        switch ( aDayOfWeek )
        {
          case 1 :
            return _app.Resources.Monday;

          case 2 :
            return _app.Resources.Tuesday;

          case 3 :
            return _app.Resources.Wednesday;

          case 4 :
            return _app.Resources.Thursday;

          case 5 :
            return _app.Resources.Friday;

          case 6 :
            return _app.Resources.Saturday;

          case 0 :
            return _app.Resources.Sunday;

          default : 
            return _app._EmptyString;
        }
    },

    // Implementation of the Chora method : 'Core::Time.getCurrentTime()'
    getCurrentTime : function()
    {
      var result = 0;

      {
        var d = new Date;
        result = Math.trunc( d.getTime() / 1000 - ( d.getTimezoneOffset() * 60 ));
      }

      return result;
    },

    // Implementation of the Chora method : 'Core::Time.OnGetTime()'
    OnGetTime : function()
    {
      var d = this.Day;
      var m = this.Month;
      var y = this.Year - (( m <= 2 )? 1 : 0 );
      var era = ((( y >= 0 )? y : y - 399 ) / 400 ) | 0;
      var yoe = y - ( era * 400 );
      var doy = ((((( 153 * ( m + (( m > 2 )? -3 : 9 ))) + 2 ) / 5 ) | 0 ) + d ) 
        - 1;
      var doe = ((( yoe * 365 ) + (( yoe / 4 ) | 0 )) - (( yoe / 100 ) | 0 )) + 
        doy;
      var days = (( era * 146097 ) + doe ) - 719468;

      return ((( days * 86400 ) + ( this.Hour * 3600 )) + ( this.Minute * 60 )) 
        + this.Second;
    },

    // Implementation of the Chora method : 'Core::Time.OnSetTime()'
    OnSetTime : function( value )
    {
      var _tmp;

      value += 62162035200;

      if ( value < 0 )
        value = 0;

      var z = Math.trunc( value / 86400 ) | 0;
      var era = ((( z >= 0 )? z : z - 146096 ) / 146097 ) | 0;
      var doe = z - ( era * 146097 );
      var yoe = (((( doe - (( doe / 1460 ) | 0 )) + (( doe / 36524 ) | 0 )) - (( 
        doe / 146096 ) | 0 )) / 365 ) | 0;
      var y = yoe + ( era * 400 );
      var doy = doe - ((( 365 * yoe ) + (( yoe / 4 ) | 0 )) - (( yoe / 100 ) | 0 ));
      var mp = ((( 5 * doy ) + 2 ) / 153 ) | 0;
      var d = ( doy - (((( 153 * mp ) + 2 ) / 5 ) | 0 )) + 1;
      var m = mp + (( mp < 10 )? 3 : -9 );
      var h = Math.trunc( value / 3600 ) % 24 | 0;
      var i = Math.trunc( value / 60 ) % 60 | 0;
      var s = value % 60 | 0;

      this.Year = y + (( m <= 2 )? 1 : 0 );
      this.OnSetMonth( m );
      this.OnSetDay( d );
      this.OnSetHour( h + (( h < 0 )? 24 : 0 ));
      this.OnSetMinute( i + (( i < 0 )? 60 : 0 ));
      this.OnSetSecond( s + (( s < 0 )? 60 : 0 ));
    },

    // Implementation of the Chora method : 'Core::Time.OnGetCurrentTime()'
    OnGetCurrentTime : function()
    {
      return _app._NewObject( _unit.Time, 0 ).Initialize( this.getCurrentTime());
    },

    // Implementation of the Chora method : 'Core::Time.OnGetWeekOfYear()'
    OnGetWeekOfYear : function()
    {
      var _tmp;
      var doy = this.OnGetDayOfYear() - 1;
      var dow = ( 6 + this.OnGetDayOfWeek()) % 7;
      var dow1Jan = (( 371 + dow ) - doy ) % 7;

      if ( this.Month === 12 )
      {
        var d = this.Day;

        if (( d === 31 ) && ( dow < 3 ))
          return 0;

        if (( d === 30 ) && ( dow < 2 ))
          return 0;

        if (( d === 29 ) && ( dow < 1 ))
          return 0;
      }

      if ( dow1Jan <= 3 )
        doy += dow1Jan;
      else
        doy -= ( 7 - dow1Jan );

      if ( doy < 0 )
      {
        var d = this.Day;
        var m = this.Month;

        this.Year--;
        this.OnSetDay( 31 );
        this.OnSetMonth( 12 );
        doy = this.OnGetDayOfYear() - 1;
        dow = ( 6 + this.OnGetDayOfWeek()) % 7;
        dow1Jan = (( 371 + dow ) - doy ) % 7;

        if ( dow1Jan <= 3 )
          doy += dow1Jan;
        else
          doy -= dow1Jan;

        this.Year++;
        this.OnSetDay( d );
        this.OnSetMonth( m );
      }

      return ( doy / 7 ) | 0;
    },

    // Implementation of the Chora method : 'Core::Time.OnGetDayOfYear()'
    OnGetDayOfYear : function()
    {
      var _tmp;
      var d = this.Day;
      var m = this.Month;
      var y = this.Year;
      var ly = (( !!!( y % 4 ) && ( !!( y % 100 ) || !!!( y % 400 )))? 1 : 0 );

      switch ( m )
      {
        case 2 :
          d += 31;
        break;

        case 3 :
          d += ( 59 + ly );
        break;

        case 4 :
          d += ( 90 + ly );
        break;

        case 5 :
          d += ( 120 + ly );
        break;

        case 6 :
          d += ( 151 + ly );
        break;

        case 7 :
          d += ( 181 + ly );
        break;

        case 8 :
          d += ( 212 + ly );
        break;

        case 9 :
          d += ( 243 + ly );
        break;

        case 10 :
          d += ( 273 + ly );
        break;

        case 11 :
          d += ( 304 + ly );
        break;

        case 12 :
          d += ( 334 + ly );
        break;

        default :; 
      }

      return d;
    },

    // Implementation of the Chora method : 'Core::Time.OnGetDayOfWeek()'
    OnGetDayOfWeek : function()
    {
      var _tmp;
      var d = this.Day;
      var m = this.Month + (( this.Month > 2 )? -2 : 10 );
      var y = this.Year - (( this.Month <= 2 )? 1 : 0 );
      var c = ( y / 100 ) | 0;

      y %= 100;
      d += (((((((( 26 * m ) - 2 ) / 10 ) | 0 ) + y ) + (( y / 4 ) | 0 )) + (( c 
      / 4 ) | 0 )) - ( 2 * c ));

      if ( d >= 0 )
        return d % 7;
      else
        return ( 7 - ( -d % 7 )) % 7;
    },

    // Implementation of the Chora method : 'Core::Time.OnSetSecond()'
    OnSetSecond : function( value )
    {
      if ( value < 0 )
        value = 0;

      if ( value > 59 )
        value = 59;

      this.Second = value;
    },

    // Implementation of the Chora method : 'Core::Time.OnSetMinute()'
    OnSetMinute : function( value )
    {
      if ( value < 0 )
        value = 0;

      if ( value > 59 )
        value = 59;

      this.Minute = value;
    },

    // Implementation of the Chora method : 'Core::Time.OnSetHour()'
    OnSetHour : function( value )
    {
      if ( value < 0 )
        value = 0;

      if ( value > 23 )
        value = 23;

      this.Hour = value;
    },

    // Implementation of the Chora method : 'Core::Time.OnSetDay()'
    OnSetDay : function( value )
    {
      if ( value < 1 )
        value = 1;

      if ( value > 31 )
        value = 31;

      this.Day = value;
    },

    // Implementation of the Chora method : 'Core::Time.OnSetMonth()'
    OnSetMonth : function( value )
    {
      if ( value < 1 )
        value = 1;

      if ( value > 12 )
        value = 12;

      this.Month = value;
    },

    // The method Format() converts the stored date and time accordingly to the 
    // supplied aFormat parameter in a string. The aFormat parameter consists of 
    // format codes, preceded by the percent sign '%'. At the runtime the codes 
    // are replaced with their corresponding content. All other signs that do not 
    // begin with % are simply taken over from aFormat to the output string. Following 
    // codes are available:
    // -%d Day of month as decimal number (01-31)
    // -%H Hour in 24-hour format (00-23)
    // -%I Hour in 12-hour format (01-12)
    // -%m Month as decimal number (01-12)
    // -%M Minute as decimal number (00-59)
    // -%p AM / PM indicator
    // -%S Second as decimal number (00-59)
    // -%w Weekday as decimal number (0-6; Sunday is 0)
    // -%y Year without century, as decimal number (00-99)
    // -%Y Year with century as decimal number
    // -%j Day of year as decimal number (001-366)
    // -%W Week of year as decimal number with Monday as first day of week (00-53)
    // -%a Abbreviated weekday name
    // -%A Weekday name
    // -%b Abbreviated month name
    // -%B Month name
    // To remove the leading zeros, the '#' sign may prefix the following format 
    // code. For example '%#m' will format the month as a decimal number in the 
    // range 1-12. In contrast to it, '%m' formats the number with the leading zero 
    // sign 01-12.
    // The month and weekday names are stored in constants within the unit @Resources. 
    // To adapt them to a new language, you can create variants of these constants.
    Format : function( aFormat )
    {
      var result = _app._EmptyString;
      var inx = 0;

      while ( !!( aFormat.charCodeAt( inx ) || 0 ))
        if (( aFormat.charCodeAt( inx ) || 0 ) === 0x25 )
        {
          var leadingZeros = 1;

          inx = inx + 1;

          if (( aFormat.charCodeAt( inx ) || 0 ) === 0x23 )
          {
            inx = inx + 1;
            leadingZeros = 0;
          }

          switch ( aFormat.charCodeAt( inx ) || 0 )
          {
            case 0x64 :
              result = result + _app._NewStringInt( this.Day, 2 * leadingZeros, 
              10 );
            break;

            case 0x48 :
              result = result + _app._NewStringInt( this.Hour, 2 * leadingZeros, 
              10 );
            break;

            case 0x49 :
              if ( !( this.Hour % 12 ))
                result = result + _001A;
              else
                result = result + _app._NewStringInt( this.Hour % 12, 2 * leadingZeros, 
                10 );
            break;

            case 0x6D :
              result = result + _app._NewStringInt( this.Month, 2 * leadingZeros, 
              10 );
            break;

            case 0x4D :
              result = result + _app._NewStringInt( this.Minute, 2 * leadingZeros, 
              10 );
            break;

            case 0x70 :
              if ( this.Hour < 12 )
                result = result + _app.Resources.AM;
              else
                result = result + _app.Resources.PM;
            break;

            case 0x53 :
              result = result + _app._NewStringInt( this.Second, 2 * leadingZeros, 
              10 );
            break;

            case 0x77 :
              result = result + _app._NewStringInt( this.OnGetDayOfWeek(), leadingZeros, 
              10 );
            break;

            case 0x79 :
              result = result + _app._NewStringInt( this.Year % 100, 2 * leadingZeros, 
              10 );
            break;

            case 0x59 :
              result = result + _app._NewStringInt( this.Year, 4 * leadingZeros, 
              10 );
            break;

            case 0x25 :
              result = result + _001B;
            break;

            case 0x6A :
              result = result + _app._NewStringInt( this.OnGetDayOfYear(), 3 * leadingZeros, 
              10 );
            break;

            case 0x57 :
              result = result + _app._NewStringInt( this.OnGetWeekOfYear(), 2 * 
              leadingZeros, 10 );
            break;

            case 0x61 :
              result = result + this.getDayOfWeekName( this.OnGetDayOfWeek(), true );
            break;

            case 0x41 :
              result = result + this.getDayOfWeekName( this.OnGetDayOfWeek(), false );
            break;

            case 0x62 :
              result = result + this.getMonthName( this.Month, true );
            break;

            case 0x42 :
              result = result + this.getMonthName( this.Month, false );
            break;

            default :; 
          }

          inx = inx + 1;
        }
        else
        {
          result = result + String.fromCharCode( aFormat.charCodeAt( inx ) || 0 );
          inx = inx + 1;
        }

      return result;
    },

    // The method Initialize() initializes this Core::Time object with the given 
    // time as number of seconds since 1.1.1970 and returns this object.
    Initialize : function( aTime )
    {
      this.OnSetTime( aTime );

      return this;
    },

    // The method Difference() calculates a delta value between this time object 
    // and the object passed in the parameter aTime. The method creates and initializes 
    // a new Core::TimeSpan object with the calculated difference.
    Difference : function( aTime )
    {
      if ( !aTime )
        return _app._NewObject( _unit.TimeSpan, 0 ).Initialize( this.OnGetTime());

      return _app._NewObject( _unit.TimeSpan, 0 ).Initialize( this.OnGetTime() - 
        aTime.OnGetTime());
    },

    // Initializer for the class 'Core::Time'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Time;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Core::Time'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Core::Time'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Core::Time'
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
    _className : "Core::Time"
  };

  // The class Core::TimeSpan is used for date and time operations. Objects of this 
  // class can store the time span, convert it and format strings with the time 
  // span, etc.
  _unit.TimeSpan =
  {
    // The property 'Seconds' stores the number of seconds within the time span 
    // in range of 0 .. 59.
    Seconds : 0,

    // The property 'Minutes' stores the number of minutes within the time span 
    // in range 0 .. 59.
    Minutes : 0,

    // The property 'Hours' stores the number of hours within the time span in range 
    // 0 .. 23.
    Hours : 0,

    // The property 'Days' stores the number of whole days within the time span.
    Days : 0,

    // Implementation of the Chora method : 'Core::TimeSpan.OnGetTime()'
    OnGetTime : function()
    {
      return ((( this.Days * 86400 ) + ( this.Hours * 3600 )) + ( this.Minutes * 
        60 )) + this.Seconds;
    },

    // Implementation of the Chora method : 'Core::TimeSpan.OnSetTime()'
    OnSetTime : function( value )
    {
      var sign = 1;

      this.Days = Math.trunc( value / 86400 ) | 0;

      if ( value < 0 )
      {
        value = -value;
        sign = -1;
      }

      this.Hours = sign * ( Math.trunc( value / 3600 ) % 24 | 0 );
      this.Minutes = sign * ( Math.trunc( value / 60 ) % 60 | 0 );
      this.Seconds = sign * ( value % 60 | 0 );
    },

    // Implementation of the Chora method : 'Core::TimeSpan.OnGetTotalMinutes()'
    OnGetTotalMinutes : function()
    {
      return Math.trunc( this.OnGetTime() / 60 ) | 0;
    },

    // Implementation of the Chora method : 'Core::TimeSpan.OnGetTotalHours()'
    OnGetTotalHours : function()
    {
      return Math.trunc( this.OnGetTime() / 3600 ) | 0;
    },

    // The method Format() converts the stored time span accordingly to the supplied 
    // aFormat parameter in a string. The aFormat parameter consists of format codes, 
    // preceded by the percent sign '%'. At the runtime the codes are replaced with 
    // their corresponding content. All other signs that do not begin with % are 
    // simply taken over from aFormat to the output string. Following codes are 
    // available:
    // -%d Days as decimal number
    // -%h Total hours as decimal number
    // -%m Total minutes as decimal number
    // -%s Total seconds as decimal number
    // -%H Hours in 24-hour format (00-23)
    // -%M Minutes as decimal number (00-59)
    // -%S Seconds as decimal number (00-59)
    // -%- '-' for negative time span and a ' ' for a positive
    // -%+ '-' for negative time span and a '+' for a positive
    // To remove the leading zeros, the '#' sign may prefix the following format 
    // code. For example '%#M' will format the number of minutes as a decimal number 
    // in the range 0-59. In contrast to it, '%M' formats the number with the leading 
    // zero sign 00-59. If the '#' sign is used together with the format code '%-', 
    // no blank is used for positive time span.
    Format : function( aFormat )
    {
      var result = _app._EmptyString;
      var inx = 0;
      var sign = 1;

      if ( this.OnGetTime() < 0 )
        sign = -1;

      while ( !!( aFormat.charCodeAt( inx ) || 0 ))
        if (( aFormat.charCodeAt( inx ) || 0 ) === 0x25 )
        {
          var leadingZeros = 1;

          inx = inx + 1;

          if (( aFormat.charCodeAt( inx ) || 0 ) === 0x23 )
          {
            inx = inx + 1;
            leadingZeros = 0;
          }

          switch ( aFormat.charCodeAt( inx ) || 0 )
          {
            case 0x64 :
              result = result + _app._NewStringInt( sign * this.Days, 0, 10 );
            break;

            case 0x68 :
              result = result + _app._NewStringInt( sign * this.OnGetTotalHours(), 
              0, 10 );
            break;

            case 0x6D :
              result = result + _app._NewStringInt( sign * this.OnGetTotalMinutes(), 
              0, 10 );
            break;

            case 0x73 :
              result = result + _app._NewStringInt( sign * this.OnGetTime(), 0, 
              10 );
            break;

            case 0x48 :
              result = result + _app._NewStringInt( sign * this.Hours, leadingZeros 
              * 2, 10 );
            break;

            case 0x4D :
              result = result + _app._NewStringInt( sign * this.Minutes, leadingZeros 
              * 2, 10 );
            break;

            case 0x53 :
              result = result + _app._NewStringInt( sign * this.Seconds, leadingZeros 
              * 2, 10 );
            break;

            case 0x2B :
              if ( sign === -1 )
                result = result + String.fromCharCode( 0x2D );
              else
                result = result + String.fromCharCode( 0x2B );
            break;

            case 0x2D :
              if ( sign === -1 )
                result = result + String.fromCharCode( 0x2D );
              else
                if ( !!leadingZeros )
                  result = result + String.fromCharCode( 0x20 );
            break;

            default :; 
          }

          inx = inx + 1;
        }
        else
        {
          result = result + String.fromCharCode( aFormat.charCodeAt( inx ) || 0 );
          inx = inx + 1;
        }

      return result;
    },

    // The method Initialize() initializes this Core::TimeSpan object with a time 
    // span expressed in seconds and returns this object.
    Initialize : function( aTime )
    {
      this.OnSetTime( aTime );

      return this;
    },

    // Initializer for the class 'Core::TimeSpan'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.TimeSpan;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Core::TimeSpan'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Core::TimeSpan'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Core::TimeSpan'
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
    _className : "Core::TimeSpan"
  };

  // The definition Core::ViewState determines the set of possible states, a Core::View 
  // can assume at its lifetime. These states are used internally by all GUI components. 
  // They determine whether components are visible, able to react to user events, 
  // etc.
  _unit.ViewState =
  {
    Visible : 0x1,
    AlphaBlended : 0x2,
    Focusable : 0x4,
    Touchable : 0x8,
    Enabled : 0x10,
    Selected : 0x20,
    Focused : 0x40,
    Modal : 0x80,
    FastReshape : 0x100,
    IsOutline : 0x200,
    Embedded : 0x400,
    RequestLayout : 0x800,
    UpdateLayout : 0x1000,
    UpdatingLayout : 0x2000,
    PendingLayout : 0x4000,
    PendingViewState : 0x8000,
    Dialog : 0x10000,
    PendingFader : 0x20000,
    RunningFader : 0x40000
  };

  // The definition Core::Layout determines the set of available arrangement constraints 
  // to apply on views during the automatic GUI arrangement. Each view can determine 
  // its own set of constraints how it want to behave when e.g. its owner changes 
  // the size.
  // The constraints @ResizeVert and @ResizeHorz e.g. determine the resize behavior 
  // of the view in response to the size modification of its owner. Views with these 
  // constraints disabled always will keep their size unchanged. In conflict cases 
  // when the alignment and resize constraints do contradict, the view will maintain 
  // its size and will be pulled into the middle area resulting by the alignment 
  // constraints.
  // In case of views automatically arranged in rows or columns within a Core::Outline, 
  // the alignment constraints determine the vertical or horizontal alignment of 
  // the view within the corresponding row or column. The resize constraints in 
  // this case enable the view to fill the entire height of a column or the entire 
  // width of a row.
  _unit.Layout =
  {
    ResizeHorz : 0x1,
    ResizeVert : 0x2,
    AlignToLeft : 0x4,
    AlignToRight : 0x8,
    AlignToTop : 0x10,
    AlignToBottom : 0x20
  };

  // The definition Core::Formation determines the available arrangement modes to 
  // apply on all views embedded within a Core::Outline view. Depending on the mode, 
  // the embedded views can be arranged in rows or columns. If the mode == Core::Formation.None, 
  // no automatic row/column arrangement is performed and the views are simply aligned 
  // inside the outline boundary area.
  _unit.Formation =
  {
    None : 0,
    TopToBottom : 1,
    BottomToTop : 2,
    LeftToRight : 3,
    RightToLeft : 4,
    TopToBottom_LeftToRight : 5,
    TopToBottom_RightToLeft : 6,
    BottomToTop_LeftToRight : 7,
    BottomToTop_RightToLeft : 8,
    LeftToRight_TopToBottom : 9,
    LeftToRight_BottomToTop : 10,
    RightToLeft_TopToBottom : 11,
    RightToLeft_BottomToTop : 12
  };

  // The definition Core::Direction determines available directions the user can 
  // navigate in the GUI.
  _unit.Direction =
  {
    None : 0,
    TopLeft : 1,
    Left : 2,
    BottomLeft : 3,
    Top : 4,
    Bottom : 5,
    TopRight : 6,
    Right : 7,
    BottomRight : 8
  };

  // The enumeration Core::KeyCode provides a set of predefined keyboard codes very 
  // common to mobile and remote control devices, e.g. Menu, Left, Up, Ok, Exit, 
  // Play, Record, etc. The usage of these predefined key codes increases the platform 
  // independence of your GUI application. For special key codes, which are not 
  // included in this set, a range of UserXX key codes is provided.
  // Beside the key codes the enumeration also provides some few key categories 
  // like AlphaKeys, DigitKeys or CursorKeys. They stand for an entire range of 
  // key codes and are used when key codes are evaluated or filtered by the Core::KeyPressHandler.
  _unit.KeyCode =
  {
    NoKey : 0,
    Ok : 1,
    Exit : 2,
    Menu : 3,
    Up : 4,
    Down : 5,
    Left : 6,
    Right : 7,
    PageUp : 8,
    PageDown : 9,
    Key0 : 10,
    Key1 : 11,
    Key2 : 12,
    Key3 : 13,
    Key4 : 14,
    Key5 : 15,
    Key6 : 16,
    Key7 : 17,
    Key8 : 18,
    Key9 : 19,
    Red : 20,
    Green : 21,
    Blue : 22,
    Yellow : 23,
    White : 24,
    Magenta : 25,
    F1 : 26,
    F2 : 27,
    F3 : 28,
    F4 : 29,
    F5 : 30,
    F6 : 31,
    F7 : 32,
    F8 : 33,
    F9 : 34,
    F10 : 35,
    ChannelUp : 36,
    ChannelDown : 37,
    Display : 38,
    SkipPrev : 39,
    SkipNext : 40,
    Home : 41,
    End : 42,
    Insert : 43,
    Delete : 44,
    Clear : 45,
    VolumeUp : 46,
    VolumeDown : 47,
    Show : 48,
    Hide : 49,
    Play : 50,
    Pause : 51,
    Record : 52,
    Stop : 53,
    Rev : 54,
    Fwd : 55,
    SlowRev : 56,
    SlowFwd : 57,
    SkipBwd : 58,
    SkipFwd : 59,
    Repeat : 60,
    Eject : 61,
    Help : 62,
    TV : 63,
    DVD : 64,
    VCR : 65,
    EPG : 66,
    OSD : 67,
    Text : 68,
    PIP : 69,
    Audio : 70,
    Clock : 71,
    Timer : 72,
    Navigation : 73,
    Karaoke : 74,
    Game : 75,
    Subtitle : 76,
    Zoom : 77,
    Index : 78,
    Info : 79,
    Power : 80,
    Setup : 81,
    Angle : 82,
    Mode : 83,
    Mute : 84,
    User0 : 85,
    User1 : 86,
    User2 : 87,
    User3 : 88,
    User4 : 89,
    User5 : 90,
    User6 : 91,
    User7 : 92,
    User8 : 93,
    User9 : 94,
    User10 : 95,
    User11 : 96,
    User12 : 97,
    User13 : 98,
    User14 : 99,
    User15 : 100,
    User16 : 101,
    User17 : 102,
    User18 : 103,
    User19 : 104,
    KeyA : 105,
    KeyB : 106,
    KeyC : 107,
    KeyD : 108,
    KeyE : 109,
    KeyF : 110,
    KeyG : 111,
    KeyH : 112,
    KeyI : 113,
    KeyJ : 114,
    KeyK : 115,
    KeyL : 116,
    KeyM : 117,
    KeyN : 118,
    KeyO : 119,
    KeyP : 120,
    KeyQ : 121,
    KeyR : 122,
    KeyS : 123,
    KeyT : 124,
    KeyU : 125,
    KeyV : 126,
    KeyW : 127,
    KeyX : 128,
    KeyY : 129,
    KeyZ : 130,
    Space : 131,
    Plus : 132,
    Minus : 133,
    Multiply : 134,
    Divide : 135,
    Equals : 136,
    Period : 137,
    Comma : 138,
    Colon : 139,
    Semicolon : 140,
    AlphaKeys : 141,
    AlphaOrDigitKeys : 142,
    DigitKeys : 143,
    HexDigitKeys : 144,
    CharacterKeys : 145,
    ControlKeys : 146,
    CursorKeys : 147,
    AnyKey : 148,
    Enter : 149,
    Escape : 150,
    Backspace : 151,
    Tab : 152,
    CtrlKeyA : 153,
    CtrlKeyB : 154,
    CtrlKeyC : 155,
    CtrlKeyD : 156,
    CtrlKeyE : 157,
    CtrlKeyF : 158,
    CtrlKeyG : 159,
    CtrlKeyH : 160,
    CtrlKeyI : 161,
    CtrlKeyJ : 162,
    CtrlKeyK : 163,
    CtrlKeyL : 164,
    CtrlKeyM : 165,
    CtrlKeyN : 166,
    CtrlKeyO : 167,
    CtrlKeyP : 168,
    CtrlKeyQ : 169,
    CtrlKeyR : 170,
    CtrlKeyS : 171,
    CtrlKeyT : 172,
    CtrlKeyU : 173,
    CtrlKeyV : 174,
    CtrlKeyW : 175,
    CtrlKeyX : 176,
    CtrlKeyY : 177,
    CtrlKeyZ : 178,
    CtrlSpace : 179,
    CtrlKey0 : 180,
    CtrlKey1 : 181,
    CtrlKey2 : 182,
    CtrlKey3 : 183,
    CtrlKey4 : 184,
    CtrlKey5 : 185,
    CtrlKey6 : 186,
    CtrlKey7 : 187,
    CtrlKey8 : 188,
    CtrlKey9 : 189,
    CtrlF1 : 190,
    CtrlF2 : 191,
    CtrlF3 : 192,
    CtrlF4 : 193,
    CtrlF5 : 194,
    CtrlF6 : 195,
    CtrlF7 : 196,
    CtrlF8 : 197,
    CtrlF9 : 198,
    CtrlF10 : 199,
    CtrlEnter : 200,
    CtrlEscape : 201,
    CtrlUp : 202,
    CtrlDown : 203,
    CtrlLeft : 204,
    CtrlRight : 205,
    CtrlPageUp : 206,
    CtrlPageDown : 207,
    CtrlBackspace : 208,
    CtrlInsert : 209,
    CtrlDelete : 210,
    CtrlHome : 211,
    CtrlEnd : 212,
    CtrlTab : 213,
    CtrlShiftKeyA : 214,
    CtrlShiftKeyB : 215,
    CtrlShiftKeyC : 216,
    CtrlShiftKeyD : 217,
    CtrlShiftKeyE : 218,
    CtrlShiftKeyF : 219,
    CtrlShiftKeyG : 220,
    CtrlShiftKeyH : 221,
    CtrlShiftKeyI : 222,
    CtrlShiftKeyJ : 223,
    CtrlShiftKeyK : 224,
    CtrlShiftKeyL : 225,
    CtrlShiftKeyM : 226,
    CtrlShiftKeyN : 227,
    CtrlShiftKeyO : 228,
    CtrlShiftKeyP : 229,
    CtrlShiftKeyQ : 230,
    CtrlShiftKeyR : 231,
    CtrlShiftKeyS : 232,
    CtrlShiftKeyT : 233,
    CtrlShiftKeyU : 234,
    CtrlShiftKeyV : 235,
    CtrlShiftKeyW : 236,
    CtrlShiftKeyX : 237,
    CtrlShiftKeyY : 238,
    CtrlShiftKeyZ : 239,
    CtrlShiftSpace : 240,
    CtrlShiftKey0 : 241,
    CtrlShiftKey1 : 242,
    CtrlShiftKey2 : 243,
    CtrlShiftKey3 : 244,
    CtrlShiftKey4 : 245,
    CtrlShiftKey5 : 246,
    CtrlShiftKey6 : 247,
    CtrlShiftKey7 : 248,
    CtrlShiftKey8 : 249,
    CtrlShiftKey9 : 250,
    CtrlShiftF1 : 251,
    CtrlShiftF2 : 252,
    CtrlShiftF3 : 253,
    CtrlShiftF4 : 254,
    CtrlShiftF5 : 255,
    CtrlShiftF6 : 256,
    CtrlShiftF7 : 257,
    CtrlShiftF8 : 258,
    CtrlShiftF9 : 259,
    CtrlShiftF10 : 260,
    CtrlShiftEnter : 261,
    CtrlShiftEscape : 262,
    CtrlShiftUp : 263,
    CtrlShiftDown : 264,
    CtrlShiftLeft : 265,
    CtrlShiftRight : 266,
    CtrlShiftPageUp : 267,
    CtrlShiftPageDown : 268,
    CtrlShiftBackspace : 269,
    CtrlShiftInsert : 270,
    CtrlShiftDelete : 271,
    CtrlShiftHome : 272,
    CtrlShiftEnd : 273,
    CtrlShiftTab : 274,
    AltF1 : 275,
    AltF2 : 276,
    AltF3 : 277,
    AltF4 : 278,
    AltF5 : 279,
    AltF6 : 280,
    AltF7 : 281,
    AltF8 : 282,
    AltF9 : 283,
    AltF10 : 284,
    AltEnter : 285,
    AltEscape : 286,
    AltUp : 287,
    AltDown : 288,
    AltLeft : 289,
    AltRight : 290,
    AltPageUp : 291,
    AltPageDown : 292,
    AltBackspace : 293,
    AltInsert : 294,
    AltDelete : 295,
    AltHome : 296,
    AltEnd : 297,
    AltTab : 298,
    AltShiftF1 : 299,
    AltShiftF2 : 300,
    AltShiftF3 : 301,
    AltShiftF4 : 302,
    AltShiftF5 : 303,
    AltShiftF6 : 304,
    AltShiftF7 : 305,
    AltShiftF8 : 306,
    AltShiftF9 : 307,
    AltShiftF10 : 308,
    AltShiftEnter : 309,
    AltShiftEscape : 310,
    AltShiftUp : 311,
    AltShiftDown : 312,
    AltShiftLeft : 313,
    AltShiftRight : 314,
    AltShiftPageUp : 315,
    AltShiftPageDown : 316,
    AltShiftBackspace : 317,
    AltShiftInsert : 318,
    AltShiftDelete : 319,
    AltShiftHome : 320,
    AltShiftEnd : 321,
    AltShiftTab : 322,
    ShiftF1 : 323,
    ShiftF2 : 324,
    ShiftF3 : 325,
    ShiftF4 : 326,
    ShiftF5 : 327,
    ShiftF6 : 328,
    ShiftF7 : 329,
    ShiftF8 : 330,
    ShiftF9 : 331,
    ShiftF10 : 332,
    ShiftEnter : 333,
    ShiftEscape : 334,
    ShiftUp : 335,
    ShiftDown : 336,
    ShiftLeft : 337,
    ShiftRight : 338,
    ShiftPageUp : 339,
    ShiftPageDown : 340,
    ShiftBackspace : 341,
    ShiftInsert : 342,
    ShiftDelete : 343,
    ShiftHome : 344,
    ShiftEnd : 345,
    ShiftTab : 346
  };

  // The definition Core::RetargetReason determines the set of possible reasons 
  // for a touch handler to resign and pass over the current event processing to 
  // another handler.
  _unit.RetargetReason =
  {
    WipeUp : 0x1,
    WipeDown : 0x2,
    WipeLeft : 0x4,
    WipeRight : 0x8,
    LongPress : 0x10,
    ForeignPress : 0x20
  };

  // Function to initialize the application.
  _unit._Init = function()
  {
    _unit.LineView.__proto__ = _unit.View;
    _unit.QuadView.__proto__ = _unit.View;
    _unit.RectView.__proto__ = _unit.View;
    _unit.Group.__proto__ = _unit.RectView;
    _unit.Root.__proto__ = _unit.Group;
    _unit.KeyEvent.__proto__ = _unit.Event;
    _unit.CursorGrabEvent.__proto__ = _unit.Event;
    _unit.CursorEvent.__proto__ = _unit.Event;
    _unit.DragEvent.__proto__ = _unit.Event;
    _unit.Outline.__proto__ = _unit.RectView;
    _unit.VerticalList.__proto__ = _unit.Group;
    _unit.SimpleTouchHandler.__proto__ = _unit.QuadView;
    _unit.SlideTouchHandler.__proto__ = _unit.RectView;
    _unit.LayoutLineContext.__proto__ = _unit.LayoutContext;
    _unit.LayoutQuadContext.__proto__ = _unit.LayoutContext;
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