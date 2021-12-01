import {useEffect, useState} from 'react';
import {useInterval} from '../hooks/useInterval';

const Fisherman = ({status, current, clicked}) => {
  const [svg, setSvg] = useState(<img src="/svg/Fisherman-1.svg" alt="Fisherman idle" />)
  const [frame, setFrame] = useState(true);

  useEffect(() => {
    if(!status) {
      setSvg(<img src="/svg/Fisherman-1.svg" alt="Fisherman idle" />)
      setFrame(true)
    } else {
      frame ? setSvg(<img src="/svg/Fisherman-2.svg" alt="Fisherman inbetween frame" />) : setSvg(<img src="/svg/Fisherman-3.svg" alt="Fisherman fishing" />)
      setFrame(false);
    }
  }, [status, frame])

  useEffect(() => {
    if(current === 'catch') {
      setSvg(<img src="/svg/Fisherman-4.svg" alt="Fisherman pulling on line" />);
    }
  }, [current])

  return (
      <div className="fisherman-display" onClick={clicked}>
        {svg}
      </div>
  )
}

export default Fisherman;
