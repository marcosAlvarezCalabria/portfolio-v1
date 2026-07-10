import type { PortfolioContent } from '../../domain/entities/portfolio';
import type { PortfolioRepository } from '../../application/ports/portfolio-repository';
import { portfolioContent } from '../data/portfolio-content';

export class StaticPortfolioRepository implements PortfolioRepository {
  getContent(): PortfolioContent {
    return portfolioContent;
  }
}
