(function () {
    var thumbs = document.getElementsByClassName("thumbs")[0].getElementsByTagName("li");
    var control_tab = document.getElementById("control_tab");
    var banner = document.getElementsByClassName("banner_bg")[0];
    var timer_interval, timer_interval1, timer_timeout, timer_timeout1, timer_i;

    thumbs[0].onmouseover = function () {
        start_Mover(0, control_tab, 1);
        start_Mover1(0, banner, 2);
    }

    thumbs[1].onmouseover = function () {
        start_Mover(60, control_tab, 1);
        start_Mover1(-160, banner, 2);
    }

    thumbs[2].onmouseover = function () {
        start_Mover(117, control_tab, 1);
        start_Mover1(-320, banner, 2);
    }

    timer_i = setInterval(autoShow_tab, 4000);


    function autoShow_tab() {
        if (control_tab.offsetTop == 0) {

            timer_timeout = setTimeout(function () {
                start_Mover(60, control_tab, 1);
            }, 3000)

            timer_timeout1 = setTimeout(function () {
                start_Mover1(-160, banner, 2);
            }, 3000)
        }
        else if (control_tab.offsetTop == 60) {

            timer_timeout = setTimeout(function () {
                start_Mover(117, control_tab, 1);
            }, 3000)

            timer_timeout1 = setTimeout(function () {
                start_Mover1(-320, banner, 2);
            }, 3000)
        }

        else if (control_tab.offsetTop >= 117) {

            timer_timeout = setTimeout(function () {
                start_Mover(0, control_tab, 1);
            }, 3000)

            timer_timeout1 = setTimeout(function () {
                start_Mover1(0, banner, 2);
            }, 3000)
        }
    }

    function start_Mover(destination, target, speed) {
        clearInterval(timer_interval);


        if (target.offsetTop > destination) {
            speed = -speed;
        }
        else {
            speed = speed;
        }


        timer_interval = setInterval(function () {


            if (target.offsetTop == destination) {

                clearInterval(timer_interval);

            }
            else {
                target.style.top = target.offsetTop + speed + "px";

            }
        }, 3);
    }

    function start_Mover1(destination, target, speed) {
        clearInterval(timer_interval1);


        if (target.offsetTop > destination) {
            speed = -speed;
        }
        else {
            speed = speed;
        }


        timer_interval1 = setInterval(function () {


            if (target.offsetTop == destination) {

                clearInterval(timer_interval1);

            }
            else {
                target.style.top = target.offsetTop + speed + "px";

            }
        }, 3);
    }
})();
