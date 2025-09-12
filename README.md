# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a functional contact form with Supabase database integration and email notifications.

##  Features

- **Modern Design**: Clean, professional UI with dark/light theme support
- **Responsive**: Mobile-first design that works on all devices
- **Multi-language**: Support for multiple languages
- **Contact Form**: Functional contact form with database storage
- **Email Notifications**: Automatic email alerts for new messages
- **Supabase Integration**: Secure database storage for contact messages
- **TypeScript**: Full type safety and better development experience
- **shadcn/ui**: Beautiful, accessible UI components

##  Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Email**: Web3Forms
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

##  Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jeviix/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your actual values in `.env`:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key
   VITE_CONTACT_EMAIL=your_email@example.com
   ```

4. **Set up Supabase database**
   - Create a Supabase project
   - Run the SQL from `supabase-schema.sql` in your Supabase SQL editor
   - Disable RLS for the contact_messages table (see `disable-rls-completely.sql`)

5. **Start development server**
   ```bash
   npm run dev
   ```

##  Database Setup

1. **Create Supabase project** at [supabase.com](https://supabase.com)
2. **Run the database schema**:
   ```sql
   -- Copy and paste the contents of supabase-schema.sql
   ```
3. **Disable RLS** for contact form to work:
   ```sql
   ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;
   ```

##  Email Setup

1. **Get Web3Forms access key** at [web3forms.com](https://web3forms.com)
2. **Add your email** to get the access key
3. **Update environment variables** with your key

##  Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Connect your GitHub repository to Netlify
2. Add environment variables in Netlify dashboard
3. Deploy automatically on every push

### Manual Deployment
```bash
npm run build
# Upload the dist folder to your hosting provider
```

##  Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Yes |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anon key | Yes |
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms access key for emails | Yes |
| `VITE_CONTACT_EMAIL` | Your email address | Yes |

##  Project Structure

```
src/
 components/          # React components
    ui/             # shadcn/ui components
    Contact.tsx     # Contact form component
 lib/                # Utility functions
    supabase.ts     # Supabase client
 context/            # React context
 hooks/              # Custom hooks
 i18n/               # Internationalization
 pages/              # Page components
```

##  Customization

- **Colors**: Update `tailwind.config.ts` for custom color scheme
- **Content**: Edit `src/i18n/translations.ts` for text content
- **Images**: Replace images in `src/assets/`
- **Styling**: Modify components in `src/components/`

##  License

This project is open source and available under the [MIT License](LICENSE).

##  Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Jeviix/portfolio-website/issues).

##  Contact

- **Email**: alieddardoury@gmail.com
- **GitHub**: [@Jeviix](https://github.com/Jeviix)
- **Portfolio**: [Your Portfolio URL]

---

 Star this repository if you found it helpful!
