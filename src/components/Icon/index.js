import { AddToObj } from '../../utils/functions';
import { Flex } from '../Flex';

export function Icon({ ...props }) {
  let style = {
    width: '64px',
  };

  style = AddToObj(style, props.style);

  return (
    <Flex style={style}>
      <img src={props.icon} alt="icon" />
    </Flex>
  );
}
