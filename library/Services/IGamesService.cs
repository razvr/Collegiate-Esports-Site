using System.Collections.Generic;
using library.Models;

namespace library.Services
{
    public interface IGamesService
    {
        List<Game> GetAll();
    }
}