import {useState} from 'react';
import {useInterval} from '../hooks/useInterval';

//Returns two seperate svgs per state to simulate animation.
const Bobber = ({status, current}) => {
    const [frame, setFrame] = useState(true);

    useInterval(() => {
      setFrame((prev) => !prev);
    }, status ? 120 : null)

    const activeFishing = () => {
      let svg;
      switch (current) {
        case 'idle':
            frame ? svg = <img src="/svg/Bobber-idle-1.svg" alt="Bobber idle" /> : svg = <img src="/svg/Bobber-idle-2.svg" alt="Bobber idle" />
          break;
        case 'tiny':
            frame ? svg = <img src="/svg/Bobber-tiny-1.svg" alt="Tiny tug" /> : svg = <img src="/svg/Bobber-tiny-2.svg" alt="Tiny tug" />
          break;
        case 'big':
            frame ? svg = <img src="/svg/Bobber-big-1.svg" alt="Big pull" /> : svg = <img src="/svg/Bobber-big-2.svg" alt="Big pull" />
          break;
        case 'catch':
            frame ? svg = <img src="/svg/Bobber-catch-1.svg" alt="Fish hooked!" /> : svg = <img src="/svg/Bobber-catch-2.svg" alt="Fish hooked!" />
          break;
      }
      return svg;
  }

  return activeFishing();
}

export default Bobber;
