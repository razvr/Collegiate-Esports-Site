using library.Models;
using server.Services;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace library.Services
{
    public class GamesService : IGamesService
    {
        string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        public List<Game> GetAll()
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();

                var cmd = con.CreateCommand();
                cmd.CommandText = "Games_GetAll";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                using (var reader = cmd.ExecuteReader())
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