using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuesAnsWebAPI.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuesAnsWebAPI.Controllers
{
    
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly MyContext _context;

        public QuestionsController(MyContext context)
        {
            _context = context;
        }

        // GET: api/Questions
        [HttpGet]
        [Route("/getAllQuestions")]
        public async Task<ActionResult<IEnumerable<Questions>>> GetQuestions()
        {
            return await _context.Questions.Include("Answers").ToListAsync();
        }

        // GET: api/Questions/5
        [HttpGet]
        [Route("/getQuestionById/{id}")]
        public async Task<ActionResult<Questions>> GetQuestions(long id)
        {
            var questions = await _context.Questions.Include("Answers").Where(x => x.QuestionId == id).FirstOrDefaultAsync<Questions>();
            //var questions = await _context.Questions.FindAsync(id);

            if (questions == null)
            {
                return NotFound();
            }

            return questions;
        }

        [HttpGet]
        [Route("/getQuestionsByUser/{useremail}")]
        public async Task<ActionResult<IEnumerable<Questions>>> GetQuestionsByUser(string useremail)
        {
            var questions = await _context.Questions.Include("Answers").Where(x => x.UserEmail == useremail).ToListAsync<Questions>();
            //var questions = await _context.Questions.FindAsync(id);

            if (questions == null)
            {
                return NotFound();
            }

            return questions;
        }
        [HttpGet]
        [Route("/getQuestionsByCategory/{quescategory}")]
        public async Task<ActionResult<IEnumerable<Questions>>> GetQuestionsByCategory(string quescategory)
        {
            var questions = await _context.Questions.Include("Answers").Where(x => x.QuestionCategory == quescategory).ToListAsync<Questions>();
            //var questions = await _context.Questions.FindAsync(id);

            if (questions == null)
            {
                return NotFound();
            }

            return questions;
        }

        // PUT: api/Questions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("/updateQuestion/{id}")]
        public async Task<IActionResult> PutQuestions(long id, Questions questions)
        {
            if (id != questions.QuestionId)
            {
                return BadRequest();
            }

            _context.Entry(questions).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuestionsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Questions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("/createQuestion")]
        public async Task<ActionResult<Questions>> PostQuestions(Questions questions)
        {
            _context.Questions.Add(questions);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetQuestions", new { id = questions.QuestionId }, questions);
        }

        // DELETE: api/Questions/5
        [HttpDelete]
        [Route("/deleteQuestion/{id}")]
        public async Task<IActionResult> DeleteQuestions(long id)
        {
            var questions = await _context.Questions.FindAsync(id);
            if (questions == null)
            {
                return NotFound();
            }

            _context.Questions.Remove(questions);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool QuestionsExists(long id)
        {
            return _context.Questions.Any(e => e.QuestionId == id);
        }
    }
}
