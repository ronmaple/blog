import {gql} from 'graphql-request'
import {client} from './client'

const QUERY = gql`
  {
    posts {
      id
      title
    }
  }
`

export async function getPosts() {
  const {posts} = await client.request(QUERY)
  
  return {
    props: {
      posts,
    },
  }
}
