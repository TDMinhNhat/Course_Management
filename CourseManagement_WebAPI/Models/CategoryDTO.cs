using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CourseManagement_WebAPI.Models
{
    public class CategoryDTO
    {
        public string CateID { get; set; }
        public string CateName { get; set; }
        public string CateParent { get; set; }

        public CategoryDTO(string cateID, string cateName, string cateParent)
        {
            CateID = cateID;
            CateName = cateName;
            CateParent = cateParent;
        }
    }
}