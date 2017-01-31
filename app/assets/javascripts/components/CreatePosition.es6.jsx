class CreatePosition extends React.Component {

  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    e.preventDefault()

    sym = refs.symbolVal
    price = refs.priceVal
    shares = refs

    this.props.onPostPosition()


  }

  render(){

    return(
      <div>
      <form onSubmit={this.handleSubmit} >
        <input type="text" ref="symbolVal" placeholder="symbol"/>
        <input type="text" ref="priceVal" placeholder="buy price"/>
        <input type="text" ref="sharesVal" placeholder="number of shares"/>
        <input type="submit"/>
      </form>
      </div>
    )
  }
}
