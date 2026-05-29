let menuOpen = false;
let infoOpen = false;
let particles = [];

// Conteúdo do menu
const menuItems = [
    { title: 'História do Skate', id: 'historia' },
    { title: 'Tipos de Skate', id: 'tipos' },
    { title: 'Manobras Básicas', id: 'manobras' },
    { title: 'Equipamentos', id: 'equipamentos' },
    { title: 'Dicas de Segurança', id: seguranca' },
    { title: 'Comunidade Skate', id: 'comunidade' }
];

// Base de dados de informações
const infoDatabase = {
    historia: {
        title: 'HISTÓRIA DO SKATE',
        content: `
            <p>O skate surgiu na Califórnia, EUA, nos anos 1950, quando surfistas queriam "surfar" nas ruas. Começou como uma placa de madeira com rodas de patim.</p>
            <h3>Marcos Importantes:</h3>
            <ul>
                <li>1950s - Primeiros skates artesanais</li>
                <li>1970s - Revolução do skate moderno</li>
                <li>1980s - Ascensão do skateboarding profissional</li>
                <li>2020 - Skate entra nas Olimpíadas de Tóquio</li>
            </ul>
            <p>Hoje, o skate é uma cultura global com milhões de praticantes e é reconhecido como esporte olímpico.</p>
        `
    },
    tipos: {
        title: 'TIPOS DE SKATE',
        content: `
            <h3>Street Skate</h3>
            <p>O mais comum, usado em ruas e parques para manobras técnicas.</p>
            
            <h3>Cruiser</h3>
            <p>Maior e mais confortável, ideal para deslocamento urbano.</p>
            
            <h3>Longboard</h3>
            <p>Prancha comprida, perfeita para downhill e deslizamento suave.</p>
            
            <h3>Vert Skate</h3>
            <p>Usado em rampas verticais para saltos aéreos radicais.</p>
            
            <h3>Penny Board</h3>
            <p>Skateboard plástico pequeno e portátil.</p>
        `
    },
    manobras: {
        title: 'MANOBRAS BÁSICAS',
        content: `
            <h3>Kickflip</h3>
            <p>A prancha gira completamente sob os pés do skatista.</p>
            
            <h3>Ollie</h3>
            <p>O movimento fundamental do skate, que gera altura sem usar as mãos.</p>
            
            <h3>Grind</h3>
            <p>Deslizar sobre obstáculos usando os trucks do skate.</p>
            
            <h3>Manual</h3>
            <p>Andar sobre as duas rodas traseiras mantendo o equilíbrio.</p>
            
            <h3>Boardslide</h3>
            <p>Deslizar lateralmente sobre um obstáculo.</p>
        `
    },
    equipamentos: {
        title: 'EQUIPAMENTOS ESSENCIAIS',
        content: `
            <h3>Skateboard</h3>
            <p>Prancha, trucks, rodas e role-mancal.</p>
            
            <h3>Proteção</h3>
            <ul>
                <li>Capacete - Proteção da cabeça</li>
                <li>Joelheira - Proteção dos joelhos</li>
                <li>Cotoveleira - Proteção dos cotovelos</li>
                <li>Protetor de pulso - Proteção dos pulsos</li>
            </ul>
            
            <h3>Roupas</h3>
            <p>Roupas confortáveis e calçado adequado com bom grip.</p>
        `
    },
    seguranca: {
        title: 'DICAS DE SEGURANÇA',
        content: `
            <h3>Proteção é Fundamental</h3>
            <ul>
                <li>Sempre use capacete</li>
                <li>Use proteção nos joelhos e cotovelos</li>
                <li>Comece em áreas planas e seguras</li>
                <li>Pratique com amigos para pedir ajuda</li>
            </ul>
            
            <h3>Cuidados com o Equipamento</h3>
            <ul>
                <li>Verifique o skate regularmente</li>
                <li>Mantenha as rodas e trucks em bom estado</li>
                <li>Limpe seu equipamento</li>
            </ul>
        `
    },
    comunidade: {
        title: 'COMUNIDADE SKATE',
        content: `
            <p>A comunidade de skate é acolhedora e inclusiva, onde iniciantes e profissionais convivem compartilhando paixão pelo esporte.</p>
            
            <h3>Participe</h3>
            <ul>
                <li>Visite skateparks locais</li>
                <li>Participe de eventos e competições</li>
                <li>Compartilhe videos e fotos</li>
                <li>Faça amigos com os mesmos interesses</li>
            </ul>
            
            <p>O skate é mais que um esporte, é um estilo de vida!</p>
        `
    }
};

function setup() {
    let container = document.getElementById('p5-container');
    let w = container.offsetWidth;
    let h = container.offsetHeight;
    
    let canvas = createCanvas(w, h);
    canvas.parent('p5-container');
    
    // Criar partículas
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
    
    // Criar elementos do menu
    createMenuElements();
    
    // Event listeners
    document.getElementById('close-btn').addEventListener('click', closeInfo);
    
    windowResized();
}

function draw() {
    background(102, 126, 234, 25);
    
    // Desenhar e atualizar partículas
    for (let p of particles) {
        p.update();
        p.display();
    }
    
    // Desenhar círculos flutuantes decorativos
    noStroke();
    fill(255, 107, 107, 10);
    circle(width * 0.2, height * 0.3, 200);
    circle(width * 0.8, height * 0.7, 150);
    circle(width * 0.5, height * 0.5, 250);
}

function windowResized() {
    let container = document.getElementById('p5-container');
    if (container && container.offsetWidth > 0) {
        resizeCanvas(container.offsetWidth, container.offsetHeight);
    }
}

// Classe de Partícula
class Particle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.vx = random(-2, 2);
        this.vy = random(-2, 2);
        this.size = random(2, 5);
        this.opacity = random(100, 255);
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }
    
    display() {
        fill(255, this.opacity);
        noStroke();
        circle(this.x, this.y, this.size);
    }
}

// Criar elementos do menu
function createMenuElements() {
    // Criar menu lateral
    let sidebarMenu = document.createElement('div');
    sidebarMenu.className = 'sidebar-menu';
    sidebarMenu.id = 'sidebar-menu';
    
    let menuTitle = document.createElement('div');
    menuTitle.className = 'menu-title';
    menuTitle.textContent = '☰ MENU';
    sidebarMenu.appendChild(menuTitle);
    
    menuItems.forEach(item => {
        let menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.textContent = item.title;
        menuItem.onclick = () => {
            showInfo(item.id);
            closeMenu();
        };
        sidebarMenu.appendChild(menuItem);
    });
    
    document.body.appendChild(sidebarMenu);
    
    // Criar botão de menu
    let menuBtn = document.createElement('button');
    menuBtn.className = 'menu-btn';
    menuBtn.innerHTML = '☰';
    menuBtn.onclick = toggleMenu;
    document.body.appendChild(menuBtn);
    
    // Criar overlay
    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.id = 'overlay';
    overlay.onclick = closeMenu;
    document.body.appendChild(overlay);
}

function toggleMenu() {
    menuOpen ? closeMenu() : openMenu();
}

function openMenu() {
    menuOpen = true;
    document.getElementById('sidebar-menu').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closeMenu() {
    menuOpen = false;
    document.getElementById('sidebar-menu').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function showInfo(id) {
    let info = infoDatabase[id];
    if (info) {
        document.getElementById('info-title').textContent = info.title;
        document.getElementById('info-text').innerHTML = info.content;
        document.getElementById('info-panel').classList.add('active');
        infoOpen = true;
    }
}

function closeInfo() {
    document.getElementById('info-panel').classList.remove('active');
    infoOpen = false;
}

// Fechar info quando clicar fora
document.addEventListener('click', (e) => {
    let infoPanel = document.getElementById('info-panel');
    let closeBtn = document.getElementById('close-btn');
    
    if (infoOpen && !infoPanel.contains(e.target) && e.target !== closeBtn) {
        closeInfo();
    }
});
