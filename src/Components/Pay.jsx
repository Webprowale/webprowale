import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { usePaystackPayment } from 'react-paystack';

const PayForm = () => {
  const publicKey = import.meta.env.VITE_API_PAY;  // Ensure this key exists
  const [currency, setCurrency] = useState('NGN');

  // Check if publicKey is correctly loaded
  if (!publicKey) {
    console.error("Paystack public key is missing");
    return <div>Payment configuration error</div>;
  }

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      amount: ''
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .min(2, 'First name must be at least 2 characters')
        .max(50, 'First name must be 50 characters or less')
        .required('First name is required'),
      lastname: Yup.string()
        .min(2, 'Last name must be at least 2 characters')
        .max(50, 'Last name must be 50 characters or less')
        .required('Last name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      amount: Yup.number()
        .positive('Amount must be a positive number')
        .required('Amount is required')
    }),
    onSubmit: (values) => {
      console.log(values);
      initializePayment();  // Trigger payment only after validation
    }
  });

  const { values, handleBlur, handleChange, handleSubmit, touched, errors } = formik;

  // Define Paystack config properties for initialization
  const componentProps = {
    email: values.email,
    amount: values.amount * 100, // Paystack accepts amount in lowest currency unit (kobo)
    currency,
    publicKey,  // Ensure publicKey is passed correctly
    onSuccess: (response) => {
      alert(`Payment complete! Reference: ${response.reference}`);
    },
    onClose: () => {
      alert('Payment closed');
    }
  };

  // Initialize Paystack payment handler
  const initializePayment = usePaystackPayment(componentProps);

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} style={{ maxWidth: '30rem' }}>
        {/* Firstname Input */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="firstname"
            placeholder="Enter firstname..."
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="floatingInput">Firstname</label>
          {errors.firstname && touched.firstname ? (
            <small className="fw-semibold text-danger">{errors.firstname}</small>
          ) : (
            ''
          )}
        </div>

        {/* Lastname Input */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="lastname"
            placeholder="Enter lastname..."
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="floatingInput">Lastname</label>
          {errors.lastname && touched.lastname ? (
            <small className="fw-semibold text-danger">{errors.lastname}</small>
          ) : (
            ''
          )}
        </div>

        {/* Email Input */}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email ..."
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="floatingPassword">Email</label>
          {errors.email && touched.email ? (
            <small className="fw-semibold text-danger">{errors.email}</small>
          ) : (
            ''
          )}
        </div>

        {/* Amount Input */}
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            name="amount"
            placeholder="amount to pay ..."
            value={values.amount}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="floatingPassword">Amount</label>
          {errors.amount && touched.amount ? (
            <small className="fw-semibold text-danger">{errors.amount}</small>
          ) : (
            ''
          )}
        </div>

        {/* Currency Select */}
        <div className="form-floating mb-3">
          <select
            className="form-control"
            name="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="NGN">Naira (NGN)</option>
            <option value="USD">Dollar (USD)</option>
            <option value="GHS">Ghana Cedi (GHS)</option>
            <option value="ZAR">Rand (ZAR)</option>
          </select>
          <label htmlFor="floatingSelect">Currency</label>
        </div>

        {/* Payment Button */}
        <button
          type="button"
          className="primaryBg btn btn1 text-white px-5 py-2 rounded-md w-100 mt-3"
          onClick={() => initializePayment(componentProps.onSuccess, componentProps.onClose)}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default PayForm;
