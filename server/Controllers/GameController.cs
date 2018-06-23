using library.Models;
using library.Services;
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

        [Route("api/games"), HttpPost]
        public HttpResponseMessage Create(Game game)
        {
            if (ModelState == null)
            {
                ModelState.AddModelError("", "Your request contained no data.");
            }
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(
                    HttpStatusCode.BadRequest,
                    ModelState
                    );
            }
        }
    }
}
