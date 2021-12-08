import {useState, useEffect, useCallback} from 'react';
import { useFeed } from '../../providers/FeedProvider';
import BobberDisplay from './BobberDisplay';
import Fisherman from './Fisherman';
import FeedPopup from './FeedPopup';

import Fish from '../../game/fish';

const GameDisplay = () => {
  const { sendFish } = useFeed();

  const [potentialCatch, setPotentialCatch] = useState();
  const [catchPatternPosition, setCatchPatternPosition] = useState();
  const [fishingStatus, setFishingStatus] = useState(false);
  const [currentPhase, setCurrentPhase] = useState('idle');
  const [sizeOffset, setSizeOffset] = useState(null);


  const fishingHandler = () => {
    if (!fishingStatus) {
      //Each new cast
      const fish = new Fish();
      setPotentialCatch(fish);
      setCatchPatternPosition(fish.catchPattern);
      setFishingStatus(true);
    } else {
      setFishingStatus(false);
      setCurrentPhase('idle');
    }
  }

  useEffect(() => {
    let start;
    if (currentPhase === 'catch') {
      start = Date.now()
      return () => {
        let adjustment = start - Date.now();
        setSizeOffset(adjustment);
      }
    }
  },[currentPhase])

  const adjustFish = useCallback((caughtFish) => {
      let size = caughtFish.size;
      size = caughtFish.size + (sizeOffset / 273);
      caughtFish.size = size.toFixed(2);
      return caughtFish;
    },[sizeOffset])

    useEffect(() => {
      if(sizeOffset !== null && sizeOffset > -1300) {
        sendFish(adjustFish(potentialCatch));
        setSizeOffset(null);
      }
    },[potentialCatch, sizeOffset, sendFish, adjustFish])

  return (
    <div className="col-9 flex-column flex-grow-1 fish-environment">
      <BobberDisplay
        status={fishingStatus}
        setStatus={setFishingStatus}
        pattern={catchPatternPosition}
        current={currentPhase}
        setCurrent={setCurrentPhase} />
      <Fisherman
        status={fishingStatus}
        current={currentPhase}
        clicked={fishingHandler}
        />
      <FeedPopup />
    </div>
  )
}

export default GameDisplay;
