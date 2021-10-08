using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuesAnsWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuesAnsWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WebapiController : ControllerBase
    {
        private readonly MyContext _context;

        public WebapiController(MyContext context)//DI
        {
            _context = context;
        }

        //User Register
        [HttpPost]
        public async Task<User> Register(User user)
        {
            _context.User.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        //Listofallqanda
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Questions>>> GetAllQuestions()
        {
            return await _context.Questions.ToListAsync();
        }

        //Listofallqanda
        [HttpGet]
        [Route("/getallqanda")]
        public async Task<ActionResult<IEnumerable<Questions>>> GetQandA()
        {
            return await _context.Questions.Include("Answers").ToListAsync();
        }

        //allquesbycategory
        [HttpGet("{QuestionCategory}")]
        public async Task<ActionResult<Questions>> GetQuestionsbycategory(string questionCategory)
        {
            var questions = await _context.Questions.Include("Answers").Where(x => x.QuestionCategory == questionCategory).FirstOrDefaultAsync<Questions>();
            //var questions = await _context.Questions.FindAsync(id);

            if (questions == null)
            {
                return NotFound();
            }

            return questions;
        }
        //Particularuserques
        
        [Route("/getQuestionsByUser/{UserEmai}")]
        [HttpGet]
        public async Task<ActionResult<Questions>> GetQuestions(string useremail)
        {
            var questions = await _context.Questions.Include("Answers").Where(x => x.UserEmail == useremail).FirstOrDefaultAsync<Questions>();
            //var questions = await _context.Questions.FindAsync(id);

            if (questions == null)
            {
                return NotFound();
            }

            return questions;
        }


        //Addaquestion
        [HttpPost]
        public async Task<Questions> PostQuestions(Questions question)
        {
            _context.Questions.Add(question);
            await _context.SaveChangesAsync();
            return question;
        }


        //deleteuser'sques
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuestions(long id)
        {
            var questions = await _context.Questions.Include("Answers").Where(x => x.QuestionId == id).FirstOrDefaultAsync<Questions>();
            if (questions == null)
            {
                return NotFound();
            }

            _context.Questions.Remove(questions);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //AddAnswer
        [HttpPost]
        public async Task<Answers> AddAnswers(Answers answers)
        {
            _context.Answers.Add(answers);
            await _context.SaveChangesAsync();

            return answers;

        }



        //Updatinguser's answer
        [HttpPut("{id}")]
        public async Task<Answers> UpdateAnswers(long id, Answers answers)
        {
            await _context.SaveChangesAsync();
            return answers;
            }

        //deleteanswers
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAnswers(long id)
        {
            var answers = await _context.Answers.FindAsync(id);
            if (answers == null)
            {
                return NotFound();
            }

            _context.Answers.Remove(answers);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
