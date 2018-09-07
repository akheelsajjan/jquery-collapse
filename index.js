$(document).ready(()=>{
    
    $(".para").hide();

    $(".item1").click(function(event){
      $('.para').eq($(this).index()).slideToggle();
      $('.para').not($('.para').eq($(this).index())).slideUp();
    });
  })

