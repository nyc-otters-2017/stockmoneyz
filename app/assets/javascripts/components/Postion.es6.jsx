class Position extends React.Component {

  constructor() {
    super()
    this.state = {
      details: true,
      numShares: 0,
      buyPrice: 0,
      costBasis: 0,
      costValue: 0,
      pnL: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    $.ajax({
      url: 'portfolios/' + this.props.portfolioId +'/positions/' + this.props.data.symbol
    }).done((response) => {
      this.setState({numShares: response.numShares, buyPrice: response.buyPrice})
      this.setState({costBasis: (this.state.numShares * this.props.data.Ask)})
      this.setState({costValue: (this.state.numShares * this.state.buyPrice)})
      this.setState({pnL: (this.state.numShares * this.props.data.Ask) - (this.state.numShares * this.state.buyPrice)})
    })
  }

  handleClick(event) {
    event.preventDefault()
    let status = this.state.details
    this.setState({details: !status})
  }

  render() {
    const yourDetailsAreShowing = this.state.details

    if (yourDetailsAreShowing) {
      var details = (
        <div>
          <table>
            <tbody>
            <tr>
              <th className="t-headers">Current Value</th>
              <th className="t-headers">Cost Basis</th>
              <th className="t-headers">P & L</th>
            </tr>
            <tr>
              <td>{this.state.costBasis}</td>
              <td>{this.state.costValue}</td>
              <td>{this.state.pnL}</td>
            </tr>
            </tbody>
          </table>
          <form action={'/users/'+ this.props.userId +'/portfolios/' + this.props.portfolioId + '/positions/' + this.props.data.symbol} method="post">
            <input type="hidden" name="_method" value="patch"/>
            <input type="text" name="position[num_shares]" placeholder="Sell"/>
            <input type="submit" value="Sell"/>
          </form>
        </div>
      )
    }
    return(
      <div>
        <ul>
          <li>
            <a href={'/positions/' + this.props.data.symbol} onClick={this.handleClick}>{this.props.data.symbol}</a>
          </li>
          <div>
            { details }
          </div>
        </ul>
      </div>
    )
  }

}
