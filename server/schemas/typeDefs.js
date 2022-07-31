const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String]!, description: String!, title: String!, bookId: ID!, image: String!, link: String!): User
    removeBook(bookId: String!): User
}

type User {
    _id: ID
    userame: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookID: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID
    user: User
}

`





module.exports = typeDefs;