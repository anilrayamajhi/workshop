import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
        <div className="search-bar row">
          <div className="col-md-8">
            <input className="form-control input-sm" type="text" onChange={event => this.onInputChange(event.target.value)} placeholder="U | Tube Search..." />
          </div>
        </div>
    )
  }
}
