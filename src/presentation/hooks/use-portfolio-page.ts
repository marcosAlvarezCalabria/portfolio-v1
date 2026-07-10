import { useMemo } from 'react';
import { GetPortfolioContent } from '../../application/use-cases/get-portfolio-content';
import { StaticPortfolioRepository } from '../../infrastructure/repositories/static-portfolio-repository';

export function usePortfolioPage() {
  return useMemo(() => {
    const repository = new StaticPortfolioRepository();
    const useCase = new GetPortfolioContent(repository);
    return useCase.execute();
  }, []);
}
