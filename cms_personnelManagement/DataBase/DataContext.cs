using cms_personnelManagement.DataBase.Dto;
using Microsoft.EntityFrameworkCore;

namespace cms_personnelManagement.DataBase
{
    public class DataContext : DbContext
    {
        /// <summary>
        /// 创建DataContext实体类  安装Mysql.Data.EntityFrameworkCore和Microsoft.EntityFrameworkCore.Tools2.1.1
        /// </summary>
        /// <param name="options"></param>
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        private string Connection;

        public DataContext(string Connection) => this.Connection = Connection;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!string.IsNullOrEmpty(Connection))
                optionsBuilder.UseMySQL(Connection);
        }

        public DbSet<InfoDto> infos { get; set; }
    }
}
