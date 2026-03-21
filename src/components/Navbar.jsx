export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-100 py-6">
      <div className="flex items-center space-x-10">
              <h2 className="text-2xl font-bold">Logo</h2>

      <ul className="flex items-center space-x-6 pt-1">
        <li><a href="#" className="hover:text-blue-500 text-sm">Home</a></li>
        <li>
          <a href="#" className="hover:text-blue-500 text-sm flex items-center gap-1">
            Adversite
            <svg className="w-2.5 h-2.5 fill-current mt-0.5" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </a>
        </li>
        <li><a href="#" className="hover:text-blue-500 text-sm">Supports</a></li>
        <li><a href="#" className="hover:text-blue-500 text-sm">About</a></li>
      </ul>
      </div>

      <div className="flex items-center space-x-8">
        <a href="#" className="text-[#0f172a] font-bold hover:text-blue-500">Login</a>
        <div className="relative group cursor-pointer">
          <span className="text-[#00a9f6] font-bold hover:text-blue-500">Get Started</span>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00a9f6] rounded-full group-hover:bg-[#00a9f6]"></div>
        </div>
      </div>
    </nav>
  )
}
