
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  

  return (
    <div className='m-20' >
      <div>
        <Link to='/addCoffee' className='btn btn-ghost'>Add Coffee</Link>
      </div>
      
      <h1 className='text-6xl text-amber-800 text-center mb-6'>Hot and Cold Coffee:{coffees.length}</h1>
     <div className='grid md:grid-cols-2 gap-4'>
     {
        coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
      
     </div>
    </div>
  )
}

export default App
