import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/lib/styles.scss';
import styles from '../styles/PaymentForm.module.scss';
import { clearCart } from '../redux/actions';

const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(clearCart());
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  const isValid = () => {
    return state.number.length > 0 &&
      state.name.length > 0 &&
      state.expiry.length > 0 &&
      state.cvc.length > 0;
  };

  return (
    <div className={styles.paymentForm}>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="number"
          name="cvc"
          placeholder="CVC"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <button type="submit" disabled={!isValid()}>Submit</button>
      </form>
    </div>
  );
}

export default PaymentForm;