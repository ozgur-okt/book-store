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
    const { name, value } = e.target
    setState((prev) => ({ ...prev, [name]: value }))
  }

  const onInputFocus = (e) => {
    setState((prev) => ({ ...prev, focus: e.target.name }))
  }

  const isValid = () => {
    return state.number.length > 0 &&
      state.name.length > 0 &&
      state.expiry.length > 0 &&
      state.cvc.length > 0
  }

  return (
    <div>
      {!state.isSubmitted ?
        <div className={styles.paymentForm}>
          <form className={styles.form} onSubmit={submitForm}>
            <input
              type="number"
              name="number"
              placeholder="Card Number"
              value={state.number}
              onChange={onInputChange}
              onFocus={onInputFocus}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={onInputChange}
              onFocus={onInputFocus}
            />
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY Expiry"
              value={state.expiry}
              onChange={onInputChange}
              onFocus={onInputFocus}
            />
            <input
              type="number"
              name="cvc"
              placeholder="CVC"
              value={state.cvc}
              onChange={onInputChange}
              onFocus={onInputFocus}
            />
            <button className={!isValid() ? styles.disabled : styles.submit} type="submit" disabled={!isValid()}>Submit</button>
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