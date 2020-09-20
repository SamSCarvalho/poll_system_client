import React, { useEffect, useState } from "react";
import moment from "moment";
import ReactLoading from 'react-loading';

import history from '../../routes/history';
import { getPolls } from "../../services/pollService";
import { Container, Header } from "./styles";
import Card from "../../components/Card";
import TitlePage from "../../components/TitlePage";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

const ListPolls = (props) => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    getPolls().then((data) => {
      setPolls(data);
    });
  }, []);

  const accessPoll = (id) => history.push(`/poll/${id}`);
  const acessCreatePoll = () => history.push('/create');

  return (
    <Container>
      <Header>
        <TitlePage
          title="Enquetes Disponiveis"
          subtitle="Acesse uma enquete para poder visualizar mais detalhes sobre a mesma ou crie uma nova."
        />
        <Button title="Criar Nova Enquete" func={acessCreatePoll} type="success"/>
      </Header>
      {(polls.length > 0) ? polls.map((poll) => (
        <div 
          key={poll.id}
          onClick={() => accessPoll(poll.id)}>
          <Card
            pointer={true}
            title={poll.title}
            describe={`${moment(poll.starts_at).format(
              "DD/MM/YYYY"
            )} até ${moment(poll.ends_at).format("DD/MM/YYYY")}`}
          />
        </div>
      )) : (
        <Loading />
      )}
    </Container>
  );
};

export default ListPolls;
