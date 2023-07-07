import React from "react";
import Head from "next/head";
import RootLayout from "@/app/layout";
import Circle from "@/components/Circle";
import Image from "next/image";
import style from "@/app/styles/aboutus.module.css";
import SlideShow from "@/components/SlideShow";

export default function About() {
  return (
    <>
      {/* <Head>
        <title>HPCstone</title>
        <meta
          name="description"
          content="خرید سریع و مطمئن و ارزان مرغوب ترین سنگ های قروه"
        />
      </Head> */}
      <RootLayout>
        <div className="overflow-hidden relative h-screen flex flex-col justify-center items-center">
          <Circle
            backgroundColor="#b0ff49"
            top="-50vh"
            left="-50vh"
            width="100vh"
            height="100vh"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="flex flex-col items-center justify-center text-2xl font-bold">
              درباره ی ما
            </h2>
            <div className="flex items-center justify-center mx-4 mt-10 ">
              <Image
                src="/img/market.jpg"
                alt="travertin"
                width="400"
                height="30"
              />
              <p className={`flex ${style.rtlForP}`}>
                شرکت بازرگانی HPCStone، یک شرکت بازرگانی ممتاز، صادق و قابل
                اعتماد با کادری پر تلاش است که مشتریان را در یافتن سنگ های مرغوب
                به شکل اسلب، تایل یا بلوک از معادن غرب کشور و به طور خاص شهرستان
                قروه یاری می نماید.
              </p>
            </div>
          </div>
          <Circle
            backgroundColor="#b0ff49"
            top="10vh"
            right="-50vh"
            width="100vh"
            height="100vh"
          />
        </div>
        <div className={`flex justify-center mt-8 ${style.secondPart}`}>
          <div className={`flex flex-col items-center ${style.gapP}`}>
            <p className="font-bold text-2xl">
              تجربه سالها حضور در بازار سنگ داخل و خارج ایران، همکاری با
              معتبرترین معادن استخراج داخلی
            </p>
            <p className="font-bold text-xl">
              صادرات مرغوب ترین سنگ های غرب کشور به تمام دنیا
            </p>
          </div>
        </div>
        <SlideShow />ّ
      </RootLayout>
    </>
  );
}
