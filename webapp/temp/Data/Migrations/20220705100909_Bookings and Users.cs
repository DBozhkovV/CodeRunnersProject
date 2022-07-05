using Microsoft.EntityFrameworkCore.Migrations;

namespace temp.Data.Migrations
{
    public partial class BookingsandUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "auth_admin",
                table: "AspNetUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "image",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "auth_admin",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "image",
                table: "AspNetUsers");
        }
    }
}
