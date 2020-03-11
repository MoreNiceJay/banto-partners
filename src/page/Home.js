import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import CameraIcon from "@material-ui/icons/PhotoCamera"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
import CardWithButton from "../components/CardWithButton"
const cards = [
  {
    preExplain: "수익확인",
    explain: "반토박스의 시리얼 넘버로 반토박스의 대여기록을 확인할 수 있습니다",
    buttonText: "대여기록 확인하기",
    buttonHref: "http://bantobox.banto.io"
  },
  {
    preExplain: "수익내기",
    explain: "반토박스를 보내드립니다. 지금 신청서를 작성해 보세요",
    buttonText: "반토박스 신청하기",
    buttonHref: "https://forms.gle/Kb59vN7iHzGqByKE8"
  },
  {
    preExplain: "설치하기",
    explain: "보내드린 반토박스를 설치하는 방법 입니다. 동영상을 보면서 따라해보셔요",
    buttonText: "설치방법 보러가기",
    buttonHref: "https://blog.naver.com/bantolee/221829906788"
  },
  {
    preExplain: "문의사항",
    explain: "반토 고객센터입니다. 문의사항과 불편사항을 알려주시면 최대한 빨리 답변드리겠습니다",
    buttonText: "반토 카카오 고객센터",
    buttonHref: "http://pf.kakao.com/_eWuNT/chat"
  },
  {
    preExplain: "정책",
    explain: "파트너스의 반토박스 수익분배 방법에 관한 설명이 담겨있습니다",
    buttonText: "파트너스 정책 확인하기",
    buttonHref: "/policy"
  },
  {
    preExplain: "다운로드",
    explain: "파트너스 앱으로 친구를 초대해 수익을 얻어보세요",
    buttonText: "파트너스앱 다운받기",
    buttonHref: "#"
  }
]
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}))
const Home = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            반토 파트너스
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            반토 고객님들의 편의를 위해 최선을 다하겠습니다
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => window.open("http://bantobox.banto.io", "_blank")}
                >
                  대여기록 확인하기
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    window.open("https://forms.gle/Kb59vN7iHzGqByKE8", "_blank")
                  }}
                >
                  반토박스 신청하기
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <CardWithButton
                preExplain={card.preExplain}
                explain={card.explain}
                buttonText={card.buttonText}
                buttonHref={card.buttonHref}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Home
