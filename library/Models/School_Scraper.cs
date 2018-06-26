using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace library
{
    public class School_Scraper
    {
        [Required] [MaxLength(50)]
        public string Name { get; set; }

        [Required] [MaxLength(50)]
        public string State { get; set; }

        [Required]
        public string Athletics { get; set; }
    }
}
