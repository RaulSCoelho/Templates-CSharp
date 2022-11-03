import React, { useContext } from 'react'

import { DownloadButton } from 'components/Buttons'
import { Flex } from 'components/Flex'
import { TemplateContext } from 'context/TemplateContext'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'

import { TemplateStyle } from './styles'

export const Template: React.FC = () => {
  const { template } = useContext(TemplateContext)

  async function download() {
    const url =
      'https://raw.githubusercontent.com/RaulSCoelho/Templates-CSharp/main/public/templateIcon.png'
    const zip = new JSZip()
    const templateData = JSON.stringify(template.template, null, 2)
    const ideData = JSON.stringify(template.ide, null, 2)

    const img = await fetch(url, { cache: 'reload' })
    const imgBlob = await img.blob()

    const templateFile = zip.folder('.template.config')

    templateFile
      .file('template.json', templateData)
      .file('ide.host.json', ideData)
      .file('icon.png', imgBlob, { binary: true })

    zip.generateAsync({ type: 'blob' }).then(async content => {
      saveAs(content, 'template.zip')
    })
  }

  return (
    <TemplateStyle>
      <textarea value={JSON.stringify(template, null, 2)} readOnly />
      <Flex height="100px" justifyContent="start">
        <DownloadButton size={30} onClick={download} />
      </Flex>
    </TemplateStyle>
  )
}
