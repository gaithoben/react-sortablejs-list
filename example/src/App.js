import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SortableList from 'react-sortable-list';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from 'material-ui';
import { DragHandle as DragHandleIcon } from 'material-ui-icons';
import Button from 'material-ui/Button/Button';

const styles = () => ({
  dragHandle: {
    cursor: 'move',
  },
});

class App extends Component {
  state = {
    value: 'hello',
    options: [
      {
        id: 1,
        name: 'Mary',
      },
      {
        id: 2,
        name: 'John',
      },
      {
        id: 3,
        name: 'James',
      },
    ],
  };

  onChange = value => {
    this.setState({ items: value });
  };
  addOption = () => {
    const item = { id: 4, name: 'Bernard' };
    const options = [...this.state.options, item];
    this.setState({
      options,
    });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ value: 'Hello whoever' });
    }, 5000);
  }
  renderItems = () => {
    const { classes } = this.props;
    return this.state.options.map(i => (
      <ListItem key={i.id}>
        <ListItemIcon className={classes.dragHandle}>
          <DragHandleIcon />
        </ListItemIcon>
        <ListItemText inset primary={i.name} />
      </ListItem>
    ));
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <p className="App-intro">Another Editor</p>
        <Button raised onClick={this.addOption}>
          Add Option
        </Button>
        <List className={classes.root}>
          <SortableList
            style={{ padding: 10 }}
            options={this.state.options}
            onChange={this.onChange}
          >
            {this.renderItems()}
          </SortableList>
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(App);
