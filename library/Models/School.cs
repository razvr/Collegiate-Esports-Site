using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace library
{
    public class School
    {
        public int? Id { get; set; }         //  setable?

        [Required] [MaxLength(50)]
        public string Name { get; set; }

        public string City { get; set; }    //  allow nulls

        [Required] [MaxLength(50)]
        public string State { get; set; }


        public string Athletics { get; set; }


        public DateTime DateCreated { get; set; }

        //public 
        //public 
    }
}
