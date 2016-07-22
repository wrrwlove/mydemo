window.onload = function change(){
	var btn1 = document.getElementById('btn1');
	var btn2 = document.getElementById('btn2');
	var imgs = document.getElementsByTagName('img');
	btn1.onclick = function(){
		btn1.className = "list-on";
		btn2.className = "card-off";
	for(var i = 0;i < imgs.length;i++){
		imgs[i].src="http://www.qqpk.cn/Article/UploadFiles/201205/20120530091618199.jpg";
		imgs[i].parentNode.className = 'list';
	}
}
    btn2.onclick = function(){
		btn1.className = "list-off";
		btn2.className = "card-on";
	for(var i = 0;i < imgs.length;i++){
		imgs[i].src="http://www.qqpk.cn/Article/UploadFiles/201205/20120530091618199.jpg";
		imgs[i].parentNode.className = 'card';
	}
}
}
