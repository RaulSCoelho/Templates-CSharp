import { FiDownload } from 'react-icons/fi';
import { GoSync } from 'react-icons/go';
import { MdAddBox, MdDelete } from 'react-icons/md';

import { AddToObj } from '../../utils/functions';
import { Flex } from '../Flex';
import { styles } from './style';

export function AddButton({ ...props }) {
  let style = { width: 'auto' };

  style = AddToObj(style, props.style);

  return (
    <Flex style={style}>
      <MdAddBox
        id="addButton"
        size={styles.add.size}
        style={styles.add}
        onClick={props.click}
      />
    </Flex>
  );
}

export function UpdateButton({ ...props }) {
  let style = { width: 'auto' };

  style = AddToObj(style, props.style);

  return (
    <Flex style={style}>
      <GoSync
        id="updateButton"
        size={styles.update.size}
        style={styles.update}
        onClick={props.click}
      />
    </Flex>
  );
}

export function DeleteButton({ ...props }) {
  let style = { width: 'auto' };

  style = AddToObj(style, props.style);

  return (
    <Flex style={style}>
      <MdDelete
        id="deleteButton"
        size={styles.delete.size}
        style={styles.delete}
        onClick={props.click}
      />
    </Flex>
  );
}

export function DownloadButton({ ...props }) {
  let style = { width: 'auto' };

  style = AddToObj(style, props.style);

  return (
    <Flex style={style}>
      <FiDownload
        id="downloadButton"
        size={styles.download.size}
        style={styles.download}
        onClick={props.click}
      />
    </Flex>
  );
}
