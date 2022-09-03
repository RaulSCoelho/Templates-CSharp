import { FlexStyle } from './style';

export function Flex({ children, ...props }) {
  return (
    <FlexStyle style={props.style} {...props}>
      {children}
    </FlexStyle>
  );
}
