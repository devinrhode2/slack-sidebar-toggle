!function() {
    function e() {
        function e(e) {
            var n = e ? "block" : "none", t = e ? "220px" : 0;
            $("#col_channels_bg, #col_channels").css("display", n), $("#messages_container").css("margin-left", t),
            $(".channel_header").css("margin-left", t), $("#team_menu").css("display", n), $("#footer").css("left", t),
            $(window).trigger("resize");
        }
        var n = "sidebar_visible";
        $(window).on("keypress", function(a) {
            a.metaKey && 98 == a.charCode && (t = "true" == window.localStorage.getItem(n),
            e(!t), window.localStorage.setItem(n, !t));
        });
        var t = window.localStorage.getItem(n);
        if ("false" == t) {
            var a = $("div#loading-zone");
            a.css("left", 0), a.css("padding-left", "220px"), e(!1);
        }
    }
    var n = document.createElement("style");
    n.innerHTML = ".channel_header_refresh #client_body:not(.onboarding):before { left: 0 }",
    document.head.appendChild(n);
    var t = document.createElement("script");
    t.type = "text/javascript", t.innerHTML = "(" + e + ")();", document.body.appendChild(t);

    //min-width is 768px by default - this makes it so messages continue to fit on the screen as you make it smaller
    document.body.style.minWidth = '150px';
}();
