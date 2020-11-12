import React, { Component } from 'react';

class Timezones extends Component {






    render() {
        return (
            <div className='container-fluid big-bg'>


                <form onSubmit={(e) => this.timezoneCalculator(e)} class="container p-3 my-3 bg-dark text-white">
                    <div className="form-group">
                        <label htmlFor="country1">Enter the Country </label>
                        <input type="text" onChange={(e) => this.country1Change(e)} className="form-control" id="country1" aria-describedby="country1" placeholder="Enter Country Code" />
                        <small id="emailHelp" className="form-text text-muted">Put the country where you want to find the other near countries. example: AFG, for Afghanistan</small>
                    </div>

                    <button align="center" type="submit" className="btn btn-primary">Submit</button>
                    <br>
                    </br>

                    <h1 className="badgeDistance">{this.state.distanceBetween}</h1>

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

export default Timezones;