import './Footer.scss'
import { motion } from "framer-motion";

export default function Footer() {
    const footerItems = [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Framer Motion",
        "node.js",
        "express.js"
    ];

    return (
        <footer className="footer">
            <div className="footer__conteneur">
                <motion.div
                    className="footer__barre"
                    animate={{ x: ["100%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity,
                    }}
                >
                    {footerItems.map((item, index) => (
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
                    transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity,
                    }}
                >
                    {footerItems.map((item, index) => (
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