
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Star, User } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Review {
  id: number;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
}

interface ProductReviewsProps {
  productId: number;
  productName: string;
  isOpen: boolean;
  onClose: () => void;
}

const ProductReviews = ({ productId, productName, isOpen, onClose }: ProductReviewsProps) => {
  const [reviews] = useState<Review[]>([
    {
      id: 1,
      userName: "Carlos S.",
      rating: 5,
      title: "Excelente!",
      comment: "Ótima regata, muito confortável e leve para treinar.",
      date: "20/05/2023"
    },
    {
      id: 2,
      userName: "Ana P.",
      rating: 5,
      title: "Perfeita!",
      comment: "Amei a camiseta, tecido ótimo e veste super bem.",
      date: "15/05/2023"
    }
  ]);

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 0,
    title: '',
    comment: '',
    userName: ''
  });

  const handleSubmitReview = () => {
    if (!newReview.rating || !newReview.title || !newReview.comment || !newReview.userName) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos da avaliação.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Avaliação enviada!",
      description: "Sua avaliação foi enviada com sucesso e será analisada em breve.",
    });

    setNewReview({ rating: 0, title: '', comment: '', userName: '' });
    setShowReviewForm(false);
  };

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-oswald uppercase tracking-wider">
            Avaliações - {productName}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Rating Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-4 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(averageRating) 
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xl font-roboto font-bold">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <p className="text-sm text-gray-600 font-roboto">
              Baseado em {reviews.length} avaliações
            </p>
          </div>

          {/* Add Review Button */}
          {!showReviewForm && (
            <Button
              onClick={() => setShowReviewForm(true)}
              variant="outline"
              className="w-full font-roboto font-medium uppercase tracking-wider"
            >
              ESCREVER AVALIAÇÃO
            </Button>
          )}

          {/* Review Form */}
          {showReviewForm && (
            <div className="border rounded-lg p-4 space-y-4">
              <h3 className="font-oswald font-medium uppercase tracking-wider">
                Nova Avaliação
              </h3>
              
              {/* Rating */}
              <div>
                <Label className="font-roboto font-medium">Avaliação *</Label>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                      className="p-1"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= newReview.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <Label htmlFor="userName" className="font-roboto font-medium">Nome *</Label>
                <Input
                  id="userName"
                  value={newReview.userName}
                  onChange={(e) => setNewReview(prev => ({ ...prev, userName: e.target.value }))}
                  placeholder="Seu nome"
                  className="mt-1"
                />
              </div>

              {/* Title */}
              <div>
                <Label htmlFor="title" className="font-roboto font-medium">Título *</Label>
                <Input
                  id="title"
                  value={newReview.title}
                  onChange={(e) => setNewReview(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Título da sua avaliação"
                  className="mt-1"
                />
              </div>

              {/* Comment */}
              <div>
                <Label htmlFor="comment" className="font-roboto font-medium">Comentário *</Label>
                <Textarea
                  id="comment"
                  value={newReview.comment}
                  onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                  placeholder="Conte sobre sua experiência com o produto..."
                  rows={4}
                  className="mt-1"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={handleSubmitReview}
                  className="bg-black hover:bg-gray-800 font-roboto font-medium uppercase tracking-wider"
                >
                  ENVIAR AVALIAÇÃO
                </Button>
                <Button
                  onClick={() => setShowReviewForm(false)}
                  variant="outline"
                  className="font-roboto font-medium uppercase tracking-wider"
                >
                  CANCELAR
                </Button>
              </div>
            </div>
          )}

          {/* Reviews List */}
          <div className="space-y-4">
            <h3 className="font-oswald font-medium uppercase tracking-wider">
              Todas as Avaliações
            </h3>
            
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-roboto font-medium">{review.userName}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 font-roboto">{review.date}</span>
                    </div>
                    
                    <h4 className="font-roboto font-medium mb-1">{review.title}</h4>
                    <p className="text-gray-700 font-roboto text-sm">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductReviews;
