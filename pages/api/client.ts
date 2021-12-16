import {GraphQLClient} from 'graphql-request'

export const client = new GraphQLClient(process.env.GRAPH_CMS_API)
