

export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: {id:ninja.id.toString()}
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
    const data = await res.json()

    return {
        props:{users:data}
    }
}


const Details = ({users}) => {
    return ( 
        <div className="">
            <h1>{users.name}</h1>
            <h1>{users.website}</h1>
        </div>
     );
}
 
export default Details;