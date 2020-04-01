# Custom Components

Let's see how to create React custom-components and use them with ReactNative. To host our custom-components we are going to create the _./common/components_ folder.

## Create the cutom-text-input

First we are going to bring the TextInput with the styles to a custom-component called _CustomTextInput_.

_./app/common/components/custom-text-input/custom-text-input.component.tsx_

```typescript
import * as React from "react";
import { TextInput, StyleSheet } from "react-native";

interface Props {
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
}

export const CustomTextInput: React.FC<Props> = props => {
  const { value, placeholder, onChangeText } = props;

  return (
    <TextInput
      style={styles.textInput}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#333",
    borderWidth: 1,
    width: "90%",
    padding: 5,
    borderRadius: 10
  }
});
```

We have already created our _CustomInputText_ component. We are going to use it in _HelloComponent_:

_./app/hello.component.tsx_

```diff
import * as React from "react";
- import { Text, TextInput, StyleSheet } from "react-native";
+ import { Text } from "react-native";
+ import { CustomTextInput } from "./common/components/custom-text-input/custom-text-input.component";

export const HelloComponent: React.FC = () => {
  const [name, setName] = React.useState<string>("");

  const handleChange = (text: string) => setName(text);

  return (
    <>
-      <TextInput
-        style={styles.textInput}
-        value={name}
-        onChangeText={handleChange}
-      />
+     <CustomTextInput value={name} onChangeText={handleChange} />
      <Text>{name ? <>Hello {name}!</> : <>Enter your name</>}</Text>
    </>
  );
};

- const styles = StyleSheet.create({
-   textInput: {
-     borderColor: "#333",
-     borderWidth: 1,
-     width: "90%",
-     padding: 5,
-     borderRadius: 10
-   }
- });
```

We already have a common TextInput component to reuse in our application.

Let's go one step further! We are going to create a _DebounceTextInput_ component that takes effect after a while the user has stopped typing. Very useful for example to make requests to the server in a controlled way.

For this we are going to make new folder: _./app/common/components/debounce-text-input_ where to create our new component:

_./app/common/components/debounce-text-input/debounce-text-input.component.tsx_

```typescript
import * as React from "react";
import { CustomTextInput } from "../text-input/text-input.component";

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
```

Now we can modify our _HelloComponent_ to use _DebounceTextInput_ and update the name after a time that the user stops typing:

_./app/hello.component.tsx_

```diff
import * as React from "react";
import { Text } from "react-native";
- import { CustomTextInput } from "./common/components/custom-text-input/custom-text-input.component";
+ import { DebounceTextInput } from "./common/components/debounce-text-input/debounce-text-input.component";

export const HelloComponent: React.FC = () => {
  const [name, setName] = React.useState<string>("");

  const handleChange = (text: string) => setName(text);

  return (
    <>
-     <CustomTextInput value={name} onChangeText={handleChange} />
+     <DebounceTextInput value={name} onChangeText={handleChange} />
      <Text>{name ? <>Hello {name}!</> : <>Enter your name</>}</Text>
    </>
  );
};
```

Now we can run the application and see how the new component takes effect: the name does not change instantaneously, but after a time since the user stops typing.
