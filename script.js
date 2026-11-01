(function(){
  document.documentElement.classList.add('js');
  var FAQS=[
    {cat:'entrar',question:'Qual é o IP e a porta do servidor?',answer:'O endereço é <code>dusvale.com</code> e a porta é <code>1952</code>. Se o seu Minecraft pedir tudo junto, use <code>dusvale.com:1952</code>.'},
    {cat:'entrar',question:'Qual versão do Minecraft eu preciso?',answer:'Do Java Edition 1.21.1 até as versões mais recentes. Se você estiver em uma versão mais antiga, atualize pelo launcher.'},
    {cat:'entrar',question:'Como eu adiciono o servidor?',answer:'No Minecraft, abra Multijogador, clique em Adicionar servidor, coloque o nome Duskvale e o endereço <code>dusvale.com:1952</code>, e salve.'},
    {cat:'entrar',question:'Dá para jogar no Bedrock, celular ou console?',answer:'No momento o servidor é para Minecraft Java Edition. Se isso mudar, avisamos no Discord.'},
    {cat:'entrar',question:'Preciso de whitelist ou cadastro?',answer:'Não é necessário cadastro para entrar. Basta ter uma conta do Minecraft Java e conectar no IP.'},
    {cat:'jogar',question:'O servidor é só survival?',answer:'Sim. O foco da Duskvale é survival: você começa do zero, coleta recursos, constrói e progride no seu ritmo.'},
    {cat:'jogar',question:'Posso proteger minha construção?',answer:'Sim. Você pode proteger seu terreno para que outros jogadores não mexam no que é seu. Os comandos de proteção estão explicados no Discord.'},
    {cat:'jogar',question:'Posso jogar com meus amigos?',answer:'Claro. Vocês podem construir juntos, explorar juntos e dividir terrenos, quantas pessoas quiserem.'},
    {cat:'jogar',question:'Existe economia ou loja entre jogadores?',answer:'Consulte a equipe no Discord para ver os sistemas ativos no momento. Eles podem mudar conforme o servidor evolui.'},
    {cat:'regras',question:'Quais são as regras principais?',answer:'Respeito acima de tudo: sem grief, sem roubo, sem hacks ou clientes com vantagem injusta e sem ofensas. As regras completas ficam no Discord.'},
    {cat:'regras',question:'Fui banido ou tive minha casa mexida. E agora?',answer:'Fale com a equipe pelo Discord, com seu nick e o que aconteceu. Cada caso é analisado com calma.'},
    {cat:'regras',question:'Onde peço ajuda ou tiro outras dúvidas?',answer:'No Discord da Duskvale, a equipe e a comunidade respondem por lá.'},
    {cat:'regras',question:'O servidor tem vantagens pagas?',answer:'A Duskvale não é pay-to-win: ninguém ganha vantagem injusta para progredir no survival.'}
  ];
  var faqList=document.getElementById('list');
  if(faqList){
    FAQS.forEach(function(item){
      var details=document.createElement('details');
      details.dataset.cat=item.cat;
      var summary=document.createElement('summary');summary.textContent=item.question;
      var answer=document.createElement('p');answer.innerHTML=item.answer;
      details.appendChild(summary);details.appendChild(answer);faqList.appendChild(details);
    });
  }
  document.addEventListener('click',function(e){
    var b=e.target.closest('[data-c]');
    if(b){
      var t=b.dataset.c,old=b.textContent;
      var ok=function(){b.textContent='Copiado!';setTimeout(function(){b.textContent=old},1500)};
      try{navigator.clipboard.writeText(t).then(ok,ok)}catch(err){ok()}
    }
    var c=e.target.closest('[data-cat]');
    if(c&&c.tagName==='BUTTON'){
      document.querySelectorAll('.cats button').forEach(function(x){x.classList.toggle('on',x===c)});
      document.querySelectorAll('#list details').forEach(function(d){d.hidden=!(c.dataset.cat==='all'||d.dataset.cat===c.dataset.cat)});
    }
  });
  var g=document.querySelector('.grid');
  if(g){
    if('IntersectionObserver' in window){
      var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){g.classList.add('in');io.disconnect()}})},{threshold:.2});
      io.observe(g);
    }else{g.classList.add('in')}
  }
  // Equipe: o primeiro cargo define a seção; os outros aparecem abaixo do nome.
  // Ex.: {nick:'fulano', cargos:['dono','dev']} aparece em Donos com "Desenvolvedor" embaixo.
  var EQUIPE=[
    {nick:'.Ponynhah7760',cargos:['dono']},
    {nick:'pwdro09',cargos:['dono']},
    {nick:'imperadorZM',cargos:['staff']}
  ];
  var NOMES={dono:'Dono',staff:'Staff',dev:'Desenvolvedor'};
  var team=document.getElementById('team');
  if(team){
    team.querySelectorAll('.tgrid').forEach(function(grid){
      var role=grid.dataset.role;
      EQUIPE.filter(function(p){return p.cargos[0]===role}).forEach(function(p,i){
        var el=document.createElement('div');
        el.className='member';
        el.style.animationDelay=(i*.08)+'s';
        var img=document.createElement('img');
        img.src='https://minotar.net/avatar/'+encodeURIComponent(p.nick)+'/96';
        img.alt='Cabeça do Minecraft de '+p.nick;img.width=56;img.height=56;img.loading='lazy';
        img.onerror=function(){img.onerror=null;img.src='https://minotar.net/avatar/MHF_Steve/96'};
        var info=document.createElement('div');
        var nick=document.createElement('strong');nick.textContent=p.nick;
        var roles=document.createElement('div');roles.className='roles';
        p.cargos.forEach(function(c,j){
          var t=document.createElement('span');
          t.className='role'+(j===0?' main':'');
          t.textContent=NOMES[c]||c;
          roles.appendChild(t);
        });
        info.appendChild(nick);info.appendChild(roles);
        el.appendChild(img);el.appendChild(info);
        grid.appendChild(el);
      });
      if(!grid.children.length){
        var e=document.createElement('p');e.className='tempty';e.textContent='Em breve.';grid.appendChild(e);
      }
    });
  }
})();
