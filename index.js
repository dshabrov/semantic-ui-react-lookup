import React, { Component } from "react";
import { Dropdown, Input } from "semantic-ui-react";
import './style/lookup.css';

export default class Lookup extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      dropdownOpen: false,
      inputText: 'DEfault value'
    }
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  onInputTextChange(event, data) {
    this.setState({
      inputText: data.value
    })
  }

  onDropdownValueChange(event, data) {
    this.setState({
      inputText: data.value,
      dropdownOpen: false,
    })
  }


  render() {
    return (
      <div className="lookup">
        <div className="lookup-input">
          <Input
            fluid
            onClick={this.toggleDropdown.bind(this)}
            onChange={this.onInputTextChange.bind(this)}
            value={this.state.inputText}
            onOutsideClick={this.toggleDropdown.bind(this)}
            icon={{ name: 'search', circular: false, link: true, color: 'red' }}
          />
        </div>
        <div className="lookup-dropdown">
          <Dropdown
            options={[
              { key: '1', text: 'Value1', value: 'value1' },
              { key: '2', text: 'Value2', value: 'value2' },
              { key: '3', text: 'Value3', value: 'value3' }
            ]}
            selection
            fluid
            floating
            open={this.state.dropdownOpen}
            onChange={this.onDropdownValueChange.bind(this)}
            selectOnNavigation={false}
            tabIndex={-1}
          />
        </div>
      </div>
    );
  }
}