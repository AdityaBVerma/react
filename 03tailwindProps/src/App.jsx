import './App.css'
import Card from './components/Card.jsx'
import CardHolder from './components/CardHolder.jsx'

function App() {

  return (
    <CardHolder>
        <Card title="experts" price='99' plan="GOLD" duration= 'month' color="bg-slate" offers={["24 Team Members","50 GB Cloud Storage","1000+ UI Blocks", "Chat Support", "analytics platform","-", "-"]}/>
        <Card title="businesses" price='199' plan="PLATINUM" duration= 'month' color="bg-black" offers={["50 Team Members","100 GB Cloud Storage","2800+ UI Blocks", "Chat Support", "Own analytics platform", "Ads Banner Free", "Teams Support"]}/>
        <Card title="beginners" price='49' plan="SILVER" duration= 'month' color="bg-blue-900" offers={["3 Team Members","10 GB Cloud Storage","100+ UI Blocks", "-", "-", "-", "-"]}/>
    </CardHolder>
  )
}

export default App
