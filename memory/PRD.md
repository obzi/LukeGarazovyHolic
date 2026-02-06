# Luke-holič z garáže — PRD

## Problem Statement
Vytvořit moderní responzivní webovou prezentaci pro barbershop "Luke-holič z garáže" v Brně s retro garážovým designem.

## Architecture
- **Frontend**: React + Tailwind CSS (single page landing)
- **Backend**: FastAPI (minimální, zatím nepoužívaný)
- **Fonts**: Oswald (headings), Montserrat (body)
- **Design**: Dark mode, retro garage industrial, amber accent

## User Personas
- Muži v Brně hledající kvalitní holičské služby
- Milovníci rock/blues atmosféry
- Lidé oceňující osobní přístup

## Core Requirements
- Prezentační web barbershopu v češtině
- Retro garážový design (tmavý, amber akcenty)
- Responzivní (desktop + mobile)
- Sekce: Hero, O nás, Služby, Otevírací doba, Galerie, Recenze, Kontakt, Footer

## What's Been Implemented (2026-02-06)
- [x] Hero sekce s reálnou fotkou z holičství
- [x] Navigace (sticky, glassmorphism, mobilní hamburger menu)
- [x] Kontaktní lišta pod hero (telefon, adresa, otevírací doba)
- [x] O nás sekce s reálnou fotkou interiéru
- [x] Ocenění Orlové Krásy (5 medailí 2024-2026)
- [x] Služby & ceník
- [x] Otevírací doba (Po-Pá 14-20)
- [x] Galerie s 6 reálnými fotkami z Google Maps (staženy lokálně)
- [x] 6 reálných Google recenzí s badge "Ověřeno na Google Maps"
- [x] Kontakt (adresa s odkazem na mapy, telefon, sociální sítě, Google Maps embed)
- [x] SVG favicon s nůžkami
- [x] SEO: meta tagy, Open Graph, Twitter Cards, JSON-LD BarberShop schema
- [x] **Retro garážový design v5**: Alfa Slab One headings + Lora serif body, barber blue (#1586a5), warm dark, stamp borders, barber-stripe, Playfair Display italic
- [x] Testing: 98-100% pass rate (iterace 1-5)

## Business Info
- **Název**: Luke-holič z garáže
- **Adresa**: Skácelova 2057/23, 612 00 Brno-Královo Pole
- **Telefon**: +420 737 553 735
- **Hodiny**: Po-Pá 14:00-20:00
- **Instagram**: @luke_holic_z_garaze
- **Facebook**: /lukeholiczgaraze
- **Rating**: 5.0/5 (46+ recenzí)

## Backlog
- P1: Online rezervační systém (Booksy/Reservio integrace)
- P1: SEO optimalizace (meta tagy, Open Graph, structured data)
- P2: Galerie z reálných fotek z Instagramu (Instagram API)
- P2: Kontaktní formulář
- P3: Blog/novinky sekce
