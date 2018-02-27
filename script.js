$(document).ready(function(){
	
  /*Step1: INIT SCROLLMAGIC
	Step2: CREATING SCROLLMAGIC SCENES
	Step3: DURATION AND TRIGGERHOOK POSITION
	Step4: FOR EACH LOOP */
	
	var controller = new ScrollMagic.Controller();  /*tells browser to use scrollbar and trigger animations*/
	
	/* FADE IN PROJECT1 WHEN IT COMES INTO VIEW */
	// var ourScene =new ScrollMagic.Scene({
	// 	triggerElement:'#project01 img',
	// 	duration:'90%',   /*duration 300 is 300px ;100% is 100vh*/
	// 	triggerHook:0.95,     /*hook 0:goes to top of screen  1:goes to bottom of screen */
	// 	//reverse:false,      /*animation will only happen once */

	// })
	// .setClassToggle('#project01','fade-in') /* toggle class fade-in on project01 */
	// .addIndicators({
	// 	/* To change name n color of indicators*/
	// 	name:'Fadescene',
	// 	colorTrigger:'yellow',
	// 	indent:5,
	// 	colorStart:'purple',
	// 	colorEnd:'purple'
	// })
	// .addTo(controller);

	/* LOOP THROUGH EACH PROJECT ELEMENT*/
	$('.project').each(function(){

		console.log(this);
		//by consolelog we see that img is 0th child in children list
		var ourScene =new ScrollMagic.Scene({
		 	triggerElement:this.children[0],
		 	duration:'90%',   /*duration 300 is 300px ;100% is 100vh*/
		 	triggerHook:0.9,     /*hook 0:goes to top of screen  1:goes to bottom of screen */
		 	//reverse:false,      /*animation will only happen once */

	 	})
		 .setClassToggle(this,'fade-in') /* toggle class fade-in on project01 */
		 .addIndicators({
		 	/* To change name n color of indicators*/
		 	name:'Fadescene',
		 	colorTrigger:'purple',
		 	indent:5,
		 	colorStart:'purple',
		 	colorEnd:'purple'
		 })
	 	.addTo(controller);

	});

	/* PINNING THE INTRO FOR 20% */

	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement:'#intro',
		duration:'28%',
		triggerHook: 0,
	})
	.setPin('#intro',{pushFollowers:false}) /*using pushfollowers the main goes over the header*/
	.addIndicators({
		name:'Pin',
		colorTrigger:'orange',
		indent:0,
		colorStart:'orange',
		colorEnd:'orange'
	})
	.addTo(controller);

	/* PINNING THE SAME ELEMENT MULTIPLE TIME */

	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement:'#project01',
		//duration:'20%',
		triggerHook: 0.6,
	})
	.setPin('#intro',{pushFollowers:false}) /*using pushfollowers the main goes over the header*/
	.addIndicators({
		name:'Pin2',
		colorTrigger:'yellow',
		indent:0,
		colorStart:'yellow',
		colorEnd:'yellow'
	})
	.addTo(controller);

	/* PARALLAX SCENE */

	// var parallaxScene = new ScrollMagic.Scene({
	// 	triggerElement:'.bcg-parallax',
	// 	triggerHook:1,
	// 	duration:'105%',
	// })
	// .setTween(TweenMax.from('.bcg', 1, {y:'-50%' , ease:Power0.easeNone} ))
	// .addIndicators({
	// 	name:'parallax',
	// 	colorTrigger:'green',
	// 	colorStart:'green',
	// 	colorEnd:'green'
	// })
	// .addTo(controller);

	/* FADE IN TEXT ON PARALLAX SCENE A LITTLE BIT AFTER IT COMES ON */

	// we will need to create a new timeline
	var parallaxTl = new TimelineMax();
	//adding tweens to the timeline
	parallaxTl
		.from('.content-wrapper', 0.9 ,{ autoAlpha:0 , ease:Power0.easeNone} ,0.9)/* delay of 0.3 */
		.from('.bcg', 2, {y:'-50%' , ease:Power0.easeNone} ,0)/* should start at 0 along with content wrapper and not after it*/
		;

	var parallaxScene = new ScrollMagic.Scene({
	 	triggerElement:'.bcg-parallax',
	 	triggerHook:1,
	 	duration:'100%',
	})
	 .setTween(parallaxTl)
	 .addIndicators({
	 	name:'parallax',
	 	colorTrigger:'green',
	 	colorStart:'green',
	 	colorEnd:'green'
	})
	 .addTo(controller);

});
