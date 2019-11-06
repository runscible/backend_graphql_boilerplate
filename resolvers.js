const  { mockData }  = require('./typedefs');


const resolvers = {
  Query: {
    Books: ()=> mockData
  }
};

module.exports = {resolvers}