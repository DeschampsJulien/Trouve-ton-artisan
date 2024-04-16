import Error from "../assets/pictures/erreur404.jpg";

function Error404 () {
  return (
    <section className="container">
      <h2 className="text-center m-5">Erreur 404</h2>
      <img src={Error} width="220" alt="logo de la page d'erreur" className="error"/>
      <p className="text-center m-5">La page que vous recherchez est introuvable.</p>
    </section>
  );
}

export default Error404;