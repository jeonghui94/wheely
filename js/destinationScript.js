$(function () {
    // 초기 설정
    function init() {
        $("#land4").css("fill", "#6885c5");
        $("#tab4").css("display", "block");
    }
    init();

    // 이벤트 설정
    $(".land").click(function () {
        mapAndLnbUpdate($(this));
    });

    $(".land_tag>ul>li").click(function () {
        mapAndLnbUpdate($(this));
    });

    // 공통코드
    function mapAndLnbUpdate(obj) {
        const index = obj.index() + 1;

        // 지도 색 변경
        let fillValue;
        switch (index) {
            case 1:
                fillValue = "#ffd25a";
                break;
            case 2:
                fillValue = "#85cdf2";
                break;
            case 3:
                fillValue = "#ff9621";
                break;
            case 4:
                fillValue = "#6885c5";
                break;
            case 5:
                fillValue = "#529b58";
                break;
        }
        $(".land").removeAttr("style");
        $("#land" + index).css("fill", fillValue);

        // lnb(하위 카테고리) 변경
        $(".land_lnb").removeAttr("style");
        $("#tab" + index).css("display", "block");
    }
});
