using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using ProjectAPI.Data.Models;

namespace ProjectAPI.Context
{
    public class AppDbContext : IdentityDbContext
    {
        public AppDbContext(DbContextOptions options)
            : base(options)
        {

        }
        public DbSet<Seat> Seats { get; set; }  
    }
}
