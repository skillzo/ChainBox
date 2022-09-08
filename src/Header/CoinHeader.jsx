import React from 'react'

function CoinHeader() {
  return (
    <>
        <div className="coinheader-navbar">
            back
            <div>
                search
                fav
            </div>
        </div>
        <div className="coinheader-name">
            <p>Tether</p>
            <h1>US $1.000</h1>
             <p>Change 24hr</p>
        </div>
    </>
  )
}

export default CoinHeader