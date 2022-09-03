import { useContext } from 'react';

import { Card } from '../components/Card';
import { Flex } from '../components/Flex';
import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import TemplateContext from '../context/TemplateContext';

function Home() {
  const { state, template, setTemplate } = useContext(TemplateContext);

  const style = {
    backgroundColor: 'rgb(36,36,36)',
    minHeight: '100vh',
    justifyContent: 'center',
  };

  function addClassification() {
    template.classifications.push('add class');
    setTemplate({
      ...template,
      classifications: template.classifications,
    });
  }

  function changeName(e) {
    setTemplate({
      ...template,
      name: e.target.value,
      defaultName: e.target.value,
      identity: e.target.value,
      shortName: e.target.value,
      sourceName: e.target.value,
    });
  }

  return (
    <Flex style={style}>
      <Flex>
        <Flex style={{ width: '420px', alignItems: 'start' }}>
          <h1>Autor</h1>
        </Flex>
        <Input
          style={{ width: '420px', color: '#c4c4c4' }}
          placeholder="Digite o seu nome"
          onInput={(e) => setTemplate({ ...template, author: e.target.value })}
        />
        <Card
          state={state}
          setName={(e) => changeName(e)}
          setDesc={(e) =>
            setTemplate({ ...template, description: e.target.value })
          }
          add={() => addClassification()}
        />
      </Flex>
      <Flex>
        <TextArea
          value={JSON.stringify(template, null, 2)}
          style={{
            width: '50%',
            height: '300px',
            color: 'white',
            margin: '5px 0',
          }}
          readOnly
        />
      </Flex>
    </Flex>
  );
}

export default Home;
