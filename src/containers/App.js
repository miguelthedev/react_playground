import React, { PureComponent } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {
  constructor(props) {
    super(props);

    console.log('[App.js] Inside constructor()', props);

    this.state = {
      persons: [
        { id: 1, name: 'Miguel', age: 24 },
        { id: 2, name: 'Ana', age: 23 },
        { id: 3, name: 'Yesi', age: 28 },      
      ],
      otherState: 'Other state.',
      showPeople: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons || nextState.showPeople !== this.state.showPeople;
	// 	// return true;
	// }

  componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
	}

  componentDidUpdate() {
		console.log('[UPDATE App.js] Inside componentDidUpdate()');
	}
  
  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePeopleHander = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow});
  }

  render() {
    console.log('[App.js] Inside render()');

    let persons = null;

    if(this.state.showPeople) {
      persons = 
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
    };

    return (
      <WithClass classes={classes.App}>
        <button onClick={() => {this.setState({showPeople: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPeople={this.state.showPeople}
          persons={this.state.persons}
          clicked={this.togglePeopleHander}
        />
        {persons}
      </WithClass>
    );
  }
}

export default App;
