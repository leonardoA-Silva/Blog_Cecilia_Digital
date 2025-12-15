import Head from "next/head";
import { useEffect } from "react";

const ConteudoWeb: React.FC = () => {
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
        <title>conteudo web - Blog Cecília Digital</title>
        {/* Se o CSS estiver em styles/styles.css, importe em _app.tsx */}
      </Head>

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
              <div
                id="gaveta"
                className="gaveta-vertical"
                style={{ display: "none" }}
              >
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

      <section id="full-width-img">
        <div className="fw-img">
          <img src="/images/Migração de sistema.png" alt="" />
          <h2>
            Desafios, Estratégias e Transformação <br />
            Digital nas Empresas Modernas
          </h2>
        </div>
      </section>

      <section id="section-migracao-sistemas">
        <div className="migracao-text">
          <p>
            A migração de sistemas é um processo que sempre esteve presente na
            evolução tecnológica das empresas, mas que, nos últimos anos, ganhou
            destaque absoluto devido ao ritmo acelerado da transformação
            digital. Não importa o segmento: e-commerce, indústria, saúde,
            logística, financeiro — todos enfrentam, em algum momento, a
            necessidade de abandonar sistemas antigos e adotar plataformas mais
            eficientes, seguras e alinhadas às novas demandas de mercado. <br />{" "}
            Mas migrar um sistema não significa apenas transferir dados de um
            lugar para outro. Trata-se de um movimento estratégico e estrutural
            que, quando bem executado, redefine a forma como a empresa opera. E
            quando mal conduzido, pode gerar prejuízos, paradas operacionais e
            perda de informações críticas. <br />A seguir, exploraremos essa
            jornada com profundidade, abordando desafios, etapas-chave, riscos,
            métodos e a importância de uma abordagem sólida. Este artigo traz
            não só uma visão técnica, mas também estratégica e humana sobre
            migrações de sistemas — afinal, apesar de envolver tecnologia, os
            maiores impactos sempre recaem sobre pessoas, processos e resultados
            de negócio.
          </p>
          <h3>Benefícios que vão além da tecnologia</h3>
          <ul className="beneficios-list">
            <li>Sistemas mais rápidos e estáveis</li>
            <li>Dados mais organizados e confiáveis</li>
            <li>Automações que reduzem trabalho manual</li>
            <li>Integração entre setores</li>
            <li>Melhora da experiência do cliente</li>
            <li>Redução de custos de manutenção</li>
            <li>Mais segurança e conformidade com normas</li>
            <li>Aumento da eficiência operacional</li>
            <li>Suporte a crescimento e escalabilidade</li>
          </ul>
          <p className="mts-empresas">
            Muitas empresas relatam que a migração, apesar de trabalhosa, marcou
            um divisor de águas no crescimento do negócio.
          </p>
        </div>
      </section>

      <section id="carrossel">
        <h1 className="mais_artigos">Mais artigos relacionados →</h1>
        <div className="carrossel-container">
          <div className="carrossel-card">
            <div className="carrossel-img">
              <img src="/images/abstract-shape.png" alt="" />
            </div>
            <div className="carrossel-description">
              <p>Migração de Sistema</p>
              <h3>Bill & payments</h3>
              <p>Instantly know your cash position across all accounts,</p>
            </div>
          </div>

          <div className="carrossel-card">
            <div className="carrossel-img">
              <img
                className="carrossel-img2"
                src="/images/Abstract Background.jpg"
                alt=""
              />
            </div>
            <div className="carrossel-description">
              <p>Migração de Sistema</p>
              <h3>Bill & payments</h3>
              <p>Instantly know your cash position across all accounts,</p>
            </div>
          </div>

          <div className="carrossel-card">
            <div className="carrossel-img">
              <img
                className="carrossel-img3"
                src="/images/scrap color.jpg"
                alt=""
              />
            </div>
            <div className="carrossel-description">
              <p>Migração de Sistema</p>
              <h3>Bill & payments</h3>
              <p>Instantly know your cash position across all accounts,</p>
            </div>
          </div>

          {/* demais cards iguais */}
        </div>
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
    </>
  );
};

export default ConteudoWeb;
