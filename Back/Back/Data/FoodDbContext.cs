using Microsoft.EntityFrameworkCore;

namespace Back.Data
{
    public class FoodDbContext : DbContext
    {
        public FoodDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Food> Foods { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Food>().HasData(
                new Food
                {
                    Id = 1,
                    name = "Milk",
                    calories = 5,
                    fat = 5,
                    carbs = 5,
                    protein = 5,
                },
                new Food
                {
                Id = 2,
                name = "Apple",
                calories = 6,
                fat = 6,
                carbs = 6,
                protein = 6,
                },
                new Food
                {
                    Id = 3,
                    name = "Banana",
                    calories = 7,
                    fat = 7,
                    carbs = 7,
                    protein = 7,
                }
            );
        }
    }
}
