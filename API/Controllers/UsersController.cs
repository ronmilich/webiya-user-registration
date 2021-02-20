using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.intefaces;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UsersController : BaseController
    {
        private readonly IUsersRepository __usersRepo;
        public UsersController(IUsersRepository _usersRepo)
        {
            __usersRepo = _usersRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            var users = await __usersRepo.GetAllUsers();
            return Ok(users.ToList());
        }

        [HttpPost]
        public async Task<ActionResult> RegisterUser([FromBody] User user)
        {
            if (await __usersRepo.UserExist(user)) return BadRequest("User already exist");

            __usersRepo.CreateUser(user);

            if (await __usersRepo.SaveAsync()) return NoContent();

            return BadRequest("Faild to save user");
        }
    }
}