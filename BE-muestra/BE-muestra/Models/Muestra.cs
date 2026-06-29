using System.ComponentModel.DataAnnotations;
using System.Data;

namespace BE_muestra.Models
{
    public class Muestra
    {
        [Key]
        public int Id { get; set; }
        public required string Nombre { get; set; }
        public required string Descripcion { get; set; }

        public required DateTime fechaCreacion { get; set; }
    }
}
