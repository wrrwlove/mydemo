window.onload = function(){
	var lis = document.getElementById("note-top").getElementsByTagName('li');
	var divs = document.getElementById("note-con").getElementsByTagName('div');
	timer = null;
	index = 0;
	if(lis.length !=divs.length)
		return;
	for(var i=0;i<lis.length;i++){
		lis[i].id = i;
		lis[i].onmouseover = function(){
			clearInterval(timer);
           changeOption(this.id);
		}
		lis[i].onmouseout = function(){
			timer = setInterval(autoPlay,2000);
		}
	}
	function autoPlay(){
					index++;
					if(index >=lis.length){
				       index = 0;}
				changeOption(index);
			}
	if(timer){
		clearInterval(timer);
		timer = null;
	}
	timer = setInterval(autoPlay,2000);
	function changeOption(curIndex){
		for (var j = 0; j<lis.length;j++) {
					lis[j].className = '';
					divs[j].style.display ="none";
				}
				lis[curIndex].className = "select";
				divs[curIndex].style.display = "block";
				index = curIndex;
			}
		}
