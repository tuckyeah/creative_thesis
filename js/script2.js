function randomPosition() {
    var h = $(document).height()-10;
    var w = $(document).width()-10;
    
    var newHeight = Math.floor(Math.random() * h);
    var newWidth = Math.floor(Math.random() * w);
    
    return [newHeight, newWidth];
}

function randomSize() {
    return Math.round(Math.random() * 2) + 5;
}
    

$(document).ready(function () {
    
var n = 0;
	$('.fadeIn').hide();
    $(document).on('click', function () {
        console.log("document clicked!");
	//check if all fadeIn elements are visible
        if ($('.section-'+n+' .fadeIn:visible').length === $('.section-'+n+' .fadeIn').length) {
		//if so, fadeOut that section, increment n, fade in first fadeIn of next section   
			$('.section-'+n+':not(:last-child)').fadeOut('slow', function () {
                n=n+1;
                $('.section-'+n).find('.fadeIn:first').fadeIn('slow');
            });
		//if not, fade in next hidden fadeIn element
        } else {
            $('.section-'+n).find('.fadeIn:hidden:first').fadeIn('slow', function() {
                $("html, body").animate({ scrollTop: $("body")[0].scrollHeight}, 1000);
            });
        }
    })
      .click();
    
    $('.delayFade').hide();
	$('.delayFade').each(function(index) {
		$(this).delay(2000*index).fadeIn('slow');
	})    
//hover function
    $('.mouseOver').hover(function() {
        $('.hover').fadeIn('slow');
        });
//star function
        
     var starLimit = 30;
    
    for(var i = 0; i<= starLimit; i++) {
        $('.wrapper').append($('<div/>', {'id' : i, 'class': 'star'}))
    }
    
    $('.star').each(function(index) {
        var newPosition = randomPosition();
        var newSize = randomSize();
        
        $(this).css( {
            'margin-left':newPosition[1]+'px',
            'margin-top':newPosition[0]+'px',
            'width':newSize + 'px',
            'height':newSize + 'px'
        });
        $(this).delay(800*index).fadeIn('slow') 
    });
    
});
