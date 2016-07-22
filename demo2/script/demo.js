window.onload = function(){
	var lis = document.getElementById("note-top").getElementsByTagName('li');
	var divs = document.getElementById("note-con").getElementsByTagName('div');
	timer = null;
	if(lis.length != divs.length)
		return;
		for(var i = 0 ;i <lis.length;i++){
			lis[i].id = i;
			lis[i].onmouseover =  function(){
				that = this;
				if(timer){
					clearTimeout(timer);
					timer = null;
				}
				timer = setTimeout(function(){
				for (var j = 0; j<lis.length;j++) {
					lis[j].className = '';
					divs[j].style.display ="none";
				}
				lis[that.id].className = "select";
				divs[that.id].style.display = "block";
			},500);
				
		}
	}
}
