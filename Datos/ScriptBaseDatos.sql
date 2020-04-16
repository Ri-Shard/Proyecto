CREATE DATABASE [Evaluaciones];
USE  [Evaluaciones]

CREATE TABLE [dbo].[Restaurantes](
	[Dueño] [nvarchar](30) NOT NULL,
    [IdentificacionDueño] [nvarchar] (10) NOT NULL PRIMARY KEY,
	[NombreRestaurante] [nvarchar](50) NULL,
	[Direccion] [nvarchar](20) NULL,
	[Evaluacion] [int] NULL,
) 
GO

COMMIT