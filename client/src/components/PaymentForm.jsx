import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../redux/actions'
import successTick from '../assets/tick.svg'
import styles from '../styles/components/PaymentForm.module.scss'

const PaymentForm = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
    isSubmitted: false,
  })

  const submitForm = (e) => {
    e.preventDefault()
    dispatch(clearCart())
    setState((prev) => ({ ...prev, isSubmitted: true }))
  }

  const onInputChange = (e) => {
    let { name, value } = e.target
    if (name === 'number') {
      if (value.length > 16) {
        value = value.slice(0, 16)
      }
    }
    if (name === 'expiry') {
      if (value.length === 2 && state.expiry.length !== 3) {
        value += '/'
      }
      if (value.length > 5) {
        value = value.slice(0, 5)
      }
    }
    if (name === 'cvc') {
      if (value.length > 3) {
        value = value.slice(0, 3)
      }
    }
    setState((prev) => ({ ...prev, [name]: value }))
  }

  const onInputFocus = (e) => {
    setState((prev) => ({ ...prev, focus: e.target.name }))
  }

  const notValid = () => {
    return {
      number: state.number.length !== 16,
      name: state.name.length < 2,
      expiry: state.expiry.length !== 5,
      cvc: state.cvc.length !== 3
    }
  }

  const allValid = () => {
    const validation = notValid()
    return Object.values(validation).every(x => !x)
  }

  return (
    <div>
      {!state.isSubmitted ?
        <div className={styles.paymentForm}>
          <form className={styles.form} onSubmit={submitForm}>
            <div className={styles.input}>
              <input
                type="number"
                name="number"
                placeholder="Card Number"
                value={state.number}
                onChange={onInputChange}
                onFocus={onInputFocus}
                className={notValid().number && state.number.length > 0 ? styles.inputInvalid : ''}
              />
              {state.number.length > 0 && notValid().number && <small className={styles.error}>Card number must be 16 digits</small>}
            </div>
            <div className={styles.input}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={state.name}
                onChange={onInputChange}
                onFocus={onInputFocus}
                className={notValid().name && state.name.length > 0 ? styles.inputInvalid : ''}
              />
              {state.name.length > 0 && notValid().name && <small className={styles.error}>Name must be at least 2 characters</small>}
            </div>
            <div className={styles.input}>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY Expiry"
                value={state.expiry}
                onChange={onInputChange}
                onFocus={onInputFocus}
                className={notValid().expiry && state.expiry.length > 0 ? styles.inputInvalid : ''}
              />
              {state.expiry.length > 0 && notValid().expiry && <small className={styles.error}>Expiry must be a valid date</small>}
            </div>
            <div className={styles.input}>
              <input
                type="number"
                name="cvc"
                placeholder="CVC"
                value={state.cvc}
                onChange={onInputChange}
                onFocus={onInputFocus}
                className={notValid().cvc && state.cvc.length > 0 ? styles.inputInvalid : ''}
              />
              {state.cvc.length > 0 && notValid().cvc && <small className={styles.error}>CVC must be 3 digits</small>}
            </div>
            <button className={!allValid() ? styles.disabled : styles.submit} type="submit" disabled={!allValid()}>Submit</button>
          </form>
        </div>
        :
        <div className={styles.success}>
          <img src={successTick} alt="successTick" />
          <p>Your payment is successful!</p>
        </div>
      }
    </div>
  )
}

export default PaymentForm