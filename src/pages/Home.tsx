import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, Sparkles, HandHeart, ArrowRight, CheckCircle2, Quote } from "lucide-react";
import heroImage from "@/assets/hero-seniors-dining.jpg";
import houseImage from "@/assets/house-exterior.jpg";

const HomePage = () => {
  const solutions = [
    {
      icon: Home,
      title: "Devenez copropriétaire",
      description:
        "Investissez dans votre logement via une SCI. Pas de loyer, uniquement des charges. Votre patrimoine reste le vôtre.",
    },
    {
      icon: Users,
      title: "Retrouvez une vie sociale",
      description:
        "8-10 colocataires partageant les mêmes valeurs. Repas ensemble, activités, sorties... mais chacun chez soi quand il le souhaite.",
    },
    {
      icon: Sparkles,
      title: "Zéro gestion",
      description:
        "Josy s'occupe de tout : administratif, maintenance, coordination. Vous, vous profitez.",
    },
    {
      icon: HandHeart,
      title: "Services sur mesure",
      description:
        "Besoin d'aide ponctuelle ? Nos partenaires interviennent selon vos besoins.",
    },
  ];

  const steps = [
    { number: "1", title: "Nous rencontrer", description: "Échange gratuit pour comprendre vos besoins" },
    { number: "2", title: "Visiter une maison", description: "Découvrir l'ambiance et rencontrer les colocataires" },
    { number: "3", title: "Rejoindre la SCI", description: "Devenir copropriétaire avec un investissement adapté" },
    { number: "4", title: "Emménager", description: "Commencer votre nouvelle vie, accompagné par Josy" },
  ];

  const testimonials = [
    {
      name: "Marie",
      age: "68 ans",
      location: "Lyon",
      text: "Après le décès de mon mari, je me sentais perdue dans ma grande maison. Chez Josy, j'ai retrouvé une famille. Et en plus, je suis propriétaire !",
    },
    {
      name: "Jean-Pierre",
      age: "72 ans",
      location: "Villeurbanne",
      text: "Je cherchais une solution qui ne me fasse pas perdre mon patrimoine. Avec la SCI, mes enfants hériteront de mes parts. C'est intelligent.",
    },
    {
      name: "Françoise",
      age: "66 ans",
      location: "Écully",
      text: "Ce qui m'a convaincue ? La gestion déléguée. Je n'ai rien à faire, juste profiter de mes voisins formidables.",
    },
  ];

  const stats = [
    { value: "8-10", label: "colocataires par maison" },
    { value: "75-130k€", label: "investissement copropriétaire" },
    { value: "0€", label: "de loyer pour les copropriétaires" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(43, 103, 119, 0.7), rgba(43, 103, 119, 0.7)), url(${heroImage})`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
            Retrouvez une vie sociale riche,<br />tout en devenant propriétaire
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 animate-slide-up">
            Josy réinvente l'habitat senior : une colocation conviviale entre copropriétaires,
            avec zéro gestion au quotidien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/maisons">
                Découvrir nos maisons <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Être rappelé gratuitement</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Le problème */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 text-primary">
              Vous méritez mieux que la solitude
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-display font-bold text-accent mb-2">2M</div>
                <p className="text-foreground/70">seniors vivent isolés en France</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-display font-bold text-accent mb-2">82%</div>
                <p className="text-foreground/70">des entrées en EHPAD sont non désirées</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-display font-bold text-accent mb-2">5M</div>
                <p className="text-foreground/70">de seniors se sentent seuls</p>
              </div>
            </div>
            <p className="text-lg text-foreground/70 mt-8">
              Après une vie active, la retraite peut rimer avec isolement. Votre maison devient
              trop grande, vos enfants sont loin, et les journées se ressemblent.{" "}
              <strong className="text-primary">Il existe une autre voie.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* La solution Josy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Une colocation entre propriétaires,<br />pas entre locataires
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="hover-lift border-0 bg-card shadow-md"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <solution.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-primary">
                    {solution.title}
                  </h3>
                  <p className="text-foreground/70">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Comment ça marche ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-accent/30" />
                )}
                <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-accent text-white flex items-center justify-center text-3xl font-display font-bold shadow-lg">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-primary">
                  {step.title}
                </h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Ils ont choisi Josy
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift border-0 bg-card shadow-md">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-accent mb-4" />
                  <p className="text-foreground/80 mb-6 italic">{testimonial.text}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-display font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">
                        {testimonial.age}, {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-6xl font-display font-bold mb-3">{stat.value}</div>
                <p className="text-xl text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 text-primary">
              Nous développons nos premières maisons
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-lift border-0 bg-card shadow-md">
              <CardContent className="p-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold mb-2 text-primary">
                  Région Lyonnaise
                </h3>
                <p className="text-accent font-semibold mb-3">Projet pilote</p>
                <p className="text-foreground/70 mb-6">
                  Notre première maison ouvre en 2025 dans la périphérie de Lyon
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/maisons">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover-lift border-0 bg-card shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2 text-primary">
                  Périphérie Parisienne
                </h3>
                <p className="text-accent font-semibold mb-3">En développement</p>
                <p className="text-foreground/70 mb-6">
                  Prochaines ouvertures prévues pour 2026
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Être informé</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 text-primary">
            Prêt à commencer une nouvelle vie ?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Rencontrons-nous pour discuter de votre projet et visiter une de nos maisons.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link to="/contact">
              Prendre rendez-vous <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
