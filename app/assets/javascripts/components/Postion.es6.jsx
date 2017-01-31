class Position extends React.Component {

  constructor() {
    super()
    this.state = {
      details: false
    }
    this.handleClick = this.handleClick.bind(this)
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
          <tr>
            <th>Current Value</th>
            <td>{this.props.data.Ask}</td>
          </tr>
          <tr>
            <th>Cost Basis</th>
            <td>{this.props.data.Bid}</td>
          </tr>
          <tr>
            <th>Current Value</th>
            <td>{this.props.data.Ask}</td>
          </tr>
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
