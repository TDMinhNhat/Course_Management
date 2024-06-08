using CourseManagement_WebAPI.Models;
using CourseManagementModels;
using Microsoft.Ajax.Utilities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

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
                    string dateCheckID = DateTime.Now.ToString("yyMMdd", CultureInfo.InvariantCulture) + "1";
                    Person target = entities.People.Where(item => item.PerID.StartsWith(dateCheckID)).OrderByDescending(item => item.PerID).FirstOrDefault();

                    string ID = target is null ? 
                        DateTime.Now.ToString("yyMMdd", CultureInfo.InvariantCulture) + "1001" 
                        : 
                        (long.Parse(target.PerID) + 1).ToString();

                    Person person = new Person()
                    {
                        PerID = ID,
                        PerName = dto.PerName,
                        Sex = dto.Sex,
                        Address = null,
                        Phone = dto.Phone,
                        Email = dto.Email,
                        AccountName = dto.AccountName,
                        Password = dto.Password,
                        Image = null,
                        Role = "1",
                        Status = 1,
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

        [Route("api/Person/{username}/{password}")]
        public HttpResponseMessage GetByUsernameAndPassword([FromUri] string username, [FromUri] string password)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                Person target = entities.People.Where(p => p.AccountName.Equals(username) && p.Password.Equals(password)).FirstOrDefault();
                if (target is null)
                    return Request.CreateResponse(HttpStatusCode.BadRequest, "Failed");
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
                    return Request.CreateResponse(HttpStatusCode.OK, dto);
            }
        }
    }
}