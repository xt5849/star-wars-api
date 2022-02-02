module.exports = {
   name: "Rating",
   columns: {
      id: {
         primary: true,
         type: "int",
         generated: true,
      },
      puntaje: {
         type: "float",
         nullable: false
      },
      comentarios: {
         type: "varchar",
         nullable: true
      },
      peliculaId: {
         type: "int",
         nullable: true
      },
      personajeId: {
         type: "int",
         nullable: true
      },
      creado: {
         type: "timestamp",
         default: () => "CURRENT_TIMESTAMP",
      },
      actualizado: {
         type: "timestamp",
         default: () => "CURRENT_TIMESTAMP",
      },
   }
}
