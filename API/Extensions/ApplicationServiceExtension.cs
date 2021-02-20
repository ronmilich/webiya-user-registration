using API.Data;
using API.intefaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    public static class ApplicationServiceExtension
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddDbContext<UserDbContext>(options => options.UseSqlite("Data Source=usersDb.db"));
            services.AddScoped<IUsersRepository, UsersRepository>();
            return services;
        }
    }
}