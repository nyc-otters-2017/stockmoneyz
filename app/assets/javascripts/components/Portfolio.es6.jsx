class Portfolio extends React.Component {

  render() {
    return (
      <div>
        <h3>Positions!</h3>
          {
            this.props.positions.map((position) => {
              return(
                <Position key={position.symbol}
                  data={position}/>
              )
            })
          }
      </div>
    )
  }
}
