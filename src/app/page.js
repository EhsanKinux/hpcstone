import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>HPCstone</title>
        <meta name="description" content="خرید سریع و مطمئن و ارزان مرغوب ترین سنگ های قروه" />
      </Head> */}
      <main className="">
        <div>
          <Intro />
          <Services />
          <Testimonials/>
        </div>
      </main>
    </>
  )
}

// export const getStaticProps = () => {
//   const services = data;
//   return {
//     props: {services},
//   };
// };