# Master Prompt & General Strategy

## ⭐ The MOST important prompting technique

For all three, use this cycle:

**DON'T:** Build my whole application.

**DO:** Plan → Build → Test → Review → Fix → Continue

Think of AI as a team:

- Product Manager
- ↓
- Architect
- ↓
- Developer
- ↓
- Tester
- ↓
- Code Reviewer
- ↓
- Security Reviewer
- ↓
- You

---

## 🔥 A powerful master prompt

You can also establish rules at the beginning of a project:

> You are my senior software development partner.
>
> I am the product owner and you are assisting me with planning,
> architecture, implementation, testing and debugging.
>
> Rules:
>
> 1. Do not build the entire project in one response.
> 2. Break the project into small milestones.
> 3. Before coding, explain the architecture and plan.
> 4. Implement one component at a time.
> 5. Do not modify unrelated code.
> 6. Preserve existing functionality.
> 7. Before making major architectural changes, explain why.
> 8. After each implementation, explain what changed.
> 9. Provide instructions for testing the change.
> 10. Look for edge cases and errors.
> 11. Prefer simple maintainable solutions over unnecessary complexity.
> 12. Do not invent APIs, libraries or features.
> 13. If requirements are ambiguous, identify the ambiguity before implementation.
> 14. Keep track of the project's current architecture and decisions.
> 15. When debugging, identify the root cause before changing code.
> 16. Never rewrite working code without a reason.
>
> At the end of each milestone, report:
> - Completed
> - Files changed
> - What was tested
> - Known issues
> - Next recommended milestone

This works particularly well with AI coding agents because you're giving the AI a development process rather than just a one-off prompt.

---

## One more important distinction

For **learning**, don't always ask AI to implement things for you. Instead:

> "Teach me how to implement this, give me the steps, let me write it, then review my code."

For **production**, you can be more aggressive:

> "Implement this component, run through the tests, and show me what changed."

That distinction is especially useful for you because you're trying to build real software-development skills, not just generate projects.