import React, { Component } from "react";
import SearchBar from "../../component/SearchBar/SearchBar";
import RepoList from "../../component/RepoList/RepoList"
import api from "../../services/api";

class Home extends Component {
  state = {
    user: "",
    users:[],
    repos: [],
    error: ""
    
  };

  changeUser = (user) => {
    this.setState({ user });
  };

  searchUser = async () => {
    const { user } = this.state;

    

    try {
      
      const { data: repos } = await api.get(
        `https://api.github.com/users/${user}/repos`
      );
      const { data: users } = await api.get(
        `https://api.github.com/users/${user}`
      );
      console.log(users)

      console.log(repos)

      this.setState({ repos,users });
    } catch (error) {
      this.setState({
        error: "usuario nao encontrado",
        repos:[]
      });
    }
  };

  render() {
    const { users,user, repos, error } = this.state;
    
    return (
      <div>
        <h1>GitHub Search</h1>
        <SearchBar
          changeUser={this.changeUser}
          user={user}
          error={error}
          
          
          buttonAction={this.searchUser}
        />
        
        <RepoList repos={repos} users={users} />
      </div>
    );
  }
}

export default Home;
