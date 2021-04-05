import Head from 'next/head';
import Link from 'next/link';

import Teste from './teste';
import MuchInsanics from './muchInsanics';

const Home = () => {

  const pids = ['id1', 'id2', 'id3'];

  return <div>
    <Head>
      <title>First App</title>
      <meta name="description" content="Meu primeiro Site app com NextJS." />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="keywords" content="Teste, como testar uma página, testando páginas nextjs, nextjs testing page"/>
      <meta name="robots" content="index, follow" />
    </Head>
    Hello World!
    <p>scoped!</p>
      <div>
        <Teste />
        <MuchInsanics width="400" height="230" />
      </div>

      {pids.map(pid => (
        <Link href="/post/[pid]" as={`/post/${pid}`}>
          
            <a>Post {pid}</a>
          
        </Link>
      ))}

      <style jsx>{`
          div {
            background: #999;
          }
          h1 {
            color: white;
          }
          @media (max-width: 900px) {
            div {
              background: blue;
            }
          }
      `}</style>
      <style global jsx>{`
          body {
            background: #eee;
          }
          p {
            color: white;
          }
          h1 {
            background: #111;
            color: white;
          }
      `}</style>
  </div>;
}

export default Home;