import cn from 'classnames';
import { useRef } from 'react';

type InputProps = {
  label?: string,
  placeholder?: string,
  helperText?: string,
  error?: boolean,
  disabled?: boolean,
  [key: string]: any,
}

export default function Input({
  label = "Label", placeholder = "Placeholder", helperText, error, disabled, ...props
}: InputProps) {
  const inputRef = useRef(null);
  const focusInput = () => inputRef?.current?.focus();

  const classes = ['input'];

  if (error)
    classes.push('error');
  if (disabled)
    classes.push('disabled');

  return <div className={cn(classes)} onClick={focusInput}>
    <label className="label">{label}</label>
    <div className="input-container">
      <input ref={inputRef} placeholder={placeholder} disabled={disabled} {...props} />
    </div>
    {helperText && <span className="helper">{helperText}</span>}
  </div>
}
