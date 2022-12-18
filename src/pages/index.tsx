import Head from 'next/head';
import NavBar from '@/components/ui/nav-bar';
import PageHeader from '@/components/page-header';
import Timeline from '@/components/timeline';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="electra z" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="">
        <NavBar></NavBar>
        <PageHeader />
        <Timeline />
      </main>

      <footer className=""></footer>
    </div>
  );
}
