import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Search = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      city: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(() => props.handleData(watch("city")))}>
      <input
        {...register("city", {
          required: "Please specify a city.",
        })}
        name="city"
        placeholder=" "
        id="search"
      />
      <label htmlFor="city">Search a City</label>
      <ErrorMessage
        errors={errors}
        name="city"
        render={({ message }) => (
          <small className="inputError">{message}</small>
        )}
      />
      {props.errorMsg.length ? (
        <small className="inputError">{props.errorMsg}</small>
      ) : undefined}
    </form>
  );
};

export default Search;
