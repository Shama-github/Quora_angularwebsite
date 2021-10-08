using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace QuesAnsWebAPI.Models
{
    public class Answers
    {
        [Key]
        [Display(Name = "Id")]
        public long AnswerId { get; set; }



        [Required(ErrorMessage = "Answer Text is required")]
        public string AnswerText { get; set; }



        [ForeignKey("Question")]
        public long QuestionId { get; set; }



        [JsonIgnore]
        public Questions Question { get; set; }



        [ForeignKey("User")]
        public string UserEmail { get; set; }



        [JsonIgnore]
        public User User { get; set; }
    }
}