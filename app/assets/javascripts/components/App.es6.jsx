class App extends React.Component {

  constructor() {
    super()
    this.state = {
      positions: []
    }
  }

  handleClick(event) {
    event.preventDefault()
    this.props.onGetPositions(this.props.portfolioId)
  }


  render() {
    return (
      <div>
        <h1>Stocks!</h1>
          {
            <div>
        <button onClick={this.handleClick.bind(this)} > click me </button>
            <Portfolio positions={this.state.positions}/>
            </div>
          }
      </div>
    )
  }
}
