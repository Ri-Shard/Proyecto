using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Entity;

namespace Datos
{
    public class RestauranteRepository{
        
        private readonly SqlConnection _connection;
        private readonly List<Restaurante> _restaurante = new List<Restaurante>();
        public RestauranteRepository(ConnectionManager connection)
        {
            _connection = connection._conexion;
        }


       public void Guardar(Restaurante restaurante)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = @"Insert Into Restaurantes (Dueño,IdentificacionDueño,NombreRestaurante,Direccion,Evaluacion) 
                                        values (@Dueño,@IdentificacionDueño,@NombreRestaurante,@Direccion,@Evaluacion)";
                command.Parameters.AddWithValue("@Dueño", restaurante.Dueno);
                command.Parameters.AddWithValue("@IdentificacionDueño", restaurante.IdentificacionDueno);
                command.Parameters.AddWithValue("@NombreRestaurante", restaurante.NombreRestaurante);
                command.Parameters.AddWithValue("@Direccion", restaurante.Direccion);
                command.Parameters.AddWithValue("@Evaluacion", restaurante.Evaluacion);
                var filas = command.ExecuteNonQuery();
            }
        }

     public List<Restaurante> ConsultarTodos()
        {
            SqlDataReader dataReader;
            List<Restaurante> restaurantes = new List<Restaurante>();
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "Select * from Restaurantes";
                dataReader = command.ExecuteReader();
                if (dataReader.HasRows)
                {
                    while (dataReader.Read())
                    {
                        Restaurante restaurante = DataReaderMapToRestaurante(dataReader);
                        restaurantes.Add(restaurante);
                    }
                }
            }
            return restaurantes;
        }

        public Restaurante BuscarPorNombre(string NombreRestaurante)
        {
            SqlDataReader dataReader;
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "select * from Restaurantes where NombreRestaurante=@NombreRestaurante";
                command.Parameters.AddWithValue("@NombreRestaurante", NombreRestaurante);
                dataReader = command.ExecuteReader();
                dataReader.Read();
                return DataReaderMapToRestaurante(dataReader);
            }
        }


        private Restaurante DataReaderMapToRestaurante(SqlDataReader dataReader)
        {
            if(!dataReader.HasRows) return null;
            Restaurante restaurante = new Restaurante();
            restaurante.Dueno = (string)dataReader["Dueño"];
            restaurante.IdentificacionDueno = (string)dataReader["IdentificacionDueño"];
            restaurante.NombreRestaurante = (string)dataReader["NombreRestaurante"];
            restaurante.Direccion = (string)dataReader["Direccion"];
            restaurante.Evaluacion = (string)dataReader["Evaluacion"];
            return restaurante;
            
         }


        
    }
}
