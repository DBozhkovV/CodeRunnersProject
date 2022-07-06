using Microsoft.AspNetCore.Mvc;
using ProjectAPI.Context;
using ProjectAPI.Data.Models;
using ProjectAPI.Models;

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

        [HttpPost]
        public IActionResult Create(AddSeatModel_DTO seat)
        {
            var newSeat = new Seat()
            {
                Name = seat.Name,
                Color = seat.Color
            };

            _DbContext.Seats.Add(newSeat);
            _DbContext.SaveChanges();

            return Ok();
        }

        [HttpGet("{Id:int}")]
        //.../Seat/1
        public IActionResult Get(int Id)
        {
            var testData = _DbContext.Seats.Single(x => x.Id == Id);

            return Ok(testData);
        }

        [HttpGet]
        //.../Seat/1
        public IActionResult Get()
        {
            var testData = _DbContext.Seats.ToList();

            return Ok(testData);
        }

        [HttpPut]
        public IActionResult Update(UpdateSeatModel_DTO seat)
        {
            var testData = _DbContext.Seats.Single(x => x.Id == seat.Id);

            testData.Name = seat.Name;
            testData.Color = seat.Color;

            _DbContext.Seats.Update(testData);
            _DbContext.SaveChanges();

            // _db update
            // _db save chan

            return Ok();
        }
    }
}
