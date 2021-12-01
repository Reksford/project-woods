import Sidebar from '../components/Sidebar.js';
import Feed from '../components/liveFeed/Feed';
import GameEnvironment from '../components/fishing/GameEnvironment';
import {SocketProvider} from '../providers/SocketProvider';
import {FeedProvider} from '../providers/FeedProvider';

const GoFishing = () => {
  const text = "Enjoy fishing! Activate the live feed to share your catches with other players."

  return (
    <SocketProvider>
      <FeedProvider>
        <div className="d-flex">
          <Sidebar cardText={text}>
            <Feed />
          </Sidebar>
          <GameEnvironment />
        </div>
      </FeedProvider>
    </SocketProvider>
  )
}

export default GoFishing;
