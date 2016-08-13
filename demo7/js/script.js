window.onload=function(){
     waterfall('main','box');
     var dataInt={"data":[{"src":"http://pic41.nipic.com/20140519/18505720_094832590165_2.jpg"},
     {"src":"http://pic22.nipic.com/20120625/668573_141440246166_2.jpg"},
     {"src":"http://img1.3lian.com/2015/w7/90/d/1.jpg"},
     {"src":"http://img0.imgtn.bdimg.com/it/u=187109100,2571517926&fm=206&gp=0.jpg"},
     {"src":"http://pic4.nipic.com/20091021/3367900_230839016417_2.jpg"}]}
     window.onscroll=function(){
      if(checkScrollSlide){
        var oParent=document.getElementById('main');
        //将数据块渲染到页面的尾部
        for(var i=0;i<dataInt.data.length;i++){
          var oBox=document.createElement("div");
          oBox.className="box";
          oParent.appendChild(oBox);
          var oPic=document.createElement("div");
          oPic.className="pic";
          oBox.appendChild(oPic);
          var oImg=document.createElement("img");
          oImg.src=dataInt.data[i].src;
          oPic.appendChild(oImg);
        }
        waterfall('main','box');
      }
     }
}
function waterfall(parent,box){
  var oParent=document.getElementById(parent);
  var oBoxs=getByClass(oParent,box);
  //计算整个页面显示的裂数（页面宽/box的宽）
  var box=oBoxs[0].offsetWidth;
  var cols=Math.floor(document.documentElement.clientWidth/box);
  //设置main的宽度
  oParent.style.cssText="width:"+box*cols+"px;margin:0 auto";
  var hArr=new Array();
for(var i=0;i<oBoxs.length;i++){
    if(i<cols){
       // 将图片的高度值添加到数组中
       hArr.push(oBoxs[i].offsetHeight);
       console.log(oBoxs[i].offsetHeight);      
    }else{
      // 求最小值和最小值的索引
      var minH=Math.min.apply(null,hArr);
      var index=getMinhIndex(hArr,minH);
// 计算及定义图片出现的位置
      oBoxs[i].style.position='absolute';
      oBoxs[i].style.top=minH+'px';
      oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
      // 改变数组值
     hArr[index]+=oBoxs[i].offsetHeight;
    }
  }
}
// 求值在数组中的索引,arr接收的是数组，val接收的是判断的值

function getMinhIndex(arr,val){  //求索引
    for(var i in arr){
    if(arr[i]==val){
      return i;
    }
  }
}
//根据class获取元素
function getByClass(parent,clsName){
  var boxArr=new Array(), 
      oElements=parent.getElementsByTagName('*');
  for(var i=0;i<oElements.length;i++){
    if(oElements[i].className==clsName){
      boxArr.push(oElements[i]);
    }
  }
  return boxArr;
}
//检测是否具备加载数据块的条件
function checkScrollSlide(){
     var oParent=document.getElementById('main');
     var oBoxs=getByClass(oParent,'box');
     var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
     var scrolltop=document.body.scrollTop||document.documentElement.scrollTop;
     var height=document.body.clientHeight||document.documentElement.clientHeight;
     return (lastBoxH<scrollTop+height)?true:false;
}
