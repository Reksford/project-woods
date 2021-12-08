import Sidebar from '../components/Sidebar.js';

const Main = () => {
  const text = "Welcome to my portfolio site."

    return (
      <>
        <Sidebar cardText={text}/>
        <h1>Rexford Borawski</h1>
      </>
    )
}

export default Main;
