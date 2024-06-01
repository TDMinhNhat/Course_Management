var slider = $("#slider div").kendoScrollView({
    contentHeight: "100%"
}).data("kendoScrollView");

var index = 0;
setInterval(() => {
    if(index === 5) {
        index = 0;
        slider.scrollTo(0);
        slider.refresh();
    } else {
        slider.next();
        index++;
    }
}, 5000);

