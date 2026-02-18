# Photography Portfolio Website

A modern, responsive photography portfolio website built with HTML, CSS, and JavaScript. Features minimalist design, immersive galleries, and professional presentation of photography work.

## Features

### Design Principles

-  **Minimalist Layouts**: Clean, uncluttered designs with plenty of whitespace
-  **Immersive Galleries**: Full-screen slideshows, lightbox effects, and grid layouts
-  **Consistent Branding**: Unified fonts, colors, and visual identity
-  **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
-  **Interactive Elements**: Subtle animations, hover effects, and smooth transitions

### Required Standards

- **High-Resolution Images**: Optimized for fast loading while maintaining quality
- **Accessibility Compliance**: Alt text, readable fonts, proper contrast ratios (WCAG standards)
- **Fast Performance**: Lazy loading, optimized image delivery
- **SEO-Friendly**: Metadata, captions, keyword-rich descriptions
- **Clear Navigation**: Simple menus for easy exploration
- **Client-Focused Features**: Contact forms, booking options, testimonials, pricing

### Extra Features

- **Storytelling**: Project descriptions and narratives
- **Blog Section**: Photography tips, behind-the-scenes stories, project updates
- **Social Media Integration**: Links to Instagram, Facebook, Twitter
- **E-commerce Ready**: Structure for selling prints, presets, or workshops

## Structure

### Pages

1. **Homepage** (`index.html`)
   - Hero image slider with auto-rotation
   - Quick navigation to portfolio categories
   - Featured work section
   - Call-to-action sections

2. **Portfolio** (`portfolio.html`)
   - Category filters (Weddings, Portraits, Fashion, Commercial, Events, Nature)
   - Responsive grid gallery
   - Lightbox functionality for full-screen viewing
   - URL parameter support for direct category links

3. **About** (`about.html`)
   - Photographer's story and philosophy
   - Professional credentials and awards
   - Client testimonials
   - Personal branding

4. **Services** (`services.html`)
   - Detailed service packages with pricing
   - Wedding, Portrait, Event, Commercial, and Fashion photography
   - Additional services (retouching, prints, video, workshops)
   - Booking call-to-action

5. **Contact** (`contact.html`)
   - Contact form with validation
   - Contact information (email, phone, location, hours)
   - Social media links
   - Map placeholder (ready for Google Maps integration)

6. **Blog** (`blog.html`)
   - Blog post grid layout
   - Category tags
   - Pagination
   - Newsletter subscription form

## File Structure

photography/
├── index.html              # Homepage
├── portfolio.html          # Portfolio gallery
├── about.html              # About page
├── services.html           # Services and pricing
├── contact.html            # Contact form
├── blog.html               # Blog section
├── css/
│   ├── style.css          # Main stylesheet
│   ├── portfolio.css      # Portfolio-specific styles
│   ├── about.css          # About page styles
│   ├── services.css       # Services page styles
│   ├── contact.css        # Contact page styles
│   └── blog.css           # Blog page styles
├── js/
│   └── main.js            # Main JavaScript functionality
├── hero-img/              # Hero slider images
├── wedding/               # Wedding photography
├── portrait/              # Portrait photography
├── fashion/               # Fashion photography
├── commercial/            # Commercial photography
├── event/                 # Event photography
└── nature/                # Nature photography

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, Grid, Flexbox
- **JavaScript**: Vanilla JS for interactivity
- **Google Fonts**: Playfair Display (headings) and Inter (body)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Lazy loading for images
- Optimized CSS with minimal dependencies
- Efficient JavaScript with event delegation
- Responsive images
- Smooth animations with CSS transitions

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text for all images
- Proper heading hierarchy
- Reduced motion support

## Customization

### Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2c2c2c;
    --accent-color: #d4af37;
    --secondary-color: #f5f5f5;
}
```

### Fonts

Change fonts in the HTML `<head>` section and CSS variables.

### Images

Replace images in respective folders:

- `hero-img/` - Hero slider images
- Category folders - Portfolio images

### Content

Update text content directly in HTML files.

## Setup Instructions

1. **Clone or download** the project files
2. **Add your images** to the respective folders
3. **Update content** in HTML files (text, contact info, etc.)
4. **Customize colors/fonts** in CSS files if desired
5. **Test** on different devices and browsers
6. **Deploy** to your web hosting service

## Google Maps Integration

To add Google Maps to the contact page:

1. Go to [Google Maps Platform](https://developers.google.com/maps)
2. Get an API key
3. Replace the map placeholder in `contact.html` with:

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE" 
    width="100%" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

## Form Submission

The contact form currently uses client-side validation. To enable form submission:

1. Set up a backend service (PHP, Node.js, etc.)
2. Update the form action in `contact.html`
3. Configure email sending or database storage

Alternatively, use a service like:

- Formspree
- Netlify Forms
- EmailJS

## SEO Optimization

- Meta descriptions and keywords included
- Semantic HTML structure
- Alt text for images
- Proper heading hierarchy
- Clean URL structure

## Future Enhancements

- Backend integration for contact forms
- Blog CMS integration
- E-commerce functionality
- Client portal for viewing galleries
- Booking calendar integration
- Print ordering system

## License

This project is open source and available for personal and commercial use.

## Support

For questions or issues, please contact through the website's contact form.

Built with ❤️ by Amon Wanyonyi for photographers who want to showcase their work beautifully.
