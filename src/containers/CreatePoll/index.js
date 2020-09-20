import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import swal from 'sweetalert';

import history from '../../routes/history';
import {
  Container,
  Form,
  ContainerOptions,
  ContainerDate,
  AddButton,
  RemoveButton,
  ErrorSpan,
  Header
} from "./styles";
import DataPicker from "../../components/DataPicker";
import Button from "../../components/Button";
import TitlePage from "../../components/TitlePage";
import Card from "../../components/Card";
import Input from "../../components/Input";
import { ReactComponent as AddIcon } from "../../res/images/add.svg";
import { ReactComponent as RemoveIcon } from "../../res/images/remove.svg";
import { ReactComponent as BackIcon } from "../../res/images/back.svg";
import { createPoll } from "../../services/pollService";

const CreatePoll = (props) => {
  const [formData, setFormData] = useState({
    question: "",
    options: [
      { describe: "", votes: 0 },
      { describe: "", votes: 0 },
      { describe: "", votes: 0 },
    ],
    starts_at: new Date(),
    ends_at: new Date(moment().add(10, "days")),
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [validateForm, setValidateForm] = useState(false);

  const handleOptionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...formData.options];
    list[index][name] = value;
    setFormData({
      ...formData,
      options: list,
    });
  };

  const handleInputChange = (value, name) => {
    const objectForm = { ...formData };
    objectForm[name] = value;
    setFormData(objectForm);
  };

  const handleRemoveClick = () => {
    const list = [...formData.options];
    list.splice(list.length - 1);
    setFormData({
      ...formData,
      options: list,
    });
  };

  const handleAddClick = () => {
    setFormData({
      ...formData,
      options: [...formData.options, { describe: "", votes: 0 }],
    });
  };

  const checkPollForm = useCallback(() => {
    const { options, question, starts_at, ends_at } = formData;
    if (question === null || question === "") return false;
    const valideOptions = options.filter(
      (op) => op.describe !== null && op.describe !== ""
    );
    if (valideOptions.length < 3) return false;
    if (starts_at === null || starts_at === "") return false;
    if (ends_at === null || ends_at === "") return false;
    if (new Date(ends_at) <= new Date(starts_at)) {
      setErrorMsg("A data final não pode ser menor que a de ínicio");
      return false;
    }
    setErrorMsg(null);
    return true;
  }, [formData]);

  const pollCreateHandler = (event) => {
    event.preventDefault();
    const obj = {
      title: formData.question,
      options: formData.options,
      starts_at: moment(formData.starts_at).format("YYYY-MM-DD HH:mm:ss"),
      ends_at: moment(formData.ends_at).format("YYYY-MM-DD HH:mm:ss"),
    }
    createPoll(obj).then((response) => {
      if (response.status === 200) {
        swal("Enquete criada com sucesso!", {
          icon: "success",
        }).then(() => history.push('/'));
      } else {
        swal("Erro inesperado, tente novamente mais tarde!", {
          icon: "warning",
        }).then(() => history.push('/'));
      }
    });
  };

  useEffect(() => {
    setValidateForm(checkPollForm())
  }, [formData, checkPollForm])

  return (
    <Container>
      <Header>
        <TitlePage
          title="Criar Enquete"
          subtitle="Crie sua própria enquete com as opções de resposta, deixe sua criativade fluir com um mínimo de 3 respostas."
        />
        <BackIcon
          title="Voltar"
          onClick={() => history.goBack()}
        />
      </Header>
      <Card>
        <Form onSubmit={pollCreateHandler}>
          <Input
            label="Questão da Enquete"
            name="question"
            elementType="textarea"
            changed={(event) => handleInputChange(event.target.value, event.target.name)}
          />
          <label>
            Adicione as opções para enquete abaixo, com o mínimo de 3
          </label>
          <ContainerOptions>
            {formData.options.map((x, i) => {
              return (
                <Input
                  key={i}
                  elementType="input"
                  name="describe"
                  changed={(event) => handleOptionChange(event, i)}
                />
              );
            })}
            {formData.options.length > 3 && (
              <RemoveButton
                title="Remover última opção"
                onClick={handleRemoveClick}
                type="button"
              >
                <RemoveIcon />
              </RemoveButton>
            )}
            <AddButton
              title="Adicionar outra opção"
              onClick={handleAddClick}
              type="button"
            >
              <AddIcon />
            </AddButton>
          </ContainerOptions>
          <label>Quanto tempo a enquete deve durar?</label>
          <ContainerDate>
            <DataPicker
              name="starts_at"
              startDate={formData.starts_at}
              changed={handleInputChange}
            />
            <span>Até</span>
            <DataPicker
              name="ends_at"
              startDate={formData.ends_at}
              changed={handleInputChange}
            />
          </ContainerDate>
          <ErrorSpan>{errorMsg}</ErrorSpan>
          <Button
            title="Adicionar Enquete"
            centered={true}
            disabled={!validateForm}
          />
        </Form>
      </Card>
    </Container>
  );
};

export default CreatePoll;
