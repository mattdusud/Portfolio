import './Qualification.scss'
import CardSimple from '../../components/CardSimple/CardSimple'

export default function Qualification() {

    return (
        <>
            <CardSimple titre="DUT G.E.I.I"
                div1h3="Diplôme Universitaire de Technologie"
                div1p="2009-2011"
                li1="Électrotechnique/Électronique"
                li2="Programmation"
                li3="Automatisme"
                div2p="I.U.T d'Aix-Marseille Antenne de Salon de provence" />

            <CardSimple titre="Licence SARI"
                div1h3="Major de Promotion"
                div1p="2011-2012"
                li1="Électrotechnique/Électronique"
                li2="Programmation"
                li3="Automatisme"
                div2p="I.U.T d'Aix-Marseille Antenne de Salon de provence" />

            <CardSimple titre="SCRUM Master Niveau 1"
                div1h3="Formation Agile"
                div1p="2018"
                li1="Méthode"
                li2="Organisation"
                li3="Travail en équipe"
                div2p="m2i Formation" />

            <CardSimple titre="Developpeur Front-End Junior"
                div1h3="En Cours"
                div1p="Formation Janvier-Septembre 2026"
                li1="HTML/CSS/Java"
                li2="React/Node.js"
                li3="frontEnd"
                div2p="OpenClassrooms" />

        </>
    )
}