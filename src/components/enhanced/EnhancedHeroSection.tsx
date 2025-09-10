import React from 'react';
import { Button } from '@/components/ui/button-enhanced';
import { ArrowRight, Play, Star } from 'lucide-react';

const EnhancedHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent-red/20 animate-pulse" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-red/20 rounded-full animate-bounce-gentle" />
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-primary/20 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-accent-red/30 rounded-full animate-bounce-gentle" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-accent-red/10 backdrop-blur-sm border border-accent-red/20 rounded-full text-accent-red font-medium text-sm">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Coleção Premium 2024
          </div>
          
          {/* Main Heading */}
          <h1 className="heading-responsive font-oswald font-bold text-gradient mb-6 animate-slide-up">
            SUPERE SEUS
            <br />
            <span className="text-accent-red">LIMITES</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Descubra a coleção premium OFFSEASON. Roupas fitness que combinam 
            performance excepcional e estilo incomparável para quem busca a excelência.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center gap-8 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-red">50K+</div>
              <div className="text-sm text-muted-foreground">Atletas</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-red">4.9★</div>
              <div className="text-sm text-muted-foreground">Avaliação</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-red">100%</div>
              <div className="text-sm text-muted-foreground">Qualidade</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="premium" 
              size="xl"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Explorar Coleção
            </Button>
            
            <Button 
              variant="glass" 
              size="xl"
              leftIcon={<Play className="w-5 h-5" />}
            >
              Ver em Ação
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm text-muted-foreground mb-4">Confiado por atletas profissionais</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-xs font-medium bg-muted/50 px-3 py-1 rounded-full">CBDA</div>
              <div className="text-xs font-medium bg-muted/50 px-3 py-1 rounded-full">IFBB</div>
              <div className="text-xs font-medium bg-muted/50 px-3 py-1 rounded-full">CrossFit®</div>
              <div className="text-xs font-medium bg-muted/50 px-3 py-1 rounded-full">Olimpíadas</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-accent-red rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-red rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;