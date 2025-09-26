using MCWorkshop.Server.Modles;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace MCWorkshop.Server.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class BikeController : ControllerBase {
        private readonly WorkshopDbContext _context;

        public BikeController(WorkshopDbContext context) {
            _context = context;
        }

        // GET: api/bike
        [HttpGet]
        public async Task<List<Bike>> getBikes() {
            return await _context.Bike.ToListAsync();
        }

        //Admin page will need POST, UPDATE and DELETE
    }
}
