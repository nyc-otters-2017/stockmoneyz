class Position extends React.Component {

  constructor() {
    super()
    this.state = {
      details: false,
      numShares: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    $.ajax({
      url: 'positions/' + this.props.data.symbol
    }).done((shares) => {
      this.setState({numShares: shares})
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
        <table>
          <tbody>
          <tr>
            <th>Current Value</th>
            <th>Cost Basis</th>
            <th>P & L</th>
          </tr>
          <tr>
            <td>{this.state.numShares * this.props.data.Ask}</td>
            <td>{this.state.numShares * this.props.data.Bid}</td>
            <td>{(this.state.numShares * this.props.data.Ask) - (this.state.numShares * this.props.data.Bid)}</td>
          </tr>
          </tbody>
        </table>
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
