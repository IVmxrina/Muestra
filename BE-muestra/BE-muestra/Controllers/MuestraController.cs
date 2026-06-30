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
        public async Task<IActionResult> GetMuestras()
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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMuestra(int id)
        {
            try
            {
                var muestra = await _context.Muestras.FindAsync(id);
                return Ok(muestra);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMuestra(int id)
        {
            try
            {
                var muestra = await _context.Muestras.FindAsync(id);
                if(muestra == null)
                {
                    return NotFound();
                } 
                else
                {
                   _context.Muestras.Remove(muestra);
                    await _context.SaveChangesAsync();
                    return Ok("Muestra borrada");
                }

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        [HttpPost]
        public async Task<IActionResult> Post(Muestra muestra)
        {

            try
            {
                muestra.FechaCreacion = DateTime.Now;
                _context.Add(muestra);
                await _context.SaveChangesAsync();

                return Ok();
                
            }
            catch (Exception e) 
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Muestra muestra)
        {
            try
            {
                if(id != muestra.Id)
                {
                    return BadRequest();
                } else
                {
                    _context.Update(muestra);
                    await _context.SaveChangesAsync();
                    return Ok("Muestra modificada");
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
