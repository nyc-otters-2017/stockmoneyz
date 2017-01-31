temp = User.new(full_name: 'jj', email:'jj@jj.com', password: 'password')
temp.save
temp.portfolios.create(name: 'fun stuff')
temp.portfolios.first.positions.create(symbol: 'AAPL', buy_price: 100, num_shares: 50)
