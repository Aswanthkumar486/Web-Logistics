import Head from "next/head";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import data from "../data/data.json"
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
export default function Home({ products,navbar,services,footer,heropage,about }) {
  return (
    <>
      <Head>
        <title>Logic Template</title>
      </Head>
      <Navbar nav={navbar}  />
      <Hero hero={heropage} />
      <About about={about} />
          <Services services={services} />
              <Card data={products} />
     
      
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      navbar: data.navbar,
      heropage: data.hero,
      services: data.services,
      products: data.cards.items ?? [],
      about: data.about,
      footer: data.footer
    },
  };
}


