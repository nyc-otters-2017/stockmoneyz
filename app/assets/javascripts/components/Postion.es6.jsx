class Position extends React.Component {

  render() {
    return(
      <div>
        <ul>
          <li>
            {this.props.data.symbol}
          </li>
          <li>
            Days High {this.props.data.DaysHigh}
          </li>
          <li>
            Days Low {this.props.data.DaysLow}
          </li>
          <li>
            Current asking price {this.props.data.Ask}
          </li>
        </ul>
      </div>
    )
  }

}
