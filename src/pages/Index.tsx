
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Check, Mail, Twitter, Linkedin, Instagram } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you!",
        description: "We'll be in touch soon with updates about Simple Theory.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight">
              Complex ideas,
              <br />
              <span className="font-medium">made simple</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              We take the complexity out of big ideas, creating clarity through thoughtful design and purposeful communication.
            </p>
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Learn the Theory
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
                Our Philosophy
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In a world overwhelmed by complexity, we believe in the power of simplicity. 
                Every challenge has an elegant solution waiting to be discovered.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We strip away the unnecessary, focus on what matters, and present ideas 
                in their purest form — creating experiences that feel effortless and trustworthy.
              </p>
            </div>
            <div className="bg-white p-12 rounded-2xl shadow-sm">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Clarity First</h3>
                    <p className="text-gray-600">Every decision is made through the lens of clarity and understanding.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Thoughtful Design</h3>
                    <p className="text-gray-600">Form follows function, with purpose driving every creative choice.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-3"></div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Trusted Results</h3>
                    <p className="text-gray-600">Building confidence through consistent, reliable, and premium experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tools and services designed to simplify your most complex challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-900 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Design Systems</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Comprehensive design frameworks that bring consistency and clarity to your brand experience.
              </p>
              <a href="#" className="text-gray-900 font-medium inline-flex items-center group-hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="group p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-900 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Strategy Tools</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Digital products that help you think through complex problems with structured frameworks.
              </p>
              <a href="#" className="text-gray-900 font-medium inline-flex items-center group-hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="group p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-900 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-6 h-1 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Consulting</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Strategic guidance to help you distill complex challenges into clear, actionable solutions.
              </p>
              <a href="#" className="text-gray-900 font-medium inline-flex items-center group-hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16">
            Trusted by forward-thinking teams
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gray-900 rounded-full mr-1"></div>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Simple Theory transformed how we think about complex problems. Their approach is refreshingly clear."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Sarah Chen</p>
                  <p className="text-sm text-gray-500">VP of Product, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gray-900 rounded-full mr-1"></div>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The clarity and elegance of their solutions has elevated our entire brand experience."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Michael Rodriguez</p>
                  <p className="text-sm text-gray-500">Creative Director, Studio XY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-12 text-gray-400">
            <div className="text-2xl font-light">Company A</div>
            <div className="text-2xl font-light">Brand B</div>
            <div className="text-2xl font-light">Studio C</div>
            <div className="text-2xl font-light">Team D</div>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Stay in the loop
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Get updates on new tools, insights, and ways to simplify complexity in your work.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 text-lg border-gray-200 rounded-full focus:border-gray-900 focus:ring-gray-900"
              required
            />
            <Button 
              type="submit"
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              Join Waitlist
            </Button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4">
            No spam, just thoughtful updates. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-light mb-4">Simple Theory</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Taking complex ideas and presenting them in a way that feels easy, trustworthy, and premium.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <nav className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Philosophy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Careers</a>
              </nav>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Simple Theory. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
