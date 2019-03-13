using System.ComponentModel.DataAnnotations;

namespace cms_personnelManagement.DataBase.Dto
{
    public class userInfoDto
    {
        public userInfoDto()
        {
            Id = 0;
            Info = string.Empty;
        }

        [Required]
        [Key]
        public int Id { get; set; }

        public string Info { get; set; }

    }
}
