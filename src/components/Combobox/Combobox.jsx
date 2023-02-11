import { useRef, useState } from 'react'
import { Close as CloseIcon } from '../../icons/Close'
import classes from './Combobox.module.css'

export function Combobox ({ onChange, options, renderOption }) {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef()

  const isDropdownOpen = options.length > 0 && inputValue.length > 0

  function handleInputChange (event) {
    const { value } = event.target
    setInputValue(value)
    onChange(value)
  }

  function handleClear () {
    setInputValue('')
    inputRef.current?.focus()
  }

  return (
    <div className={classes.container}>
      <div className={classes.inputWrapper}>
        <input
          ref={inputRef}
          type='search'
          className={classes.input}
          value={inputValue}
          onChange={handleInputChange}
        />
        {inputValue.length > 0 && (
          <button
            type='button'
            aria-label='clear'
            className={classes.clearButton}
            onClick={handleClear}
          >
            <CloseIcon height='100%' width='100%' viewBox='0 0 48 48' />
          </button>
        )}
      </div>
      {isDropdownOpen && (
        <div className={classes.dropdown}>
          <ul>
            {options.map(renderOption)}
          </ul>
        </div>
      )}
    </div>
  )
}
