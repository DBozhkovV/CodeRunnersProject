using Microsoft.AspNetCore.Mvc;
using ProjectAPI.Context;
using ProjectAPI.Data.Models;

namespace ProjectAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SeatController : Controller
    {
        private readonly AppDbContext _DbContext;

        public SeatController(AppDbContext testDBContext)
        {
            _DbContext = testDBContext;
        }

        [HttpGet("{id}")]
        public IActionResult Get()
        {
            var testData = _DbContext.Seats.Single(x => x.Name == "name 1");
            // db.Seats.
            var test = new Seat
            {
                Id = 1,
                Name = "name 1"
            };

            return Ok(test);
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
