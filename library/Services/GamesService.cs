using library.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace library.Services
{
    public class GamesService : IGamesService
    {
        string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        SqlCommand CreateCommand(SqlConnection con, string commandText)
        {
            var cmd = con.CreateCommand();
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.CommandText = commandText;
            return cmd;
        }

        public List<Game> GetAll()
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();
                var cmd = CreateCommand(con, "Games_GetAll");

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

        public Game Get( int Id )
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();
                var cmd = CreateCommand(con, "Games_Get");
            }
        }

        public int Create(Game game)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();
                var cmd = CreateCommand(con, "Games_Create");

                cmd.Parameters.AddWithValue("@Title", game.Title);
                cmd.Parameters.AddWithValue("@Publisher", game.Publisher);
                cmd.Parameters.Add("@Id", SqlDbType.Int).Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();

            }
        }

        public Game Update()
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();
                var cmd = CreateCommand(con, "Games_Update");

            }
        }

        public Game Delete( int Id )
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();
                var cmd = CreateCommand(con, "Games_Delete");

                
            }
        }
    }
}