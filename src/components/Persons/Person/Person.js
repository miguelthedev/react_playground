import React, { Component } from 'react';
import classes from './Person.css'
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
  constructor(props) {
    super(props);

    console.log('[Person.js] Inside constructor()', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
	}
	
	componentWillReceiveProps(nextProps) {
		console.log('[UPDATE Person.js] Inside componentWillReceiveProps()', nextProps);
	}

  render() {
		console.log('[Person.js] Inside render()');
		
		return (
			<WithClass classes={classes.Person}>
				<p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old.</p>
				<p>{this.props.children}</p>
				<input onChange={this.props.changed} type="text" value={this.props.name}/>
			</WithClass>
		)
	}
}

export default Person;