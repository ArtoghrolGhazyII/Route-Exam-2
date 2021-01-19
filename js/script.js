$("#btnopen").click(function() {
    $("#main").animate({ left: "0" }, 500);
    $("#btnclose").css("display", "block");
    $("#btnopen").css("display", "none");



})




$("#btnclose").click(function() {
    $("#main").animate({ left: "-250" }, 500);
    $("#btnclose").css("display", "none")
    $("#btnopen").css("display", "block")
})