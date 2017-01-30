class App extends React.Component {

  constructor() {
    super()
    this.state = {
      data: [],
    }

  }

  componentDidMount() {
    var timer = setInterval(() => {
      $.ajax({
        url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22AAPL%22,%20%22YHOO%22,%20%22GOOG%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys' // made up route
      }).success((response) => {
        this.setState({data: response.query.results.quote})
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
        <Portfolio positions={this.state.data} />
      </div>
    )
  }
}
