import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const Fetch = () => {
    const { isLoading, error, data } = useQuery('parts', () => axios('http://localhost:5000/data'))

    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    console.log(data)

    return (
        <div>
            {data.data.map(part => (
                <div key={part.id}>
                    <h1>{part.name}</h1>
                    <p>{part.description}</p>
                </div>
            ))}

        </div>
    )
}


export default Fetch