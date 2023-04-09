import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    coinVlaue: 0,
    headsCount: 0,
    tailCount: 0,
  }

  buttonClicked = () => {
    const count = Math.floor(Math.random() * 2)
    if (count === 0) {
      this.setState(preVal => ({
        coinVlaue: count,
        headsCount: preVal.headsCount + 1,
      }))
    } else {
      this.setState(preVal => ({
        coinVlaue: count,
        tailCount: preVal.tailCount + 1,
      }))
    }
  }

  render() {
    const {coinVlaue, headsCount, tailCount} = this.state
    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading"> Coin Toss Game </h1>
          <p className="title"> Heads (or) Tails </p>
          {coinVlaue === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="coin-image"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="coin-image"
              alt="toss result"
            />
          )}

          <button
            onClick={this.buttonClicked}
            type="button"
            className="button-element"
          >
            Toss Coin
          </button>
          <p className="total"> Total: {tailCount + headsCount} </p>
          <p className="total"> Heads: {headsCount}</p>
          <p className="total"> Tails: {tailCount}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
