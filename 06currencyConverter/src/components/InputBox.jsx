import { useId } from "react"

export default function InputBox({
    label,
    currency,
    amount,
    onCurrencyChange,
    onAmmountChange,
    currencyOptions =[],
    isAmountDisabled=false,
    className = ''
}){
    const amountInputId = useId()
    return (
        <>
        <div className={`flex flex-col ${className} p-4 bg-gradient-to-r from-teal-300 via-blue-500 to-purple-600 shadow-lg rounded-lg transition-transform transform`}>
            <div className="mb-4">
            <label htmlFor={amountInputId} className="block text-gray-100 font-medium mb-2">
                {label}
            </label>
            <input
                id={amountInputId}
                type="number"
                placeholder="Amount"
                value={amount}
                readOnly={isAmountDisabled}
                onChange={(e) => onAmmountChange && onAmmountChange(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md shadow-sm bg-white text-gray-800 placeholder-gray-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-200"
            />
            </div>
            <div>
            <select
                value={currency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm bg-white text-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                {currencyOptions.map((currencyOption, index) => (
                <option key={index} value={currencyOption}>
                    {currencyOption}
                </option>
                ))}
            </select>
            </div>
        </div>
        </>
      );
      
    
}