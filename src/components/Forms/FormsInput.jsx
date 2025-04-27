import { useState } from "react";

export default function FormsInput(props) {
  const [focused, setFocused] = useState(false);
  const { errorMessage, onChange, id, ...inputProps } = props;
  const handleFocuse = (e) => {
    setFocused(true);
  };
  return (
    <>
      <input
        className="forms-input-item"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocuse}
        focused={focused.toString()}
        required
      />
      <span className="error">{errorMessage}</span>
    </>
  );
}
