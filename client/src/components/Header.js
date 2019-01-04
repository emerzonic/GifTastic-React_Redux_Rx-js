import React, {Component} from 'react';
import {getGifs} from '../actions/gifActions'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class Header extends Component {
    constructor(props) {
        super(props);
    this.state = { 
        searchTerm:'',
        numberOfResults:''
     }

    this.onChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name  = target.name;
        this.setState({
            [name]:value
        })
     }

     this.onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        props.getGifs(this.state.searchTerm, this.state.numberOfResults)
     }
     }


    render() { 
        // console.log(this.state)
        return (
                <div className="container">
                    <div className="row">
                        <form className="col s12 m6" onSubmit={this.onSubmit}>
                            <div className="row">
                            <div className="input-field col s12">
                                <p className="range-field">
                                    <input type="range" name="numberOfResults" onChange={this.onChange} id="test5" min="0" max="100" />
                                    <label htmlFor="test5">Set Results number.</label>
                                </p>
                                </div>
                                <div className="input-field col s12">
                                    <input id="gif-input" name="searchTerm" type="text" onChange={this.onChange} value={this.state.input}  className="validate"/>
                                    <label htmlFor="gif-input">Search gifs here.</label>
                                </div>
                                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                              </button>
                            </div>
                        </form>
                    </div>
                </div>
                );
            }
        }

Header.propTypes = {
    getGifs:PropTypes.func.isRequired,
}


export default connect(null,{getGifs})(Header);