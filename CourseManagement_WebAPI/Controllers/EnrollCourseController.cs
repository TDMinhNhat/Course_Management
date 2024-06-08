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
    public class EnrollCourseController : ApiController
    {

        public HttpResponseMessage PutEnrollCouse([FromBody] EnrollCourseDTO ec)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                try
                {
                    EnrollCourse target = new EnrollCourse()
                    {
                        EnrollID = ec.EnrollID,
                        DateEnrolled = ec.DateEnrolled,
                        ClassID = ec.ClassID,
                        StudentID = ec.StudentID
                    };

                    entities.EnrollCourses.Add(target);
                    entities.SaveChanges();
                    
                    return Request.CreateResponse(HttpStatusCode.OK, "Inserted successfully!");
                }
                catch (Exception e)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, e);
                }

            }
        }
        
        public HttpResponseMessage GetAll()
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                List<EnrollCourseDTO> dtos = new List<EnrollCourseDTO>();
                entities.EnrollCourses.ForEach(ec =>
                {
                    dtos.Add(new EnrollCourseDTO()
                    {
                        EnrollID = ec.EnrollID,
                        DateEnrolled = ec.DateEnrolled,
                        ClassID = ec.ClassID,
                        StudentID = ec.StudentID
                    });
                });

                return Request.CreateResponse(HttpStatusCode.OK, dtos);
            }
        }

        public HttpResponseMessage GetByID([FromUri] string ID)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                EnrollCourse ec = entities.EnrollCourses.FirstOrDefault(t => t.ClassID.Equals(ID));
                if (ec is null)
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Can't find the enroll with id = " + ID);

                EnrollCourseDTO dto = new EnrollCourseDTO()
                {
                    EnrollID = ec.EnrollID,
                    DateEnrolled = ec.DateEnrolled,
                    ClassID = ec.ClassID,
                    StudentID = ec.StudentID
                };

                return Request.CreateResponse(HttpStatusCode.OK, dto);
            }
        }
    }
}