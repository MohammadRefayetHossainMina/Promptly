// =============================================
// script.js — Interactions & Animations
// =============================================

// 1) Scroll reveal — cards gently appear when they scroll into view.
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el) => revealObserver.observe(el));

// 2) Copy button — copies the demo prompt and gives quick feedback.
function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  return Promise.resolve();
}

const copyButton = document.getElementById('demo-copy');
const promptText = document.querySelector('.prompt-card-text');

// 3) Mobile menu toggle
const menuToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isActive = menuToggle.classList.contains('navbar-toggle--active');
    menuToggle.classList.toggle('navbar-toggle--active');
    menuToggle.setAttribute('aria-expanded', !isActive);
    navLinks.classList.toggle('nav-links-active');
  });
}

copyButton.addEventListener('click', () => {
  copyText(promptText.textContent.trim());

  const originalText = copyButton.textContent;
  copyButton.textContent = 'Copied!';
  copyButton.classList.add('btn-copied');

  setTimeout(() => {
    copyButton.textContent = originalText;
    copyButton.classList.remove('btn-copied');
  }, 1500);
});

// =============================================
// 4) Prompt library — Save, list, and copy
// =============================================

const STORAGE_KEY = 'promptly.prompts';

function loadPrompts() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    return [];
  }
}

function savePrompts(prompts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prompts));
}

const savedList = document.getElementById('saved-prompts');
const emptyState = document.getElementById('empty-state');
const promptForm = document.getElementById('prompt-form');
const titleInput = document.getElementById('prompt-title');
const textInput = document.getElementById('prompt-text');
const formNote = document.getElementById('form-note');

function renderPrompts() {
  const prompts = loadPrompts();

  savedList.querySelectorAll('.saved-card').forEach((card) => card.remove());

  if (prompts.length === 0) {
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;

  prompts.forEach((prompt) => {
    const card = document.createElement('article');
    card.className = 'saved-card';

    const top = document.createElement('div');
    top.className = 'saved-card-top';

    const title = document.createElement('span');
    title.className = 'saved-card-title';
    title.textContent = prompt.title;

    const copyBtn = document.createElement('button');
    copyBtn.className = 'btn btn-primary btn-sm';
    copyBtn.type = 'button';
    copyBtn.textContent = 'Copy';

    top.appendChild(title);
    top.appendChild(copyBtn);

    const text = document.createElement('p');
    text.className = 'saved-card-text';
    text.textContent = prompt.text;

    card.appendChild(top);
    card.appendChild(text);
    savedList.appendChild(card);

    copyBtn.addEventListener('click', () => {
      copyText(prompt.text);
      copyBtn.textContent = 'Copied!';
      copyBtn.classList.add('btn-copied');

      setTimeout(() => {
        copyBtn.textContent = 'Copy';
        copyBtn.classList.remove('btn-copied');
      }, 1500);
    });
  });
}

promptForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  const text = textInput.value.trim();

  if (!title || !text) {
    formNote.textContent = 'Please add both a title and the prompt text.';
    return;
  }

  const prompts = loadPrompts();
  prompts.push({ title, text });
  savePrompts(prompts);
  renderPrompts();

  titleInput.value = '';
  textInput.value = '';
  formNote.textContent = 'Saved!';
});

renderPrompts();