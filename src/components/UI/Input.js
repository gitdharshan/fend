import React, { useReducer, useEffect } from 'react';
import { validate } from '../validators/Validator';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };

    case 'TOUCH':
      return {
        ...state,
        isTouched: true,
      };

    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || '', // ✅ Ensure value is not undefined
    isTouched: false,
    isValid: props.valid || false, // ✅ Use isValid instead of valid
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState; // ✅ Get value from inputState, not props

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]); // ✅ Use updated value and isValid from inputState

  const changeHandler = (event) => {
    dispatch({ type: 'CHANGE', val: event.target.value, validators: props.validators });
  };

  const touchHandler = () => {
    dispatch({ type: 'TOUCH' });
  };

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler} // ✅ Fix: Use onBlur instead of onInput for touch detection
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler} // ✅ Fix: Use onBlur instead of onInput for touch detection
        value={inputState.value}
      />
    );

  return (
    <div className={`form-control ${!inputState.isValid && inputState.isTouched ? 'form-control--invalid' : ''}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
