import { describe, expect, it } from 'vitest';
import { GetPortfolioContent } from '../src/application/use-cases/get-portfolio-content';
import type { PortfolioContent } from '../src/domain/entities/portfolio';
import type { PortfolioRepository } from '../src/application/ports/portfolio-repository';

class StubRepository implements PortfolioRepository {
  constructor(private readonly content: PortfolioContent) {}

  getContent(): PortfolioContent {
    return this.content;
  }
}

describe('GetPortfolioContent', () => {
  it('returns the repository content unchanged', () => {
    const sample = {
      hero: {} as PortfolioContent['hero'],
      projects: {} as PortfolioContent['projects'],
      skills: {} as PortfolioContent['skills'],
      about: {} as PortfolioContent['about'],
      contact: {} as PortfolioContent['contact'],
      footer: 'footer'
    };

    const useCase = new GetPortfolioContent(new StubRepository(sample));

    expect(useCase.execute()).toBe(sample);
  });
});
