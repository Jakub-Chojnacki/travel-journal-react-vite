import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data.js'
export default function App() {
  const cards = data.map(card => {
    return(
      <Card 
        key={card.id}
        card={card}
      />
    )
  })

  return (
      <div className="app">
         <Navbar/>
         {cards}
      </div>
      
  )
}


