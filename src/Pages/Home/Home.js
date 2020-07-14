import React, { Component } from "react";
import SearchBar from "../../component/SearchBar/SearchBar";
import RepoList from "../../component/RepoList/RepoList"
import api from "../../services/api";

class Home extends Component {
  state = {
    user: "",
    repos: [],
    error: "",
    loading: false,
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

      console.log(repos)

      this.setState({ repos });
    } catch (error) {
      this.setState({
        error: "usuario nao encontrado",
        repos:[]
      });
    }
  };

  render() {
    const { user, repos, error } = this.state;
    return (
      <div>
        <SearchBar
          changeUser={this.changeUser}
          user={user}
          error={error}
          
          buttonAction={this.searchUser}
        />

        <RepoList repos={repos}/>
      </div>
    );
  }
}

export default Home;
