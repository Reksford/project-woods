import {useState, useEffect, useCallback} from 'react';
import {useInterval} from '../hooks/useInterval';
import Bobber from './Bobber';

// For general display of Bobber, useInterval handles fishing pattern progression
const BobberDisplay = ({status, setStatus, pattern, current, setCurrent}) => {
  const [idx, setIdx] = useState(-1);

  const styles = {
    idle: {background: 'darkblue', color: 'white'},
    tiny: {background: 'cyan', color: 'white'},
    big: {background: 'teal', color: 'white'},
    catch: {background: 'green', color: 'white'}
  }

  const aNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useInterval(() => {
      if (idx >= pattern.length && pattern[idx] == null) {
        setStatus(false);
      } else if(idx >= 0 && pattern[idx] !== current && pattern[idx] !== null) {
        setCurrent(pattern[idx]);
      } else if (pattern[idx] === current || idx < 0) {
        setCurrent('idle');
        setIdx(prev => prev + 1);
      }
  }, status ? aNumberBetween(1300, 1500) : null)

  useEffect(() => {
    setIdx(-1);
  }, [status])

  return (
    <div className="bobber-display">
    {
      status ? <Bobber status={status} current={current} /> : null
    }
    </div>
  )
}

export default BobberDisplay;
