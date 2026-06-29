import { useRef } from "react";

export default function Profile() {

  const inputRef = useRef();

  return (

    <div className="container mt-5">

      <input ref={inputRef} className="form-control" />

      <button
        className="btn btn-primary mt-3"
        onClick={() => inputRef.current.focus()}
      >
        Focus Input
      </button>

    </div>

  );
}