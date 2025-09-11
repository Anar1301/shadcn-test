export const Footer = () => {
  return (
    <div className="bg-indigo-700 w-360 h-70 mt-12.5 flex m-auto">
      <div>
        <div className="flex items-center mt-10 ml-25 gap-2">
          <img src="footer-logo.svg" />
          <span className="text-white">Movie Z</span>
        </div>
        <h6 className="font-normal text-sm text-white ml-25 mt-3">
          © 2024 Movie Z. All Rights Reserved.
        </h6>
      </div>
      <div>
        <h6 className="font-normal text-sm text-white ml-122 mt-10">
          Contact Information
        </h6>
        <div>
          <div className="ml-122 mt-3 flex gap-3">
            <img src="Wifi icon.svg" />
            <div>
              <h6 className="font-normal text-sm text-white">Email:</h6>
              <h6 className="font-normal text-sm text-white">
                support@movieZ.com
              </h6>
            </div>
          </div>
          <div className="ml-122 mt-6 flex gap-3">
            <img src="phone-logo.svg" />
            <div>
              <h6 className="font-normal text-sm text-white">Phone:</h6>
              <h6 className="font-normal text-sm text-white">
                +976 (11) 123-4567
              </h6>
            </div>
          </div>
          </div>
          </div>
          <div className="mt-10">
          <div className=" text-white font-normal text-sm ml-30">Follow us: </div>
          <div className="flex ml-30 text-white gap-3 mt-3">
            <h2 className=" font-normal text-sm">Facebook</h2>
            <h2 className=" font-normal text-sm">Instagram</h2>
            <h2 className=" font-normal text-sm">Twitter</h2>
            <h2 className=" font-normal text-sm">Youtube</h2>
          </div>
        </div>
      
    </div>
  );
};
 
 