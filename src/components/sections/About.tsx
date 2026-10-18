import FadeContent from "@/components/FadeContent"

export default function About() {
  return (
    <section id="about" className="pt-12 pb-16">
      <FadeContent blur={true} duration={1000} threshold={0.1}>
        <div>
          <p className="text-2xl font-semibold text-ink leading-snug mb-6">
            Multicultural second-year engineering student in a dual-degree program at <b>CentraleSupélec and McGill
            University</b>, focused on software engineering, machine learning, and NLP.
          </p>
          <div className="space-y-4 text-base text-ash-700 leading-relaxed">
            <p>
              I am interested in learning as much as I can and eventually starting a career in software development with significant
              interested in graphics engineering and multilingual NLP. Up until now, my work has consisted of <b>machine learning systems</b>, 
              <b> java</b> web and software development, and some small database work.
            </p>
            <p>
              Interested in AI products that improve communication and accessibility across languages, and learning about graphics engineering.
              Open to connecting about <b>NLP</b>, software development as a whole, and anything else which is interesting
            </p>
            <p>
              My recent work includes training a <b>transformer</b> translation model end-to-end. 
              I'm currently working on building a neural network from scratch in C++, 
              and besides that working on some side projects relating to integrating 
              technology with language learning through OCR, WSD, LLM integration, etc.
            </p>
            <p>
              
              When I'm not doing any of those, I'm in the gym, obsessing over stationary, 
              learning languages, or looking for another mechanical keyboard to buy.
            </p>
          </div>
        </div>
      </FadeContent>
    </section>
  )
}
