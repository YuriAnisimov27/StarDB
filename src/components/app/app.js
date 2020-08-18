import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import './app.css';
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import ErrorButton from "../error-button";
import PeoplePage from "../people-page";
import ErrorBoundry from "../error-boundry";
import ItemList from '../item-list';


export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

      const { getPerson,
          getStarship,
          getPersonImage,
          getStarshipImage,
          getAllPeople,
          getPlanetImage,
          getAllPlanets } = this.swapiService;

    const personDetails = (
        <ItemDetails itemId={11}
                     getData={getPerson}
                     getImageUrl={getPersonImage} >
          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    );

    const starshipDetails = (
        <ItemDetails itemId={5}
                     getData={getStarship}
                     getImageUrl={getPlanetImage} >
          <Record field="model" label="Model" />
          <Record field="length" label="Length" />
          <Record field="costInCredits" label="Cost In Credits" />
        </ ItemDetails>
    );

    return (
        <ErrorBoundry>
            <div className="stardb-app">
                <Header />

                {/*<Row left={personDetails} right={starshipDetails} />*/}
                {/*{ planet }*/}

                {/*<div className="row mb2 button-row">*/}
                {/*    <button*/}
                {/*        className="toggle-planet btn btn-warning btn-lg"*/}
                {/*        onClick={this.toggleRandomPlanet}>*/}
                {/*        Toggle Random Planet*/}
                {/*    </button>*/}
                {/*    <ErrorButton />*/}
                {/*</div>*/}

                {/*<PeoplePage />*/}

                {/*<div className="row mb2">*/}
                {/*  <div className="col-md-6">*/}
                {/*    <ItemList onItemSelected={this.onPersonSelected}*/}
                {/*              getData={this.swapiService.getAllPlanets}*/}
                {/*              renderItem={(item) => (<span>{item.name} <button>!</button> </span>)} />*/}
                {/*  </div>*/}
                {/*  <div className="col-md-6">*/}
                {/*    <ItemDetails personId={this.state.selectedPerson} />*/}
                {/*  </div>*/}
                {/*</div>*/}

                {/*<div className="row mb2">*/}
                {/*  <div className="col-md-6">*/}
                {/*    <ItemList onItemSelected={this.onPersonSelected}*/}
                {/*              getData={this.swapiService.getAllStarships}*/}
                {/*              renderItem={(item) => item.name} />*/}
                {/*  </div>*/}
                {/*  <div className="col-md-6">*/}
                {/*    <ItemDetails personId={this.state.selectedPerson} />*/}
                {/*  </div>*/}
                {/*</div>*/}

                <ItemList
                    getData={getAllPeople}
                    onItemSelected={() => {}}>

                    { ({name}) => <span>{name}</span> }
                </ItemList>

                <ItemList
                    getData={getAllPlanets}
                    onItemSelected={() => {}}>

                    { ({name}) => <span>{name}</span> }
                </ItemList>


            </div>
        </ErrorBoundry>

    );
  }
}
