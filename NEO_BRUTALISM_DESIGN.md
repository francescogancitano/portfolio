# Neo-Brutalism Portfolio Design Brief

## Design Philosophy
**Raw, Bold, Unapologetic** — Abbandoniamo la perfezione per l'autenticità. Neo-Brutalism celebra l'imperfetto, il grezzo, il diretto.

## Core Principles

### 1. Typography as Architecture
- **Headline Font**: Grotesk Bold, oversized, sometimes broken across lines
- **Body**: Monospace (IBM Plex Mono) per un'estetica tech-raw
- **Hierarchy**: Dimensioni estreme (12px → 120px), no midtones
- **Text Rotation**: Alcuni elementi ruotati 90° o -5° per asimmetria

### 2. Color Palette
- **Primary**: Nero puro (#000000) + Bianco (#FFFFFF)
- **Accent**: Giallo acceso (#FFD700) o Rosso (#FF0000) — high contrast
- **Secondary**: Grigio scuro (#1A1A1A), Grigio chiaro (#F5F5F5)
- **Borders**: Spessi, visibili, 2-4px solid black

### 3. Layout Strategy
- **Anti-Grid**: Rifiuta il grid perfetto. Elementi offset, overlapping, asimmetrici
- **Whitespace**: Generoso ma irregolare — non centrato
- **Staggered Navigation**: Menu items in posizioni diverse, non allineate
- **Diagonal Elements**: Clip-path, rotazioni, angoli non standard

### 4. Components Philosophy
- **Buttons**: Grandi, rettangolari, con bordi spessi, testo ALL CAPS
- **Cards**: Bordi neri spessi, nessun shadow, background bianco/nero alternato
- **Dividers**: Linee nere spesse, non sottili
- **Icons**: Semplici, lineari, 2px stroke

### 5. Micro-interactions
- **Hover**: Invert colors (nero → bianco, bianco → nero)
- **Click**: Offset/translate effect, no smooth transitions
- **Scroll**: Parallax brutale, elementi che si spostano in blocchi
- **Transitions**: Snappy, 150ms max, easing: cubic-bezier(0, 0, 0, 1)

### 6. Header Innovation
- **No Traditional Nav**: Posizionamento creativo, forse verticale, forse diagonale
- **Logo**: Grande, audace, forse ruotato
- **CTA Button**: Posizionato inaspettatamente (angolo, centro, lato)
- **Responsive**: Cambia radicalmente su mobile

### 7. Page Layouts
- **Home**: Hero asimmetrico, testo sovrapposto a immagini, layout rotto
- **About**: Testo a colonna singola larga, foto grande e asimmetrica
- **Experiences**: Timeline verticale rotta, elementi offset
- **Certificates**: Grid irregolare, non uniforme
- **Contact**: Form asimmetrico, label sopra/sotto/accanto casualmente

### 8. Visual Hierarchy
- **Contrast First**: Alto contrasto, niente sfumature
- **Size Variation**: Estrema (titoli enormi, body piccolo)
- **Density**: Alternanza tra sezioni dense e vuote

## Implementation Strategy
1. Aggiornare index.css con colori neo-brutalism
2. Ricreare Header con navigazione creativa
3. Redesign tutte le pagine con layout asimmetrici
4. Aggiungere animazioni snappy e micro-interazioni
5. Test responsive con approccio brutale (no smooth scaling)
