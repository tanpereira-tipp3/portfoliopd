# How to Add Projects to Your Portfolio

## Current Setup (Fastest - TypeScript)

Projects are stored in `data/projects.ts`. To add a new project:

1. Open `data/projects.ts`
2. Add a new project object to the `projects` array:

```typescript
{
  slug: "my-new-project",  // URL-friendly name (e.g., "ai-dashboard-2024")
  title: "MY PROJECT TITLE",
  tags: ["SaaS", "AI"],  // Array of tags
  date: "Dec 2024",
  role: "UX/UI Designer",
  duration: "3 months",
  client: "Client Name",
  tools: "Figma, Miro, React",
  overview: "Brief overview of the project...",
  challenge: "What problem were you solving?",
  roleDescription: "Your role and responsibilities...",
  process: {
    dataExploration: "Optional process step description",
    informationArchitecture: "Another process step",
    // Add as many process steps as needed
  },
  solution: [
    "Solution point 1",
    "Solution point 2",
    "Solution point 3",
  ],
  impact: [
    "Impact metric 1",
    "Impact metric 2",
  ],
  images: {
    main: "/path-to-main-image.png",  // Main project image
    beforeProcess: "/before.png",  // Optional
    process: "/process.png",  // Optional
    dashboards: "https://figma.com/...",  // Optional
    solution: "/solution.png",  // Optional
  },
}
```

3. Save the file - the project will automatically appear on the Work page!

## Alternative: JSON File (Easier to Edit)

If you prefer JSON (easier to edit, can be swapped for CMS later):

1. Create `data/projects.json` with your projects
2. Update `data/projects.ts` to import from JSON
3. Same structure, just JSON format

## CMS Options (For Non-Technical Users)

### Option 1: Contentful (Recommended)
- Free tier available
- Visual editor
- API-based
- Easy to integrate

### Option 2: Sanity
- Free tier
- Great developer experience
- Real-time preview

### Option 3: Notion as CMS
- Free
- Use Notion API
- Familiar interface

### Option 4: Markdown Files
- Store projects as `.md` files
- Easy to edit
- Version controlled
- Can use frontmatter for metadata

## Quick Start: Add Your First Project

1. Copy the existing project in `data/projects.ts`
2. Change the `slug` to something unique
3. Update all the content
4. Add your images to `/public` folder or use Figma URLs
5. Save and refresh!

The project will automatically:
- Appear on the Work page
- Be accessible at `/work/your-slug`
- Use the same template as existing projects


