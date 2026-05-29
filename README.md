# SkateInfos 🛹

Um site interativo sobre skate construído com **p5.js** e HTML/CSS.

## Descrição

SkateInfos é uma plataforma educativa e interativa que fornece informações completas sobre skateboarding, incluindo história, tipos de skate, manobras, equipamentos e dicas de segurança.

## Recursos

✨ **Recursos Principais:**
- **Menu Interativo** - Navegação lateral deslizante para todos os tópicos
- **Painel de Informações** - Dados detalhados sobre diferentes aspectos do skate
- **Animações com p5.js** - Fundo interativo com partículas flutuantes
- **Design Responsivo** - Funciona em desktop, tablet e mobile
- **Interface Moderna** - Design dark mode com cores vibrantes

## Tópicos Disponíveis

1. 📚 **História do Skate** - Origem e evolução do esporte
2. 🛹 **Tipos de Skate** - Street, Cruiser, Longboard, Vert, Penny Board
3. 🔥 **Manobras Básicas** - Kickflip, Ollie, Grind, Manual, Boardslide
4. ⚙️ **Equipamentos** - Tudo o que você precisa para começar
5. 🛡️ **Dicas de Segurança** - Como se proteger ao praticar
6. 👥 **Comunidade Skate** - Como participar e compartilhar paixão

## Como Usar

### Localmente

1. Clone este repositório:
```bash
git clone https://github.com/marcelosantos04-dev/skateinfos.git
cd skateinfos
```

2. Abra o arquivo `index.html` no navegador (ou use um servidor local)

### No p5.js Editor

1. Copie o conteúdo de `sketch.js` e `style.css`
2. Cole no [p5.js Web Editor](https://editor.p5js.org)
3. Ou crie um novo projeto lá

## Estrutura de Arquivos

```
skateinfos/
├── index.html      # Estrutura HTML principal
├── style.css       # Estilos CSS
├── sketch.js       # Lógica com p5.js
└── README.md       # Este arquivo
```

## Tecnologias Utilizadas

- **p5.js** - Biblioteca para gráficos e animações
- **HTML5** - Estrutura
- **CSS3** - Estilos e animações
- **JavaScript Vanilla** - Interatividade

## Como Funciona

### Menu
- Clique no botão `☰` no canto superior esquerdo para abrir o menu
- Selecione um tópico para ver informações detalhadas
- Clique no overlay ou no botão "Fechar" para fechar

### Visualização
- O fundo mostra animações com partículas flutuantes
- Círculos decorativos interagem com o movimento
- Interface responsiva se adapta ao tamanho da tela

## Personalizações Possíveis

Você pode facilmente personalizar:

- **Cores**: Modifique os valores hex em `style.css`
- **Conteúdo**: Edite o objeto `infoDatabase` em `sketch.js`
- **Animações**: Ajuste as propriedades da classe `Particle`
- **Menu**: Adicione novos itens ao array `menuItems`

## Exemplo de Adicionar Novo Tópico

No `sketch.js`, adicione ao array `menuItems`:
```javascript
{ title: 'Novo Tópico', id: 'novo_id' }
```

E adicione ao `infoDatabase`:
```javascript
novo_id: {
    title: 'NOVO TÓPICO',
    content: `<p>Seu conteúdo aqui</p>`
}
```

## Suporte

Para problemas ou sugestões, abra uma issue neste repositório.

## Licença

Projeto aberto para uso educacional e pessoal.

---

**Desenvolvido com ❤️ para a comunidade de skate** 🛹
