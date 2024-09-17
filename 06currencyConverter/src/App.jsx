import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [to, setTo] = useState("inr")
  const [from, setFrom] = useState("usd")

  function swap (){
    setTo(from)
    setFrom(to)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const currencyInfo = useCurrencyInfo(from)
  const currencyOptions = Object.keys(currencyInfo)

  function convert(){
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
    <div
        className="bg-gradient-to-br from-white via-gray-950 to-gray-800 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-lg mx-auto p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg rounded-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-6"
        >
          {/* From Input */}
          <div>
            <InputBox
              label="From"
              currencyOptions={currencyOptions}
              currency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
              amount={amount}
              onAmmountChange={(amount) => setAmount(amount)}
            />
          </div>
  
          {/* Swap Button */}
          <div className="text-center">
            <button
              type="button"
              onClick={swap}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md transition-transform transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Swap
            </button>
          </div>
  
          {/* To Input */}
          <div>
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={currencyOptions}
              currency={to}
              onCurrencyChange={(currency) => setTo(currency)}
              isAmountDisabled
            />
          </div>
  
          {/* Convert Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md transition-transform transform hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
  
  
}

export default App
