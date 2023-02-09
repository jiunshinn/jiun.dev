import axios from "axios";


const EXTERNAL_DATA_URL = 'https://www.jiun.me/posts';

const generateSiteMap = (slugs: string[]) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map((slug) => {
            return `
                <url>
                    <loc>${`https://www.jiun.me/${slug}`}</loc>
                </url>
            `;
          })
          .join('')}
    </urlset>
`;

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res } : any) {

  const { data: { posts = [] } = {} } = await axios.get(`/api/posts`);
  const allPages = [...posts.map(({ _id } : any ) => `posts/${_id}/`), ...['', 'about']];

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
  res.write(generateSiteMap(allPages));
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;