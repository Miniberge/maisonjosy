import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Home, Key, CheckCircle2, HelpCircle } from "lucide-react";

const TarifsPage = () => {
  const faqItems = [
    {
      question: "Puis-je financer mon investissement avec la vente de ma maison ?",
      answer:
        "Oui, absolument ! Beaucoup de nos résidents financent leur investissement Josy grâce à la vente de leur maison actuelle. Nous pouvons vous accompagner dans cette transition et vous mettre en relation avec des partenaires immobiliers de confiance.",
    },
    {
      question: "Que se passe-t-il si je veux partir ?",
      answer:
        "Vous pouvez revendre vos parts de la SCI à tout moment. Josy s'occupe de trouver un nouveau copropriétaire compatible avec la communauté existante. Le processus est simple et transparent.",
    },
    {
      question: "Mes enfants peuvent-ils hériter de mes parts ?",
      answer:
        "Oui ! Vos parts de SCI sont des biens patrimoniaux transmissibles. Vos héritiers peuvent soit conserver les parts et devenir copropriétaires, soit les revendre. C'est l'un des avantages majeurs de notre modèle.",
    },
    {
      question: "Les charges incluent-elles les repas ?",
      answer:
        "Les charges couvrent l'entretien de la maison, les services communs, et les utilities (eau, électricité, internet). Les repas ne sont pas inclus - chacun gère son alimentation selon ses préférences. Vous pouvez cuisiner seul ou organiser des repas partagés avec vos colocataires.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Un investissement intelligent
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
            Devenir copropriétaire avec Josy : combien ça coûte ?
          </p>
        </div>
      </section>

      {/* Deux options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Option Copropriétaire */}
            <Card className="hover-lift border-2 border-accent shadow-xl">
              <CardContent className="p-8 lg:p-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <Home className="w-8 h-8 text-accent" />
                </div>
                <h2 className="font-display text-3xl font-semibold mb-6 text-center text-primary">
                  Copropriétaire
                </h2>
                <div className="mb-8 text-center">
                  <div className="text-4xl font-display font-bold text-accent mb-2">
                    75 000 - 130 000 €
                  </div>
                  <p className="text-foreground/70">Investissement initial</p>
                  <div className="text-2xl font-display font-bold text-primary mt-4 mb-2">
                    ~500-700 €/mois
                  </div>
                  <p className="text-foreground/70">Charges mensuelles</p>
                  <p className="text-accent font-semibold mt-2">Pas de loyer</p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground/80">Vous êtes propriétaire de vos parts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground/80">Patrimoine transmissible aux héritiers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground/80">Plus-value potentielle à la revente</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground/80">Charges inférieures à un loyer</span>
                  </div>
                </div>
                <Button asChild size="lg" className="w-full">
                  <Link to="/contact">Simuler mon investissement</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Option Locataire */}
            <Card className="hover-lift border-0 shadow-lg">
              <CardContent className="p-8 lg:p-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Key className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-semibold mb-6 text-center text-primary">
                  Locataire
                </h2>
                <div className="mb-8 text-center">
                  <div className="text-4xl font-display font-bold text-primary mb-2">0 €</div>
                  <p className="text-foreground/70">Investissement initial</p>
                  <div className="text-2xl font-display font-bold text-primary mt-4 mb-2">
                    ~1 500 €/mois
                  </div>
                  <p className="text-foreground/70">Loyer charges comprises</p>
                  <p className="text-muted-foreground text-sm mt-2">(si places disponibles)</p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground/80">Flexibilité maximale</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground/80">
                      Même cadre de vie que les copropriétaires
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground/80">
                      Possibilité de devenir copropriétaire ensuite
                    </span>
                  </div>
                </div>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link to="/contact">Nous contacter</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Détail des coûts */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Détail des coûts
            </h2>
          </div>
          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full bg-card rounded-lg shadow-md">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-6 text-left font-semibold text-foreground">Poste</th>
                  <th className="p-6 text-center font-semibold text-accent">Copropriétaire</th>
                  <th className="p-6 text-center font-semibold text-foreground">Locataire</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-6 font-medium text-foreground">Investissement initial</td>
                  <td className="p-6 text-center text-accent font-semibold">
                    75 000 - 130 000 €
                  </td>
                  <td className="p-6 text-center text-foreground/60">0 €</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-6 font-medium text-foreground">Loyer mensuel</td>
                  <td className="p-6 text-center text-accent font-semibold">0 €</td>
                  <td className="p-6 text-center text-foreground/60">~1 200 €</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-6 font-medium text-foreground">Charges mensuelles</td>
                  <td className="p-6 text-center text-accent">~500-700 €</td>
                  <td className="p-6 text-center text-foreground/60">Incluses</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-6 font-medium text-foreground">Gestion Josy</td>
                  <td className="p-6 text-center text-foreground/60">Incluse</td>
                  <td className="p-6 text-center text-foreground/60">Incluse</td>
                </tr>
                <tr className="bg-accent/5">
                  <td className="p-6 font-bold text-foreground">Total mensuel</td>
                  <td className="p-6 text-center text-accent font-bold text-xl">~500-700 €</td>
                  <td className="p-6 text-center text-foreground font-bold text-xl">
                    ~1 500 €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Aides disponibles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Des aides pour vous accompagner
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover-lift border-0 bg-card shadow-md">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <HelpCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-primary">
                  Aide à la Vie Partagée (AVP)
                </h3>
                <p className="text-foreground/70">
                  Jusqu'à 10 000 €/an pour les habitats inclusifs reconnus
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift border-0 bg-card shadow-md">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <HelpCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-primary">
                  Crédit immobilier senior
                </h3>
                <p className="text-foreground/70">
                  Certaines banques proposent des prêts adaptés aux plus de 65 ans
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift border-0 bg-card shadow-md">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <HelpCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-primary">
                  Vente de votre bien actuel
                </h3>
                <p className="text-foreground/70">
                  Nous vous accompagnons pour optimiser la transition
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Tarifs */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Questions fréquentes
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-lg shadow-sm border-0 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-light-teal">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Besoin d'un accompagnement personnalisé ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Nos conseillers sont là pour répondre à toutes vos questions sur le financement.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/contact">Prendre rendez-vous</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TarifsPage;
