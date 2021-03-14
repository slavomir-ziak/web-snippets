import React from "react";
import DataTable from "./DataTable";

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Grid from '@material-ui/core/Grid';

function toggle(array, value) {
  if (array.includes(value)) {
    return array.filter(val => val !== value);
  } else {
    array.push(value);
    return array;
  }
}

function addIfMissing(array, value) {
  if (!array.includes(value)) {
    array.push(value);
  } 
}

function readSingleFile(e, handleContent) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    handleContent(contents);
  };
  reader.readAsText(file);
}


export default class App extends React.Component {
  state = {
    json: [{"a": 1, "b": 3}, {"a":5, "c": 4}], // [{"a": 1, "b": 3}, {"a":5, "c": 4, "d":"ee"}, {"t":"4", "5":"r"}]
    header: ["a", "c"],
    headerFull: ["a", "b", "c"]
  };

  handleNewJson = data => {
    console.log(data);

    const json = JSON.parse(data);
    const headerFull = json.reduce((acc, val) => {
      Object.keys(val).forEach(k => {
        addIfMissing(acc, k);
      })
      return acc;
    }, []);
    console.log(headerFull);
    this.setState({json, headerFull, header: headerFull.slice(0, 5)});
  };

  toggleHeader = header => {
    const newheader = toggle(this.state.header, header);
    this.setState({header: newheader});
  };

  render() {

    return (
      <div style={{flexGrowL:1}}>
        <input type="file" rows="50" cols="100" onChange={(e) => readSingleFile(e, this.handleNewJson)} />

        <Grid container spacing={3}>
          {this.state.headerFull.map(header => {  
            return (
              <Grid item xs={3}>
              <FormControlLabel control={
                <Checkbox
                checked={this.state.header.includes(header)}
                onChange={() => this.toggleHeader(header)} 
                inputProps={{ 'aria-label': header }} /> } 
                label={header}
              />
              </Grid>
            );
          })}
        </Grid>
        <DataTable data={this.state.json} header={this.state.header}></DataTable>
      </div>
    );
  }
}
