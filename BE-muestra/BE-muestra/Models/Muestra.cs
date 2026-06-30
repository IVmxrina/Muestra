using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Text.Json.Serialization;

namespace BE_muestra.Models
{
    public class Muestra
    {
        [Key]
        public int Id { get; set; }
        public required string Nombre { get; set; }
        public required string Descripcion { get; set; }

        public DateTime? FechaCreacion { get; set; }
    }
}
