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
- [x] Hero sekce s velkou typografií a CTA
- [x] Navigace (sticky, glassmorphism, mobilní hamburger menu)
- [x] Kontaktní lišta pod hero (telefon, adresa, otevírací doba)
- [x] O nás sekce s příběhem a 3 feature ikonami
- [x] Ocenění Orlové Krásy (5 medailí 2024-2026, odkaz na profil)
- [x] Služby & ceník (mechanic invoice styl s dotted leaders)
- [x] Otevírací doba (Po-Pá 14-20, So-Ne zavřeno)
- [x] Galerie (bento grid, 6 obrázků, hover efekty)
- [x] 6 reálných Google recenzí s badge "Ověřeno na Google Maps"
- [x] Funkční odkaz na všechny recenze na Google Maps
- [x] Kontakt (adresa, telefon, sociální sítě, Google Maps)
- [x] Footer s navigací a sociálními odkazy
- [x] Plná responzivita (mobile + desktop)
- [x] SEO: meta tagy, Open Graph, Twitter Cards, JSON-LD BarberShop schema
- [x] **Retro garážový design v3**: Warm dark (#1a1814), vintage teal (#1a9e8f), cream text, Playfair Display serif, stamp borders, barber-stripe patterns, sepia filters
- [x] Testing: 100% pass rate (iteration 1 + 2 + 3)

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
