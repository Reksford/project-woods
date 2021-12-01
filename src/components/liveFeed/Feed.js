import Form from 'react-bootstrap/Form'
import Login from './Login';
import ActiveFeed from './ActiveFeed';
import { useFeed } from '../../providers/FeedProvider';
import { useSocket } from '../../providers/SocketProvider';

const Feed = () => {
  const { nickname } = useFeed();
  const {hasSocket, setHasSocket} = useSocket();

  const createFeed = () => {
    if(hasSocket) {
      return nickname ? <ActiveFeed name={nickname}/> : <Login />
    } else {
      return <div className="flex-grow-1 overflow-auto">Fishing Feed Off</div>
    }
  }

  return (
    <>
    <Form style={{padding: '.5rem 1rem'}}>
      <Form.Check
        type="checkbox"
        label="enable fishing feed"
        id="fishingFeed"
        value={hasSocket}
        onChange={() => setHasSocket(prev => !prev)}
      />
    </Form>
    {createFeed()}
    </>
  )
}

export default Feed;
