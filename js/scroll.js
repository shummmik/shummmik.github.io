 $(window).bind('resize', function(){ 
        
        if ($("body").width() >= 1150) {
            console.log($("body").width());
            
                $("div.parent").mCustomScrollbar({
                    axis:"x" ,
                theme:"dark-3"
                });
                
        
        }
        else{
            $("div.parent").mCustomScrollbar('destroy');
        }
    }).trigger('resize');