using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CourseManagement_WebAPI.Models
{
    public class TeacherSkillDTO
    {
        public string TeacherID { get; set; }
        public long SkillID { get; set; }
        public System.DateTime DateRecevied { get; set; }
    }
}