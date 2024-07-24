import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-400/10 bottom-0 text-black py-6">
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    <div className="flex space-x-4 mb-4 md:mb-0">
      <a href="/about" className="text-gray-400 hover:text-gray-300 transition-colors">About</a>
      <a href="/contact" className="text-gray-400 hover:text-gray-300 transition-colors">Contact</a>
    </div>

    {/* Social Media Icons */}
    <div className="flex mt-4 md:mt-0 space-x-4">
      <a href="https://www.instagram.com/eko_skills_ghana?igsh=ajhlaWk0NnhwYWow" className="w-6 h-6 text-gray-400 hover:text-gray-300 transition-colors">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
          <path d="M12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.469a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>
        </svg>
      </a>
      <a href="https://x.com/EkoSkills?t=i_bnskZGva2cM3ij680dHQ&s=08" className="w-6 h-6 text-gray-400 hover:text-gray-300 transition-colors">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100089025216850&mibextid=ngobeXctTp5pD3Zm" className="w-6 h-6 text-gray-400 hover:text-gray-300 transition-colors">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/eko-skills-ghana-156762318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-6 h-6 text-gray-400 hover:text-gray-300 transition-colors">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
        </svg>
      </a>
    </div>

    <div className="text-gray-400 mt-4 md:mt-0">
      &copy; 2024 Eko Skills Ghana. All rights reserved.
    </div>
  </div>
</footer>
  )
}

export default Footer