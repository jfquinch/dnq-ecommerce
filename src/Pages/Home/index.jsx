import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout/layout'
import Card from '../../Components/Card/index'

function Home() {
const [items, setItems] = useState(null)

useEffect(() => {
  fetch('https://api.escuelajs.co/api/v1/products')
  .then(response => response.json())
  .then(data => setItems(data))
}, []) 

  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg mt-24'>
      {
        items?.map(item => (
          <Card key={item.id} data={item}/>
        ))
      }
      </div>

    </Layout>
  )
}

export default Home