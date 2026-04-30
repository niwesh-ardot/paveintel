export type ProcessingStatus = 'processed' | 'needs_review' | 'processing';
export interface Document { id:string; title:string; authors:string[]; year:number; sourceType:string; agency:string; journal?:string; fileName:string; fileUrl:string; abstract:string; summary:string; tags:string[]; methods:string[]; processingStatus:ProcessingStatus; uploadDate:string; confidenceScore:number; }
export interface DocumentChunk { id:string; documentId:string; section:string; content:string; pageStart:number; pageEnd:number; embeddingId?:string; }
export interface ResearchCard { id:string; documentId:string; objective:string; pavementType:string; studyType:string; methods:string[]; dataset:string; inputVariables:string[]; outputVariables:string[]; equations:string[]; findings:string[]; limitations:string[]; practicalImplications:string[]; usefulFor:string[]; confidenceScore:number; reviewStatus:'pending'|'reviewed'; fwdDetails?:Record<string,string>; overlayDesignDetails?:Record<string,string>; materialPropertyDetails?:Record<string,string>; }
export interface Citation { id:string; documentId:string; page:number; snippet:string; label:string; }
export interface EvidenceSnippet { source:string; pavementType:string; method:string; finding:string; limitation:string; pages:string; }
export interface Tag { category:string; name:string; count:number; }
export interface ComparisonResult { commonThemes:string[]; conflictingFindings:string[]; strongestEvidence:string[]; weakestEvidence:string[]; researchGaps:string[]; recommendedCitations:string[]; }
export interface LiteratureReviewOutput { topic:string; style:string; citationStyle:string; sections:{title:string; content:string;}[]; }
export interface ResearchProject { id:string; name:string; topic:string; documentIds:string[]; }
export interface UserSettings { aiProvider:string; model:string; embeddingModel:string; vectorDb:string; citationStrictness:'strict'|'balanced'|'relaxed'; extractionMode:'fast'|'detailed'; humanReviewRequired:boolean; exportPreferences:string[]; }
