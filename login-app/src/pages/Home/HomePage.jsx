import { Link } from 'react-router-dom'


export default function HomePage() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo-section">
          <div className="logo">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#4a8a5c"/>
              <circle cx="12" cy="9" r="2.5" fill="white"/>
              <circle cx="9" cy="11" r="1.2" fill="#4a8a5c"/>
              <circle cx="15" cy="11" r="1.2" fill="#4a8a5c"/>
              <circle cx="12" cy="13" r="1.2" fill="#4a8a5c"/>
            </svg>
          </div>
          <div className="logo-text"><h1>AMIGOS DO<br/>BAIRRO</h1></div>
        </div>

        <div className="nav-buttons">
          <Link className="btn btn-primary" to="/home">HOME</Link>
          <button className="btn btn-primary">MEU PERFIL</button>
          <button className="btn btn-primary">MINHAS OCORRÊNCIAS</button>
          <Link className="btn btn-primary" to="/">SAIR</Link>
        </div>
      </div>

      <div className="main-content">
        <div className="occurrences-section">
          <Link to="/registro" className="register-btn"> REGISTRAR NOVA OCORRÊNCIA</Link>
          <h2 className="section-title">OCORRÊNCIAS RECENTES</h2>

          <div className="occurrences-list">
            {[
              { t: 'BURACO NA RUA', d: '16 DE ABRIL', s: 'PENDENTE' },
              { t: 'FALTA DE ILUMINAÇÃO', d: '14 DE ABRIL', s: 'EM ANÁLISE' },
              { t: 'LIXO ACUMULADO', d: '12 DE ABRIL', s: 'RESOLVIDO' },
              { t: 'POSTE CAÍDO', d: '10 DE ABRIL', s: 'EM ANÁLISE' },
              { t: 'CALÇADA QUEBRADA', d: '08 DE ABRIL', s: 'PENDENTE' },
            ].map((o, i) => (
              <div key={i} className="occurrence-card">
                <div className="occurrence-info">
                  <h3>{o.t}</h3>
                  <p>{o.d}</p>
                </div>
                <span
                  className={`badge ${
                    o.s === 'PENDENTE'
                      ? 'badge-pending'
                      : o.s === 'RESOLVIDO'
                      ? 'badge-resolved'
                      : 'badge-analysis'
                  }`}
                >
                  {o.s}
                </span>
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
