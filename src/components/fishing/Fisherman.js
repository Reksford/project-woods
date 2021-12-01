import {useEffect, useState} from 'react';

const Fisherman = ({status, current, clicked}) => {
  const [svg, setSvg] = useState(<img src="/svg/Fisherman-1.svg" alt="Fisherman idle" />)

  useEffect(() => {
    if(!status) {
      setSvg(<img src="/svg/Fisherman-1.svg" alt="Fisherman idle" />)
    } else if (current === 'idle') {
      setSvg(<img src="/svg/Fisherman-3.svg" alt="Fisherman fishing" />)
    } else {
      setSvg(<img src="/svg/Fisherman-2.svg" alt="Fisherman tugging" />)
    }
  }, [status, current])

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
