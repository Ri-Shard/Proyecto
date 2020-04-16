using System;
using Entity;
using Logica;
namespace RegSanitario.Models
{
    public class RestauranteInputModel{
        public string Dueno { get; set; }
        public string IdentificacionDueno {get;set;}
        public string NombreRestaurante { get; set; }
        public string Direccion { get; set; }
        public string Evaluacion { get; set; }

    }
        public class RestauranteViewModel: RestauranteInputModel
    {
        public RestauranteViewModel(Restaurante restaurante)
        {
            Dueno = restaurante.Dueno;
            IdentificacionDueno = restaurante.IdentificacionDueno;
            NombreRestaurante = restaurante.NombreRestaurante;
            Direccion = restaurante.Direccion;
            Evaluacion = restaurante.Evaluacion;
        }
    }

}
