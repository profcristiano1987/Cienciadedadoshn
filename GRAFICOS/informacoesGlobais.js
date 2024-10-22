const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = 'Com uma população global de quase , os esportes têm uma presença marcante no cotidiano das pessoas.3 bilhões praticam esportes regularmente, dedicando em média 2 horas por semana para cuidar da saúde e melhorar seu bem-estar. Além disso, 4 bilhões de pessoas acompanham eventos esportivos, tornando o esporte uma paixão que une pessoas de todas as culturas e idades. Esses números mostram que o esporte é muito mais do que atividade física ou entretenimento; é um fenômeno global que conecta e inspira'

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}
vizualizarInformacoesGlobais()