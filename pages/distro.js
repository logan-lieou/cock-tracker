import { useState, useEffect } from 'react'

function Distro(props) {
  // TODO implement rating system
  const [rank, setRank] = useState('Iron');
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // iron, bronze, silver, gold, diamond
    if (props.length <= 1) {
      setRank('Iron');
      setPercent(1);
    } else if (props.length <= 3) {
      setRank('Bronze');
      setPercent(20);
    } else if (props.length <= 5 && props.girth <= 2) {
      setRank('Silver');
      setPercent(50);
    } else if (props.length <= 7 && props.girth <= 3) {
      setRank('Gold');
      setPercent(70);
    } else if (props.length <= 9 && props.girth <= 4) {
      setPercent('Diamond');
      setPercent(99);
    }
  }, [])

  return (
    <div style={{width: 800, margin: "auto", marginTop: 20}}>
      <h1>You have a {rank} Cock</h1>
      <hr/>
      You have a cock better than {percent} percent of players.
    </div>
  )
}

export default Distro;

