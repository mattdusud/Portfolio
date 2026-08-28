import './Footer.scss'
import { motion } from "framer-motion";

export default function Footer() {
    const footerItems1 = [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Framer Motion",
        "node.js",
        "express.js"
    ];

    const footerItems2 = [
        "C/C#",
        "Arduino",
        "Labview",
        "Python",
        "Fusion 360",
        "OnShape",
        "Office Suite"
    ];

    return (
        <footer className="footer">
            <div className="footer__conteneur">
                <p>Ma stack</p>
                <motion.div
                    className="footer__barre"
                    animate={{ x: ["100%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 60,
                        repeat: Infinity,
                    }}
                >
                    {footerItems1.map((item, index) => (
                        <span
                            key={`original-${index}`}
                            className="footer__item">
                            {item}
                        </span>
                    ))}
                    
                </motion.div>
                <motion.div
                    className="footer__barre2"
                    animate={{ x: ["-40%", "100%"] }}
                    //onMouseOver={}
                    transition={{
                        ease: "linear",
                        duration: 60,
                        repeat: Infinity,
                    }}
                >
                    {footerItems2.map((item, index) => (
                        <span
                            key={`original-${index}`}
                            className="footer__item">
                            {item}
                        </span>
                    ))}
                    
                </motion.div>
            </div>
        </footer>
    );
}