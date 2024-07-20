import { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  
  
  
  const options = Object.keys(currencyInfo)
  // console.log(options)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-100 h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }}
    >
      <div className='w-100'>
        <div className='w-100 max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}>
            <div className='w-100 '>
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>


              <div className="text-center fixed " style={{marginTop:"-20px"}}>
                <button
                  className='
                  btn btn-primary '
                  onClick={swap}
                >Swap</button>
              </div>

            
            <div className='w-100 mb-5' style={{marginTop:"-10px"}}>
              <InputBox
                label="To"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={from}
                amountDisabled
              />
            </div>
            
            <div className="text-center" style={{marginTop:"-90px"}}>
            <button
                type='submit'
                className='btn btn-primary text-light p-3 '
              >Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App;

