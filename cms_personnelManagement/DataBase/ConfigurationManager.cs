using Microsoft.Extensions.Configuration;
using System.IO;

namespace cms_personnelManagement.DataBase
{
    public class ConfigurationManager
    {
        public readonly static IConfiguration Configuration;

        static ConfigurationManager()
        {
            Configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: true)
                .Build();
        }
    }
}
