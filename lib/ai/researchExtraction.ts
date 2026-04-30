import { comparisonResult, literatureOutput, researchCards } from '@/lib/data/mockData';
export async function extractResearchCard(_documentText: string) { return researchCards[0]; }
export async function generateDocumentSummary(_documentText: string) { return 'Demo summary: Replace with OpenAI summarization call.'; }
export async function askResearchLibrary(_question: string, _retrievedChunks: unknown[]) { return { synthesis:'Demo/sample AI synthesis with citation placeholders.', citations:['[Demo Citation 1]','[Demo Citation 2]'] }; }
export async function compareStudies(_selectedDocuments: unknown[]) { return comparisonResult; }
export async function generateLiteratureReview(_topic: string, _documents: unknown[], _style: string) { return literatureOutput; }
export async function extractEquations(_documentText: string) { return ['h_overlay = a + b(D0) + c(1/LTE)']; }
export async function generateTags(_documentText: string) { return ['CRCP','FWD','LTE']; }
