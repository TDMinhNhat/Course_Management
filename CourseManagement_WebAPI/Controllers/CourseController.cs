using CourseManagement_WebAPI.Models;
using CourseManagementModels;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace CourseManagement_WebAPI.Controllers
{
    public class CourseController : ApiController
    {
        public HttpResponseMessage PutCourse([FromBody] CourseDTO dto)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                try
                {
                    entities.Courses.Add(new Course()
                    {
                        CourseID = dto.CourseID,
                        CourseName = dto.CourseName,
                        CourseDescription = dto.CourseDescription,
                        CateID = dto.CateID,
                        DateCreated = dto.DateCreated,
                        DateModifier = dto.DateModifier,
                        Image = dto.Image
                    });

                    entities.SaveChanges();

                    return Request.CreateResponse(HttpStatusCode.OK, "Inserted successfully!");
                } catch (Exception e)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, e);
                }
            }
        }

        public HttpResponseMessage GetAll()
        {
            using (CourseManagementEntities entities = new CourseManagementEntities())
            {
                List<CourseDTO> dtos = new List<CourseDTO>();
                entities.Courses.ForEach(c =>
                {
                    dtos.Add(new CourseDTO()
                    {
                        CourseID = c.CourseID,
                        CourseName = c.CourseName,
                        CourseDescription = c.CourseDescription,
                        CateID = c.CateID,
                        DateCreated = c.DateCreated,
                        DateModifier = c.DateModifier,
                        Image = c.Image
                    });
                });

                return Request.CreateResponse(HttpStatusCode.OK, dtos);
            }
        }

        public HttpResponseMessage GetByID([FromUri] string ID)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                Course target = entities.Courses.Where(c => c.CourseID.Equals(ID)).FirstOrDefault();
                if (target == null)
                    return Request.CreateResponse(HttpStatusCode.NotFound, "Can't find the course with id = " + ID);

                CourseDTO dto = new CourseDTO()
                {
                    CourseID = target.CourseID,
                    CourseName = target.CourseName,
                    CourseDescription = target.CourseDescription,
                    CateID = target.CateID,
                    DateCreated = target.DateCreated,
                    DateModifier = target.DateModifier,
                    Image = target.Image
                };

                return Request.CreateResponse(HttpStatusCode.OK, dto);
            }
        }

        [HttpDelete]
        public HttpResponseMessage DeleteCourse([FromUri] string id)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                Course target = entities.Courses.FirstOrDefault(c => c.CourseID.Equals(id));
                if (target is null)
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Can't find the course id = " + id);

                entities.Courses.Remove(target);
                entities.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK, "Deleted Successfully!");
            }
        }
    }
}