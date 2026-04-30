# PaveIntel Architecture Notes

## Document processing pipeline
1. Upload PDF
2. Store original file
3. Extract text
4. Detect sections
5. Extract tables and captions
6. Chunk text by logical section
7. Generate embeddings
8. Store chunks in vector database
9. Generate research card
10. Human review
11. Make document searchable and reusable

## Scaling plan
- Store PDFs in S3/object storage.
- Metadata in PostgreSQL.
- Embeddings in pgvector/Pinecone/Weaviate/Qdrant.
- Background jobs for extraction and chunking.
- OCR for scanned DOT reports.
- Structured OpenAI extraction + RAG answering.
- Citation verification gates before final outputs.
- Team workspaces, permissions, exports (Word/PDF/PPT/BibTeX), audit trails.
