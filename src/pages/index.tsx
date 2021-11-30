import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

import Logo from '../assets/logo.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>React setup</title>

        <link rel="icon" href="../assets/favicon.ico" />
      </Head>

      {/* <Logo /> */}
      <h1>ReactJS + Next.js</h1>
      <p>My react setup structure made by Bruno Mota.</p>
    </Container>
  )
}

export default Home
