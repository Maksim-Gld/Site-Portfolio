const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Minsk, Belarus</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:maks.odsy@gmail.com">maks.odsy@gmail.com</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">LinkedIn</h2>
                        <p><a href="https://www.linkedin.com/in/maksim-osipau/">Maksim Osipau</a></p>
                    </li>
                </ul>
            </div>
        </main> 
     );
}
 
export default Contacts;