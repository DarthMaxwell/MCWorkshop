using MCWorkshop.Server.Modles;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MCWorkshop.Server.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class StorageController : ControllerBase {
        private readonly int MaxStorage = 10; // Static value for how many bikes we can keep. (Could be added to database)
        private readonly WorkshopDbContext _context;

        public StorageController(WorkshopDbContext context) {
            _context = context;
        }

        // GET: api/storage
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Storage>>> GetStorageList() {
            return await _context.StorageList.ToListAsync();
        }

        // GET: api/storage/space
        [HttpGet("space")]
        public async Task<int> GetSpaceAsync() {
            string CurrentYear = DateTime.Now.Year.ToString();
            int Count = await _context.StorageList.Where((s) => s.Year.Equals(CurrentYear)).CountAsync();

            return MaxStorage - Count;
        }

        // POST: api/storage
        [HttpPost]
        public async void PostStorage(Storage storage) {
            // might just pass it little bit of everyhting and i need to create storage
            _context.StorageList.Add(storage);
            await _context.SaveChangesAsync();
        }
    }
}
