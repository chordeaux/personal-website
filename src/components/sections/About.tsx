import FadeContent from "@/components/FadeContent"

export default function About() {
  return (
    <section id="about" className="pt-12 pb-16">
      <FadeContent blur={true} duration={1000} threshold={0.1}>
        <div>
          <p className="text-2xl font-semibold text-slate-100 leading-snug mb-6">
            Multicultural first-year engineering student in a dual-degree program at <b>CentraleSupélec and McGill
            University</b>, focused on software engineering, machine learning, and NLP.
          </p>
          <div className="space-y-4 text-base text-slate-400 leading-relaxed">
            <p>
              I work on full-stack development and AI applications. Currently building a WiFi support
              chatbot serving <b>2000+</b> users at <b>ViaRezo</b> and NLP-driven tools for language learning, and 
              building a location-based mobile marketplace for a niche community. My
              technical work spans <b>Python</b>, <b>Java</b>, web frameworks, and machine learning systems.
            </p>
            <p>
              Interested in AI products that improve communication and accessibility across languages.
              Open to connecting about <b>NLP</b>, developer tools, or scalable systems with real-world impact.
            </p>
            <p>
              My previous work includes building a community web forum with <b>Jakarta Servlets</b>, and designing 
              end-to-end model pipelines for <b>MNIST</b> classification and another for transformer translation.
            </p>
            <p>
              If I'm not building or studying, I'm grinding in the gym, obsessing over stationary, or learning languages to connect
              with global communities.
            </p>
          </div>
        </div>
      </FadeContent>
    </section>
  )
}
