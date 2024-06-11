import categoryAPI from './api/category.js';
import courseAPI from './api/course.js';

const categoriesList = 
    $.map(await categoryAPI.GetAll(), (item) => { 
        return {
            CateID: item.CateID,
            CateName: item.CateName
        }
    });

const courseList = 
    $.map(await courseAPI.GetAll(), (course) => {
        return {
            CourseID: course.CourseID,
            CourseName: course.CourseName,
            CateID: course.CateID
        }
    });

function result() {
    var result = '';
    for (let cate of categoriesList) {
        result += `<div><h1 style="margin-left: 10px;">${cate.CateName}</h1>`;
        result += '<div class="grid-container">';
        for(let course of courseList) {
            if(course.CateID === cate.CateID) { 
                result += `<button class="grid-item w-75">
                    <h1 style="font-size: 30px;">${course.CourseName}</h1>
                    <div class="k-display-flex k-flex-row k-justify-content-around" style="font-size: 25px;">
                        <div>
                            <div>LỚP</div>
                            <div>1</div>
                        </div>
                        <div>
                            <div>ĐĂNG KÝ</div>
                            <div>10</div>
                        </div>
                    </div>
                </button>`;
            }
        }
        result += '</div></div>';
    }
    return result;
}

$("#list-courses").html(result())