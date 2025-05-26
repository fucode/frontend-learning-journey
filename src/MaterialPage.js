import React, { useState } from 'react';
import {
  Button,
  Typography,
  Container,
  Box,
  TextField,
  Card,
  CardContent,
  CardActions,
  Alert,
  Switch,
  Slider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { evaluate } from 'mathjs';

export default function MaterialPage() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [calcDisplay, setCalcDisplay] = useState('0');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleCalcInput = (value) => {
    if (calcDisplay === '0' && value !== '.') {
      setCalcDisplay(value);
    } else if (value === '.' && calcDisplay.includes('.')) {
      return;
    } else {
      setCalcDisplay(calcDisplay + value);
    }
  };

  const handleOperator = (op) => {
    if (/[+\-×÷]$/.test(calcDisplay)) {
      setCalcDisplay(calcDisplay.slice(0, -1) + op);
    } else {
      setCalcDisplay(calcDisplay + op);
    }
  };

  const calculateResult = () => {
    try {
      const expression = calcDisplay
        .replace('×', '*')
        .replace('÷', '/');
      const result = evaluate(expression);
      setCalcDisplay(result.toString());
    } catch {
      setCalcDisplay('Error');
    }
  };

  const clearCalculator = () => {
    setCalcDisplay('0');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h3" gutterBottom>
        Material UI Playground
      </Typography>
      <Typography variant="body1" paragraph>
        This page showcases my exploration of Material UI—the most popular component library for React. Here I’m learning how to use pre-built components like buttons, forms, tables, alerts, accordions, and more.
      </Typography>

      {/* === Counter App === */}
      <Box sx={{ marginTop: 6, marginBottom: 4 }}>
        <Typography variant="h5" gutterBottom>
          Counter App
        </Typography>
        <Typography variant="body2" paragraph>
          Shows <code>useState</code>, button event handling, and rendering.
        </Typography>
        <Typography variant="h6">Count: {count}</Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
          <Button variant="contained" onClick={() => setCount(count + 1)}>
            Increment
          </Button>
          <Button variant="outlined" onClick={() => setCount(count - 1)}>
            Decrement
          </Button>
          <Button variant="text" onClick={() => setCount(0)}>
            Reset
          </Button>
        </Box>
      </Box>

      {/* === To-Do List === */}
      <Box sx={{ marginBottom: 6 }}>
        <Typography variant="h5" gutterBottom>
          To-Do List
        </Typography>
        <Typography variant="body2" paragraph>
          Teaches how to handle lists, add/delete items, pass props, and update state.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="New Task"
            variant="outlined"
            fullWidth
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            aria-label="New task input"
          />
          <Button variant="contained" onClick={addTask}>
            Add
          </Button>
        </Box>
        <List>
          {tasks.map((task, index) => (
            <ListItem
              key={task + index}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label={`Delete task ${task}`}
                  onClick={() => deleteTask(index)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={task} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* === Calculator === */}
      <Box sx={{ marginBottom: 6 }}>
        <Typography variant="h5" gutterBottom>
          Calculator
        </Typography>
        <Typography variant="body2" paragraph>
          Demonstrates <code>useState</code> for managing input and calculations with a grid-based button layout.
        </Typography>
        <Box sx={{ maxWidth: 300, mx: 'auto' }}>
          <TextField
            value={calcDisplay}
            variant="outlined"
            fullWidth
            InputProps={{ readOnly: true }}
            sx={{ mb: 2 }}
            aria-label="Calculator display"
          />
          <Grid container spacing={1}>
            {['7', '8', '9', '÷'].map((value) => (
              <Grid item xs={3} key={value}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() =>
                    value === '÷' ? handleOperator(value) : handleCalcInput(value)
                  }
                  sx={{
                    bgcolor: value === '÷' ? 'warning.main' : 'primary.main',
                  }}
                  aria-label={`Calculator button ${value}`}
                >
                  {value}
                </Button>
              </Grid>
            ))}
            {['4', '5', '6', '×'].map((value) => (
              <Grid item xs={3} key={value}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() =>
                    value === '×' ? handleOperator(value) : handleCalcInput(value)
                  }
                  sx={{
                    bgcolor: value === '×' ? 'warning.main' : 'primary.main',
                  }}
                  aria-label={`Calculator button ${value}`}
                >
                  {value}
                </Button>
              </Grid>
            ))}
            {['1', '2', '3', '−'].map((value) => (
              <Grid item xs={3} key={value}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() =>
                    value === '−' ? handleOperator(value) : handleCalcInput(value)
                  }
                  sx={{
                    bgcolor: value === '−' ? 'warning.main' : 'primary.main',
                  }}
                  aria-label={`Calculator button ${value}`}
                >
                  {value}
                </Button>
              </Grid>
            ))}
            {['0', '.', '=', '+'].map((value) => (
              <Grid item xs={3} key={value}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() =>
                    value === '='
                      ? calculateResult()
                      : value === '+'
                      ? handleOperator(value)
                      : handleCalcInput(value)
                  }
                  sx={{
                    bgcolor:
                      value === '=' || value === '+' ? 'warning.main' : 'primary.main',
                  }}
                  aria-label={`Calculator button ${value}`}
                >
                  {value}
                </Button>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button
                variant="outlined"
                fullWidth
                onClick={clearCalculator}
                sx={{ mt: 1, color: 'error.main', borderColor: 'error.main' }}
                aria-label="Clear calculator"
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* === Interactive Buttons === */}
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          🎯 Buttons & Interactions
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
        </Box>
      </Box>

      {/* === Form Input === */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          📝 Form Input
        </Typography>
        <TextField
          label="Enter your name"
          variant="outlined"
          fullWidth
          aria-label="Name input"
        />
      </Box>

      {/* === Card Component === */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          📦 Card Component
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h6">Material Card</Typography>
            <Typography variant="body2" color="text.secondary">
              Cards let you group related content. This one’s basic—but elegant.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>

      {/* === Alert === */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          ⚠️ Alert
        </Typography>
        <Alert severity="info">
          This is an informational alert—great for notices.
        </Alert>
      </Box>

      {/* === Toggle Switch === */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          🌗 Toggle Switch
        </Typography>
        <Switch defaultChecked aria-label="Toggle switch" />
      </Box>

      {/* === Slider === */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          🎚️ Slider
        </Typography>
        <Slider defaultValue={30} aria-label="Volume slider" />
      </Box>

      {/* === Accordion === */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          📂 Accordion
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Click to Expand</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Accordions hide or reveal content dynamically. Handy for FAQs!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* === AI Tools Table === */}
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          🤖 Top 10 AI Tools of 2024–2025
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Tables are a great way to show structured data. Below are some cutting-edge AI tools and what they do.
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="AI tools table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>#</strong>
                </TableCell>
                <TableCell>
                  <strong>Tool</strong>
                </TableCell>
                <TableCell>
                  <strong>Category</strong>
                </TableCell>
                <TableCell>
                  <strong>Use Case</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                {
                  id: 1,
                  name: 'ChatGPT',
                  url: 'https://chat.openai.com',
                  category: 'Conversational AI',
                  use: 'Text generation & coding assistant',
                },
                {
                  id: 2,
                  name: 'Midjourney',
                  url: 'https://www.midjourney.com',
                  category: 'Generative Art',
                  use: 'AI-generated images',
                },
                {
                  id: 3,
                  name: 'Claude AI',
                  url: 'https://claude.ai',
                  category: 'Conversational AI',
                  use: 'Writing & data interpretation',
                },
                {
                  id: 4,
                  name: 'Perplexity AI',
                  url: 'https://www.perplexity.ai',
                  category: 'Search Engine',
                  use: 'AI-powered Q&A',
                },
                {
                  id: 5,
                  name: 'GitHub Copilot',
                  url: 'https://github.com/features/copilot',
                  category: 'Developer Tools',
                  use: 'AI code suggestions',
                },
                {
                  id: 6,
                  name: 'Runway ML',
                  url: 'https://runwayml.com',
                  category: 'Video/Visual AI',
                  use: 'Video editing with AI',
                },
                {
                  id: 7,
                  name: 'Sora by OpenAI',
                  url: 'https://openai.com/sora',
                  category: 'Generative Video',
                  use: 'AI-generated video creation',
                },
                {
                  id: 8,
                  name: 'Notion AI',
                  url: 'https://www.notion.so/product/ai',
                  category: 'Productivity',
                  use: 'Docs & project automation',
                },
                {
                  id: 9,
                  name: 'Descript',
                  url: 'https://www.descript.com',
                  category: 'Audio/Video',
                  use: 'Podcast & video editing',
                },
                {
                  id: 10,
                  name: 'Mistral',
                  url: 'https://mistral.ai',
                  category: 'Open-Source AI',
                  use: 'Lightweight language models',
                },
              ].map((tool) => (
                <TableRow key={tool.id}>
                  <TableCell>{tool.id}</TableCell>
                  <TableCell>
                    <Link
                      href={tool.url}
                      target="_blank"
                      rel="noopener"
                      underline="hover"
                    >
                      {tool.name}
                    </Link>
                  </TableCell>
                  <TableCell>{tool.category}</TableCell>
                  <TableCell>{tool.use}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <footer style={{ marginTop: '4rem', textAlign: 'center', color: '#999' }}>
        Material UI Learning Section
      </footer>
    </Container>
  );
}