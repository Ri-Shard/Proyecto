using System;

namespace Entity
{
    public class Restaurante
    {
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string IdentificacionDueno {get;set;}
        public string NombreRestaurante { get; set; }
        public string Direccion { get; set; }
        public string Evaluacion { get; set; }
        public string Nit {get; set;}

        public void Evaluacio() 
         { 
            Evaluacion = "Pendiente";
             }
        
    }
}
