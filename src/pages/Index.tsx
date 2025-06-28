
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Check, Mail, Twitter, Linkedin, Instagram, Menu, X } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-inter relative">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-xl font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                Simple Theory
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('philosophy')}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Philosophy
                </button>
                <button 
                  onClick={() => scrollToSection('offerings')}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Testimonials
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button 
                  onClick={() => scrollToSection('philosophy')}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Philosophy
                </button>
                <button 
                  onClick={() => scrollToSection('offerings')}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Testimonials
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-60"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gray-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gray-300 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-gray-400 rounded-full opacity-30 animate-ping delay-500"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mb-8">
                ✨ Transforming complexity into clarity
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extralight text-gray-900 mb-8 leading-tight tracking-tight">
              Complex ideas,
              <br />
              <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                made simple
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              We take the complexity out of big ideas, creating clarity through thoughtful design and purposeful communication that builds trust and drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('offerings')}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn the Theory
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <button 
                onClick={() => scrollToSection('philosophy')}
                className="text-gray-600 hover:text-gray-900 px-8 py-4 text-lg font-medium transition-colors underline-offset-4 hover:underline"
              >
                Our Philosophy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 bg-gray-900 text-white text-sm font-medium rounded-full">
                  Our Philosophy
                </span>
                <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 leading-tight">
                  Simplicity is the
                  <span className="block font-medium">ultimate sophistication</span>
                </h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                In a world overwhelmed by complexity, we believe in the power of simplicity. 
                Every challenge has an elegant solution waiting to be discovered.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We strip away the unnecessary, focus on what matters, and present ideas 
                in their purest form — creating experiences that feel effortless and trustworthy.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-full -mr-16 -mt-16"></div>
                <div className="space-y-10 relative">
                  <div className="flex items-start space-x-6 group">
                    <div className="w-3 h-3 bg-gray-900 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900 text-lg">Clarity First</h3>
                      <p className="text-gray-600 leading-relaxed">Every decision is made through the lens of clarity and understanding.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                    <div className="w-3 h-3 bg-gray-900 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900 text-lg">Thoughtful Design</h3>
                      <p className="text-gray-600 leading-relaxed">Form follows function, with purpose driving every creative choice.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                    <div className="w-3 h-3 bg-gray-900 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900 text-lg">Trusted Results</h3>
                      <p className="text-gray-600 leading-relaxed">Building confidence through consistent, reliable, and premium experiences.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full mb-6">
              What We Offer
            </span>
            <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 leading-tight">
              Tools for
              <span className="block font-medium">complex challenges</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Carefully crafted solutions designed to simplify your most complex challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-10 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-50 to-transparent rounded-full -mr-12 -mt-12"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Design Systems</h3>
                <p className="text-gray-600 leading-relaxed mb-8 font-light">
                  Comprehensive design frameworks that bring consistency and clarity to your brand experience.
                </p>
                <a href="#" className="text-gray-900 font-medium inline-flex items-center group-hover:underline transition-all">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="group p-10 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-50 to-transparent rounded-full -mr-12 -mt-12"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 border-2 border-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Strategy Tools</h3>
                <p className="text-gray-600 leading-relaxed mb-8 font-light">
                  Digital products that help you think through complex problems with structured frameworks.
                </p>
                <a href="#" className="text-gray-900 font-medium inline-flex items-center group-hover:underline transition-all">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="group p-10 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-50 to-transparent rounded-full -mr-12 -mt-12"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-8 h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Consulting</h3>
                <p className="text-gray-600 leading-relaxed mb-8 font-light">
                  Strategic guidance to help you distill complex challenges into clear, actionable solutions.
                </p>
                <a href="#" className="text-gray-900 font-medium inline-flex items-center group-hover:underline transition-all">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-32 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full mb-6">
              Testimonials
            </span>
            <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 leading-tight">
              Trusted by
              <span className="block font-medium">forward-thinking teams</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-gray-900 rounded-full mr-1"></div>
                ))}
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg font-light">
                "Simple Theory transformed how we think about complex problems. Their approach is refreshingly clear and the results speak for themselves."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Chen</p>
                  <p className="text-sm text-gray-500">VP of Product, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-gray-900 rounded-full mr-1"></div>
                ))}
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg font-light">
                "The clarity and elegance of their solutions has elevated our entire brand experience. Truly exceptional work."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Michael Rodriguez</p>
                  <p className="text-sm text-gray-500">Creative Director, Studio XY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-16 text-gray-400">
            <div className="text-2xl font-extralight opacity-60">Company A</div>
            <div className="text-2xl font-extralight opacity-60">Brand B</div>
            <div className="text-2xl font-extralight opacity-60">Studio C</div>
            <div className="text-2xl font-extralight opacity-60">Team D</div>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section id="contact" className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-gray-900 text-white text-sm font-medium rounded-full mb-8">
            Stay Connected
          </span>
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 leading-tight">
            Stay in the
            <span className="block font-medium">loop</span>
          </h2>
          <p className="text-xl text-gray-600 mb-16 font-light max-w-2xl mx-auto">
            Get updates on new tools, insights, and ways to simplify complexity in your work.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 text-lg border-gray-200 rounded-2xl focus:border-gray-900 focus:ring-gray-900 bg-gray-50 focus:bg-white transition-all"
              required
            />
            <Button 
              type="submit"
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Waitlist
            </Button>
          </form>
          
          <p className="text-sm text-gray-500">
            No spam, just thoughtful updates. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-3xl font-extralight">Simple Theory</h3>
              <p className="text-gray-400 leading-relaxed max-w-md font-light text-lg">
                Taking complex ideas and presenting them in a way that feels easy, trustworthy, and premium.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Company</h4>
              <nav className="space-y-3">
                <button 
                  onClick={() => scrollToSection('philosophy')}
                  className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('philosophy')}
                  className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Philosophy
                </button>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Careers</a>
              </nav>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-light">
              © 2024 Simple Theory. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
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
