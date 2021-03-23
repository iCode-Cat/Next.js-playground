
import {useEffect} from 'react';
import { useRouter } from 'next/router';

const Notfound = () => {

    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        }, 3000)
    }, [])

    return ( 
        <div className="">
            <h1>OPPS...</h1>
            <p>This page has been not found!</p>
        </div>
     );
}
 
export default Notfound;