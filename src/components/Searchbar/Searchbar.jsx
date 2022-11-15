import { Component } from 'react';
// import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleQueryChange = e => {
    const query = e.currentTarget.value.toLowerCase();

    this.setState({ searchQuery: query });
  };
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      toast.warning('please input the correct query');
      e.target.reset();
      return;
    }

    this.props.submitEvt(this.state.searchQuery);

    this.setState({ searchQuery: '' });
    e.target.reset();
  };

  render() {
    return (
      // <header className={css.searchbar}>
      //   <form className={css.searchForm} onSubmit={this.handleSubmit}>
      //     <button type="submit" className={css.button}>
      //       <span className={css.buttonLabel}>Search</span>
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            value={this.state.searchQuery}
            onChange={this.handleQueryChange}
            // className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  submitEvent: PropTypes.func,
};
