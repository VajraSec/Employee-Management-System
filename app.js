/**
 * ============================================================================
 * WORKFORCE PRO — ENTERPRISE MANAGEMENT SUITE
 * True Frosted Glass Blurish Effect with Tasteful Executive Color Accents
 * ============================================================================
 */

// ==========================================
// 1. WORKFORCE DATABASE (WITH INDIAN CURRENCY INR & TECH HUBS)
// ==========================================
const initialEmployees = [
  { id: 101, name: 'Dr. Aarav Sharma', email: 'aarav.sharma@workforcepro.in', location: 'Bengaluru HQ', department: 'Artificial Intelligence R&D', role: 'Chief AI Scientist & Director', salary: 4500000, rating: 4.9, joinDate: '2020-03-15', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80', skills: ['LLM Architecture', 'Neural Networks', 'Python', 'AI Strategy'] },
  { id: 102, name: 'Priya Nair', email: 'priya.nair@workforcepro.in', location: 'Bengaluru HQ', department: 'Infrastructure & Core Eng', role: 'VP of Cloud Infrastructure', salary: 3800000, rating: 4.8, joinDate: '2019-07-22', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80', skills: ['Kubernetes', 'Distributed Systems', 'AWS Mesh', 'Go'] },
  { id: 103, name: 'Rohan Verma', email: 'rohan.verma@workforcepro.in', location: 'Hyderabad Tech Park', department: 'Infrastructure & Core Eng', role: 'Principal Security Lead', salary: 3200000, rating: 4.7, joinDate: '2020-09-04', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', skills: ['Cybersecurity', 'Rust', 'Network Mesh', 'Zero-Trust'] },
  { id: 104, name: 'Ananya Patel', email: 'ananya.patel@workforcepro.in', location: 'Pune Innovation Center', department: 'Product Experience & UX', role: 'Principal Design Architect', salary: 2600000, rating: 4.9, joinDate: '2021-01-11', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80', skills: ['Enterprise Glassmorphism', 'UI/UX Design', 'Design Systems', 'Figma'] },
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
  { id: 124, name: 'Devendra Rathore', email: 'devendra.rathore@workforcepro.in', location: 'Pune Innovation Center', department: 'Product Experience & UX', role: 'Senior Accessibility (a11y) Architect', salary: 2300000, rating: 4.7, joinDate: '2022-11-21', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', skills: ['WCAG AAA', 'Inclusive UI', 'Screen Readers', 'ARIA'] },
  { id: 125, name: 'Samir Ghosh', email: 'samir.ghosh@workforcepro.in', location: 'Bengaluru HQ', department: 'Artificial Intelligence R&D', role: 'Senior Computer Vision Scientist', salary: 3300000, rating: 4.7, joinDate: '2021-06-15', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80', skills: ['Computer Vision', 'OpenCV', 'PyTorch', 'Image Segmentation'] }
];

// ==========================================
// 2. GLOBAL STATE
// ==========================================
const state = {
  employees: [...initialEmployees],
  currentTab: 'employees-tab',
  viewMode: 'grid',
  searchQuery: '',
  filterLocation: 'ALL',
  filterDept: 'ALL',
  filterMaxSalary: 100000000,
  sortBy: 'name',
  currentPage: 1,
  pageSize: 9,
  editingEmpId: null
};

// ==========================================
// 3. CURRENCY HELPER FUNCTIONS (INDIAN INR LAKHS & CRORES)
// ==========================================
function formatINRLakhs(amount) {
  const lakhs = (amount / 100000).toFixed(1);
  return `₹${lakhs} LPA`;
}

function formatINRCrores(amount) {
  if (amount >= 10000000) {
    const crores = (amount / 10000000).toFixed(2);
    return `₹${crores} Cr INR`;
  }
  return formatINRLakhs(amount);
}

function formatINRFull(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

// ==========================================
// 4. INITIALIZATION & EVENT LISTENER BINDINGS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSearchAndFilters();
  initHubsFilter();
  initViewToggle();
  initPagination();
  initModals();
  
  renderAll();
});

function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      
      const tabId = item.getAttribute('data-tab');
      state.currentTab = tabId;
      
      document.querySelectorAll('.tab-section').forEach(sec => {
        sec.classList.remove('active');
      });
      document.getElementById(tabId).classList.add('active');
      
      if (tabId === 'departments-tab') renderDepartments();
      if (tabId === 'reports-tab') renderReports();
    });
  });
}

function initSearchAndFilters() {
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    state.currentPage = 1;
    renderEmployees();
  });

  const deptSelect = document.getElementById('filter-dept');
  deptSelect.addEventListener('change', (e) => {
    state.filterDept = e.target.value;
    state.currentPage = 1;
    renderEmployees();
  });

  const salarySelect = document.getElementById('filter-salary');
  salarySelect.addEventListener('change', (e) => {
    state.filterMaxSalary = Number(e.target.value);
    state.currentPage = 1;
    renderEmployees();
  });

  const sortBySelect = document.getElementById('sort-by');
  sortBySelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderEmployees();
  });

  document.getElementById('btn-reset-filters').addEventListener('click', resetFilters);
  document.getElementById('btn-empty-reset').addEventListener('click', resetFilters);
}

function initHubsFilter() {
  const hubCards = document.querySelectorAll('.hub-card');
  const activeLabel = document.getElementById('active-hub-label');

  hubCards.forEach(card => {
    card.addEventListener('click', () => {
      hubCards.forEach(c => c.classList.remove('active-hub'));
      card.classList.add('active-hub');
      
      const loc = card.getAttribute('data-location');
      state.filterLocation = loc;
      state.currentPage = 1;

      activeLabel.innerHTML = loc === 'ALL' ? 'Showing All Offices' : `<i class="fa-solid fa-check" style="margin-right:6px; color:var(--accent-cyan);"></i> Filtered: ${loc}`;
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
  document.getElementById('active-hub-label').textContent = 'Showing All Offices';

  document.querySelectorAll('.hub-card').forEach((c, idx) => {
    c.classList.toggle('active-hub', idx === 0);
  });

  renderEmployees();
}

function initViewToggle() {
  const btnGrid = document.getElementById('btn-grid-view');
  const btnTable = document.getElementById('btn-table-view');
  const gridContainer = document.getElementById('employees-grid-container');
  const tableContainer = document.getElementById('employees-table-container');

  btnGrid.addEventListener('click', () => {
    state.viewMode = 'grid';
    btnGrid.classList.add('active');
    btnTable.classList.remove('active');
    gridContainer.style.display = 'grid';
    tableContainer.style.display = 'none';
  });

  btnTable.addEventListener('click', () => {
    state.viewMode = 'table';
    btnTable.classList.add('active');
    btnGrid.classList.remove('active');
    gridContainer.style.display = 'none';
    tableContainer.style.display = 'block';
  });
}

function initPagination() {
  document.getElementById('btn-prev').addEventListener('click', () => {
    if (state.currentPage > 1) {
      state.currentPage--;
      renderEmployees();
    }
  });

  document.getElementById('btn-next').addEventListener('click', () => {
    const totalPages = Math.ceil(getFilteredEmployees().length / state.pageSize);
    if (state.currentPage < totalPages) {
      state.currentPage++;
      renderEmployees();
    }
  });
}

function initModals() {
  const empModal = document.getElementById('employee-modal');
  const detailsModal = document.getElementById('details-modal');

  document.getElementById('btn-open-add-modal').addEventListener('click', () => {
    openEmployeeModal();
  });

  document.getElementById('btn-close-modal').addEventListener('click', () => {
    empModal.classList.remove('active');
  });

  document.getElementById('btn-cancel-modal').addEventListener('click', () => {
    empModal.classList.remove('active');
  });

  document.getElementById('btn-close-details').addEventListener('click', () => {
    detailsModal.classList.remove('active');
  });

  document.getElementById('employee-form').addEventListener('submit', (e) => {
    e.preventDefault();
    saveEmployee();
  });

  window.addEventListener('click', (e) => {
    if (e.target === empModal) empModal.classList.remove('active');
    if (e.target === detailsModal) detailsModal.classList.remove('active');
  });
}

// ==========================================
// 5. CORE FILTERING & SORTING PIPELINE
// ==========================================
function getFilteredEmployees() {
  return state.employees.filter(emp => {
    const matchQuery = !state.searchQuery || 
      emp.name.toLowerCase().includes(state.searchQuery) ||
      emp.email.toLowerCase().includes(state.searchQuery) ||
      emp.role.toLowerCase().includes(state.searchQuery) ||
      emp.department.toLowerCase().includes(state.searchQuery);

    const matchLocation = state.filterLocation === 'ALL' || emp.location === state.filterLocation;
    const matchDept = state.filterDept === 'ALL' || emp.department === state.filterDept;
    const matchSalary = emp.salary <= state.filterMaxSalary;

    return matchQuery && matchLocation && matchDept && matchSalary;
  }).sort((a, b) => {
    let valA = a[state.sortBy];
    let valB = b[state.sortBy];

    if (typeof valA === 'string') {
      return valA.localeCompare(valB);
    } else {
      if (state.sortBy === 'salary' || state.sortBy === 'rating') {
        return valB - valA;
      }
      return valA - valB;
    }
  });
}

// ==========================================
// 6. RENDER ENGINE: EMPLOYEES (Frosted Glass with Tasteful Executive Accents)
// ==========================================
function renderAll() {
  renderEmployees();
  renderDepartments();
  renderReports();
}

function renderEmployees() {
  const filtered = getFilteredEmployees();
  const total = filtered.length;
  
  updateMetricsBar(filtered);

  const totalPages = Math.max(1, Math.ceil(total / state.pageSize));
  if (state.currentPage > totalPages) state.currentPage = totalPages;
  const startIdx = (state.currentPage - 1) * state.pageSize;
  const endIdx = Math.min(startIdx + state.pageSize, total);
  const sliced = filtered.slice(startIdx, endIdx);

  const gridContainer = document.getElementById('employees-grid-container');
  const tableBody = document.getElementById('employees-table-body');
  const emptyState = document.getElementById('empty-state-container');
  const paginationContainer = document.querySelector('.pagination-container');

  if (total === 0) {
    gridContainer.style.display = 'none';
    document.getElementById('employees-table-container').style.display = 'none';
    emptyState.style.display = 'flex';
    paginationContainer.style.display = 'none';
    return;
  } else {
    emptyState.style.display = 'none';
    paginationContainer.style.display = 'flex';
    if (state.viewMode === 'grid') {
      gridContainer.style.display = 'grid';
      document.getElementById('employees-table-container').style.display = 'none';
    } else {
      gridContainer.style.display = 'none';
      document.getElementById('employees-table-container').style.display = 'block';
    }
  }

  // Render Grid Cards with Tasteful Color Accents & Vibrant Frosted Glass
  gridContainer.innerHTML = sliced.map(emp => {
    const isAI = emp.department.includes('Artificial');
    const isExec = emp.department.includes('Executive');
    const accentColor = isAI ? 'var(--accent-cyan)' : isExec ? 'var(--accent-rose)' : 'var(--accent-violet)';

    return `
    <div class="emp-card glass-card">
      <div class="emp-card-header">
        <div style="position:relative;">
          <img src="${emp.avatar}" alt="${emp.name}" class="emp-avatar" style="border-color:${accentColor}; box-shadow:0 0 14px ${accentColor};" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'">
          <div style="position:absolute; bottom:2px; right:2px; width:12px; height:12px; border-radius:50%; background:var(--accent-emerald); border:2px solid #131728; box-shadow:0 0 8px var(--accent-emerald);" title="Active status"></div>
        </div>
        <span class="location-badge"><i class="fa-solid fa-location-dot" style="font-size:0.72rem; color:${accentColor};"></i> ${emp.location.split(' ')[0]}</span>
      </div>

      <div class="emp-info">
        <h3>${emp.name}</h3>
        <p class="emp-role">${emp.role}</p>
        <p style="font-size: 0.78rem; color: ${accentColor}; font-weight: 600; margin-top:4px;"><i class="fa-solid fa-sitemap" style="margin-right:6px; opacity:0.8;"></i>${emp.department}</p>
        <p class="emp-email"><i class="fa-regular fa-envelope"></i> ${emp.email}</p>
      </div>

      <!-- Tasteful Executive Progress Bar -->
      <div style="margin: 2px 0;">
        <div style="display:flex; justify-content:space-between; font-size:0.72rem; font-weight:600; color:var(--text-secondary); margin-bottom:4px;">
          <span>RATING BENCHMARK</span>
          <span style="color:var(--accent-amber); font-weight:700;"><i class="fa-solid fa-star" style="margin-right:3px;"></i> ${emp.rating.toFixed(1)} / 5.0</span>
        </div>
        <div style="width:100%; height:5px; background:rgba(255,255,255,0.08); border-radius:var(--radius-pill); overflow:hidden;">
          <div style="width: ${(emp.rating / 5) * 100}%; height:100%; background:linear-gradient(90deg, #2997ff, #00f2fe); border-radius:var(--radius-pill); box-shadow:0 0 10px rgba(0,242,254,0.4);"></div>
        </div>
      </div>

      <div class="emp-salary-box">
        <div>
          <span style="font-size:0.68rem; color:var(--text-secondary); display:block; text-transform:uppercase; font-weight:600; letter-spacing:0.02em;">Annual Salary</span>
          <span class="salary-lakhs">${formatINRLakhs(emp.salary)}</span>
        </div>
        <div style="text-align:right;">
          <span style="font-size:0.68rem; color:var(--text-secondary); display:block; text-transform:uppercase; font-weight:600; letter-spacing:0.02em;">Tenure</span>
          <span style="font-weight:600; color:#fff; font-size:0.88rem;"><i class="fa-regular fa-calendar" style="color:var(--accent-cyan); margin-right:4px;"></i>${emp.joinDate.split('-')[0]}</span>
        </div>
      </div>

      <div class="emp-actions">
        <button class="btn-secondary" onclick="viewEmployeeDetails(${emp.id})" style="flex:2;">
          <i class="fa-solid fa-id-badge" style="color:var(--accent-cyan);"></i><span>Full Dossier</span>
        </button>
        <button class="btn-icon" onclick="openEmployeeModal(${emp.id})" title="Edit Profile" style="border-radius: var(--radius-sm); width: 38px;">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="btn-icon" onclick="deleteEmployee(${emp.id})" title="Delete Record" style="border-radius: var(--radius-sm); width: 38px; color: #ff453a;">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  `}).join('');

  // Render Table Rows
  tableBody.innerHTML = sliced.map(emp => `
    <tr>
      <td>
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="position:relative;">
            <img src="${emp.avatar}" alt="${emp.name}" style="width:42px; height:42px; border-radius:50%; object-fit:cover; border:1px solid rgba(0,242,254,0.4);" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'">
            <div style="position:absolute; bottom:0; right:0; width:10px; height:10px; border-radius:50%; background:var(--accent-emerald); border:2px solid #131728;"></div>
          </div>
          <div>
            <div style="font-weight:700; color:#fff; font-size:0.98rem;">${emp.name}</div>
            <div style="font-size:0.78rem; color:var(--text-secondary);">${emp.email}</div>
          </div>
        </div>
      </td>
      <td><span class="location-badge" style="font-size:0.76rem;"><i class="fa-solid fa-location-dot" style="color:var(--accent-cyan);"></i> ${emp.location}</span></td>
      <td style="color:var(--accent-cyan); font-weight:600;">${emp.department.split('&')[0].trim()}</td>
      <td style="color:#fff; font-weight:500;">${emp.role}</td>
      <td style="font-weight:700; color:var(--accent-emerald); font-size:1.02rem;">${formatINRLakhs(emp.salary)}</td>
      <td>
        <span style="display:inline-flex; align-items:center; gap:6px; font-weight:700; color:var(--accent-amber); background:rgba(251,191,36,0.12); padding:4px 10px; border-radius:var(--radius-pill); border:1px solid rgba(251,191,36,0.3);">
          <i class="fa-solid fa-star"></i> ${emp.rating.toFixed(1)}
        </span>
      </td>
      <td style="text-align:right;">
        <div style="display:inline-flex; gap:6px;">
          <button class="btn-icon" onclick="viewEmployeeDetails(${emp.id})" title="Profile" style="width:34px; height:34px;"><i class="fa-solid fa-id-badge" style="font-size:0.8rem; color:var(--accent-cyan);"></i></button>
          <button class="btn-icon" onclick="openEmployeeModal(${emp.id})" title="Edit" style="width:34px; height:34px;"><i class="fa-solid fa-pen" style="font-size:0.8rem;"></i></button>
          <button class="btn-icon" onclick="deleteEmployee(${emp.id})" title="Delete" style="width:34px; height:34px; color:#ff453a;"><i class="fa-solid fa-trash" style="font-size:0.8rem;"></i></button>
        </div>
      </td>
    </tr>
  `).join('');

  // Update Pagination Controls
  document.getElementById('page-start').textContent = total === 0 ? 0 : startIdx + 1;
  document.getElementById('page-end').textContent = endIdx;
  document.getElementById('total-emps').textContent = total;

  document.getElementById('btn-prev').disabled = state.currentPage === 1;
  document.getElementById('btn-next').disabled = state.currentPage === totalPages;

  const pageNumbers = document.getElementById('page-numbers');
  pageNumbers.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.className = `page-btn ${i === state.currentPage ? 'active' : ''}`;
    btn.textContent = i;
    btn.addEventListener('click', () => {
      state.currentPage = i;
      renderEmployees();
    });
    pageNumbers.appendChild(btn);
  }
}

function updateMetricsBar(list) {
  const totalStaff = list.length;
  const totalPayroll = list.reduce((sum, e) => sum + e.salary, 0);
  const avgSalary = totalStaff > 0 ? totalPayroll / totalStaff : 0;
  const avgRating = totalStaff > 0 ? (list.reduce((sum, e) => sum + e.rating, 0) / totalStaff).toFixed(2) : '0.00';

  document.getElementById('cmd-total-staff').textContent = `${totalStaff} Active`;
  document.getElementById('cmd-total-payroll').textContent = formatINRCrores(totalPayroll);
  document.getElementById('cmd-avg-salary').textContent = formatINRLakhs(avgSalary);
  document.getElementById('cmd-avg-rating').textContent = `${avgRating} / 5.0`;
}

// ==========================================
// 7. RENDER ENGINE: DEPARTMENTS & TECH HUBS
// ==========================================
function renderDepartments() {
  const depts = [
    { name: 'Infrastructure & Core Eng', icon: 'fa-server', color: '#38bdf8', hub: 'Bengaluru HQ / Hyderabad', desc: 'Core cloud infrastructure, Kubernetes mesh, database engines, and zero-trust networking.' },
    { name: 'Artificial Intelligence R&D', icon: 'fa-brain', color: '#00f2fe', hub: 'Bengaluru HQ / Gurugram', desc: 'Autonomous agent networks, LLM training, quantum algorithms, and computer vision.' },
    { name: 'Product Experience & UX', icon: 'fa-wand-magic-sparkles', color: '#a78bfa', hub: 'Pune / Bengaluru HQ', desc: 'Minimalist UI systems, smooth WebGL motion engineering, and accessibility.' },
    { name: 'Global Brand Marketing', icon: 'fa-bullhorn', color: '#fbbf24', hub: 'Mumbai FinTech / Gurugram', desc: 'Brand positioning, developer relations, public keynotes, and enterprise partnerships.' },
    { name: 'Executive Leadership', icon: 'fa-user-tie', color: '#f43f5e', hub: 'Mumbai FinTech / Gurugram', desc: 'Corporate governance, INR capital allocation, India legal compliance, and HR strategy.' }
  ];

  const grid = document.getElementById('departments-grid-container');
  grid.innerHTML = depts.map(d => {
    const deptEmps = state.employees.filter(e => e.department === d.name);
    const count = deptEmps.length;
    const totalPayroll = deptEmps.reduce((sum, e) => sum + e.salary, 0);
    const avgComp = count > 0 ? totalPayroll / count : 0;

    return `
      <div class="dept-card glass-card">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div style="width:48px; height:48px; border-radius:14px; background:rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:center; font-size:1.4rem; color:${d.color}; border:1px solid rgba(255,255,255,0.15); box-shadow:0 0 15px ${d.color};">
            <i class="fa-solid ${d.icon}"></i>
          </div>
          <span class="location-badge" style="font-size:0.78rem;">${count} Staff Members</span>
        </div>

        <div class="dept-title">
          <h3>${d.name}</h3>
          <p style="font-size:0.82rem; color:${d.color}; font-weight:600; margin-top:4px;"><i class="fa-solid fa-map-pin" style="margin-right:6px;"></i> Primary Hubs: ${d.hub}</p>
          <p style="font-size:0.9rem; color:var(--text-secondary); margin-top:10px; line-height:1.5;">${d.desc}</p>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; padding:14px; background:rgba(0,0,0,0.45); border-radius:var(--radius-sm); border:1px solid rgba(255,255,255,0.08);">
          <div>
            <span style="font-size:0.68rem; color:var(--text-secondary); display:block; text-transform:uppercase; font-weight:600;">Annual Spend</span>
            <div style="font-weight:700; color:var(--accent-emerald); font-size:1.1rem; margin-top:2px;">${formatINRCrores(totalPayroll)}</div>
          </div>
          <div>
            <span style="font-size:0.68rem; color:var(--text-secondary); display:block; text-transform:uppercase; font-weight:600;">Average Salary</span>
            <div style="font-weight:700; color:#fff; font-size:1.1rem; margin-top:2px;">${formatINRLakhs(avgComp)}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 8. RENDER ENGINE: ANALYTICS & PAYROLL
// ==========================================
function renderReports() {
  const totalStaff = state.employees.length;
  const totalPayroll = state.employees.reduce((sum, e) => sum + e.salary, 0);
  const avgSalary = totalStaff > 0 ? totalPayroll / totalStaff : 0;

  document.getElementById('kpi-payroll').textContent = formatINRCrores(totalPayroll);
  document.getElementById('kpi-headcount').textContent = `${totalStaff} Staff`;
  document.getElementById('kpi-avg-salary').textContent = formatINRLakhs(avgSalary);

  const depts = ['Infrastructure & Core Eng', 'Artificial Intelligence R&D', 'Product Experience & UX', 'Global Brand Marketing', 'Executive Leadership'];
  const deptSpends = depts.map(d => {
    return {
      name: d.split('&')[0].trim(),
      spend: state.employees.filter(e => e.department === d).reduce((s, e) => s + e.salary, 0)
    };
  });

  const maxSpend = Math.max(...deptSpends.map(d => d.spend), 1000000);
  const barChart = document.getElementById('department-bar-chart');
  barChart.innerHTML = deptSpends.map(d => {
    const pct = Math.max(14, Math.round((d.spend / maxSpend) * 100));
    return `
      <div class="bar-col">
        <div class="bar-fill" style="height: ${pct}%;">
          <span class="bar-val">${formatINRLakhs(d.spend).replace(' LPA', 'L')}</span>
        </div>
        <span style="font-size:0.75rem; color:var(--text-secondary); text-align:center; font-weight:600;">${d.name}</span>
      </div>
    `;
  }).join('');

  // Render Tech Hub Office Location Density List
  const hubs = ['Bengaluru HQ', 'Hyderabad Tech Park', 'Gurugram Cyber City', 'Pune Innovation Center', 'Mumbai FinTech Hub'];
  const shareList = document.getElementById('headcount-share-list');
  shareList.innerHTML = hubs.map(h => {
    const count = state.employees.filter(e => e.location === h).length;
    const sharePct = totalStaff > 0 ? ((count / totalStaff) * 100).toFixed(1) : 0;
    return `
      <div style="display:flex; flex-direction:column; gap:6px;">
        <div style="display:flex; justify-content:space-between; font-size:0.9rem; font-weight:600;">
          <span style="color:#fff;"><i class="fa-solid fa-location-dot" style="color:var(--accent-cyan); margin-right:8px;"></i> ${h}</span>
          <span style="color:var(--accent-emerald); font-weight:700;">${count} staff (${sharePct}%)</span>
        </div>
        <div style="width:100%; height:6px; background:rgba(255,255,255,0.08); border-radius:var(--radius-pill); overflow:hidden;">
          <div style="width:${sharePct}%; height:100%; background:linear-gradient(90deg, #00f2fe, #2997ff); border-radius:var(--radius-pill); box-shadow:0 0 10px rgba(0,242,254,0.4);"></div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 9. MODAL CRUD INTERACTIONS & DOSSIER
// ==========================================
function openEmployeeModal(empId = null) {
  const modal = document.getElementById('employee-modal');
  const title = document.getElementById('modal-title');
  const form = document.getElementById('employee-form');

  if (empId) {
    const emp = state.employees.find(e => e.id === empId);
    if (!emp) return;
    state.editingEmpId = empId;
    title.innerHTML = `<i class="fa-solid fa-pen-to-square" style="color:var(--accent-cyan); margin-right:10px;"></i> Edit Employee Profile`;
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
    title.innerHTML = `<i class="fa-solid fa-user-plus" style="color:var(--accent-cyan); margin-right:10px;"></i> Add New Employee`;
    form.reset();
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

  if (state.editingEmpId) {
    const index = state.employees.findIndex(e => e.id === state.editingEmpId);
    if (index !== -1) {
      state.employees[index] = {
        ...state.employees[index],
        name, email, location, department, role, salary, rating
      };
    }
  } else {
    const newId = Date.now();
    const newEmp = {
      id: newId,
      name,
      email,
      location,
      department,
      role,
      salary,
      rating,
      joinDate: new Date().toISOString().split('T')[0],
      avatar: `https://images.unsplash.com/photo-${1530000000000 + Math.floor(Math.random()*500000000)}?w=150&auto=format&fit=crop&q=80`,
      skills: ['India Tech Hub', 'Enterprise Agile', 'Cloud Execution', 'Leadership']
    };
    state.employees.unshift(newEmp);
  }

  document.getElementById('employee-modal').classList.remove('active');
  renderAll();
}

function deleteEmployee(empId) {
  const emp = state.employees.find(e => e.id === empId);
  if (!emp) return;
  if (confirm(`Are you sure you want to delete "${emp.name}" (${emp.location}) from the active workforce database?`)) {
    state.employees = state.employees.filter(e => e.id !== empId);
    renderAll();
  }
}

function viewEmployeeDetails(empId) {
  const emp = state.employees.find(e => e.id === empId);
  if (!emp) return;

  const content = document.getElementById('details-content');
  content.innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; text-align:center; gap:12px; margin-bottom:24px;">
      <div style="position:relative;">
        <img src="${emp.avatar}" alt="${emp.name}" style="width:88px; height:88px; border-radius:50%; border:2px solid var(--accent-cyan); object-fit:cover; box-shadow:0 0 20px rgba(0,242,254,0.4);" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'">
        <div style="position:absolute; bottom:4px; right:4px; width:16px; height:16px; border-radius:50%; background:var(--accent-emerald); border:3px solid #131728; box-shadow:0 0 10px var(--accent-emerald);"></div>
      </div>
      <div>
        <h3 style="font-size:1.55rem; color:#fff; font-weight:800;">${emp.name}</h3>
        <p style="color:var(--accent-cyan); font-weight:600; font-size:0.98rem; margin-top:2px;">${emp.role}</p>
        <div style="display:flex; gap:8px; justify-content:center; margin-top:10px;">
          <span class="location-badge"><i class="fa-solid fa-location-dot" style="color:var(--accent-cyan);"></i> ${emp.location}</span>
          <span class="location-badge">${emp.department.split('&')[0].trim()}</span>
        </div>
      </div>
    </div>

    <div style="background:rgba(0,0,0,0.5); padding:20px; border-radius:var(--radius-sm); border:1px solid var(--glass-border); display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">
      <div>
        <span style="font-size:0.68rem; color:var(--text-secondary); display:block; text-transform:uppercase; font-weight:600;">Annual Salary</span>
        <div style="font-size:1.25rem; font-weight:800; color:var(--accent-emerald); margin-top:2px;">${formatINRLakhs(emp.salary)}</div>
        <div style="font-size:0.75rem; color:var(--text-secondary);">${formatINRFull(emp.salary)} / yr</div>
      </div>
      <div>
        <span style="font-size:0.68rem; color:var(--text-secondary); display:block; text-transform:uppercase; font-weight:600;">Performance Benchmark</span>
        <div style="font-size:1.25rem; font-weight:800; color:var(--accent-amber); margin-top:2px;"><i class="fa-solid fa-star"></i> ${emp.rating.toFixed(1)} / 5.0</div>
        <div style="font-size:0.75rem; color:var(--accent-cyan);">Top Tier Talent</div>
      </div>
      <div>
        <span style="font-size:0.68rem; color:var(--text-secondary); display:block; text-transform:uppercase; font-weight:600;">Corporate Email</span>
        <div style="font-size:0.85rem; color:#fff; font-weight:500; margin-top:2px;">${emp.email}</div>
      </div>
      <div>
        <span style="font-size:0.68rem; color:var(--text-secondary); display:block; text-transform:uppercase; font-weight:600;">Joining Tenure</span>
        <div style="font-size:0.85rem; color:#fff; font-weight:500; margin-top:2px;">${emp.joinDate}</div>
      </div>
    </div>

    <div>
      <span style="font-size:0.78rem; font-weight:700; color:var(--text-secondary); margin-bottom:10px; display:block; text-transform:uppercase; letter-spacing:0.04em;">Verified Domain Competencies</span>
      <div style="display:flex; flex-wrap:wrap; gap:6px;">
        ${(emp.skills || ['Core Eng', 'Agile Tech', 'Cloud']).map(s => `
          <span style="background:rgba(255,255,255,0.06); border:1px solid rgba(0,242,254,0.3); padding:5px 12px; border-radius:var(--radius-pill); font-size:0.8rem; color:#fff; font-weight:500; box-shadow:0 0 10px rgba(0,242,254,0.1);">
            <i class="fa-solid fa-check" style="color:var(--accent-cyan); margin-right:4px;"></i>${s}
          </span>
        `).join('')}
      </div>
    </div>

    <div style="margin-top:24px; padding-top:16px; border-top:1px solid var(--glass-border); display:flex; justify-content:flex-end; gap:10px;">
      <button class="btn-secondary" onclick="document.getElementById('details-modal').classList.remove('active'); openEmployeeModal(${emp.id});">
        <i class="fa-solid fa-pen-to-square"></i><span>Edit Profile</span>
      </button>
    </div>
  `;

  document.getElementById('details-modal').classList.add('active');
}
