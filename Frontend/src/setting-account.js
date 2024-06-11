$("#btn-logout").kendoButton({
    click: function (e) {
        if (localStorage.getItem("username") != null) {
            localStorage.removeItem("username");
        }
    }
});