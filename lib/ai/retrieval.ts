export async function retrieveRelevantChunks(_question: string) {
  // TODO: Replace with vector retrieval against pgvector/Pinecone/Qdrant.
  return [{ documentId: 'd1', snippet: 'Demo snippet on FWD basin and LTE.', page: 14 }];
}
