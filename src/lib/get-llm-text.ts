import { readFile } from 'fs/promises';
import path from 'path';
import { source } from '../../source';
import type { InferPageType } from 'fumadocs-core/source';

export async function getLLMText(page: InferPageType<typeof source>) {
  // Read raw MDX content from file
  const filePath = path.join(process.cwd(), 'content/docs', page.file.path);
  const rawContent = await readFile(filePath, 'utf-8');

  // Remove frontmatter (content between --- markers)
  const contentWithoutFrontmatter = rawContent.replace(/^---[\s\S]*?---\n*/, '');

  return `# ${page.data.title} (${page.url})

${contentWithoutFrontmatter}`;
}
