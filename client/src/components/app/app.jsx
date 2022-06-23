import React from 'react';
import Overview from '../overview/overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return(
      <div>
        <div>HELLO</div>
        <Overview />
      </div>
    )
  }
}

export default App;