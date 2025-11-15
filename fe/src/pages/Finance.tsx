import { Car, HomeIcon, User, CreditCard, ChartCandlestick, IndianRupee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle,  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Finance = () => {
  const financeOptions = [
    {
      title: "Open a free demat account",
      icon: ChartCandlestick,
      description: "Open a free demat account with Zerodha and start investing in stocks, derivatives, mutual funds, ETFs, bonds, IPOs, and more",
      features: [
        "₹0 charges for equity delivery",
        "Fast & paperless online account opening",
        "Access to stocks, mutual funds, IPOs, and ETFs in one platform",
        "Advanced trading tools like Kite and Console",
      ],
      processingFee: "₹0 Account Opening Fee",
      url:"https://zerodha.com/open-account?c=OD3729"
    },
    {
      title: "Home Loan",
      icon: HomeIcon,
      description: "Make your dream home a reality with affordable home loan solutions",
      features: [
        "Interest rates from 8.5% p.a.",
        "Loan amount up to ₹5 crores",
        "Tenure up to 30 years",
        "Tax benefits available"
      ],
      processingFee: "₹1,999 onwards"
    },
    {
      title: "Google pay",
      icon: IndianRupee,
      description: "Download Google Pay and make fast, secure UPI payments, recharge, bill payments, and money transfers with ease.",
      features: [
        "Instant UPI money transfers",
        "Recharge mobile, DTH & pay bills",
        "Fast & secure transactions",
        "Rewards & scratch cards",
      ],
      processingFee: "Free to Download",
      url:"https://pay.google.com/gp/promo/p_referrals/?referrer_id=Q58Px",
    },
    {
      title: "PhonePe",
      icon: IndianRupee,
      description: "Download PhonePe for secure UPI payments, mobile recharge, bill payments, insurance, and money transfers within seconds.",
      features: [
        "Instant UPI money transfers",
        "Mobile, DTH, and utility bill payments",
        "Secure QR code payments everywhere",
        "Recharge, FASTag, and insurance services",

      ],
      processingFee: "Free to Download",
      url: " https://phon.pe/e0w8e4rh",

    }

  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Smart <span className="text-white">Finance Solutions</span>
            </h1>
            <p className="text-xl text-gray-400">
              Get the best deals on loans and credit cards. Quick approval with minimal documentation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {financeOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card 
                  key={option.title} 
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
                          <CardTitle className="text-2xl text-black">{option.title}</CardTitle>
                          <p className="text-sm text-black font-semibold mt-1">
                            Processing Fee: {option.processingFee}
                          </p>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="mt-3 text-gray-600">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-4 text-black">Key Highlights</h4>
                    <ul className="space-y-3 mb-6">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-black mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={option.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block"
                    >
                      <Button className="w-full bg-black hover:bg-gray-800 text-white">
                        Apply Now
                      </Button>
                    </a>

                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-primary/20 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Application Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Fill Application", desc: "Complete online form" },
                { step: "2", title: "Document Upload", desc: "Submit required docs" },
                { step: "3", title: "Quick Verification", desc: "Instant verification" },
                { step: "4", title: "Get Approved", desc: "Receive funds/card" }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-6 bg-card rounded-lg border border-primary/20">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Finance;
