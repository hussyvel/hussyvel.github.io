export default function Sobre() {
  return (
    <div className="sobre-page">
      <h1>Sobre Mim</h1>
      <div className="sobre-content">
        <p>
          Olá! Bem-vindo ao meu blog pessoal.
        </p>
        <p>
          Este é um espaço onde compartilho minhas experiências, aprendizados
          e reflexões sobre tecnologia, desenvolvimento de software e inovação.
        </p>
        <h2>Tecnologias</h2>
        <p>
          Este blog foi construído com:
        </p>
        <ul>
          <li>Next.js 14 (App Router)</li>
          <li>React 18</li>
          <li>TypeScript</li>
          <li>Markdown para posts</li>
          <li>GitHub Pages para hospedagem</li>
        </ul>
        <h2>Contato</h2>
        <p>
          Você pode me encontrar no{' '}
          <a href="https://github.com/hussyvel" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  )
}
