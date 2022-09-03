import { Flex } from '../Flex';
import { InputStyle } from './style';

export function Input({ ...props }) {
  return (
    <Flex>
      <InputStyle
        type={props.type}
        style={props.style}
        placeholder={props.placeholder}
        defaultValue={props.default}
        onInput={props.onInput}
        {...props}
      />
    </Flex>
  );
}
