import React from 'react'

export function Form({
  children
}) {
  return (
    <form>
      {children}
      </form>
  )
}

export function FormGroup({
  children
}) {
  return (
      <div className="form-group">
      {children}
      </div>
  )
}

export function FormCheck({
  children
}) {
  return (
      <div className="form-check">
      <label class="form-check-label">
      <input type="checkbox" class='form-check-input' />
      {children}
      </label>
      </div>
  )
}

export function Label({
  className="form-check-label",
  labelFor,
  children
}) {
  return (
    <label className={className} for={labelFor}>{children}
    </label>
  )
}

export function Input({
  type,
  className,
  id,
  ariadescribedby,
  placeholder
}) {
  return (
    <input type={type} className={className}id={id} aria-describedby={ariadescribedby} placeholder={placeholder} />
  )
}

export function FormButton({
  type,
  className = "btn btn-primary",
  children
}) {
  return (
    <button type={type} className={className}>{children}</button>
  )
}