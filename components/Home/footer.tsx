export const Footer = () => {
  return (
    <footer className="w-full bg-[#4338CA] text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Copyright */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/footer-logo.svg" alt="Movie Z" className="h-6 w-6" />
            <p className="font-semibold text-lg">Movie Z</p>
          </div>
          <p className="text-sm text-gray-200">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact Information</h3>
          <div className="flex items-start gap-3 mb-3">
            <img src="/globe.svg" alt="Email" className="h-5 w-5 mt-1" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-gray-200">support@movieZ.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src="/phone-logo.svg" alt="Phone" className="h-5 w-5 mt-1" />
            <div>
              <p className="text-sm font-medium">Phone</p>
              <p className="text-sm text-gray-200">+976 (11) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3">Follow us: </h3>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Facebook
            </a>
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <a href="#" className="hover:underline">
              Twitter
            </a>
            <a href="#" className="hover:underline">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
