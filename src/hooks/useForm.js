import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // Colocar a 'chave' entre [] deixa ela dinâmica para qualquer input
    });
  }

  function handleChange(infosDoEvento) {
    // const { getAttribute, value } = infosDoEvento.target;
    // Caso não usasse essa função para extrair os valores de infosDoEvento.target,
    // Seria necessário chamar na função
    // setValue(infosDoEvento.targetget.Attribute('name'), infosDoEvento.target.value);
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  // console.log('infosDoEvento', infosDoEvento);
  // 'infos do evento' são informações passadas pelo evento 'onChange'
  // 'target' é o algo no qual a função (onchange) está atuando
  // 'target.value' é o valor alterado no alvo da função
  // setValues(infosDoEvento.target.value)

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
