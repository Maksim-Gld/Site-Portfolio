import Header from "./../components/header/Header";

const Home = () => {
    return (
        <>
        <Header></Header>

        <main className="section">
            <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, React, Angular, HTML, CSS, SASS, SCSS/LESS, Webpack</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Other Skills</h2>
                            <p>PHP, Strapi, Git, Hugo/WordPress/Bitrix, Adobe Photoshop/Figma</p>
                        </li>
                    </ul>

            </div>
        </main>
        </>
    );
}
     
export default Home;