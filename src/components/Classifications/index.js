import { useContext } from 'react';

import TemplateContext from '../../context/TemplateContext';
import { DeleteButton } from '../Buttons';
import { Flex } from '../Flex';
import { Input } from '../Input';
import { styles } from './style';

export function Classifications() {
  const { template, setTemplate } = useContext(TemplateContext);

  function removeClassification(index) {
    template.classifications.splice(index, 1);
    setTemplate({
      ...template,
      classifications: template.classifications,
    });
    const inputs = document.querySelectorAll('.classification');

    for (const [key, input] of Object.entries(inputs)) {
      input.value = '';
    }
  }

  function updateClassification(e, index) {
    if (e.target.value === null || e.target.value === '') {
      removeClassification(index);
    } else {
      template.classifications[index] = e.target.value;
    }

    setTemplate({
      ...template,
      classifications: template.classifications,
    });
  }

  return (
    <Flex style={styles.all}>
      {template.classifications.map((classification, index) => {
        const key = index;
        return (
          <Flex style={styles.each} key={key}>
            <Flex style={styles.inEach}>
              <Input
                className="classification"
                style={styles.input}
                placeholder={classification}
                onInput={(e) => updateClassification(e, index)}
              />
              <DeleteButton click={() => removeClassification(index)} />
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
}
