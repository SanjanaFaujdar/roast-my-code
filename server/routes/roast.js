const express = require('express');
const { nanoid } = require('nanoid');
const Groq = require('groq-sdk');
const Snippet = require('../models/Snippet');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const router = express.Router();

router.post('/roast', async (req, res) => {
  try {
    const { code, language, isPublic } = req.body;
    console.log('isPublic value:', isPublic);
    console.log('Full body:', req.body);

    if (!code || !language) {
      return res.status(400).json({ error: 'code and language are required' });
    }

    const slug = nanoid(10);

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'system',
          content: 'You are a brutally honest senior developer. Review the code for bugs, bad practices, and inefficiencies. Be direct, specific but constructive. Keep response under 200 words.',
        },
        {
          role: 'user',
          content: `Review this ${language} code:\n\n${code}`,
        },
      ],
    });

    const roastText = completion?.choices?.[0]?.message?.content?.trim() || '';

    const snippet = new Snippet({ 
      code, 
      language, 
      slug, 
      roast: roastText, 
      isPublic: isPublic === true || isPublic === 'true' ? true : false
    });
    
    const savedSnippet = await snippet.save();
    console.log('Saved snippet isPublic:', savedSnippet.isPublic);
    res.status(201).json(savedSnippet);
  } catch (error) {
    console.error('Error creating roast snippet:', error.message);
    res.status(500).json({ error: 'Failed to create roast snippet' });
  }
});

router.get('/wall', async (req, res) => {
  try {
    const snippets = await Snippet.find({ isPublic: true }).sort({ createdAt: -1 });
    console.log('Wall snippets found:', snippets.length);
    res.json(snippets);
  } catch (error) {
    console.error('Error fetching public snippets:', error);
    res.status(500).json({ error: 'Failed to fetch public snippets' });
  }
});

router.get('/snippet/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const snippet = await Snippet.findOne({ slug });

    if (!snippet) {
      return res.status(404).json({ message: 'Snippet not found' });
    }

    res.json(snippet);
  } catch (error) {
    console.error('Error fetching snippet:', error);
    res.status(500).json({ error: 'Failed to fetch snippet' });
  }
});

module.exports = router;