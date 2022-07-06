using Microsoft.AspNetCore.Identity;

namespace ProjectAPI.Data.Models
{
    public class User : IdentityUser
    {
        public Uri Image { get; set; }
        public string Position { get; set; }
        public int Age { get; set; }

        public User()
        {

        }
    }
}
