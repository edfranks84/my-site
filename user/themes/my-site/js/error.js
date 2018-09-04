$(document).ready(function() {
    for (var i = 0; i < 100; i++) {
        var star = '<div class="star" style="animation: twinkle ' + ((Math.random() * 5) + 4) + 's linear ' + ((Math.random() * 5) + 4) + 's infinite; top: ' + Math.random() * $(window).height() + 'px; left: ' + Math.random() * $(window).width() + 'px;"></div>';
        $('.stars').append(star);
    }

});