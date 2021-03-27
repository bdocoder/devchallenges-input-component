import cn from 'classnames';

type InputProps = {
  id?: string,
  label?: string,
  placeholder?: string,
  helperText?: string,
  error?: boolean,
  disabled?: boolean,
}

export default function Input({
  id, label = "Label", placeholder = "Placeholder", helperText, error, disabled,
}: InputProps) {
  const classes = ['input'];

  if (error)
    classes.push('error');
  if (disabled)
    classes.push('disabled');

  return <div className={cn(classes)}>
    <label htmlFor={id} className="label">{label}</label>
    <input id={id} placeholder={placeholder} disabled={disabled} />
    {helperText && <span className="helper">{helperText}</span>}
  </div>
}
