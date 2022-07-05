using Microsoft.EntityFrameworkCore;
using ProjectAPI.Data.Models;

namespace ProjectAPI.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Seat> Seats { get; set; }  
    }
}
