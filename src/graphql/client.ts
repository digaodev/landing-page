import { GraphQLClient } from 'graphql-request'

export default new GraphQLClient('http://localhost:1337/graphql', {
  headers: {}
})
