using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web;
using System.Net.Http.Headers;

namespace CourseManagement_WebAPI.App_Start
{
    public class CustomerJsonFormatter : JsonMediaTypeFormatter
    {
        public CustomerJsonFormatter() {
            this.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));
        }

        public override void SetDefaultContentHeaders(Type type, HttpContentHeaders headers, MediaTypeHeaderValue mediaType)
        {
            base.SetDefaultContentHeaders(type, headers, mediaType);
            headers.ContentType = new MediaTypeHeaderValue("application/json");
        }
    }
}