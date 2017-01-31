class Portfolio extends React.Component {

  constructor() {
    super()
    this.state = {
      positions: []
    }
  }

  handleClick(event) {
    event.preventDefault()
    this.props.onGetPositions(this.props.userId,this.props.portfolioId)

  }


  render() {
    return (
      <div>
        <h1>{this.props.portfolioName}</h1>

        <button onClick={this.handleClick.bind(this)} > click me </button>




      </div>
    )
  }
}
