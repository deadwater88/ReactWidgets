import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {val1:0, val2:0, result: "None"};

  }


  calculate(sign) {
    let {val1, val2} = this.state;
    val1 = parseInt(val1);
    val2= parseInt(val2);
    let calculatorMap = {
      '*': ()=> this.setState({result: (val1 * val2)}),
      '/': ()=> this.setState({result: (val1 / val2)}),
      '+': ()=> this.setState({result: (val1 + val2)}),
      '-': ()=> this.setState({result: (val1 - val2)})
    };
    return (e)=>{
      e.preventDefault();
      calculatorMap[sign]();
    };
  }

  updateField(prop){
    return (e)=> {
      this.setState({[prop]: e.currentTarget.value});
    };
  }

  render() {

    return (
    <div>
      <label>
        Enter value here:
        <input onChange={this.updateField('val1')}>

        </input>
      </label>
      <br/><br/>
      <label>
        Enter value here:
        <input onChange={this.updateField('val2')}>

        </input>
      </label>
      <br/>
      <br/>
      <label>
        Output:
        <input readOnly="true" value={this.state.result}>

        </input>
      </label>
        <br/>  <br/>
      <div className="buttons">
        <button onClick={this.calculate('*')}>
          *
        </button>
        <button onClick={this.calculate('/')}>
          /
        </button>
        <button onClick={this.calculate('+')}>
          +
        </button>
        <button onClick={this.calculate('-')}>
          -
        </button>
      </div>
    </div>);
  }


}

export default Calculator;
