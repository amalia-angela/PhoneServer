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
if ( EmWiApp.Effects )
  throw new Error( "The unit file 'Effects.js' included twice!" );

// Create the unit object including all members of the unit.
EmWiApp.Effects = (function()
{
  var _app  = EmWiApp;
  var _unit = {};

  // Constant values used in this 'JavaScript' module only.
  var _0000 = [ 100, 100 ];
  var _0001 = "Trying to remove a fader from a task, which is actually running";
  var _0002 = "The fader doesn\'t belong to this task";
  var _0003 = "Trying to add a fader to a task, which is actually running";
  var _0004 = "The fader belongs already to a task";

  // The class Effects::Effect provides the base functionality for all kinds of 
  // animation effects. Effects allow the designer to enrich the GUI application 
  // with additional fancy and eye candy animations. For example, the effect Effects::ColorEffect 
  // performs the color fade animation. Effects::RectEffect in contrast can animate 
  // the position and the size of a GUI component, etc. Animation effects are determined 
  // by their duration and by the timing function.
  // The duration is primarily controlled by the value of the property @CycleDuration. 
  // This is the time the effect will take for a single animation run. Whether and 
  // how often the animation is repeated is stored in the property @NoOfCycles. 
  // In this case the property @InterCycleDelay can determine an optional interval 
  // to wait between two consecutive animation runs. Finally the property @InitialDelay 
  // determines the interval to wait at the very beginning of the effect still before 
  // the first animation run began.
  // The timing function determines the curve to run the animation. The class implements 
  // an extensive set of various timing functions. In its simplest case the animation 
  // can follow a straight line, or it can start slow and get faster afterwards. 
  // More complex timings perform realistic spring elastic and bounce animations. 
  // Besides it the user can configure his/her own animation curve. In such case 
  // the timing function is based on a cubic Bezier curve. It gives the designer 
  // a lot of possibilities to specify very fancy timing functions. The timing is 
  // controlled by the property @Timing. In the case the designer wants to specify 
  // a new curve, the properties @TimingCustom1 and @TimingCustom2 are available. 
  // With the property @Noise an additional random noise can be added to the effect.
  // During the runtime of the animation, the effect will send signals to the slot 
  // method stored in the property @OnAnimate. When the effect is finished a signal 
  // is send to the slot method stored in the @OnFinished property.
  // Whether the effect is running or not is controlled by its property @Enabled. 
  // It can be used to start and stop the effect. The effect can also be controlled 
  // by sending signals to its @StartEffect and @StopEffect slot methods. With the 
  // property @Reversed the playback direction can be determined. This allows to 
  // simply rewind running effects or to configure an effect to be played in the 
  // reverse direction. The slot method @ReverseEffect can also be used to switch 
  // the playback direction.
  _unit.Effect =
  {
    timingList : null,
    timer : null,

    // The property 'OnFinished' can refer to a slot method, which should be invoked 
    // when the effect is done. It's up to you to provide the slot method and to 
    // fill it with the desired behavior. It makes possible to chain effects together, 
    // so the finish of one effect can trigger another effect. To do this simply 
    // assign the @StartEffect slot method of the one effect to the OnFinished property 
    // of the other effect.
    OnFinished : null,

    // The property 'OnAnimate' can refer to a slot method, which should be invoked 
    // when the effect triggers the next animation frame. It's up to you to provide 
    // the slot method and to fill it with the desired behavior. From the method 
    // you can query the current progress of the animation. For this purpose derived 
    // classes provide a variable Value.
    // Usually, it is not necessary to implement any slot methods in order to perform 
    // the animation. All derived effect classes do provide an Outlet property, 
    // which can refer to the property which should be animated.
    OnAnimate : null,
    direction : 0,
    startDirection : 0,
    curveFactor2 : 0,
    curveFactor1 : 0,
    invCycleDuration : 0.001000,
    lastFrame : 0,
    cycleCounter : 0,
    startTime : 0,

    // The property 'Elasticity' determines the amplitude of a bounce in relation 
    // to the just preceding bounce when @Timing is configured with Effects::Timing.Bounce_In, 
    // Effects::Timing.Bounce_Out or Effects::Timing.Bounce_InOut.
    // The valid values for this property lie in the range 0.0 .. 1.0 whereby the 
    // value 1.0 means that the bounce is very elastic.
    Elasticity : 0.500000,

    // The property 'Bounces' determines how often the animation should bounce on 
    // its start or/and finish position when @Timing is configured with Effects::Timing.Bounce_In, 
    // Effects::Timing.Bounce_Out or Effects::Timing.Bounce_InOut.
    // The valid values for this property lie in the range 1 .. 10.
    Bounces : 3,

    // The property 'Oscillations' determines how often the animation should oscillate 
    // back and forth around its start or/and finish position when @Timing is configured 
    // with Effects::Timing.Elastic_In, Effects::Timing.Elastic_Out or Effects::Timing.Elastic_InOut.
    // The valid values for this property lie in the range 1 .. 10.
    Oscillations : 3,

    // The property 'Amplitude' determines the magnitude of the retraction when 
    // @Timing is configured with Effects::Timing.Back_In, Effects::Timing.Back_Out 
    // or Effects::Timing.Back_InOut.
    // The valid values for this property lie in the range 0.0 .. 10.0.
    Amplitude : 0.500000,

    // The property 'Exponent' determines the exponent parameter if @Timing is configured 
    // with Effects::Timing.Power_In, Effects::Timing.Power_Out, Effects::Timing.Power_InOut, 
    // Effects::Timing.Exp_In, Effects::Timing.Exp_Out, Effects::Timing.Exp_InOut.
    // The valid values for this property lie in the range 1.0 .. 100.0.
    Exponent : 3.000000,

    // The property 'TimingCustom2' controls the animation speed at the end of a 
    // user-defined timing function. The timing functions are based on cubic Bezier 
    // curves. Coming from a curve with a constant slope (a straight line), this 
    // property determines whether the curve should turn right (positive value) 
    // or turns left (negative value) at its end.
    // To activate the user-defined timing function, the property @Timing should 
    // be initialized with the value Effects::Timing.Custom.
    TimingCustom2 : 0,

    // The property 'TimingCustom1' controls the animation speed at the beginning 
    // of a user-defined timing function. The timing functions are based on cubic 
    // Bezier curves. Coming from a curve with a constant slope (a straight line), 
    // this property determines whether the curve should turn left (positive value) 
    // or turns right (negative value) at its beginning.
    // To activate the user-defined timing function, the property @Timing should 
    // be initialized with the value Effects::Timing.Custom.
    TimingCustom1 : 0,

    // The property 'NoOfCycles' determines how often the effect should repeat the 
    // animation. If this value is zero, the effect will run endless.
    NoOfCycles : 0,

    // The property 'CycleDuration' stores the period in milliseconds of a single 
    // animation run.
    CycleDuration : 1000,

    // The property 'InitialDelay' stores the interval in milliseconds the effect 
    // should wait before the first animation run can begin. If InitialDelay is 
    // zero the effect will start the animation immediately.
    InitialDelay : 0,

    // The property 'Timing' determines the curve to interpolate the animated values 
    // during the animation:
    // - Effects::Timing.Linear : the animation will follow a straight line. The 
    // values will be linearly interpolated.
    // - Effects::Timing.Power_In : the animation starts slow and then accelerates 
    // using the power function f(t)=t^Exponent. The exponent is determined by the 
    // property @Exponent. To achieve an effect like the jQuery 'easeInQuad', 'easeInCube', 
    // 'easeInQuart' and 'easeInQuint' set the Exponent to the corresponding value 
    // 2.0, 3.0, 4.0 or 5.0.
    // - Effects::Timing.Power_Out : the animation starts fast and then decelerates 
    // using the power function f(t)=t^Exponent. The exponent is determined by the 
    // property @Exponent. To achieve an effect like the jQuery 'easeOutQuad', 'easeOutCube', 
    // 'easeOutQuart' and 'easeOutQuint' set the Exponent to the corresponding value 
    // 2.0, 3.0, 4.0 or 5.0.
    // - Effects::Timing.Power_InOut : the animation starts slow, accelerates and 
    // then decelerates again using the power function f(t)=t^Exponent. The exponent 
    // is determined by the property @Exponent. To achieve an effect like the jQuery 
    // 'easeInOutQuad', 'easeInOutCube', 'easeInOutQuart' and 'easeInOutQuint' set 
    // the Exponent to the corresponding value 2.0, 3.0, 4.0 or 5.0.
    // - Effects::Timing.Exp_In : the animation starts slow and then accelerates 
    // using the formula f(t)=(exp(Exponent*t)-1.0)/(exp(Exponent)-1.0). The exponent 
    // is determined by the property @Exponent. To achieve an effect like the jQuery 
    // 'easeInExpo' set the Exponent to the value 7.0.
    // - Effects::Timing.Exp_Out : the animation starts fast and then decelerates 
    // using the formula f(t)=(exp(Exponent*t)-1.0)/(exp(Exponent)-1.0). The exponent 
    // is determined by the property @Exponent. To achieve an effect like the jQuery 
    // 'easeOutExpo' set the Exponent to the value 7.0.
    // - Effects::Timing.Exp_InOut : the animation starts slow, accelerates and 
    // then decelerates again using the formula f(t)=(exp(Exponent*t)-1.0)/(exp(Exponent)-1.0). 
    // The exponent is determined by the property @Exponent. To achieve an effect 
    // like the jQuery 'easeInOutExpo' set the Exponent to the value 7.0.
    // - Effects::Timing.Sine_In : the animation starts slow and then accelerates 
    // using the sine function f(t)=sin(t*90).
    // - Effects::Timing.Sine_Out : the animation starts fast and then decelerates 
    // using the sine function f(t)=sin(t*90).
    // - Effects::Timing.Sine_InOut : the animation starts slow, accelerates and 
    // then decelerates again using the sine function f(t)=sin(t*90).
    // - Effects::Timing.Circle_In : the animation starts slow and then accelerates 
    // using the circular function f(t)=1-sqrt(1-t^2).
    // - Effects::Timing.Circle_Out : the animation starts fast and then decelerates 
    // using the circular function f(t)=1-sqrt(1-t^2).
    // - Effects::Timing.Circle_InOut : the animation starts slow, accelerates and 
    // then decelerates again using the circular function f(t)=1-sqrt(1-t^2).
    // - Effects::Timing.Back_In : at the begin the animation retracts slightly 
    // and then it accelerates again towards the finish. The amplitude of the retraction 
    // is determined by the property @Amplitude. This timing is based on the formula 
    // f(t)=t^3-t*Amplitude*sin(t*180).
    // - Effects::Timing.Back_Out : at the begin the animation decelerates again 
    // towards the finish and then swings slightly over the final position. The 
    // amplitude of the retraction at the final position is determined by the property 
    // @Amplitude. This timing is based on the formula f(t)=t^3-t*Amplitude*sin(t*180).
    // - Effects::Timing.Back_InOut : at the begin the animation retracts slightly 
    // and then it accelerates again. At the half time the animation decelerates 
    // and once reached the final position it swings slightly over it. The amplitude 
    // of the retractions at the start and the end position is determined by the 
    // property @Amplitude. This timing is based on the formula f(t)=t^3-t*Amplitude*sin(t*180).
    // - Effects::Timing.Elastic_In : similarly to a spring this animation oscillates 
    // back and forth around its start position increasing with every oscillation 
    // its amplitude. The total number of oscillations is determined by the property 
    // @Oscillations. With the end of the last oscillation the animation reaches 
    // its final position. This timing is based on the formula f(t)=t^3*sin(t*90*(1+4*Oscillations)).
    // - Effects::Timing.Elastic_Out : similarly to a spring this animation oscillates 
    // back and forth around its finish position decreasing with every oscillation 
    // its amplitude. The total number of oscillations is determined by the property 
    // @Oscillations. With the end of the last oscillation the animation reaches 
    // its final position. This timing is based on the formula f(t)=t^3*sin(t*90*(1+4*Oscillations)).
    // - Effects::Timing.Elastic_InOut : this animation oscillates back and forth 
    // around its start position increasing with every oscillation its amplitude. 
    // Then from the halftime the animation oscillates around its finish position 
    // decelerating again its amplitude with every oscillation. How often the animation 
    // oscillates around the start and finish position is determined by the property 
    // @Oscillations. With the end of the last oscillation the animation reaches 
    // its final position. This timing is based on the formula f(t)=t^3*sin(t*90*(1+4*Oscillations)).
    // - Effects::Timing.Bounce_In : this animation bounces on its start position 
    // increasing with every bounce its amplitude. The total number of bounces is 
    // determined by the property @Bounces. How much the amplitude is increased 
    // is determined by the property @Elasticity. With the end of the last bounce 
    // the animation reaches its final position.
    // - Effects::Timing.Bounce_Out : this animation bounces on its finish position 
    // decreasing with every bounce its amplitude. The total number of bounces is 
    // determined by the property @Bounces. How much the amplitude is decreased 
    // is determined by the property @Elasticity. With the end of the last bounce 
    // the animation reaches its final position.
    // - Effects::Timing.Bounce_InOut : this animation bounces on its start position 
    // increasing with every bounce its amplitude. Then from the halftime this animation 
    // bounces on its finish position decreasing again its amplitude with every 
    // bounce. How often the animation bounces on the start and on the finish position 
    // is determined by the property @Bounces. How much the amplitude is increased/decreased 
    // is determined by the property @Elasticity. With the end of the last bounce 
    // the animation reaches its final position.
    // - Effects::Timing.EaseIn_FastOut : the animation starts slow and then accelerates. 
    // This mode corresponds to Effects::Timing.Power_In with property @Exponent 
    // set to 3.0. 
    // - Effects::Timing.FastIn_EaseOut : the animation starts fast and then decelerates. 
    // This mode corresponds to Effects::Timing.Power_Out with property @Exponent 
    // set to 3.0. 
    // - Effects::Timing.FastIn_FastOut : the animation starts fast, decelerates 
    // and then accelerates again.
    // - Effects::Timing.EaseIn_EaseOut : the animation starts slow, accelerates 
    // and then decelerates again.
    // - Effects::Timing.Custom : The animation curve is determined by properties 
    // @TimingCustom1 and @TimingCustom2.
    Timing : 0,

    // The property 'Enabled' determines whether the effect is currently running 
    // or not. Changing the value of this property from 'false' to 'true' will re-start 
    // the effect. In such case the effect will start from the beginning.
    // The lifetime of the effect can also be controlled by sending signals to the 
    // slot methods @StartEffect and @StopEffect. Moreover with the property @Reversed 
    // and the slot method @ReverseEffect the playback direction can be controlled.
    Enabled : false,

    // The property 'Reversed' controls the playback direction of the effect. If 
    // this property is 'false' the effect is played forward. If this property is 
    // 'true' the effect is played backward. You can change this property either 
    // while the effect is running or before the effect has been started:
    // - Changing this property while the effect is running will cause the effect 
    // playback direction to be changed immediately. In this case all already traversed 
    // animation cycles are rewinded till the origin of the effect is reached. This 
    // includes all delays between the animation cycles as well as the initial delay 
    // specified in the properties @InitialDelay and @InterCycleDelay. Note, if 
    // the effect is endless (property @NoOfCycles == 0) then the effect will continue 
    // running endless with the reversed direction.
    // - If this property is set 'true' before the effect has been started then 
    // the effect behaves as if it has been configured with Value1 and Value2 exchanged 
    // and the @Timing function mirrored. In particular before the first animation 
    // cycle begins the effect waits the time specified in the property @InitialDelay. 
    // Please note, when the effect ends (regardless of its playback direction) 
    // a signal is sent to the slot method specified in the property @OnFinished.
    Reversed : false,
    useBezier2 : false,
    useBezier3 : false,

    // Implementation of the Chora method : 'Effects::Effect.timerSlot()'
    timerSlot : function( sender )
    {
      var _tmp;

      if ( !this.timer )
        return;

      if ( !this.startDirection )
      {
        if ( this.Reversed )
          this.startDirection = -1;
        else
          this.startDirection = 1;

        this.direction = this.startDirection;
        this.startTime = this.timer.Time;
        this.cycleCounter = 0;
        this.lastFrame = -1.000000;
      }

      var done;

      if (( this.startDirection > 0 ) && ( this.direction > 0 ))
        done = this.runFwdFwd();
      else
        if (( this.startDirection < 0 ) && ( this.direction < 0 ))
          done = this.runRevRev();
        else
          if ( this.startDirection > 0 )
            done = this.runFwdRev();
          else
            done = this.runRevFwd();

      if ( done )
      {
        this.OnSetEnabled( false );
        ( _tmp = this.OnFinished )? _tmp[1].call( _tmp[0], this ) : null;
      }
    },

    // Implementation of the Chora method : 'Effects::Effect.run()'
    run : function( aFrame )
    {
      var _tmp;

      if ( !this.timingList && ((( this.Timing === 19 ) || ( this.Timing === 20 )) 
          || ( this.Timing === 21 )))
      {
        var bounces = this.Bounces + 1;
        var elasticity = Math.sqrt( this.Elasticity );
        var sum = 0.500000;
        var i;

        this.timingList = _app._NewObject( _unit.TimingList, 0 );
        this.timingList.spans.Set( 0, 1.000000 );
        this.timingList.amps.Set( 0, 1.000000 );

        for ( i = 1; i < bounces; i = i + 1 )
        {
          this.timingList.spans.Set( i, this.timingList.spans.Get( i - 1 ) * elasticity );
          this.timingList.amps.Set( i, this.timingList.amps.Get( i - 1 ) * this.Elasticity );
          sum = sum + this.timingList.spans.Get( i );
        }

        var invSum = 1.000000 / sum;

        this.timingList.spans.Set( 0, 0.500000 );
        sum = 0.000000;

        for ( i = 0; i < bounces; i = i + 1 )
        {
          this.timingList.spans.Set( i, this.timingList.spans.Get( i ) * invSum );
          sum = sum + this.timingList.spans.Get( i );
        }

        this.timingList.spans.Set( bounces, this.timingList.spans.Get( bounces ) 
        + ( 1.000000 - sum ));
      }

      switch ( this.Timing )
      {
        case 1 :
          aFrame = Math.pow( aFrame, this.Exponent );
        break;

        case 2 :
        {
          aFrame = 1.000000 - aFrame;
          aFrame = 1.000000 - Math.pow( aFrame, this.Exponent );
        }
        break;

        case 3 :
        {
          aFrame = aFrame * 2.000000;

          if ( aFrame < 1.000000 )
            aFrame = Math.pow( aFrame, this.Exponent ) / 2.000000;
          else
          {
            aFrame = 2.000000 - aFrame;
            aFrame = ( 2.000000 - Math.pow( aFrame, this.Exponent )) * 0.500000;
          }
        }
        break;

        case 4 :
          aFrame = ( Math.pow( 2.718000, this.Exponent * aFrame ) - 1.000000 ) / 
          ( Math.pow( 2.718000, this.Exponent ) - 1.000000 );
        break;

        case 5 :
        {
          aFrame = 1.000000 - aFrame;
          aFrame = 1.000000 - (( Math.pow( 2.718000, this.Exponent * aFrame ) - 
          1.000000 ) / ( Math.pow( 2.718000, this.Exponent ) - 1.000000 ));
        }
        break;

        case 6 :
        {
          aFrame = aFrame * 2.000000;

          if ( aFrame < 1.000000 )
            aFrame = (( Math.pow( 2.718000, this.Exponent * aFrame ) - 1.000000 ) 
            / ( Math.pow( 2.718000, this.Exponent ) - 1.000000 )) / 2.000000;
          else
          {
            aFrame = 2.000000 - aFrame;
            aFrame = ( 2.000000 - (( Math.pow( 2.718000, this.Exponent * aFrame ) 
            - 1.000000 ) / ( Math.pow( 2.718000, this.Exponent ) - 1.000000 ))) 
            * 0.500000;
          }
        }
        break;

        case 7 :
          aFrame = 1.000000 - Math.cos(( aFrame * 90.000000 ) * _app._Deg2Rad );
        break;

        case 8 :
          aFrame = Math.sin(( aFrame * 90.000000 ) * _app._Deg2Rad );
        break;

        case 9 :
        {
          aFrame = aFrame * 2.000000;

          if ( aFrame < 1.000000 )
          {
            aFrame = 1.000000 - Math.cos(( aFrame * 90.000000 ) * _app._Deg2Rad );
            aFrame = aFrame * 0.500000;
          }
          else
          {
            aFrame = 2.000000 - aFrame;
            aFrame = 1.000000 - Math.cos(( aFrame * 90.000000 ) * _app._Deg2Rad );
            aFrame = ( 2.000000 - aFrame ) * 0.500000;
          }
        }
        break;

        case 10 :
          aFrame = 1.000000 - Math.sqrt( 1.000000 - ( aFrame * aFrame ));
        break;

        case 11 :
        {
          aFrame = 1.000000 - aFrame;
          aFrame = Math.sqrt( 1.000000 - ( aFrame * aFrame ));
        }
        break;

        case 12 :
        {
          aFrame = aFrame * 2.000000;

          if ( aFrame < 1.000000 )
          {
            aFrame = 1.000000 - Math.sqrt( 1.000000 - ( aFrame * aFrame ));
            aFrame = aFrame * 0.500000;
          }
          else
          {
            aFrame = 2.000000 - aFrame;
            aFrame = 1.000000 - Math.sqrt( 1.000000 - ( aFrame * aFrame ));
            aFrame = ( 2.000000 - aFrame ) * 0.500000;
          }
        }
        break;

        case 13 :
          aFrame = (( aFrame * aFrame ) * aFrame ) - (( aFrame * this.Amplitude ) 
          * Math.sin(( aFrame * 180.000000 ) * _app._Deg2Rad ));
        break;

        case 14 :
        {
          aFrame = 1.000000 - aFrame;
          aFrame = (( aFrame * aFrame ) * aFrame ) - (( aFrame * this.Amplitude ) 
          * Math.sin(( aFrame * 180.000000 ) * _app._Deg2Rad ));
          aFrame = 1.000000 - aFrame;
        }
        break;

        case 15 :
        {
          aFrame = aFrame * 2.000000;

          if ( aFrame < 1.000000 )
          {
            aFrame = (( aFrame * aFrame ) * aFrame ) - (( aFrame * this.Amplitude ) 
            * Math.sin(( aFrame * 180.000000 ) * _app._Deg2Rad ));
            aFrame = aFrame * 0.500000;
          }
          else
          {
            aFrame = 2.000000 - aFrame;
            aFrame = (( aFrame * aFrame ) * aFrame ) - (( aFrame * this.Amplitude ) 
            * Math.sin(( aFrame * 180.000000 ) * _app._Deg2Rad ));
            aFrame = ( 2.000000 - aFrame ) * 0.500000;
          }
        }
        break;

        case 16 :
          aFrame = (( aFrame * aFrame ) * aFrame ) * Math.sin((( aFrame * 90.000000 ) 
          * ( 1 + ( 4 * this.Oscillations ))) * _app._Deg2Rad );
        break;

        case 17 :
        {
          aFrame = 1.000000 - aFrame;
          aFrame = 1.000000 - ((( aFrame * aFrame ) * aFrame ) * Math.sin((( aFrame 
          * 90.000000 ) * ( 1 + ( 4 * this.Oscillations ))) * _app._Deg2Rad ));
        }
        break;

        case 18 :
        {
          aFrame = aFrame * 2.000000;

          if ( aFrame < 1.000000 )
          {
            aFrame = (( aFrame * aFrame ) * aFrame ) * Math.sin((( aFrame * 90.000000 ) 
            * ( 1 + ( 4 * this.Oscillations ))) * _app._Deg2Rad );
            aFrame = aFrame * 0.500000;
          }
          else
          {
            aFrame = 2.000000 - aFrame;
            aFrame = (( aFrame * aFrame ) * aFrame ) * Math.sin((( aFrame * 90.000000 ) 
            * ( 1 + ( 4 * this.Oscillations ))) * _app._Deg2Rad );
            aFrame = ( 2.000000 - aFrame ) * 0.500000;
          }
        }
        break;

        case 19 :
        {
          var list = this.timingList;
          var i = 0;
          var t1 = 0.000000;
          var t2 = list.spans.Get( 0 );
          var t = 1.000000 - aFrame;

          while ( t > t2 )
          {
            i = i + 1;
            t1 = t2;
            t2 = t2 + list.spans.Get( i );
          }

          aFrame = ( t - t1 ) / ( t2 - t1 );

          if ( !i )
            aFrame = 1.000000 - ( aFrame * aFrame );
          else
          {
            aFrame = ( 2.000000 * aFrame ) - 1.000000;
            aFrame = list.amps.Get( i ) * ( 1.000000 - ( aFrame * aFrame ));
          }
        }
        break;

        case 20 :
        {
          var list = this.timingList;
          var i = 0;
          var t1 = 0.000000;
          var t2 = list.spans.Get( 0 );

          while ( aFrame > t2 )
          {
            i = i + 1;
            t1 = t2;
            t2 = t2 + list.spans.Get( i );
          }

          aFrame = ( aFrame - t1 ) / ( t2 - t1 );

          if ( !i )
            aFrame = aFrame * aFrame;
          else
          {
            aFrame = ( 2.000000 * aFrame ) - 1.000000;
            aFrame = 1.000000 - ( list.amps.Get( i ) * ( 1.000000 - ( aFrame * aFrame )));
          }
        }
        break;

        case 21 :
        {
          var list = this.timingList;
          var i = 0;
          var t1 = 0.000000;
          var t2 = list.spans.Get( 0 );
          var f = aFrame * 2.000000;
          var t = f - 1.000000;

          if ( f < 1.000000 )
            t = -t;

          while ( t > t2 )
          {
            i = i + 1;
            t1 = t2;
            t2 = t2 + list.spans.Get( i );
          }

          t = ( t - t1 ) / ( t2 - t1 );

          if ( !i )
            t = t * t;
          else
          {
            t = ( 2.000000 * t ) - 1.000000;
            t = 1.000000 - ( list.amps.Get( i ) * ( 1.000000 - ( t * t )));
          }

          if ( f < 1.000000 )
            aFrame = 0.500000 * ( 1.000000 - t );
          else
            aFrame = 0.500000 * ( 1.000000 + t );
        }
        break;

        default : 
          if ( this.useBezier2 )
          {
            var f = aFrame;
            var nf = 1.000000 - f;

            aFrame = (( nf * f ) * ( this.curveFactor1 + 1.000000 )) + ( f * f );
          }
          else
            if ( this.useBezier3 )
            {
              var f = aFrame;
              var nf = 1.000000 - f;
              var f2 = f * f;
              var nf2 = nf * nf;

              aFrame = ((( nf2 * f ) * ( this.curveFactor1 + 1.000000 )) + (( nf 
              * f2 ) * ( this.curveFactor2 + 2.000000 ))) + ( f2 * f );
            }
      }

      this.Animate( aFrame );
      ( _tmp = this.OnAnimate )? _tmp[1].call( _tmp[0], this ) : null;
    },

    // Implementation of the Chora method : 'Effects::Effect.runRevRev()'
    runRevRev : function()
    {
      var time = ( this.timer.Time - this.startTime ) | 0;

      if ( time < 0 )
        time = -time;

      var delay = this.InitialDelay;
      var period0 = this.InitialDelay + this.CycleDuration;
      var periodN = this.CycleDuration;
      var done = false;
      var frame = this.lastFrame;

      if ( !this.cycleCounter && ( time >= period0 ))
      {
        this.cycleCounter = 1;
        time = time - period0;
        this.startTime = this.startTime + period0;
      }

      if (( this.cycleCounter > 0 ) && ( time >= periodN ))
      {
        var cycles = ( time / periodN ) | 0;

        this.cycleCounter = this.cycleCounter + cycles;
        time = time - ( cycles * periodN );
        this.startTime = this.startTime + ( cycles * periodN );
      }

      if (( this.cycleCounter > 2 ) && !this.NoOfCycles )
        this.cycleCounter = 1;

      if ( this.cycleCounter > 0 )
        delay = 0;

      if (( this.cycleCounter >= this.NoOfCycles ) && ( this.NoOfCycles > 0 ))
      {
        done = true;
        frame = 0.000000;
      }
      else
        if ( time >= delay )
          frame = 1.000000 - (( time - delay ) * this.invCycleDuration );
        else
          if ( frame >= 0.000000 )
            frame = 0.000000;

      if ( frame !== this.lastFrame )
      {
        this.lastFrame = frame;
        this.run( frame );
      }

      return done;
    },

    // Implementation of the Chora method : 'Effects::Effect.runRevFwd()'
    runRevFwd : function()
    {
      var time = ( this.startTime - this.timer.Time ) | 0;
      var delay = this.InitialDelay;
      var period0 = this.InitialDelay + this.CycleDuration;
      var periodN = this.CycleDuration;
      var done = false;
      var frame = this.lastFrame;

      if (( this.cycleCounter > 1 ) && ( time < 0 ))
      {
        var cycles = ((( -time + periodN ) - 1 ) / periodN ) | 0;

        if (( this.cycleCounter - cycles ) <= 0 )
          cycles = this.cycleCounter - 1;

        this.cycleCounter = this.cycleCounter - cycles;
        time = time + ( cycles * periodN );
        this.startTime = this.startTime + ( cycles * periodN );
      }

      if ((( this.cycleCounter === 1 ) && ( time < 0 )) && ( this.NoOfCycles > 0 ))
      {
        this.cycleCounter = 0;
        time = time + period0;
        this.startTime = this.startTime + period0;
      }

      if ((( this.cycleCounter === 1 ) && ( time < 0 )) && !this.NoOfCycles )
      {
        var cycles = ((( -time + periodN ) - 1 ) / periodN ) | 0;

        time = time + ( cycles * periodN );
        this.startTime = this.startTime + ( cycles * periodN );
      }

      if ( this.cycleCounter > 0 )
        delay = 0;

      if ( time < 0 )
      {
        done = true;
        frame = 1.000000;
      }
      else
        if ( time >= delay )
          frame = 1.000000 - (( time - delay ) * this.invCycleDuration );
        else
          if ( frame >= 0.000000 )
            frame = 1.000000;

      if ( frame !== this.lastFrame )
      {
        this.lastFrame = frame;
        this.run( frame );
      }

      return done;
    },

    // Implementation of the Chora method : 'Effects::Effect.runFwdRev()'
    runFwdRev : function()
    {
      var time = ( this.startTime - this.timer.Time ) | 0;
      var delay = this.InitialDelay;
      var period0 = this.InitialDelay + this.CycleDuration;
      var periodN = this.CycleDuration;
      var done = false;
      var frame = this.lastFrame;

      if (( this.cycleCounter > 1 ) && ( time < 0 ))
      {
        var cycles = ((( -time + periodN ) - 1 ) / periodN ) | 0;

        if (( this.cycleCounter - cycles ) <= 0 )
          cycles = this.cycleCounter - 1;

        this.cycleCounter = this.cycleCounter - cycles;
        time = time + ( cycles * periodN );
        this.startTime = this.startTime + ( cycles * periodN );
      }

      if ((( this.cycleCounter === 1 ) && ( time < 0 )) && ( this.NoOfCycles > 0 ))
      {
        this.cycleCounter = 0;
        time = time + period0;
        this.startTime = this.startTime + period0;
      }

      if ((( this.cycleCounter === 1 ) && ( time < 0 )) && !this.NoOfCycles )
      {
        var cycles = ((( -time + periodN ) - 1 ) / periodN ) | 0;

        time = time + ( cycles * periodN );
        this.startTime = this.startTime + ( cycles * periodN );
      }

      if ( this.cycleCounter > 0 )
        delay = 0;

      if ( time < 0 )
      {
        done = true;
        frame = 0.000000;
      }
      else
        if ( time >= delay )
          frame = ( time - delay ) * this.invCycleDuration;
        else
          if ( frame >= 0.000000 )
            frame = 0.000000;

      if ( frame !== this.lastFrame )
      {
        this.lastFrame = frame;
        this.run( frame );
      }

      return done;
    },

    // Implementation of the Chora method : 'Effects::Effect.runFwdFwd()'
    runFwdFwd : function()
    {
      var time = ( this.timer.Time - this.startTime ) | 0;

      if ( time < 0 )
        time = -time;

      var delay = this.InitialDelay;
      var period0 = this.InitialDelay + this.CycleDuration;
      var periodN = this.CycleDuration;
      var done = false;
      var frame = this.lastFrame;

      if ( !this.cycleCounter && ( time >= period0 ))
      {
        this.cycleCounter = 1;
        time = time - period0;
        this.startTime = this.startTime + period0;
      }

      if (( this.cycleCounter > 0 ) && ( time >= periodN ))
      {
        var cycles = ( time / periodN ) | 0;

        this.cycleCounter = this.cycleCounter + cycles;
        time = time - ( cycles * periodN );
        this.startTime = this.startTime + ( cycles * periodN );
      }

      if (( this.cycleCounter > 2 ) && !this.NoOfCycles )
        this.cycleCounter = 1;

      if ( this.cycleCounter > 0 )
        delay = 0;

      if (( this.cycleCounter >= this.NoOfCycles ) && ( this.NoOfCycles > 0 ))
      {
        done = true;
        frame = 1.000000;
      }
      else
        if ( time >= delay )
          frame = ( time - delay ) * this.invCycleDuration;
        else
          if ( frame >= 0.000000 )
            frame = 1.000000;

      if ( frame !== this.lastFrame )
      {
        this.lastFrame = frame;
        this.run( frame );
      }

      return done;
    },

    // Implementation of the Chora method : 'Effects::Effect.OnSetReversed()'
    OnSetReversed : function( value )
    {
      if ( this.Reversed === value )
        return;

      this.Reversed = value;

      if ( !this.Enabled || !this.startDirection )
        return;

      if ( value )
        this.direction = -1;
      else
        this.direction = 1;

      this.startTime = ( this.timer.GetCurrentTime() * 2 ) - this.startTime;
    },

    // Implementation of the Chora method : 'Effects::Effect.OnSetElasticity()'
    OnSetElasticity : function( value )
    {
      if ( value < 0.000000 )
        value = 0.000000;

      if ( value > 1.000000 )
        value = 1.000000;

      this.Elasticity = value;
    },

    // Implementation of the Chora method : 'Effects::Effect.OnSetBounces()'
    OnSetBounces : function( value )
    {
      if ( value < 1 )
        value = 1;

      if ( value > 10 )
        value = 10;

      this.Bounces = value;
      this.timingList = null;
    },

    // Implementation of the Chora method : 'Effects::Effect.OnSetOscillations()'
    OnSetOscillations : function( value )
    {
      if ( value < 1 )
        value = 1;

      if ( value > 10 )
        value = 10;

      this.Oscillations = value;
    },

    // Implementation of the Chora method : 'Effects::Effect.OnSetAmplitude()'
    OnSetAmplitude : function( value )
    {
      if ( value < 0.000000 )
        value = 0.000000;

      if ( value > 10.000000 )
        value = 10.000000;

      this.Amplitude = value;
    },

    // Implementation of the Chora method : 'Effects::Effect.OnSetExponent()'
    OnSetExponent : function( value )
    {
      if ( value < 1.000000 )
        value = 1.000000;

      if ( value > 100.000000 )
        value = 100.000000;

      this.Exponent = value;
    },

    // Implementation of the Chora method : 'Effects::Effect.OnSetTimingCustom2()'
    OnSetTimingCustom2 : function( value )
    {
      if ( this.TimingCustom2 === value )
        return;

      this.TimingCustom2 = value;

      if ( this.Timing === 26 )
      {
        this.curveFactor2 = value;
        this.useBezier2 = ( this.curveFactor1 === this.curveFactor2 ) && ( this.curveFactor1 
        !== 0.000000 );
        this.useBezier3 = !this.useBezier2 && ( this.curveFactor1 !== this.curveFactor2 );
      }
    },

    // Implementation of the Chora method : 'Effects::Effect.OnSetTimingCustom1()'
    OnSetTimingCustom1 : function( value )
    {
      if ( this.TimingCustom1 === value )
        return;

      this.TimingCustom1 = value;

      if ( this.Timing === 26 )
      {
        this.curveFactor1 = value;
        this.useBezier2 = ( this.curveFactor1 === this.curveFactor2 ) && ( this.curveFactor1 
        !== 0.000000 );
        this.useBezier3 = !this.useBezier2 && ( this.curveFactor1 !== this.curveFactor2 );
      }
    },

    // Implementation of the Chora method : 'Effects::Effect.OnSetTiming()'
    OnSetTiming : function( value )
    {
      if ( this.Timing === value )
        return;

      this.Timing = value;
      this.timingList = null;

      switch ( value )
      {
        case 24 :
        {
          this.curveFactor1 = -1.100000;
          this.curveFactor2 = 1.100000;
        }
        break;

        case 22 :
        {
          this.curveFactor1 = -1.000000;
          this.curveFactor2 = -2.000000;
        }
        break;

        case 23 :
        {
          this.curveFactor1 = 2.000000;
          this.curveFactor2 = 1.000000;
        }
        break;

        case 25 :
        {
          this.curveFactor1 = 1.100000;
          this.curveFactor2 = -1.100000;
        }
        break;

        case 0 :
        {
          this.curveFactor1 = 0.000000;
          this.curveFactor2 = 0.000000;
        }
        break;

        default : 
        {
          this.curveFactor1 = this.TimingCustom1;
          this.curveFactor2 = this.TimingCustom2;
        }
      }

      this.useBezier2 = ( this.curveFactor1 === this.curveFactor2 ) && ( this.curveFactor1 
      !== 0.000000 );
      this.useBezier3 = !this.useBezier2 && ( this.curveFactor1 !== this.curveFactor2 );
    },

    // Implementation of the Chora method : 'Effects::Effect.OnSetNoOfCycles()'
    OnSetNoOfCycles : function( value )
    {
      if ( value < 0 )
        value = 0;

      this.NoOfCycles = value;
    },

    // Implementation of the Chora method : 'Effects::Effect.OnSetCycleDuration()'
    OnSetCycleDuration : function( value )
    {
      if ( value < 15 )
        value = 15;

      this.CycleDuration = value;
      this.invCycleDuration = 1.000000 / value;
    },

    // Implementation of the Chora method : 'Effects::Effect.OnSetInitialDelay()'
    OnSetInitialDelay : function( value )
    {
      if ( value < 0 )
        value = 0;

      this.InitialDelay = value;
    },

    // Implementation of the Chora method : 'Effects::Effect.OnSetEnabled()'
    OnSetEnabled : function( value )
    {
      if ( this.Enabled === value )
        return;

      this.Enabled = value;

      if ( !value && !!this.timer )
      {
        _app._DetachObjObserver([ this, this.timerSlot ], this.timer, 0 );
        this.timer = null;
      }

      if ( value )
      {
        this.timer = _app._GetAutoObject( _unit.EffectTimer );
        _app._AttachObjObserver([ this, this.timerSlot ], this.timer, 0 );
        this.startDirection = 0;
        _app._PostSignal([ this, this.timerSlot ], this );
      }
    },

    // Implementation of the Chora method : 'Effects::Effect.Animate()'
    Animate : function( aProgress )
    {
    },

    // The slot method 'StartEffect' re-starts the effect if a signal is sent to 
    // this slot method. The effect will start from the beginning.
    StartEffect : function( sender )
    {
      if ( this.Enabled )
        this.OnSetEnabled( false );

      this.OnSetEnabled( true );
    },

    // Initializer for the class 'Effects::Effect'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Effect;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Effects::Effect'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Effects::Effect'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Effects::Effect'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark all reachable objects ...
      if (( _tmp = this.timingList ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.timer ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnFinished ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnAnimate ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Effects::Effect"
  };

  // The class Effects::Int32Effect provides an animation effect intended to animate 
  // an 'int32' value within a range determined by the properties @Value1 and @value2. 
  // During the animation the value is interpolated and stored in the variable @Value. 
  // Additionally the @Outlet property can refer to an 'int32' property which thus 
  // will be 'remote controlled' by the effect. 
  // Beside the both end values, animation effects are determined by their duration 
  // and by the timing function. The duration is primarily controlled by the value 
  // of the property @CycleDuration. This is the time the effect will take for a 
  // single animation run. Whether and how often the animation is repeated is stored 
  // in the property @NoOfCycles. In this case the property @InterCycleDelay can 
  // determine an optional interval to wait between two consecutive animation runs. 
  // Finally the property @InitialDelay determines the interval to wait at the very 
  // beginning of the effect still before the first animation run began.
  // The timing function determines the curve to run the animation. The class implements 
  // an extensive set of various timing functions. In its simplest case the animation 
  // can follow a straight line, or it can start slow and get faster afterwards. 
  // More complex timings perform realistic spring elastic and bounce animations. 
  // Besides it the user can configure his/her own animation curve. In such case 
  // the timing function is based on a cubic Bezier curve. It gives the designer 
  // a lot of possibilities to specify very fancy timing functions. The timing is 
  // controlled by the property @Timing. In the case the designer wants to specify 
  // a new curve, the properties @TimingCustom1 and @TimingCustom2 are available. 
  // With the property @Noise an additional random noise can be added to the effect.
  // During the runtime of the animation, the effect will send signals to the slot 
  // method stored in the property @OnAnimate. When the effect is finished a signal 
  // is send to the slot method stored in the @OnFinished property.
  // Whether the effect is running or not is controlled by its property @Enabled. 
  // It can be used to start and stop the effect. The effect can also be controlled 
  // by sending signals to its @StartEffect and @StopEffect slot methods. With the 
  // property @Reversed the playback direction can be determined. This allows to 
  // simply rewind running effects or to configure an effect to be played in the 
  // reverse direction. The slot method @ReverseEffect can also be used to switch 
  // the playback direction.
  _unit.Int32Effect =
  {
    // The property 'Outlet' can store a reference to an 'int32' property to modify 
    // at the runtime of the animation effect. To obtain a reference to a property, 
    // the Chora ^ Reference property operator should be used. See 'Chora User Manual'.
    Outlet : null,

    // The variable 'Value' stores the actual value interpolated by the running 
    // animation.
    Value : 0,

    // The property 'Value2' determines the end value for the animation.
    Value2 : 255,

    // The property 'Value1' determines the start value for the animation.
    Value1 : 0,

    // Implementation of the Chora method : 'Effects::Int32Effect.Animate()'
    Animate : function( aProgress )
    {
      var _tmp0;
      this.Value = this.Value1 + ( Math.round(( this.Value2 - this.Value1 ) * aProgress ) 
      | 0 );

      if ( !!this.Outlet )
        ( _tmp0 = this.Outlet, _tmp0[2].call( _tmp0[0], this.Value ));
    },

    // Initializer for the class 'Effects::Int32Effect'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.Effect._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Int32Effect;
    },

    // Garbage Collector method for the class 'Effects::Int32Effect'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.Effect._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.Outlet ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Effects::Int32Effect"
  };

  // The class Effects::PointEffect provides an animation effect intended to animate 
  // a 'point' value within a range determined by the properties @Value1 and @value2. 
  // During the animation the value is interpolated and stored in the variable @Value. 
  // Additionally the @Outlet property can refer to a 'point' property which thus 
  // will be 'remote controlled' by the effect. 
  // Beside the both end values, animation effects are determined by their duration 
  // and by the timing function. The duration is primarily controlled by the value 
  // of the property @CycleDuration. This is the time the effect will take for a 
  // single animation run. Whether and how often the animation is repeated is stored 
  // in the property @NoOfCycles. In this case the property @InterCycleDelay can 
  // determine an optional interval to wait between two consecutive animation runs. 
  // Finally the property @InitialDelay determines the interval to wait at the very 
  // beginning of the effect still before the first animation run began.
  // The timing function determines the curve to run the animation. The class implements 
  // an extensive set of various timing functions. In its simplest case the animation 
  // can follow a straight line, or it can start slow and get faster afterwards. 
  // More complex timings perform realistic spring elastic and bounce animations. 
  // Besides it the user can configure his/her own animation curve. In such case 
  // the timing function is based on a cubic Bezier curve. It gives the designer 
  // a lot of possibilities to specify very fancy timing functions. The timing is 
  // controlled by the property @Timing. In the case the designer wants to specify 
  // a new curve, the properties @TimingCustom1 and @TimingCustom2 are available. 
  // With the property @Noise an additional random noise can be added to the effect.
  // During the runtime of the animation, the effect will send signals to the slot 
  // method stored in the property @OnAnimate. When the effect is finished a signal 
  // is send to the slot method stored in the @OnFinished property.
  // Whether the effect is running or not is controlled by its property @Enabled. 
  // It can be used to start and stop the effect. The effect can also be controlled 
  // by sending signals to its @StartEffect and @StopEffect slot methods. With the 
  // property @Reversed the playback direction can be determined. This allows to 
  // simply rewind running effects or to configure an effect to be played in the 
  // reverse direction. The slot method @ReverseEffect can also be used to switch 
  // the playback direction.
  _unit.PointEffect =
  {
    // The variable 'Value' stores the actual value interpolated by the running 
    // animation.
    Value : _app._NullPoint,

    // The property 'Value2' determines the end value for the animation.
    Value2 : _0000,

    // The property 'Value1' determines the start value for the animation.
    Value1 : _app._NullPoint,

    // Implementation of the Chora method : 'Effects::PointEffect.Animate()'
    Animate : function( aProgress )
    {
      var x = this.Value1[0];
      var y = this.Value1[1];

      x = x + ( Math.round(( this.Value2[0] - x ) * aProgress ) | 0 );
      y = y + ( Math.round(( this.Value2[1] - y ) * aProgress ) | 0 );
      this.Value = [ x, y ];
    },

    // Initializer for the class 'Effects::PointEffect'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.Effect._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.PointEffect;
    },

    // Internal variables of this class.
    _className : "Effects::PointEffect"
  };

  // The class Effects::BoolEffect provides an animation effect intended to toggle 
  // a 'bool' value between two values determined by the properties @Value1 and 
  // @value2. The effect can 'remote control' a 'bool' property which is referred 
  // by the @Outlet property. 
  // Beside the both end values, bool animation effects are determined by their 
  // duration. The duration is primarily controlled by the value of the property 
  // @CycleDuration. This is the time the effect will take for a single animation 
  // run. Whether and how often the animation is repeated is stored in the property 
  // @NoOfCycles. In this case the property @InterCycleDelay can determine an optional 
  // interval to wait between two consecutive animation runs. Finally the property 
  // @InitialDelay determines the interval to wait at the very beginning of the 
  // effect still before the first animation run began.
  // When the effect is finished a signal is send to the slot method stored in the 
  // @OnFinished property.
  // Whether the effect is running or not is controlled by its property @Enabled. 
  // It can be used to start and stop the effect. The effect can also be controlled 
  // by sending signals to its @StartEffect and @StopEffect slot methods.
  _unit.BoolEffect =
  {
    timer : null,

    // The property 'Outlet' can store a reference to a 'bool' property to modify 
    // at the runtime of the animation effect. To obtain a reference to a property, 
    // the Chora ^ Reference property operator should be used. See 'Chora User Manual'.
    Outlet : null,
    cycleCounter : 0,
    startTime : 0,

    // The property 'CycleDuration' stores the period in milliseconds of a single 
    // animation run.
    CycleDuration : 1000,

    // The property 'InterCycleDelay' stores the interval in milliseconds the effect 
    // should wait between two consecutive animation runs. This value has no effect 
    // if the animation is not repeated. If InterCycleDelay is zero the effect will 
    // not wait between the animation runs.
    InterCycleDelay : 1000,

    // The property 'Enabled' determines whether the effect is currently running.
    // Assigning the value 'true' to this property re-starts the effect. The effect 
    // will start then from the beginning.
    Enabled : false,

    // The property 'Value1' determines the start value for the animation.
    Value1 : false,

    // The property 'Value2' determines the end value for the animation.
    Value2 : true,

    // Implementation of the Chora method : 'Effects::BoolEffect.timerSlot()'
    timerSlot : function( sender )
    {
      var _tmp0;
      if ( !this.timer )
        return;

      if ( this.cycleCounter < 0 )
      {
        this.startTime = this.timer.Time;
        this.cycleCounter = 0;
      }

      var time = ( this.timer.Time - this.startTime ) | 0;
      var period0 = this.CycleDuration;
      var periodN = this.InterCycleDelay + this.CycleDuration;
      var delay = 0;
      var counter = this.cycleCounter;

      if ( !counter && ( time >= period0 ))
      {
        counter = 1;
        time = time - period0;
      }

      if (( counter > 0 ) && ( time >= periodN ))
      {
        var cycles = ( time / periodN ) | 0;

        time = time - ( cycles * periodN );
        counter = counter + cycles;
      }

      if ( counter > 2 )
        counter = 1;

      if ( counter !== this.cycleCounter )
      {
        this.startTime = this.timer.Time - ((( _tmp = time ) < 0 )? _tmp + 0x100000000 
        : _tmp );
        this.cycleCounter = counter;
      }

      if ( counter > 0 )
        delay = this.InterCycleDelay;

      if ( !!this.Outlet )
      {
        if ( time >= delay )
          ( _tmp0 = this.Outlet, _tmp0[2].call( _tmp0[0], this.Value1 ));

        if (( time < delay ) && ( counter > 0 ))
          ( _tmp0 = this.Outlet, _tmp0[2].call( _tmp0[0], this.Value2 ));
      }
    },

    // Implementation of the Chora method : 'Effects::BoolEffect.OnSetCycleDuration()'
    OnSetCycleDuration : function( value )
    {
      if ( value < 100 )
        value = 100;

      this.CycleDuration = value;
    },

    // Implementation of the Chora method : 'Effects::BoolEffect.OnSetInterCycleDelay()'
    OnSetInterCycleDelay : function( value )
    {
      if ( value < 0 )
        value = 0;

      this.InterCycleDelay = value;
    },

    // Implementation of the Chora method : 'Effects::BoolEffect.OnSetEnabled()'
    OnSetEnabled : function( value )
    {
      if ( this.Enabled === value )
        return;

      this.Enabled = value;

      if ( !value && !!this.timer )
      {
        _app._DetachObjObserver([ this, this.timerSlot ], this.timer, 0 );
        this.timer = null;
      }

      if ( value )
      {
        this.timer = _app._GetAutoObject( _unit.EffectTimer );
        _app._AttachObjObserver([ this, this.timerSlot ], this.timer, 0 );
        this.cycleCounter = -1;
      }
    },

    // Initializer for the class 'Effects::BoolEffect'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.BoolEffect;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Effects::BoolEffect'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Effects::BoolEffect'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Effects::BoolEffect'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark all reachable objects ...
      if (( _tmp = this.timer ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Outlet ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Effects::BoolEffect"
  };

  // The class Effects::Fader provides the basic infrastructure, which can be enhanced 
  // in derived classes in order to implement sophisticated transitions for fading-in 
  // and/or fading-out GUI components. At the runtime, an instance of the fader 
  // class represents a transition you can simply apply on a GUI component by passing 
  // both, the fader instance and the affected GUI component as parameters in the 
  // invocation of the method Core::Group.FadeGroup(). The infrastructure consists 
  // of:
  // - The method @OnStart(), which is invoked automatically as soon as the fader 
  // is scheduled to start with its transition. Usually, in derived classes this 
  // method has then the job to create, initialize and start animation effects (instances 
  // of classes descending from Effects::Effect) to fade-in or fade-out the GUI 
  // component @Group within another component @Owner.
  // - Whether the fader is intended to perform a fade-in or fade-out transition 
  // is determined in the property @Visible. Initializing this property with 'true' 
  // indicates, that the affected component should become or/and remain visible 
  // during and after the transition.
  // - The variable @Enabled controls whether the affected component should become 
  // enabled or disabled (should be able to react to user inputs) after the fader 
  // has finished its operation. Usually, initialize this property with 'true' for 
  // the fade-in and with 'false' for the fade-out operation.
  // - As soon as all involved animation effects has finalized their work, the fader 
  // should invoke its method @Complete().
  // - By overriding the method @OnEnd() the implementation of the fader can additionally 
  // be adapted to perform further operation just at the end of the transition, 
  // for example to remove @Group from its @Owner after it has been faded-out, etc.
  // - The method @IsFinished() should be overridden in derived class to return 
  // 'true' if all animation effects has finalized their work.
  // - Furthermore, the properties @AddToOwner, @AssignFocus, @RemoveIfHidden, @RestackTopmost 
  // and @UseCurrentState are available to provide common parameters how the fader 
  // should act. These properties should be evaluated in the implementation of the 
  // @OnStart() and/or @OnEnd() method.
  // - The property @OnInitialize can refer to a slot method containing more individual 
  // code to initialize the fader just in the moment it is started.
  // Being the basic class, Effects::Fader doesn't implement any particular transition 
  // effects. This class is intended to be overridden and enhanced accordingly.
  _unit.Fader =
  {
    task : null,
    prev : null,
    next : null,

    // The variable 'Owner' refers to the instance of a GUI component, in context 
    // of which the fader should fade-in or fade-out the @Group component.
    // This variable is initialized automatically just in the moment the fader is 
    // scheduled for its execution. You never need to explicitly modify this variable. 
    // This variable is intended to be used in the implementation of overridden 
    // @OnStart() and @OnEnd() methods.
    Owner : null,

    // The variable 'Group' refers to the instance of a GUI component, the fader 
    // should fade-in or fade-out within the @Owner component.
    // This variable is initialized automatically just in the moment the fader is 
    // scheduled for its execution. You never need to explicitly modify this variable. 
    // This variable is intended to be used in the implementation of overridden 
    // @OnStart() and @OnEnd() methods.
    Group : null,
    onCancel : null,
    onComplete : null,

    // The property 'OnInitialize' can optionally refer to a slot method to be signaled 
    // shortly before the method @OnStart() of the fader is executed (thus just 
    // before the fader starts with its animation effects). In this manner the slot 
    // method can perform additional preparation or initialization steps on the 
    // fader, which are usually dynamically calculated values for the start and 
    // the end of the animation effects used within the fader.
    OnInitialize : null,

    // The property 'Visible' determines, whether the affected GUI component @Group 
    // is visible or not after the fader has finalized the transition. If this property 
    // is 'true', the component will be shown (or it will remain visible) in context 
    // of the @Owner GUI component. This corresponds to the fade-in transition. 
    // If this property is 'false', the component will disappear from its actual 
    // owner (or it will remain invisible if it is already hidden). This corresponds 
    // to the fade-out transition.
    Visible : true,

    // The property 'Enabled' determines, whether the affected GUI component @Group 
    // is enabled or not after the fader has finalized the transition. If this property 
    // is 'true', the component will become enabled (or it will remain enabled) 
    // in context of the @Owner GUI component. This corresponds to the fade-in transition. 
    // If this property is 'false', the component will become disabled (or it will 
    // remain disabled). This corresponds to the fade-out transition.
    Enabled : true,

    // The property 'UseCurrentState' controls, whether the fader should determine 
    // the start condition for its animation effects from the state of the affected 
    // @Group and/or @Owner as they are just in the moment when the fader starts 
    // with the animation effects. In this manner, the state of the affected @Group 
    // can change smoothly without experiencing any abrupt alternations.
    // Usually, this property should be evaluated in the derived classes in the 
    // implementation of the overridden method @OnStart() or @OnEnd().
    UseCurrentState : true,

    // The property 'AddToOwner' controls, whether the fader should automatically 
    // add the affected @Group to the @Owner even if performing a fade-out animation. 
    // In case of the fade-in animation, the property has no effect since the fader 
    // implicitly takes care of adding the group to its owner.
    // Usually, this property should be evaluated in the derived classes in the 
    // implementation of the overridden method @OnStart() or @OnEnd().
    AddToOwner : false,

    // The property 'AssignFocus' controls, whether the fader should automatically 
    // focus the affected @Group within the @Owner when performing a fade-in animation. 
    // In case of the fade-out animation, the property has no effect.
    // Usually, this property should be evaluated in the derived classes in the 
    // implementation of the overridden method @OnStart() or @OnEnd().
    AssignFocus : true,

    // The property 'RestackTopmost' controls, whether the fader should automatically 
    // restack the affected @Group to appear above all other sibling views within 
    // its @Owner when performing a fade-in animation. In case of the fade-out animation, 
    // the property has no effect.
    // Usually, this property should be evaluated in the derived classes in the 
    // implementation of the overridden method @OnStart() or @OnEnd().
    RestackTopmost : true,

    // The property 'RemoveIfHidden' controls, whether the fader should automatically 
    // remove the affected @Group from its @Owner at the end of a fade-out animation. 
    // In case of the fade-in animation, the property has no effect.
    // Usually, this property should be evaluated in the derived classes in the 
    // implementation of the overridden method @OnStart() or @OnEnd().
    RemoveIfHidden : true,

    // The method Complete() is intended to be called by the implementation of your 
    // adapted fader as soon as the animation effects used inside the fader has 
    // finalized their work. This is essential in order to ensure, that next faders 
    // waiting for execution can start with their animations.
    Complete : function()
    {
      if ( !!this.task )
        this.task.Complete();
    },

    // The method IsFinished() should return 'true' if the fader has finalized its 
    // fading animation and 'false' if the animation is not started or it is still 
    // in progress. This method should therefore be overridden in derived classes 
    // to evaluate the state of animation effects used inside the fader.
    IsFinished : function()
    {
      return true;
    },

    // The method OnEnd() is invoked automatically just in the moment, when this 
    // fader and all other faders belonging to the same fading task have signaled 
    // that they are finished with their animations. The default implementation 
    // of this method simply does nothing.
    // Derived classes can override this method and implement there the code to 
    // complete the animation (e.g. to remove the group from its owner after it 
    // has been faded-out, etc.). The implementation of the overridden OnEnd() method 
    // has to use the variables @Group and @Owner to determine on which group the 
    // fader has applied the animation. Depending on the kind of the implemented 
    // animation, the OnEnd() method can also evaluate the properties @UseCurrentState, 
    // @AssignFocus and @RestackTopmost.
    OnEnd : function()
    {
    },

    // The method OnStart() is invoked automatically just in the moment, when the 
    // fader is triggered to begin its animation. The default implementation of 
    // this method simply calls the @Complete() method indicating so, that the fader 
    // is done with its work. Thereupon the next fader waiting for its execution 
    // can start.
    // Derived classes should override this method and implement there the code 
    // to prepare and start the desired fade-in/out animation effects. The implementation 
    // of the overridden OnStart() method has to use the variables @Group and @Owner 
    // to determine on which group the fader should apply the animation. Depending 
    // on the kind of the implemented animation, the OnStart() method can also evaluate 
    // the properties @UseCurrentState, @AssignFocus and @RestackTopmost.
    // Please note, if there is a slot method associated to the property @OnInitialize, 
    // this slot method is signaled shortly before the method OnStart() is executed 
    // given the slot method a possibility to apply more individual initialization 
    // steps on the fader just before the animation begins.
    // When the animation reaches its end (e.g. when the animation effects used 
    // inside the fader do terminate), your implementation of the fader should invoke 
    // the method @Complete() otherwise the animation is considered as still being 
    // in progress causing other pending faders to wait.
    OnStart : function()
    {
      this.Complete();
    },

    // Initializer for the class 'Effects::Fader'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Fader;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Effects::Fader'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Effects::Fader'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Effects::Fader'
    _Mark : function( aCycle )
    {
      var _tmp;

      // Mark all reachable objects ...
      if (( _tmp = this.task ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.prev ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.next ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Owner ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.Group ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.onCancel ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.onComplete ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.OnInitialize ) && (( _tmp = _tmp[0])._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );

      // Mark the parent of this object ...
      if (( _tmp = this._parent ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _parent : null,
    _cycle : 0,
    _observers : null,
    _className : "Effects::Fader"
  };

  // The class Effects::VisibilityFader provides functionality for the most primitive 
  // fade-in and fade-out transitions affecting the pure visibility of a given GUI 
  // component. This fader is thus ideal wherever one GUI component should instantly 
  // appear or disappear in context of another component. In fact, this version 
  // of a fader does not implement any animation effects to smoothly change the 
  // state of the affected component.
  // With the property @Visible you configure, whether the fader should show or 
  // hide the GUI component. When you intend to show the GUI component, you can 
  // additionally specify in the property @Position where it should appear. In such 
  // case set the property @UseCurrentState to the value 'false'. If the property 
  // @UseCurrentState is 'true', the GUI component will appear at position, the 
  // component stores already in its own Bounds property.
  // The fader automatically takes care of adding the GUI component to the intended 
  // owner, when the component should appear and it is not yet a member within the 
  // owner. Moreover, when showing the component, the fader automatically focuses 
  // it and restacks it to appear above all other sibling views existing already 
  // within the owner component. This behavior can be configured by modifying the 
  // properties @AssignFocus and @RestackTopmost.
  // The fader automatically removes the GUI component from its owner, when the 
  // component disappears. This behavior can be changed by modifying the property 
  // @RemoveIfHidden.
  // Please note, when the fader is configured to fade-in (show) the GUI component, 
  // the affected operation is performed just at the beginning of all other transitions 
  // running simultaneously, in other words, during the start phase of the transition. 
  // In turn, if the fader is configured to fade-out (hide) the component, the operation 
  // is executed during the end phase of the transition. This behavior can be modified 
  // by using the properties @ShowAtStart and @HideAtStart.
  // Applying the fade-out transition on a GUI component, which is already invisible 
  // has no effect. Similarly, the fade-in transition has no effect if the GUI component 
  // is already visible at the specified @Position. In both cases the affected component 
  // retains its actual state.
  // In practice, you create an instance of the fader class, configure its properties 
  // (in particular the property @Visible) according to the desired kind of transition 
  // and pass both, the fader instance and the affected GUI component as parameters 
  // in the invocation of the method Core::Group.FadeGroup().
  _unit.VisibilityFader =
  {
    // The property 'Position' determines the position relative to the top-left 
    // corner of @Owner where to show the affected GUI component @Group. This property 
    // has an effect only when the fader is configured to show the component (property 
    // @Visible is 'true') and the fader is not configured to use the actual state 
    // of the affected GUI component (the property @UseCurrentState is 'false'). 
    // If the property @UseCurrentState is 'true', the GUI component will appear 
    // at position, stored already in its property Bounds.
    Position : _app._NullPoint,
    finished : false,

    // The method IsFinished() should return 'true' if the fader has finalized its 
    // fading animation and 'false' if the animation is not started or it is still 
    // in progress. This method should therefore be overridden in derived classes 
    // to evaluate the state of animation effects used inside the fader.
    IsFinished : function()
    {
      return this.finished;
    },

    // The method OnEnd() is invoked automatically just in the moment, when this 
    // fader and all other faders belonging to the same fading task have signaled 
    // that they are finished with their animations. The default implementation 
    // of this method simply does nothing.
    // Derived classes can override this method and implement there the code to 
    // complete the animation (e.g. to remove the group from its owner after it 
    // has been faded-out, etc.). The implementation of the overridden OnEnd() method 
    // has to use the variables @Group and @Owner to determine on which group the 
    // fader has applied the animation. Depending on the kind of the implemented 
    // animation, the OnEnd() method can also evaluate the properties @UseCurrentState, 
    // @AssignFocus and @RestackTopmost.
    OnEnd : function()
    {
      if ( !this.Visible && !!this.Group.Owner )
        this.Group.OnSetVisible( false );

      if (( !this.Visible && this.RemoveIfHidden ) && !!this.Group.Owner )
        this.Group.Owner.Remove( this.Group );

      if ( !this.Enabled )
        this.Group.OnSetEnabled( false );
    },

    // The method OnStart() is invoked automatically just in the moment, when the 
    // fader is triggered to begin its animation. The default implementation of 
    // this method simply calls the @Complete() method indicating so, that the fader 
    // is done with its work. Thereupon the next fader waiting for its execution 
    // can start.
    // Derived classes should override this method and implement there the code 
    // to prepare and start the desired fade-in/out animation effects. The implementation 
    // of the overridden OnStart() method has to use the variables @Group and @Owner 
    // to determine on which group the fader should apply the animation. Depending 
    // on the kind of the implemented animation, the OnStart() method can also evaluate 
    // the properties @UseCurrentState, @AssignFocus and @RestackTopmost.
    // Please note, if there is a slot method associated to the property @OnInitialize, 
    // this slot method is signaled shortly before the method OnStart() is executed 
    // given the slot method a possibility to apply more individual initialization 
    // steps on the fader just before the animation begins.
    // When the animation reaches its end (e.g. when the animation effects used 
    // inside the fader do terminate), your implementation of the fader should invoke 
    // the method @Complete() otherwise the animation is considered as still being 
    // in progress causing other pending faders to wait.
    OnStart : function()
    {
      if ( this.Enabled )
        this.Group.OnSetEnabled( true );

      if (( this.Visible || this.AddToOwner ) && !this.Group.Owner )
      {
        this.Group.OnSetVisible( false );
        this.Owner.Add( this.Group, 0 );
      }

      if ( this.Visible && this.RestackTopmost )
        this.Group.Owner.RestackTop( this.Group );

      if ( this.Visible && this.AssignFocus )
        this.Group.Owner.OnSetFocus( this.Group );

      if ( this.Visible && !this.UseCurrentState )
        this.Group.OnSetBounds( _app._SetRectOrigin( this.Group.Bounds, this.Position ));

      if ( this.Visible )
      {
        this.Group.OnSetOpacity( 255 );
        this.Group.OnSetVisible( true );
      }

      if ( !this.Visible && ( this.Owner.Focus === this.Group ))
        this.Owner.OnSetFocus( null );

      this.finished = true;
      this.Complete();
    },

    // Initializer for the class 'Effects::VisibilityFader'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.Fader._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.VisibilityFader;
    },

    // Internal variables of this class.
    _className : "Effects::VisibilityFader"
  };

  // The class Effects::OpacityFader provides functionality for the fade-in and 
  // fade-out transitions affecting the opacity of a given GUI component. This fader 
  // is thus ideal wherever one GUI component should smoothly appear or disappear 
  // in context of another component without changing its actual position.
  // The parameters for the transition (the start and the end values for the opacity, 
  // the duration of the transition, its timing, etc.) are configured in the embedded 
  // object @Effect. If the property @UseCurrentState is 'true', the opacity to 
  // start the animation is automatically taken over from the affected GUI component 
  // as it is just in the moment the fader starts the transition.
  // Whether the fader is considered as performing a fade-in or fade-out transition 
  // is determined by value of the property @Visible. Set this property to the value 
  // 'true' if you want the component to appear or remain visible after the transition 
  // is done. Set this property to the value 'false' if your intention is to hide 
  // or keep invisible the component.
  // With the property @Buffered you can configure, whether the fader should additionally 
  // enable the buffering mode for the affected GUI component while it drives the 
  // transition.
  // The fader automatically takes care of adding the GUI component to the intended 
  // owner, when the component should appear and it is not yet a member within the 
  // owner. Moreover, when fading-in the component, the fader automatically focuses 
  // it and restacks it to appear above all other sibling views existing already 
  // within the owner component. This behavior can be configured by modifying the 
  // properties @AssignFocus and @RestackTopmost.
  // The fader automatically removes the GUI component from its owner, when the 
  // component disappears (after fade-out). This behavior can be changed by modifying 
  // the property @RemoveIfHidden.
  // Applying the fade-out transition on a GUI component, which is already invisible 
  // has no effect. Similarly, the fade-in transition has no effect if the GUI component 
  // is already visible and has the opacity equal to the specified in @Effect object. 
  // In both cases the affected component retains its actual state and the fader 
  // finishes its work immediately without driving the @Effect object and waiting 
  // for its finish.
  // In practice, you create an instance of the fader class, configure its properties 
  // (in particular the property @Visible) and the @Effect object according to the 
  // desired kind of transition and pass both, the fader instance and the affected 
  // GUI component as parameters in the invocation of the method Core::Group.FadeGroup().
  _unit.OpacityFader =
  {
    // The embedded object 'Effect' determines the parameters to use for the opacity 
    // animation. In particular, its properties 'Value1' and 'Value2' are intended 
    // to specify the desired opacity at the beginning and at the end of the transition. 
    // How long the transition should take, has to be specified in the property 
    // 'CycleDuration'. During the transition, the 'Effect' object interpolates 
    // between the both values and adjusts accordingly the opacity of the affected 
    // GUI component. For more details, how to configure an effect, see the description 
    // of the class Effects::Int32Effect.
    // Please note, if the property @UseCurrentState is 'true', the fader will automatically 
    // adapt the property 'Value1' of the 'Effect' object to the opacity value of 
    // the affected GUI component as it is just in the moment when the fader starts 
    // the transition. Moreover, whether the fader operation is considered as performing 
    // the fade-in or fade-out operation, depends exclusively on the value you specify 
    // in the property @Visible.
    // Usually, you configure this 'Effect' object shortly before you pass the fader 
    // in parameter to the Core::Group.FadeGroup() method.
    Effect : null,
    finished : false,
    wasBuffered : false,

    // The method IsFinished() should return 'true' if the fader has finalized its 
    // fading animation and 'false' if the animation is not started or it is still 
    // in progress. This method should therefore be overridden in derived classes 
    // to evaluate the state of animation effects used inside the fader.
    IsFinished : function()
    {
      return this.finished;
    },

    // The method OnEnd() is invoked automatically just in the moment, when this 
    // fader and all other faders belonging to the same fading task have signaled 
    // that they are finished with their animations. The default implementation 
    // of this method simply does nothing.
    // Derived classes can override this method and implement there the code to 
    // complete the animation (e.g. to remove the group from its owner after it 
    // has been faded-out, etc.). The implementation of the overridden OnEnd() method 
    // has to use the variables @Group and @Owner to determine on which group the 
    // fader has applied the animation. Depending on the kind of the implemented 
    // animation, the OnEnd() method can also evaluate the properties @UseCurrentState, 
    // @AssignFocus and @RestackTopmost.
    OnEnd : function()
    {
      if ( this.Visible )
        this.Group.OnSetOpacity( this.Effect.Value2 );

      if ( !this.Visible && !this.Group.Opacity )
        this.Group.OnSetVisible( false );

      if (( !this.Visible && this.RemoveIfHidden ) && !!this.Group.Owner )
        this.Group.Owner.Remove( this.Group );

      if ( !this.Enabled )
        this.Group.OnSetEnabled( false );
    },

    // The method OnStart() is invoked automatically just in the moment, when the 
    // fader is triggered to begin its animation. The default implementation of 
    // this method simply calls the @Complete() method indicating so, that the fader 
    // is done with its work. Thereupon the next fader waiting for its execution 
    // can start.
    // Derived classes should override this method and implement there the code 
    // to prepare and start the desired fade-in/out animation effects. The implementation 
    // of the overridden OnStart() method has to use the variables @Group and @Owner 
    // to determine on which group the fader should apply the animation. Depending 
    // on the kind of the implemented animation, the OnStart() method can also evaluate 
    // the properties @UseCurrentState, @AssignFocus and @RestackTopmost.
    // Please note, if there is a slot method associated to the property @OnInitialize, 
    // this slot method is signaled shortly before the method OnStart() is executed 
    // given the slot method a possibility to apply more individual initialization 
    // steps on the fader just before the animation begins.
    // When the animation reaches its end (e.g. when the animation effects used 
    // inside the fader do terminate), your implementation of the fader should invoke 
    // the method @Complete() otherwise the animation is considered as still being 
    // in progress causing other pending faders to wait.
    OnStart : function()
    {
      var _tmp;

      if ( this.UseCurrentState )
      {
        if ( this.Group.OnGetVisible() && !!this.Group.Owner )
          this.Effect.Value1 = this.Group.Opacity;
        else
          this.Effect.Value1 = 0;
      }

      var isHidden = (( !this.Group.Owner || !this.Group.Opacity ) || !this.Group.OnGetVisible()) 
        || ((( _tmp = _app._IntersectRect( this.Group.Bounds, [ 0, 0, ( _tmp = this.Owner.Bounds )[2] 
        - _tmp[0], _tmp[3] - _tmp[1]]))[0] >= _tmp[2]) || ( _tmp[1] >= _tmp[3]));
      var isHidden2 = (( !this.Visible && (( !this.Group.Owner || !this.Group.OnGetVisible()) 
        || this.RemoveIfHidden )) || !this.Effect.Value2 ) || ((( _tmp = _app._IntersectRect( 
        this.Group.Bounds, [ 0, 0, ( _tmp = this.Owner.Bounds )[2] - _tmp[0], _tmp[3] 
        - _tmp[1]]))[0] >= _tmp[2]) || ( _tmp[1] >= _tmp[3]));

      if ( isHidden && isHidden2 )
      {
        this.Effect.Value1 = 0;
        this.Effect.Value2 = 0;
      }

      this.wasBuffered = this.Group.OnGetBuffered();

      if ( this.Enabled )
        this.Group.OnSetEnabled( true );

      if (( this.Visible || this.AddToOwner ) && !this.Group.Owner )
      {
        this.Group.OnSetVisible( false );
        this.Owner.Add( this.Group, 0 );
      }

      if ( this.Visible && this.RestackTopmost )
        this.Group.Owner.RestackTop( this.Group );

      if ( this.Visible && this.AssignFocus )
        this.Group.Owner.OnSetFocus( this.Group );

      if ( !this.Visible && ( this.Owner.Focus === this.Group ))
        this.Owner.OnSetFocus( null );

      if ( this.Visible && !this.Group.OnGetVisible())
      {
        this.Group.OnSetOpacity( this.Effect.Value1 );
        this.Group.OnSetVisible( true );
      }

      if ( !this.Visible && (( !this.Group.Owner || !this.Group.OnGetVisible()) 
          || !this.Group.Opacity ))
      {
        this.finished = true;
        this.Complete();

        return;
      }

      if ( !this.Visible && ( this.Effect.Value1 === this.Effect.Value2 ))
        this.Group.OnSetOpacity( this.Effect.Value1 );

      if ( this.Group.Opacity === this.Effect.Value2 )
      {
        this.finished = true;
        this.Complete();

        return;
      }

      if ( this.Effect.Value1 === this.Effect.Value2 )
      {
        this.finished = true;
        this.Complete();

        return;
      }

      if ( !this.Effect.NoOfCycles )
        this.Effect.OnSetNoOfCycles( 1 );

      this.Effect.Outlet = [ _tmp = this.Group, _tmp.OnGetOpacity, _tmp.__OnSetOpacity ];
      this.Effect.OnSetReversed( false );
      this.Effect.OnFinished = [ this, this.onFinished ];
      this.Effect.OnAnimate = null;
      this.Effect.OnSetEnabled( true );
    },

    // Implementation of the Chora method : 'Effects::OpacityFader.onFinished()'
    onFinished : function( sender )
    {
      this.finished = true;
      this.Complete();
    },

    // Initializer for the class 'Effects::OpacityFader'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.Fader._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _unit.Int32Effect._Init.call( this.Effect = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.OpacityFader;
    },

    // Deintializer for the class 'Effects::OpacityFader'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _unit.Fader;

      // Then deitialize all embedded objects ...
      this.Effect._Done();

      // Finally continue the deinitialization in the super class
      _unit.Fader._Done.call( this );
    },

    // Re-Initializer for the class 'Effects::OpacityFader'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _unit.Fader._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.Effect._ReInit();
    },

    // Garbage Collector method for the class 'Effects::OpacityFader'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.Fader._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.Effect )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Effects::OpacityFader"
  };

  // The class Effects::PositionFader provides functionality for the fade-in and 
  // fade-out transitions affecting the position and eventually the opacity of a 
  // given GUI component. This fader is thus ideal wherever one GUI component should 
  // smoothly appear or disappear by moving it within another component.
  // The parameters for the translation (the desired start and the end position, 
  // the duration of the animation, its timing, etc.) are configured in the embedded 
  // object @PositionEffect. If the property @UseCurrentState is 'true', the position 
  // where to start the animation is automatically taken over from the affected 
  // GUI component as it is just in the moment the fader starts the transition.
  // The parameters for the opacity transition (their start and the end values, 
  // the duration of the transition, the timing, etc.) are configured in the embedded 
  // object @OpacityEffect. If the property @UseCurrentState is 'true', the opacity 
  // to start the animation is automatically taken over from the affected GUI component 
  // as it is just in the moment the fader starts the transition.
  // Whether the fader is considered as performing a fade-in or fade-out transition 
  // is determined by value of the property @Visible. Set this property to the value 
  // 'true' if you want the component to appear or remain visible after the transition 
  // is done. Set this property to the value 'false' if your intention is to hide 
  // or keep invisible the component.
  // With the property @Buffered you can configure, whether the fader should additionally 
  // enable the buffering mode for the affected GUI component while it drives the 
  // transition.
  // The fader automatically takes care of adding the GUI component to the intended 
  // owner, when the component should appear and it is not yet a member within the 
  // owner. Moreover, when fading-in the component, the fader automatically focuses 
  // it and restacks it to appear above all other sibling views existing already 
  // within the owner component. This behavior can be configured by modifying the 
  // properties @AssignFocus and @RestackTopmost.
  // The fader automatically removes the GUI component from its owner, when the 
  // component disappears (after fade-out). This behavior can be changed by modifying 
  // the property @RemoveIfHidden.
  // Applying the fade-out transition on a GUI component, which is already invisible 
  // has no effect. Similarly, the fade-in transition has no effect if the GUI component 
  // is already visible and has the opacity and position equal to the specified 
  // in @PositionEffect and @OpacityEffect objects. In both cases the affected component 
  // retains its actual state and the fader finishes its work immediately without 
  // driving the effect objects and waiting for their completion.
  // In practice, you create an instance of the fader class, configure its properties 
  // (in particular the property @Visible) and the @PositionEffect and @OpacityEffect 
  // objects according to the desired kind of transition and pass both, the fader 
  // instance and the affected GUI component as parameters in the invocation of 
  // the method Core::Group.FadeGroup().
  _unit.PositionFader =
  {
    // The embedded object 'OpacityEffect' determines the parameters to use for 
    // the opacity animation. In particular, its properties 'Value1' and 'Value2' 
    // are intended to specify the desired opacity at the beginning and at the end 
    // of the transition. How long the transition should take, has to be specified 
    // in the property 'CycleDuration'. During the transition, the 'OpacityEffect' 
    // object interpolates between the both values and adjusts accordingly the opacity 
    // of the affected GUI component. For more details, how to configure an effect, 
    // see the description of the class Effects::Int32Effect.
    // Please note, if the property @UseCurrentState is 'true', the fader will automatically 
    // adapt the property 'Value1' of the 'OpacityEffect' object to the opacity 
    // value of the affected GUI component as it is just in the moment when the 
    // fader starts the transition. Moreover, whether the fader operation is considered 
    // as performing the fade-in or fade-out operation, depends exclusively on the 
    // value you specify in the property @Visible.
    // Usually, you configure this 'OpacityEffect' object shortly before you pass 
    // the fader in parameter to the Core::Group.FadeGroup() method.
    OpacityEffect : null,

    // The embedded object 'PositionEffect' determines the parameters to use for 
    // the translation animation. In particular, its properties 'Value1' and 'Value2' 
    // are intended to specify the desired position or the affected GUI component 
    // at the beginning and at the end of the transition. How long the transition 
    // should take, has to be specified in the property 'CycleDuration'. During 
    // the transition, the 'PositionEffect' object interpolates between the both 
    // values and adjusts accordingly the position of the affected GUI component. 
    // For more details, how to configure an effect, see the description of the 
    // class Effects::PointEffect.
    // Please note, if the property @UseCurrentState is 'true', the fader will automatically 
    // adapt the property 'Value1' of the 'PositionEffect' object to the actual 
    // position of the affected GUI component as it is just in the moment when the 
    // fader starts the transition. Moreover, whether the fader operation is considered 
    // as performing the fade-in or fade-out operation, depends exclusively on the 
    // value you specify in the property @Visible.
    // Usually, you configure this 'PositionEffect' object shortly before you pass 
    // the fader in parameter to the Core::Group.FadeGroup() method.
    PositionEffect : null,
    finished : false,
    wasBuffered : false,

    // The method IsFinished() should return 'true' if the fader has finalized its 
    // fading animation and 'false' if the animation is not started or it is still 
    // in progress. This method should therefore be overridden in derived classes 
    // to evaluate the state of animation effects used inside the fader.
    IsFinished : function()
    {
      return this.finished;
    },

    // The method OnEnd() is invoked automatically just in the moment, when this 
    // fader and all other faders belonging to the same fading task have signaled 
    // that they are finished with their animations. The default implementation 
    // of this method simply does nothing.
    // Derived classes can override this method and implement there the code to 
    // complete the animation (e.g. to remove the group from its owner after it 
    // has been faded-out, etc.). The implementation of the overridden OnEnd() method 
    // has to use the variables @Group and @Owner to determine on which group the 
    // fader has applied the animation. Depending on the kind of the implemented 
    // animation, the OnEnd() method can also evaluate the properties @UseCurrentState, 
    // @AssignFocus and @RestackTopmost.
    OnEnd : function()
    {
      if ( this.Visible )
      {
        this.Group.OnSetOpacity( this.OpacityEffect.Value2 );
        this.Group.OnSetBounds( _app._SetRectOrigin( this.Group.Bounds, this.PositionEffect.Value2 ));
      }

      if ( !this.Visible && !this.Group.Opacity )
        this.Group.OnSetVisible( false );

      if (( !this.Visible && this.RemoveIfHidden ) && !!this.Group.Owner )
        this.Group.Owner.Remove( this.Group );

      if ( !this.Enabled )
        this.Group.OnSetEnabled( false );
    },

    // The method OnStart() is invoked automatically just in the moment, when the 
    // fader is triggered to begin its animation. The default implementation of 
    // this method simply calls the @Complete() method indicating so, that the fader 
    // is done with its work. Thereupon the next fader waiting for its execution 
    // can start.
    // Derived classes should override this method and implement there the code 
    // to prepare and start the desired fade-in/out animation effects. The implementation 
    // of the overridden OnStart() method has to use the variables @Group and @Owner 
    // to determine on which group the fader should apply the animation. Depending 
    // on the kind of the implemented animation, the OnStart() method can also evaluate 
    // the properties @UseCurrentState, @AssignFocus and @RestackTopmost.
    // Please note, if there is a slot method associated to the property @OnInitialize, 
    // this slot method is signaled shortly before the method OnStart() is executed 
    // given the slot method a possibility to apply more individual initialization 
    // steps on the fader just before the animation begins.
    // When the animation reaches its end (e.g. when the animation effects used 
    // inside the fader do terminate), your implementation of the fader should invoke 
    // the method @Complete() otherwise the animation is considered as still being 
    // in progress causing other pending faders to wait.
    OnStart : function()
    {
      var _tmp;

      if ( this.UseCurrentState )
      {
        if ( this.Group.OnGetVisible() && !!this.Group.Owner )
          this.OpacityEffect.Value1 = this.Group.Opacity;
        else
          this.OpacityEffect.Value1 = 0;

        this.PositionEffect.Value1 = this.Group.Bounds.slice(0,2);
      }

      var isHidden = (( !this.Group.Owner || !this.Group.Opacity ) || !this.Group.OnGetVisible()) 
        || ((( _tmp = _app._IntersectRect( this.Group.Bounds, [ 0, 0, ( _tmp = this.Owner.Bounds )[2] 
        - _tmp[0], _tmp[3] - _tmp[1]]))[0] >= _tmp[2]) || ( _tmp[1] >= _tmp[3]));
      var isHidden2 = (( !this.Visible && (( !this.Group.Owner || !this.Group.OnGetVisible()) 
        || this.RemoveIfHidden )) || !this.OpacityEffect.Value2 ) || ((( _tmp = 
        _app._IntersectRect( _app._MoveRectPos([ 0, 0, ( _tmp = this.Group.Bounds )[2] 
        - _tmp[0], _tmp[3] - _tmp[1]], this.PositionEffect.Value2 ), [ 0, 0, ( _tmp 
        = this.Owner.Bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]]))[0] >= _tmp[2]) 
        || ( _tmp[1] >= _tmp[3]));

      if ( isHidden && isHidden2 )
      {
        this.OpacityEffect.Value1 = 0;
        this.OpacityEffect.Value2 = 0;
        this.PositionEffect.Value1 = this.PositionEffect.Value2;
      }

      this.wasBuffered = this.Group.OnGetBuffered();

      if ( this.Enabled )
        this.Group.OnSetEnabled( true );

      if (( this.Visible || this.AddToOwner ) && !this.Group.Owner )
      {
        this.Group.OnSetVisible( false );
        this.Owner.Add( this.Group, 0 );
      }

      if ( this.Visible && this.RestackTopmost )
        this.Group.Owner.RestackTop( this.Group );

      if ( this.Visible && this.AssignFocus )
        this.Group.Owner.OnSetFocus( this.Group );

      if ( !this.Visible && ( this.Owner.Focus === this.Group ))
        this.Owner.OnSetFocus( null );

      if ( this.Visible && !this.Group.OnGetVisible())
      {
        this.Group.OnSetBounds( _app._SetRectOrigin( this.Group.Bounds, this.PositionEffect.Value1 ));
        this.Group.OnSetOpacity( this.OpacityEffect.Value1 );
        this.Group.OnSetVisible( true );
      }

      if ( !this.Visible && (( !this.Group.Owner || !this.Group.OnGetVisible()) 
          || !this.Group.Opacity ))
      {
        this.finished = true;
        this.Complete();

        return;
      }

      if ( !this.Visible && _app._IsEqualPoint( this.PositionEffect.Value1, this.PositionEffect.Value2 ))
        this.Group.OnSetBounds( _app._SetRectOrigin( this.Group.Bounds, this.PositionEffect.Value1 ));

      if ( !this.Visible && ( this.OpacityEffect.Value1 === this.OpacityEffect.Value2 ))
        this.Group.OnSetOpacity( this.OpacityEffect.Value1 );

      if (( this.Group.Opacity === this.OpacityEffect.Value2 ) && _app._IsEqualPoint( 
          this.Group.Bounds.slice(0,2), this.PositionEffect.Value2 ))
      {
        this.finished = true;
        this.Complete();

        return;
      }

      if (( this.OpacityEffect.Value1 === this.OpacityEffect.Value2 ) && _app._IsEqualPoint( 
          this.PositionEffect.Value1, this.PositionEffect.Value2 ))
      {
        this.finished = true;
        this.Complete();

        return;
      }

      if ( !this.OpacityEffect.NoOfCycles )
        this.OpacityEffect.OnSetNoOfCycles( 1 );

      if ( !this.PositionEffect.NoOfCycles )
        this.PositionEffect.OnSetNoOfCycles( 1 );

      this.PositionEffect.OnSetReversed( false );
      this.PositionEffect.OnFinished = [ this, this.onFinished ];
      this.PositionEffect.OnAnimate = [ this, this.onAnimate ];
      this.OpacityEffect.Outlet = [ _tmp = this.Group, _tmp.OnGetOpacity, _tmp.__OnSetOpacity ];
      this.OpacityEffect.OnSetReversed( false );
      this.OpacityEffect.OnFinished = [ this, this.onFinished ];
      this.OpacityEffect.OnAnimate = null;
      this.PositionEffect.OnSetEnabled( !_app._IsEqualPoint( this.PositionEffect.Value1, 
      this.PositionEffect.Value2 ));
      this.OpacityEffect.OnSetEnabled( this.OpacityEffect.Value1 !== this.OpacityEffect.Value2 );
    },

    // Implementation of the Chora method : 'Effects::PositionFader.onFinished()'
    onFinished : function( sender )
    {
      this.finished = !this.OpacityEffect.Enabled && !this.PositionEffect.Enabled;
      this.Complete();
    },

    // Implementation of the Chora method : 'Effects::PositionFader.onAnimate()'
    onAnimate : function( sender )
    {
      this.Group.OnSetBounds( _app._SetRectOrigin( this.Group.Bounds, this.PositionEffect.Value ));
    },

    // Initializer for the class 'Effects::PositionFader'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.Fader._Init.call( this, aArg );

      // Then create and initialize all embedded objects ...
      _unit.Int32Effect._Init.call( this.OpacityEffect = { _parent:this }, 0 );
      _unit.PointEffect._Init.call( this.PositionEffect = { _parent:this }, 0 );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.PositionFader;
    },

    // Deintializer for the class 'Effects::PositionFader'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = _unit.Fader;

      // Then deitialize all embedded objects ...
      this.OpacityEffect._Done();
      this.PositionEffect._Done();

      // Finally continue the deinitialization in the super class
      _unit.Fader._Done.call( this );
    },

    // Re-Initializer for the class 'Effects::PositionFader'
    _ReInit : function()
    {
      // First perform the super class re-initialization ...
      _unit.Fader._ReInit.call( this );

      // Then re-initialize all embedded objects ...
      this.OpacityEffect._ReInit();
      this.PositionEffect._ReInit();
    },

    // Garbage Collector method for the class 'Effects::PositionFader'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _unit.Fader._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.OpacityEffect )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.PositionEffect )._cycle != aCycle )
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Effects::PositionFader"
  };

  // The class Effects::Transition provides the infrastructure to implement sophisticated 
  // transitions for fading-in/out GUI components. At the runtime, you associate 
  // instances of the desired transition classes with the affected GUI component 
  // and determine so the desired animations to perform when the component is presented, 
  // dismissed or when the user switches between components forth and back. For 
  // more see the methods Core::Group.PresentDialog(), Core::Group.DismissDialog() 
  // and Core::Group.SwitchToDialog(). The infrastructure consists of:
  // - The method @CreatePresentFader(), which has the job to create and configure 
  // a fader (an instance of a class descending from Effects::Fader class) to perform 
  // the desired present (fade-in) transition.
  // - The method @CreateDismissFader(), which has the job to create and configure 
  // a fader (an instance of a class descending from Effects::Fader class) to perform 
  // the desired dismiss (fade-out) transition.
  // - The method @CreateOverlayFader(), which has the job to create and configure 
  // a fader (an instance of a class descending from Effects::Fader class) to perform 
  // the desired overlay (temporarily fade-out) transition.
  // - The method @CreateRestoreFader(), which has the job to create and configure 
  // a fader (an instance of a class descending from Effects::Fader class) to perform 
  // the desired restore (fade-in) transition after the preceding overlay transition.
  // The class Effects::Transition and all classes descending from it can be considered 
  // as kind of factories to conveniently create and configure often used fader 
  // objects. The default implementation of Effects::Transition does nothing. Derived 
  // classes has to override and implement at least the both methods @CreatePresentFader() 
  // and @CreateDismissFader().
  _unit.Transition =
  {
    // The method CreatePresentFader() creates an object of one of the classes descending 
    // from Effects::Fader and configures it with parameters according to the desired 
    // fade-in (present) transition. Finally the prepared fader object is returned 
    // to the caller. Typically, the created fader is used to show (to present) 
    // a GUI component when the user navigates to it. The method has to be overridden 
    // and implemented in derived classes. The actual implementation does nothing 
    // and returns 'null'.
    CreatePresentFader : function()
    {
      return null;
    },

    // The method CreateDismissFader() creates an object of one of the classes descending 
    // from Effects::Fader and configures it with parameters according to the desired 
    // fade-out (dismiss) transition. Finally the prepared fader object is returned 
    // to the caller. Typically, the created fader is used to hide (to dismiss) 
    // a GUI component when the user leaves it while he/she navigates in the GUI 
    // system. The method has to be overridden and implemented in derived classes. 
    // The actual implementation does nothing and returns 'null'.
    CreateDismissFader : function()
    {
      return null;
    },

    // The method CreateRestoreFader() creates an object of one of the classes descending 
    // from Effects::Fader and configures it with parameters according to the desired 
    // fade-in (restore) transition. Finally the prepared fader object is returned 
    // to the caller. Typically, the created fader is used to show (to restore the 
    // original visible state) of a GUI component, which has been obscured (overlaid) 
    // by other GUI components during the user navigates in the GUI system. The 
    // method has to be overridden and implemented in derived classes. The actual 
    // implementation of this method redirects the operation to the method @CreatePresentFader().
    CreateRestoreFader : function()
    {
      return this.CreatePresentFader();
    },

    // The method CreateOverlayFader() creates an object of one of the classes descending 
    // from Effects::Fader and configures it with parameters according to the desired 
    // fade-out (overlay) transition. Finally the prepared fader object is returned 
    // to the caller. Typically, the created fader is used to temporarily hide (to 
    // overlay) a GUI component when the user navigates a deeper level in the GUI 
    // system. The method has to be overridden and implemented in derived classes. 
    // The actual implementation of this method redirects the operation to the method 
    // @CreateDismissFader().
    CreateOverlayFader : function()
    {
      return this.CreateDismissFader();
    },

    // Initializer for the class 'Effects::Transition'
    _Init : function( aArg )
    {
      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.Transition;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Effects::Transition'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Effects::Transition'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Effects::Transition'
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
    _className : "Effects::Transition"
  };

  // The class Effects::ShowHideTransition provides functionality for the most primitive 
  // fade-in/out operation affecting the pure visibility of a given GUI component. 
  // When using the transition for the fade-in operation, the GUI component is automatically 
  // arranged to appear (per default centered) within the area of its owner component. 
  // This transition is thus ideal wherever one GUI component should instantly appear 
  // or disappear in context of another component without any animation effects.
  // Per default when the component is displayed, it is aligned in the center of 
  // its owner. This can be modified by using the property @Alignment. Furthermore, 
  // with the four properties @MarginLeft, @MarginRight, @MarginTop and @MarginBottom 
  // the area to align the component within its owner can be limited.
  // Please note, with this transition the fade-in operation is performed just at 
  // the beginning of all other transitions running simultaneously, in other words, 
  // the GUI component appears during the start phase of the transition. In turn, 
  // to fade-out the component, the operation is executed during the end phase of 
  // the transition. This behavior can be modified by using the properties @ShowAtStart 
  // and @HideAtStart.
  _unit.ShowHideTransition =
  {
    // The method CreatePresentFader() creates an object of one of the classes descending 
    // from Effects::Fader and configures it with parameters according to the desired 
    // fade-in (present) transition. Finally the prepared fader object is returned 
    // to the caller. Typically, the created fader is used to show (to present) 
    // a GUI component when the user navigates to it. The method has to be overridden 
    // and implemented in derived classes. The actual implementation does nothing 
    // and returns 'null'.
    CreatePresentFader : function()
    {
      var fader = _app._NewObject( _unit.VisibilityFader, 0 );

      fader.Visible = true;
      fader.Enabled = true;
      fader.AssignFocus = false;
      fader.RestackTopmost = true;
      fader.UseCurrentState = false;
      fader.OnInitialize = [ this, this.onInitializeIn ];

      return fader;
    },

    // The method CreateDismissFader() creates an object of one of the classes descending 
    // from Effects::Fader and configures it with parameters according to the desired 
    // fade-out (dismiss) transition. Finally the prepared fader object is returned 
    // to the caller. Typically, the created fader is used to hide (to dismiss) 
    // a GUI component when the user leaves it while he/she navigates in the GUI 
    // system. The method has to be overridden and implemented in derived classes. 
    // The actual implementation does nothing and returns 'null'.
    CreateDismissFader : function()
    {
      var fader = _app._NewObject( _unit.VisibilityFader, 0 );

      fader.Visible = false;
      fader.Enabled = false;
      fader.RemoveIfHidden = true;

      return fader;
    },

    // The method CreateRestoreFader() creates an object of one of the classes descending 
    // from Effects::Fader and configures it with parameters according to the desired 
    // fade-in (restore) transition. Finally the prepared fader object is returned 
    // to the caller. Typically, the created fader is used to show (to restore the 
    // original visible state) of a GUI component, which has been obscured (overlaid) 
    // by other GUI components during the user navigates in the GUI system. The 
    // method has to be overridden and implemented in derived classes. The actual 
    // implementation of this method redirects the operation to the method @CreatePresentFader().
    CreateRestoreFader : function()
    {
      var fader = _unit.Transition.CreateRestoreFader.call( this );

      fader.RestackTopmost = false;
      fader.Enabled = true;

      return fader;
    },

    // The method CreateOverlayFader() creates an object of one of the classes descending 
    // from Effects::Fader and configures it with parameters according to the desired 
    // fade-out (overlay) transition. Finally the prepared fader object is returned 
    // to the caller. Typically, the created fader is used to temporarily hide (to 
    // overlay) a GUI component when the user navigates a deeper level in the GUI 
    // system. The method has to be overridden and implemented in derived classes. 
    // The actual implementation of this method redirects the operation to the method 
    // @CreateDismissFader().
    CreateOverlayFader : function()
    {
      var fader = _app._NewObject( _unit.VisibilityFader, 0 );

      fader.Visible = false;
      fader.Enabled = true;
      fader.AddToOwner = true;
      fader.RemoveIfHidden = false;

      return fader;
    },

    // Implementation of the Chora method : 'Effects::ShowHideTransition.onInitializeIn()'
    onInitializeIn : function( sender )
    {
      var _tmp;
      var fader = ( _unit.VisibilityFader.isPrototypeOf( sender )? sender : null );
      var bounds = [ 0, 0, ( _tmp = fader.Owner.Bounds )[2] - _tmp[0], _tmp[3] - 
        _tmp[1]];
      var size = [( _tmp = fader.Group.Bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]];
      var pos = bounds.slice(0,2);

      pos = [( bounds[0] + ((( bounds[2] - bounds[0]) / 2 ) | 0 )) - (( size[0] 
      / 2 ) | 0 ), pos[1]];
      pos = [ pos[0], ( bounds[1] + ((( bounds[3] - bounds[1]) / 2 ) | 0 )) - (( 
      size[1] / 2 ) | 0 )];
      fader.Position = pos;
    },

    // Initializer for the class 'Effects::ShowHideTransition'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.Transition._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.ShowHideTransition;
    },

    // Internal variables of this class.
    _className : "Effects::ShowHideTransition"
  };

  // The class Effects::FadeInOutTransition provides functionality for the fade-in/out 
  // operation affecting the opacity of a given GUI component. When using the transition 
  // for the fade-in operation, the GUI component is automatically arranged to appear 
  // (per default centered) within the area of its owner component. This transition 
  // is thus ideal wherever one GUI component should smoothly appear or disappear 
  // in context of another component.
  // Per default when the component is displayed, it is aligned in the center of 
  // its owner. This can be modified by using the property @Alignment. Furthermore, 
  // with the four properties @MarginLeft, @MarginRight, @MarginTop and @MarginBottom 
  // the area to align the component within its owner can be limited.
  // How long the transition should take is determined in the property @Duration, 
  // which is per default 500 ms. With the property @Buffered you can configure, 
  // whether the transition should additionally enable the buffering mode for the 
  // affected GUI component while it perform the animation.
  _unit.FadeInOutTransition =
  {
    // The property 'Alignment' determines how the transition should align the dialog 
    // within the boundary area of this dialog's owner. This area can additionally 
    // be limitted by specifying margins in the properties @MarginLeft, @MarginTop, 
    // @MarginRight and @MarginBottom. Based on the specified alignment and margins 
    // the transition calculates the position where the dialog should appear. If 
    // the transition is used to hide the dialog, the properties have no effect.
    Alignment : 0x12,

    // The property 'Duration' determines how long the fade-in/out transition takes. 
    // The value is expressed in milliseconds.
    Duration : 500,

    // The method CreatePresentFader() creates an object of one of the classes descending 
    // from Effects::Fader and configures it with parameters according to the desired 
    // fade-in (present) transition. Finally the prepared fader object is returned 
    // to the caller. Typically, the created fader is used to show (to present) 
    // a GUI component when the user navigates to it. The method has to be overridden 
    // and implemented in derived classes. The actual implementation does nothing 
    // and returns 'null'.
    CreatePresentFader : function()
    {
      var fader = _app._NewObject( _unit.PositionFader, 0 );

      fader.Visible = true;
      fader.Enabled = true;
      fader.AssignFocus = false;
      fader.RestackTopmost = true;
      fader.UseCurrentState = true;
      fader.OnInitialize = [ this, this.onInitializeIn ];
      fader.OpacityEffect.OnSetCycleDuration( this.Duration );
      fader.OpacityEffect.Value1 = 0;
      fader.OpacityEffect.Value2 = 255;
      fader.PositionEffect.OnSetCycleDuration( this.Duration );
      fader.PositionEffect.OnSetTiming( 23 );

      return fader;
    },

    // The method CreateDismissFader() creates an object of one of the classes descending 
    // from Effects::Fader and configures it with parameters according to the desired 
    // fade-out (dismiss) transition. Finally the prepared fader object is returned 
    // to the caller. Typically, the created fader is used to hide (to dismiss) 
    // a GUI component when the user leaves it while he/she navigates in the GUI 
    // system. The method has to be overridden and implemented in derived classes. 
    // The actual implementation does nothing and returns 'null'.
    CreateDismissFader : function()
    {
      var fader = _app._NewObject( _unit.OpacityFader, 0 );

      fader.Visible = false;
      fader.Enabled = false;
      fader.RemoveIfHidden = true;
      fader.UseCurrentState = true;
      fader.Effect.Value1 = 255;
      fader.Effect.Value2 = 0;
      fader.Effect.OnSetCycleDuration( this.Duration );

      return fader;
    },

    // The method CreateRestoreFader() creates an object of one of the classes descending 
    // from Effects::Fader and configures it with parameters according to the desired 
    // fade-in (restore) transition. Finally the prepared fader object is returned 
    // to the caller. Typically, the created fader is used to show (to restore the 
    // original visible state) of a GUI component, which has been obscured (overlaid) 
    // by other GUI components during the user navigates in the GUI system. The 
    // method has to be overridden and implemented in derived classes. The actual 
    // implementation of this method redirects the operation to the method @CreatePresentFader().
    CreateRestoreFader : function()
    {
      var fader = _unit.Transition.CreateRestoreFader.call( this );

      fader.RestackTopmost = false;
      fader.Enabled = true;

      return fader;
    },

    // The method CreateOverlayFader() creates an object of one of the classes descending 
    // from Effects::Fader and configures it with parameters according to the desired 
    // fade-out (overlay) transition. Finally the prepared fader object is returned 
    // to the caller. Typically, the created fader is used to temporarily hide (to 
    // overlay) a GUI component when the user navigates a deeper level in the GUI 
    // system. The method has to be overridden and implemented in derived classes. 
    // The actual implementation of this method redirects the operation to the method 
    // @CreateDismissFader().
    CreateOverlayFader : function()
    {
      var fader = _unit.Transition.CreateOverlayFader.call( this );

      fader.AddToOwner = true;
      fader.RemoveIfHidden = false;
      fader.Enabled = true;

      return fader;
    },

    // Implementation of the Chora method : 'Effects::FadeInOutTransition.onInitializeIn()'
    onInitializeIn : function( sender )
    {
      var _tmp;
      var fader = ( _unit.PositionFader.isPrototypeOf( sender )? sender : null );
      var align = this.Alignment;
      var bounds = [ 0, 0, ( _tmp = fader.Owner.Bounds )[2] - _tmp[0], _tmp[3] - 
        _tmp[1]];
      var size = [( _tmp = fader.Group.Bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]];
      var pos = bounds.slice(0,2);

      if ((( align & 0x4 ) === 0x4 ))
        pos = [ bounds[2] - size[0], pos[1]];
      else
        if ((( align & 0x2 ) === 0x2 ))
          pos = [( bounds[0] + ((( bounds[2] - bounds[0]) / 2 ) | 0 )) - (( size[0] 
          / 2 ) | 0 ), pos[1]];

      if ((( align & 0x20 ) === 0x20 ))
        pos = [ pos[0], bounds[3] - size[1]];
      else
        if ((( align & 0x10 ) === 0x10 ))
          pos = [ pos[0], ( bounds[1] + ((( bounds[3] - bounds[1]) / 2 ) | 0 )) 
          - (( size[1] / 2 ) | 0 )];

      fader.PositionEffect.Value2 = pos;

      if ((( !fader.Group.Owner || !fader.Group.OnGetVisible()) || !fader.Group.Opacity ) 
          || ((( _tmp = _app._IntersectRect( fader.Group.Bounds, [ 0, 0, ( _tmp 
          = fader.Owner.Bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]]))[0] >= _tmp[2]) 
          || ( _tmp[1] >= _tmp[3])))
        fader.Group.OnSetBounds( _app._SetRectOrigin( fader.Group.Bounds, pos ));
    },

    // Initializer for the class 'Effects::FadeInOutTransition'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.Transition._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.FadeInOutTransition;
    },

    // Internal variables of this class.
    _className : "Effects::FadeInOutTransition"
  };

  // The class Effects::SlideTransition provides functionality for the fade-in/out 
  // operation affecting the position and the opacity of the given GUI component. 
  // By using the property @Direction you determine in which direction the component 
  // should be moved during the fade-in/out animation (e.g. up, down, left, right, 
  // etc.). When using the transition for the fade-in operation, the GUI component 
  // starts outside of the visible area of its owner and continues moving until 
  // it reaches the predetermined (per default the center) position of its owner. 
  // When using the transition for the fade-out operation, the component is moved 
  // until it leaves the visible area of its owner component. This transition is 
  // thus ideal wherever one GUI component should smoothly slide-in/out in context 
  // of another component.
  // Per default when the component is displayed, it is aligned in the center of 
  // its owner. This can be modified by using the property @Alignment. Furthermore, 
  // with the four properties @MarginLeft, @MarginRight, @MarginTop and @MarginBottom 
  // the area to align the component within its owner can be limited.
  // The transition animates the position and the opacity of the affected GUI component 
  // simultanously. If the opacity animation is not desired, you can disable it 
  // explicitly by using the properties @OpacityFadeIn and @OpacityFadeOut.
  // How long the transition should take is determined in the property @Duration, 
  // which is per default 500 ms. The exact timing (easing) is configured with the 
  // property @Timing. The class implements an extensive set of various timing functions. 
  // In its simplest case the animation can follow a straight line, or it can start 
  // slow and get faster afterwards. More complex timings perform realistic spring 
  // elastic and bounce animations. In its default configuration, the transition 
  // uses the 'FastIn_EaseOut' timing (it starts fast and slows down until the end 
  // position is reached).
  // With the property @Buffered you can configure, whether the transition should 
  // additionally enable the buffering mode for the affected GUI component while 
  // it performs the animation.
  _unit.SlideTransition =
  {
    // The property 'MarginTop' determines the gap above the area destined to display 
    // the dialog within its owner. Based on the specified margin and the actual 
    // value of the @Alignment property the transition calculates the vertical position 
    // where the dialog should appear. If the transition is used to hide the dialog, 
    // the property has no effect.
    MarginTop : 0,

    // The property 'Alignment' determines how the transition should align the dialog 
    // within the boundary area of this dialog's owner. This area can additionally 
    // be limitted by specifying margins in the properties @MarginLeft, @MarginTop, 
    // @MarginRight and @MarginBottom. Based on the specified alignment and margins 
    // the transition calculates the position where the dialog should appear. If 
    // the transition is used to hide the dialog, the properties have no effect.
    Alignment : 0x12,

    // The property 'Duration' determines how long the slide transition takes. The 
    // value is expressed in milliseconds.
    Duration : 500,

    // The property 'Direction' controls the slide direction of the affected GUI 
    // component to apply during the fade-in or fade-out animation.
    Direction : 0,

    // The method CreatePresentFader() creates an object of one of the classes descending 
    // from Effects::Fader and configures it with parameters according to the desired 
    // fade-in (present) transition. Finally the prepared fader object is returned 
    // to the caller. Typically, the created fader is used to show (to present) 
    // a GUI component when the user navigates to it. The method has to be overridden 
    // and implemented in derived classes. The actual implementation does nothing 
    // and returns 'null'.
    CreatePresentFader : function()
    {
      var fader = _app._NewObject( _unit.PositionFader, 0 );

      fader.Visible = true;
      fader.Enabled = true;
      fader.AssignFocus = false;
      fader.RestackTopmost = true;
      fader.UseCurrentState = true;
      fader.OnInitialize = [ this, this.onInitializeIn ];
      fader.OpacityEffect.OnSetCycleDuration( this.Duration );
      fader.OpacityEffect.OnSetInitialDelay( 0 );
      fader.OpacityEffect.Value1 = 0;
      fader.OpacityEffect.Value2 = 255;
      fader.PositionEffect.OnSetCycleDuration( this.Duration );
      fader.PositionEffect.OnSetTiming( 23 );
      fader.PositionEffect.OnSetTimingCustom1( 0.000000 );
      fader.PositionEffect.OnSetTimingCustom2( 0.000000 );
      fader.PositionEffect.OnSetExponent( 3.000000 );
      fader.PositionEffect.OnSetAmplitude( 0.500000 );
      fader.PositionEffect.OnSetOscillations( 3 );
      fader.PositionEffect.OnSetBounces( 3 );
      fader.PositionEffect.OnSetElasticity( 0.500000 );

      return fader;
    },

    // The method CreateDismissFader() creates an object of one of the classes descending 
    // from Effects::Fader and configures it with parameters according to the desired 
    // fade-out (dismiss) transition. Finally the prepared fader object is returned 
    // to the caller. Typically, the created fader is used to hide (to dismiss) 
    // a GUI component when the user leaves it while he/she navigates in the GUI 
    // system. The method has to be overridden and implemented in derived classes. 
    // The actual implementation does nothing and returns 'null'.
    CreateDismissFader : function()
    {
      var fader = _app._NewObject( _unit.PositionFader, 0 );

      fader.Visible = false;
      fader.Enabled = false;
      fader.RemoveIfHidden = true;
      fader.UseCurrentState = true;
      fader.OnInitialize = [ this, this.onInitializeOut ];
      fader.OpacityEffect.Value1 = 255;
      fader.OpacityEffect.Value2 = 0;
      fader.OpacityEffect.OnSetCycleDuration( this.Duration );
      fader.OpacityEffect.OnSetInitialDelay( 0 );
      fader.PositionEffect.OnSetCycleDuration( this.Duration );
      fader.PositionEffect.OnSetTiming( 23 );
      fader.PositionEffect.OnSetTimingCustom1( 0.000000 );
      fader.PositionEffect.OnSetTimingCustom2( 0.000000 );
      fader.PositionEffect.OnSetExponent( 3.000000 );
      fader.PositionEffect.OnSetAmplitude( 0.500000 );
      fader.PositionEffect.OnSetOscillations( 3 );
      fader.PositionEffect.OnSetBounces( 3 );
      fader.PositionEffect.OnSetElasticity( 0.500000 );

      return fader;
    },

    // The method CreateRestoreFader() creates an object of one of the classes descending 
    // from Effects::Fader and configures it with parameters according to the desired 
    // fade-in (restore) transition. Finally the prepared fader object is returned 
    // to the caller. Typically, the created fader is used to show (to restore the 
    // original visible state) of a GUI component, which has been obscured (overlaid) 
    // by other GUI components during the user navigates in the GUI system. The 
    // method has to be overridden and implemented in derived classes. The actual 
    // implementation of this method redirects the operation to the method @CreatePresentFader().
    CreateRestoreFader : function()
    {
      var fader = _unit.Transition.CreateRestoreFader.call( this );

      fader.RestackTopmost = false;
      fader.Enabled = true;

      return fader;
    },

    // The method CreateOverlayFader() creates an object of one of the classes descending 
    // from Effects::Fader and configures it with parameters according to the desired 
    // fade-out (overlay) transition. Finally the prepared fader object is returned 
    // to the caller. Typically, the created fader is used to temporarily hide (to 
    // overlay) a GUI component when the user navigates a deeper level in the GUI 
    // system. The method has to be overridden and implemented in derived classes. 
    // The actual implementation of this method redirects the operation to the method 
    // @CreateDismissFader().
    CreateOverlayFader : function()
    {
      var fader = _unit.Transition.CreateOverlayFader.call( this );

      fader.AddToOwner = true;
      fader.RemoveIfHidden = false;
      fader.Enabled = true;

      return fader;
    },

    // Implementation of the Chora method : 'Effects::SlideTransition.onInitializeIn()'
    onInitializeIn : function( sender )
    {
      var _tmp;
      var fader = ( _unit.PositionFader.isPrototypeOf( sender )? sender : null );
      var align = this.Alignment;
      var bounds = [ 0, 0, ( _tmp = fader.Owner.Bounds )[2] - _tmp[0], _tmp[3] - 
        _tmp[1]];
      var size = [( _tmp = fader.Group.Bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]];

      bounds = _app._SetRectY1( bounds, bounds[1] + this.MarginTop );

      var pos = bounds.slice(0,2);

      if ((( align & 0x4 ) === 0x4 ))
        pos = [ bounds[2] - size[0], pos[1]];
      else
        if ((( align & 0x2 ) === 0x2 ))
          pos = [( bounds[0] + ((( bounds[2] - bounds[0]) / 2 ) | 0 )) - (( size[0] 
          / 2 ) | 0 ), pos[1]];

      if ((( align & 0x20 ) === 0x20 ))
        pos = [ pos[0], bounds[3] - size[1]];
      else
        if ((( align & 0x10 ) === 0x10 ))
          pos = [ pos[0], ( bounds[1] + ((( bounds[3] - bounds[1]) / 2 ) | 0 )) 
          - (( size[1] / 2 ) | 0 )];

      fader.PositionEffect.Value2 = pos;

      if ((( !fader.Group.Owner || !fader.Group.OnGetVisible()) || !fader.Group.Opacity ) 
          || ((( _tmp = _app._IntersectRect( fader.Group.Bounds, [ 0, 0, ( _tmp 
          = fader.Owner.Bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]]))[0] >= _tmp[2]) 
          || ( _tmp[1] >= _tmp[3])))
      {
        var range = [( _tmp = fader.Owner.Bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]];

        switch ( this.Direction )
        {
          case 5 :
            pos = [ pos[0], -size[1]];
          break;

          case 3 :
          {
            pos = [ pos[0], -size[1]];
            pos = [ range[0], pos[1]];
          }
          break;

          case 8 :
            pos = [ -size[0], -size[1]];
          break;

          case 2 :
            pos = [ range[0], pos[1]];
          break;

          case 7 :
            pos = [ -size[0], pos[1]];
          break;

          case 4 :
            pos = [ pos[0], range[1]];
          break;

          case 1 :
          {
            pos = [ pos[0], range[1]];
            pos = [ range[0], pos[1]];
          }
          break;

          case 6 :
          {
            pos = [ pos[0], range[1]];
            pos = [ -size[0], pos[1]];
          }
          break;

          default :; 
        }

        fader.Group.OnSetBounds( _app._SetRectOrigin( fader.Group.Bounds, pos ));
      }
    },

    // Implementation of the Chora method : 'Effects::SlideTransition.onInitializeOut()'
    onInitializeOut : function( sender )
    {
      var _tmp;
      var fader = ( _unit.PositionFader.isPrototypeOf( sender )? sender : null );
      var pos = fader.Group.Bounds.slice(0,2);
      var size = [( _tmp = fader.Group.Bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]];
      var range = [( _tmp = fader.Owner.Bounds )[2] - _tmp[0], _tmp[3] - _tmp[1]];

      switch ( this.Direction )
      {
        case 5 :
          pos = [ pos[0], range[1]];
        break;

        case 3 :
        {
          pos = [ pos[0], range[1]];
          pos = [ -size[0], pos[1]];
        }
        break;

        case 8 :
        {
          pos = [ pos[0], range[1]];
          pos = [ range[0], pos[1]];
        }
        break;

        case 2 :
          pos = [ -size[0], pos[1]];
        break;

        case 7 :
          pos = [ range[0], pos[1]];
        break;

        case 4 :
          pos = [ pos[0], -size[1]];
        break;

        case 1 :
          pos = [ -size[0], -size[1]];
        break;

        case 6 :
        {
          pos = [ pos[0], -size[1]];
          pos = [ range[0], pos[1]];
        }
        break;

        default :; 
      }

      fader.PositionEffect.Value2 = pos;
    },

    // Initializer for the class 'Effects::SlideTransition'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _unit.Transition._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.SlideTransition;
    },

    // Internal variables of this class.
    _className : "Effects::SlideTransition"
  };

  // The definition Effects::Timing determines the available timing functions for 
  // animation effects. Except the 'Custom' item, all items of this definition represent 
  // build-in timing functions. These can be simply selected in the effect property 
  // Timing.
  _unit.Timing =
  {
    Linear : 0,
    Power_In : 1,
    Power_Out : 2,
    Power_InOut : 3,
    Exp_In : 4,
    Exp_Out : 5,
    Exp_InOut : 6,
    Sine_In : 7,
    Sine_Out : 8,
    Sine_InOut : 9,
    Circle_In : 10,
    Circle_Out : 11,
    Circle_InOut : 12,
    Back_In : 13,
    Back_Out : 14,
    Back_InOut : 15,
    Elastic_In : 16,
    Elastic_Out : 17,
    Elastic_InOut : 18,
    Bounce_In : 19,
    Bounce_Out : 20,
    Bounce_InOut : 21,
    EaseIn_FastOut : 22,
    FastIn_EaseOut : 23,
    EaseIn_EaseOut : 24,
    FastIn_FastOut : 25,
    Custom : 26
  };

  // The definition Effects::DialogAlignment determines the set of constraints to 
  // control how dialog components are aligned within the boundary area of their 
  // owners when the dialogs are presented. See also Effects::FadeInOutTransition, 
  // Effects::ScaleTransition, Effects::ShowHideTransition and Effects::SlideTransition.
  _unit.DialogAlignment =
  {
    AlignHorzLeft : 0x1,
    AlignHorzCenter : 0x2,
    AlignHorzRight : 0x4,
    AlignVertTop : 0x8,
    AlignVertCenter : 0x10,
    AlignVertBottom : 0x20
  };

  // User defined class: 'Effects::EffectTimerClass'
  _unit.EffectTimerClass =
  {
    // The method Trigger() will be invoked when the timer is expired (when the 
    // interval defined in @Begin or @Period is elapsed). The method can be overridden 
    // and implemented in derived classes. The default implementation of this method 
    // sends a signal to the slot method stored in the @OnTrigger property.
    Trigger : function()
    {
      _app.Core.Timer.Trigger.call( this );
      _app._NotifyObjObservers( this, 0 );
    },

    // Initializer for the class 'Effects::EffectTimerClass'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Timer._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.EffectTimerClass;
    },

    // Internal variables of this class.
    _className : "Effects::EffectTimerClass"
  };

  // The global autoobject Effects::EffectTimer triggers all actually active animation 
  // effects. In this way all effects will run simultanously. Per default the timer 
  // is configured with 15 ms period (~60 FPS). By overriding the Effects::EffectTimer 
  // autoobject by a variant you can specify another resolution to drive the animations.
  _unit.EffectTimer =
  {
    // Initializer for the auto object 'Effects::EffectTimer'
    _Init : function()
    {
      // First create the auto object instance ...
      _unit.EffectTimerClass._Init.call( this, 0 );

      // Initialize the object ...
      this.OnSetPeriod( 15 );
      this.OnSetEnabled( true );
    },

    // Function to determine the currently effective variant of this auto-object.
    _variants : function()
    {
      return this;
    },

    // The current unique instance of the auto object
    _this : null
  };

  // User defined class: 'Effects::TimingList'
  _unit.TimingList =
  {
    spans : _app._NewArray( 12, 0, null ),
    amps : _app._NewArray( 12, 0, null ),

    // Initializer for the class 'Effects::TimingList'
    _Init : function( aArg )
    {
      // Then create and initialize all new arrays ...
      ( this.spans = []).__proto__ = _unit.TimingList.spans;
      ( this.amps = []).__proto__ = _unit.TimingList.amps;

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.TimingList;

      // For debugging purpose only - count all objects
      _app._NoOfObjects++;
    },

    // Deintializer for the class 'Effects::TimingList'
    _Done : function()
    {
      // First adjust the object's class inheritance ...
      this.__proto__ = null;

      // For debugging purpose only - count all objects
      _app._NoOfObjects--;
    },

    // Re-Initializer for the class 'Effects::TimingList'
    _ReInit : function()
    {
    },

    // Garbage Collector method for the class 'Effects::TimingList'
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
    _className : "Effects::TimingList"
  };

  // User defined class: 'Effects::FaderTask'
  _unit.FaderTask =
  {
    last : null,
    first : null,

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
      var fader = this.first;

      while ( !!fader )
      {
        fader.OnEnd();
        fader.Group.viewState = fader.Group.viewState & ~0x40000;
        fader = fader.next;
      }

      fader = this.first;

      while ( !!fader )
      {
        _app._PostSignal( fader.onComplete, fader );
        fader = fader.next;
      }
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
      var fader = this.first;

      while ( !!fader )
      {
        _app._PostSignal( fader.onCancel, fader );
        fader = fader.next;
      }

      this.first = null;
      this.last = null;
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
      var _tmp;

      if ( !this.first )
        this.Complete();

      var fader = this.first;

      while ( !!fader )
      {
        fader.Group.viewState = ( fader.Group.viewState | 0x40000 ) & ~0x20000;
        fader.Group.pendingFader = null;
        fader = fader.next;
      }

      fader = this.first;

      while ( !!fader )
      {
        ( _tmp = fader.OnInitialize )? _tmp[1].call( _tmp[0], fader ) : null;
        fader.OnStart();
        fader = fader.next;
      }
    },

    // The method Complete() informs the task queue about the completion of this 
    // task. Thereupon the next available task in the queue can be executed. This 
    // method is usually called in context of the @OnStart() or @OnContinue() method 
    // when the task has finalized its work. Calling the method for a not current 
    // task has no effect.
    Complete : function()
    {
      var fader = this.first;

      while ( !!fader && fader.IsFinished())
        fader = fader.next;

      if ( !fader )
        _app.Core.Task.Complete.call( this );
    },

    // Implementation of the Chora method : 'Effects::FaderTask.RemoveFader()'
    RemoveFader : function( aFader )
    {
      if ( !aFader )
        return;

      if ( this.IsCurrent())
        throw new Error(  _0001  );

      if ( aFader.task !== this )
        throw new Error(  _0002  );

      if ( !!aFader.next )
        aFader.next.prev = aFader.prev;
      else
        this.last = aFader.prev;

      if ( !!aFader.prev )
        aFader.prev.next = aFader.next;
      else
        this.first = aFader.next;

      aFader.task = null;
      aFader.next = null;
      aFader.prev = null;

      if ( !!aFader.Group )
        aFader.Group.pendingFader = null;

      _app._PostSignal( aFader.onCancel, aFader );

      if ( !this.first )
        this.Cancel();
    },

    // Implementation of the Chora method : 'Effects::FaderTask.AddFader()'
    AddFader : function( aFader )
    {
      if ( !aFader )
        return;

      if ( this.IsCurrent())
        throw new Error(  _0003  );

      if ( !!aFader.task )
        throw new Error(  _0004  );

      aFader.prev = this.last;
      aFader.next = null;

      if ( !!this.last )
        this.last.next = aFader;
      else
        this.first = aFader;

      this.last = aFader;
      aFader.task = this;
    },

    // Initializer for the class 'Effects::FaderTask'
    _Init : function( aArg )
    {
      // First perform the super class initialization ...
      _app.Core.Task._Init.call( this, aArg );

      // Adjust this object's class inheritance ...
      this.__proto__ = _unit.FaderTask;
    },

    // Garbage Collector method for the class 'Effects::FaderTask'
    _Mark : function( aCycle )
    {
      var _tmp;

      // First give the super class a chance to mark its objects ...
      _app.Core.Task._Mark.call( this, aCycle );

      // Mark all reachable objects ...
      if (( _tmp = this.last ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
      if (( _tmp = this.first ) && ( _tmp._cycle != aCycle ))
        _tmp._Mark( _tmp._cycle = aCycle );
    },

    // Internal variables of this class.
    _className : "Effects::FaderTask"
  };

  // The global autoobject Effects::ShowHideCentered represents the most primitive 
  // fade-in/out operation affecting the pure visibility of a given GUI component. 
  // When using the transition for the fade-in operation, the GUI component is automatically 
  // arranged to appear centered within the area of its owner component. This transition 
  // is thus ideal wherever one GUI component should instantly appear or disappear 
  // in context of another component without any animation effects.
  // Please note, with this transition the fade-in operation is performed just at 
  // the beginning of all other transitions running simultaneously, in other words, 
  // the GUI component appears during the start phase of the transition. In turn, 
  // to fade-out the component, the operation is executed during the end phase of 
  // the transition. 
  // This object exists for your convenience permitting you to simply refer the 
  // transition wherever it is required in your implementation without having to 
  // take care of the creation and configuration of the object. If you require the 
  // transition to run with other configuration (e.g. to show the GUI component 
  // at the end instead of the start phase), create a copy of this object and adapt 
  // its properties accordingly.
  _unit.ShowHideCentered =
  {
    // Initializer for the auto object 'Effects::ShowHideCentered'
    _Init : function()
    {
      // First create the auto object instance ...
      _unit.ShowHideTransition._Init.call( this, 0 );
    },

    // Function to determine the currently effective variant of this auto-object.
    _variants : function()
    {
      return this;
    },

    // The current unique instance of the auto object
    _this : null
  };

  // Function to initialize the application.
  _unit._Init = function()
  {
    _unit.Int32Effect.__proto__ = _unit.Effect;
    _unit.PointEffect.__proto__ = _unit.Effect;
    _unit.VisibilityFader.__proto__ = _unit.Fader;
    _unit.OpacityFader.__proto__ = _unit.Fader;
    _unit.PositionFader.__proto__ = _unit.Fader;
    _unit.ShowHideTransition.__proto__ = _unit.Transition;
    _unit.FadeInOutTransition.__proto__ = _unit.Transition;
    _unit.SlideTransition.__proto__ = _unit.Transition;
    _unit.EffectTimerClass.__proto__ = _app.Core.Timer;
    _unit.FaderTask.__proto__ = _app.Core.Task;
  };

  // Function to re-initialize global objects after language selection.
  _unit._ReInit = function()
  {
    var _tmp;

    if (( _tmp = _unit.EffectTimer._this ))
      _tmp._ReInit();
    if (( _tmp = _unit.ShowHideCentered._this ))
      _tmp._ReInit();
  };

  // Function to reclaim memory occupied by unused objects.
  _unit._Reclaim = function( aCycle )
  {
    var _tmp;

    if (( _tmp = _unit.EffectTimer._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.EffectTimer._this = null );
    if (( _tmp = _unit.ShowHideCentered._this ) && ( _tmp._cycle != aCycle ))
      _tmp._Done( _unit.ShowHideCentered._this = null );
  };

  return _unit;
})();

/* Embedded Wizard */