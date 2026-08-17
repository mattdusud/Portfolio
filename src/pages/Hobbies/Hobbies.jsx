import './Hobbies.scss'
import CardP from '../../components/CardP/CardP'

export default function Hobbies() {

    return (
        <>
            <CardP 
                texte = {`Astrophotographie / Astronomie`} />
            

            <CardP
                texte = {`Électronique`} />

            <CardP
                texte = {`Projets DIY`} />

            <CardP texte = {`Bricolage / Impression 3D / Gravure et découpe laser`} />


        </>
    )
}