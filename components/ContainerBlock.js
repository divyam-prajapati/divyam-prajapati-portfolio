import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title:
      "Divyam Prajapati - Developer, Tech Savvy., AI Enthusiast and Problem Solver",
    description: `I'm a Tech Wizard: Transforming Code into Captivating Digital Experiences. Let's Connect!`,
    image: "/og.jpeg",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://divyam-prajapati.github.io/divyam-prajapati-portfolio/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://divyam-prajapati.github.io/divyam-prajapati-portfolio/${router.asPath}`}
        />
          
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Divyam Prajapati " />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />

      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
