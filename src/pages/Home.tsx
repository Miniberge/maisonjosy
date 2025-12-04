import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Home,
  Users,
  Sparkles,
  HandHeart,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Key,
  Coffee,
  MapPin,
  TrendingUp,
  Heart,
  Smile,
  Phone,
  Mail,
  Clock,
  Calendar,
  Home as HomeIcon,
  HelpCircle,
} from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-seniors-dining.jpg";
import houseImage from "@/assets/house-exterior.jpg";
import livingRoomImage from "@/assets/living-room.jpg";
import gardenImage from "@/assets/garden-terrace.jpg";
import sophieImage from "@/assets/team-sophie.jpg";
import pierreImage from "@/assets/team-pierre.jpg";
import marieImage from "@/assets/team-marie.jpg";
import InvestorForm from "@/components/InvestorForm";

const HomePage = () => {
  const [suggestedCity, setSuggestedCity] = useState("");
  const [formData, setFormData] = useState({
    type: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    consent: false,
  });

  const handleSuggest = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestedCity.trim()) {
      toast.success("Merci pour votre suggestion !", {
        description: `Nous étudierons l'ouverture d'une maison à ${suggestedCity}.`,
      });
      setSuggestedCity("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error("Veuillez accepter d'être recontacté");
      return;
    }
    toast.success("Message envoyé !", {
      description: "Nous vous recontacterons sous 24h.",
    });
    setFormData({
      type: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      message: "",
      consent: false,
    });
  };

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

  const stats = [
    { value: "8-10", label: "colocataires par maison" },
    { value: "75-130k€", label: "investissement copropriétaire" },
    { value: "0€", label: "de loyer pour les copropriétaires" },
  ];

  const comparison = [
    { aspect: "Statut", ehpad: "Hébergé", residence: "Locataire", josy: "Copropriétaire", josyHighlight: true },
    { aspect: "Autonomie", ehpad: "Perte d'autonomie", residence: "Variable", josy: "Autonome", josyHighlight: true },
    { aspect: "Taille", ehpad: "80-100 résidents", residence: "50-200 logements", josy: "8-10 colocataires", josyHighlight: true },
    { aspect: "Coût mensuel", ehpad: "2500-4000€", residence: "1500-2500€", josy: "Charges seules", josyHighlight: true },
    { aspect: "Patrimoine", ehpad: "Non", residence: "Non", josy: "Oui (SCI)", josyHighlight: true },
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

  const values = [
    { icon: Heart, title: "Humanité", description: "Chaque personne est unique." },
    { icon: Home, title: "Propriété", description: "Votre patrimoine compte." },
    { icon: Sparkles, title: "Simplicité", description: "Zéro paperasse, zéro gestion." },
    { icon: Smile, title: "Bienveillance", description: "Une communauté soudée." },
  ];

  const team = [
    {
      image: sophieImage,
      name: "Sophie Martin",
      title: "Fondatrice & CEO",
      bio: "Ancienne directrice de résidence senior.",
    },
    {
      image: pierreImage,
      name: "Pierre Durand",
      title: "Co-fondateur & COO",
      bio: "Expert en immobilier.",
    },
    {
      image: marieImage,
      name: "Marie Lefebvre",
      title: "Responsable accompagnement",
      bio: "Votre interlocutrice dédiée.",
    },
  ];

  const faqItems = [
    {
      question: "Qu'est-ce que Josy exactement ?",
      answer: "Josy est un concept innovant d'habitat partagé pour seniors autonomes (60-80 ans). Nos résidents deviennent copropriétaires via une SCI, tout en bénéficiant d'une gestion totalement déléguée.",
    },
    {
      question: "Comment fonctionne la SCI ?",
      answer: "Vous achetez des parts de la SCI (entre 75 000 et 130 000 €) qui vous donnent droit à votre chambre privée et à l'usage des espaces communs. Josy gère l'intégralité de la SCI.",
    },
    {
      question: "Puis-je revendre mes parts ?",
      answer: "Vous pouvez revendre vos parts à tout moment. Josy s'occupe de trouver un nouveau copropriétaire compatible avec la communauté existante.",
    },
    {
      question: "Mes enfants peuvent-ils hériter ?",
      answer: "Oui ! Vos parts de SCI sont transmissibles à vos héritiers comme tout bien immobilier.",
    },
    {
      question: "Quelles sont les charges mensuelles ?",
      answer: "Les charges mensuelles (environ 500-700 €) couvrent l'entretien, les utilities et la gestion. Pas de loyer.",
    },
    {
      question: "Les animaux sont-ils acceptés ?",
      answer: "Oui, sous réserve de l'accord de la communauté de colocataires.",
    },
  ];

  const gallery = [
    { image: houseImage, title: "Façade extérieure" },
    { image: livingRoomImage, title: "Salon commun" },
    { image: gardenImage, title: "Jardin et terrasse" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(43, 103, 119, 0.7), rgba(43, 103, 119, 0.7)), url(${heroImage})`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
            Concrétisez votre rêve d'habitat partagé,<br />tout en devenant propriétaire
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto text-white/90 animate-slide-up">
            Josy réinvente l'habitat senior : une colocation conviviale entre copropriétaires,
            avec zéro gestion au quotidien.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/80 italic animate-slide-up">
            Investissez aujourd'hui pour vos proches, et demain pour votre avenir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => scrollToSection("maisons")}
            >
              Découvrir nos maisons <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => scrollToSection("contact")}
            >
              Être rappelé gratuitement
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
              Ni l'institution, ni seul à la maison ! Chez Josy nous avons opté pour{" "}
              <strong className="text-primary">une autre voie.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* La solution Josy */}
      <section id="concept" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Une colocation entre propriétaires,<br />pas entre locataires
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover-lift border-0 bg-card shadow-md">
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

      {/* Comparaison */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Pourquoi Josy est différent
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto bg-card rounded-lg shadow-md">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 md:p-6 text-left font-semibold text-foreground">Critère</th>
                  <th className="p-4 md:p-6 text-center font-semibold text-foreground">EHPAD</th>
                  <th className="p-4 md:p-6 text-center font-semibold text-foreground">Résidence senior</th>
                  <th className="p-4 md:p-6 text-center font-semibold bg-primary/5 text-primary">Josy</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="p-4 md:p-6 font-medium text-foreground">{row.aspect}</td>
                    <td className="p-4 md:p-6 text-center text-foreground/60">{row.ehpad}</td>
                    <td className="p-4 md:p-6 text-center text-foreground/60">{row.residence}</td>
                    <td className={`p-4 md:p-6 text-center font-semibold ${row.josyHighlight ? 'bg-primary/5 text-primary' : ''}`}>
                      {row.josy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-background">
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

      {/* Le modèle SCI expliqué */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Comment fonctionne la copropriété ?
            </h2>
          </div>
          <div className="max-w-4xl mx-auto mb-12">
            {sciSteps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center text-xl font-display font-bold shadow-md">
                  {step.number}
                </div>
                <div className="flex-1 pt-3">
                  <p className="text-lg text-foreground">{step.text}</p>
                </div>
              </div>
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
                <div className="text-5xl md:text-6xl font-display font-bold mb-3">{stat.value}</div>
                <p className="text-xl text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
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
              <Card key={index} className="hover-lift border-0 bg-card shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {gallery.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="bg-card p-3">
                  <p className="font-semibold text-center text-primary text-sm">{item.title}</p>
                </div>
              </div>
            ))}
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
                <div key={index} className="flex items-start gap-4 bg-card p-5 rounded-lg shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{criterion}</p>
                </div>
              ))}
            </div>
            <Card className="border-destructive/30 bg-destructive/5">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/80 text-sm">
                    <strong className="text-destructive">Important :</strong> Josy n'est pas adapté si vous avez besoin d'une assistance médicale quotidienne.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nos maisons */}
      <section id="maisons" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Nos maisons
            </h2>
          </div>
          <Card className="max-w-5xl mx-auto hover-lift border-0 shadow-xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img src={houseImage} alt="Maison Josy Lyon" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                  Ouverture 2025
                </div>
                <h3 className="font-display text-2xl font-semibold mb-4 text-primary">
                  Périphérie de Lyon
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="text-foreground/80">8-10 colocataires</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HomeIcon className="w-5 h-5 text-accent" />
                    <span className="text-foreground/80">~300m², jardin privatif</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-foreground/80">À partir de 85 000 €</span>
                  </div>
                </div>
                <Button size="lg" onClick={() => scrollToSection("contact")}>
                  Être informé
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Suggérer une ville */}
          <Card className="max-w-2xl mx-auto border-primary/30">
            <CardContent className="p-8">
              <h3 className="font-display text-xl font-semibold mb-4 text-primary text-center">
                Suggérer une ville
              </h3>
              <p className="text-foreground/70 mb-6 text-center text-sm">
                Vous aimeriez qu'une maison Josy ouvre près de chez vous ?
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

      {/* Tarifs */}
      <section id="tarifs" className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Tarifs
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Option Copropriétaire */}
            <Card className="hover-lift border-2 border-accent shadow-xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <Home className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-4 text-center text-primary">
                  Copropriétaire
                </h3>
                <div className="mb-6 text-center">
                  <div className="text-3xl font-display font-bold text-accent mb-1">
                    75 000 - 130 000 €
                  </div>
                  <p className="text-foreground/70 text-sm">Investissement initial</p>
                  <div className="text-xl font-display font-bold text-primary mt-3 mb-1">
                    ~500-700 €/mois
                  </div>
                  <p className="text-foreground/70 text-sm">Charges mensuelles</p>
                  <p className="text-accent font-semibold mt-2">Pas de loyer</p>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">Propriétaire de vos parts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">Patrimoine transmissible</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">Plus-value potentielle</span>
                  </div>
                </div>
                <Button size="lg" className="w-full" onClick={() => scrollToSection("contact")}>
                  Simuler mon investissement
                </Button>
              </CardContent>
            </Card>

            {/* Option Locataire */}
            <Card className="hover-lift border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Key className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-4 text-center text-primary">
                  Locataire
                </h3>
                <div className="mb-6 text-center">
                  <div className="text-3xl font-display font-bold text-primary mb-1">0 €</div>
                  <p className="text-foreground/70 text-sm">Investissement initial</p>
                  <div className="text-xl font-display font-bold text-primary mt-3 mb-1">
                    ~1 500 €/mois
                  </div>
                  <p className="text-foreground/70 text-sm">Loyer charges comprises</p>
                  <p className="text-muted-foreground text-xs mt-2">(si places disponibles)</p>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">Flexibilité maximale</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">Même cadre de vie</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm">Possibilité de devenir copropriétaire</span>
                  </div>
                </div>
                <Button size="lg" variant="outline" className="w-full" onClick={() => scrollToSection("contact")}>
                  Nous contacter
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Aides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            <Card className="hover-lift border-0 bg-card shadow-md">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                  <HelpCircle className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-display text-lg font-semibold mb-2 text-primary">
                  Aide à la Vie Partagée
                </h4>
                <p className="text-foreground/70 text-sm">Jusqu'à 10 000 €/an</p>
              </CardContent>
            </Card>
            <Card className="hover-lift border-0 bg-card shadow-md">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                  <HelpCircle className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-display text-lg font-semibold mb-2 text-primary">
                  Crédit immobilier senior
                </h4>
                <p className="text-foreground/70 text-sm">Prêts adaptés aux plus de 65 ans</p>
              </CardContent>
            </Card>
            <Card className="hover-lift border-0 bg-card shadow-md">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                  <HelpCircle className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-display text-lg font-semibold mb-2 text-primary">
                  Vente de votre bien
                </h4>
                <p className="text-foreground/70 text-sm">Nous vous accompagnons</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investisseurs */}
      <section id="investisseurs" className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-accent" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Investir avec Josy
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Rejoignez un projet à impact humain et patrimonial.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <InvestorForm />
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section id="equipe" className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              L'équipe
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift border-0 bg-card shadow-lg overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5 text-center">
                  <h3 className="font-display text-xl font-semibold mb-1 text-primary">
                    {member.name}
                  </h3>
                  <p className="text-accent font-semibold text-sm mb-2">{member.title}</p>
                  <p className="text-foreground/70 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-0 bg-card shadow-sm">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-accent/20 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-display text-sm font-semibold text-primary">
                    {value.title}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-background">
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

      {/* Contact */}
      <section id="contact" className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Contactez-nous
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulaire */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="type">Vous êtes *</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value) => setFormData({ ...formData, type: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre profil" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="senior">Senior intéressé</SelectItem>
                        <SelectItem value="proche">Proche d'un senior</SelectItem>
                        <SelectItem value="partenaire">Partenaire potentiel</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Parlez-nous de votre projet..."
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, consent: checked as boolean })
                      }
                    />
                    <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                      J'accepte d'être recontacté par Josy *
                    </Label>
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Envoyer ma demande
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Coordonnées */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-semibold mb-6 text-primary">
                    Nos coordonnées
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary">Téléphone</p>
                        <p className="text-foreground/80">04 XX XX XX XX</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary">Email</p>
                        <a href="mailto:contact@josy.fr" className="text-foreground/80 hover:text-primary">
                          contact@josy.fr
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary">Adresse</p>
                        <p className="text-foreground/80">Lyon, France</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary">Horaires</p>
                        <p className="text-foreground/80">Lundi - Vendredi, 9h - 18h</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Prêt à commencer une nouvelle vie ?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Rencontrons-nous pour discuter de votre projet.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6"
            onClick={() => scrollToSection("contact")}
          >
            Prendre rendez-vous <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;