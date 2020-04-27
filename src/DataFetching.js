import React , { useState , useEffect } from 'react';

function DataFetching() {
    const [posts , serPosts] = useState([])

    useEffect(()=>{
        fetch('https://demojson.herokuapp.com/cart', {
        mode: 'no-cors', 
        })
        .then(async (res) =>  {
        
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

    })
    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.community_manager_mail}>{posts.community_manager_mail}</li>)
                }
            </ul>
        </div>
    )
}
 
export default DataFetching
