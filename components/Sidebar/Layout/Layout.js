
import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
//import Sidebar from './Sidebar'


class Layout extends React.Component {
    render() {
      return (
        <div>
          <Sidebar />
          {this.props.children}
        </div>
      )
    }
  }

export default Layout;