import { useState } from "react";

const TextInput = (props) => {
  const { textValue, setTextValue, placeholder, label } = props;
  const [error, setError] = useState(false);

  const handleTextChange = (event) => setTextValue(event.target.value);
  const handleError = () => {
    if (textValue === "") {
      setError(true);
      //   console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleTextChange}
        onBlur={handleError}
      />
      {error ? <span>{label} is required</span> : false}
    </div>
  );
};

export default TextInput;
