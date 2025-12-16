import {  useEffect, useRef, useState } from 'react'

import './About.css'
import aboutContent from '../data/about_content.json'

const About = () => {
    const sectionRef = useRef<HTMLElement | null>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const words = aboutContent.desc.split(" ")

    return (

        <section ref={sectionRef} className="about">
            <h3 className={`about-header ${visible ? 'reveal': ''}`}><span className={'about-header-text'}>About</span></h3>

            <p className={`about-desc ${visible ? 'reveal' : ''}`}>
                {words.map((word, index) => (
                    <span
                        key={index}
                        className="word"
                        style={{
                            animationDelay: visible ? `${index * 0.06}s` : '0s'
                        }}
                    >
                        {word}{' '}
                    </span>
                ))}
            </p>
        </section>
    )
}

export default About
