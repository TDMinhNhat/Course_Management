using CourseManagement_WebAPI.Models;
using CourseManagementModels;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CourseManagement_WebAPI.Controllers
{
    public class PersonController : ApiController
    {  
        
        public HttpResponseMessage PutPerson([FromBody] PersonDTO dto)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                try
                {
                    Person person = new Person()
                    {
                        PerID = dto.PerID,
                        PerName = dto.PerName,
                        Sex = dto.Sex,
                        Address = dto.Address,
                        Phone = dto.Phone,
                        Email = dto.Email,
                        AccountName = dto.AccountName,
                        Password = dto.Password,
                        Image = dto.Image,
                        Role = dto.Role,
                        Status = dto.Status,
                        DateCreated = DateTime.Now,
                        DateModifier = DateTime.Now
                    };

                    entities.People.Add(person);
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
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                List<PersonDTO> dtos = new List<PersonDTO>();

                entities.People.ToList().ForEach(p =>
                {
                    dtos.Add(new PersonDTO()
                    {
                        PerID = p.PerID,
                        PerName = p.PerName,
                        Sex = p.Sex,
                        Address = p.Address,
                        Phone = p.Phone,
                        Email = p.Email,
                        AccountName = p.AccountName,
                        Password = p.Password,
                        Image = p.Image,
                        Role = p.Role,
                        Status = p.Status,
                        DateCreated = p.DateCreated,
                        DateModifier = p.DateModifier
                    });
                });

                return Request.CreateResponse(HttpStatusCode.OK, dtos);
            }
        }

        public HttpResponseMessage GetByID([FromUri] string ID)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                Person target = entities.People.Where(p => p.PerID == ID).FirstOrDefault();
                PersonDTO dto = new PersonDTO()
                {
                    PerID = target.PerID,
                    PerName = target.PerName,
                    Sex = target.Sex,
                    Address = target.Address,
                    Phone = target.Phone,
                    Email = target.Email,
                    AccountName = target.AccountName,
                    Password = target.Password,
                    Image = target.Image,
                    Role = target.Role,
                    Status = target.Status,
                    DateCreated = target.DateCreated,
                    DateModifier = target.DateModifier
                };                    
                if (target is null)
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Can't find the person with id = " + ID);
                else
                    return Request.CreateResponse(HttpStatusCode.OK, target);
            }
        }

        [HttpPost]
        [Route("api/Person/{username}/{password}")]
        public HttpResponseMessage GetByUsernameAndPassword([FromUri] string username, [FromUri] string password)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                Person result = entities.People.Where(p => p.AccountName.Equals(username) && p.Password.Equals(password)).FirstOrDefault();
                if (result is null)
                    return Request.CreateResponse(HttpStatusCode.BadRequest, "Failed");
                else
                    return Request.CreateResponse(HttpStatusCode.OK, result);
            }
        }
    }
}