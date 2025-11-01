import { Shirt, Sparkles, Home, Footprints, Watch, ShoppingBasket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Shopping = () => {
  const categories = [
    {
      title: "Fashion",
      icon: Shirt,
      discount: "Up to 70% OFF",
      description: "Latest trends in clothing, ethnic wear, and designer collections",
      deals: ["T-shirts from ₹199", "Jeans from ₹499", "Ethnic wear from ₹599"]
    },
    {
      title: "Beauty",
      icon: Sparkles,
      discount: "Up to 60% OFF",
      description: "Skincare, makeup, and beauty essentials from top brands",
      deals: ["Skincare kits from ₹299", "Makeup combos from ₹399", "Fragrances from ₹599"]
    },
    {
      title: "Home & Living",
      icon: Home,
      discount: "Up to 65% OFF",
      description: "Transform your space with stylish home décor and furniture",
      deals: ["Bedsheets from ₹349", "Curtains from ₹499", "Kitchen essentials from ₹199"]
    },
    {
      title: "Footwear",
      icon: Footprints,
      discount: "Up to 50% OFF",
      description: "Comfortable and trendy footwear for every occasion",
      deals: ["Sports shoes from ₹799", "Casual footwear from ₹399", "Formal shoes from ₹999"]
    },
    {
      title: "Accessories",
      icon: Watch,
      discount: "Up to 55% OFF",
      description: "Complete your look with watches, bags, and jewellery",
      deals: ["Watches from ₹499", "Bags from ₹599", "Jewellery from ₹299"]
    },
    {
      title: "Grocery",
      icon: ShoppingBasket,
      discount: "Up to 40% OFF",
      description: "Daily essentials and groceries delivered to your doorstep",
      deals: ["Staples from ₹99", "Snacks from ₹49", "Beverages from ₹79"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Exclusive <span className="text-white">Shopping Discounts</span>
            </h1>
            <p className="text-xl text-gray-400">
              Save big on your favorite brands across all categories. Limited time offers!
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={category.title} 
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-200 bg-white shadow-sm animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-3 rounded-lg bg-black text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge className="bg-black text-white">
                        {category.discount}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-black">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <h4 className="font-semibold mb-3 text-sm text-black">Hot Deals</h4>
                    <ul className="space-y-2">
                      {category.deals.map((deal, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-black mt-1.5 mr-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{deal}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-secondary/20 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">How to Get These Deals?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Join our WhatsApp channel to receive exclusive discount codes, flash sale alerts, and personalized shopping recommendations.
          </p>
          <Badge variant="outline" className="text-lg px-6 py-2 border-secondary text-secondary">
            Join WhatsApp for Deal Codes
          </Badge>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shopping;
