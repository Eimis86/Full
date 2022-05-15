namespace Back.Models
{
    public class CreateFoodDto : FoodDto
    {
        public string name { get; set; }
        public int calories { get; set; }
        public int fat { get; set; }
        public int carbs { get; set; }
        public double protein { get; set; }
    }
}
