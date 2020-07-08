import React from 'react';
import Navigation from './Components/Navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'CPU'
    }
  }

  render() {
    return (
      <>
        <Navigation 
        category={this.state.category} 
        onChangeCategory={(cat) => this.setState({ category:cat })}

        />
      </>
    )
  }
}


export default App;
