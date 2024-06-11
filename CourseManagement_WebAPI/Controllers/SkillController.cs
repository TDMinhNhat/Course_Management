using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.ModelBinding;
using System.Web.Mvc;
using CourseManagement_WebAPI.Models;
using CourseManagementModels;

namespace CourseManagement_WebAPI.Controllers
{
    public class SkillController : ApiController
    {
        
        public HttpResponseMessage PutSkill([FromBody] SkillDTO dto)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                try
                {
                    Skill skill = new Skill() { SkillName = dto.SkillName, SkillParent = dto.SkillParent };
                    entities.Skills.Add(skill);
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "Inserted successfully!");
                } catch (Exception e)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Insert failed due to duplicate primary key value");
                }
            }
        }

        public HttpResponseMessage GetAll()
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                List<SkillDTO> dtos = new List<SkillDTO>();
                foreach(var skill in entities.Skills.ToList())
                {
                    dtos.Add(new SkillDTO(skill.SkillID, skill.SkillName, skill.SkillParent));
                }
                return Request.CreateResponse(HttpStatusCode.OK, dtos);
            }
        }

        public HttpResponseMessage GetById([FromUri] long ID)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                Skill target = entities.Skills.Where(s => s.SkillID == ID).FirstOrDefault();
                SkillDTO dto = new SkillDTO(
                    target.SkillID, 
                    target.SkillName,
                    target.SkillParent.GetValueOrDefault());
                if (target == null)
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Can't find the skill with id = " + ID);
                else
                    return Request.CreateResponse(HttpStatusCode.OK, dto);
            }
        }
    }
}