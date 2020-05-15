import React, { Component } from "react";
import Banana from "./assets/banana.jpeg";

class App extends Component {
  state = {
    jonno: 17122,
    jpoints: "",
    fish: 13004,
    fpoints: "",
    matt: 25422,
    mpoints: "",
    ben: 29725,
    bpoints: "",
    tuhin: 13486,
    tpoints: "",
  };

  add1PointJonno = () => {
    this.setState({ jonno: this.state.jonno + 1 });
  };
  add5PointJonno = () => {
    this.setState({ jonno: this.state.jonno + 5 });
  };

  addSomePointsJonno = () => {
    console.log("hello");
    this.setState({
      jonno: parseInt(this.state.jonno) + parseInt(this.state.jpoints),
    });
  };

  handleSubmitJonno = (e) => {
    e.preventDefault();
    this.addSomePointsJonno();
    this.setState({ jpoints: "" });
  };

  handleChangeJonno = (event) => {
    this.setState({
      jpoints: event.target.value,
    });
  };

  add1Pointfish = () => {
    this.setState({ fish: this.state.fish + 1 });
  };
  add5Pointfish = () => {
    this.setState({ fish: this.state.fish + 5 });
  };

  addSomePointsfish = () => {
    console.log("hello");
    this.setState({
      fish: parseInt(this.state.fish) + parseInt(this.state.fpoints),
    });
  };

  handleSubmitfish = (e) => {
    e.preventDefault();
    this.addSomePointsfish();
    this.setState({ fpoints: "" });
  };

  handleChangefish = (event) => {
    this.setState({
      fpoints: event.target.value,
    });
  };

  add1Pointben = () => {
    this.setState({ ben: this.state.ben + 1 });
  };
  add5Pointben = () => {
    this.setState({ ben: this.state.ben + 5 });
  };

  addSomePointsben = () => {
    console.log("hello");
    this.setState({
      ben: parseInt(this.state.ben) + parseInt(this.state.bpoints),
    });
  };

  handleSubmitben = (e) => {
    e.preventDefault();
    this.addSomePointsben();
    this.setState({ bpoints: "" });
  };

  handleChangeben = (event) => {
    this.setState({
      bpoints: event.target.value,
    });
  };

  add1Pointmatt = () => {
    this.setState({ matt: this.state.matt + 1 });
  };
  add5Pointmatt = () => {
    this.setState({ matt: this.state.matt + 5 });
  };

  addSomePointsmatt = () => {
    console.log("hello");
    this.setState({
      matt: parseInt(this.state.matt) + parseInt(this.state.mpoints),
    });
  };

  handleSubmitmatt = (e) => {
    e.preventDefault();
    this.addSomePointsmatt();
    this.setState({ mpoints: "" });
  };

  handleChangematt = (event) => {
    this.setState({
      mpoints: event.target.value,
    });
  };

  add1Pointtuhin = () => {
    this.setState({ tuhin: this.state.tuhin + 1 });
  };
  add5Pointtuhin = () => {
    this.setState({ tuhin: this.state.tuhin + 5 });
  };

  tuhinButton = () => {
    this.setState({ tuhin: this.state.tuhin - 5 });
  };

  addSomePointstuhin = () => {
    console.log("hello");
    this.setState({
      tuhin: parseInt(this.state.tuhin) + parseInt(this.state.tpoints),
    });
  };

  handleSubmittuhin = (e) => {
    e.preventDefault();
    this.addSomePointstuhin();
    this.setState({ tpoints: "" });
  };

  handleChangetuhin = (event) => {
    this.setState({
      tpoints: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1 class='header1'>SBB</h1>
        <img src={Banana} alt='banana' />
        <div>
          <div class='container'>
            <div class='grid-item item1'>Jonno</div>
            <button class='grid-item item2' onClick={this.add1PointJonno}>
              +1
            </button>
            <button class='grid-item item3' onClick={this.add5PointJonno}>
              +5
            </button>
            <form class='grid-item item4' onSubmit={this.handleSubmitJonno}>
              <input
                class='inputbox'
                type='number'
                id='jpoints'
                name='jpoints'
                value={this.state.jpoints}
                onChange={this.handleChangeJonno}
                placeholder='Enter points here'
              />
              <input
                class='enter'
                type='submit'
                value='Enter'
                onSubmit={this.handleChangeJonno}
              />
            </form>
            <div class='grid-item item5'>
              Jonno's points: {this.state.jonno}
            </div>
          </div>

          <div class='container'>
            <div class='grid-item item1'>Fish</div>
            <button class='grid-item item2' onClick={this.add1Pointfish}>
              +1
            </button>
            <button class='grid-item item3' onClick={this.add5Pointfish}>
              +5
            </button>
            <form class='grid-item item4' onSubmit={this.handleSubmitfish}>
              <input
                type='number'
                id='jpoints'
                name='jpoints'
                value={this.state.fpoints}
                onChange={this.handleChangefish}
                placeholder='Enter points here'
              />
              <input
                type='submit'
                value='Enter'
                onSubmit={this.handleChangefish}
              />
            </form>
            <div class='grid-item item5'>Fish's points: {this.state.fish}</div>
          </div>
          <div class='container'>
            <div class='grid-item item1'>Matt</div>
            <button class='grid-item item2' onClick={this.add1Pointmatt}>
              +1
            </button>
            <button class='grid-item item3' onClick={this.add5Pointmatt}>
              +5
            </button>
            <form class='grid-item item4' onSubmit={this.handleSubmitmatt}>
              <input
                type='number'
                id='jpoints'
                name='jpoints'
                value={this.state.mpoints}
                onChange={this.handleChangematt}
                placeholder='Enter points here'
              />
              <input
                type='submit'
                value='Enter'
                onSubmit={this.handleChangematt}
              />
            </form>
            <div class='grid-item item5'>Matt's points: {this.state.matt}</div>
          </div>
          <div class='container'>
            <div class='grid-item item1'>Tuhin</div>
            <button class='grid-item item2' onClick={this.add1Pointtuhin}>
              +1
            </button>
            <button class='grid-item item3' onClick={this.add5Pointtuhin}>
              +5
            </button>
            <form class='grid-item item4' onSubmit={this.handleSubmittuhin}>
              <input
                type='number'
                id='jpoints'
                name='jpoints'
                value={this.state.tpoints}
                onChange={this.handleChangetuhin}
                placeholder='Enter points here'
              />
              <input
                type='submit'
                value='Enter'
                onSubmit={this.handleChangetuhin}
              />
            </form>
            <div class='grid-item item5'>
              Tuhin's points: {this.state.tuhin}
            </div>
          </div>
          <div class='container'>
            <div class='grid-item item1'>Ben</div>
            <button class='grid-item item2' onClick={this.add1Pointben}>
              +1
            </button>
            <button class='grid-item item3' onClick={this.add5Pointben}>
              +5
            </button>
            <form class='grid-item item4' onSubmit={this.handleSubmitben}>
              <input
                type='number'
                id='jpoints'
                name='jpoints'
                value={this.state.bpoints}
                onChange={this.handleChangeben}
                placeholder='Enter points here'
              />
              <input
                type='submit'
                value='Enter'
                onSubmit={this.handleChangeben}
              />
            </form>
            <div class='grid-item item5'>Ben's points: {this.state.ben}</div>
          </div>
        </div>
        <button class='tuhinbutton' onClick={this.tuhinButton}>
          Tuhin
        </button>
      </div>
    );
  }
}

export default App;
