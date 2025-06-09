import "./Trades.css";
import btcImg from "../../assets/image (1).webp";
import forexImg from "../../assets/image (2).webp";

const Trades = () => {
  return (
    <>
      <div className="Trades">
        <div className="trade_left">
            <div>
                <h1>
                    Cryptocurrency
                </h1>
                <p>
                    Working with you to understand your life goals and 
                    develop a personalized wealth strategy. Today and 
                    for the years to come.
                </p>
                <ul>
                    <li>401(k) Rollovers</li>
                    <li>Wealth Accumulation Plans</li>
                    <li>Financial Independence</li>
                    <li>Diversification</li>
                    <li>Passive Income Generation</li>
                    <li>Global Accessibility</li>
                </ul>
                <a href="">Learn More</a>
            </div>
            <div>
                <div>
                    <img src={btcImg} alt="" />
                </div>
                <div>
                    <a href="">
                        <span>
                            BITCOIN AND FINANCIAL FREEDOM: 
                            UNLOCKING THE POTENTIAL OF CRYPTOCURRENCY
                        </span>
                        <span>
                            Introduction: In the ever-evolving landscape of finance, cryptocurrency 
                            has emerged as a disruptive force with the potential to revolutionize the 
                            concept of financial freedom. Bitcoin, the pioneering cryptocurrency, 
                            has garnered significant attention as a means to achieve financial 
                            independence. In this article, we will explore the concept of 
                            cryptocurrency, with a specific focus on Bitcoin, ...
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <div className="trade_right">
            <div>
                <h1>
                    Forex Trade
                </h1>
                <p>
                    Provides an opportunity to break free from the limitations 
                    of traditional employment and achieve financial independence.
                </p>
                <ul>
                    <li>Capital Growth</li>
                    <li>Wealth Accumulation Plans</li>
                    <li>Portfolio Diversification</li>
                    <li>Passive Income Generation</li>
                    <li>Global Market Exposure</li>
                    <li>Lifestyle Flexibility</li>
                </ul>
                <a href="">Learn More</a>
            </div>
            <div>
                <div>
                    <img src={forexImg} alt="" />
                </div>
                <div>
                    <a href="">
                        <span>
                            UNVEILING THE SECRETS OF FOREX TRADING 
                            HARNESSING MARKET TRENDS FOR PROFITABILITY
                        </span>
                        <span>
                            Introduction: “Forex trading holds the promise of financial 
                            freedom, where astute traders navigate market trends to unlock 
                            a world of profit-making opportunities.” – Unknown In the vast 
                            landscape of financial markets, the forex market stands out as
                            a dynamic and captivating arena for individuals seeking to grow 
                            their wealth. With its immense liquidity, global accessibility, ...
                        </span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Trades
