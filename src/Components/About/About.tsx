import { Button, PersonalityCard } from 'component-library/packages/ui-library'

const About = () => {
    return (
        <>
        <h2>I am the React(marketing)</h2>
        <Button label='This is button' onClick={() => console.log('Hey')} text='click' />
        <PersonalityCard />
        </>
    )
}

export default About