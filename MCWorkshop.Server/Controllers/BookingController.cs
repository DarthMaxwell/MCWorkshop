using MCWorkshop.Server.Modles;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace MCWorkshop.Server.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class BookingController : ControllerBase {
        private readonly WorkshopDbContext _context;

        //private readonly ILogger<BookingController> _logger; what is this

        public BookingController(WorkshopDbContext context) {
            _context = context;
        }

        // GET: api/booking
        [HttpGet]
        public async Task<List<Booking>> GetBookingsAsync() {
            return await _context.Booking.ToListAsync();
        }

        // GET: api/booking/availability
        [HttpGet("availability")]
        public async Task<ActionResult<IEnumerable<DayAvailability>>> GetAvailability() {
            var today = DateOnly.FromDateTime(DateTime.Now);

            var availability = await _context.Booking
                .Where(b => b.Date >= today)
                .GroupBy(b => b.Date)
                .Select(g => new DayAvailability(g.Key) {
                     BookingCount = g.Count()
                 })
                .ToListAsync();

            return availability;

        }

        // POST: api/booking
        [HttpPost]
        public void Post(Booking booking) {
            // parameters wont be a booking
            // Check valid info
            // create and add booking object to database
        }
    }
}
