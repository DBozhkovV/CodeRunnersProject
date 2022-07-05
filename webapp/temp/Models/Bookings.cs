using System;
namespace temp.Models
{
    public class Bookings
    {
        public int id { get; set; }
        public string user_id { get; set; }
        public string seat_id { get; set; }
        public DateTime time { get; set; }
        public ApplicationUser user { get; set; }
        public Seat seat { get; set; }
        public Bookings()
        {
        }
    }
}
