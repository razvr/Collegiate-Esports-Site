using library;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace library.Services
{
    public class SchoolService
    {
        string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

        public List<School> GetAll()
        {
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                con.Open();

                SqlCommand cmd = con.CreateCommand();
                cmd.CommandText = "Schools_GetAll";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    List<School> results = new List<School>();

                    while (reader.Read())
                    {
                        var school = new School
                        {
                            Id = (int)reader["Id"],
                            Name = (string)reader["Name"],
                            City = (string)reader["City"],
                            State = (string)reader["State"],
                            Athletics = (string)reader["Athletics"],
                            DateCreated = (DateTime)reader["Date_Created"],
                        };
                        results.Add(school);
                    }
                    return results;
                }
            }
        }
    }
}
