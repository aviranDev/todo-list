import { useState } from "react";

const useForm = (credentials) => {
  const [state, setState] = useState(credentials)

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  return { state, setState, handleChange };
}

export default useForm;
