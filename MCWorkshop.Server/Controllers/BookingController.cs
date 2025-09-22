using MCWorkshop.Server.Modles;
using Microsoft.AspNetCore.Mvc;

namespace MCWorkshop.Server.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class BookingController : ControllerBase {
        private Booking[] Bookings = new Booking[10];

        private readonly ILogger<BookingController> _logger;

        public BookingController(ILogger<BookingController> logger) {
            _logger = logger;
        }

        [HttpGet("availability")]
        public ActionResult<IEnumerable<DayAvailability>> GetAvailability() { //Can do this monthly

            DayAvailability[] result = new[] {
                new DayAvailability("2025-09-19"),
                new DayAvailability("2025-09-21"),
                new DayAvailability("2025-09-22"),
                new DayAvailability("2025-09-25"),
            };

            var test = new DayAvailability("2025-09-23");
            test.BookingCount = 5;

           

            // list of days to be yellow or grayout
            // if apointment is this month or past or today then we make a object for that and a counter in it if its bigger than 5 we make gray

            return Ok(result.Append(test));
        }

        [HttpGet(Name = "GetBookings")]
        public IEnumerable<Booking> Get() {
            return Bookings;
        }

        [HttpPost(Name = "PostBooking")]
        public void Post(Booking booking) {
            // parameters wont be a booking
            // Check valid info
            // create and add booking object to database
        }
    }
}
