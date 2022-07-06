//using ProjectAPI.Context;
//using ProjectAPI.Data.Models;

//namespace ProjectAPI.Data
//{
//    public static class DataSeeder
//    {
//        public static void Seed(this IHost host)
//        {
//            using var scope = host.Services.CreateScope();
//            using var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
//            context.Database.EnsureCreated();
//            AddSeat(context);
//        }
//        private static void AddSeat(AppDbContext context)
//        {
//            var user = context.Users.FirstOrDefault();
//            if (user != null) return;

//            context.Seats.Add(new Seat
//            {
//                Id = 0,
//                Name = "Gay",
//                Color  = "Gay"
//            });

//            context.SaveChanges();
//        }
//    }
//}

