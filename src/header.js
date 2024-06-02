$("header ul").kendoMenu({
    openOnClick: true
})

var userName = $("#username").kendoTextBox({
    placeholder: "Tên tài khoản",
    size: "large",
    rounded: "none",
    fillMode: "flat",
    prefixOptions: {
        template: () => `${kendo.ui.icon("user")}`
    }
}).data("kendoTextBox");

var password = $("#password").kendoTextBox({
    placeholder: "Mật khẩu",
    size: "large",
    rounded: "none",
    fillMode: "flat",
    prefixOptions: {
        template: () => `${kendo.ui.icon("password")}`
    }
}).data("kendoTextBox");

$("#login-save-password input").kendoCheckBox({
    label: "<span style='font-size: 18px; margin-left: 5px;'>Lưu mật khẩu</span>",
    rounded: "large",
    size: "large",
    checked: false,
    encoded: false
});

$("#login-dialog").kendoDialog({
    title: "Đăng Nhập Tài Khoản",
    width: "30%",
    height: "50%",
    content: kendo.template($("#login-dialog #form").html()),
    open: function () {
        $("#login-dialog").removeClass("k-hidden");
    },
    close: function () {
        $("#login-dialog").addClass("k-hidden");
    },
    actions: [{
        text: "Đăng Nhập",
        primary: true,
        action: function (e) {
            if($("#username").val() !== "admin" || $("#password").val() !== "admin") {
                $("#login-notification").text("Tài khoản hoặc mật khẩu của bạn không đúng!");
                return false;
            } 
            return true;
        }
    }, {
        text: "Huỷ Bỏ",
        action: function (e) {
            $("#login-dialog").addClass("k-hidden");
        }
    }],
    animation: {
        open: {
            effects: "fade:in"
        },
        close: {
            effects: "fade:out"
        }
    }
});

$("#login").on('click', function (index, value) {
    $("#login-dialog").data("kendoDialog").open();
});