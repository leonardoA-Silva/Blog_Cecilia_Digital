import Head from "next/head";
import { useEffect } from "react";
import Carrossel from "../components/carrossel"; // ajuste o caminho se necessário

const PaginaInicial: React.FC = () => {
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
        <title>Página Inicial - Blog Cecília Digital</title>
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
                  <a href="https://cecilia.digital">Pagina inicial</a>
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
                <a href="#Blog">Blog</a>
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
              <li></li>
              <li>
                <a href="#mais" id="abrir-gaveta">
                  Mais
                </a>
                {/* Gaveta suspensa abaixo de "Mais" */}
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
        <section id="cards-grid">
          <article className="card card-hero">
            <img
              src="/images/Migração de sistema.png"
              alt="Migração de sistema"
              className="card-img"
            />
            <div className="overlay">
              <span className="kicker">Migração de Sistema</span>
              <h2 className="card-title">Migração de sistema</h2>
              <p className="card-excerpt">
                Instantly know your cash position across all accounts.
              </p>
              <h4 className="card-author">De Cecilia Digital</h4>
            </div>
          </article>
          <div className="right-column">
            <article className="card card-small">
              <img
                src="/images/Integração de sistema.png"
                alt="Integração de sistema"
                className="card-img"
              />
              <div className="overlay small">
                <span className="kicker">Integração de Sistema</span>
                <h2 className="card-title">Integração de sistema</h2>
                <p className="card-excerpt">
                  Instantly know your cash position across all accounts.
                </p>
              </div>
            </article>
            <aside className="cta-box">
              <p>Faça agora uma avaliação do seu e‑commerce, gratuita!</p>
              <a href="#contato" className="btn">
                Fale Conosco →
              </a>
            </aside>
          </div>
        </section>
        {/* Conheça seu parceiro */}
        <section id="features-section">
          <h2 className="conheca-seu-parceiro">Conheça seu parceiro</h2>
          <section className="features-grid">
            {/* Card 1: Gateway de Pagamento */}
            <article className="feature gateway">
              <div className="feature-box">
                <img
                  className="ftr-box-img1"
                  src="/images/fitness first.png"
                  alt="Transação Fitness First"
                />
                <img
                  className="ftr-box-img2"
                  src="/images/income.png"
                  alt="Entrada de receita"
                />
              </div>
              <div className="feature-description">
                <h3>Gateway de Pagamento</h3>
                <p>Instantly know your cash position across all accounts.</p>
              </div>
            </article>
            {/* Card 2: E-commerce Automatizado */}
            <article className="feature e-commerce">
              <div className="feature-box feature-box--three">
                <img
                  className="ftr-box-img3"
                  src="/images/cd2a10874132b31fd3ed6d9b87d06aa5305fa41e (3).png"
                  alt="Potato Corner"
                />
              </div>
              <div className="feature-description">
                <h3>E-commerce Automatizado</h3>
                <p>
                  Drill down to the transaction level, with every detail at
                  fingertips.
                </p>
              </div>
            </article>
            {/* Card 3: Regras Personalizadas */}
            <article className="feature regras">
              <div className="feature-box">
                <img
                  src="/images/cd2a10874132b31fd3ed6d9b87d06aa5305fa41e (1).png"
                  alt="Spending Plan gráfico"
                />
              </div>
              <div className="feature-description">
                <h3>Regras Personalizadas</h3>
                <p>
                  Automatically put your idle cash to work and make the most of
                  every dollar.
                </p>
              </div>
            </article>
          </section>
        </section>
      </div>

      <div>
        <section id="recent-info">
          <h2>Mais Recentes →</h2>
          <div className="conjunto-titulos">
            <div className="titulo-chamar-atencao">
              <div className="black-bar" />
              <h3>
                Titulo que vai chamar atenção <br />
                das pessoas
              </h3>
              <h4>25 de novembro de 2025</h4>
            </div>
            <div className="titulo-chamar-atencao">
              <div className="black-bar" />
              <h3>
                Titulo que vai chamar atenção <br />
                das pessoas
              </h3>
              <h4>25 de novembro de 2025</h4>
            </div>
            <div className="titulo-chamar-atencao">
              <div className="black-bar" />
              <h3>
                Titulo que vai chamar atenção <br />
                das pessoas
              </h3>
              <h4>25 de novembro de 2025</h4>
            </div>
          </div>
        </section>

        <section id="register">
          <h2>Fique por dentro de tudo</h2>
          <p>
            Se registre e tenha acesso a diversos conteúdos para agregar no seu
            e-commerce
          </p>
          <form>
            <div className="form-register">
              <input type="email" placeholder="Digite seu e-mail" />
              <button type="submit">Registrar</button>
            </div>
          </form>
        </section>

        {/* Primeiro carrossel */}
        <section id="carrossel">
          <h1>Dicas para e-commerce →</h1>
          <Carrossel cardClass=".carrossel-card">
            <div className="carrossel-card">
              <div className="carrossel-img">
                <img src="/images/abstract-shape.png" />
              </div>
              <div className="carrossel-description">
                <p>Migração de Sistema</p>
                <h3>Bill & payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
            <div className="carrossel-card">
              <div className="carrossel-img">
                <img src="/images/Abstract Background.jpg" />
              </div>
              <div className="carrossel-description">
                <p>Migração de Sistema</p>
                <h3>Bill & payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
            <div className="carrossel-card">
              <div className="carrossel-img">
                <img src="/images/scrap color.jpg" />
              </div>
              <div className="carrossel-description">
                <p>Migração de Sistema</p>
                <h3>Bill & payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
          </Carrossel>
        </section>

        {/* Segundo carrossel */}
        <section id="carrossel2">
          <h1>Migração I Integração →</h1>
          <Carrossel cardClass=".carrossel-card2">
            <div className="carrossel-card2">
              <div className="carrossel-img4">
                <img src="/images/quadros.jpg" />
              </div>
              <div className="carrossel-description2">
                <p>Migração de Sistema</p>
                <h3>Bill & payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
            <div className="carrossel-card2">
              <div className="carrossel-img">
                <img src="/images/alianca.jpg" />
              </div>
              <div className="carrossel-description2">
                <p>Migração de Sistema</p>
                <h3>Bill & payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
            <div className="carrossel-card2">
              <div className="carrossel-img2">
                <img src="/images/cafe.jpg" />
              </div>
              <div className="carrossel-description2">
                <p>Migração de Sistema</p>
                <h3>Bill & payments</h3>
                <p>Instantly know your cash position across all accounts,</p>
              </div>
            </div>
          </Carrossel>
        </section>

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

export default PaginaInicial;
