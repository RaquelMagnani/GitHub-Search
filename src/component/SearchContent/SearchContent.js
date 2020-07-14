import React from "react";
import api from "./services/api.js";


 class SearchContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  async componentDidMount() {
    
    const response = await api.get(`/users/${user}`);
    
    this.setState({ users: response.data });
  }
  render() {
   
    const { users } = this.state;
    return (
      <div >
        
         {users.name}
       
      </div>
    );
  }
}

export default SearchContent