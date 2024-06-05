const skillAPI = {

    //Get all skills
    GetAll: function() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: "https://localhost:44399/api/Skill",
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
            err => 'Something wrong when getting all skills'
        )
    },

    GetByID: function(id) { 
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: `https://localhost:44399/api/Skill/${id}`,
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
            err => 'Something wrong when getting skill by id'
        )
    },

    // Add a new skill
    AddSkill: function(skill) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "PUT",
                url: "https://localhost:44399/api/Skill",
                data: JSON.stringify(skill),
                dataType: "application/json",
                contentType: "application/json",
                accept: "application/json",
                success: (message) => {
                    resolve(message)
                },
                error: (message) => {
                    reject(message)
                }
            }).then(
                success => success,
                err => 'Something wrong when adding skill'
            );
        })
    }
}