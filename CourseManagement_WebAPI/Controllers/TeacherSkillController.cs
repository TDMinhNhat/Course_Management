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
    public class TeacherSkillController : ApiController
    {
        
        public HttpResponseMessage GetAll()
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                List<TeacherSkillDTO> dtos = new List<TeacherSkillDTO>();
                entities.TeacherSkills.ForEach(ts =>
                {
                    dtos.Add(new TeacherSkillDTO()
                    {
                        SkillID = ts.SkillID,
                        DateRecevied = ts.DateRecevied,
                        TeacherID = ts.TeacherID
                    });
                });

                return Request.CreateResponse(HttpStatusCode.OK, dtos);
            }
        }

        public HttpResponseMessage GetById([FromUri] long id)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                TeacherSkill ts = entities.TeacherSkills.FirstOrDefault(target => target.SkillID.Equals(id));
                if(ts is null)
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Can't find the skill with id = " + id);

                TeacherSkillDTO dto = new TeacherSkillDTO()
                {
                    SkillID = ts.SkillID,
                    DateRecevied = ts.DateRecevied,
                    TeacherID = ts.TeacherID
                };

                return Request.CreateResponse(HttpStatusCode.OK, dto);
            }
        }

        public HttpResponseMessage PutTeacherSkill([FromBody] TeacherSkillDTO ts)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                try
                {
                    TeacherSkill target = new TeacherSkill()
                    {
                        SkillID = ts.SkillID,
                        DateRecevied = ts.DateRecevied,
                        TeacherID = ts.TeacherID
                    };

                    entities.TeacherSkills.Add(target);
                    entities.SaveChanges();

                    return Request.CreateResponse(HttpStatusCode.OK, "Inserted successfully!");
                } catch(Exception e)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, e);
                }
            }
        }
    }
}