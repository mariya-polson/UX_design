
$(document).ready(function () {
  var small={width: "142px",height: "138px"};
  var large={width: "200px",height: "200px"};
  var filter_bg={filter:"grayscale(1)"};
  var filter={filter:"grayscale(0)"};
  var count=1; 
  $("#button1").on('click',function () { 
    
      $(imgtab1).animate((count==1)?large:small);
      $(imgtab1).css((count==1)?filter:filter_bg);
     
      count = 1-count;
  });
  $("#button2").on('click',function () { 
  
    $(imgtab2).animate((count==1)?large:small);
    $(imgtab2).css((count==1)?filter:filter_bg);
   
    count = 1-count;
});
$("#button3").on('click',function () { 
  
  $(imgtab3).animate((count==1)?large:small);
  $(imgtab3).css((count==1)?filter:filter_bg);
  
  count = 1-count;
});
$("#button4").on('click',function () { 
  
  $(imgtab4).animate((count==1)?large:small);
  $(imgtab4).css((count==1)?filter:filter_bg);
 
  count = 1-count;
});
$("#button5").on('click',function () { 
  
  $(imgtab5).animate((count==1)?large:small);
  $(imgtab5).css((count==1)?filter:filter_bg);
  // $(imgtab).animate((count==1)?margin:margin_org);
  count = 1-count;
});
$("#button6").on('click',function () { 
  
  $(imgtab6).animate((count==1)?large:small);
  $(imgtab6).css((count==1)?filter:filter_bg);

  count = 1-count;
});
});

 
 

$(document).ready(function () {

  $(".center-slider").slick({
    variableWidth: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 500,
    centerPadding: "20px",
    infinite: true,
    autoplay: false,
  });
});

$(document).ready(function () {
  $(".dashboard-slider").slick({
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    speed: 300,
    centerPadding: "20px",
    infinite: true,
    autoplay: false,
    dots: true,
  });
});


