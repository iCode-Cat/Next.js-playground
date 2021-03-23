import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Navbar = () => {
    return ( 
    <>
        <Head>
            <meta name="keywords" content="juju"/>
        </Head>

    <nav>
        <div className="logo">
            <Image src="/me.jpg" width={'100%'} height={'100%'} />
        </div>
       <Link href='/'><a>Home</a></Link>
       <Link href='/about'><a>About</a></Link>
       <Link href='/ninjas'><a>Ninja Listing</a></Link>
    </nav> 
    </>
    );
}
 
export default Navbar;