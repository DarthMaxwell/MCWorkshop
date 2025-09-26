using MCWorkshop.Server.Modles;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MCWorkshop.Server.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : ControllerBase {
        private readonly WorkshopDbContext _context;

        public InventoryController(WorkshopDbContext context) {
            _context = context;
        }

        // GET: api/inventory
        [HttpGet]
        public async Task<List<Item>> getItems() {
            return await _context.Inventory.ToListAsync();
        }

        //Admin page will need POST, UPDATE and DELETE
    }
}
