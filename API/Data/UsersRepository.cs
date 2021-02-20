using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.intefaces;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class UsersRepository : IUsersRepository
    {
        private readonly UserDbContext _context;
        public UsersRepository(UserDbContext context)
        {
            _context = context;
        }

        public void CreateUser(User user)
        {
            _context.Users.Add(user);
        }

        public async Task<IEnumerable<User>> GetAllUsers()
        {
            var users = await _context.Users.ToListAsync();
            return users.ToList();
        }

        public async Task<bool> SaveAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> UserExist(User user)
        {
            var userFromDb = await _context.Users.FirstOrDefaultAsync(u => u.Email == user.Email || u.Username == user.Username);

            if (userFromDb != null) return true;

            return false;
        }
    }
}