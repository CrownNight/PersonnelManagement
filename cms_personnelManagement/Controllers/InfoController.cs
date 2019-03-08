using cms_personnelManagement.DataBase;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cms_personnelManagement.Controllers
{
    [Route("api/base")]
    public class InfoController:Controller
    {
        public readonly DataContext db;

        public InfoController(DataContext db)
        {
            this.db = db;
        }
        [HttpGet("info")]
        public IActionResult GetInfo()
        {
            var list = db.infos.Where(x => x.Id == 1).ToList();
            return Ok(list);
        }
    }
}
