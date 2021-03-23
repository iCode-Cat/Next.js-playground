import styles from '../../styles/Job.module.css'
import Link from 'next/link';
export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    return {
        props:{users : data}
    }

}

const Ninjas = ({users}) => {

    console.log(users);

    return ( 
        <div className="">
            <h1>All Ninjas!</h1>
            {users.map(user=> (
                <Link href={'/ninjas/' + user.id} key={user.id}>
                    <a className={styles.single}>
                        <h3>{user.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Ninjas;