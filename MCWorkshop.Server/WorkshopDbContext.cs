using MCWorkshop.Server.Modles;
using Microsoft.EntityFrameworkCore;

namespace MCWorkshop.Server {
    public class WorkshopDbContext : DbContext {
        public WorkshopDbContext(DbContextOptions<WorkshopDbContext> options) : base(options) { }

        public DbSet<Storage> Storage { get; set; }
        public DbSet<Item> Inventory {  get; set; }
        public DbSet<Bike> Bike {  get; set; }
        public DbSet<Booking> Booking { get; set; }
    }
}
