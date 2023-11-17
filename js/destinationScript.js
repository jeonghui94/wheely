$('#world_map_svg .land').click(function(){
    $('.land').removeClass('on');
    $('.land'+idx).addClass('on');
    var idx=$(this).index()+1;
  
    $('.land_lnb').css('display','none');
    $('.land_lnb'+idx).css('display','block');
    
  });