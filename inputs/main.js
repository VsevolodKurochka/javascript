document.addEventListener('DOMContentLoaded', function(){
	function log(logParametr){
		console.log(logParametr);
	}
	// Block 1
		var inputs = document.getElementsByName("r1");
		var button1 = document.getElementById("button1");
		function input(){
			for(var i = 0; i < inputs.length; i++){
				if(inputs[i].checked){
					alert("Choosen " + i + " element. Value: " + inputs[i].value);
				}
			}
		}
		button1.addEventListener("click", input);
	// Block 2
		var select = document.getElementById("languages");
		var text = document.getElementById("languages-text");
		function getTextfromSelect(){
			var sel = select.selectedIndex;
			var options = select.options;
			text.innerHTML = 'Вы выбрали: ' + options[sel].text + '. Индекс выбраного: ' + options[sel].index;
		}
		getTextfromSelect();
		select.addEventListener("change", getTextfromSelect);
	// Block 3
		var range1 = document.getElementById("range1"),
				range1Input = document.getElementById("range1Input"),
				block = document.getElementById("block");

		function rangeChange(){
			range1Input.value = range1.value;
			block.style.width = range1.value + "px";
		}
		function range1InputChange(){
			range1.value = range1Input.value;
			block.style.width = range1Input.value + "px";
		}
		rangeChange();
		range1InputChange();

		range1.addEventListener("input", rangeChange);
		range1Input.addEventListener("input", range1InputChange);
	// Block 4

		// Range input
		var rangeInput = document.getElementsByClassName("rangeInput");
		var textInput = document.getElementsByClassName("textInput");

		// Top left border radius
		var rtl = document.getElementById("rtl");
		var ttl = document.getElementById("ttl");

		// Top right border radius
		var rtr = document.getElementById("rtr");
		var ttr = document.getElementById("ttr");

		// Bottom right border radius
		var rbr = document.getElementById("rbr");
		var tbr = document.getElementById("tbr");

		// Bottom left border radius
		var rbl = document.getElementById("rbl");
		var tbl = document.getElementById("tbl");

		var border = document.getElementById("border");

		function borderStyle(){
			border.style.borderRadius=rtl.value+'px '+rtr.value+'px '+rbr.value+'px '+rbl.value+'px';
		}
		// Передаем значения из input[type="range"] в input[type="text"]
		function changeBorderRange(){
			ttl.value = rtl.value;
			ttr.value = rtr.value;
			tbr.value = rbr.value;
			tbl.value = rbl.value;
			borderStyle();
		}
		// Передаем значения из input[type="text"] в input[type="range"]
		function changeBorderInput(){
			rtl.value = ttl.value;
			rtr.value = ttr.value;
			rbr.value = tbr.value;
			rbl.value = tbl.value;
			borderStyle();
		}
		// Объединяем 2 функции
		function changeBorderAll(){
			changeBorderRange();
			changeBorderInput();
		}
		// При изменении значения el, запускать функцию.
		function loopBorder(el, func){
			for(var i = 0; i < el.length; i++ ){
				el[i].addEventListener("input", func);
			}
		}
		changeBorderAll();
		loopBorder(rangeInput, changeBorderRange);
		loopBorder(textInput, changeBorderInput);
});