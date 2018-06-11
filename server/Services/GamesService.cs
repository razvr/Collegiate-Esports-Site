using server.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace server.Services
{
    public class GamesService : IGamesService
    {
        string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        public List<Game> GetAll()
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();

                var command = con.CreateCommand();
                command.CommandText = "Games_GetAll";
                command.CommandType = System.Data.CommandType.StoredProcedure;

                using (var reader = command.ExecuteReader())
                {
                    var results = new List<Game>();

                    while (reader.Read())
                    {
                        var game = new Game
                        {
                            Id = (int)reader["Id"],
                            Title = (string)reader["Title"],
                            Publisher = (string)reader["Publisher"],
                        };
                        results.Add(game);
                    }
                    return results;
                }
            }
        }
    }
}