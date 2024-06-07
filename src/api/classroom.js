
const classroomAPI = {

    //Get all classrooms
    GetAll: function() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: "https://localhost:44399/api/ClassRoom",
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
            err => 'Something wrong when getting all classrooms'
        )
    },

    //Get the classroom by ID
    GetByID: function() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: `https://localhost:44399/api/ClassRoom/${ID}`,
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
            err => 'Something wrong when getting the classroom by ID'
        )
    },

    //Add a classroom
    AddClassRoom: function(classroom) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "PUT",
                url: "https://localhost:44399/api/ClassRoom",
                data: JSON.stringify(classroom),
                dataType: "application/json",
                accept: "application/json",
                contentType: "application/json",
                success: (message) => {
                    resolve(message);
                },
                error: (message) => {
                    reject(message);
                }
            }).then(
                success => {
                    console.log(success);
                    return true;
                },
                err => {
                    console.error(err);
                    return false;
                }
            );
        })
    }
}

export default classroomAPI;