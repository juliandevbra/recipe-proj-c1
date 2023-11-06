import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state= {
            name: ''
        }
        console.log('Se ejecutó el constructor')
    }
    componentDidMount() {
        console.log('Se montó el componente')
        setTimeout(() => {
            this.setState({name: 'Fernando'})
        }, 2000)
    }

    componentDidUpdate() {
        console.log('Se actualizó el estado')
    }

    componentWillUnmount() {
        console.log('Se desmontó el componente')
    }


  render() {
      console.log('Se ejecutó el metodo render()')
    return (
      <div>
          <label htmlFor="">Class component</label>
          <input type="text" onChange={(e) => this.setState({name: e.target.value})}/>
        <h3>{this.state.name}</h3>
      </div>
    )
  }
}
