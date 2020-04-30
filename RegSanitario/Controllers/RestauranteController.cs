using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Logica;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using RegSanitario.Models;

namespace RegSanitario.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
   public class RestauranteController: ControllerBase
   {
       private readonly RestauranteService _restauranteService;
       public IConfiguration Configuration {get;}

       public RestauranteController(IConfiguration configuration){
           Configuration = configuration;
           string connectionString = Configuration["ConnectionStrings:DefaultConnection"];
           _restauranteService = new RestauranteService(connectionString);
       }

      [HttpGet]
      public IEnumerable<RestauranteViewModel> Get() {
          var restaurantes = _restauranteService.ConsultarTodos().Select(u => new RestauranteViewModel(u));
          return restaurantes;
      }
      
      [HttpPost]
      public ActionResult<RestauranteViewModel> Post(RestauranteInputModel restauranteInput) {
          
          Restaurante restaurante = mapearRestaurante(restauranteInput);
          var respuesta = _restauranteService.Guardar(restaurante);
          if (respuesta.Error)
          {
              return BadRequest(respuesta.Mensaje);
          }
          return Ok(respuesta.Restaurante);
      }
      private Restaurante mapearRestaurante(RestauranteInputModel restauranteInput){
          Restaurante restaurante = new Restaurante();
          restaurante.Nombre = restauranteInput.Nombre;
          restaurante.Apellido = restauranteInput.Apellido;
          restaurante.IdentificacionDueno = restauranteInput.IdentificacionDueno;
          restaurante.NombreRestaurante = restauranteInput.NombreRestaurante;
          restaurante.Direccion = restauranteInput.Direccion;
          restaurante.Evaluacion = restauranteInput.Evaluacion;
          restaurante.Nit = restauranteInput.Nit;
          return restaurante;
      }
    }
}