import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import {GetStaticProps} from 'next'

import { getPosts } from './getPosts'

type PostData = {
  // date: string
  title: string
  id: string
}

export default function Home({posts}: {posts: PostData[]}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Software Engineer</p>
        <p>
          Code, food, food for thought
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({id, /*date,*/ title}) => (
            <li className={utilStyles.listItem} key={id}>
              {/* <Link href={`/posts/${id}`}> */}
              <Link href={`/`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                 no actual data. don't even think about clicking this
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const graphqlData = await getPosts()
  console.log({ graphqlData })
  return graphqlData
}
