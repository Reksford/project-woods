import Sidebar from '../components/Sidebar.js';
import Feed from '../components/liveFeed/Feed';
import GameEnvironment from '../components/fishing/GameEnvironment';
import {SocketProvider} from '../providers/SocketProvider';
import {FeedProvider} from '../providers/FeedProvider';

const GoFishing = () => {
  const text = "Click on the fisherman to cast, click again at the right time to catch a fish. Activate the live feed and share your catches with other players. Enjoy fishing!"

  return (
    <SocketProvider>
      <FeedProvider>
        <div className="d-flex">
          <Sidebar cardText={text} titleText="Go Fishing">
            <Feed />
          </Sidebar>
          <GameEnvironment />
        </div>
      </FeedProvider>
    </SocketProvider>
  )
}

export default GoFishing;
