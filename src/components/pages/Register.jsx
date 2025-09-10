import { Component } from "react";
import { Input, Button } from "../ui";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="card">
        <h1>Cadastro</h1>
        <Input
          type="text"
          placeholder="Nome"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
            if (this.props.clearError) this.props.clearError();
          }}
        />
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
        <Button onClick={() => this.props.onRegister(this.state)}>
          Criar Conta
        </Button>
        {this.props.errorMessage && (
          <div className="error-message">{this.props.errorMessage}</div>
        )}
        <p className="auth-link">
          Já tem uma conta?{" "}
          <span onClick={this.props.onLogin}>Fazer login</span>
        </p>
      </div>
    );
  }
}
