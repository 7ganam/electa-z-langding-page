import Head from 'next/head';
import NavBar from '@/components/ui/nav-bar';
import PageHeader from '@/components/page-header';
import Timeline from '@/components/timeline/timeline';
import Services from '@/components/services';
import Why from '@/components/why';
import ContactUs from '@/components/contact-us';
import Footer from '@/components/footer';
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
        <Services />
        <Why />
        <ContactUs />
        <Footer />
      </main>

      <footer className=""></footer>
    </div>
  );
}
