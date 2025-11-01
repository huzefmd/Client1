import { TrendingUp, Target, LineChart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FreeLearning = () => {
  const topics = [
    {
      title: "Stock Market Fundamentals",
      icon: TrendingUp,
      description: "Learn the basics of stock market investing, understanding market trends, and making informed decisions.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      keyPoints: [
        "Understanding stock exchanges",
        "Reading stock charts and patterns",
        "Market analysis techniques",
        "Risk management strategies"
      ]
    },
    {
      title: "Investment Basics",
      icon: Target,
      description: "Master the fundamentals of investment planning, portfolio diversification, and long-term wealth building.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      keyPoints: [
        "Investment planning strategies",
        "Portfolio diversification",
        "Asset allocation principles",
        "Long-term wealth building"
      ]
    },
    {
      title: "Trading Techniques",
      icon: LineChart,
      description: "Advanced trading strategies, technical analysis, and practical tips for active traders.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      keyPoints: [
        "Technical analysis fundamentals",
        "Chart patterns and indicators",
        "Entry and exit strategies",
        "Risk-reward management"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Free <span className="text-white">Learning Resources</span>
            </h1>
            <p className="text-xl text-gray-400">
              Master financial markets with our comprehensive video courses and expert guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-6xl mx-auto">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <Card key={topic.title} className="overflow-hidden animate-slide-up border-gray-200 bg-white shadow-sm" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardHeader className="bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg bg-black text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-black">{topic.title}</CardTitle>
                        <CardDescription className="text-base mt-1 text-gray-600">{topic.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                        <iframe
                          className="w-full h-full"
                          src={topic.videoUrl}
                          title={topic.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-4 text-black">What You'll Learn</h3>
                        <ul className="space-y-3">
                          {topic.keyPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="h-2 w-2 rounded-full bg-black mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeLearning;
