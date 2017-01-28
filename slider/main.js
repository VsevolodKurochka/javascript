function Slider(settings){
	var d = document;
	var slider = d.getElementById(settings.sliderId);
	var sliderContent = d.getElementsByClassName('slider-content')[0];
	var sliderItems = slider.getElementsByClassName('slider-item');
	var singleSlideWidth = 0;

	var init = function(){
	
		function sliderItemWidth(){

			if(!settings.slidesToShow || isNaN(settings.slidesToShow)){
				settings.slidesToShow = 1;
			}

			var sliderWidth = parseFloat(getComputedStyle(sliderContent).width);

			singleSlideWidth = sliderWidth / settings.slidesToShow;
			for ( var i = 0; i < sliderItems.length; i++ ){
				sliderItems[i].style.width = singleSlideWidth + 'px';
				sliderItems[i].style.left = (singleSlideWidth * i) + 'px';
			}

		}
		sliderItemWidth();
		//window.addEventListener("resize", sliderItemWidth);
		window.onresize = function(event){
			sliderItemWidth();
		};
	}
	init();
}