import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from 'components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <div className='grid place-content-center'>
          <p className='text-blue-600'>Based in seoul</p>
          <Link href='/blogs'>Blog</Link>
          <Link href='/resume'>Resume</Link>
        </div>
    </Layout>
  )
}
