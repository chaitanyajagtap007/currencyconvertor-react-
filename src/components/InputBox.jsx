import React,{useId} from 'react'

export default function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

  return (
    <>
        <div className="container bg-light border border-primary border rounded"> 
                <div className="w-100 rounded p-4 m-2 ">
                        <div className={`p-3 bg-light rounded text-sm d-flex ${className}`}>
                            <div className="p-4 w-50 rounded-left d-inline-block bg-info">
                                <label htmlFor={amountInputId} className='text-dark ml-3 mt-1 mb-5'>{label}</label>
                                <input 
                                id={amountInputId}
                                    type="number"
                                    className='form-control w-75'
                                    placeholder='Amount'
                                    disabled={amountDisable}
                                    value={amount}
                                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                                />
                            </div>
                            <div className="p-4 w-50 rounded-right d-inline-block bg-info">
                                <p className="text-dark ml-3 mr-5 mb-5 text-right">
                                    <h6>Currency Type</h6>
                                </p>
                                <select 
                                    className='form-control  rounded w-50 float-right'
                                    value={selectCurrency}
                                    disabled={currencyDisable}
                                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                                    
                                >
                                    
                                    {/* {currencyOptions.map((currency)
                                    => (
                                        <option key={currency} value={currency}>
                                            {currency}
                                        </option>
                                    ))}
                                     */}
                                    {currencyOptions.map(currency => (
                                        <option key={currency} value={currency}>
                                            {currency}
                                        </option>
                                    ))}

                                </select>
                            </div>

                        </div>
                </div>
        </div>

        
    </>
  )
}

