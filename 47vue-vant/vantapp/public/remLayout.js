(function(){
	function layout(){
		var html = document.querySelector('html');
		var userAgent = navigator.userAgent;
		console.log(userAgent);
		
		html.className = "";
		if(userAgent.indexOf('iPhone') != -1){
			html.classList.add('iPhone');
		}else if(userAgent.indexOf('Android') != -1){
			html.classList.add('Android');
		}else if(userAgent.indexOf('ipad') != -1){
			html.classList.add('ipad');
		}else {
			html.classList.add('pc');
		}
		
		if(window.innerWidth<640){
					html.classList.add('lt640');
					html.classList.add("lt960")
					html.classList.add("lt1200")
				}else if(window.innerWidth<960){
					html.classList.add("lt960")
					html.classList.add("lt1200")
					html.classList.add("gt640")
				}else if(window.innerWidth<1200){
					html.classList.add("gt960")
					html.classList.add("lt1200")
					html.classList.add("gt640")
				}else{
					html.classList.add("gt960")
					html.classList.add("gt1200")
					html.classList.add("gt640")
				}
			
		var screenWidth = window.innerWidth;
		var size = screenWidth/3.75;
		html.style.fontSize = size + 'px';
	}
	
	layout();
	
	window.onresize = function(){
		layout();
	}
})()
