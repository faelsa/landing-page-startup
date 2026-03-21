import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const footerLinks = {
    Home: ['Home', 'Adversite', 'Supports', 'Marketing', 'Contact'],
    Company: ['About Us', 'Services', 'Our Plan', 'Our Carears', 'Team'],
    Help: ['Help Center', 'Our Support', 'Terms & Conditions', 'Privacy Policy', 'Cookie Policy']
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#fb923c] rounded-lg rotate-12 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm -rotate-12" />
              </div>
              <h1 className="text-xl font-bold text-[#0f172a]">StartupLanding</h1>
            </div>
            <p className="text-gray-500 max-w-xs leading-relaxed">
              Build an incredible workplace and grow your business with Gusto's all-in-one platform with amazing contents.
            </p>
            <div className="flex gap-4">
              {[faFacebookF, faTwitter, faGithub, faDribbble].map((icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#00a9f6] hover:text-white transition-all shadow-sm"
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h3 className="font-bold text-[#0f172a] text-lg">{title}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-[#00a9f6] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} StartupLanding. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
