console.log("loaded...");

$(document).ready(function (){

    colors = ['#FFB30C', '#58EC00', '#0087EC', '#EEEEEE', '#FF5A00' ]
    var i = 0;
    animate_loop = function() {
            $('body').animate({backgroundColor:colors[(i++)%colors.length]
            }, 500, function(){
                        animate_loop();
            });
    }
    animate_loop();

});

