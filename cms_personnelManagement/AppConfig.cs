using cms_personnelManagement.DataBase;
using Microsoft.Extensions.Configuration;

namespace cms_personnelManagement
{
    public class AppConfig
    {
        /// <summary>
        /// Mysql数据库连接
        /// </summary>
        public static string MysqlConnection { get; } = ConfigurationManager.Configuration.GetConnectionString("MysqlConnection");
    }
}
