import BlurText from "@/components/BlurText"
import FadeContent from "@/components/FadeContent"
import profilePhoto from "@/assets/unnamed.jpg"

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <BlurText
        text="About Me"
        className="text-4xl md:text-5xl font-bold mb-12 justify-center"
        delay={150}
        animateBy="words"
        direction="top"
        threshold={0.2}
        stepDuration={0.4}
      />

      <FadeContent blur={true} duration={1200} ease="power2.out" threshold={0.15}>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden">
              <img
                src={profilePhoto}
                alt="Dimas Deffieux"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
            <p>
            I'm a first-year engineering student in a dual-degree program at 
            CentraleSupélec and McGill University, focused on software engineering, 
            machine learning, and NLP.

            </p>

            <p>
            I work on full-stack development and AI applications, currently 
            contributing to a WiFi support chatbot serving 2000+ users at ViaRezo 
            and building NLP-driven tools for language learning. My technical work 
            spans Python, Java, web frameworks, and machine learning systems.
            </p>

            <p>
              I'm interested in AI products that improve communication and accessibility 
              across languages. Open to connecting about NLP, developer tools, or scalable 
              systems with real-world impact.
            </p>
            
          </div>
        </div>
      </FadeContent>
    </section>
  )
}
