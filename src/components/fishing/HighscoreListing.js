

const HighscoreListing = (props) => {
//props expects an array of objs: {ID, fish_name, fish_size, player_nickname}
  let title;
  switch (props.type) {
    case 'small':
      title = <h1>Small</h1>;
      break;
    case 'medium':
      title = <h1>Medium</h1>;
      break;
    case 'large':
      title = <h1>Large</h1>;
      break;
  }

  let content;
  if (props.arr.length > 0) {
    content = props.arr.map((entry) => {
      return(
        <div className="Highscore-entry" key={entry.ID}>
          <h3>{entry.fish_name}</h3>
          <p>{entry.fish_size.toFixed(2)}cm caught by '{entry.player_nickname}'</p>
        </div>
      )
    })
  }

  return (
    <div className="col-4 flex-column flex-grow-1">
      {title}
      {content}
    </div>
  )
}

export default HighscoreListing;
