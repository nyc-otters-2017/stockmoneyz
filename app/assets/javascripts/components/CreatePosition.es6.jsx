class CreatePosition extends React.Component {

  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    sym = this.refs.symbolVal
    price = this.refs.priceVal
    shares = this.refs.sharesVal
    this.props.onPostPosition(price.value,shares.value,sym.value)
    sym.value = ''
    price.value = ''
    shares.value = ''
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
