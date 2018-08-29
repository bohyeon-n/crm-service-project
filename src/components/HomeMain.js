import React from "react";
import { Button, Grid, Image, Container } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const features = [
  {
    title: "스케줄 관리",
    body: "스케줄을 관리할 수 있습니다.",
    icon: "calendar-check"
  },
  {
    title: "고객 관리",
    body: "고객을 등록하고 관리할 수 있습니다. ",
    icon: "users"
  },
  {
    title: "알림기능",
    body: "스케줄이 변경, 취소되셨다면 고객에게 변경 사항을 알릴 수 있습니다. ",
    icon: "users"
  },
  {
    title: "알림기능",
    body: "스케줄이 변경, 취소되셨다면 고객에게 변경 사항을 알릴 수 있습니다. ",
    icon: "users"
  },
  {
    title: "알림기능",
    body: "스케줄이 변경, 취소되셨다면 고객에게 변경 사항을 알릴 수 있습니다. ",
    icon: "users"
  },
  {
    title: "알림기능",
    body: "스케줄이 변경, 취소되셨다면 고객에게 변경 사항을 알릴 수 있습니다. ",
    icon: "users"
  }
];
export default class HomeMain extends React.Component {
  state = {
    width: window.innerWidth
  };
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  componentWillUnMount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const isPc = this.state.width > 961;
    return (
      <React.Fragment>
        <div className="home__main">
          <div className="home__main-top" id="overlay">
            <div className="home__main-top-content">
              <div className="box">
                <p>PERSONAL TRAINER</p>
                <p>SOFTWARE</p>
                <p>MANAGE YOUR BUSINESS WITH EASE</p>
              </div>
              <div className="button">
                <Button>SIGNUP</Button>
              </div>
            </div>
          </div>
          <Container className="home__main-mid">
            <Grid>
              <Grid.Column className="box">
                <Grid columns="equal">
                  <Grid.Row stretched>
                    <Grid.Column computer={6} mobile={16}>
                      <div className="title">
                        <p>WHAT IS</p>
                        <p>PTPT?</p>
                      </div>
                      <div className="desc">
                        ptpt는 Personal Training 사업 운영을 관리하는 웹
                        서비스입니다.
                      </div>
                    </Grid.Column>
                    <Grid.Column className="media" computer={10} mobile={16}>
                      <Image
                        src="https://images.unsplash.com/photo-1507361617237-221d9f2c84f7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ef76b0e87e41db45864b06e0166bee47&auto=format&fit=crop&w=1706&q=80"
                        alt=""
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid>
          </Container>
          <div className="mid-bottom">
            FOR PERSONAL TRAINERS, STUDIOS & GYMS
          </div>

          <Container>
            <div className="home__main-mid2">
              <div className="top">
                <div className="title">MAIN FEATURE</div>
                <div className="desc">주요 기능입니다.</div>
              </div>
              <div className="content">
                <Grid columns={2} divided className="feature">
                  {Array(3)
                    .fill(1)
                    .map((x, i) => (
                      <Grid.Row className="feature__row">
                        <Grid.Column
                          className="feature__column"
                          computer={8}
                          mobile={16}
                        >
                          <Grid>
                            {!isPc ? (
                              <Grid.Row stretched>
                                <Grid.Column width={3}>
                                  <div className="icon">
                                    <FontAwesomeIcon
                                      icon={features[i].icon}
                                      size="3x"
                                    />
                                  </div>
                                </Grid.Column>
                                <Grid.Column width={13}>
                                  <div className="title">
                                    {features[i].title}{" "}
                                  </div>
                                  <div className="desc">{features[i].body}</div>
                                </Grid.Column>
                              </Grid.Row>
                            ) : (
                              <Grid.Row stretched>
                                <Grid.Column width={13}>
                                  <div className="title">
                                    {features[i].title}{" "}
                                  </div>
                                  <div className="desc">{features[i].body}</div>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                  <div className="icon">
                                    <FontAwesomeIcon
                                      icon={features[i].icon}
                                      size="3x"
                                    />
                                  </div>
                                </Grid.Column>
                              </Grid.Row>
                            )}
                          </Grid>
                        </Grid.Column>
                        <Grid.Column
                          className="feature__column"
                          computer={8}
                          mobile={16}
                        >
                          <Grid>
                            <Grid.Row stretched>
                              <Grid.Column width={3}>
                                <div className="icon">
                                  <FontAwesomeIcon
                                    icon={features[i + 1].icon}
                                    size="3x"
                                  />
                                </div>
                              </Grid.Column>
                              <Grid.Column width={13}>
                                <div className="title">
                                  {features[i + 1].title}
                                </div>
                                <div className="desc">
                                  {features[i + 1].body}
                                </div>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                      </Grid.Row>
                    ))}
                </Grid>
              </div>
            </div>
          </Container>

          <div className="home__footer">
            <Grid>
              <Grid.Column computer={8} mobile={16}>
                <div className="title">ptpt</div>
                <div className="body">
                  ptpt는 여러분의 의견을 기다리고 있습니다. 언제든지 ptpt에
                  연락해주세요. 당신의 personal training 사업을 돕겠습니다.
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="contact" computer={8} mobile={16}>
                  contact
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
