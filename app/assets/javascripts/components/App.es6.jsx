class App extends React.Component {

  constructor() {
    super()
    this.state = {
      portfolios: []
    }

    this.postPosition = this.postPosition.bind(this)
  }

  componentDidMount() {
    $.ajax({
      url: '/users/' + this.props.user_id + '/portfolios/list'
    }).done((response) => {
      this.setState({portfolios: response})
    })
  }


 postPosition(price,shares,someSymbol){

    $.ajax({
      method:"post",
      url: '/users/' + this.props.user_id + '/portfolios/' + this.props.id +' /create',

      data: {query: {results: { quote: {buy_price: price, num_shares: shares, symbol: someSymbol } }}}


    }).success(function(response){

    })
  }


  render() {
    return (
      <div>
        <h1>Things!</h1>
          <CreatePosition onPostPosition={this.postPosition}/>
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
