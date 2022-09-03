import { useState } from 'react';

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
  const [imgUrl, setImgUrl] = useState('');
  async function download(e) {
    e.preventDefault();

    let zip = new JSZip();
    let templateData = JSON.stringify(props.state.template, null, 2);
    let ideData = JSON.stringify(props.state.ide, null, 2);
    let url = 'https://github.com/RaulSCoelho/Templates-CSharp/blob/main/public/icon.png?raw=true';
    const fetchImage = async () => {
      const img = await fetch(url);
      const imgBlob = await img.blob();
      const imageObjectURL = URL.createObjectURL(imgBlob);
      setImgUrl(imageObjectURL);
    };
    fetchImage();
    // let template = zip.folder('.template.config');
    // template.file('template.json', templateData).file('ide.host.json', ideData);

    // zip.generateAsync({ type: 'blob' }).then(async (content) => {
    //   saveAs(content, 'template.zip');
    // });
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
        <Icon icon={imgUrl} style={styles.iconStyle} />
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
