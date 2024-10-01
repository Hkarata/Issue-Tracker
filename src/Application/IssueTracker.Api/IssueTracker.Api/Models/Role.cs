using System.ComponentModel.DataAnnotations;

namespace IssueTracker.Api.Models
{
    public class Role
    {
        public int Id { get; set; }

        [MaxLength(50)]
        public string Name { get; set; } = string.Empty;
    }
}
