// Dashboard Application JavaScript
class DashboardApp {
    constructor() {
        this.data = {
            masterDashboard: {
                categories: [
                    {"name": "Mindset", "total": 28, "completed": 22, "inProgress": 4, "percentage": 79},
                    {"name": "Upskilling", "total": 15, "completed": 8, "inProgress": 5, "percentage": 53},
                    {"name": "Hands-on Practice", "total": 12, "completed": 7, "inProgress": 3, "percentage": 58},
                    {"name": "Interview Prep", "total": 20, "completed": 12, "inProgress": 6, "percentage": 60},
                    {"name": "Job Applications", "total": 25, "completed": 8, "inProgress": 12, "percentage": 32}
                ],
                weeklyStats: {
                    tasksCompleted: 15,
                    hoursSpent: 32,
                    pendingTasks: 18,
                    upcomingDeadlines: 5
                }
            },
            mindsetData: [
                {"date": "2025-09-03", "activity": "journaling", "completed": true, "moodRating": 8, "notes": "Focused on career goals and motivation"},
                {"date": "2025-09-02", "activity": "meditation", "completed": true, "moodRating": 7, "notes": "15 minutes of mindfulness practice"},
                {"date": "2025-09-01", "activity": "motivational quotes", "completed": true, "moodRating": 9, "notes": "Read inspiring developer success stories"},
                {"date": "2025-08-31", "activity": "reflection", "completed": false, "moodRating": 6, "notes": "Need to reflect on weekly progress"},
                {"date": "2025-08-30", "activity": "journaling", "completed": true, "moodRating": 8, "notes": "Wrote about coding challenges overcome"}
            ],
            upskillingData: [
                {"skill": "React Hooks", "resourceName": "React Official Documentation", "type": "website", "programmingLanguage": "React", "purpose": "learning", "priority": "High", "progress": 85, "targetDate": "2025-09-15", "status": "In Progress", "notes": "Mastering useEffect and useContext"},
                {"skill": "System Design", "resourceName": "Grokking System Design", "type": "course", "programmingLanguage": "All", "purpose": "interview prep", "priority": "High", "progress": 40, "targetDate": "2025-09-30", "status": "In Progress", "notes": "Working through scalability patterns"},
                {"skill": "TypeScript", "resourceName": "TypeScript Handbook", "type": "website", "programmingLanguage": "TypeScript", "purpose": "learning", "priority": "Medium", "progress": 100, "targetDate": "2025-08-30", "status": "Completed", "notes": "Solid understanding of types and interfaces"},
                {"skill": "Node.js", "resourceName": "Node.js Tutorial", "type": "YouTube", "programmingLanguage": "JavaScript", "purpose": "learning", "priority": "Medium", "progress": 60, "targetDate": "2025-10-15", "status": "In Progress", "notes": "Learning Express.js framework"},
                {"skill": "Data Structures", "resourceName": "LeetCode", "type": "website", "programmingLanguage": "All", "purpose": "practice", "priority": "High", "progress": 70, "targetDate": "2025-09-20", "status": "In Progress", "notes": "Completed arrays and linked lists"}
            ],
            practiceData: [
                {"projectName": "E-commerce Dashboard", "type": "Personal Project", "status": "In Progress", "techStack": "React, Node.js, MongoDB", "githubLink": "https://github.com/user/ecommerce-dashboard", "dateStarted": "2025-08-15", "targetCompletion": "2025-09-30", "blockers": "API integration challenges", "takeaways": "Learning backend integration", "priority": "High"},
                {"projectName": "Portfolio Website", "type": "Portfolio", "status": "Completed", "techStack": "React, CSS, Netlify", "githubLink": "https://github.com/user/portfolio", "dateStarted": "2025-07-01", "targetCompletion": "2025-08-01", "blockers": "", "takeaways": "Improved design skills and responsive layouts", "priority": "High"},
                {"projectName": "Algorithm Practice", "type": "Coding Challenge", "status": "In Progress", "techStack": "JavaScript, Python", "githubLink": "https://github.com/user/algorithms", "dateStarted": "2025-08-01", "targetCompletion": "2025-12-31", "blockers": "Time management", "takeaways": "Better problem-solving approach", "priority": "Medium"},
                {"projectName": "React Component Library", "type": "Open Source", "status": "Planning", "techStack": "React, Storybook, npm", "githubLink": "", "dateStarted": "", "targetCompletion": "2025-11-30", "blockers": "Need to research existing libraries", "takeaways": "", "priority": "Medium"}
            ],
            interviewPrepData: [
                {"topic": "React Lifecycle Methods", "type": "Technical", "resources": "React docs, YouTube tutorials", "practiceDate": "2025-09-01", "confidenceLevel": "High", "mockInterviewDate": "2025-09-05", "interviewer": "Pramp", "feedback": "Good explanation of hooks vs class components", "status": "Confident"},
                {"topic": "System Design - Chat Application", "type": "System Design", "resources": "System Design Primer", "practiceDate": "2025-08-30", "confidenceLevel": "Medium", "mockInterviewDate": "", "interviewer": "", "feedback": "", "status": "Practicing"},
                {"topic": "Tell me about yourself", "type": "Behavioral", "resources": "STAR method guide", "practiceDate": "2025-09-02", "confidenceLevel": "High", "mockInterviewDate": "2025-09-03", "interviewer": "Mock interviewer", "feedback": "Great storytelling, mention specific achievements", "status": "Confident"},
                {"topic": "JavaScript Closures", "type": "Technical", "resources": "MDN, coding examples", "practiceDate": "2025-08-28", "confidenceLevel": "Medium", "mockInterviewDate": "", "interviewer": "", "feedback": "", "status": "Needs Review"},
                {"topic": "Handling Difficult Situations", "type": "Behavioral", "resources": "STAR method examples", "practiceDate": "", "confidenceLevel": "Low", "mockInterviewDate": "", "interviewer": "", "feedback": "", "status": "To Practice"}
            ],
            jobApplicationsData: [
                {"company": "Meta", "position": "Frontend Developer", "location": "Remote", "salaryRange": "$120k-150k", "applicationDate": "2025-09-01", "status": "Technical Interview", "contactPerson": "Sarah Johnson", "contactEmail": "sarah@meta.com", "linkedinProfile": "https://linkedin.com/in/sarahjohnson", "applicationLink": "https://careers.meta.com/jobs/123", "lastFollowup": "2025-09-02", "nextFollowupDate": "2025-09-05", "interviewDates": "2025-09-04", "notes": "Technical interview scheduled, prepare React questions"},
                {"company": "Google", "position": "Software Engineer", "location": "Mountain View, CA", "salaryRange": "$140k-180k", "applicationDate": "2025-08-25", "status": "Phone Screen", "contactPerson": "Mike Chen", "contactEmail": "mike@google.com", "linkedinProfile": "https://linkedin.com/in/mikechen", "applicationLink": "https://careers.google.com/jobs/456", "lastFollowup": "2025-08-30", "nextFollowupDate": "2025-09-06", "interviewDates": "", "notes": "Waiting for phone screen scheduling"},
                {"company": "Stripe", "position": "Full Stack Developer", "location": "San Francisco, CA", "salaryRange": "$130k-160k", "applicationDate": "2025-08-20", "status": "Applied", "contactPerson": "Emma Wilson", "contactEmail": "emma@stripe.com", "linkedinProfile": "https://linkedin.com/in/emmawilson", "applicationLink": "https://stripe.com/jobs/789", "lastFollowup": "", "nextFollowupDate": "2025-09-03", "interviewDates": "", "notes": "Need to follow up - no response yet"},
                {"company": "Netflix", "position": "Frontend Engineer", "location": "Los Gatos, CA", "salaryRange": "$150k-190k", "applicationDate": "2025-08-18", "status": "Rejected", "contactPerson": "David Kim", "contactEmail": "david@netflix.com", "linkedinProfile": "https://linkedin.com/in/davidkim", "applicationLink": "https://netflix.com/jobs/101", "lastFollowup": "2025-08-25", "nextFollowupDate": "", "interviewDates": "", "notes": "Feedback: need more backend experience"},
                {"company": "Airbnb", "position": "Senior Frontend Developer", "location": "Remote", "salaryRange": "$140k-170k", "applicationDate": "2025-08-15", "status": "Final Interview", "contactPerson": "Lisa Zhang", "contactEmail": "lisa@airbnb.com", "linkedinProfile": "https://linkedin.com/in/lisazhang", "applicationLink": "https://airbnb.com/careers/234", "lastFollowup": "2025-09-01", "nextFollowupDate": "2025-09-07", "interviewDates": "2025-08-28, 2025-09-03", "notes": "Final round with team leads, very positive feedback"}
            ]
        };

        this.currentTab = 'master';
        this.charts = {};
        this.filteredData = {};
        this.currentEdit = null;
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
    }

    initializeApp() {
        this.setupEventListeners();
        this.renderMasterDashboard();
        this.renderAllTabs();
        this.setupFilters();
        // Initialize charts after a short delay to ensure DOM is ready
        setTimeout(() => this.initializeCharts(), 100);
    }

    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const tabName = e.target.getAttribute('data-tab');
                if (tabName) {
                    this.switchTab(tabName);
                }
            });
        });

        // Modal controls
        const modalClose = document.getElementById('modal-close');
        const modalCancel = document.getElementById('modal-cancel');
        const modalSave = document.getElementById('modal-save');

        if (modalClose) modalClose.addEventListener('click', () => this.closeModal());
        if (modalCancel) modalCancel.addEventListener('click', () => this.closeModal());
        if (modalSave) modalSave.addEventListener('click', () => this.saveModalData());

        // Add new entry buttons
        const addButtons = [
            { id: 'add-mindset', type: 'mindset' },
            { id: 'add-upskilling', type: 'upskilling' },
            { id: 'add-practice', type: 'practice' },
            { id: 'add-interview', type: 'interview' },
            { id: 'add-job', type: 'jobs' }
        ];

        addButtons.forEach(({ id, type }) => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.addEventListener('click', () => this.openModal(type));
            }
        });

        // Search functionality
        this.setupSearch();

        // Close modal when clicking outside
        const modal = document.getElementById('modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });
        }
    }

    setupSearch() {
        const searchInputs = document.querySelectorAll('.search-input');
        searchInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                const tabName = e.target.id.replace('-search', '');
                this.filterTable(tabName, e.target.value);
            });
        });
    }

    setupFilters() {
        const filters = document.querySelectorAll('.filter-select');
        filters.forEach(filter => {
            filter.addEventListener('change', (e) => {
                const tabName = e.target.id.split('-')[0];
                this.applyFilters(tabName);
            });
        });
    }

    switchTab(tabName) {
        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        // Update active tab content
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        const activeTab = document.getElementById(`${tabName}-tab`);
        if (activeTab) activeTab.classList.add('active');

        this.currentTab = tabName;
    }

    initializeCharts() {
        try {
            // Progress Chart
            const progressCtx = document.getElementById('progressChart');
            if (progressCtx) {
                this.charts.progress = new Chart(progressCtx.getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: this.data.masterDashboard.categories.map(cat => cat.name),
                        datasets: [{
                            label: 'Progress %',
                            data: this.data.masterDashboard.categories.map(cat => cat.percentage),
                            backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                            borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100
                            }
                        }
                    }
                });
            }

            // Category Chart
            const categoryCtx = document.getElementById('categoryChart');
            if (categoryCtx) {
                this.charts.category = new Chart(categoryCtx.getContext('2d'), {
                    type: 'doughnut',
                    data: {
                        labels: this.data.masterDashboard.categories.map(cat => cat.name),
                        datasets: [{
                            data: this.data.masterDashboard.categories.map(cat => cat.completed),
                            backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            }
        } catch (error) {
            console.error('Error initializing charts:', error);
        }
    }

    renderMasterDashboard() {
        // Progress Summary Table
        const tbody = document.getElementById('progress-summary-body');
        if (tbody) {
            tbody.innerHTML = '';

            this.data.masterDashboard.categories.forEach(category => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><strong>${category.name}</strong></td>
                    <td>${category.total}</td>
                    <td>${category.completed}</td>
                    <td>${category.inProgress}</td>
                    <td>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${category.percentage}%"></div>
                        </div>
                        <div class="progress-text">${category.percentage}%</div>
                    </td>
                    <td><span class="status-badge status-badge--${category.percentage > 70 ? 'completed' : 'in-progress'}">${category.percentage > 70 ? 'On Track' : 'In Progress'}</span></td>
                `;
                tbody.appendChild(row);
            });
        }

        // Weekly Stats
        const stats = this.data.masterDashboard.weeklyStats;
        const tasksCompleted = document.getElementById('tasks-completed');
        const hoursSpent = document.getElementById('hours-spent');
        const pendingTasks = document.getElementById('pending-tasks');
        const upcomingDeadlines = document.getElementById('upcoming-deadlines');

        if (tasksCompleted) tasksCompleted.textContent = stats.tasksCompleted;
        if (hoursSpent) hoursSpent.textContent = stats.hoursSpent;
        if (pendingTasks) pendingTasks.textContent = stats.pendingTasks;
        if (upcomingDeadlines) upcomingDeadlines.textContent = stats.upcomingDeadlines;
    }

    renderAllTabs() {
        this.renderMindsetTab();
        this.renderUpskillingTab();
        this.renderPracticeTab();
        this.renderInterviewTab();
        this.renderJobsTab();
    }

    renderMindsetTab() {
        const tbody = document.getElementById('mindset-body');
        if (!tbody) return;
        tbody.innerHTML = '';

        this.data.mindsetData.forEach((item, index) => {
            const row = document.createElement('tr');
            const moodClass = item.moodRating >= 8 ? 'high' : item.moodRating >= 6 ? 'medium' : 'low';
            
            row.innerHTML = `
                <td>${item.date}</td>
                <td><span class="status-badge status-badge--info">${item.activity}</span></td>
                <td><input type="checkbox" class="checkbox-input" ${item.completed ? 'checked' : ''} onchange="app.toggleCompletion('mindset', ${index})"></td>
                <td><span class="status-badge status-badge--${moodClass}">${item.moodRating}/10</span></td>
                <td>${item.notes}</td>
                <td>
                    <button class="action-btn action-btn--edit" onclick="app.editItem('mindset', ${index})">Edit</button>
                    <button class="action-btn action-btn--delete" onclick="app.deleteItem('mindset', ${index})">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    renderUpskillingTab() {
        const tbody = document.getElementById('upskilling-body');
        if (!tbody) return;
        tbody.innerHTML = '';

        this.data.upskillingData.forEach((item, index) => {
            const row = document.createElement('tr');
            const priorityClass = item.priority.toLowerCase();
            const statusClass = item.status === 'Completed' ? 'completed' : item.status === 'In Progress' ? 'in-progress' : 'not-started';
            const languageClass = item.programmingLanguage.toLowerCase().replace(' ', '-');

            row.className = `language-${languageClass.replace('all', 'general')}`;
            
            row.innerHTML = `
                <td><strong>${item.skill}</strong></td>
                <td><a href="#" class="external-link">${item.resourceName}</a></td>
                <td><span class="status-badge status-badge--info">${item.type}</span></td>
                <td><span class="status-badge status-badge--${languageClass}">${item.programmingLanguage}</span></td>
                <td>${item.purpose}</td>
                <td><span class="status-badge status-badge--${priorityClass}">${item.priority}</span></td>
                <td>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${item.progress}%"></div>
                    </div>
                    <div class="progress-text">${item.progress}%</div>
                </td>
                <td>${item.targetDate}</td>
                <td><span class="status-badge status-badge--${statusClass}">${item.status}</span></td>
                <td>
                    <button class="action-btn action-btn--edit" onclick="app.editItem('upskilling', ${index})">Edit</button>
                    <button class="action-btn action-btn--delete" onclick="app.deleteItem('upskilling', ${index})">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    renderPracticeTab() {
        const tbody = document.getElementById('practice-body');
        if (!tbody) return;
        tbody.innerHTML = '';

        this.data.practiceData.forEach((item, index) => {
            const row = document.createElement('tr');
            const statusClass = item.status === 'Completed' ? 'completed' : item.status === 'In Progress' ? 'in-progress' : item.status === 'Planning' ? 'not-started' : 'in-progress';
            const priorityClass = item.priority.toLowerCase();
            
            row.innerHTML = `
                <td><strong>${item.projectName}</strong></td>
                <td><span class="status-badge status-badge--info">${item.type}</span></td>
                <td><span class="status-badge status-badge--${statusClass}">${item.status}</span></td>
                <td>${item.techStack}</td>
                <td>${item.githubLink ? `<a href="${item.githubLink}" class="external-link" target="_blank">GitHub</a>` : 'N/A'}</td>
                <td>${item.dateStarted || 'N/A'}</td>
                <td>${item.targetCompletion}</td>
                <td><span class="status-badge status-badge--${priorityClass}">${item.priority}</span></td>
                <td>
                    <button class="action-btn action-btn--edit" onclick="app.editItem('practice', ${index})">Edit</button>
                    <button class="action-btn action-btn--delete" onclick="app.deleteItem('practice', ${index})">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    renderInterviewTab() {
        const tbody = document.getElementById('interview-body');
        if (!tbody) return;
        tbody.innerHTML = '';

        this.data.interviewPrepData.forEach((item, index) => {
            const row = document.createElement('tr');
            const confidenceClass = item.confidenceLevel.toLowerCase();
            const statusClass = item.status === 'Confident' ? 'completed' : item.status === 'Practicing' ? 'in-progress' : item.status === 'Needs Review' ? 'rejected' : 'not-started';
            
            row.innerHTML = `
                <td><strong>${item.topic}</strong></td>
                <td><span class="status-badge status-badge--info">${item.type}</span></td>
                <td>${item.resources}</td>
                <td>${item.practiceDate || 'Not yet'}</td>
                <td><span class="status-badge status-badge--${confidenceClass}">${item.confidenceLevel}</span></td>
                <td>${item.mockInterviewDate || 'Not scheduled'}</td>
                <td><span class="status-badge status-badge--${statusClass}">${item.status}</span></td>
                <td>
                    <button class="action-btn action-btn--edit" onclick="app.editItem('interview', ${index})">Edit</button>
                    <button class="action-btn action-btn--delete" onclick="app.deleteItem('interview', ${index})">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    renderJobsTab() {
        const tbody = document.getElementById('jobs-body');
        if (!tbody) return;
        tbody.innerHTML = '';

        this.data.jobApplicationsData.forEach((item, index) => {
            const row = document.createElement('tr');
            const statusClass = item.status === 'Offer' ? 'completed' : 
                               item.status === 'Rejected' ? 'rejected' : 
                               item.status === 'Applied' ? 'not-started' : 'in-progress';
            
            // Check if follow-up is overdue
            const isOverdue = item.nextFollowupDate && new Date(item.nextFollowupDate) < new Date();
            if (isOverdue) row.style.backgroundColor = 'rgba(var(--color-error-rgb), 0.05)';
            
            row.innerHTML = `
                <td><strong>${item.company}</strong></td>
                <td>${item.position}</td>
                <td>${item.location}</td>
                <td>${item.salaryRange}</td>
                <td>${item.applicationDate}</td>
                <td><span class="status-badge status-badge--${statusClass}">${item.status}</span></td>
                <td>${item.contactPerson}</td>
                <td ${isOverdue ? 'style="color: var(--color-error); font-weight: bold;"' : ''}>${item.nextFollowupDate || 'N/A'}</td>
                <td>
                    <button class="action-btn action-btn--edit" onclick="app.editItem('jobs', ${index})">Edit</button>
                    <button class="action-btn action-btn--delete" onclick="app.deleteItem('jobs', ${index})">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    filterTable(tabName, searchTerm) {
        const table = document.getElementById(`${tabName}-table`);
        if (!table) return;
        
        const rows = table.querySelectorAll('tbody tr');
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            const matches = text.includes(searchTerm.toLowerCase());
            row.style.display = matches ? '' : 'none';
        });
    }

    applyFilters(tabName) {
        // Implementation would depend on specific filters for each tab
        console.log(`Applying filters for ${tabName}`);
    }

    toggleCompletion(dataType, index) {
        if (this.data[`${dataType}Data`] && this.data[`${dataType}Data`][index]) {
            this.data[`${dataType}Data`][index].completed = !this.data[`${dataType}Data`][index].completed;
            this.renderMasterDashboard();
            this.renderAllTabs();
        }
    }

    editItem(dataType, index) {
        this.openModal(dataType, index);
    }

    deleteItem(dataType, index) {
        if (confirm('Are you sure you want to delete this item?')) {
            if (this.data[`${dataType}Data`]) {
                this.data[`${dataType}Data`].splice(index, 1);
                this.renderAllTabs();
                this.renderMasterDashboard();
            }
        }
    }

    openModal(type, editIndex = null) {
        const modal = document.getElementById('modal');
        const title = document.getElementById('modal-title');
        const body = document.getElementById('modal-body');

        if (!modal || !title || !body) return;

        title.textContent = editIndex !== null ? 'Edit Entry' : 'Add New Entry';
        body.innerHTML = this.getModalForm(type, editIndex);

        modal.classList.remove('hidden');
        
        // Store current edit context
        this.currentEdit = { type, index: editIndex };
    }

    getModalForm(type, editIndex) {
        const data = editIndex !== null ? this.data[`${type}Data`][editIndex] : {};
        
        switch (type) {
            case 'mindset':
                return `
                    <div class="modal-form">
                        <div class="form-group">
                            <label class="form-label">Date</label>
                            <input type="date" class="form-control" id="modal-date" value="${data.date || ''}">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Activity</label>
                            <select class="form-control" id="modal-activity">
                                <option value="journaling" ${data.activity === 'journaling' ? 'selected' : ''}>Journaling</option>
                                <option value="meditation" ${data.activity === 'meditation' ? 'selected' : ''}>Meditation</option>
                                <option value="motivational quotes" ${data.activity === 'motivational quotes' ? 'selected' : ''}>Motivational Quotes</option>
                                <option value="reflection" ${data.activity === 'reflection' ? 'selected' : ''}>Reflection</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Mood Rating (1-10)</label>
                            <div class="mood-rating">
                                <input type="range" class="form-control" id="modal-mood" min="1" max="10" value="${data.moodRating || 5}" oninput="document.getElementById('mood-value').textContent = this.value">
                                <span class="mood-value" id="mood-value">${data.moodRating || 5}</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Notes</label>
                            <textarea class="form-control" id="modal-notes" rows="3">${data.notes || ''}</textarea>
                        </div>
                    </div>
                `;
            
            case 'upskilling':
                return `
                    <div class="modal-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">Skill/Concept</label>
                                <input type="text" class="form-control" id="modal-skill" value="${data.skill || ''}">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Resource Name</label>
                                <input type="text" class="form-control" id="modal-resource" value="${data.resourceName || ''}">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">Type</label>
                                <select class="form-control" id="modal-type">
                                    <option value="website" ${data.type === 'website' ? 'selected' : ''}>Website</option>
                                    <option value="course" ${data.type === 'course' ? 'selected' : ''}>Course</option>
                                    <option value="YouTube" ${data.type === 'YouTube' ? 'selected' : ''}>YouTube</option>
                                    <option value="book" ${data.type === 'book' ? 'selected' : ''}>Book</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Programming Language</label>
                                <select class="form-control" id="modal-language">
                                    <option value="JavaScript" ${data.programmingLanguage === 'JavaScript' ? 'selected' : ''}>JavaScript</option>
                                    <option value="React" ${data.programmingLanguage === 'React' ? 'selected' : ''}>React</option>
                                    <option value="TypeScript" ${data.programmingLanguage === 'TypeScript' ? 'selected' : ''}>TypeScript</option>
                                    <option value="All" ${data.programmingLanguage === 'All' ? 'selected' : ''}>All</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">Priority</label>
                                <select class="form-control" id="modal-priority">
                                    <option value="High" ${data.priority === 'High' ? 'selected' : ''}>High</option>
                                    <option value="Medium" ${data.priority === 'Medium' ? 'selected' : ''}>Medium</option>
                                    <option value="Low" ${data.priority === 'Low' ? 'selected' : ''}>Low</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Target Date</label>
                                <input type="date" class="form-control" id="modal-target-date" value="${data.targetDate || ''}">
                            </div>
                        </div>
                        <div class="form-group form-row--full">
                            <label class="form-label">Notes</label>
                            <textarea class="form-control" id="modal-notes" rows="3">${data.notes || ''}</textarea>
                        </div>
                    </div>
                `;
            
            default:
                return '<p>Form functionality coming soon for this section.</p>';
        }
    }

    saveModalData() {
        if (!this.currentEdit) return;

        const { type, index } = this.currentEdit;
        let newData = {};

        switch (type) {
            case 'mindset':
                newData = {
                    date: document.getElementById('modal-date')?.value || '',
                    activity: document.getElementById('modal-activity')?.value || '',
                    completed: index !== null ? this.data.mindsetData[index].completed : false,
                    moodRating: parseInt(document.getElementById('modal-mood')?.value) || 5,
                    notes: document.getElementById('modal-notes')?.value || ''
                };
                break;
            
            case 'upskilling':
                newData = {
                    skill: document.getElementById('modal-skill')?.value || '',
                    resourceName: document.getElementById('modal-resource')?.value || '',
                    type: document.getElementById('modal-type')?.value || 'website',
                    programmingLanguage: document.getElementById('modal-language')?.value || 'All',
                    purpose: 'learning',
                    priority: document.getElementById('modal-priority')?.value || 'Medium',
                    progress: index !== null ? this.data.upskillingData[index].progress : 0,
                    targetDate: document.getElementById('modal-target-date')?.value || '',
                    status: index !== null ? this.data.upskillingData[index].status : 'Not Started',
                    notes: document.getElementById('modal-notes')?.value || ''
                };
                break;
        }

        if (index !== null && this.data[`${type}Data`]) {
            this.data[`${type}Data`][index] = newData;
        } else if (this.data[`${type}Data`]) {
            this.data[`${type}Data`].push(newData);
        }

        this.renderAllTabs();
        this.renderMasterDashboard();
        this.closeModal();
    }

    closeModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.classList.add('hidden');
        }
        this.currentEdit = null;
    }
}

// Initialize the application when DOM is ready
let app;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        app = new DashboardApp();
        app.init();
        window.app = app; // Make globally available for inline handlers
    });
} else {
    app = new DashboardApp();
    app.init();
    window.app = app; // Make globally available for inline handlers
}