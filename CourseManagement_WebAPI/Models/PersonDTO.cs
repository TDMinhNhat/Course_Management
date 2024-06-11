using CourseManagementModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CourseManagement_WebAPI.Models
{
    public class PersonDTO
    {
        public string PerID { get; set; }
        public string PerName { get; set; }
        public bool Sex { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string AccountName { get; set; }
        public string Password { get; set; }
        public string Image { get; set; }
        public string Role { get; set; }
        public int Status { get; set; }
        public Nullable<System.DateTime> DateCreated { get; set; }
        public Nullable<System.DateTime> DateModifier { get; set; }
    }
}