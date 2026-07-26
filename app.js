/**
 * ============================================================================
 * WORKFORCE PRO — THE GUILD REGISTRY
 * Medieval-Themed Enterprise Management Suite
 * Features: LocalStorage, Toast Notifications, CSV Export, Day/Night Toggle
 * ============================================================================
 */

// ==========================================
// 1. GUILD MEMBERS DATABASE (Indian Currency INR & Strongholds)
// ==========================================
const defaultMembers = [
  { id: 101, name: 'Dr. Aarav Sharma', email: 'aarav.sharma@workforcepro.in', location: 'Bengaluru HQ', department: 'Artificial Intelligence R&D', role: 'Chief AI Scientist & Director', salary: 4500000, rating: 4.9, joinDate: '2020-03-15', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80', skills: ['LLM Architecture', 'Neural Networks', 'Python', 'AI Strategy'] },
  { id: 102, name: 'Priya Nair', email: 'priya.nair@workforcepro.in', location: 'Bengaluru HQ', department: 'Infrastructure & Core Eng', role: 'VP of Cloud Infrastructure', salary: 3800000, rating: 4.8, joinDate: '2019-07-22', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80', skills: ['Kubernetes', 'Distributed Systems', 'AWS Mesh', 'Go'] },
  { id: 103, name: 'Rohan Verma', email: 'rohan.verma@workforcepro.in', location: 'Hyderabad Tech Park', department: 'Infrastructure & Core Eng', role: 'Principal Security Lead', salary: 3200000, rating: 4.7, joinDate: '2020-09-04', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', skills: ['Cybersecurity', 'Rust', 'Network Mesh', 'Zero-Trust'] },
  { id: 104, name: 'Ananya Patel', email: 'ananya.patel@workforcepro.in', location: 'Pune Innovation Center', department: 'Product Experience & UX', role: 'Principal Design Architect', salary: 2600000, rating: 4.9, joinDate: '2021-01-11', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80', skills: ['Design Systems', 'UI/UX Design', 'Figma', 'Motion Design'] },
  { id: 105, name: 'Vikramaditya Rao', email: 'vikram.rao@workforcepro.in', location: 'Gurugram Cyber City', department: 'Executive Leadership', role: 'Chief Financial Officer (CFO)', salary: 4800000, rating: 5.0, joinDate: '2018-02-12', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80', skills: ['Capital Allocation', 'INR Treasury', 'Corporate Governance', 'M&A'] },
  { id: 106, name: 'Sneha Kulkarni', email: 'sneha.kulkarni@workforcepro.in', location: 'Bengaluru HQ', department: 'Artificial Intelligence R&D', role: 'Lead Autonomous Systems Eng', salary: 3400000, rating: 4.8, joinDate: '2021-11-08', avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80', skills: ['Multi-Agent AI', 'Reinforcement Learning', 'PyTorch', 'C++'] },
  { id: 107, name: 'Karthik Iyer', email: 'karthik.iyer@workforcepro.in', location: 'Hyderabad Tech Park', department: 'Infrastructure & Core Eng', role: 'Senior Database Engine Lead', salary: 2800000, rating: 4.6, joinDate: '2021-05-14', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', skills: ['BigQuery', 'Postgres Internals', 'Query Profiling', 'Spanner'] },
  { id: 108, name: 'Meera Deshmukh', email: 'meera.deshmukh@workforcepro.in', location: 'Mumbai FinTech Hub', department: 'Global Brand Marketing', role: 'Head of Global Marketing', salary: 2900000, rating: 4.7, joinDate: '2020-12-05', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80', skills: ['Brand Strategy', 'Growth Marketing', 'Product Positioning', 'Analytics'] },
  { id: 109, name: 'Aditya Mathur', email: 'aditya.mathur@workforcepro.in', location: 'Gurugram Cyber City', department: 'Artificial Intelligence R&D', role: 'Senior Generative AI Scientist', salary: 3100000, rating: 4.7, joinDate: '2022-02-19', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80', skills: ['Transformers', 'LLM Tuning', 'CUDA Optimization', 'Python'] },
  { id: 110, name: 'Tanvi Shah', email: 'tanvi.shah@workforcepro.in', location: 'Mumbai FinTech Hub', department: 'Executive Leadership', role: 'Chief Human Resources Officer', salary: 4200000, rating: 4.9, joinDate: '2019-10-01', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80', skills: ['Talent Architecture', 'Leadership Development', 'Workforce Psychology', 'HR AI'] },
  { id: 111, name: 'Arjun Nambiar', email: 'arjun.nambiar@workforcepro.in', location: 'Bengaluru HQ', department: 'Infrastructure & Core Eng', role: 'Staff SRE Architect', salary: 3000000, rating: 4.7, joinDate: '2021-03-25', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80', skills: ['Chaos Engineering', 'Terraform', 'Multi-Region Failover', 'Linux'] },
  { id: 112, name: 'Kavita Reddy', email: 'kavita.reddy@workforcepro.in', location: 'Hyderabad Tech Park', department: 'Product Experience & UX', role: 'Senior UX Researcher', salary: 2200000, rating: 4.5, joinDate: '2022-08-30', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80', skills: ['Cognitive Telemetry', 'User Testing', 'Ergonomic Research', 'Statistics'] },
  { id: 113, name: 'Siddharth Menon', email: 'siddharth.menon@workforcepro.in', location: 'Bengaluru HQ', department: 'Artificial Intelligence R&D', role: 'Principal Quantum ML Lead', salary: 3600000, rating: 4.9, joinDate: '2020-06-08', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80', skills: ['Quantum Computing', 'Qiskit', 'Tensor Networks', 'Applied Physics'] },
  { id: 114, name: 'Rhea Banerjee', email: 'rhea.banerjee@workforcepro.in', location: 'Pune Innovation Center', department: 'Product Experience & UX', role: 'Lead Interactive UI Eng', salary: 2500000, rating: 4.8, joinDate: '2022-06-12', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80', skills: ['WebGL', 'Three.js', 'Smooth Motion CSS', 'Frontend Arch'] },
  { id: 115, name: 'Pranav Joshi', email: 'pranav.joshi@workforcepro.in', location: 'Pune Innovation Center', department: 'Infrastructure & Core Eng', role: 'Senior DevSecOps Lead', salary: 2700000, rating: 4.6, joinDate: '2022-10-14', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80', skills: ['Docker', 'CI/CD Pipelines', 'Security Scanner', 'Python'] },
  { id: 116, name: 'Divya Malhotra', email: 'divya.malhotra@workforcepro.in', location: 'Gurugram Cyber City', department: 'Global Brand Marketing', role: 'Director of Developer Relations', salary: 2800000, rating: 4.8, joinDate: '2021-04-12', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80', skills: ['DevRel', 'Community Building', 'Keynote Speaking', 'Content'] },
  { id: 117, name: 'Nikhil Saxena', email: 'nikhil.saxena@workforcepro.in', location: 'Hyderabad Tech Park', department: 'Artificial Intelligence R&D', role: 'Senior Robotics Scientist', salary: 3000000, rating: 4.6, joinDate: '2021-09-17', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80', skills: ['Embodied AI', 'Spatial Robotics', 'Sensor Fusion', 'C++'] },
  { id: 118, name: 'Ishita Kapoor', email: 'ishita.kapoor@workforcepro.in', location: 'Mumbai FinTech Hub', department: 'Executive Leadership', role: 'Chief Legal & Compliance Officer', salary: 4100000, rating: 4.9, joinDate: '2019-05-20', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80', skills: ['India Labor Law', 'IP Rights', 'AI Ethics Policy', 'Governance'] },
  { id: 119, name: 'Varun Singhania', email: 'varun.singhania@workforcepro.in', location: 'Bengaluru HQ', department: 'Product Experience & UX', role: 'Principal Frontend Platform Lead', salary: 2900000, rating: 4.8, joinDate: '2020-08-11', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80', skills: ['Vanilla ES6', 'Performance Tuning', 'WebAssembly', 'DOM'] },
  { id: 120, name: 'Pooja Agarwal', email: 'pooja.agarwal@workforcepro.in', location: 'Gurugram Cyber City', department: 'Artificial Intelligence R&D', role: 'AI Safety Specialist', salary: 2600000, rating: 4.8, joinDate: '2022-03-03', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', skills: ['AI Alignment', 'Red Teaming', 'Model Evaluation', 'Ethics'] },
  { id: 121, name: 'Yashwardhan Chauhan', email: 'yash.chauhan@workforcepro.in', location: 'Bengaluru HQ', department: 'Infrastructure & Core Eng', role: 'Chief Enterprise Cloud Architect', salary: 3900000, rating: 4.8, joinDate: '2018-11-15', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80', skills: ['Multi-Cloud Mesh', 'High Availability', 'Enterprise Design', 'Scaling'] },
  { id: 122, name: 'Sonam Norbu', email: 'sonam.norbu@workforcepro.in', location: 'Hyderabad Tech Park', department: 'Infrastructure & Core Eng', role: 'Staff Database Architect', salary: 3100000, rating: 4.7, joinDate: '2021-07-28', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80', skills: ['Spanner Mesh', 'Postgres', 'Replication', 'Distributed Consensus'] },
  { id: 123, name: 'Ritu Gupta', email: 'ritu.gupta@workforcepro.in', location: 'Gurugram Cyber City', department: 'Global Brand Marketing', role: 'Principal Brand Experience Architect', salary: 2400000, rating: 4.7, joinDate: '2023-01-09', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80', skills: ['Digital Experience', 'Brand Positioning', 'Content Strategy', 'UX'] },
  { id: 124, name: 'Devendra Rathore', email: 'devendra.rathore@workforcepro.in', location: 'Pune Innovation Center', department: 'Product Experience & UX', role: 'Senior Accessibility Architect', salary: 2300000, rating: 4.7, joinDate: '2022-11-21', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', skills: ['WCAG AAA', 'Inclusive UI', 'Screen Readers', 'ARIA'] },
  { id: 125, name: 'Samir Ghosh', email: 'samir.ghosh@workforcepro.in', location: 'Bengaluru HQ', department: 'Artificial Intelligence R&D', role: 'Senior Computer Vision Scientist', salary: 3300000, rating: 4.7, joinDate: '2021-06-15', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80', skills: ['Computer Vision', 'OpenCV', 'PyTorch', 'Image Segmentation'] }
];

// ==========================================
// 2. LOCAL STORAGE PERSISTENCE
// ==========================================
function loadFromStorage() {
  try {
    const saved = localStorage.getItem('workforcepro_members');
    return saved ? JSON.parse(saved) : null;
  } catch { return null; }
}

function saveToStorage() {
  try {
    localStorage.setItem('workforcepro_members', JSON.stringify(state.employees));
  } catch { /* storage full or disabled */ }
}

function loadTheme() {
  return localStorage.getItem('workforcepro_theme') || 'day';
}

function saveTheme(theme) {
  localStorage.setItem('workforcepro_theme', theme);
}

// ==========================================
// 3. GLOBAL STATE
// ==========================================
const state = {
  employees: loadFromStorage() || [...defaultMembers],
  currentTab: 'employees-tab',
  viewMode: 'grid',
  searchQuery: '',
  filterLocation: 'ALL',
  filterDept: 'ALL',
  filterMaxSalary: 100000000,
  sortBy: 'name',
  currentPage: 1,
  pageSize: 9,
  editingEmpId: null,
  theme: loadTheme()
};

// ==========================================
// 4. CURRENCY HELPERS (₹ INR Lakhs & Crores)
// ==========================================
function formatINRLakhs(amount) {
  return `₹${(amount / 100000).toFixed(1)} LPA`;
}

function formatINRCrores(amount) {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
  return formatINRLakhs(amount);
}

function formatINRFull(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

// ==========================================
// 5. TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const icons = {
    success: 'fa-solid fa-check',
    error: 'fa-solid fa-triangle-exclamation',
    info: 'fa-solid fa-scroll'
  };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon"><i class="${icons[type] || icons.info}"></i></div>
    <span>${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()"><i class="fa-solid fa-xmark"></i></button>
  `;

  container.appendChild(toast);

  // Auto-remove after animation
  setTimeout(() => {
    if (toast.parentElement) toast.remove();
  }, 4000);
}

// ==========================================
// 6. CSV EXPORT
// ==========================================
function exportToCSV() {
  const headers = ['Name', 'Email', 'Stronghold', 'Guild Hall', 'Title', 'Annual Bounty (INR)', 'Honor Rating', 'Sworn Since'];
  const rows = state.employees.map(e => [
    e.name,
    e.email,
    e.location,
    e.department,
    e.role,
    e.salary,
    e.rating,
    e.joinDate
  ]);

  let csv = headers.join(',') + '\n';
  rows.forEach(row => {
    csv += row.map(val => `"${val}"`).join(',') + '\n';
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'guild_registry.csv';
  link.click();
  URL.revokeObjectURL(url);

  showToast('Export successful! Your roster (.csv) is downloading now.', 'success');
}

// ==========================================
// 7. DAY/NIGHT THEME TOGGLE
// ==========================================
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.querySelector('#theme-toggle i');
  if (icon) {
    icon.className = theme === 'night' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  }
  state.theme = theme;
  saveTheme(theme);
}

function toggleTheme() {
  const newTheme = state.theme === 'day' ? 'night' : 'day';
  applyTheme(newTheme);
  showToast(newTheme === 'night' ? '🌙 Night mode activated. Torches dimmed!' : '☀️ Day mode restored. Bright and sunny!', 'info');
}

// ==========================================
// 8. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(state.theme);
  initNavigation();
  initSearchAndFilters();
  initHubsFilter();
  initViewToggle();
  initPagination();
  initModals();
  initExport();
  initHamburger();
  renderAll();
});

function initNavigation() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const tabId = item.getAttribute('data-tab');
      state.currentTab = tabId;
      document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
      document.getElementById(tabId).classList.add('active');
      if (tabId === 'departments-tab') renderDepartments();
      if (tabId === 'reports-tab') renderReports();
      // Close mobile menu after selection
      document.getElementById('nav-links').classList.remove('mobile-open');
      document.getElementById('hamburger').classList.remove('active');
    });
  });
}

function initSearchAndFilters() {
  document.getElementById('search-input').addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    state.currentPage = 1;
    renderEmployees();
  });

  document.getElementById('filter-dept').addEventListener('change', (e) => {
    state.filterDept = e.target.value;
    state.currentPage = 1;
    renderEmployees();
  });

  document.getElementById('filter-salary').addEventListener('change', (e) => {
    state.filterMaxSalary = Number(e.target.value);
    state.currentPage = 1;
    renderEmployees();
  });

  document.getElementById('sort-by').addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderEmployees();
  });

  document.getElementById('btn-reset-filters').addEventListener('click', resetFilters);
  document.getElementById('btn-empty-reset').addEventListener('click', resetFilters);
}

function initHubsFilter() {
  document.querySelectorAll('.hub-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.hub-card').forEach(c => c.classList.remove('active-hub'));
      card.classList.add('active-hub');
      const loc = card.getAttribute('data-location');
      state.filterLocation = loc;
      state.currentPage = 1;
      const label = document.getElementById('active-hub-label');
      label.textContent = loc === 'ALL' ? 'All Strongholds' : `Filtered: ${loc.split(' ')[0]}`;
      renderEmployees();
    });
  });
}

function resetFilters() {
  state.searchQuery = '';
  state.filterLocation = 'ALL';
  state.filterDept = 'ALL';
  state.filterMaxSalary = 100000000;
  state.sortBy = 'name';
  state.currentPage = 1;
  document.getElementById('search-input').value = '';
  document.getElementById('filter-dept').value = 'ALL';
  document.getElementById('filter-salary').value = 10000000;
  document.getElementById('sort-by').value = 'name';
  document.getElementById('active-hub-label').textContent = 'All Strongholds';
  document.querySelectorAll('.hub-card').forEach((c, i) => c.classList.toggle('active-hub', i === 0));
  renderEmployees();
}

function initViewToggle() {
  const btnGrid = document.getElementById('btn-grid-view');
  const btnTable = document.getElementById('btn-table-view');
  btnGrid.addEventListener('click', () => {
    state.viewMode = 'grid';
    btnGrid.classList.add('active');
    btnTable.classList.remove('active');
    document.getElementById('employees-grid-container').style.display = 'grid';
    document.getElementById('employees-table-container').style.display = 'none';
  });
  btnTable.addEventListener('click', () => {
    state.viewMode = 'table';
    btnTable.classList.add('active');
    btnGrid.classList.remove('active');
    document.getElementById('employees-grid-container').style.display = 'none';
    document.getElementById('employees-table-container').style.display = 'block';
  });
}

function initPagination() {
  document.getElementById('btn-prev').addEventListener('click', () => {
    if (state.currentPage > 1) { state.currentPage--; renderEmployees(); }
  });
  document.getElementById('btn-next').addEventListener('click', () => {
    const totalPages = Math.ceil(getFilteredEmployees().length / state.pageSize);
    if (state.currentPage < totalPages) { state.currentPage++; renderEmployees(); }
  });
}

function initModals() {
  const empModal = document.getElementById('employee-modal');
  const detailsModal = document.getElementById('details-modal');
  document.getElementById('btn-open-add-modal').addEventListener('click', () => openEmployeeModal());
  document.getElementById('btn-close-modal').addEventListener('click', () => empModal.classList.remove('active'));
  document.getElementById('btn-cancel-modal').addEventListener('click', () => empModal.classList.remove('active'));
  document.getElementById('btn-close-details').addEventListener('click', () => detailsModal.classList.remove('active'));
  document.getElementById('employee-form').addEventListener('submit', (e) => { e.preventDefault(); saveEmployee(); });
  window.addEventListener('click', (e) => {
    if (e.target === empModal) empModal.classList.remove('active');
    if (e.target === detailsModal) detailsModal.classList.remove('active');
  });
}

function initExport() {
  document.getElementById('btn-export-csv').addEventListener('click', exportToCSV);
}

function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('mobile-open');
  });
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
}

// ==========================================
// 9. FILTERING & SORTING PIPELINE
// ==========================================
function getFilteredEmployees() {
  return state.employees.filter(emp => {
    const q = state.searchQuery;
    const matchQuery = !q ||
      emp.name.toLowerCase().includes(q) ||
      emp.email.toLowerCase().includes(q) ||
      emp.role.toLowerCase().includes(q) ||
      emp.department.toLowerCase().includes(q);
    const matchLoc = state.filterLocation === 'ALL' || emp.location === state.filterLocation;
    const matchDept = state.filterDept === 'ALL' || emp.department === state.filterDept;
    const matchSalary = emp.salary <= state.filterMaxSalary;
    return matchQuery && matchLoc && matchDept && matchSalary;
  }).sort((a, b) => {
    if (state.sortBy === 'name') return a.name.localeCompare(b.name);
    if (state.sortBy === 'salary' || state.sortBy === 'rating') return b[state.sortBy] - a[state.sortBy];
    if (state.sortBy === 'joinDate') return new Date(a.joinDate) - new Date(b.joinDate);
    return 0;
  });
}

// ==========================================
// 10. CROWN RATING GENERATOR
// ==========================================
function getCrowns(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.3;
  let html = '';
  for (let i = 0; i < full; i++) html += '<i class="fa-solid fa-crown crown-icon"></i>';
  if (half) html += '<i class="fa-solid fa-crown crown-icon" style="opacity:0.45;"></i>';
  return html;
}

// Stronghold name mapping
function getStrongholdName(location) {
  const map = {
    'Bengaluru HQ': 'Bengaluru Citadel',
    'Hyderabad Tech Park': 'Hyderabad Fortress',
    'Gurugram Cyber City': 'Gurugram Keep',
    'Pune Innovation Center': 'Pune Bastion',
    'Mumbai FinTech Hub': 'Mumbai Harbor'
  };
  return map[location] || location;
}

// ==========================================
// 11. RENDER ENGINE: EMPLOYEES
// ==========================================
function renderAll() {
  renderEmployees();
  renderDepartments();
  renderReports();
}

function renderEmployees() {
  const filtered = getFilteredEmployees();
  const total = filtered.length;
  updateMetrics(filtered);

  const totalPages = Math.max(1, Math.ceil(total / state.pageSize));
  if (state.currentPage > totalPages) state.currentPage = totalPages;
  const start = (state.currentPage - 1) * state.pageSize;
  const end = Math.min(start + state.pageSize, total);
  const page = filtered.slice(start, end);

  const gridEl = document.getElementById('employees-grid-container');
  const tableEl = document.getElementById('employees-table-body');
  const emptyEl = document.getElementById('empty-state-container');
  const pagEl = document.querySelector('.pagination-container');

  if (total === 0) {
    gridEl.style.display = 'none';
    document.getElementById('employees-table-container').style.display = 'none';
    emptyEl.style.display = 'flex';
    pagEl.style.display = 'none';
    return;
  }

  emptyEl.style.display = 'none';
  pagEl.style.display = 'flex';
  if (state.viewMode === 'grid') {
    gridEl.style.display = 'grid';
    document.getElementById('employees-table-container').style.display = 'none';
  } else {
    gridEl.style.display = 'none';
    document.getElementById('employees-table-container').style.display = 'block';
  }

  // Grid Cards
  gridEl.innerHTML = page.map(emp => {
    const deptShort = emp.department.split('&')[0].trim();
    return `
    <div class="emp-card parchment-card">
      <div class="emp-card-header">
        <div style="position:relative;">
          <img src="${emp.avatar}" alt="${emp.name}" class="emp-avatar" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'">
          <div class="status-active" style="position:absolute; bottom:2px; right:2px; border:2px solid var(--bg-card);" title="On Duty"></div>
        </div>
        <span class="location-badge"><i class="fa-solid fa-chess-rook" style="font-size:0.68rem;"></i> ${getStrongholdName(emp.location).split(' ')[0]}</span>
      </div>
      <div class="emp-info">
        <h3>${emp.name}</h3>
        <p class="emp-role">${emp.role}</p>
        <p class="emp-dept"><i class="fa-solid fa-scroll" style="margin-right:6px; opacity:0.7;"></i>${deptShort}</p>
        <p class="emp-email"><i class="fa-regular fa-envelope"></i>${emp.email}</p>
      </div>
      <div class="rating-bar">
        <div class="rating-header">
          <span>Honor Rating</span>
          <span class="rating-value">${getCrowns(emp.rating)} ${emp.rating.toFixed(1)}</span>
        </div>
        <div class="rating-track">
          <div class="rating-fill" style="width: ${(emp.rating / 5) * 100}%;"></div>
        </div>
      </div>
      <div class="emp-salary-box">
        <div>
          <span class="salary-label">Annual Bounty</span>
          <span class="salary-value">${formatINRLakhs(emp.salary)}</span>
        </div>
        <div style="text-align:right;">
          <span class="salary-label">Sworn Since</span>
          <span class="tenure-value">${emp.joinDate.split('-')[0]}</span>
        </div>
      </div>
      <div class="emp-actions">
        <button class="btn-secondary" onclick="viewEmployeeDetails(${emp.id})" style="flex:2;">
          <i class="fa-solid fa-scroll" style="color:var(--gold);"></i><span>View Scroll</span>
        </button>
        <button class="btn-icon" onclick="openEmployeeModal(${emp.id})" title="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn-icon" onclick="deleteEmployee(${emp.id})" title="Remove" style="color:var(--burgundy);"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    </div>`;
  }).join('');

  // Table Rows
  tableEl.innerHTML = page.map(emp => `
    <tr>
      <td>
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="position:relative;">
            <img src="${emp.avatar}" alt="${emp.name}" style="width:40px; height:40px; border-radius:50%; object-fit:cover; border:2px solid var(--gold);" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'">
            <div class="status-active" style="position:absolute; bottom:0; right:0; width:8px; height:8px; border:2px solid var(--bg-card);"></div>
          </div>
          <div>
            <div style="font-weight:700; font-family:var(--font-heading); font-size:0.92rem;">${emp.name}</div>
            <div style="font-size:0.78rem; color:var(--text-tertiary);">${emp.email}</div>
          </div>
        </div>
      </td>
      <td><span class="location-badge"><i class="fa-solid fa-chess-rook" style="font-size:0.65rem;"></i> ${emp.location.split(' ')[0]}</span></td>
      <td style="font-family:var(--font-heading); font-size:0.82rem; font-weight:600; color:var(--gold-dark);">${emp.department.split('&')[0].trim()}</td>
      <td style="font-size:0.88rem;">${emp.role}</td>
      <td><span class="salary-value">${formatINRLakhs(emp.salary)}</span></td>
      <td><span style="font-family:var(--font-heading); font-weight:700; color:var(--gold);">${getCrowns(emp.rating)} ${emp.rating.toFixed(1)}</span></td>
      <td style="text-align:right;">
        <div style="display:inline-flex; gap:4px;">
          <button class="btn-icon" onclick="viewEmployeeDetails(${emp.id})" title="View"><i class="fa-solid fa-scroll" style="color:var(--gold);"></i></button>
          <button class="btn-icon" onclick="openEmployeeModal(${emp.id})" title="Edit"><i class="fa-solid fa-pen"></i></button>
          <button class="btn-icon" onclick="deleteEmployee(${emp.id})" title="Remove" style="color:var(--burgundy);"><i class="fa-solid fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');

  // Pagination
  document.getElementById('page-start').textContent = total === 0 ? 0 : start + 1;
  document.getElementById('page-end').textContent = end;
  document.getElementById('total-emps').textContent = total;
  document.getElementById('btn-prev').disabled = state.currentPage === 1;
  document.getElementById('btn-next').disabled = state.currentPage === totalPages;

  const pageNumbers = document.getElementById('page-numbers');
  pageNumbers.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.className = `page-btn ${i === state.currentPage ? 'active' : ''}`;
    btn.textContent = i;
    btn.addEventListener('click', () => { state.currentPage = i; renderEmployees(); });
    pageNumbers.appendChild(btn);
  }
}

function updateMetrics(list) {
  const n = list.length;
  const total = list.reduce((s, e) => s + e.salary, 0);
  const avg = n > 0 ? total / n : 0;
  const avgR = n > 0 ? (list.reduce((s, e) => s + e.rating, 0) / n).toFixed(2) : '0.00';
  document.getElementById('cmd-total-staff').textContent = `${n} Sworn`;
  document.getElementById('cmd-total-payroll').textContent = formatINRCrores(total);
  document.getElementById('cmd-avg-salary').textContent = formatINRLakhs(avg);
  document.getElementById('cmd-avg-rating').textContent = `${avgR} / 5.0`;
}

// ==========================================
// 12. RENDER: GUILD HALLS (Departments)
// ==========================================
function renderDepartments() {
  const depts = [
    { name: 'Infrastructure & Core Eng', icon: 'fa-server', color: 'var(--royal-blue)', hub: 'Bengaluru / Hyderabad', desc: 'Masters of the realm\'s cloud fortifications, database engines, and zero-trust network defenses.' },
    { name: 'Artificial Intelligence R&D', icon: 'fa-brain', color: 'var(--gold)', hub: 'Bengaluru / Gurugram', desc: 'Alchemists of autonomous intelligence — LLM training, quantum algorithms, and computer vision.' },
    { name: 'Product Experience & UX', icon: 'fa-wand-magic-sparkles', color: 'var(--burgundy)', hub: 'Pune / Bengaluru', desc: 'Artisans of the interface — crafting enchanting motion, accessibility, and illuminated manuscripts.' },
    { name: 'Global Brand Marketing', icon: 'fa-bullhorn', color: 'var(--forest)', hub: 'Mumbai / Gurugram', desc: 'Heralds and emissaries — brand positioning, developer relations, and community building.' },
    { name: 'Executive Leadership', icon: 'fa-crown', color: 'var(--gold-dark)', hub: 'Mumbai / Gurugram', desc: 'The High Council — INR treasury governance, legal compliance, and strategic workforce architecture.' }
  ];

  document.getElementById('departments-grid-container').innerHTML = depts.map(d => {
    const emps = state.employees.filter(e => e.department === d.name);
    const count = emps.length;
    const totalPay = emps.reduce((s, e) => s + e.salary, 0);
    const avgPay = count > 0 ? totalPay / count : 0;
    return `
      <div class="dept-card parchment-card">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div class="dept-icon-box" style="background:rgba(201,169,78,0.08); color:${d.color}; border-color:var(--border-subtle);">
            <i class="fa-solid ${d.icon}"></i>
          </div>
          <span class="hub-badge">${count} Members</span>
        </div>
        <div class="dept-title">
          <h3>${d.name}</h3>
          <p class="dept-hub"><i class="fa-solid fa-chess-rook" style="margin-right:6px;"></i> Strongholds: ${d.hub}</p>
          <p class="dept-desc">${d.desc}</p>
        </div>
        <div class="dept-stats">
          <div>
            <span class="salary-label">Annual Treasury</span>
            <div class="salary-value" style="margin-top:2px; font-size:1.05rem;">${formatINRCrores(totalPay)}</div>
          </div>
          <div>
            <span class="salary-label">Average Bounty</span>
            <div style="font-weight:700; color:var(--text-primary); font-family:var(--font-heading); font-size:1.05rem; margin-top:2px;">${formatINRLakhs(avgPay)}</div>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ==========================================
// 13. RENDER: ROYAL LEDGER (Analytics)
// ==========================================
function renderReports() {
  const n = state.employees.length;
  const total = state.employees.reduce((s, e) => s + e.salary, 0);
  const avg = n > 0 ? total / n : 0;
  document.getElementById('kpi-payroll').textContent = formatINRCrores(total);
  document.getElementById('kpi-headcount').textContent = `${n} Sworn`;
  document.getElementById('kpi-avg-salary').textContent = formatINRLakhs(avg);

  // Bar Chart
  const deptNames = ['Infrastructure & Core Eng', 'Artificial Intelligence R&D', 'Product Experience & UX', 'Global Brand Marketing', 'Executive Leadership'];
  const deptData = deptNames.map(d => ({
    name: d.split('&')[0].trim(),
    spend: state.employees.filter(e => e.department === d).reduce((s, e) => s + e.salary, 0)
  }));
  const maxSpend = Math.max(...deptData.map(d => d.spend), 1000000);

  document.getElementById('department-bar-chart').innerHTML = deptData.map(d => {
    const pct = Math.max(14, Math.round((d.spend / maxSpend) * 100));
    return `
      <div class="bar-col">
        <div class="bar-fill" style="height: ${pct}%;">
          <span class="bar-val">${formatINRLakhs(d.spend).replace(' LPA', 'L')}</span>
        </div>
        <span class="bar-label">${d.name}</span>
      </div>`;
  }).join('');

  // Stronghold Density
  const hubs = ['Bengaluru HQ', 'Hyderabad Tech Park', 'Gurugram Cyber City', 'Pune Innovation Center', 'Mumbai FinTech Hub'];
  document.getElementById('headcount-share-list').innerHTML = hubs.map(h => {
    const count = state.employees.filter(e => e.location === h).length;
    const pct = n > 0 ? ((count / n) * 100).toFixed(1) : 0;
    return `
      <div class="share-item">
        <div class="share-header">
          <span class="location"><i class="fa-solid fa-chess-rook" style="color:var(--gold); margin-right:8px;"></i> ${getStrongholdName(h)}</span>
          <span class="count">${count} members (${pct}%)</span>
        </div>
        <div class="share-track">
          <div class="share-fill" style="width:${pct}%;"></div>
        </div>
      </div>`;
  }).join('');
}

// ==========================================
// 14. MODAL CRUD OPERATIONS
// ==========================================
function openEmployeeModal(empId = null) {
  const modal = document.getElementById('employee-modal');
  const title = document.getElementById('modal-title');
  if (empId) {
    const emp = state.employees.find(e => e.id === empId);
    if (!emp) return;
    state.editingEmpId = empId;
    title.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Edit Guild Member';
    document.getElementById('emp-id').value = emp.id;
    document.getElementById('emp-name').value = emp.name;
    document.getElementById('emp-email').value = emp.email;
    document.getElementById('emp-location').value = emp.location;
    document.getElementById('emp-dept').value = emp.department;
    document.getElementById('emp-role').value = emp.role;
    document.getElementById('emp-salary').value = emp.salary;
    document.getElementById('emp-rating').value = emp.rating;
  } else {
    state.editingEmpId = null;
    title.innerHTML = '<i class="fa-solid fa-scroll"></i> Enlist New Member';
    document.getElementById('employee-form').reset();
    document.getElementById('emp-id').value = '';
  }
  modal.classList.add('active');
}

function saveEmployee() {
  const name = document.getElementById('emp-name').value.trim();
  const email = document.getElementById('emp-email').value.trim();
  const location = document.getElementById('emp-location').value;
  const department = document.getElementById('emp-dept').value;
  const role = document.getElementById('emp-role').value.trim();
  const salary = Number(document.getElementById('emp-salary').value);
  const rating = Number(document.getElementById('emp-rating').value);

  if (!name || !email || !role || !salary) {
    showToast('All fields marked with * are required to complete the enrollment.', 'error');
    return;
  }

  if (state.editingEmpId) {
    const idx = state.employees.findIndex(e => e.id === state.editingEmpId);
    if (idx !== -1) {
      state.employees[idx] = { ...state.employees[idx], name, email, location, department, role, salary, rating };
      showToast(`${name}'s profile has been updated successfully!`, 'success');
    }
  } else {
    state.employees.unshift({
      id: Date.now(),
      name, email, location, department, role, salary, rating,
      joinDate: new Date().toISOString().split('T')[0],
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80`,
      skills: ['Guild Member', 'Enterprise Agile', 'Cloud Craft']
    });
    showToast(`${name} has joined the team! Welcome aboard 🚀`, 'success');
  }

  document.getElementById('employee-modal').classList.remove('active');
  saveToStorage();
  renderAll();
}

function deleteEmployee(empId) {
  const emp = state.employees.find(e => e.id === empId);
  if (!emp) return;
  if (confirm(`Are you sure you want to remove ${emp.name} from the roster? This cannot be undone.`)) {
    state.employees = state.employees.filter(e => e.id !== empId);
    saveToStorage();
    showToast(`${emp.name} has been removed from the team.`, 'error');
    renderAll();
  }
}

function viewEmployeeDetails(empId) {
  const emp = state.employees.find(e => e.id === empId);
  if (!emp) return;

  document.getElementById('details-content').innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; text-align:center; gap:12px; margin-bottom:24px;">
      <div style="position:relative;">
        <img src="${emp.avatar}" alt="${emp.name}" style="width:88px; height:88px; border-radius:50%; border:3px solid var(--gold); object-fit:cover; box-shadow:var(--shadow-glow);" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'">
        <div class="status-active" style="position:absolute; bottom:4px; right:4px; width:14px; height:14px; border:3px solid var(--bg-card);"></div>
      </div>
      <div>
        <h3 style="font-size:1.5rem;">${emp.name}</h3>
        <p style="color:var(--gold-dark); font-family:var(--font-heading); font-weight:600; font-size:0.95rem; margin-top:2px;">${emp.role}</p>
        <div style="display:flex; gap:8px; justify-content:center; margin-top:10px; flex-wrap:wrap;">
          <span class="location-badge"><i class="fa-solid fa-chess-rook"></i> ${getStrongholdName(emp.location)}</span>
          <span class="location-badge">${emp.department.split('&')[0].trim()}</span>
        </div>
      </div>
    </div>

    <div style="background:var(--bg-card-alt); padding:20px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">
      <div>
        <span class="salary-label">Annual Bounty</span>
        <div class="salary-value" style="font-size:1.2rem; margin-top:2px;">${formatINRLakhs(emp.salary)}</div>
        <div style="font-size:0.75rem; color:var(--text-tertiary);">${formatINRFull(emp.salary)} / yr</div>
      </div>
      <div>
        <span class="salary-label">Honor Rating</span>
        <div style="font-size:1.1rem; font-weight:800; color:var(--gold); margin-top:2px; font-family:var(--font-heading);">${getCrowns(emp.rating)} ${emp.rating.toFixed(1)}</div>
      </div>
      <div>
        <span class="salary-label">Guild Email</span>
        <div style="font-size:0.85rem; color:var(--text-primary); font-weight:500; margin-top:2px;">${emp.email}</div>
      </div>
      <div>
        <span class="salary-label">Sworn Since</span>
        <div style="font-size:0.85rem; color:var(--text-primary); font-weight:500; margin-top:2px;">${emp.joinDate}</div>
      </div>
    </div>

    <div>
      <span class="salary-label" style="margin-bottom:10px; display:block;">Domain Competencies</span>
      <div style="display:flex; flex-wrap:wrap; gap:6px;">
        ${(emp.skills || ['Guild Craft', 'Enterprise', 'Cloud']).map(s => `
          <span style="background:rgba(201,169,78,0.08); border:1px solid var(--border-gold); padding:5px 12px; border-radius:var(--radius-pill); font-size:0.8rem; color:var(--text-primary); font-weight:500;">
            <i class="fa-solid fa-shield-halved" style="color:var(--gold); margin-right:4px;"></i>${s}
          </span>
        `).join('')}
      </div>
    </div>

    <div style="margin-top:24px; padding-top:16px; border-top:1px solid var(--border-subtle); display:flex; justify-content:flex-end; gap:10px;">
      <button class="btn-secondary" onclick="document.getElementById('details-modal').classList.remove('active'); openEmployeeModal(${emp.id});">
        <i class="fa-solid fa-pen-to-square"></i><span>Edit Scroll</span>
      </button>
    </div>
  `;

  document.getElementById('details-modal').classList.add('active');
}
