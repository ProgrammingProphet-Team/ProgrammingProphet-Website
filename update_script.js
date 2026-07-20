const fs = require('fs');
const path = require('path');

const contactUsPath = path.join('src', 'pages', 'ContactUs.tsx');
const projectModalPath = path.join('src', 'components', 'ProjectModal.tsx');

const contactUsContent = fs.readFileSync(contactUsPath, 'utf8');
let projectModalContent = fs.readFileSync(projectModalPath, 'utf8');

// Extract imports from ContactUs
const shieldCheckImportRegex = /ShieldCheck/;
if (!shieldCheckImportRegex.test(projectModalContent)) {
  projectModalContent = projectModalContent.replace(
    'import { X, Paperclip, Smartphone, Mail, CheckCircle2 } from \'lucide-react\';',
    'import { X, Paperclip, Smartphone, Mail, CheckCircle2, ShieldCheck } from \'lucide-react\';'
  );
}

// Extract the logic (state and functions) from ContactUs
const logicMatch = contactUsContent.match(/const \[formData.*?const handleSubmit = async.*?\n  };/s);
if (logicMatch) {
  let logic = logicMatch[0];
  // Replace the start of ProjectModal with logic
  projectModalContent = projectModalContent.replace(
    /export const ProjectModal = \({ isOpen, onClose }: ProjectModalProps\) => {/,
    'export const ProjectModal = ({ isOpen, onClose }: ProjectModalProps) => {\n  ' + logic + '\n'
  );
}

// Extract the form JSX from ContactUs
const formMatch = contactUsContent.match(/<form onSubmit={handleSubmit}.*?<\/form>/s);
if (formMatch) {
  const formJsx = formMatch[0];
  // Replace the form in ProjectModal
  projectModalContent = projectModalContent.replace(
    /<form className="space-y-8" onSubmit={\(e\) => e.preventDefault\(\)}>.*?<\/form>/s,
    formJsx
  );
}

fs.writeFileSync(projectModalPath, projectModalContent);
console.log('Successfully updated ProjectModal.tsx');
