class Position extends React.Component {

  render() {
    return(
      <div>
        <li>
          {this.props.data.symbol}
        </li>
        <li>
          {this.props.data.DaysHigh}
        </li>
        <li>
          {this.props.data.DaysLow}
        </li>
      </div>
    )
  }

}
