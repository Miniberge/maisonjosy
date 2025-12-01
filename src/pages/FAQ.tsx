import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqCategories = [
    {
      title: "Le concept Josy",
      items: [
        {
          question: "Qu'est-ce que Josy exactement ?",
          answer:
            "Josy est un concept innovant d'habitat partagé pour seniors autonomes (65-75 ans). Contrairement aux résidences seniors classiques, nos résidents deviennent copropriétaires via une SCI (Société Civile Immobilière), tout en bénéficiant d'une gestion totalement déléguée. C'est une colocation entre 8-10 personnes qui partagent les espaces communs mais ont chacune leur chambre privée.",
        },
        {
          question: "En quoi Josy est différent d'une résidence senior ?",
          answer:
            "Trois différences majeures : 1) Vous êtes copropriétaire, pas locataire - votre patrimoine est préservé. 2) Petite communauté de 8-10 personnes vs 50-200 logements dans les résidences classiques - l'ambiance est vraiment familiale. 3) Gestion 100% déléguée - nous nous occupons de tout l'administratif, la maintenance, la coordination. Vous n'avez qu'à profiter.",
        },
        {
          question: "Faut-il être en bonne santé pour rejoindre Josy ?",
          answer:
            "Oui, Josy s'adresse aux seniors autonomes (GIR 5-6), c'est-à-dire capables de gérer seuls les actes de la vie quotidienne. Si vous avez besoin d'assistance médicale quotidienne, Josy n'est pas adapté et nous vous orienterons vers des solutions plus appropriées.",
        },
        {
          question: "Puis-je garder mon médecin traitant ?",
          answer:
            "Absolument ! Vous gardez votre liberté totale concernant votre suivi médical. Vous pouvez conserver votre médecin traitant ou en choisir un nouveau près de votre maison Josy.",
        },
        {
          question: "Les animaux de compagnie sont-ils acceptés ?",
          answer:
            "Oui, sous réserve de l'accord de la communauté de colocataires. Les animaux font partie de la vie et nous comprenons leur importance. Chaque cas est étudié individuellement pour garantir le confort de tous.",
        },
      ],
    },
    {
      title: "La copropriété & la SCI",
      items: [
        {
          question: "Comment fonctionne la SCI ?",
          answer:
            "Josy crée une SCI (Société Civile Immobilière) pour chaque maison. Vous achetez des parts de cette SCI (entre 75 000 et 130 000 €) qui vous donnent droit à votre chambre privée et à l'usage des espaces communs. Josy gère ensuite l'intégralité de la SCI : assemblées générales, comptabilité, entretien, etc. Vous n'avez aucune démarche administrative à effectuer.",
        },
        {
          question: "Que se passe-t-il si je veux revendre mes parts ?",
          answer:
            "Vous pouvez revendre vos parts à tout moment. Josy s'occupe de trouver un nouveau copropriétaire compatible avec la communauté existante. Nous facilitons toutes les démarches pour rendre le processus simple et rapide.",
        },
        {
          question: "Mes enfants peuvent-ils hériter de mes parts ?",
          answer:
            "Oui ! Vos parts de SCI sont transmissibles à vos héritiers comme tout bien immobilier. Ils pourront soit conserver les parts (et éventuellement occuper le logement s'ils sont éligibles), soit les revendre. C'est l'un des avantages majeurs de notre modèle par rapport à la location classique.",
        },
        {
          question: "Qui gère la SCI au quotidien ?",
          answer:
            "Josy assure 100% de la gestion : comptabilité, entretien, maintenance, organisation des assemblées générales, coordination avec les prestataires, etc. Vous n'avez rien à faire. C'est inclus dans vos charges mensuelles.",
        },
        {
          question: "Que se passe-t-il en cas de décès d'un copropriétaire ?",
          answer:
            "Les parts sont transmises aux héritiers selon les règles successorales classiques. Josy accompagne alors la famille dans les démarches et peut faciliter la revente des parts si les héritiers le souhaitent.",
        },
      ],
    },
    {
      title: "La vie quotidienne",
      items: [
        {
          question: "Comment se passent les repas ?",
          answer:
            "Vous êtes totalement libre ! Chaque maison dispose d'une cuisine équipée. Vous pouvez cuisiner pour vous, organiser des repas partagés avec vos colocataires, ou les deux. Beaucoup de nos résidents apprécient de partager certains repas tout en gardant leur autonomie.",
        },
        {
          question: "Suis-je obligé de participer aux activités ?",
          answer:
            "Pas du tout ! La vie en colocation Josy est basée sur la liberté. Vous participez aux moments collectifs quand vous le souhaitez, et vous profitez de votre espace privé quand vous en avez envie. Aucune obligation, juste des opportunités de convivialité.",
        },
        {
          question: "Puis-je recevoir ma famille et mes amis ?",
          answer:
            "Oui, bien sûr ! Vous êtes chez vous. Vous pouvez recevoir famille et amis quand vous voulez, dans votre chambre ou dans les espaces communs (en respectant les autres colocataires).",
        },
        {
          question: "Puis-je m'absenter plusieurs semaines ?",
          answer:
            "Absolument ! Vous avez toute liberté d'aller et venir. Que ce soit pour des vacances, rendre visite à votre famille, ou toute autre raison, vous n'avez aucun compte à rendre. C'est votre logement.",
        },
        {
          question: "Comment sont choisis les autres colocataires ?",
          answer:
            "Josy effectue une sélection rigoureuse pour garantir une compatibilité entre colocataires. Nous organisons des rencontres préalables, évaluons les attentes et les personnalités, pour constituer des communautés harmonieuses. L'objectif est que chacun se sente bien et partage les mêmes valeurs de respect et de convivialité.",
        },
      ],
    },
    {
      title: "Les aspects financiers",
      items: [
        {
          question: "Combien coûte un investissement Josy ?",
          answer:
            "L'investissement initial pour devenir copropriétaire se situe entre 75 000 et 130 000 € selon la maison et la chambre choisie. À cela s'ajoutent des charges mensuelles d'environ 500-700 € couvrant l'entretien, les utilities, et la gestion. Pas de loyer à payer.",
        },
        {
          question: "Quelles sont les charges mensuelles ?",
          answer:
            "Les charges mensuelles (environ 500-700 €) couvrent : l'entretien de la maison, les utilities (eau, électricité, chauffage, internet), la gestion par Josy, et une partie des services communs. C'est significativement moins cher qu'un loyer en résidence senior (1500-2500 €/mois).",
        },
        {
          question: "Existe-t-il des aides financières ?",
          answer:
            "Oui ! L'Aide à la Vie Partagée (AVP) peut apporter jusqu'à 10 000 €/an pour les habitats inclusifs reconnus. Certaines banques proposent aussi des crédits immobiliers adaptés aux seniors. Nous vous accompagnons pour identifier toutes les aides disponibles dans votre situation.",
        },
        {
          question: "Puis-je utiliser la vente de ma maison pour financer ?",
          answer:
            "Absolument ! C'est même le cas de beaucoup de nos résidents. Nous pouvons vous accompagner dans la vente de votre bien actuel et optimiser la transition vers votre nouvelle vie chez Josy. Nos partenaires immobiliers peuvent vous conseiller.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Questions fréquentes
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
            Tout ce que vous devez savoir sur Josy
          </p>
        </div>
      </section>

      {/* FAQ par catégorie */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8 text-primary">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      value={`category-${categoryIndex}-item-${itemIndex}`}
                      className="bg-card rounded-lg shadow-sm border-0 px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold text-lg text-primary hover:text-light-teal">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 pt-2 pb-4 text-base leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 text-primary">
            Vous n'avez pas trouvé la réponse à votre question ?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Notre équipe est là pour vous répondre. N'hésitez pas à nous contacter.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/contact">Contactez-nous</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
