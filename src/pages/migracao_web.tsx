import Head from "next/head";
import { useEffect } from "react";

const selecionar = (elemento: HTMLElement) => {
  document.querySelectorAll(".bloco").forEach((bloco) => {
    bloco.classList.remove("selecionado");
  });

  elemento.classList.add("selecionado");
};


const MigracaoWeb: React.FC = () => {
  useEffect(() => {
    const botaoMais = document.getElementById("abrir-gaveta");
    const gaveta = document.getElementById("gaveta");

    if (botaoMais instanceof HTMLElement && gaveta instanceof HTMLElement) {
      const toggle = (e: Event) => {
        e.preventDefault();
        gaveta.style.display =
          gaveta.style.display === "block" ? "none" : "block";
      };

      const closeOnOutside = (e: MouseEvent) => {
        const target = e.target as Node;
        if (!gaveta.contains(target) && target !== botaoMais) {
          gaveta.style.display = "none";
        }
      };

      botaoMais.addEventListener("click", toggle);
      document.addEventListener("click", closeOnOutside);

      return () => {
        botaoMais.removeEventListener("click", toggle);
        document.removeEventListener("click", closeOnOutside);
      };
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>migração web - Blog Cecília Digital</title>
      </Head>

      <div>
        <header id="header">
          <div className="header-container">
            <figure>
              <div className="Fundo_Icone">
                <img
                  src="/images/Icone_Cecilia_Digital.png"
                  alt="Icone cecilia digital"
                  id="Icone_Site"
                />
              </div>
            </figure>
            <h1 className="logo">Cecília Digital</h1>
            <nav className="navbar">
              <ul className="nav-menu">
                <li>
                  <a href="../index.html">Pagina inicial</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
              </ul>
            </nav>
            <div className="fale_conosco">Fale Conosco →</div>
          </div>
        </header>
        {/* Menu visual para celular */}
        <div className="menu-mobile">
          <div className="menu-blog">
            Blog <span className="seta">▼</span>
          </div>
          <div className="menu-subitem">Mais recentes</div>
        </div>
        <div id="nav-container">
          <nav className="navbar">
            <ul className="nav-menu2">
              <li>
                <a href="/PaginaInicial">Blog</a>
              </li>
              <li>
                <a href="/migracao_web">Migração</a>
              </li>
              <li>
                <a href="/conteudo_web">Integração</a>
              </li>
              <li>
                <a href="#mais-recentes">Mais recentes</a>
              </li>
              <li>
                <a href="#mais" id="abrir-gaveta">
                  Mais
                </a>
                <div id="gaveta" className="gaveta-vertical">
                  <ul className="gaveta-grid">
                    <li className="gaveta-row">
                      <span className="col-esq">Split de Pagamento</span>
                      <span className="col-dir">Pagamento Super Flexível</span>
                    </li>
                    <li className="gaveta-row">
                      <span className="col-esq">Split de Gateway</span>
                      <span className="col-dir">Sincronização Automática</span>
                    </li>
                    <li className="gaveta-row">
                      <span className="col-esq">Split Multi-Regional</span>
                      <span className="col-dir">
                        Regra de negócio personalizadas
                      </span>
                    </li>
                    <li className="gaveta-row">
                      <span className="col-esq">Split Geográfico</span>
                      <span className="col-dir">
                        Controle de estoque por região
                      </span>
                    </li>
                    <li className="gaveta-row">
                      <span className="col-esq">E-commerce</span>
                      <span className="col-dir">Process Automatic</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <section id="migracao">
          <div className="migracao-msg">
            <h1>Migração</h1>
            <p>
              Guia completo de todas as migrações essenciais para o seu
              e-commerce.
            </p>
          </div>
        </section>
        {/* parte com os blocos */}
        <section id="carrossel">
          <div className="carrossel-container">
            <div className="carrossel-card">
              <div className="carrossel-img">
                <img src="/images/Abstract Background.jpg" />
              </div>
              <div className="carrossel-description">
                <p>Migração de Sistema</p>
                <h3>Bill &amp; payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
            <div className="carrossel-card">
              <div className="carrossel-img">
                <img
                  className="carrossel-img2"
                  src="/images/Abstract Background.jpg"
                />
              </div>
              <div className="carrossel-description">
                <p>Migração de Sistema</p>
                <h3>Bill &amp; payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
            <div className="carrossel-card">
              <div className="carrossel-img">
                <img
                  className="carrossel-img3"
                  src="/images/Abstract Background.jpg"
                />
              </div>
              <div className="carrossel-description">
                <p>Migração de Sistema</p>
                <h3>Bill &amp; payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
          </div>
          <div className="carrossel-container">
            <div className="carrossel-card">
              <div className="carrossel-img">
                <img src="/images/Abstract Background.jpg" />
              </div>
              <div className="carrossel-description">
                <p>Migração de Sistema</p>
                <h3>Bill &amp; payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
            <div className="carrossel-card">
              <div className="carrossel-img">
                <img
                  className="carrossel-img2"
                  src="/images/Abstract Background.jpg"
                />
              </div>
              <div className="carrossel-description">
                <p>Migração de Sistema</p>
                <h3>Bill &amp; payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
            <div className="carrossel-card">
              <div className="carrossel-img">
                <img
                  className="carrossel-img3"
                  src="/images/Abstract Background.jpg"
                />
              </div>
              <div className="carrossel-description">
                <p>Migração de Sistema</p>
                <h3>Bill &amp; payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
          </div>
          <div className="carrossel-container">
            <div className="carrossel-card">
              <div className="carrossel-img">
                <img src="/images/Abstract Background.jpg" />
              </div>
              <div className="carrossel-description">
                <p>Migração de Sistema</p>
                <h3>Bill &amp; payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
            <div className="carrossel-card">
              <div className="carrossel-img">
                <img
                  className="carrossel-img2"
                  src="/images/Abstract Background.jpg"
                />
              </div>
              <div className="carrossel-description">
                <p>Migração de Sistema</p>
                <h3>Bill &amp; payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
            <div className="carrossel-card">
              <div className="carrossel-img">
                <img
                  className="carrossel-img3"
                  src="/images/Abstract Background.jpg"
                />
              </div>
              <div className="carrossel-description">
                <p>Migração de Sistema</p>
                <h3>Bill &amp; payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
          </div>
          <div className="carrossel-container">
            <div className="carrossel-card">
              <div className="carrossel-img">
                <img src="/images/Abstract Background.jpg" />
              </div>
              <div className="carrossel-description">
                <p>Migração de Sistema</p>
                <h3>Bill &amp; payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
            <div className="carrossel-card">
              <div className="carrossel-img">
                <img
                  className="carrossel-img2"
                  src="/images/Abstract Background.jpg"
                />
              </div>
              <div className="carrossel-description">
                <p>Migração de Sistema</p>
                <h3>Bill &amp; payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
            <div className="carrossel-card">
              <div className="carrossel-img">
                <img
                  className="carrossel-img3"
                  src="/images/Abstract Background.jpg"
                />
              </div>
              <div className="carrossel-description">
                <p>Migração de Sistema</p>
                <h3>Bill &amp; payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
          </div>
        </section>
        <section id="nav-carrossel">
          <li className="blocos">
            <div className="bloco" onClick={(e) => selecionar(e.currentTarget)}>
              <a href="#1">1</a>
            </div>
            <div className="bloco" onClick={(e) => selecionar(e.currentTarget)}>
              <a href="#2">2</a>
            </div>
            <div className="bloco" onClick={(e) => selecionar(e.currentTarget)}>
              <a href="#3">3</a>
            </div>
            <div className="bloco" onClick={(e) => selecionar(e.currentTarget)}>
              <a href="#4">4</a>
            </div>
            <div className="bloco" onClick={(e) => selecionar(e.currentTarget)}>
              <a href="#5">5</a>
            </div>
          </li>
        </section>
        {/* botoes de navegacao */}
        <section id="contact">
          <h1>
            Conheça todos os nossos <br />
            serviços e produtos!
          </h1>
          <button className="contact-button">contato</button>
        </section>
        <footer id="footer">
          <hr />
          <p>Todos os direitos reservados</p>
        </footer>
      </div>
    </>
  );
};

export default MigracaoWeb;
