class App extends React.Component {

  constructor() {
    super()
    this.state = {
      positions: [],
      symbolNames: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/portfolios/positions/'
    }).success((symbolNames) => {
      this.setState({symbolNames})
    })
    var timer = setInterval(() => {
      $.ajax({
        url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22'+ +this.state.symbolNames +'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
      }).success((response) => {
        this.setState({positions: response.query.results.quote})
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(timer)
  }


  render() {
    return (
      <div>
        <h1>Stocks!</h1>
          {
            <Portfolio positions={this.state.positions}/>
          }
      </div>
    )
  }
}
