# threejs\_portifolio

Bem-vindo ao meu portfólio 3D, onde a criatividade encontra a tecnologia! Desenvolvido com React, Three.js e ferramentas modernas, este site traz cenas interativas, mesh personalizadas e modelos glTF animados, tudo com controles em tempo real para você explorar.

---

## 🚀 Funcionalidades

* **Cenas 3D Interativas**: Criadas com React-Three-Fiber e @react-three/drei para uma experiência declarativa em Three.js.
* **Animações Fluídas**: Com GSAP e @gsap/react, timelines e efeitos acionados ao rolar garantem movimentos dinâmicos.
* **Design Responsivo**: Tailwind CSS e @tailwindcss/vite proporcionam layouts que se adaptam a qualquer dispositivo.
* **Globo 3D Interativo**: `react-globe.gl` exibe um globo que você pode girar e explorar.
* **Painel de Controle**: Leva e Maath permitem ajustar parâmetros da cena em tempo real.
* **Formulário de Contato**: EmailJS (`@emailjs/browser`) para envio de mensagens direto do site.
* **Integração com Mesh e glTF**: Carregamento e manipulação customizada de modelos glTF.

---

## 📦 Instalação e Desenvolvimento

### Pré-requisitos

* Node.js (>=16.x)
* npm ou yarn

### Configuração

1. **Clonar o repositório**

   ```bash
   git clone https://github.com/Pedro6Stein/Portifolio_3D.git
   cd Portifolio_3D
   ```

2. **Instalar dependências**

   ```bash
   npm install
   # ou
   yarn
   ```

3. **Iniciar em modo de desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Gerar build de produção**

   ```bash
   npm run build
   # ou
   yarn build
   ```

5. **Pré-visualizar build**

   ```bash
   npm run preview
   # ou
   yarn preview
   ```

6. **Executar lint**

   ```bash
   npm run lint
   # ou
   yarn lint
   ```

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com:

```ini
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=seu_public_key
```

Essas variáveis alimentam o formulário de contato via EmailJS.

---

## 🔧 Tecnologias e Dependências Principais

* **Framework**: React 19
* **Gráficos 3D**:

  * three
  * @react-three/fiber
  * @react-three/drei
  * maath
  * react-globe.gl
* **Animações**: gsap, @gsap/react
* **Estilização**: Tailwind CSS, @tailwindcss/vite
* **Controles & Utilitários**: leva, prop-types, react-responsive
* **Formulários & Email**: @emailjs/browser
* **Ferramentas**: Vite, ESLint

---

## 📖 Uso

1. Navegue pelas diferentes seções 3D do portfólio.
2. Interaja com os modelos (rotacione, amplie ou ajuste via painel de controle).
3. Envie uma mensagem pelo formulário de contato.

---

## 📬 Contribuindo

Este é um projeto pessoal. Fique à vontade para abrir issues ou sugerir melhorias!

---

## 📜 Licença

Liberado sob a [Licença MIT](LICENSE).
