class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      };
       this.handleChange = this.handleChange.bind(this);
       this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
        this.setState({ input: event.target.value })
    }
    submitMessage() {
        this.setState({ 
          messages: [...this.state.messages, this.state.input],
          input:""
        })
      }
   
   
       // Add handleChange() and submitMessage() methods here
  
    render() {
       const messages = this.state.messages.map(i=><li>{i}</li>); 
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
          <input onChange={this.handleChange.bind(this)} value={this.state.input}></input>
          <button onClick={this.submitMessage.bind(this)}>Add message</button>
          <ul>
            {messages}
          </ul>
          { /* Change code above this line */ }
        </div>
      );
    }
  };