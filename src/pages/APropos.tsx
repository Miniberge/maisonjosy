import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Home, Sparkles, Smile, CheckCircle2 } from "lucide-react";
import sophieImage from "@/assets/team-sophie.jpg";
import pierreImage from "@/assets/team-pierre.jpg";
import marieImage from "@/assets/team-marie.jpg";

const AProposPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Humanité",
      description: "Chaque personne est unique. Nous prenons le temps de comprendre vos besoins.",
    },
    {
      icon: Home,
      title: "Propriété",
      description: "Votre patrimoine compte. Avec Josy, vous restez maître de votre investissement.",
    },
    {
      icon: Sparkles,
      title: "Simplicité",
      description: "Zéro paperasse, zéro gestion. Vous profitez, nous gérons.",
    },
    {
      icon: Smile,
      title: "Bienveillance",
      description: "Une communauté de colocataires partageant les mêmes valeurs.",
    },
  ];

  const team = [
    {
      image: sophieImage,
      name: "Sophie Martin",
      title: "Fondatrice & CEO",
      bio: "Ancienne directrice de résidence senior, Sophie a voulu créer le lieu où elle aimerait vivre plus tard.",
    },
    {
      image: pierreImage,
      name: "Pierre Durand",
      title: "Co-fondateur & COO",
      bio: "Expert en immobilier, Pierre structure les SCI pour sécuriser votre investissement.",
    },
    {
      image: marieImage,
      name: "Marie Lefebvre",
      title: "Responsable accompagnement",
      bio: "Marie est votre interlocutrice dédiée, de la première visite à l'emménagement.",
    },
  ];

  const commitments = [
    "Transparence totale sur les coûts et la gestion",
    "Sélection rigoureuse des colocataires pour une cohabitation harmonieuse",
    "Accompagnement personnalisé tout au long de votre parcours",
    "Maisons de qualité dans des emplacements choisis",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Qui sommes-nous ?
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
            Une équipe convaincue qu'on peut mieux vieillir, ensemble
          </p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8 text-primary text-center">
              Notre histoire
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
              <p className="text-xl leading-relaxed">
                Josy est né d'un constat simple : <strong className="text-primary">2 millions de
                seniors vivent isolés en France</strong>, alors que beaucoup rêvent de retrouver
                une vie sociale sans pour autant perdre leur indépendance ni leur patrimoine.
              </p>
              <p className="text-xl leading-relaxed">
                Les solutions existantes – EHPAD, résidences services – ne répondent pas à cette
                attente. Elles sont soit médicalisées, soit uniquement locatives, soit
                impersonnelles.
              </p>
              <p className="text-xl leading-relaxed">
                Nous avons imaginé Josy : <strong className="text-primary">un modèle où chacun
                devient copropriétaire de son logement partagé</strong>, tout en bénéficiant d'une
                gestion totalement déléguée. Le meilleur des deux mondes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Nos valeurs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-0 bg-card shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-foreground/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              L'équipe
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Des professionnels passionnés, engagés pour votre bien-être
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift border-0 bg-card shadow-lg overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-display text-2xl font-semibold mb-1 text-primary">
                    {member.name}
                  </h3>
                  <p className="text-accent font-semibold mb-3">{member.title}</p>
                  <p className="text-foreground/70">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nos engagements */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Nos engagements
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {commitments.map((commitment, index) => (
                <Card key={index} className="border-0 bg-card shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <p className="text-lg text-foreground">{commitment}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Envie d'en savoir plus ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Rencontrons-nous pour discuter de votre projet autour d'un café.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/contact">Prendre contact</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AProposPage;
