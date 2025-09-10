import { Component } from "react";

export class Dashboard extends Component {
  render() {
    return (
      <div className="card">
        <h1>Dashboard</h1>
        <div className="welcome-message">
          Bem-vindo, <span className="user-email">{this.props.user.name}</span>!
        </div>
        <p>Você está logado com sucesso no sistema.</p>
        <button className="btn btn-logout" onClick={this.props.onLogout}>
          Sair do Sistema
        </button>
      </div>
    );
  }
}
