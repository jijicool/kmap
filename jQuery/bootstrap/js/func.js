window.onload=function(){
  var $hbtn = $(".hiddenbtn");
  var $topbtn = $(".topbtn");
  var $navbarli = $("ul.nav-tabs").children("li");
  var $trmenu = $("#tblbtn");
  $hbtn.click(function(){
    if($(this).text() == "close"){
      $(this).text("open");
      // $hbtn.next().next().css("border", "5px solid #000");
      // $(this).parent().next().addClass("close-contents");
      $(this).parent().next().slideUp("slow");
    }else{
      $(this).text("close");
      // $(this).parent().next().removeClass("close-contents");
      $(this).parent().next().slideDown("slow");
    }
  });
  $topbtn.click(function(){
    window.scrollTo(0,0);
    console.log($("#test11").attr("class"));
  });
  $navbarli.click(function(){
    console.log($(this).html());
    $navbarli.removeClass("active");
    $(this).addClass("active");
  });
  $('body').scrollspy({
    target: '.starter-template'
  });
  $trmenu.click(function(){
    console.log('222');
  });
  // $(".tblbtn").click(function(){
  //   $(this).parent().parent().nextAll().css("display", "none");
  // });

}
function trOnOff(){
  $(".tblbtn").click(function(){
    if($(this).text() == "닫기"){
      $(this).text("열기");
      $(this).parent().parent().nextAll().css("display", "none");
    } else {
      $(this).text("닫기");
      $(this).parent().parent().nextAll().css("display", "");
    }
  });
}
