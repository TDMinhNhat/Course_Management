const personAPI = {

    // Get all persons exist in the database
    GetAll: function() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: "https://localhost:44399/api/Person",
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
        )
    },

    // Get personal information of a person by ID
    GetPersonByID: function(id) {
        return new Promise((resolve, reject) => { 
            $.ajax({
                type: "GET",
                url: `https://localhost:44399/api/Person/${id}`,
                dataType: "application/json",
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
            err => 'Something wrong when getting personal'
        );
    },

    // Add account (Register account)
    AddPerson: function(person) {
        return new Promise((resolve, reject) => { 
            $.ajax({
                type: "PUT",
                url: "https://localhost:44399/api/Person",
                dataType: "application/json",
                contentType: "application/json",
                accept: "application/json",
                data: JSON.stringify(person),
                success: function (response) {
                    resolve(response);
                },
                error: function (response) {
                    reject(response);
                }
            });
        }).then(
            success => success,
            err => 'Something wrong when adding personal'
        )
    },

    // Check login with account name (username) and password
    CheckLogin: function(username, password) {
        return new Promise((resolve, reject) => { 
            $.ajax({
                type: "GET",
                url: `https://localhost:44399/api/Person/${username}/${password}`,
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
            err => null
        );
    }
}

export default personAPI;

