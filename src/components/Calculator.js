import React, {useState, useEffect} from 'react';
import NumericInput from 'react-numeric-input';

const Calculator = () => {  
    // store investment amount and share price values to state
    const [initialInvestment, setinitialInvestment] = useState(0);
    const [sharePrice, setSharePrice] = useState(0);

    // #### initial 1 ####
    // store 2/5 price and share state
    const [twoFifthsPrice, setTwoFifthsPrice] = useState(0)
    const [twoFifthsShares, setTwoFifthsShares] = useState(0)
    // #################

    // #### LEVEL 1 ####
    const [priceDropLevelOne, setPriceDropLevelOne] = useState(0)
    const [oneFifthsInvestment, setoneFifthsInvestment] = useState(0)
    const [levelOneShares, setlevelOneShares] = useState(0)
    // #################
    
    // #### LEVEL 2 ####
    const [priceDropLevelTwo, setPriceDropLevelTwo] = useState(0)
    const [levelTwoShares, setlevelTwoShares] = useState(0)
    // #################
    
    // #### LEVEL 3 ####
    const [priceDropLevelThree, setPriceDropLevelThree] = useState(0)
    const [levelThreeShares, setlevelThreeShares] = useState(0)
    // #################

    const [inputDisabled, setInputDisabled] = useState(true)

    useEffect(() => {
        // console.log(`calculator.js - 9 - 🏝`, {sharePrice});
        

        if(initialInvestment !== 0) {
            setInputDisabled(false)
        } 

        // #### LEVEL 1 ####
        // calculate twoFifthsPrice
        setTwoFifthsPrice(initialInvestment * 0.4)
        // calculate twoFifthsShares
        if (initialInvestment === 0 && sharePrice === 0) {
            setTwoFifthsShares(0)
        } 
        if(sharePrice === 0) {
            setTwoFifthsShares(0)
        } else {
            setTwoFifthsShares(twoFifthsPrice/sharePrice)
        }
        // #################

        // #### LEVEL 2 ####
        setPriceDropLevelOne(sharePrice * (1 - 0.1))
        setoneFifthsInvestment(initialInvestment * 0.2)
        // calculate levelOneShares
        if (initialInvestment === 0 && sharePrice === 0) {
            setlevelOneShares(0)
        } 
        if(sharePrice === 0) {
            setlevelOneShares(0)
        } else {
            setlevelOneShares(oneFifthsInvestment/priceDropLevelOne)
        }

        // calculate levelTwoShares
        setPriceDropLevelTwo(priceDropLevelOne * (1 - 0.1))
        
        if (initialInvestment === 0 && sharePrice === 0) {
            setlevelOneShares(0)
        } 
        if(sharePrice === 0) {
            setlevelOneShares(0)
        } else {
            setlevelTwoShares(oneFifthsInvestment/priceDropLevelTwo)
        }
        // #################

        // #### LEVEL 3 ####
        setPriceDropLevelThree(priceDropLevelTwo * (1 - 0.1))
        if (initialInvestment === 0 && sharePrice === 0) {
            setlevelOneShares(0)
        } 
        if(sharePrice === 0) {
            setlevelOneShares(0)
        } else {
            setlevelThreeShares(oneFifthsInvestment/priceDropLevelThree)
        }
        // #################

        // #################
        // #### LEVEL 4 ####
        // #################
    }, [initialInvestment, sharePrice]);
    
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
                    <NumericInput value={initialInvestment} onChange={setinitialInvestment}/>
                </div>
                <div>
                    <div className="subtitle">Price per share</div>
                    <NumericInput disabled={inputDisabled} step={0.1} precision={4} value={sharePrice} onChange={setSharePrice}/>
                </div>
            </div>
            <div className="row-three">
                <div className="two-fifths level-one">
                    <div>2/5</div>
                    <div>
                        <div className="init">
                            <div className="subtitle-light">Initial investment</div>
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
                        <div className="init">
                            <div className="subtitle-light">-10% price drop 1</div>
                            <div className="amount">{priceDropLevelOne}</div>
                        </div>
                        <div className="init">
                            <div className="subtitle-light">Investment</div>
                            <div className="amount">{oneFifthsInvestment}</div>
                        </div>
                        <div className="init">
                            <div className="subtitle-light">Shares</div>
                            <div className="shares">{levelOneShares}</div>
                        </div>
                    </div>
                </div>
                <div className="two-fifths level-three">
                    <div className="subtitle-light">1/5</div>
                    <div>
                        <div className="init">
                            <div className="subtitle-light">-10% price drop 2</div>
                            <div className="amount">{priceDropLevelTwo}</div>
                        </div>
                        <div className="init">
                            <div className="subtitle-light">Investment</div>
                            <div className="amount">{oneFifthsInvestment}</div>
                        </div>
                        <div className="init">
                            <div className="subtitle-light">Shares</div>
                            <div className="shares">{levelTwoShares}</div>
                        </div>
                    </div>
                </div>
                <div className="two-fifths level-four">
                    <div className="subtitle-light">1/5</div>
                    <div>
                    <div className="init">
                            <div className="subtitle-light">-10% price drop 2</div>
                            <div className="amount">{priceDropLevelThree}</div>
                        </div>
                        <div className="init">
                            <div className="subtitle-light">Investment</div>
                            <div className="amount">{oneFifthsInvestment}</div>
                        </div>
                        <div className="init">
                            <div className="subtitle-light">Shares</div>
                            <div className="shares">{levelThreeShares}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  };
  
  export default Calculator;