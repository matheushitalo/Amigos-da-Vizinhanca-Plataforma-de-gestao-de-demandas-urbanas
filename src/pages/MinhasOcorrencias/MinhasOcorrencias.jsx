import React, { useState } from "react";
import "./minhasOcorrencias.css";

export default function MinhasOcorrencias() {
  const [telaAtual, setTelaAtual] = useState("lista");
  const [ocorrenciaSelecionada, setOcorrenciaSelecionada] = useState(null);

  const [ocorrencias] = useState([
    {
      id: 1,
      titulo: "BURACO NA RUA",
      data: "16 DE ABRIL",
      status: "PENDENTE",
      descricao: "Buraco grande na via principal causando problemas no trânsito",
      endereco: { bairro: "Centro", rua: "Rua Principal", numero: "123", complemento: "Próximo ao mercado" },
      urgencia: "CRÍTICA",
      foto: "https://images.unsplash.com/photo-1589895987857-689a7ea8cb14?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      titulo: "FALTA DE ILUMINAÇÃO",
      data: "16 DE ABRIL",
      status: "PENDENTE",
      descricao: "Poste de luz queimado deixando a rua escura",
      endereco: { bairro: "Jardim América", rua: "Rua das Flores", numero: "456", complemento: "" },
      urgencia: "ALTA",
      foto: "https://images.unsplash.com/photo-1589895987857-689a7ea8cb14?w=400&h=300&fit=crop"
    },
  ]);

  const handleOcorrenciaClick = (ocorrencia) => {
    setOcorrenciaSelecionada(ocorrencia);
    setTelaAtual("detalhes");
  };

  const handleVoltar = () => {
    setTelaAtual("lista");
    setOcorrenciaSelecionada(null);
  };

  if (telaAtual === "detalhes" && ocorrenciaSelecionada) {
    return (
      <div className="pagina">
        <header className="topo">
          <div className="logo">
            <svg viewBox="0 0 24 24" fill="none" width="36" height="36">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#4ade80" />
            </svg>
            <h1>AMIGOS DO<br />BAIRRO</h1>
          </div>
          <nav>
            <button>HOME</button>
            <button>MEU PERFIL</button>
            <button className="ativo">MINHAS OCORRÊNCIAS</button>
            <button className="sair">SAIR</button>
          </nav>
        </header>

        <main className="conteudo">
          <div className="detalhes">
            <h2>DETALHES DA OCORRÊNCIA</h2>
            <div className="detalhes-grid">
              <div className="coluna">
                <div className="bloco">
                  <h3>TÍTULO</h3>
                  <p>{ocorrenciaSelecionada.titulo}</p>
                </div>
                <div className="bloco">
                  <h3>DESCRIÇÃO</h3>
                  <p>{ocorrenciaSelecionada.descricao}</p>
                </div>
                <div className="bloco">
                  <h3>ENDEREÇO</h3>
                  <p><b>Bairro:</b> {ocorrenciaSelecionada.endereco.bairro}</p>
                  <p><b>Rua:</b> {ocorrenciaSelecionada.endereco.rua}</p>
                  <p><b>Número:</b> {ocorrenciaSelecionada.endereco.numero}</p>
                  <p><b>Complemento:</b> {ocorrenciaSelecionada.endereco.complemento || "-"}</p>
                </div>
              </div>

              <div className="coluna">
                <div className="bloco">
                  <h3>FOTO</h3>
                  <img src={ocorrenciaSelecionada.foto} alt={ocorrenciaSelecionada.titulo} className="foto" />
                </div>
                <div className="bloco">
                  <h3>NÍVEL DE URGÊNCIA</h3>
                  <div className="urgencia-niveis">
                    {["CRÍTICA", "ALTA", "MÉDIA", "BAIXA"].map((nivel) => (
                      <div key={nivel} className={`nivel ${ocorrenciaSelecionada.urgencia === nivel ? "ativo" : ""}`}>
                        {nivel}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button onClick={handleVoltar} className="voltar">VOLTAR</button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="pagina">
      <header className="topo">
        <div className="logo">
          <svg viewBox="0 0 24 24" fill="none" width="36" height="36">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#4ade80" />
          </svg>
          <h1>AMIGOS DO<br />BAIRRO</h1>
        </div>
        <nav>
          <button>HOME</button>
          <button>MEU PERFIL</button>
          <button className="ativo">MINHAS OCORRÊNCIAS</button>
          <button className="sair">SAIR</button>
        </nav>
      </header>

      <main className="conteudo">
        <h2>MINHAS OCORRÊNCIAS</h2>
        <div className="lista">
          {ocorrencias.map((ocorrencia) => (
            <div key={ocorrencia.id} className="card" onClick={() => handleOcorrenciaClick(ocorrencia)}>
              <div className="card-topo">
                <div>
                  <h3>{ocorrencia.titulo}</h3>
                  <p>{ocorrencia.data}</p>
                </div>
                <span className={`status ${ocorrencia.status.toLowerCase().replace(" ", "-")}`}>
                  {ocorrencia.status}
                </span>
              </div>
              <div className="card-corpo">
                <div>
                  <p><b>Bairro:</b> {ocorrencia.endereco.bairro}</p>
                  <p><b>Rua:</b> {ocorrencia.endereco.rua}</p>
                  <p><b>Número:</b> {ocorrencia.endereco.numero}</p>
                  <p><b>Complemento:</b> {ocorrencia.endereco.complemento || "-"}</p>
                  <p><b>Urgência:</b> {ocorrencia.urgencia}</p>
                </div>
                <img src={ocorrencia.foto} alt={ocorrencia.titulo} className="foto-mini" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
