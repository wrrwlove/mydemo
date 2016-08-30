$('#search_input').bind('keyup',function(){
  var searchText = $('#search_input').val();
  $.get('http://api.bing.com/qsonhs.aspx?q='+searchText,function(d){
    var d=d.AS.Results[0].Suggests;
    var html='';
    for(var i=0;i<d.length;i++){
      html+='<li>'+d[i].Txt+'</li>';
    }
    $('#search-result').html(html);
    $('#search-suggest').css({
      top:$('#search-form').offset().top+$('#search-form').height()+10,
      left:$('#search-form').offset().left,
      position:'absolute',
    }).show();
  },'json');
  $(document).bind('click',function(){
    $('#search-suggest').hide();
  });
})
