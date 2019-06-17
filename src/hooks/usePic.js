import { useState } from "react";

export default function useI(initialValue = "") {
  const [value] = useState(initialValue);

  return {
    value
  };
}
