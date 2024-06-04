
const courseAPI = {

    // Get all courses
    GetCourses: function() {
        return new Promise((resolve, reject) => { 
            $.ajax({
                type: "GET",
                url: "https://localhost:44399/api/Course",
                accept: "application/json",
                contentType: "application/json",
                success: function (response) {
                    resolve(response);
                },
                error: function (response) {
                    reject(response);
                }
            });
        }).then(
            success => success,
            err => 'Something wrong when getting all courses'
        );
    },

    // Get course by ID
    GetByID: function(ID) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: `https://localhost:44399/api/Course/${ID}`,
                accept: "application/json",
                dataType: "application/json",
                success: function (response) {
                    resolve(response);
                },
                error: function (response) {
                    reject(response);
                }
            });
        }).then(
            success => success,
            err => 'Something wrong when get the course by ID'
        );
    },

    AddCourse: function(course) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "PUT",
                url: "https://localhost:44399/api/Course",
                data: JSON.stringify(course),
                dataType: "application/json",
                contentType: "application/json",
                accept: "application/json",
                success: function (response) {
                    resolve(response);
                },
                error: function (response) {
                    reject(response);
                }
            });
        }).then(
            success => success,
            err => 'Something wrong when adding course'
        )
    }
}

export default courseAPI;