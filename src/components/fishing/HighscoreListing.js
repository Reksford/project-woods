

const HighscoreListing = (props) => {
//props expects an array of objs, {fish, player}
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
        <div className="Highscore-entry" key={entry.fish.name}>
          <h3>{entry.fish.name}</h3>
          <p>{entry.fish.size}cm caught by '{entry.name}'</p>
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
