using CourseManagement_WebAPI.App_Start;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApiContrib.Formatting.Jsonp;
namespace CourseManagement_WebAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            /*var jsonp = new JsonpMediaTypeFormatter(config.Formatters.JsonFormatter);
            config.Formatters.Insert(0, jsonp);*/

            config.SetCorsPolicyProviderFactory(new CorsPolicyFactory());
            config.EnableCors();
        }
    }
}
