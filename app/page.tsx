"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Building2,
  Check,
  ChevronDown,
  CircleDot,
  ClipboardCheck,
  Download,
  FileText,
  FlaskConical,
  HeartPulse,
  Mail,
  Menu,
  Microscope,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  TestTube2,
  Truck,
  X
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { filters, products, type Product } from "@/lib/products";
import { priceList, priceListNote } from "@/lib/priceList";

const whatsapp = "919839075493";
const navItems = ["Products", "Price List", "Partners", "IVF", "Enquiry", "Contact"];

const categories = [
  ["IVF Products", "IVF", FlaskConical],
  ["IUI Devices", "IUI", Syringe],
  ["Wash Media", "IVF", Microscope],
  ["Sperm Processing Kits", "ART", Activity],
  ["Gynaecology Products", "Gynaecology", HeartPulse],
  ["Surgical Disposables", "Surgical", ShieldCheck]
] as const;

const heroShowcase = [
  products[4],
  products[5],
  products[7],
  products[8]
] as const;

const partners = [
  {
    name: "Hi-Care Plastics",
    logo: "HC",
    url: "https://www.hicareindia.com/",
    description: "Medical consumables and PPE company serving clinics, medical centres and hospitals.",
    products: "Masks, gloves, PPE kits, face shields and infection-control disposables"
  },
  {
    name: "Hope Meditek",
    logo: "HM",
    url: "https://www.hopemeditek.com/",
    description: "Infertility care manufacturer and supplier with ART, IUI and IVF disposable ranges.",
    products: "IUI cannulas, wash media, biopsy curettes, pipets and IVF lab disposables"
  },
  {
    name: "Surginova",
    logo: "SN",
    url: "https://surginova.in/",
    description: "Surgical and gynaecology medical device brand focused on doctor-led product needs.",
    products: "IUI catheters, HSG devices, probe covers, biopsy curettes and surgical devices"
  }
];

const benefits = [
  ["Exclusive Distribution Rights", BadgeCheck],
  ["Doctor Approved Products", Stethoscope],
  ["Prompt Delivery", Truck],
  ["Technical Guidance", Sparkles],
  ["Quality Assurance", ShieldCheck],
  ["Pan Uttar Pradesh Distribution Rights", Building2]
] as const;

const contactSteps = [
  ["Clinical request", Stethoscope],
  ["Product matched", TestTube2],
  ["Quality checked", ClipboardCheck],
  ["UP delivery", Truck]
] as const;

function waLink(message: string) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ProductDetail({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <motion.div layout className="floating-card overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[320px] bg-medical-ice">
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-contain p-8" />
        </div>
        <div className="p-7 sm:p-9">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="eyebrow">{product.manufacturer}</p>
              <h3 className="mt-3 text-3xl font-bold text-medical-navy">{product.name}</h3>
            </div>
            <button aria-label="Close product details" onClick={onClose} className="rounded-full border border-slate-200 p-2 text-medical-navy transition hover:bg-medical-ice">
              <X size={18} />
            </button>
          </div>
          <p className="mt-5 text-base leading-8 text-slate-600">{product.description}</p>
          <div className="mt-6 grid gap-3">
            {product.details.map((detail) => (
              <div key={detail} className="flex gap-3 rounded-2xl bg-medical-section p-4 text-sm text-slate-700">
                <Check className="mt-0.5 shrink-0 text-medical-blue" size={17} />
                <span>{detail}</span>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="btn-primary" href={waLink(`Please share a quote for ${product.name} by ${product.manufacturer}.`)} target="_blank" rel="noreferrer">
              Request Quote
            </a>
            <a className="btn-secondary" href={product.source} target="_blank" rel="noreferrer">
              Source Website <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(products[2]);
  const [heroFrame, setHeroFrame] = useState(0);
  const [openSupplier, setOpenSupplier] = useState<string | null>(priceList[0]?.supplier ?? null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroFrame((frame) => (frame + 1) % heroShowcase.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const visibleProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesFilter = activeFilter === "All" || product.category === activeFilter;
      const text = `${product.name} ${product.manufacturer} ${product.description} ${product.category}`.toLowerCase();
      return matchesFilter && text.includes(query.toLowerCase());
    });
  }, [activeFilter, query]);

  const primaryHeroProduct = heroShowcase[heroFrame];
  const secondaryHeroProduct = heroShowcase[(heroFrame + 2) % heroShowcase.length];

  const selectCategory = (filter: Product["category"]) => {
    setActiveFilter(filter);
    setQuery("");
    setSelectedProduct(products.find((product) => product.category === filter) ?? null);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const showProductDetails = (product: Product) => {
    setSelectedProduct(product);
    window.setTimeout(() => {
      document.getElementById("product-detail")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);
  };

  return (
    <main className="overflow-hidden">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-2xl bg-medical-navy text-lg font-black text-white shadow-soft">
              <span className="text-medical-blue">S</span>E
            </div>
            <div>
              <p className="text-base font-black tracking-normal text-medical-navy">Sanjay Enterprises</p>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-medical-blue">Surgical Disposables Supplier</p>
            </div>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm font-bold text-slate-600 transition hover:text-medical-blue">
                {item}
              </a>
            ))}
          </div>
          <a href={waLink("I would like to discuss IVF, fertility or surgical products.")} target="_blank" rel="noreferrer" className="hidden sm:inline-flex btn-primary">
            WhatsApp Now
          </a>
          <button className="rounded-full border border-slate-200 p-3 lg:hidden" aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <section className="relative bg-white pt-32 sm:pt-40">
        <div className="absolute right-[-12vw] top-24 size-[46vw] rounded-full bg-gradient-to-br from-medical-ice via-sky-100 to-white blur-sm" />
        <div className="section-shell relative grid min-h-[720px] items-center gap-14 pb-20 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal>
            <p className="eyebrow">Exclusive healthcare distribution</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.04] tracking-normal text-medical-navy sm:text-6xl lg:text-7xl">
              Trusted IVF, Fertility & Surgical Solutions Across India
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Exclusive distribution partner for leading IVF, fertility, gynaecology and surgical healthcare brands.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#products" className="btn-primary">Explore Products</a>
              <a href="#contact" className="btn-secondary">Contact Us</a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {["20+ Years Industry Presence", "Trusted by Leading Doctors", "PAN Uttar Pradesh Distribution", "Technical Product Support"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-full bg-medical-section px-5 py-3 text-sm font-bold text-medical-navy">
                  <Check size={17} className="text-medical-blue" /> {item}
                </div>
              ))}
            </div>
          </Reveal>
          <div className="relative min-h-[560px]">
            <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute left-6 top-4 w-[72%] floating-card p-5">
              <motion.div key={primaryHeroProduct.id} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="overflow-hidden rounded-2xl bg-medical-ice">
                <Image src={primaryHeroProduct.image} alt={primaryHeroProduct.name} width={520} height={360} className="h-64 w-full object-contain p-6" priority />
              </motion.div>
              <p className="mt-4 font-bold text-medical-navy">{primaryHeroProduct.name}</p>
            </motion.div>
            <motion.div animate={{ y: [0, 18, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-12 right-0 w-[62%] floating-card p-5">
              <motion.div key={secondaryHeroProduct.id} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="overflow-hidden rounded-2xl bg-white">
                <Image src={secondaryHeroProduct.image} alt={secondaryHeroProduct.name} width={420} height={320} className="h-52 w-full object-contain p-5" />
              </motion.div>
              <p className="mt-4 font-bold text-medical-navy">{secondaryHeroProduct.name}</p>
            </motion.div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-0 glass rounded-[24px] p-5 shadow-float">
              <p className="text-4xl font-black text-medical-blue">1000+</p>
              <p className="mt-1 text-sm font-bold text-medical-navy">Healthcare professionals served</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-medical-section py-8">
        <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {categories.map(([label, filter, Icon]) => (
            <Reveal key={label}>
              <button type="button" onClick={() => selectCategory(filter)} className="group flex h-full w-full flex-col items-start gap-4 rounded-[20px] bg-white p-5 text-left shadow-sm transition hover:-translate-y-2 hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-medical-blue/15">
                <span className="grid size-12 place-items-center rounded-2xl bg-medical-ice text-medical-blue"><Icon size={22} /></span>
                <span className="text-sm font-black text-medical-navy">{label}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <p className="eyebrow">About Sanjay Enterprises (Formally Sanjay Marketing)</p>
            <h2 className="section-title mt-4">A specialist partner for clinical procurement teams and doctors.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Sanjay Enterprises supports fertility clinics, IVF labs, gynaecologists and surgical buyers with curated manufacturer partnerships, product guidance and reliable distribution coverage.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {["20+ Years Experience", "1000+ Healthcare Professionals Served", "PAN Uttar Pradesh Distribution", "Exclusive Brand Partnerships"].map((stat, index) => (
              <Reveal key={stat} className={index % 2 ? "sm:mt-10" : ""}>
                <div className="glass rounded-[24px] p-7 shadow-float">
                  <p className="text-4xl font-black text-medical-blue">{stat.split(" ")[0]}</p>
                  <p className="mt-3 font-bold text-medical-navy">{stat.replace(stat.split(" ")[0], "").trim()}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="bg-medical-section py-24">
        <div className="section-shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Exclusive brand partners</p>
            <h2 className="section-title mt-4">Manufacturer relationships presented with enterprise clarity.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {partners.map((partner) => (
              <Reveal key={partner.name}>
                <div className="floating-card h-full p-7 transition hover:-translate-y-2 hover:shadow-soft">
                  <div className="grid size-16 place-items-center rounded-[22px] bg-medical-navy text-xl font-black text-white">{partner.logo}</div>
                  <h3 className="mt-7 text-2xl font-black text-medical-navy">{partner.name}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{partner.description}</p>
                  <p className="mt-5 rounded-2xl bg-medical-ice p-4 text-sm font-semibold leading-6 text-medical-navy">{partner.products}</p>
                  <a className="mt-7 inline-flex items-center gap-2 text-sm font-black text-medical-blue" href={partner.url} target="_blank" rel="noreferrer">
                    Visit Manufacturer <ArrowUpRight size={16} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-24">
        <div className="section-shell">
          <Reveal className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow">Featured products</p>
              <h2 className="section-title mt-4">Manufacturer offerings, organized for clinical discovery.</h2>
            </div>
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-medical-blue focus:ring-4 focus:ring-medical-blue/10" />
            </div>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full px-5 py-2.5 text-sm font-black transition ${activeFilter === filter ? "bg-medical-navy text-white" : "bg-medical-section text-medical-navy hover:bg-medical-ice"}`}>
                {filter}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product) => (
              <motion.button key={product.id} layout onClick={() => showProductDetails(product)} className="floating-card group overflow-hidden text-left transition hover:-translate-y-2 hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-medical-blue/15">
                <div className="relative h-64 bg-medical-ice">
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-7 transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-medical-blue">{product.manufacturer}</p>
                  <h3 className="mt-3 text-xl font-black text-medical-navy">{product.name}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{product.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-medical-blue">View details <ArrowUpRight size={15} /></span>
                </div>
              </motion.button>
            ))}
          </div>
          <div id="product-detail" className="mt-10 scroll-mt-28">{selectedProduct && <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />}</div>
        </div>
      </section>

      <section id="price-list" className="border-t border-slate-100 py-24">
        <div className="section-shell">
          <Reveal className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow">Distributor price list</p>
              <h2 className="section-title mt-4">Full product & pricing catalog, by supplier.</h2>
              <p className="mt-5 leading-7 text-slate-600">{priceListNote}</p>
            </div>
            <a
              href="/SANJAY_ENTERPRISES.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary shrink-0"
            >
              <Download size={17} className="mr-2" /> Download Full Price List (PDF)
            </a>
          </Reveal>

          <div className="mt-12 grid gap-4">
            {priceList.map((group) => {
              const isOpen = openSupplier === group.supplier;
              return (
                <Reveal key={group.supplier}>
                  <div className="floating-card overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenSupplier(isOpen ? null : group.supplier)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-medical-ice text-medical-blue">
                          <FileText size={20} />
                        </span>
                        <div>
                          <p className="text-lg font-black text-medical-navy">
                            {group.supplier}
                            {group.location && <span className="ml-2 text-sm font-semibold text-slate-400">{group.location}</span>}
                          </p>
                          <p className="text-sm text-slate-500">{group.items.length} products</p>
                        </div>
                      </div>
                      <ChevronDown size={20} className={`shrink-0 text-medical-blue transition ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="overflow-x-auto border-t border-slate-100 px-2 pb-2 sm:px-4 sm:pb-4">
                        <table className="w-full min-w-[560px] border-collapse text-sm">
                          <thead>
                            <tr className="text-left text-xs font-black uppercase tracking-[0.1em] text-slate-400">
                              <th className="px-3 py-3">Product</th>
                              <th className="px-3 py-3">Pack</th>
                              <th className="px-3 py-3">Rate (₹)</th>
                              <th className="px-3 py-3">GST</th>
                              <th className="px-3 py-3">HSN Code</th>
                            </tr>
                          </thead>
                          <tbody>
                            {group.items.map((item) => (
                              <tr key={item.name} className="border-t border-slate-100">
                                <td className="px-3 py-3 font-bold text-medical-navy">{item.name}</td>
                                <td className="px-3 py-3 text-slate-600">{item.pack}</td>
                                <td className="px-3 py-3 text-slate-600">{item.rate}</td>
                                <td className="px-3 py-3 text-slate-600">{item.gst}</td>
                                <td className="px-3 py-3 text-slate-600">{item.hsn}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-10">
            <div className="floating-card flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-black text-medical-navy">Need a quote on any item above?</p>
                <p className="mt-1 text-sm text-slate-500">Send the product name and quantity over WhatsApp for a same-day response.</p>
              </div>
              <a className="btn-secondary shrink-0" href={waLink("I would like a quote from the Sanjay Enterprises price list.")} target="_blank" rel="noreferrer">
                Request Quote <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="ivf" className="bg-medical-section py-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="relative h-[560px] overflow-hidden rounded-[24px] shadow-float">
              <Image src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1600&auto=format&fit=crop" alt="Healthcare laboratory" fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal>
            <p className="eyebrow">IVF & fertility solutions</p>
            <h2 className="section-title mt-4">A focused portfolio for ART labs and fertility specialists.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Sperm Processing Kits", "Donor Insemination", "Wash Media", "Autopreservation", "Semen Banking", "ART Products"].map((service) => (
                <div key={service} className="floating-card flex items-center gap-4 p-5">
                  <CircleDot className="text-medical-blue" size={20} />
                  <span className="font-black text-medical-navy">{service}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Surgical disposables</p>
            <h2 className="section-title mt-4">Clean procurement categories for protective clinical supplies.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {["Masks", "Gloves", "Face Shields", "PPE Kits", "Buffant Caps", "Nasal Swabs"].map((item) => (
              <Reveal key={item}>
                <div className="floating-card flex items-center justify-between p-6">
                  <div>
                    <p className="text-xl font-black text-medical-navy">{item}</p>
                    <p className="mt-2 text-sm text-slate-500">Clinical disposable supply</p>
                  </div>
                  <Boxes className="text-medical-blue" size={28} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-medical-section py-24">
        <div className="section-shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Why Sanjay Enterprises</p>
            <h2 className="section-title mt-4">Distribution with technical confidence and clinical context.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([label, Icon]) => (
              <Reveal key={label}>
                <div className="floating-card p-7">
                  <Icon className="text-medical-blue" size={30} />
                  <p className="mt-5 text-lg font-black text-medical-navy">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="py-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Request quote</p>
            <h2 className="section-title mt-4">Send a WhatsApp-ready product enquiry.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">The form opens a WhatsApp conversation with Sanjay Kacker and includes the product requirement details.</p>
          </Reveal>
          <Reveal>
            <form
              className="floating-card grid gap-4 p-6 sm:p-8"
              onSubmit={(event) => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                const message = Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`).join("\n");
                window.open(waLink(`Quote request\n${message}`), "_blank", "noopener,noreferrer");
              }}
            >
              {["Name", "Hospital / Clinic", "Phone", "Email", "Product Required"].map((field) => (
                <input key={field} name={field} required={field !== "Email"} placeholder={field} className="rounded-2xl border border-slate-200 bg-medical-section px-5 py-4 outline-none focus:border-medical-blue focus:ring-4 focus:ring-medical-blue/10" />
              ))}
              <textarea name="Message" placeholder="Message" rows={4} className="rounded-2xl border border-slate-200 bg-medical-section px-5 py-4 outline-none focus:border-medical-blue focus:ring-4 focus:ring-medical-blue/10" />
              <button className="btn-primary" type="submit">Request Quote</button>
            </form>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="bg-medical-navy py-24 text-white">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">Sanjay Kacker</h2>
            <div className="mt-8 grid gap-4">
              <p className="flex items-center gap-3"><Phone className="text-medical-blue" /> +91 9839075493</p>
              <p className="flex items-center gap-3"><Mail className="text-medical-blue" /> sanjaykacker@yahoo.co.in</p>
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <a className="btn-primary" href="tel:+919839075493">Call Now</a>
              <a className="btn-secondary" href={waLink("I would like to contact Sanjay Enterprises.")} target="_blank" rel="noreferrer">WhatsApp Now</a>
              <a className="btn-secondary" href="mailto:sanjaykacker@yahoo.co.in">Email Us</a>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative mx-auto max-w-lg overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-6 shadow-float">
              <div className="absolute inset-x-8 top-1/2 h-px bg-medical-blue/40" />
              <div className="absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px bg-white/15" />
              <div className="relative grid gap-4 sm:grid-cols-2">
                {contactSteps.map(([label, Icon], index) => (
                  <motion.div
                    key={label}
                    animate={{ y: [0, index % 2 ? 8 : -8, 0] }}
                    transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                    className="relative min-h-40 rounded-[22px] border border-white/12 bg-white/[0.08] p-5 backdrop-blur"
                  >
                    <div className="grid size-12 place-items-center rounded-2xl bg-medical-blue text-white">
                      <Icon size={22} />
                    </div>
                    <p className="mt-8 text-xl font-black">{label}</p>
                    <div className="mt-4 h-2 w-24 rounded-full bg-white/20">
                      <div className="h-full w-2/3 rounded-full bg-medical-blue" />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="relative mt-5 rounded-[22px] border border-white/12 bg-medical-navy/60 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-medical-blue">Response channel</p>
                <p className="mt-3 text-2xl font-black">Direct quote coordination</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
