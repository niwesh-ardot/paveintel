# PaveIntel (MVP)

PaveIntel is an AI-powered research intelligence platform for concrete pavement researchers, DOT engineers, graduate students, and consultants.

## MVP features
- Dashboard with research intelligence snapshot.
- Library with pavement-focused document cards and filters UI.
- Document detail view.
- Structured Research Card workflow.
- Ask Research Library page with demo synthesis + evidence table.
- Compare Studies matrix + summary.
- Literature Review Builder workflow.
- Tags/Taxonomy manager.
- Settings for AI/vector placeholders.
- Mock API routes for upload, retrieval, extraction, ask, compare, literature review, tags, and research card generation.

## Tech stack
- Next.js (App Router) + TypeScript
- React
- Tailwind CSS
- Modular mock data and AI service placeholders

## Run locally
```bash
npm install
npm run dev
```

## Environment variables
- `OPENAI_API_KEY` (optional placeholder)
- `OPENAI_MODEL` (optional placeholder)

## Current mode
This MVP runs in **mock mode**. It does not perform real PDF parsing, embeddings, vector retrieval, or live LLM calls.

## Future plan
- Add PDF parsing/OCR pipeline.
- Add PostgreSQL + Prisma metadata store.
- Add vector DB + retrieval.
- Replace mock AI services in `lib/ai/*` with OpenAI-backed implementations.
- Add async processing jobs and citation verification.

See `docs/ARCHITECTURE.md` for pipeline/scaling details.
