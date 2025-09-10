import { Component } from "react";
import "./Considerations.css";

export class Considerations extends Component {
  render() {
    return (
      <div className="considerations-box">
        <h3>Considerações da Implementação</h3>
        <div className="considerations-content">
          <div className="requirement">
            <h4>Requisitos Atendidos:</h4>
            <ul>
              <li>Título "Login" implementado</li>
              <li>2 inputs: e-mail e senha</li>
              <li>Botão "Acessar" com validação</li>
              <li>Label para exibir mensagens</li>
              <li>Validação específica: eduardo.lino@pucpr.br / 123456</li>
              <li>Mensagens de sucesso e erro implementadas</li>
            </ul>
          </div>

          <div className="test-credentials">
            <h4>Credenciais de Teste:</h4>
            <div className="credentials">
              <p>
                <strong>Usuário Principal (conforme especificação):</strong>
              </p>
              <p>Email: eduardo.lino@pucpr.br</p>
              <p>Senha: 123456</p>

              <p>
                <strong>Usuário Secundário:</strong>
              </p>
              <p>Email: dluks@gmail.com</p>
              <p>Senha: 123456</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
