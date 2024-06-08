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
    public class TeacherInfoController : ApiController
    {
        
        public HttpResponseMessage GetAll()
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                List<TeacherInfoDTO> dtos = new List<TeacherInfoDTO>();
                entities.TeacherInfoes.ForEach(ti =>
                {
                    dtos.Add(new TeacherInfoDTO()
                    {
                        TeacherID = ti.TeacherID,
                        TeacherLevel = ti.TeacherLevel,
                        CurrentJobName = ti.CurrentJobName
                    });
                });

                return Request.CreateResponse(HttpStatusCode.OK, dtos);
            }
        }

        public HttpResponseMessage GetById([FromUri] string id)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                TeacherInfo ti = entities.TeacherInfoes.FirstOrDefault(target => target.TeacherID.Equals(id));
                if (ti is null)
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Can't find the teacher info with id = " + id);

                TeacherInfoDTO dto = new TeacherInfoDTO()
                {
                    TeacherID = ti.TeacherID,
                    TeacherLevel = ti.TeacherLevel,
                    CurrentJobName = ti.CurrentJobName
                };

                return Request.CreateResponse(HttpStatusCode.OK, dto);
            }
        }

        public HttpResponseMessage PutTeacherInfo([FromBody] TeacherInfoDTO ti)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                try
                {
                    TeacherInfo target = new TeacherInfo()
                    {
                        TeacherID = ti.TeacherID,
                        TeacherLevel = ti.TeacherLevel,
                        CurrentJobName = ti.CurrentJobName
                    };

                    entities.TeacherInfoes.Add(target);
                    entities.SaveChanges();

                    return Request.CreateResponse(HttpStatusCode.OK, "Inserted successfully!");
                } catch (Exception e)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, e);
                }
            }
        }
    }
}