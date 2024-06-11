using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CourseManagement_WebAPI.Models
{
    public class CourseDTO
    {
        public string CourseID { get; set; }
        public string CourseName { get; set; }
        public string CourseDescription { get; set; }
        public string CateID { get; set; }
        public Nullable<System.DateTime> DateCreated { get; set; }
        public Nullable<System.DateTime> DateModifier { get; set; }
        public string Image { get; set; }
    }
}