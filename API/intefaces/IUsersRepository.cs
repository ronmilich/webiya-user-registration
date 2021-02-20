using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models;

namespace API.intefaces
{
    public interface IUsersRepository
    {
        Task<IEnumerable<User>> GetAllUsers();
        void CreateUser(User user);
        Task<bool> UserExist(User user);
        Task<bool> SaveAsync();
    }
}
