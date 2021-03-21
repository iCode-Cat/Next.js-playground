import Head from 'next/head'
import Footer from '../componets/Footer'
import Navbar from '../componets/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
    <div className="">
    <Navbar/>
      <h1>HELLO WORLD!</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis error libero, aliquid distinctio veritatis accusamus perspiciatis? Earum quaerat, totam ducimus, dignissimos maxime quod nemo commodi rem accusantium ad ipsam sunt.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis error libero, aliquid distinctio veritatis accusamus perspiciatis? Earum quaerat, totam ducimus, dignissimos maxime quod nemo commodi rem accusantium ad ipsam sunt.</p>
      <Footer/>
    </div>
  )
}
