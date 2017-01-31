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
          <td>
            <th>Current Value</th>
            <tr>{this.props.data.Ask}</tr>
          </td>
          <td>
            <th>Cost Basis</th>
            <tr>{this.props.data.Bid}</tr>
          </td>
          <td>
            <th>Current Value</th>
            <tr>{this.props.data.Ask}</tr>
          </td>
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
