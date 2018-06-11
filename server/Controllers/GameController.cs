using server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace server.Controllers
{
    public class GameController : ApiController
    {
        readonly IGamesService gamesService; // = new GamesService();

        public GameController(IGamesService gamesService)
        {
            this.gamesService = gamesService;
        }

        [Route("api/games"), HttpGet]
        public HttpResponseMessage GetAll()
        {
            var results = gamesService.GetAll();
            return Request.CreateResponse(HttpStatusCode.OK, results);
        }
    }
}
