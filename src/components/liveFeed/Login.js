import { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFeed } from '../../providers/FeedProvider';

const Login = () => {
  const {setNickname} = useFeed();
  const nameRef = useRef()
  const [form, setForm] = useState(<Form.Control type="text" ref={nameRef} placeholder="Enter a Nickname" required />)

  function isValid(name) {
    return name.length <= 12 && name.length > 0
  }

  function submitHandler(e) {
    e.preventDefault()
    let nickname = nameRef.current.value
                   .trim().replaceAll(/([^\w])/g, "_");
    if (isValid(nickname)) {
      setNickname(nickname);
    } else {
      setForm(<Form.Control type="text" ref={nameRef} placeholder="Enter a Nickname" required isInvalid/>)
    }
  }

  return (
    <Form onSubmit={submitHandler} className="w-100" style={{padding: '.5rem 1rem'}}>
      <Form.Group>
        {form}
        <Form.Control.Feedback type="invalid">Username must be 1-12 alphanumeric characters</Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" className="mr-2">Enter</Button>
    </Form>
  )
}

export default Login;
