using library;
using scraper;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace library.Services
{
    public class ScraperService : IScraperService
    {
        string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        public int Post(School school)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();

                var cmd = con.CreateCommand();
                cmd.CommandText = "Schools_Post";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Name", school.Name);
                cmd.Parameters.AddWithValue("@State", school.State);
                cmd.Parameters.AddWithValue("@Athletics", school.Athletics);
                cmd.Parameters.AddWithValue("@Date_Created", school.DateCreated);
                cmd.Parameters.Add("@Id", SqlDbType.Int).Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();

                return (int)cmd.Parameters["@Id"].Value;
            }
        }
    }
}
