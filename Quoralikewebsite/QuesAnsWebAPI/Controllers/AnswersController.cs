using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuesAnsWebAPI.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuesAnsWebAPI.Controllers
{
  
    [ApiController]
    public class AnswersController : ControllerBase
    {
        private readonly MyContext _context;

        public AnswersController(MyContext context)
        {
            _context = context;
        }

        // GET: api/Answers
        [HttpGet]
        [Route("/getAllAnswers")]
        public async Task<ActionResult<IEnumerable<Answers>>> GetAnswers()
        {
            return await _context.Answers.ToListAsync();
        }

        // GET: api/Answers/5
        [HttpGet]
        [Route("/getAnswersById/{id}")]
        public async Task<ActionResult<Answers>> GetAnswers(long id)
        {

            var answers = await _context.Answers.FindAsync(id);

            if (answers == null)
            {
                return NotFound();
            }

            return answers;
        }
        [HttpGet]
        [Route("/getAnswersByUser/{useremail}")]
        public async Task<ActionResult<IEnumerable<Answers>>> GetAnswersByUser(string useremail)
        {

            var answers = await _context.Answers.Where(x => x.UserEmail == useremail).ToListAsync<Answers>();

            if (answers == null)
            {
                return NotFound();
            }

            return answers;
        }

        // PUT: api/Answers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("/updateAnswer/{id}")]
        public async Task<IActionResult> PutAnswers(long id, Answers answers)
        {
            if (id != answers.AnswerId)
            {
                return BadRequest();
            }

            _context.Entry(answers).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AnswersExists(id))
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

        // POST: api/Answers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("/createAnswer")]
        public async Task<ActionResult<Answers>> PostAnswers(Answers answers)
        {
            _context.Answers.Add(answers);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAnswers", new { id = answers.AnswerId }, answers);
        }

        // DELETE: api/Answers/5
        [HttpDelete]
        [Route("/deleteAnswer/{id}")]
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

        private bool AnswersExists(long id)
        {
            return _context.Answers.Any(e => e.AnswerId == id);
        }
    }
}
