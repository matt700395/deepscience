import React from "react";
import styled from "styled-components";
import {
  Avatar,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  Stack,
  ListItemText,
} from "@mui/material";

import cardImg from "../../assets/about_deepscience.png";

// Styled Components
const StyledContainer = styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled(Typography)`
  color: #123456;
  margin-bottom: 20px;
`;

const StyledCardMedia = styled(CardMedia)`
  border-radius: 5px;
  overflow: hidden;
`;

const HistoryList = styled(List)`
  .history-item {
    margin-bottom: 15px;
  }
`;

const TeamContainer = styled(Grid)`
  .team-item {
    margin-bottom: 15px;
  }

  .team-avatar {
    width: 80px;
    height: 80px;
    border: 2px solid #123456;
  }

  .team-name {
    font-weight: bold;
  }

  .team-position {
    color: #555;
  }
`;

// Data

const history = [
  `DeepScience X 2023년 7월 설립`,
  `중소기업벤처부 예비창업패키지 선정`,
  `중소기업벤처부 딥테크 스쿨 트랙 선정`,
  `과학정보통신부 데이터바우처 사업 선정`,
  `과학정보통신부 클라우드 혁신 사업 선정`,
  `한양대학교 에리카 이노폴리스 사업 선정`,
  `서울대학교 바이오 산업 창업스쿨 선정`,
];

function generateHistory() {
  return history.map((value, idx) => (
    <ListItem key={idx} disablePadding>
      <ListItemText primary={<Typography variant={"h6"}>{value}</Typography>} />
    </ListItem>
  ));
}

const teamMembers = [
  { img: "", name: "김경남", hierarchy: "CEO" },
  { img: "", name: "000", hierarchy: "CTO" },
  { img: "", name: "하상우", hierarchy: "사내이사" },
];
function generateTeamMember() {
  return teamMembers.map((item, idx) => {
    return (
      <React.Fragment key={idx}>
        <Grid item width={"10rem"} pb={5}>
          <Stack alignItems={"center"}>
            <Avatar src={item.img} sx={{ width: "6rem", height: "6rem" }} />
            <Typography variant="h7" fontWeight={"bold"}>
              {item.name}
            </Typography>
            <Typography variant="h7" color={"grey"}>
              {item.hierarchy}
            </Typography>
          </Stack>
        </Grid>
      </React.Fragment>
    );
  });
}

const Info = () => {
  return (
    <StyledContainer>
      <Title variant={"h3"} mb={3} fontWeight={800} align="left">
        회사소개
      </Title>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <StyledCardMedia
            component="img"
            sx={{ width: "100%", mb: 2 }}
            image={cardImg}
            alt="DEEP SCIENCE X"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant={"h6"} mb={2} marginTop={"4.5em"}>
            상상을 현실로 만드는 딥사이언스 및 딥테크 기업에 대한 리서치 및
            투자운용 시스템과 새로운 핀테크 서비스 Nova X를 기관투자가들에게
            제공하는 핀테크 스타트업입니다
          </Typography>
        </Grid>
        <Grid item xs={12} container spacing={1}>
          <Grid item xs={6}>
            <Title variant={"h3"} mb={3} fontWeight={800} align="left">
              연혁
            </Title>
            <HistoryList>{generateHistory()}</HistoryList>
          </Grid>

          <TeamContainer item xs={6} align={"center"}>
            <Title variant={"h3"} mb={3} fontWeight={800} align="left">
              Team
            </Title>
            <Grid container justifyContent={"center"} marginTop={"3em"}>
              {generateTeamMember()}
            </Grid>
          </TeamContainer>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Info;