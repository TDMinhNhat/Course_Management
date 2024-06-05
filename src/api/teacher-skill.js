const teacherSkillAPI = {

    //Get all teacher-skills
    GetAll: function() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: "https://localhost:44399/api/TeacherSkill",
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
            err => err
        );
    },

    //Get Skill By ID
    GetByID: function(id) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: `https://localhost:44399/api/TeacherSkill/${id}`,
                dataType: "application/json",
                contentType: "application/json",
                success: (message) => {
                    resolve(message)
                },
                error: (message) => {
                    reject(message)
                }
            });
        }).then(
            success => success,
            err => 'Something went wrong when getting the skill by id'
        )
    }
}