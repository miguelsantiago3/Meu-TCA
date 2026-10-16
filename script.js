/* =========================
   PROFISSÕES
========================= */
const profissoes = [
    { nome: "Especialista em Inteligência Artificial", categoria: "tecnologia", emoji: "🤖", descricao: "Desenvolve e aplica sistemas de inteligência artificial para resolver problemas.", habilidades: "Programação, matemática e pensamento lógico." },
    { nome: "Engenheiro de Robótica", categoria: "tecnologia", emoji: "🦾", descricao: "Projeta robôs e sistemas automatizados.", habilidades: "Engenharia, eletrônica e programação." },
    { nome: "Especialista em Cibersegurança", categoria: "tecnologia", emoji: "🔐", descricao: "Protege sistemas, redes e informações digitais.", habilidades: "Segurança digital e análise de sistemas." },
    { nome: "Desenvolvedor de Realidade Virtual", categoria: "tecnologia", emoji: "🥽", descricao: "Cria ambientes e experiências digitais imersivas.", habilidades: "Programação, design e criatividade." },
    { nome: "Bioengenheiro", categoria: "ciencia", emoji: "🧬", descricao: "Combina engenharia e biologia para desenvolver soluções.", habilidades: "Biologia, engenharia e pesquisa." },
    { nome: "Geneticista", categoria: "ciencia", emoji: "🔬", descricao: "Estuda genes e características hereditárias.", habilidades: "Genética, biologia e análise de dados." },
    { nome: "Especialista em Medicina Personalizada", categoria: "ciencia", emoji: "🩺", descricao: "Trabalha com abordagens de saúde adaptadas às características dos pacientes.", habilidades: "Medicina, genética e tecnologia." },
    { nome: "Engenheiro de Energias Renováveis", categoria: "ambiente", emoji: "☀", descricao: "Desenvolve sistemas que utilizam fontes de energia renovável.", habilidades: "Engenharia e conhecimentos ambientais." },
    { nome: "Cientista Ambiental", categoria: "ambiente", emoji: "🌳", descricao: "Pesquisa os ecossistemas e propõe soluções ambientais.", habilidades: "Ciências naturais e pesquisa." },
    { nome: "Especialista em Restauração de Ecossistemas", categoria: "ambiente", emoji: "🌿", descricao: "Ajuda a recuperar áreas naturais degradadas.", habilidades: "Ecologia, planejamento e conservação." },
    { nome: "Engenheiro Aeroespacial", categoria: "espaco", emoji: "🚀", descricao: "Projeta aeronaves, satélites e veículos espaciais.", habilidades: "Física, matemática e engenharia." },
    { nome: "Especialista em Habitats Espaciais", categoria: "espaco", emoji: "🪐", descricao: "Pesquisa ambientes para permanência humana fora da Terra.", habilidades: "Arquitetura, engenharia e ciências espaciais." },
    { nome: "Pesquisador Espacial", categoria: "espaco", emoji: "🔭", descricao: "Investiga planetas, estrelas e fenômenos do universo.", habilidades: "Astronomia, física e pesquisa." },
    { nome: "Designer de Experiências Virtuais", categoria: "criatividade", emoji: "🎨", descricao: "Planeja experiências digitais interativas.", habilidades: "Design, comunicação e criatividade." },
    { nome: "Especialista em Ética da Inteligência Artificial", categoria: "criatividade", emoji: "⚖", descricao: "Estuda questões éticas e sociais relacionadas à inteligência artificial.", habilidades: "Ética, tecnologia e pensamento crítico." }
];

const nomesCategorias = {
    tecnologia: "Tecnologia",
    ciencia: "Ciência e Saúde",
    ambiente: "Meio Ambiente",
    espaco: "Espaço",
    criatividade: "Criatividade e Sociedade"
};

function mostrarProfissoes() {
    const categoria = document.getElementById("categoria").value;
    const lista = profissoes.filter(p => categoria === "todas" || p.categoria === categoria);
    document.getElementById("lista-profissoes").innerHTML = lista.map(p => `
        <article class="cartao">
            <div class="emoji">${p.emoji}</div>
            <h3>${p.nome}</h3>
            <span class="etiqueta">${nomesCategorias[p.categoria]}</span>
            <p style="margin-top:14px">${p.descricao}</p>
            <p style="margin-top:12px"><strong>Habilidades:</strong> ${p.habilidades}</p>
        </article>
    `).join("");
}

document.getElementById("categoria").addEventListener("change", mostrarProfissoes);
mostrarProfissoes();

function mostrarPerfil(categoria) {
    const lista = profissoes.filter(p => p.categoria === categoria).slice(0, 3);
    document.getElementById("resultado-perfil").innerHTML = `
        <h3 style="margin:20px 0 12px">✨ Algumas profissões para você conhecer:</h3>
        <div class="cartoes">
            ${lista.map(p => `<div class="cartao"><div class="emoji">${p.emoji}</div><h3>${p.nome}</h3><p>${p.descricao}</p></div>`).join("")}
        </div>
        <p style="color:#a4b2c9; margin-top:15px; font-size:13px;">Este resultado é apenas uma sugestão baseada no interesse escolhido.</p>
    `;
}

/* =========================
   QUIZ VOCACIONAL
========================= */
const perguntasVocacionais = [
    {
        pergunta: "Você ganha um dia 100% livre, sem internet e sem ninguém te cobrar. O que você faz nas primeiras 2 horas?",
        respostas: [
            { texto: "Desmonto algo só pra entender como funciona por dentro", categoria: "tecnologia" },
            { texto: "Fico observando detalhes que ninguém mais repara", categoria: "ciencia" },
            { texto: "Vou pra fora, preciso sentir vento, chão, barulho de vida", categoria: "ambiente" },
            { texto: "Fico imaginando como seria viver em um lugar onde nada do daqui existe", categoria: "espaco" },
            { texto: "Começo algo do zero, mesmo sem saber se vai dar certo", categoria: "criatividade" }
        ]
    },
    {
        pergunta: "Um amigo vem te contar um problema muito confuso. Qual é sua primeira reação?",
        respostas: [
            { texto: "Tento organizar em partes, tipo um fluxograma na cabeça", categoria: "tecnologia" },
            { texto: "Pergunto um monte de 'por quês' até achar a raiz", categoria: "ciencia" },
            { texto: "Penso no impacto que isso tem nas outras pessoas ao redor", categoria: "ambiente" },
            { texto: "Imagino a versão mais maluca e distante desse problema", categoria: "espaco" },
            { texto: "Penso em um jeito totalmente diferente de contar essa mesma história", categoria: "criatividade" }
        ]
    },
    {
        pergunta: "Se seu cérebro fosse uma casa, qual cômodo você mais usaria?",
        respostas: [
            { texto: "A oficina, cheia de ferramentas e coisas pra testar", categoria: "tecnologia" },
            { texto: "O laboratório, com cadernos e anotações de tudo", categoria: "ciencia" },
            { texto: "O quintal, porque eu preciso estar conectado com fora", categoria: "ambiente" },
            { texto: "O sótão com telescópio, onde ninguém mais vai", categoria: "espaco" },
            { texto: "O quarto bagunçado onde tudo vira ideia nova", categoria: "criatividade" }
        ]
    },
    {
        pergunta: "Você tem que guardar só UMA coisa de 2026 para as pessoas de 2126 acharem. O que você guarda?",
        respostas: [
            { texto: "Um código ou sistema que eu mesmo fiz funcionar", categoria: "tecnologia" },
            { texto: "Uma pergunta que ainda não tem resposta", categoria: "ciencia" },
            { texto: "Uma semente de verdade, de uma planta que está sumindo", categoria: "ambiente" },
            { texto: "Um mapa de um lugar que ninguém conseguiu chegar ainda", categoria: "espaco" },
            { texto: "Uma história que só eu poderia ter criado", categoria: "criatividade" }
        ]
    },
    {
        pergunta: "Quando algo dá MUITO errado, o que te mantém calmo?",
        respostas: [
            { texto: "Saber que existe uma lógica, mesmo que eu ainda não achei", categoria: "tecnologia" },
            { texto: "Entender exatamente por que deu errado", categoria: "ciencia" },
            { texto: "Lembrar que tudo faz parte de um ciclo maior", categoria: "ambiente" },
            { texto: "Pensar que isso é pequeno perto do tamanho do universo", categoria: "espaco" },
            { texto: "Transformar o erro em outra coisa que ninguém esperava", categoria: "criatividade" }
        ]
    },
    {
        pergunta: "Qual tipo de filme te prende até o final sem você olhar no celular?",
        respostas: [
            { texto: "Aquele onde alguém cria algo impossível e funciona", categoria: "tecnologia" },
            { texto: "Aquele onde desvendam um mistério peça por peça", categoria: "ciencia" },
            { texto: "Aquele onde um grupo salva um lugar que ama", categoria: "ambiente" },
            { texto: "Aquele onde vão parar tão longe que nada é familiar", categoria: "espaco" },
            { texto: "Aquele onde a realidade vira do avesso", categoria: "criatividade" }
        ]
    },
    {
        pergunta: "Última e mais importante: o que te dá mais medo no futuro?",
        respostas: [
            { texto: "Que a gente pare de criar coisas novas e só copie", categoria: "tecnologia" },
            { texto: "Que a gente pare de fazer perguntas", categoria: "ciencia" },
            { texto: "Que não sobre nada vivo pra contar a história", categoria: "ambiente" },
            { texto: "Que a gente nunca tenha coragem de ir mais longe", categoria: "espaco" },
            { texto: "Que todo mundo acabe pensando igual", categoria: "criatividade" }
        ]
    }
];

const textosPerfil = {
    tecnologia: { titulo: "🧩 Você é o ARQUITETO DE SISTEMAS", desc: "Você não vê bagunça, você vê padrão. Enquanto outros se perdem no problema, você já está desmontando e remontando de um jeito melhor. Seu futuro é criar o que ainda não tem manual." },
    ciencia: { titulo: "🔍 Você é o DETETIVE DO INVISÍVEL", desc: "Você repara no que todo mundo ignora. Uma manchinha, um detalhe, um 'por que' que ninguém fez. Você não aceita resposta fácil. Seu futuro é descobrir o que está escondido." },
    ambiente: { titulo: "🌿 Você é o TRADUTOR DA TERRA", desc: "Você sente quando algo está fora de equilíbrio. Não é só sobre planta ou bicho, é sobre conexão. Você entende que nada existe sozinho. Seu futuro é reconectar o que foi separado." },
    espaco: { titulo: "🌌 Você é o CARTÓGRAFO DO IMPOSSÍVEL", desc: "Sua cabeça não cabe aqui. Você precisa de perguntas maiores que as respostas. Enquanto o pessoal discute o agora, você já está morando no 'e se'. Seu futuro é ir onde ninguém foi." },
    criatividade: { titulo: "🎭 Você é o ALQUIMISTA DE IDEIAS", desc: "Você transforma nada em algo. Um erro vira piada, uma piada vira projeto, um projeto vira mundo novo. Você não cria coisas, você cria jeitos de ver. Seu futuro é inventar futuros." }
};

let perguntaAtual = 0;
let pontuacaoCategorias = { tecnologia:0, ciencia:0, ambiente:0, espaco:0, criatividade:0 };
let categoriaVencedora = "";

function carregarPergunta() {
    const p = perguntasVocacionais[perguntaAtual];
    document.getElementById("progresso").textContent = `Pergunta ${perguntaAtual+1} de ${perguntasVocacionais.length}`;
    document.getElementById("barra-quiz").style.width = `${((perguntaAtual+1)/perguntasVocacionais.length)*100}%`;
    document.getElementById("pergunta").textContent = p.pergunta;
    document.getElementById("respostas").innerHTML = p.respostas.map(r => `<button class="resposta" onclick="responderVocacional('${r.categoria}')">${r.texto}</button>`).join("");
}

function responderVocacional(categoria) {
    pontuacaoCategorias[categoria]++;
    perguntaAtual++;
    if (perguntaAtual < perguntasVocacionais.length) { carregarPergunta(); } else { mostrarResultado(); }
}

function mostrarResultado() {
    document.getElementById("conteudo-quiz").style.display = "none";
    document.getElementById("final-quiz").style.display = "block";
    categoriaVencedora = Object.keys(pontuacaoCategorias).reduce((a,b) => pontuacaoCategorias[a] > pontuacaoCategorias[b]? a : b);
    document.getElementById("titulo-resultado").textContent = textosPerfil[categoriaVencedora].titulo;
    document.getElementById("texto-resultado").textContent = textosPerfil[categoriaVencedora].desc;
    const profs = profissoes.filter(prof => prof.categoria === categoriaVencedora).slice(0,3);
    document.getElementById("profissoes-resultado").innerHTML = profs.map(prof => `
        <div class="cartao"><div class="emoji">${prof.emoji}</div><h3>${prof.nome}</h3><p style="margin-top:8px; color:#a4b2c9; font-size:13px">${prof.descricao}</p><span class="etiqueta">${nomesCategorias[prof.categoria]}</span></div>
    `).join("") + `<p style="color:#a4b2c9; font-size:12px; margin-top:15px; grid-column:1/-1">Este resultado é uma inspiração, não uma regra. Você pode ser tudo o que quiser!</p>`;
}

function reiniciarQuiz() {
    perguntaAtual = 0;
    pontuacaoCategorias = { tecnologia:0, ciencia:0, ambiente:0, espaco:0, criatividade:0 };
    document.getElementById("conteudo-quiz").style.display = "block";
    document.getElementById("final-quiz").style.display = "none";
    carregarPergunta();
}

function filtrarPorVencedor() {
    if (categoriaVencedora) {
        document.getElementById("categoria").value = categoriaVencedora;
        mostrarProfissoes();
        document.getElementById("profissoes").scrollIntoView({behavior:'smooth'});
    }
}

carregarPergunta();