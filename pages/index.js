import Head from "next/head";

export default function Home() {
  return (
    <div>
      {/* Head inbuilt component helps to add meta data and head section to our pages */}
      <Head>
        <title>Web Dev Newz</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  );
}
