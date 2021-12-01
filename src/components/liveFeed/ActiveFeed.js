import {useFeed} from '../../providers/FeedProvider';

const ActiveFeed = (props) => {
  const {sendFish, textFeed} = useFeed();
  let tempFish = {name: 'flounder', size: 12.5, type: 'medium'}

  return (
    <div className="d-flex flex-column flex-grow-1" style={{padding: '.5rem 1rem'}}>
      <span>Fishing as {props.name}...</span>
      <div className="flex-grow-1 overflow-auto" style={{maxHeight: '500px'}}>
        <div className="d-flex flex-column align-items-start justify-content-end liveFeedDiv">
          {textFeed.map((text, idx) => {
              return <span className="liveFeedText" key={idx}>{text}</span>
          })}
        </div>
      </div>
      <button onClick={() => sendFish(tempFish)}>New Fish</button>
    </div>
  )
}

export default ActiveFeed;
