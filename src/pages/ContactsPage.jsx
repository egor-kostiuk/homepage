export const ContactsPage = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>
        <ul className="content__list">
          <li className="content__list-item">
            <h2 className="title-2">Location</h2>
            <p>Ukraine, Poltava</p>
          </li>
          <li className="content__list-item">
            <h2 className="title-2">Phone / Telegram</h2>
            <p className="contacts">
              <a href="tel:+380953712069">+380(95)371-20-69</a>
            </p>
          </li>
          <li className="content__list-item">
            <h2 className="title-2">Email</h2>
            <p className="contacts">
              <a href="mailto:kostukegor729@gmail.com">kostukegor729@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  )
}