import personAPI from './api/person.js';

$("#register-forgot-tab").kendoTabStrip();

$("#forgot-form").kendoForm({
    size: "large",
    orientation: "horizontal",
    items: [
        { field: "Email", label: "Email:", validation: { required: true, email: true } }
    ],
    submit: (e) => {
        e.preventDefault();
        $("#forgot-form-message")
            .html("<span class='k-text-success' style='font-size:18px;'>A new password has sent to your email! Check your email.</span>")
    }
});

$("#register-form").kendoForm({
    size: "large",
    orientation: "horizontal",
    items: [
        { field: "Username", label: "Họ tên:", validation: { required: true } },
        { field: "AccountName", label: "Tên tài khoản:", validation: { required: true } },
        { field: "EmailRegister", label: "Email:", validation: { required: true, email: true } },
        { field: "Password", label: "Mật khẩu:", validation: { required: true, password: true } },
        { field: "ConfirmPassword", label: "Xác nhận mật khẩu:", validation: { required: true, password: true, match: "Password" } },
        { field: "Phone", label: "Số điện thoại:", validation: { required: true, phone: true } },
        { field: "Sex", editor: "DropDownList", editorOptions: {
            dataTextField: "text",
            dataValueField: "id",
            dataSource: {
                data: [
                    { text: "Nam", id: 1},
                    { text: "Nữ", id: 0}
                ]
            }
        }}
    ],
    submit: (e) => {
        e.preventDefault();

        const data = {
            PerName: $("#Username").val(),
            AccountName: $("#AccountName").val(),
            Email: $("#EmailRegister").val(),
            Password: $("#Password").val(),
            Phone: $("#Phone").val(),
            Sex: $("#Sex").val() === "Nữ" ? true : false
        }

        const result = personAPI.AddPerson(data);
        if(result) {
            $("#register-form-message")
            .html("<span class='k-text-success' style='font-size:18px;'>Đăng ký thành công! Hãy đăng nhập để sử dụng dịch vụ.</span>")
        } else {
            $("#register-form-message")
            .html("<span class='k-text-error' style='font-size:18px;'>Đăng ký thất bại! Hãy thử lại sau.</span>")
        }

    }
})