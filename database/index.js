const typeorm = require('typeorm')
const EntitySchema = typeorm.EntitySchema;

const {
   DATABASE_NAME,
   SECRET_ARN,
   DATABASE_ARN,
   DATABASE_REGION
} = require('../config')

const {
   RatingEntity
} = require('../entities')

const connectionOptions = {
   type: "aurora-data-api",
   synchronize: true,
   database: DATABASE_NAME,
   secretArn: SECRET_ARN,
   resourceArn: DATABASE_ARN,
   region: DATABASE_REGION,
   charset: "utf8",
   formatOptions: {
      castParameters: false,
   },
   entities: [
      new EntitySchema(RatingEntity)
   ]
}

var cachedConnection

module.exports = async () => {
   if (cachedConnection) {
      return cachedConnection;
   }
   cachedConnection = await typeorm.createConnection(connectionOptions)
   console.log('> Nueva conexión creada')
   return cachedConnection;
};
