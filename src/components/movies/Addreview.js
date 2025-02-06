import React, { useCallback } from 'react';
import Input from '../UI/Input';
import { useForm } from '../hooks/form-hook';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../validators/Validator';
import './Addreview.css';

const Addreview = () => {
  const { formState, inputHandler } = useForm(
    {
      movie_name: { value: '', isValid: false },
      info: { value: '', isValid: false },
      description: { value: '', isValid: false }
    },
    false // Initial form validity
  );

  const placeSubmitHandler = useCallback((event) => {
    event.preventDefault();
    console.log("Form Submitted:", formState.inputs); // Debugging
  }, [formState]);

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="movie_name"
        element="input"
        type="text"
        label="Movie"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        value={formState.inputs.movie_name.value} // ✅ Ensure value is set
        isValid={formState.inputs.movie_name.isValid} // ✅ Pass isValid
      />
      <Input
        id="info"
        element="textarea"
        label="Info"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid Info (at least 5 characters)."
        onInput={inputHandler}
        value={formState.inputs.info.value} // ✅ Ensure value is set
        isValid={formState.inputs.info.isValid} // ✅ Pass isValid
      />
      <Input
        id="description"
        element="input"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description."
        onInput={inputHandler}
        value={formState.inputs.description.value} // ✅ Ensure value is set
        isValid={formState.inputs.description.isValid} // ✅ Pass isValid
      />
      <button type="submit" >
        ADD PLACE
      </button>
    </form>
  );
};

export default Addreview;
