import { BookOpen, ShoppingCart, Shield, Wallet, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import heroBackground from "@/assets/hero-bg.jpg";
import qrCode from "@/assets/qr-placeholder.jpg";
import { Button } from "@/components/ui/button";

const Index = () => {
  const categories = [
    {
      title: "Free Learning",
      description: "Master stock market, investment basics, and trading techniques with expert guidance.",
      icon: BookOpen,
      link: "/learning",
      gradient: "primary" as const,
    },
    {
      title: "Shopping Discounts",
      description: "Exclusive deals on fashion, beauty, home essentials, and more. Save smart!",
      icon: ShoppingCart,
      link: "/shopping",
      gradient: "secondary" as const,
    },
    {
      title: "Insurance",
      description: "Comprehensive coverage options for life, health, and term insurance.",
      icon: Shield,
      link: "/insurance",
      gradient: "accent" as const,
    },
    {
      title: "Finance",
      description: "Get the best rates on vehicle, home, and personal loans. Apply for credit cards.",
      icon: Wallet,
      link: "/finance",
      gradient: "primary" as const,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.95)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Empowering <span className="text-white">Smart Learning</span> for Everyone
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Free resources on finance, insurance, shopping discounts, and investment. Join thousands learning smarter every day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/learning">
                <Button size="lg" className="bg-white hover:bg-white/90 text-black group">
                  Start Learning Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#qr-section">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Join WhatsApp Channel
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section id="qr-section" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl font-bold mb-4">Connect with Us on WhatsApp</h2>
            <p className="text-muted-foreground mb-8">
              Scan the QR code to join our WhatsApp channel and get instant updates on new learning resources, exclusive deals, and financial tips.
            </p>
            <div className="inline-block p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/20 animate-glow">
              <img src={qrCode} alt="WhatsApp QR Code" className="w-64 h-64 mx-auto rounded-xl" />
              <p className="mt-4 text-sm font-medium text-white">Scan to Connect Instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Explore Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to make smart financial decisions, all in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <div key={category.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-white/5 via-white/3 to-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our community and gain access to free learning resources that will transform your financial future.
          </p>
          <Link to="/learning">
            <Button size="lg" className="bg-white hover:bg-white/90 text-black">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
