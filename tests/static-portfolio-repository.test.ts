import { describe, expect, it } from 'vitest';
import { StaticPortfolioRepository } from '../src/infrastructure/repositories/static-portfolio-repository';

describe('StaticPortfolioRepository', () => {
  it('exposes featured portfolio sections and projects', () => {
    const repository = new StaticPortfolioRepository();
    const content = repository.getContent();

    expect(content.hero.title).toContain('operational outcomes');
    expect(content.projects.items.length).toBeGreaterThanOrEqual(5);
    expect(content.skills.groups).toHaveLength(3);
    expect(content.contact.items.map((item) => item.slug)).toEqual(['linkedin', 'github', 'cv']);
  });
});
