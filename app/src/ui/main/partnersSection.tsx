import { motion } from 'framer-motion';
import OptimizedImage from '../optimizeImage';
export const PARTNERS = [
  { id: 1, name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { id: 2, name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { id: 3, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { id: 4, name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { id: 5, name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { id: 6, name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { id: 7, name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
  { id: 8, name: "Coca-Cola", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Coca-Cola_logo.svg" },
  { id: 9, name: "Pepsi", logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Pepsi_logo_2014.svg" },
  { id: 10, name: "Starbucks", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Starbucks_Corporation_Logo_2011.svg" },
  { id: 11, name: "Mercedes-Benz", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
  { id: 12, name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
];



export function TrustedCompaniesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20  bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10  ">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[var(--color-base)] font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
            شرکای تجاری ما
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-shade-80)] mb-3">
            اعتماد برندهای برتر
          </h2>
          <p className="text-[var(--color-shade-60)] max-w-2xl mx-auto text-sm sm:text-base">
            بیش از ۱۵۰ سازمان معتبر به کیفیت محصولات ما اعتماد کرده‌اند
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center mb-12">
          {PARTNERS.map((partner) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="   relative  flex items-center justify-center  mx-auto align-middle"
            >
              <OptimizedImage
              width={60}
              height={50}
                src={partner.logo}
                alt={partner.name}
              />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8  pt-8">
          <div className="text-center p-4  rounded-lg">
            <h4 className="text-3xl sm:text-4xl font-bold text-[var(--color-base)] mb-2">
              +۱۵۰
            </h4>
            <p className="text-xs sm:text-sm text-[var(--color-shade-60)] font-medium">سازمان و شرکت</p>
          </div>
          <div className="text-center p-4  rounded-lg">
            <h4 className="text-3xl sm:text-4xl font-bold text-[var(--color-base)] mb-2">
              ۹۸٪
            </h4>
            <p className="text-xs sm:text-sm text-[var(--color-shade-60)] font-medium">رضایت مشتریان</p>
          </div>
          <div className="text-center p-4  rounded-lg">
            <h4 className="text-3xl sm:text-4xl font-bold text-[var(--color-base)] mb-2">
              ۲۴/۷
            </h4>
            <p className="text-xs sm:text-sm text-[var(--color-shade-60)] font-medium">پشتیبانی آنلاین</p>
          </div>
        </div>
      </div>
    </section>
  );
}
