using CourseManagement_WebAPI.Models;
using CourseManagementModels;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace CourseManagement_WebAPI.Controllers
{
    public class ClassRoomController : ApiController
    {
        
        public HttpResponseMessage PutClassRoom([FromBody] ClassRoomDTO cr)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                try
                {
                    ClassRoom target = new ClassRoom()
                    {
                        ClassID = cr.ClassID,
                        ClassDescription = cr.ClassDescription,
                        TypeStudy = cr.TypeStudy,
                        DateStarted = cr.DateStarted,
                        DateEnded = cr.DateEnded,
                        MaxStudent = cr.MaxStudent,
                        TeacherID = cr.TeacherID,
                        CourseID = cr.CourseID,
                        ClassStatus = cr.ClassStatus
                    };

                    entities.ClassRooms.Add(target);
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
                List<ClassRoomDTO> dtos = new List<ClassRoomDTO>();
                entities.ClassRooms.ForEach(cr =>
                {
                    dtos.Add(new ClassRoomDTO()
                    {
                        ClassID = cr.ClassID,
                        ClassDescription = cr.ClassDescription,
                        TypeStudy = cr.TypeStudy,
                        DateStarted = cr.DateStarted,
                        DateEnded = cr.DateEnded,
                        MaxStudent = cr.MaxStudent,
                        TeacherID = cr.TeacherID,
                        CourseID = cr.CourseID,
                        ClassStatus = cr.ClassStatus
                    });
                });

                return Request.CreateResponse(HttpStatusCode.OK, dtos);
            }
        }

        public HttpResponseMessage GetByID([FromUri] string ID)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                ClassRoom cr = entities.ClassRooms.FirstOrDefault(c => c.ClassID.Equals(ID));
                if(cr is null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Can't find the class id = " + ID);
                }

                ClassRoomDTO dto = new ClassRoomDTO()
                {
                    ClassID = cr.ClassID,
                    ClassDescription = cr.ClassDescription,
                    TypeStudy = cr.TypeStudy,
                    DateStarted = cr.DateStarted,
                    DateEnded = cr.DateEnded,
                    MaxStudent = cr.MaxStudent,
                    TeacherID = cr.TeacherID,
                    CourseID = cr.CourseID,
                    ClassStatus = cr.ClassStatus
                };

                return Request.CreateResponse(HttpStatusCode.OK, dto);
            }
        }

        [HttpDelete]
        public HttpResponseMessage DeleteClassRoom([FromUri] string id)
        {
            using(CourseManagementEntities entities = new CourseManagementEntities())
            {
                ClassRoom target = entities.ClassRooms.FirstOrDefault(c => c.ClassID.Equals(id));

                if(target is null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Can't find the classroom id = " + id);
                }

                target.ClassStatus = "Huỷ Lớp";
                entities.ClassRooms.AddOrUpdate(target);
                entities.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, "Deleted Successfully!");
            }
        }
    }
}