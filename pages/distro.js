import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import dynamic from 'next/dynamic'

const DynamicPlot = dynamic(import('./plot'), {
  ssr: false
})

function Distro(props) {
  const [rank, setRank] = useState('Iron');
  const [percent, setPercent] = useState(0);
  const [score, setScore] = useState(800);

  return (
    <div style={{width: 800, margin: "auto", marginTop: 20}}>
      <h1>You have a {rank} Cock</h1>
      <hr/>
      <Card style={{padding: 20}}>
        <Card.Title>
          You have a cock better than {percent} percent of players.
        </Card.Title>
        <Card.Body>
          Length: {props.length} <br/>
          Girth: {props.girth} <br/>
          Score: {score}
        </Card.Body>
      </Card>
      <DynamicPlot/>
    </div>
  )
}

export default Distro;

