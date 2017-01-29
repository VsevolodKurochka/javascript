function Slider(settings){
	var d = document;
	var slider = d.getElementById(settings.sliderId);
	var sliderContent = d.getElementsByClassName('slider-content')[0];
	var sliderWidth = parseFloat(getComputedStyle(sliderContent).width);
	var sliderItems = slider.getElementsByClassName('slider-item');
	var singleSlideWidth, i = 0;
	var sliderButtons = slider.getElementsByClassName('slider-button');
	var sliderVisibility = this;

	function showSlides(direction){
		for(i = 0; i < sliderItems.length; i++){
			var currentPosLeft = parseFloat(sliderItems[i].style.left);
			if(sliderItems[i].style.left !== ""){
				sliderItems[i].style.left = ( currentPosLeft + (singleSlideWidth * direction) ) + 'px';
			}else{
				sliderItems[i].style.width = singleSlideWidth + 'px';
				//sliderItems[i].style.left = (singleSlideWidth * i) + 'px';
			}
		}
	}

	this.move_left = function(){
		if(parseFloat(sliderItems[0].style.left) < 0 ){
			showSlides(1);
		}
	}

	this.move_right = function(){
		
		if(parseFloat(sliderItems[sliderItems.length - 1].style.left) >= sliderWidth){
			showSlides(-1);
		}
	}

	function init(){

		if(!settings.slidesToShow || isNaN(settings.slidesToShow)){
			settings.slidesToShow = 1;
		}
		// sliderWidth = parseFloat( sliderItems.length * sliderItems );
		console.log( sliderItems.length * 5);
		// function calcWidth(){
		// 	var summ;
		// 	for( i = 0; i <= sliderItems.length; i++ ){
		// 		summ = i;
		// 	}
		// 	console.log(summ);
		// }
		// calcWidth();
		function sliderItemWidth(){

			// sliderWidth = parseFloat(getComputedStyle(sliderContent).width);
			// sliderWidth = parseFloat(sliderItems.length * parseFloat(sliderItems.width));

			//singleSlideWidth = sliderWidth / settings.slidesToShow;

			showSlides();

		}

		sliderItemWidth();
		window.onresize = function(event){
			sliderItemWidth();
		};
		for( i = 0; i < sliderButtons.length; i++){
			sliderButtons[i].addEventListener('click', function(){
				sliderVisibility['move_'+this.dataset.action]();
			});
		}
		// sliderButtons[0].addEventListener('click', sliderVisibility.move_left);
		// sliderButtons[1].addEventListener('click', sliderVisibility.move_right);
	}

	init();
}