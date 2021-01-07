import React, { Component } from "react";
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser'
import Cards from './Cards'
import { Spinner } from 'react-bootstrap'
import {setResults} from '../../../Actions/SearchEngine'
import { setCurrentEvent } from "./../../../Actions/SearchEngine";

class List extends Component {
  constructor(props) {
    super(props); 
  }

  async handleHover(item) {
    const {ResultsReducer} = this.props;
    const array = ResultsReducer.results
    array.filter(element => element.recordid === item.recordid ? element.isActive = true : element.isActive = false)
    await this.props.setResults({array: array, bool : true,})
  }

  render() {
    const { ResultsReducer, addCurrentEvent } = this.props
    
    if(ResultsReducer.results) {
        return (      
            <div className="eventScroll">
              {ResultsReducer.results.map((element, i) => (
                <div onMouseEnter={() => this.handleHover(element)}>
                  <Cards addCurrentEvent={(i, b) => addCurrentEvent(i, b)} key={i} data={element}/>
                </div>
              ))}
            </div>
        );
    }

    return (      
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
    
  }
}

const mapStateToProps = state => ({
  ResultsReducer : state.ResultsReducer
})

const mapDispatchToProps = {
  addCurrentEvent: setCurrentEvent,
  setResults: setResults
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
