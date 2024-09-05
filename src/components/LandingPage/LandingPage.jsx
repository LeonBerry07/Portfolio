import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Link } from "react-scroll";
import'./LandingPage.css'

const url12 = 'Profile.jpg';
// const url13 = 'distopya.jpg';
const gmail = 'letter.png';
const copy = 'portap.png';
const lin = '174857.png';
const dealup = 'https://start-bussines.vercel.app/';
const deal = 'lod.jpg';
const github = 'Github.png'
const sunset = 'Reach.jpg';
const js = 'js.png';
const ts = 'typescript.png';
const react = 'logo512.png';
const node = 'node-js.png';
const express = 'express-js.png';
const postgre = 'postgre.png';
const sequelize = 'sequelize.png';
const git = 'git.png';
const html = 'html-5.png';
const css = 'css-3.png';
{/* <img className="bru" src={url13} alt="Food's Lyon"/> */}
{/* <img className="bru" src={url12} alt="Food's Lyon"/> */}

class LandingPage extends React.Component{

    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
    }

    copiarEmailAlPortapapeles = () => {
        const emailText = this.emailRef.current.innerText;

        // Crear un campo de texto oculto
        const textArea = document.createElement('textarea');
        textArea.value = emailText;

        // Agregar el campo de texto oculto al documento
        document.body.appendChild(textArea);

        // Seleccionar el texto en el campo de texto
        textArea.select();

        // Intentar copiar el texto al portapapeles
        try {
            document.execCommand('copy');
            alert('¡Dirección de correo copiada al portapapeles!');
        } catch (err) {
            console.error('Error al copiar al portapapeles: ', err);
        }

        // Eliminar el campo de texto oculto
        document.body.removeChild(textArea);
    };

    render() {
        return(
            <div className="landingpage">
            <body className="body">


                
            
            <header className="top">

                <p>
                <Link to="about" smooth={true} duration={500}>About</Link>
                </p>

                <p>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </p>

                <p>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </p>

                <p>
                <Link to="resume" smooth={true} duration={500}>Resume</Link>
                </p>

                <p>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </p>

            </header>
            
            <div class="container">
                <div class='bubbles'>
                    <span style={{ '--i' : 23 }}></span>
                    <span style={{ '--i' : 12 }}></span>
                    <span style={{ '--i' : 17 }}></span>
                    <span style={{ '--i' : 29 }}></span>
                    <span style={{ '--i' : 23 }}></span>
                    <span style={{ '--i' : 24 }}></span>
                    <span style={{ '--i' : 25 }}></span>
                    <span style={{ '--i' : 21 }}></span>
                    <span style={{ '--i' : 14 }}></span>
                    <span style={{ '--i' : 29 }}></span>
                    <span style={{ '--i' : 18 }}></span>
                    <span style={{ '--i' : 27 }}></span>
                    <span style={{ '--i' : 11 }}></span>
                    <span style={{ '--i' : 21 }}></span>
                    <span style={{ '--i' : 15 }}></span>
                    <span style={{ '--i' : 27 }}></span>
                    <span style={{ '--i' : 13 }}></span>
                    <span style={{ '--i' : 23 }}></span>
                    <span style={{ '--i' : 27 }}></span>
                    <span style={{ '--i' : 17 }}></span>
                    <span style={{ '--i' : 15 }}></span>
                    <span style={{ '--i' : 22 }}></span>
                    <span style={{ '--i' : 20 }}></span>
                    <span style={{ '--i' : 17 }}></span>
                    <span style={{ '--i' : 19 }}></span>
                    <span style={{ '--i' : 14 }}></span>
                    <span style={{ '--i' : 21 }}></span>
                    <span style={{ '--i' : 12 }}></span>
                    <span style={{ '--i' : 27 }}></span>
                    <span style={{ '--i' : 14 }}></span>
                    <span style={{ '--i' : 21 }}></span>
                    <span style={{ '--i' : 13 }}></span>
                    <span style={{ '--i' : 11 }}></span>
                    <span style={{ '--i' : 29 }}></span>
                    <span style={{ '--i' : 17 }}></span>
                    <span style={{ '--i' : 16 }}></span>
                    <span style={{ '--i' : 20 }}></span>
                    <span style={{ '--i' : 30 }}></span>
                    <span style={{ '--i' : 18 }}></span>
                    <span style={{ '--i' : 19 }}></span>
                    <span style={{ '--i' : 21 }}></span>
                    <span style={{ '--i' : 13 }}></span>
                    <span style={{ '--i' : 25 }}></span>
                    <span style={{ '--i' : 17 }}></span>
                </div>


            
        

            <div className="proof">
                <div className="nombre">
                <p className="bruno">Bruno</p>
                <p className="mendi">Mendiberry</p>
                </div>
                <div className="oficio">
                <p className="full">Web</p>
                <p className="dev">Developer</p>
                </div>
            </div>
            

            <div className="tim">

            <div className="image"> 
            <img className="bru" src={url12} alt="Food's Lyon"/>
            </div>

            </div>




            <section id="about" className="aboutme">About Me</section>

            <div className="about">

            {/* <p>
                English
            </p>     */}

            <p>
                Hi, i am Bruno Leonel Mendiberry 👋
            </p>

            <p className="text">
            I work as a Fullstack Developer, with a background in electronics and sound engineering, I also have knowledge of video editing and photography.
            </p>

            <p>    
                I am a lifelong lover of technology and computing, both from the hardware and software side.
            </p>

            <p>
                Currently I develop projects that allow me to grow as a programmer, both from the technical and creative side. These projects are related to my personal tastes and ideas that I think need to be implemented in society.
            </p>
            </div>

            <div className="about">

            {/* <p>
                Español
            </p>     */}

            <p>
                Hola, soy Bruno Leonel Mendiberry 👋
            </p>

            <p className="text">
            Me desempeño como Desarrollador Fullstack, con background en electrónica e ingenieria en sonido, también tengo conocimientos de edición de video y fotografía.
            </p>

            <p>    
                Soy un amante de la tecnología e informática desde toda la vida, tanto desde el apartado del hardware como el apartado del software.
            </p>

            <p>
                Actualmente desarrollo proyectos que me permitan crecer como programador, tanto desde el lado técnico como creativo. Dichos proyectos están relacionados a mis gustos personales e ideas que creo hacen falta implementar en la sociedad.
            </p>
            </div>




            <section id="skills" className="title">Skills</section>
            
            <div className="skills">

            <div className="skills1">

            {/* <div className="skills1"> */}
            <img className='skills-icon' src={js}/>
            <p className="name-skills">
            Javascript
            </p>
            {/* </div> */}

            <img className='skills-icon' src={ts}/> 
            <p>
            Typescript
            </p>

            <img className='skills-icon' src={react}/> 
            <p>
            React.js
            </p>

            <img className='skills-icon' src={node}/> 
            <p>
            Node.js
            </p>

            <img className='skills-icon' src={express}/>
            <p>
            Express.js
            </p>
            
            </div>

            <div className="skills2">

            <img className='skills-icon' src={postgre}/>     
            <p>
            PostgreSQL
            </p>

            <img className='skills-icon' src={sequelize}/>
            <p>
            Sequelize
            </p>

            <img className='skills-icon' src={git}/> 
            <p>
            GIT
            </p>
            
            <img className='skills-icon' src={html}/> 
            <p>
            HTML
            </p>
            
            <img className='skills-icon' src={css}/> 
            <p>
            CSS
            </p>

            </div>

            {/* Adobe AfterEffects, Photoshop */}
            </div>







            <section id="projects" className="title">Projects</section>

            <div className="boxes">
                

            <div className="box">
                <img className="project" src={react} alt="Food's Lyon"/>
                <div className='box2'>
                <RouterLink to='' target="_blank">Instrumentals Store (Soon)</RouterLink>
                </div>
            </div>

            <div className="box">
                <img className="project" src={react} alt="Food's Lyon"/>
                <div className='box2'>
                <RouterLink to='' target="_blank">Videogames (Soon)</RouterLink>
                </div>
            </div>

            <div className="box">
                <img className="project" src={deal} alt="Food's Lyon"/>
                <div className='box2'>
                <RouterLink to='https://start-bussines.vercel.app/' target="_blank">Deal Up!</RouterLink>
                </div>
            </div>
            
            </div>
            

            <section id="resume" className="title">Resume</section>
            <a href="/Resume_BrunoMendiberry_DevFullstack.pdf" download="Resume_BrunoMendiberry_DevFullstack.pdf">
            <button className='email'>Download PDF</button>
            </a>

            <section id="contact" className="title">Contact</section>

            <div className="contact">
            <img className="lin" src={gmail} alt="Food's Lyon"/>

            <p ref={this.emailRef}>
                leonberry07@gmail.com
            </p>

            <button className="email" onClick={this.copiarEmailAlPortapapeles}>
                {/* <img className="lin" src={copy} alt="Food's Lyon"/> */}
                Copy E-mail
            </button>

            </div>

            <div className="contact">
            <RouterLink to='https://www.linkedin.com/in/bruno-leonel-a40110260/' target="_blank">
                <img className="lin" src={lin} alt="Food's Lyon"/>
            </RouterLink>
            
            </div>

            <div className="contact">
            <RouterLink to='https://github.com/LeonBerry07' target="_blank">
                <img className="lin" src={github} alt="Food's Lyon"/>
            </RouterLink>
            
            </div>


            </div>





            <footer className="foot">
                <p>
                <Link to="about" smooth={true} duration={500}>About</Link>
                </p>

                <p>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
                </p>

                <p>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </p>

                <p>
                <Link to="resume" smooth={true} duration={500}>Resume</Link>
                </p>

                <p>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </p>
                <p>&copy;Bruno Leonel Mendiberry 2024</p>
            </footer>




            </body>    
            </div>
        )
    }

}

export default LandingPage;