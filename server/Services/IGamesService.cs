using System.Collections.Generic;
using server.Models;

namespace server.Services
{
    public interface IGamesService
    {
        List<Game> GetAll();
    }
}