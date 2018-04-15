import React, { Component } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import SearchResults from '../SearchResults/SearchResults';

class Search extends Component {
  constructor(props) {
    super(props);
    this.allPokemons = this.props.pokemons;

    this.state = {
      pokemons: this.allPokemons
    };

    this.criteria = {
      searchQuery: '',
    };

    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handlePokemonStateChange = this.handlePokemonStateChange.bind(this);
    this.processSearchQuery = this.processSearchQuery.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.isFetched) {
      this.allPokemons = nextProps.pokemons;
      this.setState({
        pokemons: this.allPokemons
      });
    }
  }

  handleSearchQuery(query) {
    this.criteria.searchQuery = query;
    this.updateResults();
  }

  handlePokemonStateChange(id) {
    const pokemon = this.allPokemons.find(pokemon => pokemon.id === id);
    pokemon.collected = !pokemon.collected;
  }

  processSearchQuery(arr) {
    const template = this.criteria.searchQuery.toLowerCase();
    const fields = ['name', 'type', 'id'];

    return arr.filter(pokemon => {
      for (let field of fields)
        if (pokemon[field].toString().toLowerCase().includes(template))
          return true;

      return false;
    });
  }

  updateResults() {
    let result = this.processSearchQuery(this.allPokemons);

    this.setState({
      pokemons: result
    });
  }

  render() {
    return (
      <div>
        <SearchInput onChange={this.handleSearchQuery} />
        <SearchResults pokemons={this.state.pokemons} isFetched={this.props.isFetched} onPokemonCheck={this.handlePokemonStateChange} />
      </div>
    );
  }
}

export default Search;