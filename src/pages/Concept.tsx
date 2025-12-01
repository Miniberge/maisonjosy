import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, Home, Users, Sparkles, Key, Coffee, MapPin } from "lucide-react";
import livingRoomImage from "@/assets/living-room.jpg";
import gardenImage from "@/assets/garden-terrace.jpg";

const ConceptPage = () => {
  const comparison = [
    { aspect: "Statut", ehpad: "Hébergé", residence: "Locataire", josy: "Copropriétaire", josyHighlight: true },
    { aspect: "Autonomie", ehpad: "Perte d'autonomie", residence: "Variable", josy: "Autonome", josyHighlight: true },
    { aspect: "Taille", ehpad: "80-100 résidents", residence: "50-200 logements", josy: "8-10 colocataires", josyHighlight: true },
    { aspect: "Coût mensuel", ehpad: "2500-4000€", residence: "1500-2500€", josy: "Charges seules", josyHighlight: true },
    { aspect: "Patrimoine", ehpad: "Non", residence: "Non", josy: "Oui (SCI)", josyHighlight: true },
    { aspect: "Vie sociale", ehpad: "Imposée", residence: "Variable", josy: "Choisie", josyHighlight: true },
  ];

  const sciSteps = [
    { number: "1", text: "Josy crée une SCI pour chaque maison" },
    { number: "2", text: "Vous achetez des parts de la SCI (75 000 - 130 000 €)" },
    { number: "3", text: "Ces parts vous donnent droit à votre chambre + espaces communs" },
    { number: "4", text: "Pas de loyer, uniquement les charges de la maison" },
    { number: "5", text: "Vos parts sont transmissibles à vos héritiers" },
  ];

  const lifestyle = [
    { icon: Home, title: "Votre chambre privée", description: "Espace personnel, meublé ou non selon vos envies" },
    { icon: Users, title: "Salon partagé", description: "Pour les moments de convivialité" },
    { icon: Coffee, title: "Cuisine équipée", description: "Repas en commun ou en solo, c'est vous qui décidez" },
    { icon: Sparkles, title: "Jardin / Terrasse", description: "Profiter du beau temps ensemble" },
    { icon: Key, title: "Liberté totale", description: "Allez et venez comme vous voulez" },
    { icon: MapPin, title: "Vos proches bienvenus", description: "Recevez famille et amis quand vous le souhaitez" },
  ];

  const criteria = [
    "Vous avez entre 60 et 80 ans",
    "Vous êtes autonome au quotidien",
    "Vous souhaitez rompre avec l'isolement",
    "Vous voulez préserver votre patrimoine",
    "Vous cherchez une solution sans contrainte de gestion",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Un nouveau modèle d'habitat senior
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
            Ni EHPAD, ni résidence services. Josy invente la colocation copropriétaire.
          </p>
        </div>
      </section>

      {/* Pourquoi Josy est différent */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Pourquoi Josy est différent
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto bg-card rounded-lg shadow-md">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-6 text-left font-semibold text-foreground">Critère</th>
                  <th className="p-6 text-center font-semibold text-foreground">EHPAD</th>
                  <th className="p-6 text-center font-semibold text-foreground">Résidence senior</th>
                  <th className="p-6 text-center font-semibold bg-primary/5 text-primary">Josy</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="p-6 font-medium text-foreground">{row.aspect}</td>
                    <td className="p-6 text-center text-foreground/60">{row.ehpad}</td>
                    <td className="p-6 text-center text-foreground/60">{row.residence}</td>
                    <td className={`p-6 text-center font-semibold ${row.josyHighlight ? 'bg-primary/5 text-primary' : ''}`}>
                      {row.josy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Le modèle SCI expliqué */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Comment fonctionne la copropriété ?
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Le modèle SCI (Société Civile Immobilière) vous permet de devenir propriétaire
              tout en partageant les espaces communs.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-12">
            {sciSteps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-display font-bold shadow-md">
                  {step.number}
                </div>
                <div className="flex-1 pt-3">
                  <p className="text-lg text-foreground">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Card className="max-w-4xl mx-auto border-accent/30 bg-accent/5">
            <CardContent className="p-8">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground/80">
                  <strong className="text-primary">Rassurant :</strong> Josy gère l'intégralité
                  de la SCI : assemblées générales, comptabilité, entretien... Vous n'avez rien à faire.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* La vie en colocation Josy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              La vie en colocation Josy
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {lifestyle.map((item, index) => (
              <Card key={index} className="hover-lift border-0 bg-card shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <item.icon className="w-16 h-16 text-primary" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-2 text-primary">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={livingRoomImage} alt="Salon partagé" className="w-full h-80 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={gardenImage} alt="Jardin et terrasse" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui ? */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Josy est fait pour vous si...
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 mb-8">
              {criteria.map((criterion, index) => (
                <div key={index} className="flex items-start gap-4 bg-card p-6 rounded-lg shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{criterion}</p>
                </div>
              ))}
            </div>
            <Card className="border-destructive/30 bg-destructive/5">
              <CardContent className="p-8">
                <div className="flex gap-4">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">
                    <strong className="text-destructive">Important :</strong> Josy n'est pas adapté si vous avez besoin d'une assistance médicale quotidienne. Dans ce cas, nous vous orienterons vers des solutions plus adaptées.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Prêt à découvrir nos maisons ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Visitez nos projets et imaginez-vous dans votre future colocation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/maisons">Voir nos maisons</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConceptPage;
