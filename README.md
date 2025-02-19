# Todo List Application

A modern, responsive Todo List application built with React and vanilla CSS.

## Features

- Add, delete, and mark tasks as completed
- Filter tasks by status (All, Pending, Completed)
- Local storage persistence
- Responsive design
- Clean and modern UI
- Task creation date tracking
- Task statistics
- Error handling
- Smooth animations and transitions

## Technologies Used

- React 18
- CSS3 (Modules)
- Lucide Icons
- Local Storage API
- Vite (Build tool)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SahilSuman1011 To-Do-List-App.git
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Install additional dependencies:
```bash
npm install lucide-react
```

### Development

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
todo-project/
frontend/
├── src/
│   ├── components/
│   │   ├── TodoApp.jsx
│   │   ├── TodoApp.css
│   │   ├── TodoForm.jsx
│   │   ├── TodoForm.css
│   │   ├── TodoList.jsx
│   │   ├── TodoList.css
│   │   ├── TodoFilter.jsx
│   │   ├── TodoFilter.css
│   │   ├── TodoStats.jsx
│   │   └── TodoStats.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Component Structure

- `App.jsx`: Root component
- `App.css`: = Styling component
- `TodoApp.jsx`: Main container component
- `TodoApp.css`: Main container styling component
- `TodoForm.jsx`: Handles new todo input
- `TodoForm.css`: new todo input styling
- `TodoList.jsx`: Displays todo items
- `TodoList.css`: todo items Display styling
- `TodoFilter.jsx`: Filter controls
- `TodoFilter.css`: Filter controls styling
- `TodoStats.jsx`: Displays todo statistics
- `TodoStats.css`: todo statistics styling

## Features in Detail

### 1. Todo Management
- Add new todos with error validation
- Mark todos as complete/incomplete
- Delete todos
- Persistent storage using localStorage

### 2. Filtering
- View all todos
- Filter completed todos
- Filter pending todos

### 3. Statistics
- Total todo count
- Completed todo count
- Pending todo count

### 4. UI/UX Features
- Responsive design for all screen sizes
- Smooth transitions and animations
- Hover effects
- Error feedback
- Empty state handling
- Clean and intuitive interface

## CSS Structure

The project uses modular CSS with:
- CSS variables for consistent theming
- BEM-like naming convention
- Responsive design principles
- Modern CSS features
- Modular file structure

## Browser Support

The application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- Lucide Icons for the beautiful icon set
- React team for the amazing framework
- Vite team for the build tool