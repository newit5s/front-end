# AI Agent Instructions

## 🤖 For Antigravity / AI Assistants

This repository contains a dedicated context directory `.ai_context` to maintain state and continuity across different sessions and machines.

### 🚨 MANDATORY PROTOCOL

When starting a session in this codebase, you **MUST**:

1.  **READ** `frontend/.ai_context/project_status.md` to get a high-level understanding of the architecture, tech stack, and recent work.
2.  **READ** `frontend/.ai_context/task.md` to identify the current active tasks and the roadmap.

### 🔄 UPDATE PROTOCOL

Before finishing a significant task or ending a session, you **MUST**:

1.  **UPDATE** `frontend/.ai_context/task.md`:
    *   Mark completed items with `[x]`.
    *   Add new items if pending work is discovered.
2.  **UPDATE** `frontend/.ai_context/project_status.md`:
    *   If you added a new feature module, add it to the "Completed Work" section.
    *   If you changed a core architectural decision (e.g., switched libraries), update the "Context" section.

### 📁 Directory Structure
- `frontend/src`: Source code.
- `frontend/.ai_context`: AI memory files.
- `public`: Static assets.

*Designed to allow seamless handoff between AI sessions.*
