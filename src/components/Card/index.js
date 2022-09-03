import { saveAs } from 'file-saver';
import JSZip from 'jszip';

import { AddButton, DownloadButton } from '../Buttons';
import { Classifications } from '../Classifications';
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import { styles } from './style';

export function Card({ ...props }) {
  async function download(e) {
    e.preventDefault();

    let zip = new JSZip();
    let templateData = JSON.stringify(props.state.template, null, 2);
    let ideData = JSON.stringify(props.state.ide, null, 2);
    let img = new Image();
    img.src = 'templateIcon.png';
    console.log(img);
    let template = zip.folder('.template.config');
    template
      .file('template.json', templateData)
      .file('ide.host.json', ideData)
      .file('icon.png', img);

    zip.generateAsync({ type: 'blob' }).then(async (content) => {
      saveAs(content, 'template.zip');
    });
  }

  return (
    <Flex id="card" style={styles.cardStyle}>
      <Flex
        style={{
          width: '64px',
          height: '100px',
          justifyContent: 'space-between',
        }}
      >
        <Icon icon="icon.png" style={styles.iconStyle} />
        <DownloadButton click={(e) => download(e)} style={{ height: 'auto' }} />
      </Flex>
      <Flex style={styles.flexStyle}>
        <Input
          style={styles.inputStyle}
          default={props.state.template.name}
          onInput={props.setName}
        />
        <TextArea
          style={styles.inputStyle}
          default={props.state.template.description}
          onInput={props.setDesc}
        />
        <Flex style={{ flexDirection: 'row', justifyContent: 'start' }}>
          <Classifications />
          <AddButton click={props.add} style={{ marginTop: '5px' }} />
        </Flex>
      </Flex>
    </Flex>
  );
}
