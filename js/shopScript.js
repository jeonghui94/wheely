$(function () {
    // 슬라이드 배너
    $(".slide li").hide();
    $(".slide li").eq(0).show();

    var t = 0;

    function slide() {
        if (t < 2) {
            t++;
        } else {
            t = 0;
        }

        $(".slide li").fadeOut(1500);
        $(".slide li").eq(t).fadeIn(1500);
    }

    setInterval(slide, 4000);

    // 카운트다운
    (function () {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "12/31/",
            birthday = dayMonth + yyyy;

        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
            birthday = dayMonth + nextYear;
        }
        //end

        const countDown = new Date(birthday).getTime(),
            x = setInterval(function () {
                const now = new Date().getTime(),
                    distance = countDown - now;

                (document.getElementById("days").innerText = Math.floor(
                    distance / day
                )),
                    (document.getElementById("hours").innerText = Math.floor(
                        (distance % day) / hour
                    )),
                    (document.getElementById("minutes").innerText = Math.floor(
                        (distance % hour) / minute
                    )),
                    (document.getElementById("seconds").innerText = Math.floor(
                        (distance % minute) / second
                    ));

                //do something later when date is reached
                if (distance < 0) {
                    document.getElementById("countdown").style.display = "none";
                    document.getElementById("content").style.display = "block";
                    clearInterval(x);
                }
                //seconds
            }, 0);
    })();
});

$(document).on('ready', function () {
    $(".regular").slick({
        centerMode: true,
        centerPadding: '0px',
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,      //자동시작 (boolean) -default:false
        autoplaySpeed: 2000, //자동넘기기 시간(int, 1000ms = 1초)
    });
});