import { Link } from 'react-router-dom'
import '../Admin/admin.css'

export default function AdminPage() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo-section">
          <div className="logo">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#4a8a5c"/>
              <circle cx="12" cy="9" r="2.5" fill="#fff"/>
              <circle cx="9" cy="11" r="1.2" fill="#4a8a5c"/>
              <circle cx="15" cy="11" r="1.2" fill="#4a8a5c"/>
              <circle cx="12" cy="13" r="1.2" fill="#4a8a5c"/>
            </svg>
          </div>
          <div className="logo-text">
            <h1>PAINEL DO<br/>ADMINISTRADOR</h1>
          </div>
        </div>

        <div className="nav-buttons">
          <Link className="btn btn-primary" to="/home">HOME</Link>
          <button className="btn btn-secondary">CENTRAL DE OCORRÊNCIAS</button>
          <Link className="btn btn-secondary" to="/">SAIR</Link>
        </div>
      </div>

      <div className="main-content">
        <div className="occurrences-section">
          <h2>OCORRÊNCIAS</h2>
          <div className="occurrences-list">
            {[
              'BURACO NA RUA',
              'FALTA DE ILUMINAÇÃO',
              'ACÚMULO DE LIXO',
              'POSTE CAÍDO',
              'CALÇADA QUEBRADA',
              'SEMÁFORO COM DEFEITO',
            ].map((t, i) => (
              <div key={i} className="occurrence-card">
                <div className="occurrence-info">
                  <h3>{t}</h3>
                  <p>12 DE ABRIL</p>
                </div>
                <span className="badge badge-analysis">EM ANÁLISE</span>
              </div>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <h3>FILTRAR</h3>

          <div className="filter-group">
            <label>BAIRRO</label>
            <select className="filter-select">
              <option>TODOS</option>
              <option>Centro</option>
              <option>Jardim América</option>
              <option>Vila Nova</option>
            </select>
          </div>

          <div className="filter-group">
            <label>TIPO</label>
            <select className="filter-select">
              <option>TODOS</option>
              <option>Infraestrutura</option>
              <option>Iluminação</option>
              <option>Limpeza</option>
            </select>
          </div>

          <div className="filter-group">
            <label>STATUS</label>
            <div className="checkbox-group">
              <div className="checkbox-item">
                <input type="checkbox" defaultChecked id="pendente" />
                <label htmlFor="pendente">PENDENTE</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" defaultChecked id="analise" />
                <label htmlFor="analise">EM ANÁLISE</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" defaultChecked id="resolvido" />
                <label htmlFor="resolvido">RESOLVIDO</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
