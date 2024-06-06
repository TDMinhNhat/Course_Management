import personAPI from './api/person.js';

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
        $("#login-notification").addClass("k-hidden");
        $("#username").val("");
        $("#password").val("");
    },
    close: function () {
        $("#login-dialog").addClass("k-hidden");
    },
    actions: [{
        text: "Đăng Nhập",
        primary: true,
        action: async function (e) {
            if($("#username").val() === '' || $("#password").val() === '') { 
                kendo.alert("Tên tài khoản hoặc mật khẩu không được để trống");
                return false;
            }

            const userNameValue = $("#username").val();
            const passwordValue = $("#password").val();

            const response = await personAPI.CheckLogin(userNameValue, passwordValue);
            if(response != null) {
                $("#login span a").html(
                    `<img src="${response.Image == null ? './img/user.png' : response.Image}" style="margin-right: 10px;" width="40px" height="40px">
                    ${response.PerName}`
                ).attr("href", "./html/setting-account.html");
                $("#login").off('click')

                localStorage.setItem("username", JSON.stringify(response));

                return true;
            } else {
                kendo.alert("Đăng nhập thất bại, tên tài khoản hoặc mật khẩu không đúng");
                return false;
            }
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

if(localStorage.getItem("username") != null) {

    const data = JSON.parse(localStorage.getItem("username"));

    $("#login span a").html(
        `<img src="${data.Image == null ? './img/user.png' : data.Image}" style="margin-right: 10px;" width="40px" height="40px">
        ${data.PerName}`
    ).attr("href", "./html/setting-account.html");
    $("#login").off('click')
} else {
    $("#login").on('click', function (index, value) {
        $("#login-dialog").data("kendoDialog").open();
    });
}
