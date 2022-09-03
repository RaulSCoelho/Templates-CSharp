import { createContext, useMemo, useState } from 'react';

const TemplateContext = createContext();

export default TemplateContext;

const INITIAL_STATE = {
  template: {
    $schema: 'http://json.schemastore.org/template',
    author: 'Seu nome aqui',
    classifications: ['tipos da aplicação'],
    name: 'SixConsult.NET.Foundation.(nome do seu projeto)',
    defaultName: 'SixConsult.NET.Foundation.(nome do seu projeto)', // NÃO ALTERAR
    identity: 'SixConsult.NET.Foundation.(nome do seu projeto)',
    shortName: 'SixConsult.NET.Foundation.(nome do seu projeto)',
    tags: {
      language: 'C#', // NÃO ALTERAR
      type: 'project', // NÃO ALTERAR
    },
    sourceName: 'SixConsult.NET.Foundation.(nome do seu projeto)',
    preferNameDirectory: true, // NÃO ALTERAR
    description:
      'Um modelo de projeto pronto para criar {seu tipo de projeto}.',
  },
  ide: {
    $schema: 'http://json.schemastore.org/vs-2017.3.host', // NÃO ALTERAR
    icon: 'icon.png', // Seu icone
  },
};

export function TemplateProvider({ children }) {
  let [state, setState] = useState(INITIAL_STATE);

  function setTemplate(template) {
    setState({
      ...state,
      template: template,
    });
  }

  const contextData = useMemo(() => {
    for (const [key, value] of Object.entries(state.template)) {
      if (value === null || value === '') {
        state.template[key] = INITIAL_STATE[key];
      }
    }

    state.template.classifications.forEach((classification) => {
      if (classification === null || classification === '') {
        let index = state.template.classifications.indexOf(classification);
        state.template.classifications[index] = INITIAL_STATE.classifications[index];
      }
    });

    return {
      state: state,
      template: state.template,
      ide: state.ide,
      setTemplate: setTemplate,
    };
  });

  return (
    <TemplateContext.Provider value={contextData}>
      {state ? children : null}
    </TemplateContext.Provider>
  );
}
