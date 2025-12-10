import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const InvestorForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    localisation: "",
    montant: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérifier qu'au moins un moyen de contact est fourni
    if (!formData.telephone && !formData.email) {
      toast({
        title: "Information manquante",
        description: "Veuillez renseigner un numéro de téléphone ou une adresse email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Demande envoyée !",
      description: "Nous vous recontacterons très rapidement.",
    });

    setFormData({
      prenom: "",
      nom: "",
      telephone: "",
      email: "",
      localisation: "",
      montant: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Card className="border-0 shadow-xl bg-card">
      <CardHeader className="text-center pb-2">
        <CardTitle className="font-display text-2xl md:text-3xl text-primary">
          Devenir investisseur
        </CardTitle>
        <p className="text-foreground/70 mt-2">
          Remplissez ce formulaire et nous vous recontacterons pour discuter de votre projet d'investissement.
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="prenom" className="text-base">Prénom</Label>
              <Input
                id="prenom"
                value={formData.prenom}
                onChange={(e) => handleChange("prenom", e.target.value)}
                placeholder="Votre prénom"
                className="h-12 text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nom" className="text-base">Nom *</Label>
              <Input
                id="nom"
                value={formData.nom}
                onChange={(e) => handleChange("nom", e.target.value)}
                placeholder="Votre nom"
                required
                className="h-12 text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="telephone" className="text-base">Téléphone *</Label>
              <Input
                id="telephone"
                type="tel"
                value={formData.telephone}
                onChange={(e) => handleChange("telephone", e.target.value)}
                placeholder="06 XX XX XX XX"
                className="h-12 text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="votre@email.com"
                className="h-12 text-base"
              />
            </div>
          </div>
          <p className="text-sm text-foreground/60 -mt-4">
            * Renseignez au moins un moyen de contact (téléphone ou email)
          </p>

          <div className="space-y-2">
            <Label htmlFor="localisation" className="text-base">Zone géographique recherchée *</Label>
            <Input
              id="localisation"
              value={formData.localisation}
              onChange={(e) => handleChange("localisation", e.target.value)}
              placeholder="Ex: Lyon, Rhône, Auvergne-Rhône-Alpes..."
              required
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="montant" className="text-base">Montant d'investissement envisagé *</Label>
            <Input
              id="montant"
              value={formData.montant}
              onChange={(e) => handleChange("montant", e.target.value)}
              placeholder="Ex: 100 000 €"
              required
              className="h-12 text-base"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full text-lg h-14"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Envoi en cours..."
            ) : (
              <>
                Envoyer ma demande <Send className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>

          <p className="text-sm text-foreground/60 text-center">
            Vos données sont confidentielles et ne seront utilisées que pour vous recontacter.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default InvestorForm;
