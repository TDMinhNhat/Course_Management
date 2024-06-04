using CourseManagementModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CourseManagement_WebAPI.Models
{
    public class ClassRoomDTO
    {
        public string ClassID { get; set; }
        public string ClassDescription { get; set; }
        public int TypeStudy { get; set; }
        public System.DateTime DateStarted { get; set; }
        public System.DateTime DateEnded { get; set; }
        public int MaxStudent { get; set; }
        public string TeacherID { get; set; }
        public string CourseID { get; set; }
        public string ClassStatus { get; set; }
    }
}