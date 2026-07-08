import "./VidTest.css";

function VidTest() {
  return (
    <section className="vid-test">
      <div className="vid-container">
        <h2 className="vid-title">Teste de Vídeo</h2>

        <p className="vid-description">Player incorporado para testes.</p>

        <div className="vid-player">
          <iframe
            title="Video Test"
            src="https://redecanais.win/player3/server.php?server=RCFServer2&subfolder=ondemand&vid=PRJTOINRNTO"
            frameBorder="0"
            scrolling="no"
            allow="encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
      <div>
        <video controls width="100%">
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Seu navegador não suporta vídeo HTML5.
        </video>
      </div>

      <div>
        <iframe
          title="Big Buck Bunny"
          src="https://www.youtube.com/embed/aqz-KE-bpKQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default VidTest;
