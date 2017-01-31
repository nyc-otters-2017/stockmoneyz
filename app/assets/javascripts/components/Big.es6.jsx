class Big extends React.Component {

  constructor() {
    super()
    this.state = {
      portfolios: [],
    }
    this.getPositions = this.getPositions.bind(this)
  }

  componentDidMount() {
    $.ajax({
      url: '/portfolios/list'
    }).done((response) => {
      this.setState({portfolios: response})
    })
  }

  getPositions(id) {
    $.ajax({
      url: '/portfolios/' + id + '/positions'
    }).done((response) => {
      this.setState({positions: response.query.results.quote})
    })
  }

  render() {
    return (
      <div>
        <h1>Things!</h1>
          {
            this.state.portfolios.map((p, i) => {
              return (
                <App onGetPositions={this.getPositions} key={i} portfolioId={p.id} portfolioName={p.name}/>
              )
          })
        }
      </div>
    )
  }

}
