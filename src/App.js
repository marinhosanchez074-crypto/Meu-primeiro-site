import { useEffect, useRef, useState } from 'react';
import foto1 from './foto1.jpg.jpg';
import foto2 from './foto2.jpg.jpg';
import foto3 from './foto3.jpg.jpg';
import foto4 from './foto4.jpg.jpg';
import foto5 from './foto5.jpg.jpg';
import foto6 from './foto6.jpg.jpg';

export default function App() {
  const senhaCorreta = '15122023';
  const relationshipStart = useRef(new Date('2023-12-15T00:00:00')).current;

  const [senha, setSenha] = useState('');
  const [entrou, setEntrou] = useState(false);
  const [erro, setErro] = useState('');
  const [totalDays, setTotalDays] = useState(0);
  const [showLetter, setShowLetter] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    const updateDays = () => {
      const now = new Date();
      const diffMs = now - relationshipStart;
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      setTotalDays(days);
    };

    updateDays();
    const interval = setInterval(updateDays, 60000);

    return () => clearInterval(interval);
  }, [relationshipStart]);

  const photos = [
    {
      src: foto1,
      caption:
        'Quem diria que bastava uma desisão para ser feliz. Em cada dia, em cada passo, acredito que sou o homen mais sortudo do mundo',
    },
    {
      src: foto2,
      caption: 'Seu jeitinho fofo que eu amo 🐱 Sempre foi uma razão do meu sorriso',
    },
    {
      src: foto3,
      caption:
        "Um pensamento muda tudo, mas como eu quero que você sempre pense em mim então pensa nisso 'eu te amo, eu te amo, eu te amo....' 🦈",
    },
    {
      src: foto4,
      caption:
        'Mesmo longe, sempre com você no coração. Os ventos sussuram seu nome, e a brisa me lembra do quanto você gosta do frio e eu odeiooooooo ',
    },
    {
      src: foto5,
      caption: 'Minha branca, linda como sempre 💖',
    },
    {
      src: foto6,
      caption:
        'Nossas mãos, nossa conexão. Duas vidas em uma só, dois numeros impares se tornando pares. É a matemática fazer o que kkkk 🤝',
    },
  ];

  const verificarSenha = async () => {
    if (senha === senhaCorreta) {
      setEntrou(true);
      setErro('');

      setTimeout(async () => {
        try {
          if (audioRef.current) {
            await audioRef.current.play();
            setMusicPlaying(true);
          }
        } catch (error) {
          console.log('Autoplay bloqueado pelo navegador.');
        }
      }, 200);
    } else {
      setErro('Senha errada 💔');
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (musicPlaying) {
        audioRef.current.pause();
        setMusicPlaying(false);
      } else {
        await audioRef.current.play();
        setMusicPlaying(true);
      }
    } catch (error) {
      console.log('Não foi possível tocar a música.');
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(to bottom, #ffe4ec, #fff)',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '30px 20px',
        color: '#333',
      }}
    >
      <audio ref={audioRef} loop preload="auto">
        <source src="/musica.mp3.mp3" type="audio/mpeg" />
        Seu navegador não suporta áudio.
      </audio>

      {!entrou ? (
        <div
          style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              background: 'rgba(255,255,255,0.85)',
              padding: '30px',
              borderRadius: '20px',
              maxWidth: '420px',
              width: '100%',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            }}
          >
            <h1 style={{ color: '#d81b60', marginBottom: '12px' }}>
              Uma surpresa pra você 💖
            </h1>

            <p style={{ marginBottom: '18px', lineHeight: '1.6' }}>
              Esse cantinho foi feito com carinho.
              <br />
              Só entra quem tem a nossa senha secreta ✨
            </p>

            <input
              type="password"
              placeholder="Digite a senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                border: '1px solid #ddd',
                marginBottom: '12px',
                fontSize: '16px',
                outline: 'none',
              }}
            />

            <button
              onClick={verificarSenha}
              style={{
                width: '100%',
                padding: '14px',
                border: 'none',
                borderRadius: '12px',
                background: '#e91e63',
                color: '#fff',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Entrar
            </button>

            {erro && (
              <p style={{ color: '#d81b60', marginTop: '12px', fontWeight: 'bold' }}>
                {erro}
              </p>
            )}

            <p style={{ marginTop: '14px', fontSize: '14px', color: '#777' }}>
              Dica: pode ser uma data especial 👀
            </p>
          </div>
        </div>
      ) : (
        <>
          <h1 style={{ fontSize: '42px', marginBottom: '10px' }}>
            Meu primeiro Site que prometi 💖
          </h1>

          <p style={{ fontSize: '18px', marginBottom: '10px' }}>
            Desde 15/12/2023
          </p>

          <h2 style={{ color: '#e91e63', marginBottom: '20px' }}>
            {totalDays} dias juntos 💘
          </h2>

          <div style={{ marginBottom: '24px' }}>
            <button
              onClick={toggleMusic}
              style={{
                padding: '12px 20px',
                border: 'none',
                borderRadius: '999px',
                background: '#d81b60',
                color: '#fff',
                fontSize: '15px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginRight: '10px',
              }}
            >
              {musicPlaying ? 'Pausar música 🎵' : 'Tocar música 🎶'}
            </button>

            <button
              onClick={() => setShowLetter(!showLetter)}
              style={{
                padding: '12px 20px',
                border: 'none',
                borderRadius: '999px',
                background: '#f8a5c2',
                color: '#fff',
                fontSize: '15px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              {showLetter ? 'Fechar cartinha 💌' : 'Abrir cartinha 💌'}
            </button>
          </div>

          {showLetter && (
            <div
              style={{
                maxWidth: '760px',
                margin: '0 auto 30px',
                background: '#fff8fb',
                borderRadius: '20px',
                padding: '25px',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                lineHeight: '1.7',
                fontSize: '18px',
              }}
            >
              <p>
                Minha branca,
                <br />
                <br />
                Eu nem sei direito por onde começar, porque quando penso em você vem tanta coisa boa ao mesmo tempo que fica até difícil colocar em palavras.

Você apareceu na minha vida e, sem fazer esforço nenhum, mudou tudo. Os meus dias ficaram mais cheiso de vida, sabe?, os meus sorrisos mais sinceros, e até as coisas simples começaram a ter mais sentido. É como se, de alguma forma, tudo tivesse se encaixado quando você chegou.

Eu amo o seu jeitinho, amo a forma como você me faz sentir, amo você um pouquinho a mais a cada dia kk, minha flor de tangerina. Estar com você é, sem dúvida, uma das melhores coisas que já me aconteceram.

Nem sempre eu vou conseguir demonstrar tudo o que eu sinto, mas pode ter certeza aqui dentro é tudo real. Eu te admiro, te respeito e, acima de tudo, te amo muito.

Obrigado por existir na minha vida, por me fazer feliz e por ser exatamente quem você é.

              </p>

              <p>
                Com todo meu amor,
                <br />
                <strong>Marinho ❤️</strong>
              </p>
            </div>
          )}

          <p
            style={{
              maxWidth: '700px',
              margin: '0 auto 30px',
              fontSize: '18px',
              lineHeight: '1.6',
            }}
          >
            Minha branca,
            <br />
            fiz esse cantinho só nosso pra te lembrar o quanto você é especial pra mim.
            Cada foto, cada detalhe e cada palavra aqui carregam um pedacinho do que eu
            sinto por você. Obrigado por fazer meus dias mais felizes. O site é seu,
            pode sempre entrar e olhar nossas coisa, te amo muito minha linda gatinha
            branca.
            <br />
            <br />
            Com amor, do seu querido namorado 'kkkkkkkkk' Marinho❤️
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            {photos.map((photo, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: '18px',
                  padding: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  style={{
                    width: '100%',
                    height: '320px',
                    objectFit: 'cover',
                    borderRadius: '14px',
                  }}
                />
                <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{photo.caption}</p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '35px', fontSize: '20px', color: '#d81b60' }}>
            Eu te amo ❤️
          </p>
        </>
      )}
    </div>
  );
}