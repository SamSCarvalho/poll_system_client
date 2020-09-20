import React, { useEffect, useState, useCallback } from "react";
import moment from "moment";
import swal from "sweetalert";

import history from "../../routes/history";
import { getPollById, deletePoll, votePoll } from "../../services/pollService";
import {
  Container,
  Bar,
  Progress,
  TextOption,
  Header,
  HeaderOption,
  TextOptionSecond,
} from "./styles";
import Card from "../../components/Card";
import TitlePage from "../../components/TitlePage";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import { ReactComponent as CheckIcon } from "../../res/images/check.svg";
import { ReactComponent as BackIcon } from "../../res/images/back.svg";

const ViewPoll = (props) => {
  const [poll, setPoll] = useState(null);
  const [totalVotes, setTotalVotes] = useState(0);
  const [notActive, setNotActive] = useState(false);
  const { id: idPoll } = props.match.params;

  const getInfoPoll = useCallback(() => {
    getPollById(idPoll).then((data) => {
      setPoll(data);
      let sum = 0;
      data.options.map((option) => (sum += option.votes));
      setTotalVotes(sum);
      if (
        new Date(data.ends_at) < new Date() ||
        new Date() < new Date(data.starts_at)
      )
        setNotActive(true);
    });
  }, [idPoll]);

  useEffect(() => {
    getInfoPoll();
  }, [getInfoPoll]);

  const deletePollHandler = (id) => {
    swal({
      title: "Você tem certeza?",
      text:
        "Uma vez deletado, não será possível visualizar essa enquete novamente!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deletePoll(id).then((response) => {
          if (response.status === 200) {
            swal("Enquete deletada com sucesso!", {
              icon: "success",
            }).then(() => history.push("/"));
          } else {
            swal("Erro inesperado, tente novamente mais tarde!", {
              icon: "warning",
            }).then(() => history.push("/"));
          }
        });
      }
    });
  };

  const voteOptionPoll = (optionId) => {
    votePoll(optionId).then((response) => {
      if (response.status === 200) {
        swal("Enquete votada com sucesso!", {
          icon: "success",
        }).then(() => getInfoPoll());
      } else {
        swal("Erro inesperado, tente novamente mais tarde!", {
          icon: "warning",
        });
      }
    });
  };

  if (!poll) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  };

  return (
    <Container>
      <Header>
        <TitlePage
          title={poll.title}
          subtitle={`${moment(poll.starts_at).format("DD/MM/YYYY")} até ${moment(
            poll.ends_at
          ).format("DD/MM/YYYY")}`}
        />
        <BackIcon
          title="Voltar"
          onClick={() => history.goBack()}
        />
      </Header>
      <Card>
        {poll &&
          poll.options.map((option) => (
            <React.Fragment key={option.id}>
              <HeaderOption disabled={notActive}>
                <TextOption>{option.describe}</TextOption>
                <CheckIcon
                  onClick={() => (!notActive ? voteOptionPoll(option.id) : {})}
                />
                <TextOptionSecond>{option.votes} Votos</TextOptionSecond>
              </HeaderOption>
              <Bar>
                <Progress
                  porcent={
                    totalVotes === 0
                      ? "0%"
                      : `${(option.votes / totalVotes) * 100}%`
                  }
                />
              </Bar>
            </React.Fragment>
          ))}
        <Button
          title="Deletar Enquete"
          func={() => deletePollHandler(poll.id)}
          type="danger"
          centered={true}
        />
      </Card>
    </Container>
  );
};

export default ViewPoll;
