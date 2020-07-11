import React from 'react';
import Navigation from './Components/Navigation';
import ItemList from './Components/ItemList';
import ItemDetail from './Components/ItemDetail';
import SelectedItem from './Components/SelectedItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'CPU',
      itemDetailOpen:false,
      selectedItemOpen:false
    }
  }

  handleItemDetail() {
    this.setState(!this.state.itemDetailOpen);
  }

  render() {
    return (
      <>
        <Navigation 
        category={this.state.category} 
        onChangeCategory={(cat) => this.setState({ category:cat })}
        />
        <ItemList handleItemDetail />
        {this.state.itemDetailOpen && <ItemDetail /> }
        {this.state.selectedItemOpen && <SelectedItem />}
      </>
    )
  }
}


export default App;
