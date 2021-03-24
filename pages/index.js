import Head from 'next/head'
import Link from 'next/link';
import Footer from '../componets/Footer'
import Navbar from '../componets/Navbar'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from 'react';

export default function Home() {

  const [data, setData] = useState([]);
  

  useEffect(()=>{

  
    const strapis = async () => {

      const get = await fetch('http://localhost:1337/titles')
      const data = await get.json();
      setData(data)
    }
     strapis()
    console.log(data);
  }, [])

 

  return (
    
    <div className="">
      {data.map(data => (<h1>{data.Title}</h1>))}
      <h1 className={styles.title}>HELLO WORLD!</h1>
      <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis error libero, aliquid distinctio veritatis accusamus perspiciatis? Earum quaerat, totam ducimus, dignissimos maxime quod nemo commodi rem accusantium ad ipsam sunt.</p>
      <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis error libero, aliquid distinctio veritatis accusamus perspiciatis? Earum quaerat, totam ducimus, dignissimos maxime quod nemo commodi rem accusantium ad ipsam sunt.</p>
      <Link href='/ninjas'><a className={styles.btn}>See User Listing</a></Link>
    </div>
  )
}
