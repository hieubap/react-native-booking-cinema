import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const InputTimeout = (
  {
    value = '',
    onChange = () => {},
    onChangeText = () => {},
    style = {},
    placeholder = '',
    ...rest
  },
  ref,
) => {
  const [data, setData] = useState('');
  const refTimeout = useRef('');
  const refInput = useRef();

  useImperativeHandle(ref, () => ({
    blur: () => {
      if (refInput.current) {
        refInput.current.blur();
      }
    },
    data: () => data,
    clearTime: (isSetNew, newData) => {
      if (refTimeout.current) {
        clearTimeout(refTimeout.current);
      }
      if (isSetNew) {
        setData(newData);
      }
    },
    focus: () => {
      if (refInput.current) {
        refInput.current.focus();
      }
    },
  }));
  useEffect(() => {
    if (value !== data) {
      setData(value);
    }
  }, [value]);
  const handleChange = data => {
    setData(data);
    onChange(data);
    if (refTimeout.current) {
      clearTimeout(refTimeout.current);
    }
    refTimeout.current = setTimeout(() => {
      onChangeText(data);
    }, 500);
  };
  return (
    <TextInput
      ref={refInput}
      onChangeText={handleChange}
      value={data}
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor="#73727E"
      // underlineColorAndroid="transparent"
      {...rest}></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    color: 'white',
    borderRadius: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#73727E',
  },
});

export default forwardRef(InputTimeout);
