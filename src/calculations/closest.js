import React, { Component, useContext, useEffect } from 'react';
import axios from 'axios';
import css from '../calculations/style.css';


const getLocations = () => {

  //callback function would be to call toggleAuth
  return (new Promise(async (resolve, reject) => {

    let positionData;

    axios.get('https://restcountries.eu/rest/v2/all')
      .then((res) => {
        positionData = res.data.map((data) => {
          let c = [data.borders, data.alpha3Code]
          return c
        })
      }).then(() => {
        resolve(positionData)
      })
      .catch(function (error) {
        console.log(error);
        reject(false)
      })
      .then(function () {
        console.log("great")
        reject(true)
      });



  }))
}


class Closest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      country1Input: '',
      closestBetween: []
    };
  }


  nearestCalculator = (e) => {
    e.preventDefault()
    
    let closeCountries = this.state.locations.map((data) => {

      if (data[1].trim() == this.state.country1Input.trim()) {
        return data[0]
      }
      return undefined
    })

    closeCountries = closeCountries[0];
    let closestBetween = [];

    this.props.fullDataResponse.map((data) => {
      if (closeCountries.includes(data.borders)) {
        closestBetween.push(data.alpha3Code);

      }
      return undefined

    })

    this.setState({ closestBetween: closestBetween });


  }

  country1Change = (e) => {
    this.setState({ country1Input: e.target.value })
    console.log(this.state.country1Input)
  }




  componentDidMount() {

    let closeCountries = this.props.fullDataResponse.map((data) => {
      let c = [data.borders, data.alpha3Code]
      return c
    })

    this.setState({ 'closestBetween': closeCountries })


  }

  displayMsg() {
    let msg = []
    for (let i = 0; i < this.state.closestBetween.length; i++) {
      if (this.state.closestBetween[i] !== undefined) {
        msg.push(<li className="list-group-item" key={i}> {this.state.closestBetween[i]} </li>)

      }

    }

  }


  render() {
    return (

      <div className='container-fluid big-bg'>


        <form onSubmit={(e) => this.nearestCalculator(e)} class="container p-3 my-3 bg-dark text-white">
          <div className="form-group">
            <label htmlFor="country1">Enter the Country </label>
            <input type="text" onChange={(e) => this.country1Change(e)} className="form-control" id="country1" aria-describedby="country1" placeholder="Enter Country Code" />
            <small id="emailHelp" className="form-text text-muted">Put the country where you want to find the other near countries. example: AFG, for Afghanistan</small>
          </div>

          <button align="center" type="submit" className="btn btn-primary">Submit</button>
          <br>
          </br>

          {/* <h1 className="badgeDistance">{this.state.distanceBetween}</h1> */}

          <ul className="list-group small my-custom-scrollbar my-custom-scrollbar-primary scrollbar scrollbar-primary">
            {this.displayMsg()}
          </ul>

        </form>

        {
          () => {
            console.log("jojo")
          }
        }

      </div>

    );
  }
}

export default Closest;