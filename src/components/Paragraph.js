const Paragraph = () => {
  return (
    <div className="content-paragraph">
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  )
}
