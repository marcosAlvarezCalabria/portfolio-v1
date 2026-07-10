import type { PortfolioContent } from '../../domain/entities/portfolio';
import type { PortfolioRepository } from '../ports/portfolio-repository';

export class GetPortfolioContent {
  constructor(private readonly repository: PortfolioRepository) {}

  execute(): PortfolioContent {
    return this.repository.getContent();
  }
}
