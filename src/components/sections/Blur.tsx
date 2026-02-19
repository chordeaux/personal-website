// Component added by Ansh - github.com/ansh-dhanani

import GradualBlur from '@/components/GradualBlur';


export default function Blur(){
    return(
        <section style={{position: 'relative',height: 500,overflow: 'hidden'}}>

        <GradualBlur
            target="parent"
            position="bottom"
            height="20rem"
            strength={2}
            divCount={10}
            curve="bezier"
            exponential
            opacity={1}
        />
        </section>
    )
}

