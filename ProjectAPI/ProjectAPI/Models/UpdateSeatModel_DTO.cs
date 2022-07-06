namespace ProjectAPI.Models
{
    public class UpdateSeatModel_DTO
    {
        public int Id { get; set; }

        public string Name { get; set; } = default!;

        public string? Color { get; set; }
    }
}
