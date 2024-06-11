using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Cors;
using System.Web.Http.Cors;

namespace CourseManagement_WebAPI.App_Start
{
    public class CorsPolicyFactory : ICorsPolicyProviderFactory
    {
        public ICorsPolicyProvider GetCorsPolicyProvider(HttpRequestMessage request)
        {
            return new EnableCorsAttribute("*", "*", "*") // Adjust origins, methods, headers
            {};
        }
    }
}