using BE_muestra.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BE_muestra.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MuestraController : ControllerBase
    {

        private readonly ApplicationDbContext _context;

        public MuestraController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listMuestras = await _context.Muestras.ToListAsync();
                return Ok(listMuestras);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
