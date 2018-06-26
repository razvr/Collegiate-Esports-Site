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

        [ Route("api/games"), HttpGet ]
        public HttpResponseMessage GetAll()
        {
            List<Game> results = gamesService.GetAll();
            return Request.CreateResponse(HttpStatusCode.OK, results);
        }

        [ Route("api/games"), HttpPost ]
        public HttpResponseMessage Create(Game_Create game)
        {
            if (game == null)
            {
                ModelState.AddModelError("", "Your request contained no data.");
            }
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            int Id = gamesService.Create(game);

            return Request.CreateResponse(HttpStatusCode.Created, Id);
        }

        [ Route("api/games/{id:int}"), HttpGet ]
        public HttpResponseMessage Get(int Id)
        {
            Game game = gamesService.Get( Id );
            return Request.CreateResponse(HttpStatusCode.OK, game);
        }

        [ Route("api/games/{id:int}"), HttpPut ]
        public HttpResponseMessage Update( int Id, Game game )
        {
            if (game == null)
            {
                ModelState.AddModelError("", "Your request contained no data.");
            }

            if (game.Id != Id)
            {
                ModelState.AddModelError("Id", "Id in the URL does not match the Id in the body.");
            }

            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            gamesService.Update(game);
            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [ Route("api/games/{id:int}"), HttpDelete ]
        public HttpResponseMessage Delete(int Id)
        {
           gamesService.Delete(Id);

            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}
