import React, {useState, useEffect} from 'react';
import NumericInput from 'react-numeric-input';

const Calculator = () => {  
    // store investment amount and share price values to state
    const [investmentAmount, setInvestmentAmount] = useState(0);
    const [shares, setShares] = useState(0);

    // store 2/5 price and share state
    const [twoFifthsPrice, setTwoFifthsPrice] = useState(0)
    const [twoFifthsShares, setTwoFifthsShares] = useState(0)

    useEffect(() => {
        console.log(`calculator.js - 9 - 🏝`, {investmentAmount, shares});
        
        // calculate twoFifthsPrice
        setTwoFifthsPrice(investmentAmount * 0.4)
        // calculate twoFifthsShares
        if (investmentAmount === 0 && shares === 0) {
            setTwoFifthsShares(0)
        } 
        if(shares === 0) {

        } else {
            setTwoFifthsShares(investmentAmount/shares)
        }
    }, [investmentAmount, shares]);
    
    // const handleSubmit = () => {
    //     console.log(`calculator.js - 5 - ✅`);
    // }

    // const handleChange = () => {
    //     console.log(`calculator.js - 9 - 🌦`);
    // }

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
                    <NumericInput value={investmentAmount} onChange={setInvestmentAmount}/>
                </div>
                <div>
                    <div className="subtitle">Price per share</div>
                    <NumericInput step={0.1} precision={4} value={shares} onChange={setShares}/>
                </div>
            </div>
            <div className="row-three">
                <div className="two-fifths level-one">
                    <div>2/5</div>
                    <div>
                        <div className="init">
                            <div className="subtitle-light">Initial share price</div>
                            <div className="amount">{twoFifthsPrice}</div>
                        </div>
                        <div className="init">
                            <div className="subtitle-light">Initial shares</div>
                            <div className="shares">{twoFifthsShares}</div>
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