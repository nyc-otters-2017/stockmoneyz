class App extends React.Component {

  constructor() {
    super()
    this.state = {
      portfolios: []
    }

  }

  componentDidMount() {

    $.ajax({
      url: '/users/' + this.props.user_id + '/portfolios/list'
    }).done((response) => {

      this.setState({portfolios: response})

    })
  }




  render() {
    return (
      <div>
        <h1>Things!</h1>

          {
            this.state.portfolios.map((p, i) => {
              return (
                <Portfolio key={i} portfolioId={p.id} userId ={p.user_id} portfolioName={p.name}/>


              )
          })
        }
      </div>
    )
  }

}
