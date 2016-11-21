var $hbtn = $(".hiddenbtn");
var glyClose = "glyphicon glyphicon-folder-close";
var glyOpen = "glyphicon glyphicon-folder-open";
$hbtn.click(function(){
  if($(this).text() == "close"){
    $(this).text("open");
    // $hbtn.next().next().css("border", "5px solid #000");
    $(this).parent().next().addClass("close-contents");
  }else{
    $(this).text("close");
    $(this).parent().next().removeClass("close-contents");
  }
})
