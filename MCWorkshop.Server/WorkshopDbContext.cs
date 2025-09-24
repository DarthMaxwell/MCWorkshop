using MCWorkshop.Server.Modles;
using Microsoft.EntityFrameworkCore;

namespace MCWorkshop.Server {
    public class WorkshopDbContext : DbContext {
        public WorkshopDbContext(DbContextOptions<WorkshopDbContext> options) : base(options) { }

        public DbSet<Storage> StorageList { get; set; }
    }
}
