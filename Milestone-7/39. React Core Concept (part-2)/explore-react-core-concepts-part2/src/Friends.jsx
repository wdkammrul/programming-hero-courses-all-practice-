import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'

export default function Friends() {
    // step-1 
    const [friends, setFriends] = useState([])
    // step-2 
    useEffect(() => {
        // step-3 
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            // step-4
            .then(data => setFriends(data))
    }, [])
    return (
        <div className="box">

            <h3>Friends: {friends.length} 
            </h3>
            {/* step-5  */}
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>

    )
}


/**
 * 1. declare a state to hold the data
 * 2. useEffect with call back and dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state 
 * 5. display data on the component 
 */