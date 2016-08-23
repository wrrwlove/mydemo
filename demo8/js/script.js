
        $(document).ready(function () {
            $(window).scroll(function () {
                var top = $(document).scrollTop();//获取当前位置
                var menu = $("#menu");
                var items = $("#content").find(".item");

// 请补充此处代码，让导航菜单实现在滚动条滚动的时候自动设置焦点
                var currentId = "";//当前所在楼层ID（item)
                items.each(function(){//当前位置和每个楼层的位置比较
                    var m = $(this);
                    var itemTop = m.offset().top;
                    if(top > itemTop - 200){
                        currentId = "#" + m.attr("id");//判断当前所在楼层
                    } else {
                        return false;
                    }
                })
 
                var currentLink = menu.find(".current");//找到带有current属性的链接
                if(currentId && currentLink.attr("href") != currentId){//如果currentId为空或链接位置已经是当前楼层则不执行
                    currentLink.removeClass("current");//删除带有current属性的链接的current属性
                    menu.find("[href=" + currentId + "]").addClass("current")//为当前楼层的链接添加current属性
                }
 
            });

        });
