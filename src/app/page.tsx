import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '@/components/Products';
import Footer from '@/components/Footer';



const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Ladies E-commerce Store</title>
      </Head>
      <Header />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
};

export default HomePage;
