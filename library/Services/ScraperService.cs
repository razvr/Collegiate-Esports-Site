using library;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace library.Services
{
    public class ScraperService
    {
        string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        public void Post(School_Scraper school)
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();

                var cmd = con.CreateCommand();
                cmd.CommandText = "Scraper_Post";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Name", school.Name);
                cmd.Parameters.AddWithValue("@State", school.State);
                cmd.Parameters.AddWithValue("@Athletics", school.Athletics);
                cmd.Parameters.Add("@Id", SqlDbType.Int).Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();

                //return (int)cmd.Parameters["@Id"].Value;
            }
        }
    }
}
