import React from 'react'

const Calculator = () => {  
    const handleSubmit = () => {
        console.log(`calculator.js - 5 - ✅`);
    }

    const handleChange = () => {
        console.log(`calculator.js - 9 - 🌦`);
    }

    return (
      <div className="cal-bg">
        <div className="table">
            <div className="row-one">
                <div className="row-title">Buy</div>
                <div className="row-title">Sell</div>
            </div>
            <div className="row-two">
                <div>
                    <div className="subtitle">Investment Amount</div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value="" onChange={handleChange} />
                    </form>
                </div>
                <div>
                    <div className="subtitle">Price per share</div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value="" onChange={handleChange} />
                    </form>
                </div>
            </div>
            <div className="row-three">
                <div className="two-fifths level-one">
                    <div>2/5</div>
                    <div>
                        <div className="init">
                            <div className="subtitle-light">Initial share price</div>
                            <div className="amount">200</div>
                        </div>
                        <div className="init">
                            <div className="subtitle-light">Initial shares</div>
                            <div className="shares">100</div>
                        </div>
                    </div>
                </div>
                <div className="two-fifths level-two">
                    <div className="subtitle-light">1/5</div>
                    <div>
                        <div className="init">-10%</div>
                        <div className="init">
                            <div className="subtitle-light">Initial share price</div>
                            <div className="amount">200</div>
                        </div>
                        <div className="init">
                            <div className="subtitle-light">Initial shares</div>
                            <div className="shares">100</div>
                        </div>
                    </div>
                </div>
                <div className="two-fifths level-three">
                    <div className="subtitle-light">1/5</div>
                    <div>
                        <div className="init">-10%</div>
                        <div className="init">
                            <div className="subtitle-light">Initial share price</div>
                            <div className="amount">200</div>
                        </div>
                        <div className="init">
                            <div className="subtitle-light">Initial shares</div>
                            <div className="shares">100</div>
                        </div>
                    </div>
                </div>
                <div className="two-fifths level-four">
                    <div className="subtitle-light">1/5</div>
                    <div>
                        <div className="init">-10%</div>
                        <div className="init">
                            <div className="subtitle-light">Initial share price</div>
                            <div className="amount">200</div>
                        </div>
                        <div className="init">
                            <div className="subtitle-light">Initial shares</div>
                            <div className="shares">100</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  };
  
  export default Calculator;