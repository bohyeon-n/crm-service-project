import React from "react";
import { Button, Grid, Image, Container } from "semantic-ui-react";

export default class HomeMain extends React.Component {
  state = {
    activeTitle: "title1"
  };
  handleTitle = title => {
    this.setState({
      activeTitle: title
    });
  };
  render() {
    const { activeTitle } = this.state;

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
            <Grid columns="equal" divided>
              <Grid.Column className="box1">
                <Grid columns="equal">
                  <Grid.Row stretched>
                    <Grid.Column>
                      <div className="title">
                        <p>WHAT IS</p>
                        <p>PTPT?</p>
                      </div>
                      <div className="desc">
                        ptpt는 Personal Training 사업 운영을 관리하는 웹
                        서비스입니다.
                      </div>
                    </Grid.Column>
                    <Grid.Column className="media" width={10}>
                      <Image
                        src="https://images.unsplash.com/photo-1507361617237-221d9f2c84f7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ef76b0e87e41db45864b06e0166bee47&auto=format&fit=crop&w=1706&q=80"
                        alt=""
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>

              <Grid.Column>
                <div className="box2">
                  <div className="content">
                    <div className="content1">
                      <div
                        className="title"
                        onClick={e => this.handleTitle("title1")}
                      >
                        시간을 절약하세요
                      </div>

                      <div
                        className={
                          "desc" + (activeTitle === "title1" ? "_active" : "")
                        }
                      >
                        당신은 고객과 트레이닝에만 집중하세요. 관리는 ptpt가
                        맡겠습니다. ptpt는 당신의 시간과 돈을 절약해드립니다.
                      </div>
                    </div>
                    <div className="content2">
                      <div
                        className="title"
                        onClick={e => this.handleTitle("title2")}
                      >
                        언제, 어디서나 접근할 수 있습니다.
                      </div>

                      <div
                        className={
                          "desc" + (activeTitle === "title2" ? "_active" : "")
                        }
                      >
                        언제 어디서나 로그인할 수 있습니다. 쉽고 똑똑하고
                        간단하게 접근할 수 있습니다.
                      </div>
                    </div>
                    <div className="content3">
                      <div
                        className="title"
                        onClick={e => this.handleTitle("title3")}
                      >
                        사용하기 쉽게 만들었습니다.
                      </div>

                      <div
                        className={
                          "desc" + (activeTitle === "title3" ? "_active" : "")
                        }
                      >
                        필수 기능은 제공하면서 사용하기 쉽게 만들었습니다.
                      </div>
                    </div>
                  </div>
                </div>
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
                <Grid columns={2} divided className="grid">
                  <Grid.Row className="hey">
                    <Grid.Column className="hi">
                      <Grid>
                        <Grid.Row stretched>
                          <Grid.Column>
                            <div className="title">title</div>
                            <div className="desc">desc</div>
                          </Grid.Column>
                          <Grid.Column>
                            <div className="icon">icon</div>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                    <Grid.Column>
                      <Grid>
                        <Grid.Row stretched>
                          <Grid.Column>
                            <div className="title">title</div>
                            <div className="desc">desc</div>
                          </Grid.Column>
                          <Grid.Column>
                            <div className="icon">icon</div>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Grid>
                        <Grid.Row stretched>
                          <Grid.Column>
                            <div className="title">title</div>
                            <div className="desc">desc</div>
                          </Grid.Column>
                          <Grid.Column>
                            <div className="icon">icon</div>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                    <Grid.Column>
                      <Grid>
                        <Grid.Row stretched>
                          <Grid.Column>
                            <div className="title">title</div>
                            <div className="desc">desc</div>
                          </Grid.Column>
                          <Grid.Column>
                            <div className="icon">icon</div>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Grid>
                        <Grid.Row stretched>
                          <Grid.Column>
                            <div className="title">title</div>
                            <div className="desc">desc</div>
                          </Grid.Column>
                          <Grid.Column>
                            <div className="icon">icon</div>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                    <Grid.Column>
                      <Grid>
                        <Grid.Row stretched>
                          <Grid.Column>
                            <div className="title">title</div>
                            <div className="desc">desc</div>
                          </Grid.Column>
                          <Grid.Column>
                            <div className="icon">icon</div>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
