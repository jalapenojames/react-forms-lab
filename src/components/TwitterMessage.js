import React from "react";

class TwitterMessage extends React.Component {
  
  state = {
    twitterForm: "",
    charLeft: this.props.maxChars
  }

  changeInput = (e) => {
    this.setState({
      twitterForm: e.target.value,
      charLeft: this.state.charLeft - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.twitterForm}
          onChange={this.changeInput}/>
        <p>You have {this.state.charLeft} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
