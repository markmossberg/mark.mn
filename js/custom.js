$(document).ready(function(){

    // 0: main -> projects
    // 1: projects -> main
    var state = 0;

    $('.transition').click(function(){
        var $mcbl = $('.mcb-left');
        var $mcbr = $('.mcb-right');
        var mcblRight = 0;
        var mcblLeft = 0;
        var mcbrRight = 0;
        var mcbrLeft = 0;
        var speed = 400 * 1.5;

        // calculate dimensions
        if (parseInt($mcbl.css('marginRight'),10) == 0) {
            mcblRight = $mcbl.outerWidth();
            mcblLeft = -mcblRight;
            mcbrRight = $mcbr.outerWidth();
            mcbrLeft = -mcblRight;
            state = 0;
        } else {
            mcblRight = 0;
            mcblLeft = 0;
            mcbrRight = 0;
            mcbrLeft = 0;
            state = 1;
        }

        // animate left div
        $mcbl.animate({
            marginRight: mcblRight,
            marginLeft: mcblLeft
        }, speed
        );

        // animate right div
        if (state == 0) {
            $mcbr.animate({
                marginRight: mcbrRight,
                marginLeft: mcbrLeft,
                opacity: 1,
                'width': '59%'
            }, speed
            );
        } else if (state == 1) {
            $mcbr.animate({
                marginRight: mcbrRight,
                marginLeft: mcbrLeft,
                'width': '40%',
                opacity: 0
            }, speed
            );

        }

        currentState = 1;

    });
});
