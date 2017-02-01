User.create(full_name: 'Tina', email:'tina@moneyz.com', password: 'password')

tickers = %w(AAPL YHOO GOOG A C HOG HPQ INTC MSFT WMT TGT TXN KO MMM LUV T NYT BUD ZEUS MOO GRR COOL BOOM FIZZ NASDAQ DJIA AMZN)
portfolios = %w(Tiger Dog Bird Elephant Wolf Fish)

portfolios.each do |po|
  Portfolio.create(user_id: 2, name: po)
  Position.create(symbol: tickers.sample, buy_price: rand(50..300), num_shares: rand(20..200), user_id: 2, portfolio_id: Portfolio.last.id)
  Position.create(symbol: tickers.sample, buy_price: rand(50..300), num_shares: rand(20..200), user_id: 2, portfolio_id: Portfolio.last.id)
  Position.create(symbol: tickers.sample, buy_price: rand(50..300), num_shares: rand(20..200), user_id: 2, portfolio_id: Portfolio.last.id)
  Position.create(symbol: tickers.sample, buy_price: rand(50..300), num_shares: rand(20..200), user_id: 2, portfolio_id: Portfolio.last.id)
  Position.create(symbol: tickers.sample, buy_price: rand(50..300), num_shares: rand(20..200), user_id: 2, portfolio_id: Portfolio.last.id)
  Position.create(symbol: tickers.sample, buy_price: rand(50..300), num_shares: rand(20..200), user_id: 2, portfolio_id: Portfolio.last.id)
  Position.create(symbol: tickers.sample, buy_price: rand(50..300), num_shares: rand(20..200), user_id: 2, portfolio_id: Portfolio.last.id)
  Position.create(symbol: tickers.sample, buy_price: rand(50..300), num_shares: rand(20..200), user_id: 2, portfolio_id: Portfolio.last.id)
  Position.create(symbol: tickers.sample, buy_price: rand(50..300), num_shares: rand(20..200), user_id: 2, portfolio_id: Portfolio.last.id)
  Position.create(symbol: tickers.sample, buy_price: rand(50..300), num_shares: rand(20..200), user_id: 2, portfolio_id: Portfolio.last.id)
  Position.create(symbol: tickers.sample, buy_price: rand(50..300), num_shares: rand(20..200), user_id: 2, portfolio_id: Portfolio.last.id)
end
