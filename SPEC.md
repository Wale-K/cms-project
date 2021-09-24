# WaleCMS Specification

## Phase 1

- Backend
  - Express server
  - Basic CRUD (Create, Read, Update, Delete) for posts
  - ORM for saving/reading data to the database (Prisma) - use SQLite
  - Server side rendering
- Frontend
  - React
  - React Query
  - Custom webpack setup
  - Responsive images
  - Basic editing UI
- Cypress tests

### User Stories for Phase 1

As a user I should be able to:

- View a post
- See a list of posts on the homepage ordered by date created
- See when a post was created
- Create a basic post
  - with plain text
  - with html formatting (bold, italic, etc.)
  - Add an header image to a post
  - Add an inline image to a post
- Edit a post
- Delete a post

## Future Features

- Authentication for editing
- Media embeds
- Tracking/stats
- Seo
- Page templates
- Markdown
