using AngleSharp.Parser.Html;
using library;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace scraper
{
    class Scraper
    {
        static void Main(string[] args)
        {
            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

            using (var client = new HttpClient())
            {
                //  "Hey, look at this HTML page, and check out this table!"
                var html = client.GetStreamAsync("http://www.espn.com/esports/story/_/id/21152905/college-esports-list-varsity-esports-programs-north-america").Result;
                var parser = new HtmlParser();
                var document = parser.Parse(html);
                var tableRows = document.QuerySelectorAll("table.inline-table tr.last");

                List<School> results = new List<School>();

                //  Open SQL Connection
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    con.Open();

                    var cmd = con.CreateCommand();
                    cmd.CommandText = "Schools_Post";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;

                    //  Loop through table to scrape data
                    foreach (var tr in tableRows)
                    {
                        var school = new School();

                        var name = tr.QuerySelector("td");
                        school.Name = name.TextContent;

                        var state = tr.QuerySelector("td:nth-child(2)");
                        school.State = state.TextContent;

                        var athletics = tr.QuerySelector("td:nth-child(3)");
                        school.Athletics = athletics.TextContent;

                        results.Add(school);

                        //  Push scraped data to SQL
                        cmd.Parameters.AddWithValue("@Name", school.Name);
                        cmd.Parameters.AddWithValue("@State", school.State);
                        cmd.Parameters.AddWithValue("@Athletics", school.Athletics);
                        cmd.Parameters.AddWithValue("@Date_Created", school.DateCreated);
                        cmd.Parameters.Add("@Id", SqlDbType.Int).Direction = ParameterDirection.Output;

                        cmd.ExecuteNonQuery();
                    }

                }

            }   //  calls client.Dispose()
        }
    }
}
