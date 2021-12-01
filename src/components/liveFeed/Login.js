import { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useFeed } from '../../providers/FeedProvider';

const Login = () => {
  const {setNickname} = useFeed();
  const nameRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    let nickname = nameRef.current.value
    //nickname control
    setNickname(nickname);
  }

  return (
    <Form onSubmit={handleSubmit} className="w-100" style={{padding: '.5rem 1rem'}}>
      <Form.Group>
        <Form.Control type="text" ref={nameRef} placeholder="Enter a Nickname" required />
      </Form.Group>
      <Button type="submit" className="mr-2">Enter</Button>
    </Form>
  )
}

export default Login;
