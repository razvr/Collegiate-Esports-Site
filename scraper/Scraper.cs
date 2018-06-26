using AngleSharp.Parser.Html;
using library;
using library.Services;
using Newtonsoft.Json;
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
            ScraperService scraperService = new ScraperService();

            using (var client = new HttpClient())
            {
                //  "Hey, look at this HTML page, and check out this table!"
                var html = client.GetStreamAsync("http://www.espn.com/esports/story/_/id/21152905/college-esports-list-varsity-esports-programs-north-america").Result;
                var parser = new HtmlParser();
                var document = parser.Parse(html);
                var tableRows = document.QuerySelectorAll("table.inline-table tr.last");

                List<School_Scraper> results = new List<School_Scraper>();

                    //  Loop through table to scrape data
                foreach (var tr in tableRows)
                {

                    var name = tr.QuerySelector("td");
                    var state = tr.QuerySelector("td:nth-child(2)");
                    var athletics = tr.QuerySelector("td:nth-child(3)");

                    var school = new School_Scraper();
                    school.Name = name.TextContent;
                    school.State = state.TextContent;
                    school.Athletics = athletics.TextContent;

                    results.Add(school);

                    // give school obj to Service 1 at a time
                    scraperService.Post(school);

                }
                //  Look at the list of schools we just scrapped!
                Console.WriteLine(JsonConvert.SerializeObject(results));

            }   //  calls client.Dispose()
        }
    }
}
