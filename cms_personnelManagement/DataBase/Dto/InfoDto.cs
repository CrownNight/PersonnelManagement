using System.ComponentModel.DataAnnotations;

namespace cms_personnelManagement.DataBase.Dto
{
    public class InfoDto
    {
        public InfoDto()
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
