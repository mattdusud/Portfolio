import './Header.scss'

export default function Header() {

    return (
        <header>
            <div className='nosecone'>
                <img src='src/images/profilpic.webp'></img>
                <h1>Matthieu Giardina</h1>
                <h2>FrontEnd Developer</h2>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href='https://x.com'><i class="fa-brands fa-x-twitter"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href='mailto:matt@multimatt.fr'><i class="fa-regular fa-envelope"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href='https://linkedin.com'><i class="fa-brands fa-square-linkedin"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href='https://github.com/mattdusud'><i class="fa-brands fa-square-github"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href='https://instagram.com'><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
                <h2>PACA - France</h2>
            </div>
        </header>
    )
}