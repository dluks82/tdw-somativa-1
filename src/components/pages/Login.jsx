import { Component } from "react";
import { Input, Button } from "../ui";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="card">
        <h1>Login</h1>
        <Input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={(e) => {
            this.setState({ email: e.target.value });
            if (this.props.clearError) this.props.clearError();
          }}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={this.state.password}
          onChange={(e) => {
            this.setState({ password: e.target.value });
            if (this.props.clearError) this.props.clearError();
          }}
        />
        <Button onClick={() => this.props.onLogin(this.state)}>Acessar</Button>
        {this.props.errorMessage && (
          <div className="error-message">{this.props.errorMessage}</div>
        )}
        <p className="auth-link">
          Não tem uma conta?{" "}
          <span onClick={this.props.onRegister}>Criar conta</span>
        </p>
      </div>
    );
  }
}
