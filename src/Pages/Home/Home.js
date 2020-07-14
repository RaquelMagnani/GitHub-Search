import React, { Component } from "react";
import SearchBar from "../../component/SearchBar/SearchBar";
import Axios from "axios";
import api from "../../services/api"

class Home extends Component {
  state = {
    user: "",
    repos: [],
    error: "",
    loading: false,
  };

  changeUser = (user) => {
      this.setState({user})
  }





  searchUser =  ()=>{
    const{user}=this.state; 

    api.get(`https://api.github.com/users/${user}`)
    .then((data)=>{
        console.log('retornou do github',data);

    })
    .catch(error=> console.log(error))
    
  };


  render() {
    const { user, repos, error, loading } = this.state;
    return (
      <div>
        <SearchBar
          changeUser={this.changeUser}
          user={user}
          error={error}
          loading={loading}
          buttonAction={this.searchUser}
        />
      </div>
    );
  }
}

export default Home;
