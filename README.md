# Resin Artistry — Custom Resin Art Ordering Demo

A polished MVP demo for a custom resin artwork ordering website, built with **Next.js 14 (App Router)**, **React**, and **Tailwind CSS**.

## ✨ Features

- **Home Page** — Hero section + 3 product cards (Wedding, Baby Memory, Name Board)
- **Customization Page** — Full form with size, color, name engraving, date, image uploads, and special instructions
- **Dynamic Price Calculator** — Real-time price updates in a sticky sidebar
- **Order Summary Page** — Full review with uploaded image previews
- **Order Success Page** — Confirmation with order number and next-steps guide
- **Global State** — React Context (no backend required)
- **Mobile Responsive** — Fully responsive design

## 🎨 Design

Luxury artisan aesthetic with:
- **Playfair Display** (serif) + **DM Sans** typography
- Warm cream, deep charcoal, and burnished gold palette
- Smooth entrance animations and hover effects
- Step progress indicator in navbar

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
/app
  page.tsx              → Home (product selection)
  /customize/page.tsx   → Customization form
  /summary/page.tsx     → Order review
  /success/page.tsx     → Confirmation

/components
  Navbar.tsx            → Sticky nav with step indicator
  ProductCard.tsx       → Product selection cards
  CustomizationForm.tsx → Full customization form
  PriceCalculator.tsx   → Live price breakdown
  OrderSummary.tsx      → Order review display

/lib
  OrderContext.tsx      → Global state management
```

## 💰 Pricing Logic

| Item | Price |
|------|-------|
| Base Price | ₹3,000 |
| Medium Size | +₹1,000 |
| Large Size | +₹2,000 |
| Name Engraving | +₹300 |

## 📱 Demo Flow

1. **Home** → Click "Customize Now" on any product
2. **Customize** → Fill in details, upload photos, see live price
3. **Review** → Verify all order details
4. **Success** → Order confirmed with order number


in admin panel client can add the dynamic qn to each product and budget setting and AI chat bot for speaking to client 
