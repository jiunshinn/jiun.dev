import Head from "next/head";
import Layout, { siteTitle } from "@/_components/layout";
import Content from "@/_components/content";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="sm:text-3xl text-2xl text-indigo-500 tracking-widest font-medium title-font mb-1">
              JIUN ARCHIVE
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              A personal page of Shin jiun, a software developer based in seoul,
              Korea.
            </p>
          </div>
          <div className="flex flex-wrap">
            <Content name="About" content="" href="/about" />
            <Content name="Blog" content="" href="/blogs" />
            <Content name="Portfolio" content="" href="/portfolio" />
            <Content name="Study" content="" href="/study" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
