using library;
using library.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace server.Controllers
{
    public class SchoolController : ApiController
    {
        readonly ISchoolService schoolService;

        public SchoolController(ISchoolService schoolService)
        {
            this.schoolService = schoolService;
        }

        [ Route("api/schools"), HttpGet ]
        public HttpResponseMessage GetAll()
        {
            List<School> results = schoolService.GetAll();
            return Request.CreateResponse(HttpStatusCode.OK, results);
        }
    }
}
