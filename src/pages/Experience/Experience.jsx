import './Experience.scss'
import CardSimple from '../../components/CardSimple/CardSimple'

export default function Experience() {
    

    return(
        <div>
                <CardSimple 
                titre="Technicien Développement Projets" 
                div1h3="CLaii" 
                div1p="2012-2019" 
                li1="Intégration Automatisme et Informatique Industrielle" 
                li2="Certifié Application Server Developer" 
                li3="CDI" 
                div2p="Programmation et mise en service sur site"
                />
        
                <CardSimple 
                titre="Saisonnier maintenance et opérations déambulations" 
                div1h3="Rocher Mistral - La Barben" 
                div1p="Juin 2021 - Août 2021" 
                li1="Parc à thème" 
                li2="Maintenance" 
                li3="Public" 
                div2p="Maintenance préventive des actionneurs des déambulations/ Lancement et synchronisation spectacle nocturne / Régie son et lumière" />

                <CardSimple
                titre="Professeur de Technologie Cycle 4" 
                div1h3="Académie d'Aix-Marseille" 
                div1p="Septembre 2022 - Août 2025" 
                li1="Enseignement Cycle 4" 
                li2="Technologie" 
                li3="Collège" 
                div2p="Contractuel sur les postes de Technologie niveau cycle 4" />
                
                </div>
    )
}