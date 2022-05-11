import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { HomePageHeader } from '../src/components/HomePageHeader'
import { HomePageHero } from '../src/components/HomePageHero'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>    
      <HomePageHeader/>  
      <HomePageHero/>
      </main>

      <footer className={styles.footer}>     
      </footer>
    </div>
  )
}

export default Home
