import Tip from 'react-tooltip';
import '../index.css';
import './Manifesto.css';

const Manifesto = () => {

    return (<span >
    <div id='manifesto-section' data-tip data-for={'manifesto-tip'} class='container-fluid'   >
        <a style={{textDecoration: 'none'}} href='https://agilemanifesto.org/' target='_blank' rel="noopener noreferrer">
        <h2 id='text-title'>- MANIFESTO -</h2>
        <section style={{display: 'flex', flexDirection: 'row', width: '100%', padding: '0.25rem'}}>
            {/* <p class='text-line text-left'>Continuous Development and Evaluation</p> */}
            <p class='text-line text-left'>Iterative Development Cycle</p>
            <p class='text-line'>over</p>
            {/* <p class='text-line text-right'>Project Completion and Release</p> */}
            <p class='text-line text-right'>Waterfall Single Pass</p>
        </section>
        <section style={{display: 'flex', flexDirection: 'row', width: '100%', padding: '0.25rem'}}>
            <p class='text-line text-left'>Clarity in Sufficient Commenting</p>
            <p class='text-line'>over</p>
            <p class='text-line text-right'>Complexity in Technical Proficiencies</p>
        </section>
        <section style={{display: 'flex', flexDirection: 'row', width: '100%', padding: '0.25rem'}}>
            <p class='text-line text-left'>Intentional Security and Versatility</p>
            <p class='text-line'>over</p>
            <p class='text-line text-right'>Extensive Patching and Repetivity</p>
        </section>
        <section style={{display: 'flex', flexDirection: 'row', width: '100%', padding: '0.25rem'}}>
            <p class='text-line text-left'>User Experience and Feedback</p>
            <p class='text-line'>over</p>
            <p class='text-line text-right'>Industry Tendencies and Guidelines</p>
        </section>
        <p id='text-sub' >That is, while there is value in the items on the right, I value the items on the left more.</p>
        </a>
    </div>
    <Tip id={'manifesto-tip'}><span>Did you make the Agile connection?</span></Tip>
    </span>);
}

export default Manifesto;