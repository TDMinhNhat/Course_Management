using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using CourseManagement_WebAPI.Models;
using CourseManagementModels;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace CourseManagement_WebAPI.Controllers
{
    
    public class CategoryController : ApiController
    {
   
        public HttpResponseMessage PutCategory([FromBody] CategoryDTO dto)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                try
                {
                    Category category = new Category();
                    category.CateID = dto.CateID;
                    category.CateName = dto.CateName;
                    category.CateParent = dto.CateParent;

                    Category target = entities.Categories.Add(category);
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "Insert successfully!");
                } catch (Exception e)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, e);
                }
            }
        }

        public HttpResponseMessage GetListCategories()
        {
            using (CourseManagementEntities entities = new CourseManagementEntities()) {
                List<CategoryDTO> dtos = new List<CategoryDTO>();
                foreach (Category category in entities.Categories)
                {
                    dtos.Add(new CategoryDTO(
                        category.CateID,
                        category.CateName,
                        category.CateParent));
                }

                return Request.CreateResponse(HttpStatusCode.OK, dtos);
            }
        }
    }
}