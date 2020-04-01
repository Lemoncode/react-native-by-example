import * as React from "react";
import { CustomTextInput } from "../custom-text-input/custom-text-input.component";

interface Props {
  value: string;
  placeholder?: string;
  minLength?: number;
  debounce?: number;
  onChangeText: (text: string) => void;
}

export const DebounceTextInput: React.FC<Props> = props => {
  const {
    value,
    placeholder,
    minLength = 0,
    debounce = 1000,
    onChangeText
  } = props;

  const [innerValue, setInnerValue] = React.useState<string>(value);
  const [debounceValue, setDebounceValue] = React.useState<string>(value);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (innerValue.length >= minLength || innerValue.length === 0) {
        setDebounceValue(innerValue);
      }
    }, debounce);

    return () => clearTimeout(timeout);
  }, [innerValue]);

  React.useEffect(() => {
    onChangeText(debounceValue);
  }, [debounceValue]);

  const handleChangeText = (text: string) => setInnerValue(text);

  return (
    <CustomTextInput
      placeholder={placeholder}
      value={innerValue}
      onChangeText={handleChangeText}
    />
  );
};
