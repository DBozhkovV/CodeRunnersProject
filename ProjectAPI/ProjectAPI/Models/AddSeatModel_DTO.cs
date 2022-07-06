using System.ComponentModel.DataAnnotations;

namespace ProjectAPI.Models
{
    public class AddSeatModel_DTO
    {
        [Required]
        public string Name { get; set; } = default!;

        public string? Color { get; set; }
    }
}
