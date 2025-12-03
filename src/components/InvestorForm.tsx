import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const InvestorForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    region: "",
    adresse: "",
    telephone: "",
    montant: "",
  });

  const investmentRanges = [
    "Moins de 50 000 €",
    "50 000 € - 75 000 €",
    "75 000 € - 100 000 €",
    "100 000 € - 130 000 €",
    "Plus de 130 000 €",
  ];

  const regions = [
    "Région Lyonnaise",
    "Périphérie Parisienne",
    "Autre région",
  ];

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Demande envoyée !",
      description: "Nous vous recontacterons très rapidement.",
    });

    setFormData({
      prenom: "",
      nom: "",
      region: "",
      adresse: "",
      telephone: "",
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
              <Label htmlFor="prenom" className="text-base">Prénom *</Label>
              <Input
                id="prenom"
                value={formData.prenom}
                onChange={(e) => handleChange("prenom", e.target.value)}
                placeholder="Votre prénom"
                required
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

          <div className="space-y-2">
            <Label htmlFor="region" className="text-base">Région recherchée *</Label>
            <Select
              value={formData.region}
              onValueChange={(value) => handleChange("region", value)}
              required
            >
              <SelectTrigger className="h-12 text-base">
                <SelectValue placeholder="Sélectionnez une région" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="adresse" className="text-base">Adresse complète *</Label>
            <Input
              id="adresse"
              value={formData.adresse}
              onChange={(e) => handleChange("adresse", e.target.value)}
              placeholder="Votre adresse"
              required
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telephone" className="text-base">Téléphone *</Label>
            <Input
              id="telephone"
              type="tel"
              value={formData.telephone}
              onChange={(e) => handleChange("telephone", e.target.value)}
              placeholder="06 XX XX XX XX"
              required
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="montant" className="text-base">Montant d'investissement envisagé *</Label>
            <Select
              value={formData.montant}
              onValueChange={(value) => handleChange("montant", value)}
              required
            >
              <SelectTrigger className="h-12 text-base">
                <SelectValue placeholder="Sélectionnez un montant" />
              </SelectTrigger>
              <SelectContent>
                {investmentRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
