
"use client";
import { motion } from "motion/react";
export default function About(){
    return(
        <section id="about">


            <div>
                <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-blue-700"></span><h2 className="text-white">01 SOBRE MÍ</h2>
                </div>
                    <motion.h2
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className="text-4xl font-bold py-4 text-blue-600"
                    >
                    {"NO SOLO ESCRIBO CÓDIGO.".split("").map((char, i) => (
                        <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.30, delay: i * 0.10 }}
                        >
                        {char}
                        </motion.span>
                    ))}
                    </motion.h2>
                {[
                    <>Soy un <strong className="text-white">Full Stack Developer</strong> con más de{" "}<strong className="text-white">2 años</strong> transformando ideas en productos digitales que generan impacto real. Mi enfoque combina{" "}<strong className="text-white">ingeniería sólida</strong> con pensamiento estratégico de negocio.</>,
                    <>Desde aplicaciones web complejas con{" "}<strong className="text-white">Next.js y Laravel</strong> hasta tiendas e-commerce de alto volumen en{" "}<strong className="text-white">Shopify o WooCommerce</strong>, entrego soluciones diseñadas para{" "}<strong className="text-white">vender, escalar y retener</strong>.</>,
                    <>Cada línea de código tiene un propósito. Cada pixel, una razón. Y cada proyecto, un{" "}<strong className="text-white">cliente satisfecho que vuelve</strong> a contar conmigo.</>,
                ].map((text, i) => (
                    <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="text-neutral-400 mb-4"
                    >
                    {text}
                    </motion.p>
                ))}
            </div>

            <div className="about-data pt-5">
                <ul className="about-list flex flex-col gap-2">
                    <li className="flex justify-between text-lg"><span className="text-white">Ubicación</span><span className="text-gray-400">España · Remoto</span></li>
                    <span className="w-full h-[0.5px] bg-gray-600"></span>
                    <span className="w-full h-[0.5px] bg-gray-600"></span>
                    
                    <li className="flex justify-between text-lg"><span className="text-white">Especialidad</span><span className="text-gray-400">Full Stack & E-commerce</span></li>
                    <span className="w-full h-[0.5px] bg-gray-600"></span>
                    <span className="w-full h-[0.5px] bg-gray-600"></span>
                    
                    <li className="flex justify-between text-lg"><span className="text-white">Stack principal</span><span className="text-gray-400">Next.js · Laravel · PHP</span></li>
                    <span className="w-full h-[0.5px] bg-gray-600"></span>
                    <span className="w-full h-[0.5px] bg-gray-600"></span>
                    
                    <li className="flex justify-between text-lg"><span className="text-white">CMS / E-comm</span><span className="text-gray-400">Shopify · WooCommerce · PrestaShop</span></li>
                    <span className="w-full h-[0.5px] bg-gray-600"></span>
                    <span className="w-full h-[0.5px] bg-gray-600"></span>
                    
                    <li className="flex justify-between text-lg"><span className="text-white">Marketing</span><span className="text-gray-400">SEO · SEM · Google Ads</span></li>
                    <span className="w-full h-[0.5px] bg-gray-600"></span>
                    <span className="w-full h-[0.5px] bg-gray-600"></span>
                    
                    <li className="flex justify-between text-lg"><span className="text-white">Disponibilidad</span><span className="text-gray-400">Proyectos freelance · Tiempo completo</span></li>
                    <span className="w-full h-[0.5px] bg-gray-600"></span>
                
                </ul>
            </div>


        </section>
    )
}