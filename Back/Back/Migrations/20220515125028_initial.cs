using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Back.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Foods",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    calories = table.Column<int>(type: "int", nullable: false),
                    fat = table.Column<int>(type: "int", nullable: false),
                    carbs = table.Column<int>(type: "int", nullable: false),
                    protein = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Foods", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Foods",
                columns: new[] { "Id", "calories", "carbs", "fat", "name", "protein" },
                values: new object[] { 1, 5, 5, 5, "Milk", 5.0 });

            migrationBuilder.InsertData(
                table: "Foods",
                columns: new[] { "Id", "calories", "carbs", "fat", "name", "protein" },
                values: new object[] { 2, 6, 6, 6, "Apple", 6.0 });

            migrationBuilder.InsertData(
                table: "Foods",
                columns: new[] { "Id", "calories", "carbs", "fat", "name", "protein" },
                values: new object[] { 3, 7, 7, 7, "Banana", 7.0 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Foods");
        }
    }
}
