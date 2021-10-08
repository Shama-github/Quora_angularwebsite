using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace QuesAnsWebAPI.Models
{
    public class Questions
    {
        [Key]
        [Display(Name = "Id")]
        public long QuestionId { get; set; }



        [Required(ErrorMessage = "Question Text is required.")]
        public string QuestionText { get; set; }



        [Required(ErrorMessage = "Question category reuired.")]
        public string QuestionCategory { get; set; }



        public ICollection<Answers> Answers { get; set; }



        [ForeignKey("User")]
        public string UserEmail { get; set; }



        [JsonIgnore]
        public User User { get; set; }
    }
}
