import type { PortfolioContent } from '../../domain/entities/portfolio';

export interface PortfolioRepository {
  getContent(): PortfolioContent;
}
