import React, { Component } from '../../node_modules/react';
import App from './app';
import './style.css';
import Closest from './closest';
import SearchCountry from './SearchCountry';
import TimeZones from './timezones';



class Main extends Component {

      constructor(props) {
        super(props);
        this.state = {
              fullDataResponse: [],
              location : true,
              Country : false,
              hasMounted: 'distanceApp'
        };
      }

    componentDidMount() {
    }

    dataResponseHandle = (dataRes) => {
        this.setState({fullDataResponse : dataRes})
    }

    appSelection = (add) => {
        this.setState({ hasMounted : add })
    }

    turn() {

        switch(this.state.hasMounted) {
            case 'distanceApp':
                return <App fullDataResponse={this.state.fullDataResponse} dataResponseHandle={this.dataResponseHandle}/>;
            case 'countryZones':
                return <Closest fullDataResponse={this.state.fullDataResponse} dataResponseHandle={this.dataResponseHandle}/>;
            case 'SearchCountry':
                return <SearchCountry fullDataResponse={this.state.fullDataResponse} dataResponseHandle={this.dataResponseHandle}/>;
            case 'BetweenTimeZones':
                return <TimeZones fullDataResponse={this.state.fullDataResponse} dataResponseHandle={this.dataResponseHandle}/>;
            default:
                return <App fullDataResponse={this.state.fullDataResponse} dataResponseHandle={this.dataResponseHandle}/>;
          }

      }

  render() {

    return (
        <React.StrictMode>
      <div className='container-fluid big-bg'>
            <div className='container-fluid big-bg heightArrange'>
                <div className="btn-group" role="group" aria-label="...">
                    <button type="button" onClick={() => this.appSelection('distanceApp')} className="btn btn-default">Location Distances</button>
                    <button type="button" onClick={() => this.appSelection('countryZones')} className="btn btn-default">Country Zones</button>
                    <button type="button" onClick={() => this.appSelection('SearchCountry')} className="btn btn-default">Search Country</button>
                    <button type="button" onClick={() => this.appSelection('BetweenTimeZones')} className="btn btn-default">Countries Between Time Zones</button>
                </div>
            </div>
            {this.turn()}

      </div>
      </React.StrictMode>
    );
  }
}

export default Main;
