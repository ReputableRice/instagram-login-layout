import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Form from '@/components/Form'
import Signup from '@/components/Sign-Up'
import App from '@/components/GetApp'
import FooterInstagram from '@/components/Footer'

import JSXStyle from 'styled-jsx/style'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>

      <main className={`${styles.main}`}>
      <div>
        <Form/>
        <br className={styles.formSpacing}></br>
        <Signup/>
        <br></br>
        <App/>
      </div>
      </main>

      </body>
      <footer>
      <FooterInstagram/>
      </footer>
    </>
  )
}
