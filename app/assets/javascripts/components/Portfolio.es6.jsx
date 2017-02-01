class Portfolio extends React.Component {

  constructor() {
    super()
    this.state = {
      positions: [],
      details: false,
      buyPrice: 0,
      costBasis: 0,
      costValue: 0,
      pnL: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.getPositions = this.getPositions.bind(this)
    // this.instantLoad = this.instantLoad.bind(this)
  }

  getPositions(userId,id) {
      $.ajax({
        url: 'portfolios/' + id + '/positions'
      }).done((response) => {
        this.setState({positions: [].concat.apply([], response.query.results.quote)})
      });
  }

  instantLoad(userId,id) {
    this.getPositions(userId, id)
    var timer = setInterval(() => {
      this.getPositions(userId, id)
    }, 5000)
  }

  handleClick(event) {
    event.preventDefault()
    this.instantLoad(this.props.userId,this.props.portfolioId)
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
                <Position key={i} data={pos} />
              )
            })
          }
        </div>
      )
    }
    return (
      <div>
        <a href="#" onClick={this.handleClick} ><h1>{this.props.portfolioName}</h1></a>
        { details }
      </div>
    )
  }
}
