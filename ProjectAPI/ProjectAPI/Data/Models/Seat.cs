using System;
using System.ComponentModel.DataAnnotations;

namespace ProjectAPI.Data.Models
{
    public class Seat
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string? Color { get; set; }

        public Seat()
        {

        }
    }
}
