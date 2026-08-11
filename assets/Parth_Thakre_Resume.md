# Parth Thakre

**AI Systems Engineer** | Nagpur, India | Open to new engagements

[hire@psthl.com](mailto:hire@psthl.com) | [github.com/parth-thakre](https://github.com/parth-thakre) | [linkedin.com/in/parthsthakre](https://www.linkedin.com/in/parthsthakre/)

## Professional Summary

AI Systems Engineer who builds enterprise LLM systems end to end: retrieval and OCR pipelines, tool-calling agents, multi-model evaluation, and the runtime they deploy onto. Delivers client-facing automation over messy business data, including Kinaxis RapidResponse question answering, local-first AI workspaces, and Azure-based prototypes. Every answer these systems produce is traceable to its source through citations, logs, schemas, and reproducible run artifacts. Deploys on Azure, AWS, a client's own tenant, or fully on-premises, so data residency is a deployment choice rather than a constraint.

## Technical Skills

- **Languages:** Python, TypeScript, JavaScript, C/C++, Java, Bash
- **AI/LLM Systems:** Azure AI Foundry, Azure OpenAI, RAG, OCR, tool and function calling, MCP, prompt and schema design
- **Local & Self-Hosted Inference:** llama.cpp, vLLM, Ollama, LM Studio, OpenAI-compatible runtimes
- **Evaluation:** LLM benchmarks, multi-model orchestration, structured rubrics, simulation metrics, artifact schemas
- **Backend/Product:** FastAPI, Flask, Express, Node.js, REST APIs, SQLite, Pydantic, Zod
- **Frontend/Desktop:** React, Next.js, Vite, Electron, HTML, CSS
- **Infrastructure & Cloud:** Docker, Docker Compose, Linux, reverse proxies, Microsoft Azure, Azure AI Search, Microsoft Fabric, AWS
- **AI Coding Tools:** Codex, OpenCode, OpenClaw, agentic coding workflows
- **Microsoft Platforms:** Copilot Studio, Power Apps

## Engineering Approach

- Converts AI prototypes into deployable artifacts: Electron apps, FastAPI services, Dockerized agents, CLI packages, and rendered reports.
- Designs verifiable outputs using citations, structured JSON contracts, debug traces, scorecards, and reproducible run artifacts.
- Treats retrieval, tool use, citations, and failure recovery as baseline product behavior rather than demo extras.
- Keeps client source and client data private by default; publishes only work that is mine to publish.

## Deployment and Data Boundary

The same system can be delivered onto whichever runtime the data policy allows:

- **Managed cloud:** Azure AI Foundry and Azure OpenAI, or AWS, in my subscription or the client's.
- **Client tenant:** deployed inside the client's own cloud account, so data and keys never leave their boundary.
- **On-premises and air-gapped:** self-hosted open-weight models through llama.cpp, vLLM, Ollama, or any OpenAI-compatible runtime, for data that cannot leave the building.

Applications target an OpenAI-compatible interface, so the same agent, retrieval, and citation logic runs against a hosted frontier model or a local open-weight one without a rewrite. Backed by day-to-day operation of a private Linux lab running more than 20 containers.

## Selected Evidence

- The Kinaxis pilot replaced manual worksheet navigation with natural-language questions answered from RapidResponse data, each answer carrying its workbook, worksheet, column, row, applied filters, and exact returned value.
- Evaluation projects produce inspectable outputs: four-phase tournaments, five-axis scorecards, per-call logs, and structured artifacts.
- Ships across the whole surface a client needs, from Electron desktop app to FastAPI service to Dockerized agent to Python CLI, rather than handing over notebooks.
- Uses agentic coding tools for implementation, review, and debugging while retaining source control, logs, and behavioral verification.

## Selected AI/LLM Projects

### Threads

**Electron, React, TypeScript, Azure AI Foundry**  
Local-first desktop AI workspace; private source, open-source release in progress

- Built an Azure-backed desktop AI workspace with Microsoft Entra ID and API-key authentication, memory and retrieval features, and searchable local history supporting hundreds of conversations.
- Implemented text extraction for PDF, DOCX, PPTX, XLSX, CSV, Markdown, and source-code files, plus OCR for scanned PDFs and images.
- Added MCP tool discovery and selection, Azure web search grounding, routing to Claude models through Azure AI Foundry, and GPT Image generation and editing workflows.

### [Story Tourney | GitHub](https://github.com/parth-thakre/story-tourney)

**Node.js, TypeScript, Next.js, SQLite**  
Blind multi-model LLM evaluation platform

- Orchestrated two to four LLMs through OpenRouter across four structured phases: generation, blind peer review, revision, and final ranking.
- Added four Zod-validated JSON contracts, archived provider calls, encrypted storage for OpenRouter API keys, and a deterministic mock mode for offline testing.
- Implemented Borda count scoring with first-place and peer-review tie-breakers for repeatable tournament rankings.

### Supply Docket

**Python, FastAPI, Semantic Kernel, Docker**  
Kinaxis supply-chain query agent; client system, source stays private

- Built a locally deployed agent-and-API architecture in which Semantic Kernel tools query Kinaxis RapidResponse worksheet data through a FastAPI wrapper.
- Added eight diagnostic playbooks, catalog-aware query planning, column-ID filtering guidance, and per-call debugging metrics.
- Attached source metadata, including workbook, worksheet, column, row, applied filters, and exact returned values, to each answer.
- Supported Azure OpenAI and local OpenAI-compatible runtimes, including LM Studio and Ollama, through configurable deployment settings.

### AISB

**Python, CLI, Simulation, Benchmarking**  
AI Society Benchmark; public release pending an in-progress refactor

- Created an LLM benchmark that simulates societies with five distinct roles, resource constraints, trust, influence, resentment, and role-specific actions.
- Refactored the benchmark into an 18-module CLI package with a canonical data layout, typed artifact schemas, and structured event logs.
- Replaced single-metric evaluation with five-axis scorecards covering welfare, economic performance, social cohesion, institutional stability, and resistance to degenerate strategies.

## Work Experience

### MaSyCoDa Solutions Pvt. Ltd.

**AI Systems Engineer | Nagpur, India** — the firm I deliver client engagements through

Dec 2025–Present

- Built enterprise AI prototypes using Azure AI Foundry, Azure OpenAI, Azure AI Search, Microsoft Fabric, and related Azure services.
- Integrated Azure AI Foundry agents with Microsoft Copilot Studio and Power Apps to create client-facing automation demonstrations.
- Deployed a Kinaxis RapidResponse supply-chain agent pilot designed to reduce manual worksheet navigation through evidence-backed question answering.
- Added eight diagnostic playbooks, citation requirements, and per-call debugging traces to make supply-chain answers reproducible and auditable.
- Used Codex, OpenCode, OpenClaw, and agentic coding harnesses to accelerate implementation, review, debugging, and iteration.

## Education

### Shri Ramdeobaba College of Engineering and Management

B.Tech in Computer Science and Engineering  
Honors in AI and Data Science  
2022–2026

## Private Infrastructure

Operates a private Linux infrastructure lab running more than 20 containers for self-hosted services, AI tooling, reverse-proxy routing, and monitoring. Uses the lab to practice deployment, privacy-aware runtime design, service recovery, and reliability engineering.
