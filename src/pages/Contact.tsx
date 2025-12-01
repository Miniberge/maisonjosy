import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock, User, Users, Briefcase } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
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

  const profiles = [
    {
      icon: User,
      title: "Un senior intéressé",
      description: "Découvrez si Josy est fait pour vous",
      cta: "Formulaire ci-contre",
    },
    {
      icon: Users,
      title: "Un proche",
      description: "Trouvez une solution pour votre parent",
      cta: "Formulaire ci-contre",
    },
    {
      icon: Briefcase,
      title: "Un partenaire",
      description: "Mairie, investisseur... Collaborons ensemble",
      cta: "contact@josy.fr",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Parlons de votre projet
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
            Une question ? Un projet ? Nous sommes là pour vous accompagner.
          </p>
        </div>
      </section>

      {/* Formulaire et coordonnées */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulaire */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-display text-3xl font-semibold mb-6 text-primary">
                  Envoyez-nous un message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="type">Vous êtes *</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value) => setFormData({ ...formData, type: value })}
                      required
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
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
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
                    <Label htmlFor="city">Ville de résidence souhaitée</Label>
                    <Input
                      id="city"
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
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
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="font-display text-3xl font-semibold mb-6 text-primary">
                    Nos coordonnées
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-1">Téléphone</p>
                        <p className="text-foreground/80">04 XX XX XX XX</p>
                        <p className="text-sm text-foreground/60">Appel gratuit</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-1">Email</p>
                        <a
                          href="mailto:contact@josy.fr"
                          className="text-foreground/80 hover:text-primary transition-colors"
                        >
                          contact@josy.fr
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-1">Adresse</p>
                        <p className="text-foreground/80">Lyon, France</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-primary mb-1">Horaires</p>
                        <p className="text-foreground/80">Lundi - Vendredi</p>
                        <p className="text-foreground/80">9h - 18h</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/30 bg-accent/5">
                <CardContent className="p-8">
                  <p className="text-foreground/80 text-center">
                    <strong className="text-primary">Vous préférez qu'on vous rappelle ?</strong>
                    <br />
                    Laissez-nous votre numéro, nous vous contactons sous 24h.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vous êtes... */}
      <section className="py-20 bg-soft-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-primary">
              Vous êtes...
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profiles.map((profile, index) => (
              <Card key={index} className="hover-lift border-0 bg-card shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <profile.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3 text-primary">
                    {profile.title}
                  </h3>
                  <p className="text-foreground/70 mb-6">{profile.description}</p>
                  <p className="text-accent font-semibold">{profile.cta}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
