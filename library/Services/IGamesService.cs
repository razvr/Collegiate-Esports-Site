using System.Collections.Generic;
using library.Models;

namespace library.Services
{
    public interface IGamesService
    {
        int Create(Game_Create game);
        void Delete(int Id);
        Game Get(int Id);
        List<Game> GetAll();
        void Update(Game game);
    }
}