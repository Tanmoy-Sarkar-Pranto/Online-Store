import React from "react"

const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label htmlFor="input" className="label">
        <p className="label-text capitalize">{label}</p>
      </label>
      <input
        type={type}
        name={name}
        id="input"
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  )
}

export default FormInput
