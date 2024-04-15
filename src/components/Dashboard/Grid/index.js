import React from 'react'
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "./styles.css"

const Grid = ({coin}) => {
  return (
    <div className="grid-container">
      <div className="info-flex">
        <img src={coin.image} alt="" className="coin-logo" />
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>

      {coin.price_change_percentage_24h > 0 ? (
        <div className="chip-flex">
          <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip">
            <TrendingUpIcon />
          </div>
        </div>
      ) : (
        <div className="chip-flex">
          <div className="price-chip chip-red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-red">
            <TrendingDownIcon />
          </div>
        </div>
      )}
    </div>
  );
}

export default Grid;