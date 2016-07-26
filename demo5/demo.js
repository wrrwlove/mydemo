window.onload=function(){
  var box=document.getElementById('divselect'),
      title=box.getElementsByTagName('cite')[0],
      menu=box.getElementsByTagName('ul')[0],
      as=box.getElementsByTagName('a'),
        index=-1;
   
    // 点击三角时
    title.onclick=function(event){
      // 执行脚本
      event= event||window.event;
      if(event.stopPropagation){ 
          event.stopPropagation();
          }else
          { event.cancelBubble = true;
          }
      menu.style.display = "block";
    }  
    //在document上绑定keyup事件
   document.onkeyup = function(event){
       event=event||window.event;
       if(event.keyCode == 40){
        index ++;
        if(index >= as.length){
            index = 0;
        }
    }
       if(event.keyCode == 38){
        if(index <=0){
            index = as.length;
        }
        index--;
    }
       if(event.keyCode == 13){
        title.innerHTML = as[index].innerHTML;
        resA();
        index =-1;
        menu.style.display = "none";
    }   
        resA();
        as[index].style.background = "#CCC";
    }
   // 滑过滑过、离开、点击每个选项时
      // 执行脚本
      for(var i=0;i<as.length;i++){
          as[i].num = i;
          as[i].onmouseover = function(){
           resA();
          this.style.background = "#CCC";
          index = as[i].num-1;}
          as[i].onmouseout = function(){
               resA();
          }
          as[i].onclick =function(event){
             event= event||window.event;
               if(event.stopPropagation){ 
          event.stopPropagation();
          }else
          { event.cancelBubble = true;
          }   
              menu.style.display = 'none'; 
              title.innerHTML = this.innerHTML
          }
      }
      function resA(){
           for(var j=0;j<as.length;j++){
               as[j].style.background ="#FFF";
           }
       }
   // 点击页面空白处时
       // 执行脚本
       document.onclick = function(){
        menu.style.display = "none";   
       }
 }
