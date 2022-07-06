using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectAPI.Data.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int SeatId { get; set; }
        public DateTime Time { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }
        [ForeignKey("SeatId")]
        public Seat Seat { get; set; }
        public Booking()
        {
        }
    }
}
