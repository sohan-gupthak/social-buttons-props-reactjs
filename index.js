const Button = props => {
  //  Write your code here.
  const {className, buttonText} = props
  return <button className={`button ${className}`}>{buttonText}</button>
}

const element = (
  //  Write your code here.
  <div class='bg-container'>
    <h1 class='heading'>Social Buttons</h1>
    <div class='buttons-container'>
      <Button className='like-button' buttonText='Like' />
      <Button className='comment-button' buttonText='Comment' />
      <Button className='share-button' buttonText='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
