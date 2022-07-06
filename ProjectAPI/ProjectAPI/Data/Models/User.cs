using Microsoft.AspNetCore.Identity;

namespace ProjectAPI.Data.Models
{
    public class User : IdentityUser
    {
        public bool auth_admin { get; set; }
        public Uri image { get; set; }
        public string position{ get; set; }
        public int age { get; set; }

        public User()
        {

        }
    }
    }
