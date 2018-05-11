 var canvas = document.getElementById('cnv');
             var ctx = canvas.getContext("2d");
 

            var img = document.createElement('img');
    	    img.onload = function () {
            ctx.fillStyle = ctx.createPattern(img, 'repeat');
            ctx.font = 'bold 150px sans-serif';
            ctx.fillText("736 500  ₽", 10, 110);
    	};
          img.src = '/pictures/head.jpg';
            