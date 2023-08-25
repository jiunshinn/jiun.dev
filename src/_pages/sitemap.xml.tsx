import { getSortedPostsData } from "@/_lib/posts";

function generateSiteMap(posts: any) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   ${posts
     .map((post: string) => {
       return `
          <url>
              <loc>${`https://www.jiun.me/${post}`}</loc>
          </url>
      `;
     })
     .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  // We make an API call to gather the URLs for our site
  const posts = getSortedPostsData();
  const allPages = [
    ...posts.map(({ id }) => `blogs/posts/${id}/`),
    ...["", "about/"],
  ];

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(allPages);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
