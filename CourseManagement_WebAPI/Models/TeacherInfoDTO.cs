using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CourseManagement_WebAPI.Models
{
    public class TeacherInfoDTO
    {
        public string TeacherID { get; set; }
        public string TeacherLevel { get; set; }
        public string CurrentJobName { get; set; }
    }
}