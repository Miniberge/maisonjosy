import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Users, Home as HomeIcon, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import houseImage from "@/assets/house-exterior.jpg";
import livingRoomImage from "@/assets/living-room.jpg";
import gardenImage from "@/assets/garden-terrace.jpg";

const MaisonsPage = () => {
  const [suggestedCity, setSuggestedCity] = useState("");

  const handleSuggest = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestedCity.trim()) {
      toast.success("Merci pour votre suggestion !", {
        description: `Nous étudierons l'ouverture d'une maison à ${suggestedCity}.`,
      });
      setSuggestedCity("");
    }
  };

  const criteria = [
    { icon: MapPin, title: "Emplacement", description: "Proche commerces, transports, médecins" },
    { icon: HomeIcon, title: "Caractère", description: "Maisons de charme, espaces généreux" },
    { icon: CheckCircle2, title: "Accessibilité", description: "Plain-pied ou ascenseur, douches adaptées" },
    { icon: Users, title: "Extérieur", description: "Jardin ou terrasse pour profiter du beau temps" },
  ];

  const gallery = [
    { image: houseImage, title: "Façade extérieure" },
    { image: livingRoomImage, title: "Salon commun" },
    { image: gardenImage, title: "Jardin et terrasse" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Découvrez nos maisons
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
            Des lieux de vie pensés pour le confort et la convivialité
          </p>
        </div>
      </section>

      {/* Projet pilote */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Projet pilote - Région Lyonnaise
            </h2>
          </div>
          <Card className="max-w-5xl mx-auto hover-lift border-0 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-80 lg:h-auto">
                <img src={houseImage} alt="Maison Josy Lyon" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Ouverture 2025
                </div>
                <h3 className="font-display text-3xl font-semibold mb-6 text-primary">
                  Périphérie de Lyon
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="text-foreground/80">Capacité : 8-10 colocataires</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HomeIcon className="w-5 h-5 text-accent" />
                    <span className="text-foreground/80">Surface : ~300m², jardin privatif</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-foreground/80">Localisation : Périphérie lyonnaise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-foreground/80">Investissement : À partir de 85 000 €</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="flex-1">
                    <Link to="/contact">Être informé</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="flex-1">
                    <Link to="/tarifs">Voir les tarifs</Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Prochaines ouvertures */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Prochaines ouvertures
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="hover-lift border-0 bg-card shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2 text-primary">
                  Périphérie Parisienne
                </h3>
                <p className="text-accent font-semibold mb-3">Ouverture prévue en 2026</p>
                <p className="text-foreground/70">
                  Nous développons actuellement plusieurs projets dans la région parisienne
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift border-0 bg-card shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2 text-primary">
                  Autres régions
                </h3>
                <p className="text-primary font-semibold mb-3">En projet</p>
                <p className="text-foreground/70">
                  Nous étudions des opportunités dans d'autres grandes villes françaises
                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="max-w-2xl mx-auto border-primary/30">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-semibold mb-4 text-primary text-center">
                Suggérer une ville
              </h3>
              <p className="text-foreground/70 mb-6 text-center">
                Vous aimeriez qu'une maison Josy ouvre près de chez vous ?
                Dites-nous où !
              </p>
              <form onSubmit={handleSuggest} className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Nom de votre ville"
                  value={suggestedCity}
                  onChange={(e) => setSuggestedCity(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit">Suggérer</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* À quoi ressemble une maison Josy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              À quoi ressemble une maison Josy ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {gallery.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg hover-lift">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                <div className="bg-card p-4">
                  <p className="font-semibold text-center text-primary">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <Card className="max-w-4xl mx-auto border-accent/30 bg-accent/5">
            <CardContent className="p-8">
              <p className="text-foreground/80 text-center">
                <strong className="text-primary">Notre engagement :</strong> Chaque maison est
                sélectionnée pour son charme, son accessibilité et sa proximité avec les
                commerces et services.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Critères de sélection */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Nos critères de sélection
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {criteria.map((criterion, index) => (
              <Card key={index} className="hover-lift border-0 bg-card shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <criterion.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-primary">
                    {criterion.title}
                  </h3>
                  <p className="text-foreground/70">{criterion.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Intéressé par une de nos maisons ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Contactez-nous pour planifier une visite ou en savoir plus.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/contact">
              Prendre contact <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MaisonsPage;
