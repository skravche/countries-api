import React, { Component } from 'react';

const baseUrl = `https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json`;
const titles = {
  web_pages: 'web_pages',
  name: 'name',
  alpha_two_code: 'alpha_two_code',
  domains: 'domains',
  country: 'country',
};

class CountriesExe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(baseUrl)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Failed to load data!');
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading the data...</div>;
    } else {
      let i = 0;
      return (
        <div>
          <ul>
            {items.map(items => (
              <li key={i++}>
                {i}||
                {items.country} | {items.name} |
                <a href={items.web_pages} target="_blank">
                  link
                </a>
                |
                <a href={items.alpha_two_code} target="_blank">
                  >link
                </a>
                |{items.domains}
              </li>
            ))}
            ;
          </ul>
        </div>
      );
    }
  }
}
export default CountriesExe;
