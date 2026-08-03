import './About.scss'
import CardP from '../../components/CardP/CardP'

export default function About() {

    return (
        <>
            <CardP 
                texte = {`Je suis Matthieu, passionné par les nouvelles technologies et la 
                création de solutions numériques. Curieux depuis toujours, j’ai commencé à explorer 
                l’informatique par moi-même, en expérimentant et en apprenant progressivement la programmation 
                avant même mes études.`} />
            

            <CardP
                texte = {`J’ai ensuite construit mon parcours professionnel 
                autour du développement de projets et de la mise en service 
                de solutions en automatisme et en informatique industrielle. 
                Souhaitant transmettre cette passion et partager mes connaissances, 
                j’ai choisi de devenir enseignant en technologie au collège.`} />

            <CardP
                texte = {`Après trois années dans l’enseignement, j’ai souhaité 
                recentrer mon parcours professionnel sur le développement et élargir 
                mes compétences en explorant un nouvel univers : le développement web.`} />

            <CardP texte = {`Aujourd’hui, je mets à profit mon expérience technique, 
            ma curiosité et mon goût pour l’apprentissage afin de concevoir des interfaces web modernes,
             fonctionnelles et accessibles.`} />


        </>
    )
}