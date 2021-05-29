const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    bookCount: String
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    # authors: String
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  input savedBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    removeBook(bookId: ID!): User
  }

`;

module.exports = typeDefs;
