require(
    ["./component/comp", "less!style/style.less"],
function() {
    document.getElementsByTagName("body")[0].innerHTML = '<div class="some-background">Play</div>';
});