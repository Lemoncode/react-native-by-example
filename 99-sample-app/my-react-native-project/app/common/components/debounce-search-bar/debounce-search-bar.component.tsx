import * as React from "react";
import { SearchBar } from "react-native-elements";

interface Props {
  placeholder: string;
  value: string;
  minLength?: number;
  debounce?: number;
  showLoading?: boolean;
  onChangeText: (value: string) => void;
}

export const DebounceSearchBar: React.FC<Props> = props => {
  const {
    placeholder,
    value,
    onChangeText,
    minLength = 0,
    debounce = 1000,
    showLoading = false
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
    <>
      <SearchBar
        showLoading={showLoading}
        placeholder={placeholder}
        onChangeText={handleChangeText}
        value={innerValue}
        lightTheme={true}
      />
    </>
  );
};
