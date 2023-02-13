import { forwardRef } from "react";

const Input = ({ label, id, type, errors, ...rest }, ref) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} ref={ref} {...rest} />
      {errors ? <p className="errorMessage"> {errors}</p> : null}
    </>
  );
};

export default forwardRef(Input);
