import React from 'react';
import Layout from '@theme/Layout';
import Hero from '@site/src/components/Hero';
import Expertise from '@site/src/components/Expertise';
import Projects from '@site/src/components/Projects';
import Connect from '@site/src/components/Connect';
import BackgroundGrid from '@site/src/components/BackgroundGrid';

export default function Home(): React.ReactNode {
  return (
    <Layout title="Adrian Enßlin" description="Fullstack Developer & DevSecOps Engineer Portfolio">
      <BackgroundGrid />

      <main className="homepage-main">
        <Hero />
        <Expertise />
        <Projects />
        <Connect />
      </main>
    </Layout>
  );
}