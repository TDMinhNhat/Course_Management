const enrollCouseAPI = {

    //Get all enrolls course
    GetAll: function() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: "https://localhost:44399/api/EnrollCourse",
                accept: "application/json",
                contentType: "application/json",
                success: (message) => {
                    resolve(message);
                },
                error: (message) => {
                    reject(message);
                }
            });
        }).then(
            success => success,
            err => 'Something wrong when getting all enrolls course'
        )
    },

    //Get the enroll course by ID
    GetByID: function() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: `https://localhost:44399/api/EnrollCourse/${ID}`,
                accept: "application/json",
                contentType: "application/json",
                success: (message) => {
                    resolve(message);
                },
                error: (message) => {
                    reject(message);
                }
            });
        }).then(
            success => success,
            err => 'Something wrong when getting the enroll course by ID'
        )
    },

    //Add a enroll course
    AddEnrollCourse: function(enrollCourse) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "PUT",
                url: "https://localhost:44399/api/EnrollCourse",
                data: JSON.stringify(enrollCourse),
                dataType: "application/json",
                contentType: "application/json",
                accept: "application/json",
                success: (message) => {
                    resolve(message);
                },
                error: (message) => {
                    reject(message);
                }
            });
        }).then(
            success => success,
            err => 'Something wrong when adding the enroll course'
        )
    }
}

export default enrollCouseAPI;