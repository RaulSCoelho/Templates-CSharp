import { Flex } from '../Flex';
import { TextAreaStyle } from './style';

export function TextArea({ ...props }) {
  return (
    <Flex>
      <TextAreaStyle
        type={props.type}
        style={props.style}
        placeholder={props.placeholder}
        defaultValue={props.default}
        value={props.value}
        onInput={props.onInput}
        {...props}
      />
    </Flex>
  );
}
