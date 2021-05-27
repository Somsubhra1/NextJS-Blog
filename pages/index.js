// import Head from "next/head";
import ArticleList from "../components/ArticleList";
import { server } from "../config/";

export default function Home({ articles }) {
  return (
    <div>
      {/* Head inbuilt component helps to add meta data and head section to our pages */}
      {/*<Head>
        <title>Web Dev Newz</title>
        <meta name="keywords" content="web development, programming" />
      </Head>*/}

      <ArticleList articles={articles} />
    </div>
  );
}

// Fetch data at build time using getStaticProps

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );

//   const articles = await res.json();

//   // return object with props with the data object inside it
//   return {
//     props: {
//       articles,
//     },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`, {
    method: "GET",
    headers: {
      // update with your user-agent
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8",
    },
  });

  const articles = await res.json();

  // return object with props with the data object inside it
  return {
    props: {
      articles,
    },
  };
};
