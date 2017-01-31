class App extends React.Component {

  constructor() {
    super()
    this.state = {
      portfolios: []
    }
    this.getPositions = this.getPositions.bind(this)
  }

  componentDidMount() {

    $.ajax({
      url: '/users//portfolios/list'
    }).done((response) => {
      debugger
      this.setState({portfolios: response})


    })
  }

  getPositions(userId,id) {
    $.ajax({
      url: 'users/' + userId +  '/portfolios/' + id + '/positions'
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
                <Portfolio onGetPositions={this.getPositions} key={i} portfolioId={p.id} userId ={p.user_id} portfolioName={p.name}/>
              )
          })
        }
      </div>
    )
  }

}
