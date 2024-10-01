using System.ComponentModel.DataAnnotations;

namespace IssueTracker.Api.Models
{
    public class User
    {
        public int Id { get; set; }

        [MaxLength(20)]
        public string FirstName { get; set; } = string.Empty;

        [MaxLength(20)]
        public string LastName { get; set; } = string.Empty;

        [MaxLength(40)]
        public string Username { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;
    }
}
