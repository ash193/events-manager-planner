# 📅 Events Manager Planner

A full-stack event management application that simplifies organizing events, managing invitations, and tracking guest responses.

Built with **Next.js, TypeScript, PostgreSQL, and Prisma**, Events Manager Planner provides a centralized platform for creating events, generating shareable invitation links, and managing RSVPs through an intuitive dashboard.

### 🌐 [Live Demo](https://events-manager-planner.vercel.app)

---

## ✨ Features

### 🔐 Authentication
- Secure user registration and login powered by Neon Auth.
- Cookie-based session management.
- Protected routes and user-specific event access.

### 📅 Event Management
- Create and manage events through a centralized dashboard.
- Store event details, including dates, locations, and descriptions.
- View individual event pages with relevant information and guest activity.

### 🔗 Shareable Invitations
- Generate unique invitation links for individual events.
- Share invitations with guests without requiring them to create accounts.
- Access event details directly through invitation links.

### ✅ RSVP Management
- Allow guests to respond to invitations.
- Support RSVP updates using the same email address.
- Track guest responses and attendance through the event dashboard.

### 📊 Event Dashboard
- View and organize created events.
- Access event-specific details and invitation links.
- Monitor RSVP responses and attendance statistics.

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Frontend | React |
| Styling | Tailwind CSS, shadcn/ui |
| Database | Neon PostgreSQL |
| ORM | Prisma 7 |
| Authentication | Neon Auth |
| Deployment | Vercel |
| Version Control | Git, GitHub |

---

## 🏗️ Architecture

Events Manager Planner uses Next.js App Router with server-side functionality for database operations and authentication.

```text
                    ┌──────────────────────┐
                    │       Frontend       │
                    │   Next.js + React    │
                    │ Tailwind + shadcn/ui │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Next.js Server   │
                    │                      │
                    │   Server Actions     │
                    │   Route Handlers     │
                    │   Auth Middleware    │
                    └──────────┬───────────┘
                               │
                   ┌───────────┴───────────┐
                   │                       │
                   ▼                       ▼
          ┌─────────────────┐    ┌─────────────────┐
          │     Prisma      │    │    Neon Auth    │
          │       ORM       │    │ Authentication  │
          └────────┬────────┘    └─────────────────┘
                   │
                   ▼
          ┌─────────────────┐
          │ Neon PostgreSQL │
          │    Database     │
          └─────────────────┘
```

### Key Implementation Details

- **Server Actions:** Handle event creation, invitation generation, and RSVP submissions.
- **Prisma ORM:** Provides type-safe database access for event and RSVP records.
- **Neon Auth:** Manages authentication, sessions, and protected application routes.
- **Dynamic Routes:** Support event-specific pages and unique invitation URLs.
- **Route Protection:** Restricts dashboard and event management functionality to authenticated users while keeping guest invitation pages publicly accessible.

---

## 🚀 Getting Started

### Prerequisites

Before running the application locally, ensure you have:

- Node.js
- npm
- A Neon PostgreSQL database
- Neon Auth configured for your project

### 1. Clone the Repository

```bash
git clone <https://github.com/ash193/events-manager-planner>
cd events-manager-planner
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root.

```env
DATABASE_URL="your_neon_database_connection_string"

NEON_AUTH_BASE_URL="your_neon_auth_url"
NEON_AUTH_COOKIE_SECRET="your_cookie_secret"

NEXT_PUBLIC_APP_URL="https://localhost:3000"
```

Replace the placeholder values with your own credentials.

> Never commit `.env.local` or other files containing sensitive credentials.

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Configure the Database

Apply existing database migrations:

```bash
npx prisma migrate deploy
```

### 6. Start the Development Server

```bash
npm run dev
```

Open:

**https://localhost:3000**

Local HTTPS is enabled to support secure authentication cookies.

You may need to trust the locally generated development certificate.

---

## 📂 Project Structure

The application follows the Next.js App Router architecture.

```text
events-manager-planner/
├── app/
│   ├── api/
│   │   └── auth/
│   ├── auth/
│   ├── dashboard/
│   ├── events/
│   ├── invite/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   └── ui/
│
├── lib/
│   └── auth/
│
├── prisma/
│   └── schema.prisma
│
├── public/
│
├── proxy.ts
├── package.json
└── README.md
```

---

## 🔄 How It Works

### Event Creation

1. An authenticated user creates an event.
2. The application validates and stores the event information in PostgreSQL.
3. The event becomes accessible through the user's dashboard.

### Invitation Generation

1. The event organizer generates a unique invitation link.
2. The application associates the invitation token with the event.
3. Guests can access the invitation without registering for an account.

### RSVP Submission

1. A guest opens the invitation link.
2. The guest enters their information and RSVP response.
3. The application stores the response in PostgreSQL.
4. Existing responses can be updated using the same email address.
5. The event organizer can review responses through the event dashboard.

---

## 🔒 Security

The application incorporates several authentication and access-control measures:

- Secure session cookies managed by Neon Auth.
- Trusted-origin validation for authentication requests.
- Protected application routes for authenticated users.
- Ownership checks for accessing event management data.
- Environment variables for database credentials and authentication secrets.
- HTTPS support in development and production.

---

## 🗺️ Future Improvements

Potential enhancements include:

- [ ] Email invitations and RSVP confirmations.
- [ ] Event editing and deletion.
- [ ] Guest search, filtering, and attendance management.
- [ ] Calendar integration.
- [ ] Event reminders and notifications.
- [ ] Improved dashboard analytics.
- [ ] Mobile experience enhancements.

---

## 🌐 Deployment

The application is deployed using **Vercel**, with Neon providing managed PostgreSQL and authentication services.

**Live Application:** https://events-manager-planner.vercel.app

---

## 🚧 Status

Events Manager Planner is actively being developed. The core MVP is deployed and functional, featuring event creation, shareable invitations, RSVP management, and a centralized dashboard. Future updates will focus on email notifications, event customization, calendar integration, and enhanced guest management.
