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
         nullable: false
      },
      peliculaId: {
         type: "int",
         nullable: true
      },
      personajeId: {
         type: "int",
         nullable: true
      },
      creacion: {
         type: "timestamp",
         default: () => "CURRENT_TIMESTAMP",
      },
      updated: {
         type: "timestamp",
         default: () => "CURRENT_TIMESTAMP",
      },
   }
}
