using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace temp.Models
{
    public class ApplicationUser : IdentityUser
    {
        public bool auth_admin { get; set; }
        public Uri image { get; set; }

        public ApplicationUser()
        {
                
        }
    }
}
