# 🏰 Workforce Pro — The Guild Registry

> *"When medieval manuscript artistry meets modern enterprise intelligence."*

Welcome to **Workforce Pro** — a premium, medieval-themed enterprise workforce management platform tailored for India's tech strongholds. Built with parchment textures, gold filigree accents, and crowned honor ratings — yet powered by modern responsive design and real Indian currency formatting (**₹ INR in Lakhs & Crores**).

---

## ⚔️ Features

### 🏛️ Medieval Guild Aesthetic
- **Parchment scroll cards** with gold filigree borders and ornate typography (Cinzel, Crimson Text, MedievalSharp)
- **Crown-based honor ratings** (👑👑👑👑👑) instead of generic stars
- **Stronghold naming** for tech hubs (Bengaluru Citadel, Hyderabad Fortress, etc.)
- **Guild Hall nomenclature** for departments

### 🌙 Day/Night Theme Toggle
- **Day Mode**: Warm parchment, dark ink text, gold accents
- **Night Mode**: Dark oak/mahogany backgrounds, amber glow
- Torch icon toggle — preference saved to LocalStorage

### 💾 Data Persistence (LocalStorage)
- Employee data survives page refreshes
- Filter and theme preferences are remembered
- "Reset to Original Roster" capability

### 📤 Export to CSV
- One-click "Transcribe to Parchment" export button
- Downloads `guild_registry.csv` with all employee data
- Properly formatted with INR columns

### 🔔 Toast Notifications
- Medieval-styled scroll pop-ups for all CRUD actions
- Auto-dismiss with smooth animations
- Success (green seal), Error (red seal), Info (gold seal) types

### 💰 Indian Currency (₹ INR)
- **Lakhs**: `₹25.6 LPA` for individual salaries
- **Crores**: `₹6.42 Cr` for aggregate payroll totals
- Full INR formatting: `₹25,60,000`

### 📱 Fully Responsive
- **Desktop**: 3-column grid with full navigation
- **Tablet**: 2-column grid with optimized spacing
- **Mobile**: Single-column with hamburger menu and touch-friendly controls
- **Print**: Clean print stylesheet for physical records

---

## 🛠️ How to Launch

Since Workforce Pro is built in pure HTML5, Vanilla CSS3, and ES6 JavaScript — no build tools or npm required!

### Command Prompt (`cmd`):
```cmd
d:
cd "d:\Employee Management System"
start index.html
```

### Windows PowerShell:
```powershell
Set-Location "d:\Employee Management System"
Start-Process index.html
```

*(Or simply double-click **`index.html`** in Windows File Explorer!)*

---

## 🏗️ Project Structure

```
Employee Management System/
├── index.html     # Medieval guild registry layout
├── styles.css     # Parchment design system (day/night themes)
├── app.js         # State engine, CRUD, LocalStorage, export
└── README.md      # This documentation
```

---

## 💡 Customization

Want to add a new guild member? Open **`app.js`** and add a record to `defaultMembers`:

```javascript
{
  id: 126,
  name: 'Neelam Verma',
  email: 'neelam.verma@workforcepro.in',
  location: 'Bengaluru HQ',
  department: 'Artificial Intelligence R&D',
  role: 'Principal Machine Learning Engineer',
  salary: 3200000,
  rating: 4.9
}
```

Or simply use the **"Enlist New Member"** button in the UI — data is saved to LocalStorage automatically!

---

*Crafted with medieval precision, Indian enterprise excellence, and parchment-grade attention to detail.* 🏰⚜️🇮🇳
