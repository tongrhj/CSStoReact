import React from 'react';
import ReactDOM from 'react-dom';

// import {transform} from './transform.js';
import ReactInStyle from './transback.js';

class Input extends React.Component {
  componentDidUpdate(prevProps) {
    var node = ReactDOM.findDOMNode(this);
    var oldLength = node.value.length;
    var oldIdx = node.selectionStart;
    node.value = this.props.value;
    var newIdx = Math.max(0, node.value.length - oldLength + oldIdx);
    node.selectionStart = node.selectionEnd = newIdx;
  }

  render() {
    return <textarea cols="40" rows="20" {...this.props} value={undefined} />;
  }
}

var sampleCSS = `
      width: 5vh;
      height: 5vh;
      border-radius: 50%;
      background: #dfdfc2;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
      -webkit-animation: leftEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
              animation: leftEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

var initialStarterText = "";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.inputTextUpdate = this.inputTextUpdate.bind(this);

    this.state = {
      inputText: initialStarterText
    }
  }

  componentDidMount() {
    // TODO: remove me...
    this.update();
  }

  inputTextUpdate(e) {
    this.setState({
      inputText: e.target.value
    }, () => {
      this.update();
    });
  }

  update() {

    console.log('update', arguments);

    if(this.state.inputText === initialStarterText) {
        this.setState({
            inputText: initialStarterText,
            error: null
        });
        return;
    }

    try {
      var sampleObj = JSON.stringify({
        // & refers to parent selector, similar to SASS
        '&.test': {
            ':hover': {
                background: '#999'
            }
        },
        height: '100px',
        width: '100px',
        display: 'block',
        // Auto converted to kebab case.
        backgroundColor: 'red',
        img: {
            height: '500px',
            '&.thumbnail': {
                height: '50px'
            }
        },
        ':hover': {
            'background-color': 'blue'
        }
      })
      var formattedInput = this.state.inputText.substr(1)
      console.log('1', formattedInput)
      formattedInput = JSON.stringify(JSON.parse(formattedInput.replace(/\'/g, '\"')))
      console.log('2', formattedInput)
      formattedInput = JSON.parse(formattedInput)
      console.log('3', formattedInput)
      // var formattedInput = JSON.parse(sampleObj)
      var result = ReactInStyle.objToCss(formattedInput);

      this.setState({
        outputText: result,
        error: null
      });
    } catch(ex) {
      this.setState({
        error: ex
      });
    }
  }

  render() {
    var outputCssStyle = this.state.error ? {
      "backgroundColor": "lightcoral"
    } : null;
    console.log('state', this.state);
    var inputText = this.state.inputText;
    var outputText = this.state.error || this.state.outputText;

    return (
      <div style={{"textAlign":"center"}}>
        <Input ref='inputCss' placeholder="Type or paste JSON here..." onChange={this.inputTextUpdate} value={inputText} />
        <textarea ref='outputCss' cols="40" rows="20" style={outputCssStyle} value={outputText} />
        <br />
        <input style={{"marginLeft": "266px"}} ref="useNewline" type="checkbox" onChange={this.update} /> Format
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'), () => {
    var loader = document.getElementById('loader');
    loader && (loader.style.display = "none");
});
