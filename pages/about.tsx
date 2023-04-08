import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";

function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <h1>Esta es la página de about</h1>
    </div>
  );
}

export default About;
