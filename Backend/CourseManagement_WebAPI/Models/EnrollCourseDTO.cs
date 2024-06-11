using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CourseManagement_WebAPI.Models
{
    public class EnrollCourseDTO
    {
        public string EnrollID { get; set; }
        public System.DateTime DateEnrolled { get; set; }
        public string StudentID { get; set; }
        public string ClassID { get; set; }
    }
}