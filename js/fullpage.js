$(document).ready(function() {
            var w = $("body").width();
            var WIDTH = 1150;
            $('#fullpage').fullpage({
                anchros:['main', 'donation','about','foto','news','contacts'],
                menu:'#menu',
                responsiveWidth: WIDTH,


                onLeave: function(index, nextIndex, direction){
		        
               
		            //после покидания раздела 2
		            if(nextIndex == 2 && w>=WIDTH) {
                        
                       
				$('div div#donat').animate({opacity: 0, top: '50%'}, 400, function(){ // пoсле aнимaции
					$(this).css('display', 'none')}); 
		
			           
                        var menu = document.getElementById("menu");
                        var allA = menu.getElementsByTagName("a");
                        for (var i = 0; i < allA.length; i++) {
                            allA[i].style.color = "#000";
                        }

		            }
                    if(index == 2 && w>=WIDTH) {
			        $('div#donat').css('display', 'block')
					.animate({opacity: 1, top: '0%'}, 400);
                        var menu = document.getElementById("menu");
                        var allA = menu.getElementsByTagName("a");
                            for ( var i = 0; i < allA.length; i++) {
                                allA[i].style.color = "#fff";
                        }
		            }
		           
	            }
            });
        });