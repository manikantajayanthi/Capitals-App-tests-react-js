import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    capitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({capitalId: event.target.value})
  }

  getCountry = () => {
    const {capitalId} = this.state
    const countryAndCapital = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === capitalId,
    )
    return countryAndCapital.country
  }

  render() {
    const {capitalId} = this.state
    const country = this.getCountry(capitalId)

    return (
      <div className="bg-container">
        <div className="capital-container">
          <h1 className="main-heading">Countries and Capitals</h1>
          <div className="capital-line">
            <select
              className="form-control"
              onChange={this.onChangeCapital}
              value={capitalId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="capital-description"> is capital of which country</p>
          </div>
          <p className="country-class">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
