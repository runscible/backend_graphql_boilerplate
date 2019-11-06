'use strict';

const { gql } = require('apollo-server');
const mockData = [
  {
    title: 'Las palabras y las cosas',
    author: 'Giovanni Papini'
  },
  {
    title: 'America',
    author: 'Franz Kafka'
  }
]


const typeDefs = gql`type Book {
                        title: String
                        author: String
                      }
                      type Query {
                        Books: [Book]
                      }`

module.exports = {typeDefs, mockData};                      