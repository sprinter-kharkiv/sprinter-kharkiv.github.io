/**
 * Created by Zagatskiy on 25.12.15.
 */

$(function(){
    $('#Container').mixItUp({
        controls: {
            enable: true,
            activeClass: 'active'
        },
        animation: {
            enable: true,
            effects:'scale fade',
            duration:700
        }
    });
});


