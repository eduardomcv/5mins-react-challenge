import { useState } from 'react'
import { CloseIcon } from '../../icons/CloseIcon'
import classes from './Combobox.module.css'

export function Combobox ({ options = [{ label: 'test' }] }) {
  const [inputValue, setInputValue] = useState('')

  function handleInputChange (event) {
    setInputValue(event.target.value)
  }

  function handleClear () {
    setInputValue('')
  }

  return (
    <div className={classes.container}>
      <div className={classes.inputWrapper}>
        <input
          type='search'
          className={classes.input}
          value={inputValue}
          onChange={handleInputChange}
        />
        {inputValue.length > 0 && (
          <button
            type='reset'
            aria-label='clear'
            className={classes.clearButton}
            onClick={handleClear}
          >
            <CloseIcon height='100%' width='100%' viewBox='0 0 48 48' />
          </button>
        )}
      </div>
      {options.length > 0 && inputValue.length > 0 && (
        <div className={classes.dropdown}>
          <ul>
            {options.map(option => <li key={option.label}>{option.label}</li>)}
          </ul>
        </div>
      )}
    </div>
  )
}
