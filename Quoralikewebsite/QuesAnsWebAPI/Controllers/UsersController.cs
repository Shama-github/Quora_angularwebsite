using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuesAnsWebAPI.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuesAnsWebAPI.Controllers
{
  
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly MyContext _context;

        public UsersController(MyContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        [Route("/getAllUsers")]
        public async Task<ActionResult<IEnumerable<User>>> GetUser()
        {
            return await _context.User.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet]
        [Route("/getUserByEmail/{useremail}")]
        public async Task<ActionResult<User>> GetUser(string useremail)
        {
            var user = await _context.User.FindAsync(useremail);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

      

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("/updateUser/{id}")]
        public async Task<IActionResult> PutUser(string id, User user)
        {
            if (id != user.UserEmail)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("/registerUser")]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.User.Add(user);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UserExists(user.UserEmail))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetUser", new { id = user.UserEmail }, user);
        }

             [HttpPost]
            [Route("/loginUser")]
            public async Task<ActionResult<User>> LoginUser(User user)
            {
                if (user == null)
                {
                    return BadRequest();
                }
                User userObject = await _context.User.FindAsync(user.UserEmail);
                if (userObject != null)
                {
                    if (userObject.UserPassword == user.UserPassword)
                    { 
                    return Ok(userObject);
                    }
                }
                return NotFound("No user found with this email id.");
            }

        // DELETE: api/Users/5
        [HttpDelete]
        [Route("/deleteUser/{id}")]
        public async Task<ActionResult<User>> DeleteUser(string id)
        {
            var user = await _context.User.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.User.Remove(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private bool UserExists(string id)
        {
            return _context.User.Any(e => e.UserEmail == id);
        }
    }
}
