import React, { useRef } from "react";

export default function UnControlledFrom() {

  const inputRef = useRef();

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  console.log(inputRef.current)

  function handleSubmit(e) {
    e.preventDefault()
    alert(inputRef.current.value);
    inputRef.current.focus();
  }

  return (
    <form onSubmit = {handleSubmit}>
      <label>닉네임 :</label>
      <input type="text" name="nickname" onChange={handleChange} ref={inputRef} />
      <input type="submit" value="제출" />
    </form>
  )
}