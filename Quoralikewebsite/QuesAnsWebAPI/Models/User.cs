using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuesAnsWebAPI.Models
{
    public class User
    {

        [Required]
        [Display(Name = "Name")]
        public string UserName { get; set; }



        [Key]
        [DataType(DataType.EmailAddress)]
        [Display(Name = "Email")]
        public string UserEmail { get; set; }



        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string UserPassword { get; set; }
        public ICollection<Questions> Questions { get; set; }
        public ICollection<Answers> Answers { get; set; }
    }
}