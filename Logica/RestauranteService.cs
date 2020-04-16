﻿using Datos;
using Entity;
using System;
using System.Collections.Generic;

namespace Logica
{
    public class RestauranteService
    {

        private readonly ConnectionManager _conexion;
        private readonly RestauranteRepository _repositorio;
        public RestauranteService(string connectionString)
        {
            _conexion = new ConnectionManager(connectionString);
            _repositorio = new RestauranteRepository(_conexion);
        }

        public GuardarRestauranteResponse Guardar(Restaurante restaurante)
        {
            try
            {
                _conexion.Open();
                _repositorio.Guardar(restaurante);
                _conexion.Close();
                return new GuardarRestauranteResponse(restaurante);
            }
            catch (Exception e)
            {
                return new GuardarRestauranteResponse($"Error de la Aplicacion: {e.Message}");
            }
            finally { _conexion.Close(); }
        }

        public class GuardarRestauranteResponse 
        {
            public GuardarRestauranteResponse(Restaurante restaurante)
            {
                Error = false;
                Restaurante = restaurante;
            }
            public GuardarRestauranteResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            public bool Error { get; set; }
            public string Mensaje { get; set; }
            public Restaurante Restaurante { get; set; }
        }


         public List<Restaurante> ConsultarTodos()
        {
            _conexion.Open();
            List<Restaurante> restaurantes = _repositorio.ConsultarTodos();
            _conexion.Close();
            return restaurantes;
        }


        
    }
}