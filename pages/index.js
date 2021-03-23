import Head from 'next/head'
import Link from 'next/link';
import Footer from '../componets/Footer'
import Navbar from '../componets/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
    <div className="">
 
      <h1 className={styles.title}>HELLO WORLD!</h1>
      <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis error libero, aliquid distinctio veritatis accusamus perspiciatis? Earum quaerat, totam ducimus, dignissimos maxime quod nemo commodi rem accusantium ad ipsam sunt.</p>
      <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis error libero, aliquid distinctio veritatis accusamus perspiciatis? Earum quaerat, totam ducimus, dignissimos maxime quod nemo commodi rem accusantium ad ipsam sunt.</p>
      <Link href='/ninjas'><a className={styles.btn}>See Ninja Listing</a></Link>
    </div>
  )
}
