import React, { useState } from 'react';
import {
  Button, Typography, Container, Box, TextField,
  Card, CardContent, CardActions, Alert, Switch,
  Slider, Accordion, AccordionSummary, AccordionDetails,
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Link, List, ListItem, ListItemText, IconButton
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MaterialPage() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
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
        <Typography variant="h5" gutterBottom>Counter App</Typography>
        <Typography variant="body2" paragraph>
          Shows <code>useState</code>, button event handling, and rendering.
        </Typography>
        <Typography variant="h6">Count: {count}</Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
          <Button variant="contained" onClick={() => setCount(count + 1)}>Increment</Button>
          <Button variant="outlined" onClick={() => setCount(count - 1)}>Decrement</Button>
          <Button variant="text" onClick={() => setCount(0)}>Reset</Button>
        </Box>
      </Box>

      {/* === To-Do List === */}
      <Box sx={{ marginBottom: 6 }}>
        <Typography variant="h5" gutterBottom>To-Do List</Typography>
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
          />
          <Button variant="contained" onClick={addTask}>Add</Button>
        </Box>
        <List>
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={task} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Section: Interactive Buttons */}
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          🎯 Buttons & Interactions
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="outlined" color="secondary">Secondary</Button>
        </Box>
      </Box>

      {/* Section: Text Input */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          📝 Form Input
        </Typography>
        <TextField label="Enter your name" variant="outlined" fullWidth />
      </Box>

      {/* Section: Card */}
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

      {/* Section: Alert */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          ⚠️ Alert
        </Typography>
        <Alert severity="info">This is an informational alert—great for notices.</Alert>
      </Box>

      {/* Section: Toggle */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          🌗 Toggle Switch
        </Typography>
        <Switch defaultChecked />
      </Box>

      {/* Section: Slider */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          🎚️ Slider
        </Typography>
        <Slider defaultValue={30} aria-label="Volume" />
      </Box>

      {/* Section: Accordion */}
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

      {/* Section: AI Tools Table */}
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          🤖 Top 10 AI Tools of 2024–2025
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Tables are a great way to show structured data. Below are some cutting-edge AI tools and what they do.
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>#</strong></TableCell>
                <TableCell><strong>Tool</strong></TableCell>
                <TableCell><strong>Category</strong></TableCell>
                <TableCell><strong>Use Case</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { id: 1, name: 'ChatGPT', url: 'https://chat.openai.com', category: 'Conversational AI', use: 'Text generation & coding assistant' },
                { id: 2, name: 'Midjourney', url: 'https://www.midjourney.com', category: 'Generative Art', use: 'AI-generated images' },
                { id: 3, name: 'Claude AI', url: 'https://claude.ai', category: 'Conversational AI', use: 'Writing & data interpretation' },
                { id: 4, name: 'Perplexity AI', url: 'https://www.perplexity.ai', category: 'Search Engine', use: 'AI-powered Q&A' },
                { id: 5, name: 'GitHub Copilot', url: 'https://github.com/features/copilot', category: 'Developer Tools', use: 'AI code suggestions' },
                { id: 6, name: 'Runway ML', url: 'https://runwayml.com', category: 'Video/Visual AI', use: 'Video editing with AI' },
                { id: 7, name: 'Sora by OpenAI', url: 'https://openai.com/sora', category: 'Generative Video', use: 'AI-generated video creation' },
                { id: 8, name: 'Notion AI', url: 'https://www.notion.so/product/ai', category: 'Productivity', use: 'Docs & project automation' },
                { id: 9, name: 'Descript', url: 'https://www.descript.com', category: 'Audio/Video', use: 'Podcast & video editing' },
                { id: 10, name: 'Mistral', url: 'https://mistral.ai', category: 'Open-Source AI', use: 'Lightweight language models' },
              ].map((tool) => (
                <TableRow key={tool.id}>
                  <TableCell>{tool.id}</TableCell>
                  <TableCell>
                    <Link href={tool.url} target="_blank" rel="noopener" underline="hover">
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
