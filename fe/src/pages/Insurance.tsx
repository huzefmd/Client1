import { FileText, Heart, Activity, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LiveChatWidget from "@/components/LiveChatWidget";

const Insurance = () => {
  const insuranceTypes = [
    {
      title: "Term Insurance",
      icon: FileText,
      description: "Pure life coverage with maximum protection at affordable premiums",
      features: [
        "High coverage at low premiums",
        "Tax benefits under Section 80C",
        "Flexible policy terms",
        "Online application in minutes"
      ],
      startingFrom: "₹490/month"
    },
    {
      title: "Life Insurance",
      icon: Heart,
      description: "Comprehensive life coverage with savings and investment benefits",
      features: [
        "Life cover + savings plan",
        "Maturity benefits",
        "Loan facility available",
        "Multiple payout options"
      ],
      startingFrom: "₹750/month"
    },
    {
      title: "Health Insurance",
      icon: Activity,
      description: "Complete healthcare coverage for you and your family",
      features: [
        "Cashless hospitalization",
        "Pre and post hospitalization",
        "No claim bonus",
        "Coverage for family members"
      ],
      startingFrom: "₹399/month"
    },
    {
      title: "General Insurance",
      icon: Shield,
      description: "Protection for your assets - vehicle, home, travel and more",
      features: [
        "Vehicle insurance",
        "Home insurance",
        "Travel insurance",
        "Personal accident cover"
      ],
      startingFrom: "₹299/month"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-white">
              <span className="text-white">Insurance Solutions</span> for Every Need
            </h1>
            <p className="text-xl text-gray-400">
              Secure your future with comprehensive insurance coverage. Compare plans and get expert guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {insuranceTypes.map((insurance, index) => {
              const Icon = insurance.icon;
              return (
                <Card
                  key={insurance.title}
                  className="overflow-hidden border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <CardHeader className="bg-gray-50 border-b border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-lg bg-black text-white">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-black">{insurance.title}</CardTitle>
                          <p className="text-sm text-black font-semibold mt-1">
                            Starting from {insurance.startingFrom}
                          </p>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="mt-3 text-gray-600">{insurance.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-4 text-black">Key Features</h4>
                    <ul className="space-y-3 mb-6">
                      {insurance.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-black mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href=" https://whatsapp.com/channel/0029VaTSXv865yDLKWr6f80L">
                      <Button className="w-full bg-black hover:bg-gray-800 text-white">
                        Get Free Quote
                      </Button>
                    </a>

                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-accent/20 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Insurance Services?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-card rounded-lg border border-accent/20">
                <h3 className="font-semibold mb-2 text-accent  text-white">Expert Guidance</h3>
                <p className="text-sm text-muted-foreground">Get personalized recommendations from insurance experts</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-accent/20">
                <h3 className="font-semibold mb-2 text-accent text-white">Compare Plans</h3>
                <p className="text-sm text-muted-foreground">Compare policies from top insurers in one place</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-accent/20">
                <h3 className="font-semibold mb-2 text-accent text-white">Quick Processing</h3>
                <p className="text-sm text-muted-foreground">Fast policy issuance with minimal documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <LiveChatWidget/>
    </div>
  );
};

export default Insurance;
