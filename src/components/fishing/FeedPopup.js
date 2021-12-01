// import { useEffect, useState } from 'react';
import { useFeed } from '../../providers/FeedProvider';

const FeedBox = () => {
  const {recentCatch} = useFeed();

  return (
    <div className="feed-popup" style={recentCatch ? {display: 'block'} : {display: 'none'}}>
      <p>{recentCatch == null ? null : `You caught a ${recentCatch.size}cm ${recentCatch.name}!`}</p>
    </div>
  )
}

export default FeedBox;
