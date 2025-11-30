
# Developer Productivity Dashboard

The **Developer Productivity Dashboard** is an interactive web application designed to help developers track their progress in key areas of their professional growth. It provides features to monitor mindset, upskilling, hands-on practice, interview preparation, and job applications, offering a holistic view of a developer's productivity.

<img width="1909" height="896" alt="image" src="https://github.com/user-attachments/assets/0220c453-64a8-4174-8054-725ebc2a2e00" />

## Features

### Key Sections of the Dashboard:

1. **Master Dashboard**: A high-level overview of progress, tasks completed, hours spent, and upcoming deadlines.
2. **Mindset Tracking**: Track activities, mood ratings, and notes related to personal mindset and motivation.
3. **Upskilling Resources**: Manage learning resources (e.g., courses, tutorials) for improving technical skills.
4. **Hands-on Practice**: Organize and track your projects and development work.
5. **Interview Preparation**: Monitor interview topics, confidence levels, and mock interviews for preparation.
6. **Job Applications**: Track your job applications, their current status, and important follow-up dates.

## Project Structure

```
/Developer-Productivity-Dashboard
│
├── index.html            # Main HTML file with dashboard structure
├── style.css             # CSS styles for the dashboard layout and UI
├── app.js                # JavaScript file for handling dashboard functionality
│
└── README.md             # Project documentation (this file)
```

## Installation

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/developer-productivity-dashboard.git
cd developer-productivity-dashboard
```

### 2. Open the Project

Since this is a static site, you can directly open `index.html` in any modern browser. Alternatively, you can use a local server for a better development experience.

```bash
# If you have Python installed, you can run a simple server:
python -m http.server
```

After running this command, you can view the dashboard in your browser by navigating to `http://localhost:8000`.

## Dependencies

The project uses the following libraries:

* **Chart.js**: A JavaScript charting library for rendering charts on the dashboard.

To include **Chart.js** in your project, use the following CDN in your `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

* **Other dependencies** like React, Axios, etc., could be added as the project evolves.

## Features and Usage

### Master Dashboard

* **Progress Summary**: Displays a table of task categories, their completion status, and progress.
* **Weekly Overview**: Includes key stats such as tasks completed, hours spent, pending tasks, and upcoming deadlines.
* **Progress Charts**: Visual representations of progress, updated dynamically based on user input.

### Mindset Tracking

* **Track activities**: Record activities that affect your mindset.
* **Mood Rating**: Assign mood ratings to each activity.
* **Notes**: Add reflective notes on the activities.

### Upskilling Resources

* **Manage Resources**: List learning resources for various skills (e.g., React, JavaScript).
* **Filter by Language and Priority**: Sort resources based on language or priority level (e.g., high, medium, low).

### Hands-on Practice

* **Track Projects**: Add details about your development projects, including project name, status (e.g., in progress, completed), and tech stack.
* **GitHub Link**: Link to GitHub repositories for the projects.

### Interview Preparation

* **Track Topics**: Keep track of different topics you’re preparing for (e.g., system design, algorithms).
* **Confidence Level**: Rate your confidence in each topic (high, medium, low).
* **Mock Interviews**: Track the practice of mock interviews.

### Job Applications

* **Track Applications**: Record job applications with details like company name, position, and location.
* **Follow-up Dates**: Set follow-up dates for each job application to stay on top of your process.
* **Application Status**: Monitor the application stage (e.g., applied, phone screen, technical interview).

## How to Add/Edit Entries

To add or edit an entry in any of the sections, click the **Add New Entry** button. A modal form will open where you can input or update your data. Once done, click **Save** to store the entry.

### Modal Fields

Each modal has form fields that depend on the tab you're in (e.g., tasks, interview topics, projects). Fill in the required fields and click **Save** to submit the form.

## Contributing

We welcome contributions! Feel free to fork the repository, open issues, and submit pull requests.

### Steps to Contribute

1. **Fork the Repository**: Click the "Fork" button in the top right corner of the GitHub page.
2. **Clone Your Fork**: On your local machine, clone the repository with:

   ```bash
   git clone https://github.com/yourusername/developer-productivity-dashboard.git
   cd developer-productivity-dashboard
   ```
3. **Create a New Branch**:

   ```bash
   git checkout -b feature-name
   ```
4. **Make Your Changes**: Add new features, fix bugs, or improve documentation.
5. **Commit Your Changes**:

   ```bash
   git commit -am 'Add new feature'
   ```
6. **Push to Your Branch**:

   ```bash
   git push origin feature-name
   ```
7. **Create a Pull Request**: Go to the GitHub repository and open a pull request.

## Future Enhancements

* **User Authentication**: Add authentication to allow users to log in and save their progress across sessions.
* **Backend Integration**: Implement a backend (e.g., Node.js, Firebase) to persist user data.
* **More Advanced Analytics**: Provide detailed analytics and insights based on progress data.
* **Mobile Compatibility**: Make the dashboard fully responsive for mobile users.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---
