import {
  getAllTags,
  getArticleBySlugOrId as getArticle,
  getArticles,
  PantheonClient,
} from "@pantheon-systems/pcc-react-sdk";

const pantheonClient = new PantheonClient({
  pccHost: process.env.PCC_HOST,
  siteId: process.env.PCC_SITE_ID,
  apiKey: process.env.PCC_TOKEN,
});

/**
 * Helper functions meant to be used in server-side rendering
 */

export async function getAllArticles(args, options) {
  const posts = await getArticles(
    pantheonClient,
    {
      publishingLevel: "PRODUCTION",
      ...args,
    },
    {
      publishStatus: "published",
      ...options,
    },
  );

  return posts;
}

export async function getArticleBySlugOrId(id, publishingLevel = "PRODUCTION") {
  const post = await getArticle(pantheonClient, id, {
    publishingLevel,
    contentType: "TREE_PANTHEON",
  });

  return post;
}

export async function getTags() {
  const tags = await getAllTags(pantheonClient);

  return tags;
}
