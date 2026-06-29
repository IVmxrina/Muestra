using Microsoft.EntityFrameworkCore;
namespace BE_muestra.Models
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) 
        { 
        
        }

        public DbSet<Muestra> Muestras { get; set; } = null!;

    }
}
