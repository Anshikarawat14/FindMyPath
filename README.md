# Pathfinding Visualization

An interactive web-based visualization tool for exploring different pathfinding algorithms. Built with HTML5 Canvas, JavaScript, and the p5.js library, this project allows users to visualize how various search algorithms find paths from a start point to an end point on a customizable grid.

## 🎯 Features

- **Interactive Grid**: Click and drag to create walls, obstacles, and barriers
- **Multiple Algorithms**: Visualize 4 different pathfinding algorithms:
  - **Breadth First Search (BFS)**: Guarantees shortest path, explores all nodes at current depth
  - **Depth First Search (DFS)**: Explores as far as possible along each branch before backtracking
  - **A* Search**: Most efficient informed search algorithm using heuristics
  - **Greedy Best First Search**: Uses heuristic function to choose best path at each step
- **Real-time Statistics**: Track explored grids, time elapsed, and final path length
- **Maze Generation**: Generate random mazes using a recursive backtracking algorithm
- **Customizable Start/End Points**: Click to move start (blue) and end (red) points
- **Wall Management**: Toggle between placing and removing walls
- **Responsive Design**: Works on desktop and shows mobile-friendly message

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Running the Project
1. Clone or download this repository
2. Open `index.html` in your web browser
3. The visualization will load automatically

## Demo Screenshots
### 1.
<img width="1919" height="889" alt="image" src="https://github.com/user-attachments/assets/633b8605-7587-45e4-a864-f57e2743d2ff" />


### 2.
<img width="1919" height="888" alt="image" src="https://github.com/user-attachments/assets/b3e452e3-74a5-49b4-918c-0fd918b8147a" />


## 🎮 How to Use

### Basic Controls
- **Drag Mouse**: Create walls by dragging across the grid
- **Click Start/End Points**: Click on blue (start) or red (end) squares to select them, then click elsewhere to move them
- **Visualize Button**: Start the selected algorithm
- **Reset Button**: Clear the grid and reset to default state

### Advanced Features
- **Algorithm Selection**: Choose from the dropdown menu to switch between algorithms
- **Remove Walls**: Toggle the "Remove walls" button to delete walls instead of creating them
- **Generate Maze**: Create a random maze using the "Generate random maze" button
- **Wall Animation**: Toggle wall animation during maze generation

### Color Coding
- **Blue**: Start point
- **Red**: End point
- **Black**: Walls/obstacles
- **Gray**: Explored nodes
- **Green**: Final path
- **White**: Empty space

## 🔧 Technical Details

### Project Structure
```
Path-finding/
├── index.html          # Main HTML file
├── sketch.js           # Main p5.js sketch and UI logic
├── Board.js            # Grid board management and maze generation
├── AI.js               # Pathfinding algorithms implementation
├── Frontier.js         # Queue and Stack data structures
├── grid.js             # Individual grid cell class
├── style.css           # Styling and responsive design
└── assets/
    └── favicon.ico     # Website icon
```

### Key Components

#### Board Class (`Board.js`)
- Manages the grid structure and cell states
- Handles maze generation using recursive backtracking
- Provides neighbor finding and path reconstruction

#### AI Class (`AI.js`)
- Implements all four pathfinding algorithms
- Manages algorithm state and visualization timing
- Handles heuristic calculations for informed search algorithms

#### Frontier Classes (`Frontier.js`)
- `QueueFrontier`: FIFO structure for BFS
- `StackFrontier`: LIFO structure for DFS

#### Grid Class (`grid.js`)
- Represents individual cells with properties for walls, path, exploration state
- Handles visual rendering of different cell types

### Algorithms Explained

#### Breadth First Search (BFS)
- **Type**: Uninformed search
- **Guarantee**: Shortest path
- **Strategy**: Explores all nodes at current depth before moving to next level
- **Use Case**: When shortest path is required

#### Depth First Search (DFS)
- **Type**: Uninformed search
- **Guarantee**: Does not guarantee shortest path
- **Strategy**: Explores as far as possible along each branch before backtracking
- **Use Case**: When any path is acceptable

#### A* Search
- **Type**: Informed search
- **Guarantee**: Shortest path
- **Strategy**: Uses f(n) = g(n) + h(n) where g(n) is cost from start and h(n) is heuristic to goal
- **Use Case**: Most efficient for finding optimal paths

#### Greedy Best First Search
- **Type**: Informed search
- **Guarantee**: Does not guarantee shortest path
- **Strategy**: Always chooses the path that appears best at the moment using heuristic
- **Use Case**: When speed is prioritized over optimality

## 🎨 Customization

### Grid Size
The grid size is automatically calculated based on window dimensions:
- Default: 30 rows × 75 columns
- Responsive to window size changes

### Algorithm Selection
The selected algorithm is saved in localStorage and persists between sessions.

### Start/End Positions
Start and end positions are saved in localStorage and restored on page reload.

## 📱 Browser Compatibility

- **Desktop**: Full functionality on all modern browsers
- **Mobile**: Shows responsive message recommending desktop use
- **Minimum Resolution**: 800px width for optimal experience

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling and responsive design
- **JavaScript (ES6+)**: Core logic and interactivity
- **p5.js**: Graphics and animation library
- **Local Storage**: Persistence of user preferences

## 🤝 Contributing

Feel free to contribute to this project by:
- Adding new pathfinding algorithms
- Improving the UI/UX
- Adding new features like different maze generation algorithms
- Optimizing performance
- Fixing bugs



## 👨‍💻 Author

**Anshika Rawat :)** 

---

*Enjoy exploring the fascinating world of pathfinding algorithms!*

Don't forget to <span style="color:#ff4d6d"><b>STAR</b></span> ⭐ if you like!


