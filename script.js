$(document).ready(function(){
	
  /*Step1: INIT SCROLLMAGIC
	Step2: CREATING SCROLLMAGIC SCENES
	Step3: DURATION AND TRIGGERHOOK POSITION
	Step4: FOR EACH LOOP */
	
	/* FADE IN PROJECT1 WHEN IT COMES INTO VIEW */
	var controller = new ScrollMagic.Controller();  /*tells browser to use scrollbar and trigger animations*/
	
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
		 	triggerHook:0.95,     /*hook 0:goes to top of screen  1:goes to bottom of screen */
		 	reverse:false,      /*animation will only happen once */

	 	})
		 .setClassToggle(this,'fade-in') /* toggle class fade-in on project01 */
		 .addIndicators({
		 	/* To change name n color of indicators*/
		 	name:'Fadescene',
		 	colorTrigger:'yellow',
		 	indent:5,
		 	colorStart:'purple',
		 	colorEnd:'purple'
		 })
	 	.addTo(controller);

	});


});
