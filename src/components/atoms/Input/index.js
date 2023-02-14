import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Gap from '../Gap';
import {colors, fonts} from '../../../utils';

export default function Input({label, value, onChangeText, secureTextEntry, disabled}) {
  const [border, setBorder] = useState(colors.border);
  const borderFocusForm = () => {
    setBorder(colors.tertiery);
  };
  const borderBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Gap height={6} />
      <TextInput
        onFocus={borderFocusForm}
        onBlur={borderBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disabled}
        selectTextOnFocus={!disabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.text.secondary,
    fontSize: 16,
    fontFamily: fonts.primary.normal,
  },
  input: border => ({
    borderRadius: 10,
    borderColor: border,
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 12,
    color: colors.black,
  }),
});
