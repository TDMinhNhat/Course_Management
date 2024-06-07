import courseAPI from '../src/api/course.js';
import categoryAPI from '../src/api/category.js';
import personAPI from '../src/api/person.js';
import classroomAPI from '../src/api/classroom.js'

$("#tab-management").kendoTabStrip();

/**
 * Fetch API Get Datas
 */
// --- Person
async function getDataPerson() {
    return $.map(await personAPI.GetAll(), function (item, index) {
        return {
            PerID: item.PerID,
            PerName: item.PerName,
            PerEmail: item.Email,
            PerRole: item.Role,
            PerStatus: item.Status
        }
    });
}

// --- Category
async function getDataCategories() {
    return $.map(await categoryAPI.GetAll(), function (item, index) {
        return {
            CateID: item.CateID,
            CateName: item.CateName,
            CateParent: item.CateParent
        }
    })
}

// --- Course
async function getDataCourses() {
    return $.map(await courseAPI.GetAll(), function (item, index) {
        return {
            CourseID: item.CourseID,
            CourseName: item.CourseName,
            CourseDescription: item.CourseDescription,
            DateCreated: item.DateCreated
        };
    });
}

// --- Course Scheduled
async function getDataCourseScheduled() {
    return $.map(await classroomAPI.GetAll(), function (item, index) {
        return {
            ClassID: item.ClassID,
            ClassDescription: item.ClassDescription,
            TypeStudy: item.TypeStudy,
            DateStarted: item.DateStarted,
            DateEnded: item.DateEnded,
            MaxStudent: item.MaxStudent,
            CourseID: item.CourseID,
            TeacherID: item.TeacherID,
            ClassStatus: item.ClassStatus
        }
    })
}

// Control Area
// -- Person
var btnRemovePerson = $("#control-area #btn-remove-person").kendoButton({
    icon: "minus",
    rounded: "none",
    size: "large",
    themeColor: "error",
    fillMode: "solid",
    click: function () {

    }
}).data('kendoButton');
btnRemovePerson.enable(false);

// -- Category
var dialogAddCategory = $("#dialog-add-category").kendoDialog({
    title: "Thêm Danh Mục",
    width: "600px",
    content: kendo.template($("#dialog-add-category").html()),
    animation: {
        open: {
            effects: "fade:in"
        },
        close: {
            effects: "fade:out"
        }
    }
}).data('kendoDialog');

$("#control-area #btn-add-category").kendoButton({
    icon: "plus",
    rounded: "none",
    size: "large",
    themeColor: "success",
    fillMode: "solid",
    click: function () {
        dialogAddCategory.open();
        $("#dialog-add-category").removeClass('k-hidden')
    }
})
var btnRemoveCategory = $("#control-area #btn-remove-category").kendoButton({
    icon: "minus",
    rounded: "none",
    size: "large",
    themeColor: "error",
    fillMode: "solid",
    click: function () {

    }
}).data('kendoButton');
btnRemoveCategory.enable(false);

$("#dialog-add-category form").kendoForm({
    size: "large",
    orientation: "horizontal",
    validatable: {
        validateOnBlur: true,
    },
    items: [
        { field: "CateID", label: "Mã Danh Mục:", hint: "VD: 01", validation: { required: true } },
        { field: "CateName", label: "Tên Danh Mục:", hint: "VD: Lập trình", validation: { required: true } },
        {
            field: "CateParent", 
            label: "Danh Mục Cha:", 
            editor: "DropDownList", 
            editorOptions: {
                dataTextField: "CateName",
                dataValueField: "CateID",
                dataSource: await getDataCategories().then(data => data.map(item => { return {
                    CateID: item.CateID,
                    CateName: `${item.CateID} - ${item.CateName}`
                }}))
            }
        }
    ],
    submit: function(e) {
        e.preventDefault();

        const data = {
            CateID: $("#CateID").val(),
            CateName: $("#CateName").val(),
            CateParent: $("#CateParent").val(),
        }

        console.log(data);
    }
})

// -- Course
var dialogAddCourse = $("#dialog-add-course").kendoDialog({
    title: "Thêm Môn Học",
    width: "600px",
    content: kendo.template($("#dialog-add-course").html()),
    animation: {
        open: {
            effects: "fade:in"
        },
        close: {
            effects: "fade:out"
        }
    }
}).data('kendoDialog');

$("#control-area #btn-add-course").kendoButton({
    icon: "plus",
    rounded: "none",
    size: "large",
    themeColor: "success",
    fillMode: "solid",
    click: function () {
        dialogAddCourse.open();
        $("#dialog-add-course").removeClass('k-hidden')
    }
})
var btnRemoveCourse = $("#control-area #btn-remove-course").kendoButton({
    icon: "minus",
    rounded: "none",
    size: "large",
    themeColor: "error",
    fillMode: "solid",
    click: function () {

    }
}).data('kendoButton');
btnRemoveCourse.enable(false);

$("#dialog-add-course form").kendoForm({
    size: "large",
    orientation: "horizontal",
    validatable: {
        validateOnBlur: true,
    },
    items: [
        { field: "CourseID", label: "Mã Môn Học:", hint: "VD: 2406071001", validation: { required: true } },
        { field: "CourseName", label: "Tên Môn Học:", hint: "VD: Lập trình ABC", validation: { required: true } },
        {
            field: "CateIDChoose", 
            label: "Loại Danh Mục:", 
            editor: "DropDownList", 
            editorOptions: {
                dataTextField: "CateName",
                dataValueField: "CateID",
                dataSource: await getDataCategories().then(data => data.map(item => {
                    return {
                        CateID: item.CateID,
                        CateName: `${item.CateID} - ${item.CateName}`
                    }
                }))
            }
        },
        { field: "Image", label: "Ảnh", hint: 'VD: C:\\.. hoặc https:\\...', validation: { required: false }},
        { 
            field: "CourseDescription", 
            label: "Mô Tả:", 
            editor: "TextArea", 
            editorOptions: {
                size: "large",
                placeholder: "VD: Nhập mô tả cho môn học...",
                rows: 4
            },
            validation: { required: false }
        }
    ],
    submit: function(e) {
        e.preventDefault();

        const data = {
            CourseID: $("#CourseID").val(),
            CourseName: $("#CourseName").val(),
            CourseDescription: $("#CourseDescription").val(),
            CateID: $("#CateIDChoose").val(),
            DateCreated: new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date()),
            DateModifier: new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date()),
            Image: $("#Image").val()
        }

        console.log(data);
    }
})

// -- Course Scheduled
var dialogAddCourseScheduled = $("#dialog-add-scheduled").kendoDialog({
    title: "Thêm Khoá Học",
    width: "600px",
    height: "800px",
    content: kendo.template($("#dialog-add-scheduled").html()),
    animation: {
        open: {
            effects: "fade:in"
        },
        close: {
            effects: "fade:out"
        }
    }
}).data('kendoDialog');

$("#control-area #btn-add-scheduled").kendoButton({
    icon: "plus",
    rounded: "none",
    size: "large",
    themeColor: "success",
    fillMode: "solid",
    click: function () {
        dialogAddCourseScheduled.open();
        $("#dialog-add-scheduled").removeClass('k-hidden')
    }
})
var btnRemoveCourse = $("#control-area #btn-remove-scheduled").kendoButton({
    icon: "minus",
    rounded: "none",
    size: "large",
    themeColor: "error",
    fillMode: "solid",
    click: function () {

    }
}).data('kendoButton');
btnRemoveCourse.enable(false);

$("#dialog-add-scheduled form").kendoForm({
    size: "large",
    orientation: "horizontal",
    validatable: {
        validateOnBlur: true,
    },
    items: [
        { field: "ClassID", label: "Mã Lớp Học:", hint: "VD: 2406071001", validation: { required: true } },
        { 
            field: "TypeStudy", 
            label: "Hình Thức Học", 
            editor: "DropDownList", 
            editorOptions: { 
                dataTextField: "text", 
                dataValueField: "id", 
                dataSource: [
                    { text: "Offline", id: "offline" },
                    { text: "Online", id: "online" }
                ] 
            }
        },
        { field: "DateStarted", label: "Ngày Bắt Đầu:", hint: "VD: 01/01/2021", validation: { required: true }},
        { field: "DateEnded", label: "Ngày Kết Thúc:", hint: "VD: 01/01/2021", validation: { required: true }},
        { field: "MaxStudent", label: "Số Lượng Tối Đa:", hint: "VD: 50", validation: { required: true }},
        { field: "CourseIDReference", label: "Mã Khoá Học:", hint: "VD: 2406071001", validation: { required: true }},
        { field: "TeacherID", label: "Mã Giáo Viên:", hint: "VD: 2406071001", validation: { required: true }},
        { 
            field: "ClassDescription", 
            label: "Mô Tả:", 
            editor: "TextArea", 
            editorOptions: {
                size: "large",
                placeholder: "VD: Nhập mô tả cho lớp học...",
                rows: 4
            },
            validation: { required: false }
        }
    ],
    submit: function(e) {
        e.preventDefault();

        const data = {
            ClassID: $("#ClassID").val(),
            TypeStudy: $("#TypeStudy").val(),
            DateStarted: new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format($("#DateStarted").val()),
            DateEnded: new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format($("#DateEnded").val()),
            MaxStudent: $("#MaxStudent").val(),
            CourseID: $("#CourseIDReference").val(),
            TeacherID: $("#TeacherID").val(),
            ClassDescription: $("#ClassDescription").val(),
        }

        console.log(data);
    }
})

// Table Area
// -- Person
$("#table-person").kendoGrid({
    height: "800px",
    columns: [
        { field: "PerID", title: "Mã Người Dùng", width: "15%" },
        { field: "PerName", title: "Tên Người Dùng", width: "30%" },
        { field: "PerEmail", title: "Email", width: "30%" },
        { field: "PerRole", title: "Vai Trò", width: "15%" },
        { field: "PerStatus", title: "Trạng Thái", width: "10%" }
    ],
    filterable: true,
    sortable: true,
    toolbar: ["search"],
    search: {
        fields: ["PerID", "PerName", "PerEmail"]
    },
    pageable: {
        refresh: true,
        pageSizes: true,
        buttonCount: 3
    },
    scrollable: true,
    sortable: {
        mode: "multiple"
    },
    dataSource: {
        data: await getDataPerson(),
        schema: {
            model: {
                id: "PerID",
                fields: {
                    PerID: { type: "string", editable: false },
                    PerName: { type: "string", editable: false },
                    PerEmail: { type: "string", editable: false },
                    PerRole: { type: "string", editable: false },
                    PerStatus: { type: "string", editable: false }
                }
            }
        },
        pageSize: 10
    },
    change: function (e) {
        var selectedRows = this.select();
        btnRemovePerson.enable(selectedRows.length > 0);
    }

})

// -- Category
$("#table-category").kendoGrid({
    height: "800px",
    columns:[
        { field: "CateID", title: "Mã Danh Mục", width: "15%" },
        { field: "CateName", title: "Tên Danh Mục", width: "70%" },
        { field: "CateParent", title: "Danh Mục Cha", width: "15%" }
    ],
    filterable: true,
    sortable: true,
    toolbar: ["search"],
    search: {
        fields: ["CateID", "CateName"]
    },
    scrollable: true,
    sortable: {
        mode: "multiple"
    },
    pageable: {
        refresh: true,
        pageSizes: true,
        buttonCount: 3
    },
    dataSource: {
        data: await getDataCategories(),
        schema: {
            model: {
                id: "CateID",
                fields: {
                    CateID: { type: "string", editable: false },
                    CateName: { type: "string", editable: false },
                    CateParent: { type: "string", editable: false },
                }
            }
        }
    },
    change: function (e) {
        var selectedRows = this.select();
        btnRemoveCourse.enable(selectedRows.length > 0);
    }
})

// -- Course
$("#table-course").kendoGrid({
    height: "800px",
    columns: [
        { field: "ID", title: "Mã Môn Học", width: "15%" },
        { field: "Name", title: "Tên Môn Học", width: "30%" },
        { field: "Description", title: "Mô Tả Môn Học", width: "40%" },
        { field: "Date", title: "Ngày Thêm", width: "15%", format: "{dd/MM/yyyy}" }
    ],
    filterable: true,
    sortable: true,
    toolbar: ["search"],
    search: {
        fields: ["ID", "Name"]
    },
    scrollable: true,
    sortable: {
        mode: "multiple"
    },
    selectable: "row",
    dataSource: {
        data: await getDataCourses(),
        schema: {
            model: {
                id: "ID",
                fields: {
                    ID: { type: "string", editable: false },
                    Name: { type: "string", editable: false },
                    Description: { type: "string", editable: false },
                    Date: { type: "date", editable: false }
                }
            }
        }
    },
    change: function (e) {
        var selectedRows = this.select();
        btnRemoveCourse.enable(selectedRows.length > 0);
    }
})

// -- Course Scheduled
$("#table-scheduled").kendoGrid({
    height: "800px",
    columns: [
        { field: "ClassID", title: "Mã Lớp Học", width: "15%" },
        { field: "TypeStudy", title: "Hình Thức Học", width: "15%" },
        { field: "DateStarted", title: "Ngày Bắt Đầu", width: "15%", format: "{dd/MM/yyyy}" },
        { field: "DateEnded", title: "Ngày Kết Thúc", width: "15%", format: "{dd/MM/yyyy}" }
    ],
    filterable: true,
    sortable: true,
    toolbar: ["search"],
    search: {
        fields: ["ClassID", "TypeStudy"]
    },
    scrollable: true,
    sortable: {
        mode: "multiple"
    },
    selectable: "row",
    pageable: {
        refresh: true,
        pageSizes: true,
        buttonCount: 3
    },
    dataSource: {
        data: await getDataCourseScheduled(),
        schema: {
            model: {
                id: "ClassID",
                fields: {
                    ClassID: { type: "string", editable: false },
                    TypeStudy: { type: "string", editable: false },
                    DateStarted: { type: "date", editable: false },
                    DateEnded: { type: "date", editable: false }
                }
            }
        }
    },
    change: function (e) {
        var selectedRows = this.select();
        btnRemoveCourse.enable(selectedRows.length > 0);
    }
})