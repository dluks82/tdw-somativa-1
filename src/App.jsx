import { Component } from "react";
import "./App.css";
import { Register, Login, Dashboard } from "./components";
import { Considerations } from "./components/ui";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistering: false,
      users: [
        {
          name: "Diogo Oliveira",
          email: "dluks@gmail.com",
          password: "123456",
        },
        {
          name: "Eduardo Lino",
          email: "eduardo.lino@pucpr.br",
          password: "123456",
        },
      ],
      isLoggedIn: false,
      loggedUser: null,
      loginError: "",
      registerError: "",
    };

    this.handleIsRegistering = this.handleIsRegistering.bind(this);
  }

  handleIsRegistering = () => {
    this.setState((prevState) => ({
      isRegistering: !prevState.isRegistering,
      loginError: "",
      registerError: "",
    }));
  };

  handleRegister = (userData) => {
    if (
      !userData.name?.trim() ||
      !userData.email?.trim() ||
      !userData.password?.trim()
    ) {
      this.setState({ registerError: "Por favor, preencha todos os campos" });
      return;
    }

    const existingUser = this.state.users.find(
      (user) => user.email === userData.email
    );
    if (existingUser) {
      this.setState({ registerError: "Este email já está cadastrado" });
      return;
    }

    this.setState((prevState) => ({
      users: [...prevState.users, userData],
      isRegistering: false,
      registerError: "",
    }));
  };

  handleLogin = ({ email, password }) => {
    if (!email?.trim() || !password?.trim()) {
      this.setState({ loginError: "Por favor, preencha todos os campos" });
      return;
    }

    const user = this.state.users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      this.setState({
        isLoggedIn: true,
        loggedUser: user,
        isRegistering: false,
        loginError: "",
      });
    } else {
      this.setState({ loginError: "Email ou senha incorretos" });
    }
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false, loggedUser: null });
  };

  clearLoginError = () => {
    this.setState({ loginError: "" });
  };

  clearRegisterError = () => {
    this.setState({ registerError: "" });
  };

  render() {
    return this.state.isLoggedIn ? (
      <Dashboard user={this.state.loggedUser} onLogout={this.handleLogout} />
    ) : (
      <>
        {this.state.isRegistering ? (
          <Register
            onRegister={this.handleRegister}
            onLogin={this.handleIsRegistering}
            errorMessage={this.state.registerError}
            clearError={this.clearRegisterError}
          />
        ) : (
          <Login
            onLogin={this.handleLogin}
            onRegister={this.handleIsRegistering}
            errorMessage={this.state.loginError}
            clearError={this.clearLoginError}
          />
        )}
        <Considerations />
      </>
    );
  }
}

export default App;
