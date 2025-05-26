import React from 'react';
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
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Link
} from '@mui/material';


export default function MaterialPage() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h3" gutterBottom>
        Material UI Demo Page
      </Typography>

      <Typography variant="body1" paragraph>
        This page shows a few basic Material UI components.
      </Typography>

{/* AI Tools Table */}
<Box sx={{ marginTop: 6, marginBottom: 4 }}>
  <Typography variant="h6" gutterBottom>
    Top 10 AI Tools of 2024–2025
  </Typography>
  <Typography variant="body2" color="text.secondary" paragraph>
    Understanding how to integrate and style outputs from AI tools—like chat interfaces or image generation—is now a critical front-end skill.
  </Typography>
  <TableContainer component={Paper}>
    <Table aria-label="AI Tools Table">
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



      {/* Buttons */}
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 4 }}>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary Button
        </Button>
      </Box>

      {/* TextField */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6">Input Field</Typography>
        <TextField label="Your Name" variant="outlined" fullWidth />
      </Box>

      {/* Card */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6">Card</Typography>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Card Title
            </Typography>
            <Typography color="text.secondary">
              This is an example of a Material UI card component.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>

      {/* Alert */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6">Alert</Typography>
        <Alert severity="info">This is an info alert!</Alert>
      </Box>

      {/* Switch */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6">Toggle Switch</Typography>
        <Switch defaultChecked />
      </Box>

      {/* Slider */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6">Slider</Typography>
        <Slider defaultValue={30} aria-label="Volume" />
      </Box>

      {/* Accordion */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6">Accordion</Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Click to Expand</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Here’s some detailed content hidden in the accordion.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
