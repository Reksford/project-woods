import Sidebar from '../components/Sidebar';
import HighscoreBoard from '../components/fishing/HighscoreBoard';

const Highscore = () => {
  const text = "Check out the largest fish ever caught."

    return (
      <div className="d-flex">
        <Sidebar cardText={text} titleText="Highscores"/>
        <HighscoreBoard />
      </div>
    )
}

export default Highscore;
