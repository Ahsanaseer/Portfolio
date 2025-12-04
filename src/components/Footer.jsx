import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, send, linkedin } from '../assets';
import { fadeIn } from '../utils/motion';

const Footer = () => {
    return (
        <footer className={`w-full bg-black py-10`}>
            <motion.div
                variants={fadeIn("up", "spring", 0.5, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10`}
            >

                {/* Brand Section */}
                <div className="flex flex-col gap-4">
                    <p className="text-white text-[24px] font-beckman font-bold ">
                        M AHSAN NASEER
                    </p>
                    <p className="text-secondary text-[14px] max-w-[300px]">
                        Crafted in React, polished with Tailwind CSS by Ahsan Naseer.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-white text-[18px] font-bold font-beckman">Quick Links</h3>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#about" className="text-secondary hover:text-white transition-colors">About</a></li>
                        <li><a href="#projects" className="text-secondary hover:text-white transition-colors">Projects</a></li>
                        <li><a href="#contact" className="text-secondary hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-white text-[18px] font-bold font-beckman">Connect</h3>
                    <div className="flex gap-4">
                        <a href="https://github.com/Ahsanaseer" target="_blank" rel="noopener noreferrer"
                            className="w-10 h-10 bg-tertiary rounded-full flex justify-center items-center cursor-pointer hover:bg-white transition-colors group">
                            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain group-hover:invert" />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-ahsan-naseer-67a862321/" target="_blank" rel="noopener noreferrer"
                            className="w-10 h-10 bg-tertiary rounded-full flex justify-center items-center cursor-pointer hover:bg-white transition-colors group">
                            <img src={linkedin} alt="linkedin" className="w-1/2 h-1/2 object-contain group-hover:invert" />
                        </a>
                        <a href="mailto:ahsanaseer058@gmail.com"
                            className="w-10 h-10 bg-tertiary rounded-full flex justify-center items-center cursor-pointer hover:bg-white transition-colors group">
                            <img src={send} alt="email" className="w-1/2 h-1/2 object-contain group-hover:invert" />
                        </a>
                    </div>
                </div>
            </motion.div>

            <div className="w-full h-[1px] bg-tertiary my-8 max-w-7xl mx-auto" />

            <motion.div
                variants={fadeIn("up", "spring", 0.75, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between items-center`}
            >
                <p className="text-secondary text-[14px] font-poppins">
                    &copy; {new Date().getFullYear()} Ahsan Naseer. All Rights Reserved.
                </p>
            </motion.div>
        </footer>
    );
};

export default Footer;
