class Portfolio extends React.Component {

  constructor() {
    super()
    this.state = {
      positions: [],
      details: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.getPositions = this.getPositions.bind(this)
  }

  getPositions(userId,id) {
    $.ajax({
      url: 'portfolios/' + id + '/positions'
    }).done((response) => {
      this.setState({positions: [response.query.results.quote]})
    })
  }

  handleClick(event) {
    event.preventDefault()
    this.getPositions(this.props.userId,this.props.portfolioId)
    let status = this.state.details
    this.setState({details: !status})
  }


  render() {
    let yourDetailsAreShowing = this.state.details
    if (yourDetailsAreShowing) {
      var details = (
        <div>
          {
            this.state.positions.map((pos, i) => {
              return (
                <Position key={i} data={pos}/>
              )
            })
          }
        </div>
      )
    }
    return (
      <div>
        <h1>{this.props.portfolioName}</h1>
        <button onClick={this.handleClick} > click me </button>
        { details }
      </div>
    )
  }
}
