import img1 from '../img/biography.JPG';
import img2 from '../img/biography2.JPG';

export const BiographyPage = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Biography</h1>
        <ul className="biography-content__list">
          <li className="biography-content__list-item">
            <img src={img1} alt="biography photo" className="biography__image"/>
              <p>Текст на етапі написання :(</p>
          </li>
          <li className="biography-content__list-item">
            <p>Part 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eius, eum eveniet fugiat illo ipsum minima minus molestias necessitatibus nisi nulla officia officiis optio quibusdam, repellendus reprehenderit, sit soluta voluptatum.</p>
            <img src={img2} alt="biography photo" className="biography__image"/>
          </li>
        </ul>
      </div>
    </main>
  )
}