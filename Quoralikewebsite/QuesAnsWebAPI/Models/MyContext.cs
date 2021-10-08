using Microsoft.EntityFrameworkCore;
using QuesAnsWebAPI.Models;

namespace QuesAnsWebAPI
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions<MyContext> options) : base(options)
        {

        }
        public DbSet<Questions> Questions { get; set; }
        public DbSet<Answers> Answers { get; set; }

        public DbSet<User> User { get; set; }

    }
}
