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