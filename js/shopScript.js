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

        const countDown = new Date(birthday).getTime(),
            x = setInterval(function () {
                const now = new Date().getTime(),
                    distance = countDown - now;

                let d = Math.floor(distance / day);
                let h = Math.floor((distance % day) / hour);
                let m = Math.floor((distance % hour) / minute);
                let s = Math.floor((distance % minute) / second);
                if (d < 10) d = "0" + d;
                if (h < 10) h = "0" + h;
                if (m < 10) m = "0" + m;
                if (s < 10) s = "0" + s;
                $("#days").text(d);
                $("#hours").text(h);
                $("#minutes").text(m);
                $("#seconds").text(s);
            }, 0);
    })();

    // 날짜
    const today = new Date();
    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);
    const dateString = year + "-" + month + "-" + day;
    const minDate = dateString;
    const startDate = dateString;

    const fp_a = flatpickr($("#date-range-start"), {
        minDate,
        defaultDate: startDate,
        locale: "ko",
    });

    const fp_b = flatpickr($("#date-range-end"), {
        minDate,
        defaultDate: startDate,
        locale: "ko",
    });

    // ========================= 셀렉터 타이머 이상한데?? 타이머도 수정해라
    $("#open_select").text($(".cont_select_int > li").eq(0).text());
    $("#open_select, .cont_select_int li").on("click", function (event) {
        selectUpdate(event);
    });

    function selectUpdate(event) {
        const ul = $(".cont_list_select_mate > ul");
        const li = $(".cont_select_int > li");
        const icon = $(".select_icon");
        if (ul[0].offsetHeight == 0) {
            for (var i = 0; i < li.length; i++) {
                if (li.eq(i).text() == $("#open_select").text()) {
                    li.eq(i).addClass("active");
                    break;
                }
            }
            ul.css("height", li.length * li[0].offsetHeight + "px");
            icon.css("transform", "rotate(180deg)");
        } else {
            if ($(event.target).text() != "")
                $("#open_select").text($(event.target).text());
            ul.css("height", "0px");
            icon.css("transform", "rotate(0deg)");
            li.removeClass("active");
        }
    }
    // ========================= 셀렉터 타이머 이상한데?? 타이머도 수정해라
    $("#open_select2").text($(".cont_select_int2 > li").eq(0).text());
    $("#open_select2, .cont_select_int2 li").on("click", function (event) {
        selectUpdate2(event);
    });

    function selectUpdate2(event) {
        const ul = $(".cont_list_select_mate2 > ul");
        const li = $(".cont_select_int2 > li");
        const icon = $(".select_icon2");
        if (ul[0].offsetHeight == 0) {
            for (var i = 0; i < li.length; i++) {
                if (li.eq(i).text() == $("#open_select2").text()) {
                    li.eq(i).addClass("active");
                    break;
                }
            }
            ul.css("height", li.length * li[0].offsetHeight + "px");
            icon.css("transform", "rotate(180deg)");
        } else {
            if ($(event.target).text() != "")
                $("#open_select2").text($(event.target).text());
            ul.css("height", "0px");
            icon.css("transform", "rotate(0deg)");
            li.removeClass("active");
        }
    }

    //슬릭
    $("#slick").slick({
        infinite: true,
        slidesToShow: 3,
        variableWidth: true,
        autoplay: true, //자동시작 (boolean) -default:false
        autoplaySpeed: 2000, //자동넘기기 시간(int, 1000ms = 1초)
        prevArrow: $("#prevArrow"),
        nextArrow: $("#nextArrow"),
    });
});
