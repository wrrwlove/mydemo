$( window ).on( "load", function(){
   // 调用waterfall函数
   waterfall();
    var dataInt={'data':[{'src':'http://img1.imgtn.bdimg.com/it/u=2048246522,1244394203&fm=206&gp=0.jpg'},
    {'src':'http://img1.imgtn.bdimg.com/it/u=2472185283,1922689262&fm=206&gp=0.jpg'},
    {'src':'http://img0.imgtn.bdimg.com/it/u=843367682,2268608128&fm=206&gp=0.jpg'},
    {'src':'http://img2.imgtn.bdimg.com/it/u=451523955,1115502761&fm=206&gp=0.jpg'}]};
    window.onscroll=function(){
       // 拖动滚动条时
       if(checkscrollside()){
            $.each(dataInt.data, function(index, item){
          var $oBox = $('<div>').addClass('box').appendTo($("#main"));
          var $oPic = $('<div>').addClass('pic').appendTo($oBox);
          $('<img>').attr('src',$(item).attr('src')).appendTo($oPic);
        });
       waterfall();
       }
     }
});
function waterfall(){
 // 计算及定位数据块显示分散效果
    var boxes=$(".box");
    var parent=$("#main");
    var boxesW=boxes.eq(0).outerWidth();
    var windowW=$(window).width();
    var cols=Math.floor(windowW/boxesW);
    parent.css({
        "width":cols*boxesW+"px",
        "margin":"0 auto"
    });
    
    var boxH=[];
    boxes.each(function(index,item){
        if(index<cols){
            boxH[index]=boxes.eq(index).outerHeight();
        }else{
            var minH=Math.min.apply(null,boxH);
            var minIndex=$.inArray(minH,boxH);
            $(item).css({
                "position":"absolute",
                "top":minH+"px",
                "left":minIndex*boxesW+"px",
            });
            boxH[minIndex]+=boxes.eq(index).outerHeight();
        }
    })
}


function checkscrollside(){
  // 检测是否具备了加载数据块的条件
  var parent=$("#main");
  var boxes=$(".box");
  var lastH=boxes.last().offset().top+Math.floor(boxes.last().outerHeight()/2);
  var scrollH=$(window).scrollTop()+$(window).height();
  return (lastH<scrollH)?true:false;
}
