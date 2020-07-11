import React from 'react';
import Navigation from './Components/Navigation';
import ItemList from './Components/ItemList';
import ItemDetail from './Components/ItemDetail';

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
        <ItemList />
        <ItemDetail />
      </>
    )
  }
}


export default App;
