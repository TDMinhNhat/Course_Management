using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CourseManagement_WebAPI.Models
{
    public class SkillDTO
    {
        public long SkillID { get; set; }
        public string SkillName { get; set; }
        public Nullable<long> SkillParent {  get; set; }

        public SkillDTO(long skillID, string skillName, long? skillParent)
        {
            SkillID = skillID;
            SkillName = skillName;
            SkillParent = skillParent;
        }
    }
}