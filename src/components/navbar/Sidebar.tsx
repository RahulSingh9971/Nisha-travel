import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdClose, MdExpandMore, MdExpandLess } from "react-icons/md";

// --- Types & Interfaces ---
interface SubMenuCol2 {
  title: string;
  to?: string;
}

interface SubMenuCol1 {
  id: string;
  title: string;
  to: string;
  col2?: SubMenuCol2[];
}

interface DropdownType {
  subMenuCol1: SubMenuCol1[];
}

type NavLinkType = {
  title: string;
  to: string;
  dropdown?: DropdownType[];
};

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  navLinks: NavLinkType[];
  logo: string;
}
const Icon = MdClose as any; 

const Sidebar: React.FC<SidebarProps> = ({ open, onClose, navLinks, logo }) =>{

const MdCloseIcon = MdClose as React.ElementType;
const MdExpandMoreIcon = MdExpandMore as React.ElementType;
const MdExpandLessIcon = MdExpandLess as React.ElementType;
  // Konsa dropdown khula hai uske liye state
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Jab sidebar band ho to dropdowns bhi reset kar do
  useEffect(() => {
    if (!open) setOpenDropdown(null);
    
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };
    return (
  <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}>
    <div
      className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-200 ${
        open ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    />
    <aside
      className={`fixed top-0 left-0 h-full w-[86vw] md:max-w-lg max-w-xs bg-white shadow-xl z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex items-center justify-between pr-4 py-4 border-b">
        <Link to="/" className="flex items-center" onClick={onClose}>
          <img src={logo} alt="Logo" className="md:h-20 h-[65px] w-auto" />
         
        </Link>
        <Icon  className="md:text-4xl text-3xl text-[#002661] cursor-pointer" onClick={onClose} />
      </div>
    {/* Navigation */}
        <nav className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto px-4 py-4 pb-20">
          {navLinks.map((link, idx) => {
            const hasDropdown = !!(link.dropdown && link.dropdown[0]?.subMenuCol1);
            const isExpanded = openDropdown === link.title;

            return (
              <div key={idx} className="border-b border-gray-50 last:border-0">
                <div className="flex items-center justify-between w-full">
                  <Link
                    to={link.to}
                    className="flex-grow py-4 text-[17px] font-semibold text-[#002661]"
                    onClick={onClose}
                  >
                    {link.title}
                  </Link>
                  
                  {hasDropdown && (
                    <button
                      onClick={() => toggleDropdown(link.title)}
                      className="p-4 text-[#002661] border-l border-gray-50"
                    >
                      {isExpanded ? <MdExpandLessIcon size={24} /> : <MdExpandMoreIcon size={24} />}
                    </button>
                  )}
                </div>

                {/* Dropdown Content */}
                {hasDropdown && isExpanded && (
                  <div className="bg-gray-50 px-4 pb-4 space-y-3">
                    {link.dropdown![0].subMenuCol1.map((sub) => (
                      <div key={sub.id} className="pt-2">
                        <Link
                          to={sub.to}
                          className="block text-[15px] font-medium text-gray-700 hover:text-blue-600"
                          onClick={onClose}
                        >
                          • {sub.title}
                        </Link>
                        
                        {/* Level 2 items (Optional) */}
                        {sub.col2 && (
                          <div className="ml-4 mt-1 space-y-1">
                            {sub.col2.map((c2, i) => (
                              <Link
                                key={i}
                                to={c2.to || "#"}
                                className="block text-xs text-gray-500 py-1"
                                onClick={onClose}
                              >
                                {c2.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
    </aside>
  </div>
);
}

export default Sidebar;
