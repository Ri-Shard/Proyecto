CREATE DATABASE [Evaluaciones];
USE  [Evaluaciones]

CREATE TABLE [dbo].[Restaurantes](
	[Nombre] [nvarchar](30) NOT NULL,
	[Apellido] [nvarchar](30) NOT NULL,
    [IdentificacionDueño] [nvarchar] (10) NOT NULL,
	[NombreRestaurante] [nvarchar](50) NULL,
	[Direccion] [nvarchar](20) NULL,
	[Evaluacion] [nvarchar] (15)NULL,
	[Nit] [nvarchar](30) NOT NULL PRIMARY KEY,
) 
GO

COMMIT