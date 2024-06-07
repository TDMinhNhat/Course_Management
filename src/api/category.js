const categoryAPI = {

    //Get all categories
    GetAll: function() {
        return new Promise((resolve, reject) => { 
            $.ajax({
                type: "GET",
                url: "https://localhost:44399/api/Category",
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
            err => 'Something wrong when getting all categories'
        );
    },

    //Get the category by ID
    GetByID: function(ID) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: `https://localhost:44399/api/Category/${ID}`,
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
            err => 'Something wrong when getting the category by ID'
        );
    },

    //Add a category
    AddCategory: function(category) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "PUT",
                url: "https://localhost:44399/api/Category?callback=result",
                dataType: "json",
                accept: "application/json",
                contentType: "application/json",
                data: JSON.stringify(category),
                success: function (response) {
                    resolve(response);
                },
                error: function (response) {
                    reject(response);
                }
            });
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
    },

    //Delete Category
    DeleteCategory: function(cateID) {
        console.log('Delete category')
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "DELETE",
                url: `https://localhost:44399/api/Category/${cateID}`,
                dataType: "json",
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
            success => {
                console.log(success);
                return true;
            },
            err => {
                console.error(err);
                return false;
            }
        )
    }
}

export default categoryAPI;